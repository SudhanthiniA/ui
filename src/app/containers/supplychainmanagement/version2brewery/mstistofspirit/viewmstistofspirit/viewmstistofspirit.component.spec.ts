import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewmstistofspiritComponent } from './viewmstistofspirit.component';

describe('ViewmstistofspiritComponent', () => {
  let component: ViewmstistofspiritComponent;
  let fixture: ComponentFixture<ViewmstistofspiritComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ViewmstistofspiritComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewmstistofspiritComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
