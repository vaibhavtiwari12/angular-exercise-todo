import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { StoreModule } from "@ngrx/store";
import { EffectsModule } from "@ngrx/effects";
import { StoreDevtoolsModule } from "@ngrx/store-devtools";
import { FormsModule }   from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { environment } from "../environments/environment";
import { AppComponent } from "./app.component";
import { TaskReducer } from "./reducers/task/task.reducer";
import Effects from "./effects/index";
import { TaskService } from './service/task.service';

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    StoreModule.forRoot({tasks: TaskReducer}),
    EffectsModule.forRoot(Effects),
    StoreDevtoolsModule.instrument({
      maxAge: 25, // Retains last 25 states
      logOnly: environment.production // Restrict extension to log-only mode
    }),
    FormsModule,
    HttpClientModule
  ],
  providers: [TaskService],
  bootstrap: [AppComponent]
})
export class AppModule {}
