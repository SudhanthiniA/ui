import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewiuprofileComponent } from './viewiuprofile.component';

describe('ViewiuprofileComponent', () => {
  let component: ViewiuprofileComponent;
  let fixture: ComponentFixture<ViewiuprofileComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ViewiuprofileComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewiuprofileComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
