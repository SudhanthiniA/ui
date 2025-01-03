import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewmwlostandmissingComponent } from './viewmwlostandmissing.component';

describe('ViewmwlostandmissingComponent', () => {
  let component: ViewmwlostandmissingComponent;
  let fixture: ComponentFixture<ViewmwlostandmissingComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ViewmwlostandmissingComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewmwlostandmissingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
