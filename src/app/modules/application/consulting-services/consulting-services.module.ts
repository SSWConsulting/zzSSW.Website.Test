import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ConsultingServicesListComponent } from './consulting-services-list/consulting-services-list.component';
import { ConsultingServicesDetailComponent } from './consulting-services-detail/consulting-services-detail.component';
import { ConsultingServicesRoutingModule } from './consulting-services-routing.module';
import { ConsultingServicesService } from './consulting-services.service';

import { SSWCommonModule } from 'src/app/modules/general/common/ssw.common.module';

@NgModule({
  declarations: [
    ConsultingServicesListComponent,
    ConsultingServicesDetailComponent,
  ],
  imports: [
    SSWCommonModule,
    CommonModule,
    ConsultingServicesRoutingModule
  ],
  exports: [
    ConsultingServicesListComponent,
    ConsultingServicesDetailComponent
  ],
  providers: [
    ConsultingServicesService
  ]
})
export class ConsultingServicesModule { }
