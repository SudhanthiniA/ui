import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TankregeviewComponent } from './tankregeview.component';

describe('TankregeviewComponent', () => {
  let component: TankregeviewComponent;
  let fixture: ComponentFixture<TankregeviewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TankregeviewComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TankregeviewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
