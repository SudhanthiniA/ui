import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Addb3formComponent } from './addb3form.component';

describe('Addb3formComponent', () => {
  let component: Addb3formComponent;
  let fixture: ComponentFixture<Addb3formComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Addb3formComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Addb3formComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
