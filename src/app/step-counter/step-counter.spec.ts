import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StepCounter } from './step-counter';

describe('StepCounter', () => {
  let component: StepCounter;
  let fixture: ComponentFixture<StepCounter>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [StepCounter]
    })
    .compileComponents();

    fixture = TestBed.createComponent(StepCounter);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
