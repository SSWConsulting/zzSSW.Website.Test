import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BenefitsListComponent } from './benefits-list/benefits-list.component';
import { BenefitsDetailComponent } from './benefits-detail/benefits-detail.component';
import { SSWCommonModule } from '../common/ssw.common.module';


@NgModule({
  declarations: [
    BenefitsListComponent,
    BenefitsDetailComponent
  ],
  imports: [
    CommonModule,
    SSWCommonModule
  ],
  exports: [
    BenefitsListComponent,
    BenefitsDetailComponent
  ],

})
export class BenefitsModule { }
