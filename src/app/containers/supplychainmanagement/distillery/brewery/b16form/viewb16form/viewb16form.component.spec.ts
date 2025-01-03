import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Viewb16formComponent } from './viewb16form.component';

describe('Viewb16formComponent', () => {
  let component: Viewb16formComponent;
  let fixture: ComponentFixture<Viewb16formComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Viewb16formComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Viewb16formComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
