import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ParentDetectComponent } from './parent-detect/parent-detect.component';
import { ChildDetectComponent } from './child-detect/child-detect.component';



@NgModule({
  declarations: [ParentDetectComponent, ChildDetectComponent],
  imports: [
    CommonModule
  ]
})
export class DetectChangesModule { }
