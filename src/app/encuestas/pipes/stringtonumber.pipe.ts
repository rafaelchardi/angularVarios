import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'stringtonumber'
})
export class StringtonumberPipe implements PipeTransform {

  transform(value: string ): number {
    return Number(value);
  }

}
