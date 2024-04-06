import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';

import { AddTaskRoutingModule } from './add-task-routing.module';
import { AddTaskComponent } from './add-task.component';
import { NgMultiSelectDropDownModule } from 'ng-multiselect-dropdown';

@NgModule({
  declarations: [
    AddTaskComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    AddTaskRoutingModule,
    ReactiveFormsModule,
    NgMultiSelectDropDownModule.forRoot()
  ]
})
export class AddTaskModule { }
