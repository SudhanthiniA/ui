import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Id14aComponent } from './id14a.component';

describe('Id14aComponent', () => {
  let component: Id14aComponent;
  let fixture: ComponentFixture<Id14aComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Id14aComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Id14aComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
