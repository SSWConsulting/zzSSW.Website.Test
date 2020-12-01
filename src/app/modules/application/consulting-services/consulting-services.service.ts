import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { shareReplay, map } from 'rxjs/operators';
import { AngularHttpService } from '@kentico/kontent-angular-http-service';
import { ConsultingService } from 'src/app/models/consulting_service';
import { IDeliveryClient, DeliveryClient, TypeResolver, ItemResponses } from '@kentico/kontent-delivery';

const CACHE_SIZE = 1;

@Injectable()
export class ConsultingServicesService {
  private cache$: Observable<void | ItemResponses.ListContentItemsResponse<ConsultingService>>;
  private readonly deliveryClient: IDeliveryClient;

  constructor(angularHttpService: AngularHttpService) {
    this.deliveryClient = new DeliveryClient({
      projectId: 'c8c27f8d-758d-0020-22c5-e689f5973608',
      typeResolvers: [
        new TypeResolver('consulting_service', () => new ConsultingService())
      ],
      httpService: angularHttpService
    });
  }

  get consultingServices() {
    if (!this.cache$) {
      this.cache$ = this.requestConsultingServices().pipe(
        shareReplay(CACHE_SIZE)
      );
    }
    return this.cache$;
  }

  private requestConsultingServices() {
    const kontent = this.deliveryClient.items<ConsultingService>().type('consulting_service').toObservable();
    return kontent;
  }
}
