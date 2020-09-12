import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { ParentDataComponent } from './child-to-parent/parent-data/parent-data.component';
import { ChildDataComponent } from './child-to-parent/child-data/child-data.component';
import { DataBindComponent } from './data-bind.component';
const routes: Routes = [
  {
    path: '', component: DataBindComponent, children: [
      {
        path: 'childToParent', component: ParentDataComponent
      }
    ]
  }
]

@NgModule({
  declarations: [
    DataBindComponent,
    ParentDataComponent,
    ChildDataComponent
  ],
  imports: [
    RouterModule.forChild(routes),
    CommonModule
  ],
  exports: [RouterModule]

})
export class DataBindingModule { }
