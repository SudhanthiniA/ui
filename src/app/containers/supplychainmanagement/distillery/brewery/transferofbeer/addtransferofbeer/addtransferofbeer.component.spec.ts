import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddtransferofbeerComponent } from './addtransferofbeer.component';

describe('AddtransferofbeerComponent', () => {
  let component: AddtransferofbeerComponent;
  let fixture: ComponentFixture<AddtransferofbeerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddtransferofbeerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddtransferofbeerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
