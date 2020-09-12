import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { ParentInfoComponent } from './parent-info/parent-info.component';
import { ChildInfoComponent } from './child-info/child-info.component';

@NgModule({
  declarations: [
    ParentInfoComponent,
    ChildInfoComponent
  ],
})
export class ParentToChildModule { }
