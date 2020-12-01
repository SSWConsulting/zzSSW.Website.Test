import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { TechnologiesDetailComponent } from './technologies-detail.component';

describe('TechnologiesDetailComponent', () => {
  let component: TechnologiesDetailComponent;
  let fixture: ComponentFixture<TechnologiesDetailComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ TechnologiesDetailComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TechnologiesDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
