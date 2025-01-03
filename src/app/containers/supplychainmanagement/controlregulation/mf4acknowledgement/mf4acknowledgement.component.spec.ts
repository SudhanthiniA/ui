import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Mf4acknowledgementComponent } from './mf4acknowledgement.component';

describe('Mf4acknowledgementComponent', () => {
  let component: Mf4acknowledgementComponent;
  let fixture: ComponentFixture<Mf4acknowledgementComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Mf4acknowledgementComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Mf4acknowledgementComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
