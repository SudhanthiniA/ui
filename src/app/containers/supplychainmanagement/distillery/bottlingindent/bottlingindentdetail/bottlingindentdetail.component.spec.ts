import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BottlingindentdetailComponent } from './bottlingindentdetail.component';

describe('BottlingindentdetailComponent', () => {
  let component: BottlingindentdetailComponent;
  let fixture: ComponentFixture<BottlingindentdetailComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BottlingindentdetailComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BottlingindentdetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
