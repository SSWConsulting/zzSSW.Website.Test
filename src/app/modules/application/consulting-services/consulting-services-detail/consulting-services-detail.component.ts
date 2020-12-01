import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ConsultingService } from 'src/app/models/consulting_service';
import { EmbedYoutube } from 'src/app/models/embed_youtube';
import { ItemResponses, IDeliveryClient, DeliveryClient, TypeResolver } from '@kentico/kontent-delivery';

import { trigger, state, style, animate, transition } from '@angular/animations';
import { TestimonialTile } from 'src/app/models/testimonial_tile';
import { TechnologiesDetailComponent } from 'src/app/modules/general/technologies/technologies-detail/technologies-detail.component';
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

  public consultingService?: ItemResponses.ViewContentItemResponse<ConsultingService>;
  private readonly deliveryClient: IDeliveryClient;
  private id: string;


  isOut = true;

  toggle() {
    this.isOut = !this.isOut;
  }

  constructor(private route: ActivatedRoute) {
    this.deliveryClient = new DeliveryClient({
      projectId: 'c8c27f8d-758d-0020-22c5-e689f5973608',
      typeResolvers: [
        new TypeResolver('consulting_service', () => new ConsultingService()),
        new TypeResolver('embed_youtube', () => new EmbedYoutube()),
        new TypeResolver('testimonial_tile', () => new TestimonialTile()),
        new TypeResolver('technology_tile', () => new TechnologyTile()),
        new TypeResolver('benefits_list', () => new BenefitsList()),
        new TypeResolver('benefit_tile', () => new BenefitTile())
      ]
    });
  }

  ngOnInit() {
    this.route.params.subscribe(
      (params: {id: string}) => {
        this.id = params.id;
        this.deliveryClient.item<ConsultingService>(this.id).depthParameter(2).toObservable().subscribe(
          response => {
            this.consultingService = response;
          }
        );
      }
    );
  }
}
