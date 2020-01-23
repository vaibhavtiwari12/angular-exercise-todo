import { Injectable } from '@angular/core';
import { Observable, from, of } from 'rxjs';
import { delay , concatMap } from 'rxjs/internal/operators';
import { taskItem } from '../reducers/model/task.model';


@Injectable()
export class TaskService {

    todos: taskItem[] = [
        { title: "Task 1", description: "high priority", label: "work", labelSub:"Food" },
        { title: "Task 2", description: "high priority", label: "work", labelSub:"Travel" },
        { title: "Task 3", description: "high priority", label: "personal", labelSub:"rent" },
        { title: "Task 4", description: "high priority", label: "personal", labelSub:"groceries" },
    ];
    getTodos(): Observable<taskItem[]>{

        return  of(this.todos).pipe(
            delay(500)
          );
    }

     addTodo( data ) {
         return  of(this.todos).pipe(
            delay(500)
          );
     }

}