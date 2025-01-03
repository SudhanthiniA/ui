import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Viewb15formComponent } from './viewb15form.component';

describe('Viewb15formComponent', () => {
  let component: Viewb15formComponent;
  let fixture: ComponentFixture<Viewb15formComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Viewb15formComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Viewb15formComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
