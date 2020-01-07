import { Action, createReducer } from "@ngrx/store";

export const tasksFeatureKey = "tasks";

export interface State {
  tasksList: Array<object>;
}

export const initialState: State = {
  tasksList: []
};

const tasksReducer = createReducer(initialState);

export function reducer(state: State | undefined, action: Action) {
  return tasksReducer(state, action);
}
