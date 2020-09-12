import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { ParentDataComponent } from './parent-data/parent-data.component';
import { ChildDataComponent } from './child-data/child-data.component';

@NgModule({
  declarations: [
    ParentDataComponent,
    ChildDataComponent
  ],
})
export class ChildToParentModule { }
