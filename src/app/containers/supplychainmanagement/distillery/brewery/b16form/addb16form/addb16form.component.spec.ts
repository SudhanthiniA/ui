import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Addb16formComponent } from './addb16form.component';

describe('Addb16formComponent', () => {
  let component: Addb16formComponent;
  let fixture: ComponentFixture<Addb16formComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Addb16formComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Addb16formComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
