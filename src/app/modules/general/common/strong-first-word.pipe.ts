import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'strongFirstWord'
})
export class StrongFirstWordPipe implements PipeTransform {

  constructor() {}

 public transform(value: any) {
   const parts: string[] = value.toString().split(' ');
   if (parts.length > 0) {
    parts[0] = '<strong>' + parts[0] + '</strong>';
    return parts.join(' ');
   } else {
    return value;
   }
  }
}
