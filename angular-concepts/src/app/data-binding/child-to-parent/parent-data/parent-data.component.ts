import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-parent-data',
  templateUrl: './parent-data.component.html',
  styleUrls: ['./parent-data.component.css']
})
export class ParentDataComponent implements OnInit {
  person: any;
  personData = {
    name: 'Parminder Pal Singh',
    city: 'Jalandhar, Toronto',
    phone: 99885457
  }
  get departmentName(): string { return this._departmentName; }
  _departmentName: string = "PPS";
  constructor() { }

  ngOnInit(): void {
    this.person = this.personData;
  }

}
