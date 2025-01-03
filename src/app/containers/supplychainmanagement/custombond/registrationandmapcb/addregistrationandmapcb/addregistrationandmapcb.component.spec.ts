import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddregistrationandmapcbComponent } from './addregistrationandmapcb.component';

describe('AddregistrationandmapcbComponent', () => {
  let component: AddregistrationandmapcbComponent;
  let fixture: ComponentFixture<AddregistrationandmapcbComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddregistrationandmapcbComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddregistrationandmapcbComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
