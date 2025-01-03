import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewmasterwareprofileComponent } from './viewmasterwareprofile.component';

describe('ViewmasterwareprofileComponent', () => {
  let component: ViewmasterwareprofileComponent;
  let fixture: ComponentFixture<ViewmasterwareprofileComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ViewmasterwareprofileComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewmasterwareprofileComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
