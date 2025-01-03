import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Hbrfl7aAddComponent } from './hbrfl7a-add.component';

describe('Hbrfl7aAddComponent', () => {
  let component: Hbrfl7aAddComponent;
  let fixture: ComponentFixture<Hbrfl7aAddComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Hbrfl7aAddComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Hbrfl7aAddComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
