import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewparentunitComponent } from './viewparentunit.component';

describe('ViewparentunitComponent', () => {
  let component: ViewparentunitComponent;
  let fixture: ComponentFixture<ViewparentunitComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ViewparentunitComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewparentunitComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
