import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'licky-lick-app-widget-drop-box',
  templateUrl: './lick-app-widget-drop-box.component.html',
  styleUrls: ['./lick-app-widget-drop-box.component.css']
})
export class LickAppWidgetDropBoxComponent implements OnInit {

  @Input() data;
  
  @Output() deleteEvent = new EventEmitter();
  @Output() detectFileEvent = new EventEmitter();

  
  @Input() selectedFiles: FileList;

  constructor() { }

  ngOnInit(): void {
  }

  onDelete() {
    // this.selectedFiles = null;
    this.deleteEvent.emit();
  }

  onDetectFiles(e) {
    // this.selectedFiles = e.target.files;
    this.detectFileEvent.emit(e);
  }


}
