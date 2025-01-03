import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddoutupdistbrandregComponent } from './addoutupdistbrandreg.component';

describe('AddoutupdistbrandregComponent', () => {
  let component: AddoutupdistbrandregComponent;
  let fixture: ComponentFixture<AddoutupdistbrandregComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddoutupdistbrandregComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddoutupdistbrandregComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
