import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-parent-info',
  templateUrl: './parent-info.component.html',
  styleUrls: ['./parent-info.component.css']
})
export class ParentInfoComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  onVote(toWhichParty: string) {
    alert('To this party: ' + toWhichParty);
  }
}
