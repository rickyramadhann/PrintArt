import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LowresRipComponent } from './lowres-rip.component';

describe('LowresRipComponent', () => {
  let component: LowresRipComponent;
  let fixture: ComponentFixture<LowresRipComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LowresRipComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LowresRipComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
