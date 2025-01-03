import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewpackagetypeComponent } from './viewpackagetype.component';

describe('ViewpackagetypeComponent', () => {
  let component: ViewpackagetypeComponent;
  let fixture: ComponentFixture<ViewpackagetypeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ViewpackagetypeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewpackagetypeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
