import { computed, Directive, Signal, signal } from '@angular/core';

@Directive({
  selector: '[stepHighlight]',
  inputs: ['stepHighlight'],
  standalone: true,
  host: {
    '[style.backgroundColor]': 'backgroundColor()',
    '[innerText]': 'milestoneText()'
  }
})
export class HighliteMilestone {

  stepHighlight!: Signal<number>;

  backgroundColor = computed(() => {
    const step = this.stepHighlight();
    if (step <= 5) return 'lightblue';
    if (step <= 10) return 'lightgreen';
    if (step <= 15) return 'orange';
    return 'lightcoral';
  })
  milestoneText = computed(() => {
    const step = this.stepHighlight();
    if (step <= 5) return 'Beginner';
    if (step <= 10) return 'Active Walker';
    if (step <= 15) return 'Pro Walker';
    return 'Marathon Mode';
  });



}
