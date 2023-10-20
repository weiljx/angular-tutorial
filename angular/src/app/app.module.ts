import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DemoPageComponent } from './pages/demo-page/demo-page.component';
import { InfoPageComponent } from './pages/info-page/info-page.component';
import { TaskComponent } from './components/task/task.component';
import { TaskListComponent } from './components/task-list/task-list.component';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { OnEnterDirective } from './directives/on-enter.directive';

@NgModule({
  declarations: [
    AppComponent,
    DemoPageComponent,
    InfoPageComponent,
    TaskComponent,
    TaskListComponent,
    OnEnterDirective
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    CommonModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
