import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Viewb12formComponent } from './viewb12form.component';

describe('Viewb12formComponent', () => {
  let component: Viewb12formComponent;
  let fixture: ComponentFixture<Viewb12formComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Viewb12formComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Viewb12formComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
