import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NonmaintainanceofindentregisterComponent } from './nonmaintainanceofindentregister.component';

describe('NonmaintainanceofindentregisterComponent', () => {
  let component: NonmaintainanceofindentregisterComponent;
  let fixture: ComponentFixture<NonmaintainanceofindentregisterComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NonmaintainanceofindentregisterComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NonmaintainanceofindentregisterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
