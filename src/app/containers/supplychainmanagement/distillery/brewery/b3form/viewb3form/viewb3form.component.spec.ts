import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Viewb3formComponent } from './viewb3form.component';

describe('Viewb3formComponent', () => {
  let component: Viewb3formComponent;
  let fixture: ComponentFixture<Viewb3formComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Viewb3formComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Viewb3formComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
