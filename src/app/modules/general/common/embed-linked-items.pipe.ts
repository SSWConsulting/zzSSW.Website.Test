import { Pipe, PipeTransform } from '@angular/core';
import { ContentItem } from '@kentico/kontent-delivery';
import { EmbedYoutube } from 'src/app/models/embed_youtube';

@Pipe({
  name: 'embedLinkedItems'
})
export class EmbedLinkedItemsPipe implements PipeTransform {

  constructor() {}

 public transform(value: any, contentItems: any) {
    for (const propertyName in contentItems) {
      if ( contentItems[propertyName] instanceof EmbedYoutube) {
        const embedYoutube = contentItems[propertyName] as EmbedYoutube;
        const findString = '<object type="application/kenticocloud" data-type="item" data-rel="component" data-codename="'
          + embedYoutube.system.codename + '"></object>';
        const replaceString = '<img class="youtube" src="https://i.ytimg.com/vi/' + embedYoutube.videoId.value
          + '/hqdefault.jpg" alt="' + embedYoutube.videoTitle.value + '">';
        // const  replaceString = '<iframe name="' + embedYoutube.videoTitle.value + '"
        // allowfullscreen="" webkitallowfullscreen="" src="https://www.youtube.com/embed/'
        //   + embedYoutube.videoId.value + '"></iframe>';
        value = value.replace(findString, replaceString);
      }
    }

    return value;
  }
}
