import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LowresRipDetailComponent } from './lowres-rip-detail.component';

describe('LowresRipDetailComponent', () => {
  let component: LowresRipDetailComponent;
  let fixture: ComponentFixture<LowresRipDetailComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LowresRipDetailComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LowresRipDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
