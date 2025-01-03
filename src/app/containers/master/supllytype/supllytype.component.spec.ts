import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SupllytypeComponent } from './supllytype.component';

describe('SupllytypeComponent', () => {
  let component: SupllytypeComponent;
  let fixture: ComponentFixture<SupllytypeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SupllytypeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SupllytypeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
