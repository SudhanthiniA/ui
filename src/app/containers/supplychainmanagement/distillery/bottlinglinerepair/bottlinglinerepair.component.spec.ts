import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BottlinglinerepairComponent } from './bottlinglinerepair.component';

describe('BottlinglinerepairComponent', () => {
  let component: BottlinglinerepairComponent;
  let fixture: ComponentFixture<BottlinglinerepairComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BottlinglinerepairComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BottlinglinerepairComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
