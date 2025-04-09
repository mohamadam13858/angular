import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filtered',
  standalone: false
})
export class FilteredPipe implements PipeTransform {

  transform(value: any, filteredString: string): any {
    if (value.length === 0 || filteredString === '') {
      return value
    }

    const resultArray = []

    for (const item of value) {
      if (item["status"] === filteredString) {
        resultArray.push(item)
      }
    }
    return resultArray;
  }

}
