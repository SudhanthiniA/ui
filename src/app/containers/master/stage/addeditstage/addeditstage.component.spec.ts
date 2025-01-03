import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddeditstageComponent } from './addeditstage.component';

describe('AddeditstageComponent', () => {
  let component: AddeditstageComponent;
  let fixture: ComponentFixture<AddeditstageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddeditstageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddeditstageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
