import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'searchfilter'
})
export class SearchfilterPipe implements PipeTransform {


  transform(allEvents: any[], field: string, value: string): any[] {
    
    if(value.length === 0) return allEvents;

    return allEvents.filter(it => it[field] == value);
  }

}
