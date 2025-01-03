import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewtransfertoplantComponent } from './viewtransfertoplant.component';

describe('ViewtransfertoplantComponent', () => {
  let component: ViewtransfertoplantComponent;
  let fixture: ComponentFixture<ViewtransfertoplantComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ViewtransfertoplantComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewtransfertoplantComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
