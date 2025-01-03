import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddstocktransferexpiredComponent } from './addstocktransferexpired.component';

describe('AddstocktransferexpiredComponent', () => {
  let component: AddstocktransferexpiredComponent;
  let fixture: ComponentFixture<AddstocktransferexpiredComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddstocktransferexpiredComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddstocktransferexpiredComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
