import { Component, OnInit } from '@angular/core';
import { Store, select } from '@ngrx/store';
import { Observable } from 'rxjs';
import { take } from 'rxjs/internal/operators';
import { State } from './reducers/task/task.reducer';
import { taskItem } from './reducers/model/task.model';
import { LoadTaskAction, AddTaskAction, DeleteTaskAction } from './Actions/task.actions';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  constructor(private store: Store<State>) {

  }
  taskListWork;
  taskListPersonal;
  title = 'angular-exercise';
  task = {};

  onSubmit() {
    console.log("Task : ", this.task);
    this.addItem();
  }

  ngOnInit() {
    this.store.dispatch(new LoadTaskAction());
    this.store.pipe(select(store => store)).subscribe(
      s => {
        this.taskListWork = s.tasks.list.filter(task => {
          console.log("Task", task);
          return task.label === "work"})

        this.taskListPersonal = s.tasks.list.filter(task => task.label !== "work")
        /* this.taskListprofessional = s */
        console.log("work",this.taskListWork);
        console.log("perosnal",this.taskListPersonal);
      }
    );
  }

  addItem() {
    this.store.dispatch(new AddTaskAction(this.task));
    this.task = {};
  }
  deleteItem(title) {
    this.store.dispatch(new DeleteTaskAction(title));
  }

}
