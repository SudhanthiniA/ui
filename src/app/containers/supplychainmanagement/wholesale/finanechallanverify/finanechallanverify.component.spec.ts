import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FinanechallanverifyComponent } from './finanechallanverify.component';

describe('FinanechallanverifyComponent', () => {
  let component: FinanechallanverifyComponent;
  let fixture: ComponentFixture<FinanechallanverifyComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FinanechallanverifyComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FinanechallanverifyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
