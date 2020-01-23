import { Injectable } from "@angular/core";
import { Actions, Effect, ofType } from "@ngrx/effects";
import { mergeMap, catchError, map } from 'rxjs/internal/operators';
import { of } from 'rxjs';
import { LoadTaskAction, TaskActionTypes, LoadTaskSuccessAction, LoadTaskFailureAction, AddTaskAction, AddTaskSuccessAction, AddTaskFailureAction, DeleteTaskAction, DeleteTaskSuccessAction, DeleteTaskFailureAction } from 'src/app/Actions/task.actions';
import {TaskService} from '../../service/task.service';

@Injectable()
export class TasksEffects {
  constructor(private actions$: Actions, private taskService: TaskService) {

  }
  taskData = []
  @Effect() loadTask$ = this.actions$
  .pipe(
    ofType<LoadTaskAction>(TaskActionTypes.LOAD_TASK),
    mergeMap(
      () => this.taskService.getTodos()
        .pipe(
          map(data => new LoadTaskSuccessAction(data)),
          catchError(error => of(new LoadTaskFailureAction(error)))
        )
    ),
)

@Effect() addShoppingItem$ = this.actions$
  .pipe(
    ofType<AddTaskAction>(TaskActionTypes.ADD_TASK),
    mergeMap(
      (data) => this.taskService.addTodo(data.payload)
        .pipe(
          map(() => new AddTaskSuccessAction(data.payload)),
          catchError(error => of(new AddTaskFailureAction(error)))
        )
    )
)

@Effect() deleteShoppingItem$ = this.actions$
  .pipe(
    ofType<DeleteTaskAction>(TaskActionTypes.DELETE_TASK),
    mergeMap(
      (data) => this.taskService.getTodos()
        .pipe(
          map(() => new DeleteTaskSuccessAction(data.payload)),
          catchError(error => of(new DeleteTaskFailureAction(error)))
        )
    )
  )
}
