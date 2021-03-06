import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-child-data',
  templateUrl: './child-data.component.html',
  styleUrls: ['./child-data.component.css']
})
export class ChildDataComponent implements OnInit {

  @Input() departmentName: string;
  @Input('personDetails') person: any;
  constructor() { }

  ngOnInit(): void {
  }

  updatePersonInfoFromChild(): void {
    alert('This is the method of child component. This is created to demostrated the # reference variable.');
  }

}
