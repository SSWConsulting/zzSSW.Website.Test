import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { ConsultingServicesListComponent } from './consulting-services-list.component';

describe('ConsultingServicesListComponent', () => {
  let component: ConsultingServicesListComponent;
  let fixture: ComponentFixture<ConsultingServicesListComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ ConsultingServicesListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ConsultingServicesListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
