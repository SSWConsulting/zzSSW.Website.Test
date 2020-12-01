import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { TechnologiesListComponent } from './technologies-list.component';

describe('TechnologiesListComponent', () => {
  let component: TechnologiesListComponent;
  let fixture: ComponentFixture<TechnologiesListComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ TechnologiesListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TechnologiesListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
