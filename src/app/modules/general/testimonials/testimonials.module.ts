import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TestimonialsListComponent } from './testimonials-list/testimonials-list.component';
import { TestimonialsDetailComponent } from './testimonials-detail/testimonials-detail.component';


@NgModule({
  declarations: [
    TestimonialsListComponent,
    TestimonialsDetailComponent
  ],
  exports: [
    TestimonialsListComponent,
    TestimonialsDetailComponent
  ],
  imports: [
    CommonModule
  ]
})
export class TestimonialsModule { }
