import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TechnologiesListComponent } from './technologies-list/technologies-list.component';
import { TechnologiesDetailComponent } from './technologies-detail/technologies-detail.component';

import { SSWCommonModule } from '../common/ssw.common.module';


@NgModule({
  declarations: [
    TechnologiesListComponent,
    TechnologiesDetailComponent
  ],
  exports: [
    TechnologiesListComponent,
    TechnologiesDetailComponent
  ],
  imports: [
    CommonModule,
    SSWCommonModule
  ]
})
export class TechnologiesModule { }
