import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TankremovelviewComponent } from './tankremovelview.component';

describe('TankremovelviewComponent', () => {
  let component: TankremovelviewComponent;
  let fixture: ComponentFixture<TankremovelviewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TankremovelviewComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TankremovelviewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
