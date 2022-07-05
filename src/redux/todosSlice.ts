import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

export interface TodoType {
  id: number;
  text: string;
  isComplete: boolean;
  description: string;
}

interface InitalType {
  entities: TodoType[];
}

const initialState: InitalType = {
  entities: [],
};

export const getTodos = createAsyncThunk("todos/getTodos", async () => {
  return fetch("http://localhost:5000/todos").then((res) => res.json());
});

export const todosSlice = createSlice({
  name: "todos",
  initialState,
  reducers: {
    create: (state, action) => {
      const data = {
        id: Date.now(),
        text: action.payload.text,
        description: action.payload.description,
        isComplete: false,
      };
      state.entities.push(data);
    },
    toggleComplete: (state, action) => {
      const { id } = action.payload;
      state.entities.map((todo) => {
        if (todo.id === id) {
          todo.isComplete = !todo.isComplete;
        }
        return todo;
      });
    },
    remove: (state, action) => {
      const { id } = action.payload;
      state.entities = state.entities.filter((todo) => todo.id !== id);
    },
  },
  extraReducers: (builder) => {
    builder.addCase(getTodos.fulfilled, (state, action) => {
      state.entities = action.payload;
    });
  },
});

export default todosSlice;
