import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  styleUrl: './app.component.scss',
  template: `
      <h1>Hello Angular</h1>
      <button (click)="showOrHide()">
        {{ buttonName }}
      </button>

      @if(flag){
        <h2>Hello React?</h2>
      }@else {
        <h2>I am from Angular</h2>
      }
  `
})
export class AppComponent {
  flag = true;
  buttonName = 'Show Angular';

  showOrHide(){
    this.flag = !this.flag;
    if (!this.flag) {
      this.buttonName = 'Show React';
    }else{
      this.buttonName = 'Show Angular';
    }
  }
}
