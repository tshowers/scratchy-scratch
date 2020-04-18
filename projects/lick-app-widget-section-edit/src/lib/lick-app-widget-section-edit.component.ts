import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';
import { Section } from 'lick-data';
import * as ClassicEditor from '@ckeditor/ckeditor5-build-classic';

@Component({
  selector: 'licky-lick-app-widget-section-edit',
  templateUrl: './lick-app-widget-section-edit.component.html',
  styles: []
})
export class LickAppWidgetSectionEditComponent implements OnInit {

  section: Section = new Section();
  @Input() data: any;
  public sectionEditor = ClassicEditor;

  constructor() { }

  ngOnInit(): void {
  }

  newSection(): void {
    this.data.sections.push(this.section);
    this.section = new Section();
  }

  editSection(at: number): void {
    this.section = this.data.sections[at];
    this.removeSection(at);
  }

  removeSection(at: number): void {
    this.data.sections.splice(at, 1);
  }

  modelCheck() {
    console.log("modelCheck()")
    if (this.section.name) {
      this.data.sections.push(this.section);
    }
  }

}
