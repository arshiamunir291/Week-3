import { Component, computed, signal,effect } from '@angular/core';
import { StepControls } from "./step-controls/step-controls";
import { StepHistory } from "./step-history/step-history";
import { HighliteMilestone } from '../directives/highlite-milestone';
import { Toggle } from '../directives/toggle';
import { StepInfoPipe } from '../pipes/step-info-pipe';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';

@Component({
  selector: 'app-step-counter',
  imports: [StepControls, StepHistory, HighliteMilestone,Toggle,StepInfoPipe,ReactiveFormsModule],
  templateUrl: './step-counter.html',
  styleUrl: './step-counter.css',
})
export class StepCounter {
  stepCounter = signal<number>(0);
  showHistory = signal(false);
  dailyGoal=signal<number>(0);
  dailyGoalForm=new FormGroup({
  dailyGoal:new FormControl('',[Validators.required,Validators.min(1),Validators.pattern(/^[0-9]+$/)]),
  })
  stepHistory = computed(() =>
    Array.from({ length: this.stepCounter() }, (_, i) => i + 1)
  );
  increaseCounter() {
    const goal=this.dailyGoal();
    const step=this.stepCounter();
    if(!goal) return;
    if(step+1 >= goal){
      this.stepCounter.set(0);
    }else{
      this.stepCounter.set(step+1);
    }
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
  setDailyGoal(value:number){
    if(!isNaN(value) && value>0){
      this.dailyGoal.set(value);
    }
  }
  onsubmit(){
    const value=this.dailyGoalForm.get('dailyGoal')?.value ;
    this.setDailyGoal(Number(value));
    this.dailyGoalForm.reset()
  }
}
  