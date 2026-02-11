import { Component, computed, signal } from '@angular/core';
import { StepControls } from "./step-controls/step-controls";
import { StepHistory } from "./step-history/step-history";
import { HighliteMilestone } from '../directives/highlite-milestone';

@Component({
  selector: 'app-step-counter',
  imports: [StepControls, StepHistory, HighliteMilestone],
  templateUrl: './step-counter.html',
  styleUrl: './step-counter.css',
})
export class StepCounter {
  stepCounter = signal<number>(0);
  showHistory = signal(true);
  stepHistory = computed(() =>
    Array.from({ length: this.stepCounter() }, (_, i) => i + 1)
  );
  increaseCounter() {
    this.stepCounter.update((c) => c + 1)
  }
  decreaseCounter() {
    this.stepCounter.update((c) => c > 0 ? c - 1 : 0);
  }
  resetCounter() {
    this.stepCounter.set(0);
  }
  toggleHistory(){
    this.showHistory.update(v=>!v);
  }
}
