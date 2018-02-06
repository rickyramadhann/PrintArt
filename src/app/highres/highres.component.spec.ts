import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HighresComponent } from './highres.component';

describe('HighresComponent', () => {
  let component: HighresComponent;
  let fixture: ComponentFixture<HighresComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HighresComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HighresComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
