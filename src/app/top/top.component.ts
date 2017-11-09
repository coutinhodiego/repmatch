import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-top',
  templateUrl: './top.component.html',
  styleUrls: ['./top.component.scss']
})
export class TopComponent implements OnInit {

  constructor() {

  }

  ngOnInit() {
  }

}

let shiftWindow = function() { scrollBy(0, -60); };
if (location.hash) shiftWindow();
window.addEventListener('hashchange', shiftWindow);
