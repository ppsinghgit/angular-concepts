import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { ParentDataComponent } from './child-to-parent/parent-data/parent-data.component';
import { ChildDataComponent } from './child-to-parent/child-data/child-data.component';
import { DataBindComponent } from './data-binding.component';
import { ChildToParentModule } from './child-to-parent/child-to-parent.module';
import { ParentInfoComponent } from './parent-to-child/parent-info/parent-info.component';
import { ParentToChildModule } from './parent-to-child/parent-to-child.module';
const routes: Routes = [
  {
    path: '', component: DataBindComponent, children: [
      {
        path: 'childToParent', component: ParentDataComponent,
      },
      {
        path: 'parentToChild', component: ParentInfoComponent
      }
    ]
  }
]

@NgModule({
  declarations: [
    DataBindComponent,
  ],
  imports: [
    RouterModule.forChild(routes),
    CommonModule,
    ChildToParentModule,
    ParentToChildModule
  ],
  exports: [RouterModule]

})
export class DataBindingModule { }
