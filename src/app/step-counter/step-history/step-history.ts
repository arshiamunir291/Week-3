import { Component, input } from '@angular/core';
import { StepInfoPipe } from "../../pipes/step-info-pipe";

@Component({
  selector: 'app-step-history',
  imports: [StepInfoPipe],
  templateUrl: './step-history.html',
  styleUrl: './step-history.css',
})
export class StepHistory {
stepHistorySignal=input<number[]>();
}
