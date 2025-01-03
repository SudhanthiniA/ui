import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BottlingindentmanagementComponent } from './bottlingindentmanagement.component';

describe('BottlingindentmanagementComponent', () => {
  let component: BottlingindentmanagementComponent;
  let fixture: ComponentFixture<BottlingindentmanagementComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BottlingindentmanagementComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BottlingindentmanagementComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
