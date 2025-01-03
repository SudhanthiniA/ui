import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddwastageofbeerduringbottlingprocessComponent } from './addwastageofbeerduringbottlingprocess.component';

describe('AddwastageofbeerduringbottlingprocessComponent', () => {
  let component: AddwastageofbeerduringbottlingprocessComponent;
  let fixture: ComponentFixture<AddwastageofbeerduringbottlingprocessComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddwastageofbeerduringbottlingprocessComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddwastageofbeerduringbottlingprocessComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
