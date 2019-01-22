import { Component } from '@angular/core';

@Component({
  selector: 'jad-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  luke = {name: 'Luke', isJedi:'true', temple:'Agua Fria Templo'};
  leia = {name: 'Han', isJedi:'true', temple:'Casa Amarela Templo'};
  han = {name: 'Leia', isJedi:'false'};
}
