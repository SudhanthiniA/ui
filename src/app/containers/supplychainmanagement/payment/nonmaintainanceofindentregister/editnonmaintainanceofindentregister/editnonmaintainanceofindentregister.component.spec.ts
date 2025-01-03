import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EditnonmaintainanceofindentregisterComponent } from './editnonmaintainanceofindentregister.component';

describe('EditnonmaintainanceofindentregisterComponent', () => {
  let component: EditnonmaintainanceofindentregisterComponent;
  let fixture: ComponentFixture<EditnonmaintainanceofindentregisterComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EditnonmaintainanceofindentregisterComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EditnonmaintainanceofindentregisterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
