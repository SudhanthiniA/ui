import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewlicenceComponent } from './viewlicence.component';

describe('ViewlicenceComponent', () => {
  let component: ViewlicenceComponent;
  let fixture: ComponentFixture<ViewlicenceComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ViewlicenceComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewlicenceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
