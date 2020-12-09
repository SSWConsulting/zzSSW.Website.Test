import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ConsultingService } from 'src/app/models/consulting_service';
import { ItemResponses, IDeliveryClient, DeliveryClient, TypeResolver } from '@kentico/kontent-delivery';

import { trigger, state, style, animate, transition } from '@angular/animations';
import { TestimonialTile } from 'src/app/models/testimonial_tile';
import { TechnologyTile } from 'src/app/models/technology_tile';
import { BenefitTile } from 'src/app/models/benefit_tile';
import { BenefitsList } from 'src/app/models/benefits_list';

@Component({
  selector: 'app-consulting-services-detail',
  templateUrl: './consulting-services-detail.component.html',
  styleUrls: ['./consulting-services-detail.component.scss'],
  animations: [
    trigger('inOut', [
      state('in', style({
        height: '200px',
        opacity: 0.5
      })),
      state('out', style({
        height: '100px',
        opacity: 1
      })),
      transition('in => out', [
        animate('0.5s')
      ]),
      transition('out => in', [
        animate('1s')
      ])
    ])
  ]
})

export class ConsultingServicesDetailComponent implements OnInit {

  private id: string;

  private vids: HTMLCollectionOf<Element>;

  constructor(private route: ActivatedRoute) {
  }

  ngOnInit() {
    this.initVideos();
  }

  initVideos() {
     this.vids = document.getElementsByClassName("video-player");
     for (var n = 0; n < this.vids.length; n++) {
        var div = document.createElement("div");
        div.setAttribute("data-id", this.vids[n].getAttribute("data-id"));
        div.setAttribute("data-youtuberes", this.vids[n].getAttribute("data-youtuberes"));
        
        div.innerHTML = this.labnolThumb(this.vids[n].getAttribute("data-id"), this.vids[n].getAttribute("data-youtuberes"));
        var component = this;
        // div.onclick = function(e) {
        //   component.labnolIframe(e.target);
        // }
        this.vids[n].appendChild(div);
    }
  }
  
  labnolThumb(id, youtuberes) {
    console.log(id);
    var thumb;
    // prefer vimeo over youtube if it's available
    thumb = '<img src="https://i.ytimg.com/vi/' + id + '/maxresdefault.jpg"><div class="play"></div>';
    if(youtuberes !== undefined  && youtuberes !== "" && youtuberes !== null)
        thumb = thumb.replace("maxresdefault", youtuberes);
    return thumb;
  }
  
  // labnolIframe(target: EventTarget) {
  //     var div = target as HTMLDivElement;
  //     console.log(div);
  //     var iframe = document.createElement("iframe");
  //     iframe.setAttribute("allowfullscreen", "");
  //     iframe.setAttribute("webkitallowfullscreen", "");  
  //     var embed;
  //     embed = "https://www.youtube.com/embed/" + div.getAttribute("id") + "?autoplay=1";
  //     iframe.setAttribute("src", embed);
  //     div.parentNode.replaceChild(iframe, div);
  // }  
}
