import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-general',
  templateUrl: './general.component.html',
  styleUrls: ['./general.component.css']
})
export class GeneralComponent implements OnInit {

  feedback: boolean = true;
  help: boolean = false;
  dashboard: boolean = true;
  news: boolean = true;
  columnView: boolean = false;
  history: boolean = false;
  displayName: string;
  emailAddress: string;
  image: string;
  verified: string;

  constructor() { }

  ngOnInit(): void {
  }

}
