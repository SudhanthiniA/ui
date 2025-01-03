import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Viewb11formComponent } from './viewb11form.component';

describe('Viewb11formComponent', () => {
  let component: Viewb11formComponent;
  let fixture: ComponentFixture<Viewb11formComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Viewb11formComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Viewb11formComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
