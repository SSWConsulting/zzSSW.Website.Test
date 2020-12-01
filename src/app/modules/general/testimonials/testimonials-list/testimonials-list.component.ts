import { Component, OnInit, Input } from '@angular/core';
import { TestimonialTile } from 'src/app/models/testimonial_tile';

@Component({
  selector: 'app-testimonials-list',
  templateUrl: './testimonials-list.component.html',
  styleUrls: ['./testimonials-list.component.scss']
})
export class TestimonialsListComponent implements OnInit {

  @Input() testimonials: TestimonialTile[];

  constructor() {
   }

  ngOnInit() {
  }
}
