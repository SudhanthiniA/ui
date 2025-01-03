import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewdomainComponent } from './viewdomain.component';

describe('ViewdomainComponent', () => {
  let component: ViewdomainComponent;
  let fixture: ComponentFixture<ViewdomainComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ViewdomainComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewdomainComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
