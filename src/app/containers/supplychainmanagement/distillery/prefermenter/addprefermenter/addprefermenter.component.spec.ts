import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddprefermenterComponent } from './addprefermenter.component';

describe('AddprefermenterComponent', () => {
  let component: AddprefermenterComponent;
  let fixture: ComponentFixture<AddprefermenterComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddprefermenterComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddprefermenterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
