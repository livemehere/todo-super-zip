import { createSlice } from "@reduxjs/toolkit";

export interface TodoType {
  id: number;
  text: string;
  isComplete: boolean;
  description: string;
}

const initialState = {
  entities: [
    { id: 1, text: "todo1", description: "내용...1", isComplete: false },
    { id: 2, text: "todo2", description: "내용...2", isComplete: true },
    { id: 3, text: "todo3", description: "내용...3", isComplete: false },
  ],
};

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
});

export default todosSlice;
