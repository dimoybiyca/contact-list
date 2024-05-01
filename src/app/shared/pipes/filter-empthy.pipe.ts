import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filterEmpty',
  standalone: true,
})
export class FilterEmptyPipe implements PipeTransform {
  transform(value: any[], fieldName: string): any[] {
    if (!Array.isArray(value) || !fieldName) {
      return value;
    }

    return value.filter((item) => !!item[fieldName]);
  }
}
