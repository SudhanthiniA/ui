import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewreturnComponent } from './viewreturn.component';

describe('ViewreturnComponent', () => {
  let component: ViewreturnComponent;
  let fixture: ComponentFixture<ViewreturnComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ViewreturnComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewreturnComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
