import { Component, input } from '@angular/core';

@Component({
  selector: 'app-step-history',
  imports: [],
  templateUrl: './step-history.html',
  styleUrl: './step-history.css',
})
export class StepHistory {
stepHistorySignal=input<number[]>();
}
