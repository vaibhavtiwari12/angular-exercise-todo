import { Action } from '@ngrx/store';
import { taskItem } from '../reducers/model/task.model';

export enum TaskActionTypes {
    LOAD_TASK = '[TASKS] Load TASKS',
    LOAD_TASK_SUCCESS = '[TASKS] Load TASKS Success',
    LOAD_TASK_FAILURE = '[TASKS] Load TASKS Failure',
    ADD_TASK = '[TASKS] Add TASK',
    ADD_TASK_SUCCESS = '[TASKS] Add TASK Success',
    ADD_TASK_FAILURE = '[TASKS] Add TASK Failure',
    DELETE_TASK = '[TASKS] Delete TASK',
    DELETE_TASK_SUCCESS = '[TASKS] Delete TASK Success',
    DELETE_TASK_FAILURE = '[TASKS] Delete TASK Failure'
  }

  export class LoadTaskAction implements Action {
    readonly type = TaskActionTypes.LOAD_TASK
  }
  export class LoadTaskSuccessAction implements Action {
    readonly type = TaskActionTypes.LOAD_TASK_SUCCESS
    constructor(public payload: taskItem[]) {}

  }
  export class LoadTaskFailureAction implements Action {
    readonly type = TaskActionTypes.LOAD_TASK_FAILURE

    constructor(public payload: Error) {}
  }

  export class AddTaskAction implements Action {
    readonly type = TaskActionTypes.ADD_TASK

    constructor(public payload: object) { }
  }
  export class AddTaskSuccessAction implements Action {
    readonly type = TaskActionTypes.ADD_TASK_SUCCESS

    constructor(public payload: object) { }
  }
  export class AddTaskFailureAction implements Action {
    readonly type = TaskActionTypes.ADD_TASK_FAILURE

    constructor(public payload: Error) { }
  }

  export class DeleteTaskAction implements Action {
    readonly type = TaskActionTypes.DELETE_TASK

    constructor(public payload: string) { }
  }

  export class DeleteTaskSuccessAction implements Action {
    readonly type = TaskActionTypes.DELETE_TASK_SUCCESS

    constructor(public payload: string) { }
  }
  export class DeleteTaskFailureAction implements Action {
    readonly type = TaskActionTypes.DELETE_TASK_FAILURE

    constructor(public payload: string) { }
  }

  export type taskAction = AddTaskAction |
    AddTaskSuccessAction |
    AddTaskFailureAction |
    DeleteTaskAction |
    DeleteTaskSuccessAction |
    DeleteTaskFailureAction |
    LoadTaskAction |
    LoadTaskFailureAction |
    LoadTaskSuccessAction