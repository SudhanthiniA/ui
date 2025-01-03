import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddstockinformComponent } from './addstockinform.component';

describe('AddstockinformComponent', () => {
  let component: AddstockinformComponent;
  let fixture: ComponentFixture<AddstockinformComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddstockinformComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddstockinformComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
