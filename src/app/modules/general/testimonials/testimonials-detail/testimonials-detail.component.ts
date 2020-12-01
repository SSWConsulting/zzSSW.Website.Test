import { Component, OnInit, Input } from '@angular/core';
import { TestimonialTile } from 'src/app/models/testimonial_tile';

@Component({
  selector: 'app-testimonials-detail',
  templateUrl: './testimonials-detail.component.html',
  styleUrls: ['./testimonials-detail.component.scss']
})
export class TestimonialsDetailComponent implements OnInit {

  @Input() testimonial: TestimonialTile;

  constructor() { }

  ngOnInit() {
  }

}
