import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { ConsultingServicesDetailComponent } from './consulting-services-detail.component';

describe('ConsultingServicesDetailComponent', () => {
  let component: ConsultingServicesDetailComponent;
  let fixture: ComponentFixture<ConsultingServicesDetailComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ ConsultingServicesDetailComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ConsultingServicesDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
