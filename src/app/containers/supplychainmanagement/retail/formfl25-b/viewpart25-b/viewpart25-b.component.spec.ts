import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Viewpart25BComponent } from './viewpart25-b.component';

describe('Viewpart25BComponent', () => {
  let component: Viewpart25BComponent;
  let fixture: ComponentFixture<Viewpart25BComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Viewpart25BComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Viewpart25BComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
