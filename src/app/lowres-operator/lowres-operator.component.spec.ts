import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LowresOperatorComponent } from './lowres-operator.component';

describe('LowresOperatorComponent', () => {
  let component: LowresOperatorComponent;
  let fixture: ComponentFixture<LowresOperatorComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LowresOperatorComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LowresOperatorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
