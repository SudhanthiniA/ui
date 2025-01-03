import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewindustriesinsideupComponent } from './viewindustriesinsideup.component';

describe('ViewindustriesinsideupComponent', () => {
  let component: ViewindustriesinsideupComponent;
  let fixture: ComponentFixture<ViewindustriesinsideupComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ViewindustriesinsideupComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewindustriesinsideupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
