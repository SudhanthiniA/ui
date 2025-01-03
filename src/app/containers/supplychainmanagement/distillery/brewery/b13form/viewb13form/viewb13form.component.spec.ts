import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Viewb13formComponent } from './viewb13form.component';

describe('Viewb13formComponent', () => {
  let component: Viewb13formComponent;
  let fixture: ComponentFixture<Viewb13formComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Viewb13formComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Viewb13formComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
