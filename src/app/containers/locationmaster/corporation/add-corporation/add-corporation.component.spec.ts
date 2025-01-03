import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddCorporationComponent } from './add-corporation.component';

describe('AddCorporationComponent', () => {
  let component: AddCorporationComponent;
  let fixture: ComponentFixture<AddCorporationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddCorporationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddCorporationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
