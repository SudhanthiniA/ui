import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewfaqComponent } from './viewfaq.component';

describe('ViewfaqComponent', () => {
  let component: ViewfaqComponent;
  let fixture: ComponentFixture<ViewfaqComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ViewfaqComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewfaqComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
