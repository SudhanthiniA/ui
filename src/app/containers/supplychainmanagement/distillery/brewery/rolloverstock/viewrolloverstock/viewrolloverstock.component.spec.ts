import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewrolloverstockComponent } from './viewrolloverstock.component';

describe('ViewrolloverstockComponent', () => {
  let component: ViewrolloverstockComponent;
  let fixture: ComponentFixture<ViewrolloverstockComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ViewrolloverstockComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewrolloverstockComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
