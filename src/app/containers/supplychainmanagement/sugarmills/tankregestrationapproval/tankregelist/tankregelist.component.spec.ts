import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TankregelistComponent } from './tankregelist.component';

describe('TankregelistComponent', () => {
  let component: TankregelistComponent;
  let fixture: ComponentFixture<TankregelistComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TankregelistComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TankregelistComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
