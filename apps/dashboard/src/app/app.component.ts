import { Component } from '@angular/core';
@Component({
  selector: 'med-manager-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title= 'Medications';
  links= [
    {path: '', icon: 'home', title: 'Home'},
    {path: 'meds', icon: 'view_list', title: 'Medications'}
  ]
}
