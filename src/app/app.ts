import { Component, signal } from '@angular/core';
import { StepCounter } from "./step-counter/step-counter";

@Component({
  selector: 'app-root',
  imports: [ StepCounter],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  
}
