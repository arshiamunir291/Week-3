import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StepControls } from './step-controls';

describe('StepControls', () => {
  let component: StepControls;
  let fixture: ComponentFixture<StepControls>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [StepControls]
    })
    .compileComponents();

    fixture = TestBed.createComponent(StepControls);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
