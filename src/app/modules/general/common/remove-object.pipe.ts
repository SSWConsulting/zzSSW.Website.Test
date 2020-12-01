import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'removeObject'
})
export class RemoveObjectPipe implements PipeTransform {

  constructor() {}

  public transform(value: any) {
    return value.toString().replace(/<\s*object[^>]*>(.*?)<\s*\/\s*object>/g, '[Unknown Embedded Content]');
   }
 }
