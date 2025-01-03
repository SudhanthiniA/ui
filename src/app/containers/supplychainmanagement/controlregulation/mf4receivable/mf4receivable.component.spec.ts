import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Mf4receivableComponent } from './mf4receivable.component';

describe('Mf4receivableComponent', () => {
  let component: Mf4receivableComponent;
  let fixture: ComponentFixture<Mf4receivableComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Mf4receivableComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Mf4receivableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
