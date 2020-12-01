import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'strongFirstWordH1'
})
export class StrongFirstWordH1Pipe implements PipeTransform {

  constructor() {}

  public transform(value: any) {
    return value.toString().replace(/<h1\b[^>]*>(.*?)<\/h1>/g, (match) => {
      match = match.replace('<h1>', '').replace('</h1>', '');

      const parts: string[] = match.toString().split(' ');
      if (parts.length > 0) {
        parts[0] = '<strong>' + parts[0] + '</strong>';
        return '<h1>' + parts.join(' ') + '</h1>';
      } else {
        return '<h1>' + match + '</h1>';
      }
    });
  }
}
