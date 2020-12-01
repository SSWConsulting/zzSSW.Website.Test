import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { BenefitsListComponent } from './benefits-list.component';

describe('BenefitsListComponent', () => {
  let component: BenefitsListComponent;
  let fixture: ComponentFixture<BenefitsListComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ BenefitsListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BenefitsListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
