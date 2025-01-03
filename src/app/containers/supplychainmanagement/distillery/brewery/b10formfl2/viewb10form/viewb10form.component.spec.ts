import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Viewb10formComponent } from './viewb10form.component';

describe('Viewb10formComponent', () => {
  let component: Viewb10formComponent;
  let fixture: ComponentFixture<Viewb10formComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Viewb10formComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Viewb10formComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
