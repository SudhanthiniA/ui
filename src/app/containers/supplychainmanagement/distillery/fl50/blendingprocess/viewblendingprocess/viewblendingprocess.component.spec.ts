import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewblendingprocessComponent } from './viewblendingprocess.component';

describe('ViewblendingprocessComponent', () => {
  let component: ViewblendingprocessComponent;
  let fixture: ComponentFixture<ViewblendingprocessComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ViewblendingprocessComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewblendingprocessComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
