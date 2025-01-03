import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddmstistofspiritComponent } from './addmstistofspirit.component';

describe('AddmstistofspiritComponent', () => {
  let component: AddmstistofspiritComponent;
  let fixture: ComponentFixture<AddmstistofspiritComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddmstistofspiritComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddmstistofspiritComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
