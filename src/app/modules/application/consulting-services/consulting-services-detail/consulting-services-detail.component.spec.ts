import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ConsultingServicesDetailComponent } from './consulting-services-detail.component';

describe('ConsultingServicesDetailComponent', () => {
  let component: ConsultingServicesDetailComponent;
  let fixture: ComponentFixture<ConsultingServicesDetailComponent>;

  beforeEach(async(() => {
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
