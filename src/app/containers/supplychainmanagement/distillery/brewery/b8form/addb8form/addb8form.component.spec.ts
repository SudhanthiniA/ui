import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Addb8formComponent } from './addb8form.component';

describe('Addb8formComponent', () => {
  let component: Addb8formComponent;
  let fixture: ComponentFixture<Addb8formComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Addb8formComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Addb8formComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
