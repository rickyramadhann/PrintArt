import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LowresComponent } from './lowres.component';

describe('LowresComponent', () => {
  let component: LowresComponent;
  let fixture: ComponentFixture<LowresComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LowresComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LowresComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
