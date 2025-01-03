import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AecComponent } from './aec.component';

describe('AecComponent', () => {
  let component: AecComponent;
  let fixture: ComponentFixture<AecComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AecComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AecComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
