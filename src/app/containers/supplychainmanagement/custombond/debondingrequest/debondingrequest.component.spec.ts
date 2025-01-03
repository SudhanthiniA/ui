import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DebondingrequestComponent } from './debondingrequest.component';

describe('DebondingrequestComponent', () => {
  let component: DebondingrequestComponent;
  let fixture: ComponentFixture<DebondingrequestComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DebondingrequestComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DebondingrequestComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
