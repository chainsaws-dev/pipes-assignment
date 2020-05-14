import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'sortarray',
  pure: false
})
export class SortarrayPipe implements PipeTransform {

  transform(value: Array<any>, SortPropertyName: string, direction_forward: boolean): unknown {
    const lambdasort = (a, b) => {

      const alower = a[SortPropertyName].toLowerCase();
      const blower = b[SortPropertyName].toLowerCase();

      if (alower < blower) {
        return -1;
      }

      if (alower > blower) {
        return 1;
      }

      return 0;
    };

    if (direction_forward) {
      return value.sort(lambdasort);
    } else {
      return value.sort(lambdasort).reverse();
    }


  }

}
