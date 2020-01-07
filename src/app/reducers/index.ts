import { ActionReducerMap, MetaReducer } from "@ngrx/store";
import { environment } from "../../environments/environment";
import * as fromTasks from "./task/task.reducer";

export interface State {
  [fromTasks.tasksFeatureKey]: fromTasks.State;
}

export const reducers: ActionReducerMap<State> = {
  [fromTasks.tasksFeatureKey]: fromTasks.reducer
};

export const metaReducers: MetaReducer<State>[] = !environment.production
  ? []
  : [];
