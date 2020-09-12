import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-child-info',
  templateUrl: './child-info.component.html',
  styleUrls: ['./child-info.component.css']
})
export class ChildInfoComponent implements OnInit {
  didVote: boolean = false;
  @Output() afterVote = new EventEmitter<String>();
  constructor() { }

  ngOnInit(): void {
  }

  vote(value: string): void {
    this.didVote = true;
    this.afterVote.emit(value);
  }
}
