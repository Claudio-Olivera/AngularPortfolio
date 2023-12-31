
import { Pipe, PipeTransform } from '@angular/core';

@Pipe({ name: 'split', standalone:true })
export class SplitPipe implements PipeTransform {
  transform(value: string, separator: string): string {
    return value.split(separator)[0].trim();
  }
}
