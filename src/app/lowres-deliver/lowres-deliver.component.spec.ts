import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LowresDeliverComponent } from './lowres-deliver.component';

describe('LowresDeliverComponent', () => {
  let component: LowresDeliverComponent;
  let fixture: ComponentFixture<LowresDeliverComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LowresDeliverComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LowresDeliverComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
