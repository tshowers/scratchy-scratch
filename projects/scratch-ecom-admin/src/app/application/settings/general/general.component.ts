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

  constructor() { }

  ngOnInit(): void {
  }

}
