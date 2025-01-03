import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ExpirytypeComponent } from './expirytype.component';

describe('ExpirytypeComponent', () => {
  let component: ExpirytypeComponent;
  let fixture: ComponentFixture<ExpirytypeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ExpirytypeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ExpirytypeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
