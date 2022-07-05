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

export const deleteTodos = createAsyncThunk(
  "todos/deleteTodos",
  async (id: number) => {
    return fetch(`http://localhost:5000/todos/${id}`, {
      method: "delete",
    }).then((res) => res.json());
  }
);

export const completeTodos = createAsyncThunk(
  "todos/completeTodos",
  async (id: number) => {
    return fetch(`http://localhost:5000/todos/${id}`, {
      method: "PATCH",
      body: JSON.stringify({ isComplete: true }),
      headers: {
        "Content-Type": "application/json",
      },
    }).then((res) => res.json());
  }
);

export const uncompleteTodos = createAsyncThunk(
  "todos/uncompleteTodos",
  async (id: number) => {
    return fetch(`http://localhost:5000/todos/${id}`, {
      method: "PATCH",
      body: JSON.stringify({ isComplete: false }),
      headers: {
        "Content-Type": "application/json",
      },
    }).then((res) => res.json());
  }
);

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
    builder.addCase(deleteTodos.fulfilled, (state, action) => {});
    builder.addCase(completeTodos.fulfilled, (state, action) => {});
    builder.addCase(uncompleteTodos.fulfilled, (state, action) => {});
  },
});

export default todosSlice;
