import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { ParentDataComponent } from './child-to-parent/parent-data/parent-data.component';
import { DataBindComponent } from './data-binding.component';
import { ChildToParentModule } from './child-to-parent/child-to-parent.module';
import { ParentInfoComponent } from './parent-to-child/parent-info/parent-info.component';
import { ParentToChildModule } from './parent-to-child/parent-to-child.module';
import { ParentDetectComponent } from './detect-changes/parent-detect/parent-detect.component';
import { DetectChangesModule } from './detect-changes/detect-changes.module';
const routes: Routes = [
  {
    path: '', component: DataBindComponent, children: [
      {
        path: 'childToParent', component: ParentDataComponent,
      },
      {
        path: 'parentToChild', component: ParentInfoComponent
      },
      {
        path: 'detectChanges', component: ParentDetectComponent
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
    ParentToChildModule,
    DetectChangesModule
  ],
  exports: [RouterModule]

})
export class DataBindingModule { }
