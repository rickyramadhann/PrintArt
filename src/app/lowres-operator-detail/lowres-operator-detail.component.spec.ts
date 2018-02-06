import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LowresOperatorDetailComponent } from './lowres-operator-detail.component';

describe('LowresOperatorDetailComponent', () => {
  let component: LowresOperatorDetailComponent;
  let fixture: ComponentFixture<LowresOperatorDetailComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LowresOperatorDetailComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LowresOperatorDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
