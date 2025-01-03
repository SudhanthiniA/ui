import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewbottleComponent } from './viewbottle.component';

describe('ViewbottleComponent', () => {
  let component: ViewbottleComponent;
  let fixture: ComponentFixture<ViewbottleComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ViewbottleComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewbottleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
