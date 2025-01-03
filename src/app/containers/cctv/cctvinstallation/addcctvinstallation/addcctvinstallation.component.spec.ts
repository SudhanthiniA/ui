import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddcctvinstallationComponent } from './addcctvinstallation.component';

describe('AddcctvinstallationComponent', () => {
  let component: AddcctvinstallationComponent;
  let fixture: ComponentFixture<AddcctvinstallationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddcctvinstallationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddcctvinstallationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
