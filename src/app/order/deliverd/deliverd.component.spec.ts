import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DeliverdComponent } from './deliverd.component';

describe('DeliverdComponent', () => {
  let component: DeliverdComponent;
  let fixture: ComponentFixture<DeliverdComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DeliverdComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DeliverdComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
