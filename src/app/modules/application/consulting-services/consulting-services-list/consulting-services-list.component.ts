import { Component, OnInit } from '@angular/core';
import { ConsultingService } from 'src/app/models/consulting_service';
import { ItemResponses, IDeliveryClient, DeliveryClient, TypeResolver } from '@kentico/kontent-delivery';
import { Observable } from 'rxjs';
import { ConsultingServicesService } from '../consulting-services.service';

@Component({
  selector: 'app-consulting-services-list',
  templateUrl: './consulting-services-list.component.html',
  styleUrls: ['./consulting-services-list.component.scss']
})
export class ConsultingServicesListComponent implements OnInit {

  consultingServices$: Observable<void | ItemResponses.ListContentItemsResponse<ConsultingService>>;
  consultingServices: Array<ConsultingService>;

  constructor(private consultingServicesService: ConsultingServicesService) {
  }

  ngOnInit() {
    this.consultingServices$ = this.consultingServicesService.consultingServices;
    this.consultingServices$.subscribe(response => { this.consultingServices = response ? response.items : null; });
  }
}
