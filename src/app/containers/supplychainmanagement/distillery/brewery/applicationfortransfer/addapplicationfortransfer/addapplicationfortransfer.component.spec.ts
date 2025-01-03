import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddapplicationfortransferComponent } from './addapplicationfortransfer.component';

describe('AddapplicationfortransferComponent', () => {
  let component: AddapplicationfortransferComponent;
  let fixture: ComponentFixture<AddapplicationfortransferComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddapplicationfortransferComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddapplicationfortransferComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
