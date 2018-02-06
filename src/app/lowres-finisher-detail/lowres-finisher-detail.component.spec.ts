import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LowresFinisherDetailComponent } from './lowres-finisher-detail.component';

describe('LowresFinisherDetailComponent', () => {
  let component: LowresFinisherDetailComponent;
  let fixture: ComponentFixture<LowresFinisherDetailComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LowresFinisherDetailComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LowresFinisherDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
