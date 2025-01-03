import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewdebondingrequestComponent } from './viewdebondingrequest.component';

describe('ViewdebondingrequestComponent', () => {
  let component: ViewdebondingrequestComponent;
  let fixture: ComponentFixture<ViewdebondingrequestComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ViewdebondingrequestComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewdebondingrequestComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
