import { Pipe, PipeTransform } from '@angular/core';
@Pipe({
  name: 'search'
})
export class SearchPipe implements PipeTransform {
  transform(items: any[], searchText: string) {
    if(!items) return [];
    if(!searchText) return items;
        searchText = searchText.toLowerCase();
        if (items) {
           items.filter(entry => {
                if(entry) { 
                    return entry;
                }
                else if(entry.data){

                }
            });
        }
    }
}