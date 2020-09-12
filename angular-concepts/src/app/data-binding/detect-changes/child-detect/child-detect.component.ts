import { Component, Input, OnChanges, OnInit, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-child-detect',
  templateUrl: './child-detect.component.html',
  styleUrls: ['./child-detect.component.css']
})
export class ChildDetectComponent implements OnInit, OnChanges {
  @Input() count: number;
  currentValue: string;
  previousValue: string;
  firstChange: boolean = false;
  constructor() { }

  ngOnInit(): void {
  }

  ngOnChanges(changes: SimpleChanges) {
    console.log(JSON.stringify(changes));
    this.currentValue = changes.count.currentValue;
    this.previousValue = changes.count.previousValue;
    this.firstChange = changes.count.firstChange;
  }
}
