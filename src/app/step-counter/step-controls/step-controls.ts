import { Component, input, output, signal, computed } from '@angular/core';
import { DecimalPipe } from '@angular/common';

@Component({
  selector: 'app-step-controls',
  imports:[ DecimalPipe],
  templateUrl: './step-controls.html',
  styleUrl: './step-controls.css',
})
export class StepControls {
  stepCount = input<number>(0);
  increase = output<void>();
  decrease = output<void>();
  reset = output<void>();
  showHistory=output<void>();
  dailyGoal = input<number>();
  progressPercentage = computed(() => {
    if(!this.dailyGoal()) return 0;
    const percent = (this.stepCount() /this.dailyGoal()!) * 100;
    return Math.min(percent, 100);
  })
}


