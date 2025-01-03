import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddndepermitComponent } from './addndepermit.component';

describe('AddndepermitComponent', () => {
  let component: AddndepermitComponent;
  let fixture: ComponentFixture<AddndepermitComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddndepermitComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddndepermitComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
