import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Addpart25BComponent } from './addpart25-b.component';

describe('Addpart25BComponent', () => {
  let component: Addpart25BComponent;
  let fixture: ComponentFixture<Addpart25BComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Addpart25BComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Addpart25BComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
