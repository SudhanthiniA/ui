import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { VigillanceComponent } from './vigillance.component';

describe('VigillanceComponent', () => {
  let component: VigillanceComponent;
  let fixture: ComponentFixture<VigillanceComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VigillanceComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VigillanceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
