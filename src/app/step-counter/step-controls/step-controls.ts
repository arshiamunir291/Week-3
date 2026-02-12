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
  dailyGoal = signal(20);
  progressPercentage = computed(() => {
    const percent = (this.stepCount() / this.dailyGoal()) * 100;
    return Math.min(percent, 100);
  })
}


