import { Component, computed, signal } from '@angular/core';
import { StepControls } from "./step-controls/step-controls";
import { StepHistory } from "./step-history/step-history";
import { HighliteMilestone } from '../directives/highlite-milestone';
import { Toggle } from '../directives/toggle';
import { StepInfoPipe } from '../pipes/step-info-pipe';

@Component({
  selector: 'app-step-counter',
  imports: [StepControls, StepHistory, HighliteMilestone,Toggle,StepInfoPipe],
  templateUrl: './step-counter.html',
  styleUrl: './step-counter.css',
})
export class StepCounter {
  stepCounter = signal<number>(0);
  showHistory = signal(false);

  stepHistory = computed(() =>
    Array.from({ length: this.stepCounter() }, (_, i) => i + 1)
  );
  
  stepLabel=computed(()=>{
    const value=this.stepCounter();
    return value ===1? 'Step':'Steps';
  });

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
  