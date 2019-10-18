import { Component, OnInit, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  collapsed = true;
  @Output() feature = new EventEmitter<string>();
  constructor() { }

  ngOnInit() {
  }

  onSelected(feature: string) {
    this.feature.emit(feature);
  }
}