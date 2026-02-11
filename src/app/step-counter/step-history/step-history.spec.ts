import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StepHistory } from './step-history';

describe('StepHistory', () => {
  let component: StepHistory;
  let fixture: ComponentFixture<StepHistory>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [StepHistory]
    })
    .compileComponents();

    fixture = TestBed.createComponent(StepHistory);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
