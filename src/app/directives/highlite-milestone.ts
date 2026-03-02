import { computed, Directive, Signal, } from '@angular/core';

@Directive({
  selector: '[stepHighlight]',
  inputs: ['stepHighlight','dailyGoal'],
  standalone: true,
  host: {
    '[style.backgroundColor]': 'backgroundColor()',
    '[innerText]': 'milestoneText()'
  }
})
export class HighliteMilestone {

  stepHighlight!: Signal<number>;
  dailyGoal!:Signal<number>;

  private percentage=computed(()=>{
    const steps=this.stepHighlight?.()??0;
    const goal=this.dailyGoal?.()??1;
    if(goal===0) return 0;
    return Math.min((steps/goal)*100,100);
  })

  backgroundColor = computed(() => {
    const percent = this.percentage();
    if (percent ===0) return 'red';
    if (percent <= 25) return 'lightblue';
    if (percent <= 50) return 'lightgreen';
    if (percent <= 75) return 'orange';
    return 'lightcoral';
  })
  milestoneText = computed(() => {
    const percent = this.percentage();
    if (percent ===0) return 'Start';
    if (percent <= 25) return 'Beginner';
    if (percent <= 50) return 'Active Walker';
    if (percent <= 75) return 'Pro Walker';
    return 'Marathon Mode';
  });
}
