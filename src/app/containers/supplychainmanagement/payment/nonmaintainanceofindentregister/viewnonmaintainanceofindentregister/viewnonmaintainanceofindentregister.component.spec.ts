import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewnonmaintainanceofindentregisterComponent } from './viewnonmaintainanceofindentregister.component';

describe('ViewnonmaintainanceofindentregisterComponent', () => {
  let component: ViewnonmaintainanceofindentregisterComponent;
  let fixture: ComponentFixture<ViewnonmaintainanceofindentregisterComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ViewnonmaintainanceofindentregisterComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewnonmaintainanceofindentregisterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
