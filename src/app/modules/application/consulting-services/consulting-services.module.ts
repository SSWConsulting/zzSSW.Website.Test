import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ConsultingServicesListComponent } from './consulting-services-list/consulting-services-list.component';
import { ConsultingServicesDetailComponent } from './consulting-services-detail/consulting-services-detail.component';
import { ConsultingServicesRoutingModule } from './consulting-services-routing.module';
import { ConsultingServicesService } from './consulting-services.service';

import { TestimonialsModule } from 'src/app/modules/general/testimonials/testimonials.module';
import { TechnologiesModule } from 'src/app/modules/general/technologies/technologies.module';
import { BenefitsModule } from 'src/app/modules/general/benefits/benefits.module';
import { SSWCommonModule } from 'src/app/modules/general/common/ssw.common.module';

@NgModule({
  declarations: [
    ConsultingServicesListComponent,
    ConsultingServicesDetailComponent,
  ],
  imports: [
    SSWCommonModule,
    CommonModule,
    ConsultingServicesRoutingModule,
    TestimonialsModule,
    TechnologiesModule,
    BenefitsModule
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
