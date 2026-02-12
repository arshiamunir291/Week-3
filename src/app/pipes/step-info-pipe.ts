import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'stepInfo',
  standalone:true,
})
export class StepInfoPipe implements PipeTransform {

  transform(step: number): string {
    if(!step) return '';
    return step===1?'Step':'Steps';
 
  }

}
