import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewtransferofdistillationComponent } from './viewtransferofdistillation.component';

describe('ViewtransferofdistillationComponent', () => {
  let component: ViewtransferofdistillationComponent;
  let fixture: ComponentFixture<ViewtransferofdistillationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ViewtransferofdistillationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewtransferofdistillationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
