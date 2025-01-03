import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewdamagetypeComponent } from './viewdamagetype.component';

describe('ViewdamagetypeComponent', () => {
  let component: ViewdamagetypeComponent;
  let fixture: ComponentFixture<ViewdamagetypeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ViewdamagetypeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewdamagetypeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
