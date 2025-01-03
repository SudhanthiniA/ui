import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewcodetypeComponent } from './viewcodetype.component';

describe('ViewcodetypeComponent', () => {
  let component: ViewcodetypeComponent;
  let fixture: ComponentFixture<ViewcodetypeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ViewcodetypeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewcodetypeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
