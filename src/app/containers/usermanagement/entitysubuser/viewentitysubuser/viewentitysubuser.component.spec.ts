import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewentitysubuserComponent } from './viewentitysubuser.component';

describe('ViewentitysubuserComponent', () => {
  let component: ViewentitysubuserComponent;
  let fixture: ComponentFixture<ViewentitysubuserComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ViewentitysubuserComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewentitysubuserComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
