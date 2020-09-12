import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-parent-detect',
  templateUrl: './parent-detect.component.html',
  styleUrls: ['./parent-detect.component.css']
})
export class ParentDetectComponent implements OnInit {
  count: number = 0;
  constructor() { }

  ngOnInit(): void {
  }

  changeValue() {
    this.count++;
  }

}
