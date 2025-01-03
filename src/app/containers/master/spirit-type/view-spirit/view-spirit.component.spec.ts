import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewSpiritComponent } from './view-spirit.component';

describe('ViewSpiritComponent', () => {
  let component: ViewSpiritComponent;
  let fixture: ComponentFixture<ViewSpiritComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ViewSpiritComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewSpiritComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
