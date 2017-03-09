import { Component } from '@angular/core';

@Component({
  selector: 'app-hola-mundo',
  template: '<h1>Hello {{nombre}}!</h1>',
  styleUrls: ['./hola-mundo.component.css']
})
export class HolaMundoComponent {
    nombre = "Borja";
 }
