import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Id14bComponent } from './id14b.component';

describe('Id14bComponent', () => {
  let component: Id14bComponent;
  let fixture: ComponentFixture<Id14bComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Id14bComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Id14bComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
