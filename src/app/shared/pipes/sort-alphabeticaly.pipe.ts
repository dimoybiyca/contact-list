import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'sortAlphabetically',
  standalone: true,
})
export class SortAlphabeticallyPipe implements PipeTransform {
  transform(value: any[], fieldName: string): any[] {
    if (!Array.isArray(value) || !fieldName) {
      return value;
    }

    return value.sort((a, b) => {
      const fieldValueA = a[fieldName].toLowerCase();
      const fieldValueB = b[fieldName].toLowerCase();
      if (fieldValueA < fieldValueB) {
        return -1;
      }
      if (fieldValueA > fieldValueB) {
        return 1;
      }
      return 0;
    });
  }
}
