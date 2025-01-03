import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewndlcexpComponent } from './viewndlcexp.component';

describe('ViewndlcexpComponent', () => {
  let component: ViewndlcexpComponent;
  let fixture: ComponentFixture<ViewndlcexpComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ViewndlcexpComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewndlcexpComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
