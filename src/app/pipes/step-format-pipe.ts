import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'stepFormat',
})
export class StepFormatPipe implements PipeTransform {

  transform(value: unknown, ...args: unknown[]): unknown {
    return null;
  }

}
