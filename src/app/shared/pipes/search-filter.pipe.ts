import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'searchBy',
})
export class SearchFilterPipe implements PipeTransform {
  transform(value: any, ...args: any[]): any {
    if (value) {
      value.filter((x: any) => x.name === args[0]);
    }
  }
}
