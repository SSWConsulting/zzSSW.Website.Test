import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { TestimonialsDetailComponent } from './testimonials-detail.component';

describe('TestimonialsDetailComponent', () => {
  let component: TestimonialsDetailComponent;
  let fixture: ComponentFixture<TestimonialsDetailComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ TestimonialsDetailComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TestimonialsDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
