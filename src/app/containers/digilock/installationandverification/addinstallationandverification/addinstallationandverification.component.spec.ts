import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddinstallationandverificationComponent } from './addinstallationandverification.component';

describe('AddinstallationandverificationComponent', () => {
  let component: AddinstallationandverificationComponent;
  let fixture: ComponentFixture<AddinstallationandverificationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddinstallationandverificationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddinstallationandverificationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
