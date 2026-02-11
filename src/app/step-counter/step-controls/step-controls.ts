import { Component, input, output, signal, computed } from '@angular/core';
import { DecimalPipe } from '@angular/common';

@Component({
  selector: 'app-step-controls',
  imports:[ DecimalPipe],
  templateUrl: './step-controls.html',
  styleUrl: './step-controls.css',
})
export class StepControls {
  stepCounterSignal = input<number>(0);
  increaseSignal = output<void>();
  decreaseSignal = output<void>();
  resetSignal = output<void>();
  showHistorySignal=output<void>();
  dailyGoal = signal(20);
  progressPercentage = computed(() => {
    const percent = (this.stepCounterSignal() / this.dailyGoal()) * 100;
    return Math.min(percent, 100);
  })
}


