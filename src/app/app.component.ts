import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  showNavBar:boolean=false
  currentTab=1
  scroll(el: HTMLElement,currenttab:number) {
    this.currentTab=currenttab
    this.showNavBar=!this.showNavBar
    el.scrollIntoView();
}
}
