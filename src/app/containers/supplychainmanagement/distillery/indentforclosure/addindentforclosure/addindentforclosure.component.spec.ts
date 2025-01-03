import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddindentforclosureComponent } from './addindentforclosure.component';

describe('AddindentforclosureComponent', () => {
  let component: AddindentforclosureComponent;
  let fixture: ComponentFixture<AddindentforclosureComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddindentforclosureComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddindentforclosureComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
