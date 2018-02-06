import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LowresFinisherComponent } from './lowres-finisher.component';

describe('LowresFinisherComponent', () => {
  let component: LowresFinisherComponent;
  let fixture: ComponentFixture<LowresFinisherComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LowresFinisherComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LowresFinisherComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
