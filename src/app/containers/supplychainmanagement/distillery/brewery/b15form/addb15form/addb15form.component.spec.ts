import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Addb15formComponent } from './addb15form.component';

describe('Addb15formComponent', () => {
  let component: Addb15formComponent;
  let fixture: ComponentFixture<Addb15formComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Addb15formComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Addb15formComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
