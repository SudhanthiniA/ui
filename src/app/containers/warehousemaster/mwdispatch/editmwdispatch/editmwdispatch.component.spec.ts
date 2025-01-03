import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EditmwdispatchComponent } from './editmwdispatch.component';

describe('EditmwdispatchComponent', () => {
  let component: EditmwdispatchComponent;
  let fixture: ComponentFixture<EditmwdispatchComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EditmwdispatchComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EditmwdispatchComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
