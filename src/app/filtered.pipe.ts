import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filtered',
  standalone: false
})
export class FilteredPipe implements PipeTransform {

  transform(value: any, ...args: string[]): any {
    const filteredString = args[0]
    const searchParam = args[1]
    const resultArray = []


    if (value.length === 0 || filteredString === '') {
      return value
    }


    for (const item of value) {
      if (item[searchParam].toLowerCase().startsWith(filteredString)) {
        resultArray.push(item)
      }
    }
    return resultArray;
  }

}
