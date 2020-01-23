import { Action, createReducer } from "@ngrx/store";
import { TaskActionTypes, taskAction } from 'src/app/Actions/task.actions';
import { taskItem } from '../model/task.model';

export const tasksFeatureKey = "tasks";
export const GET_TASK = "GET_TASK";
export const GET_TASK_SUCCESS = "GET_TASK_SUCCESS";
export const GET_TASK_ERROR = "GET_TASK_ERROR";
export const ADD_TASK = 'ADD_TASK';
export const ADD_TASK_SUCCESS = "ADD_TASK_SUCCESS";
export const ADD_TASK_ERROR = "ADD_TASK_ERROR";

export interface State {
  tasksList: taskItem[];
  list: taskItem[];
  loading: boolean;
  error: Error;
}

export const initialState: State = {
  tasksList: [],
  list:[],
  loading: false,
  error: undefined
};

const tasksReducer = createReducer(initialState);

export function TaskReducer(state: State = initialState, action: taskAction) {
  switch (action.type) {
    case TaskActionTypes.LOAD_TASK:
      return {
        ...state,
        loading: true
      }
    case TaskActionTypes.LOAD_TASK_SUCCESS:
      console.log("action.payload", action.payload);
      return {
        ...state,
        list: action.payload,
        loading: false
      }

    case TaskActionTypes.LOAD_TASK_FAILURE:
      return {
        ...state,
        error: action.payload,
        loading: false
      }

    case TaskActionTypes.ADD_TASK:
      return {
        ...state,
        loading: true
      }
    case TaskActionTypes.ADD_TASK_SUCCESS:
      return {
        ...state,
        list: [...state.list, action.payload],
        loading: false
      };
    case TaskActionTypes.ADD_TASK_FAILURE:
      return {
        ...state,
        error: action.payload,
        loading: false
      };
    case TaskActionTypes.DELETE_TASK:
      return {
        ...state,
        loading: true
      };
    case TaskActionTypes.DELETE_TASK_SUCCESS:
      return {
        ...state,
        list:state.list.filter(item => item.title !== action.payload),
        loading: false
      }
    case TaskActionTypes.DELETE_TASK_FAILURE:
      return {
        ...state,
        error: action.payload,
        loading: false
      };
    default:
      return state;
  }
}

