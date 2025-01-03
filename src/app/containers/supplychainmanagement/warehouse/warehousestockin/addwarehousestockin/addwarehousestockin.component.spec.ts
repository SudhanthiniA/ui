import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddwarehousestockinComponent } from './addwarehousestockin.component';

describe('AddwarehousestockinComponent', () => {
  let component: AddwarehousestockinComponent;
  let fixture: ComponentFixture<AddwarehousestockinComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddwarehousestockinComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddwarehousestockinComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
