import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddoutupdistlabelregComponent } from './addoutupdistlabelreg.component';

describe('AddoutupdistlabelregComponent', () => {
  let component: AddoutupdistlabelregComponent;
  let fixture: ComponentFixture<AddoutupdistlabelregComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddoutupdistlabelregComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddoutupdistlabelregComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
