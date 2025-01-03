import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewnewbrandComponent } from './viewnewbrand.component';

describe('ViewnewbrandComponent', () => {
  let component: ViewnewbrandComponent;
  let fixture: ComponentFixture<ViewnewbrandComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ViewnewbrandComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewnewbrandComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
