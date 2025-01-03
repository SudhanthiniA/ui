import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ImpliquorComponent } from './impliquor.component';

describe('ImpliquorComponent', () => {
  let component: ImpliquorComponent;
  let fixture: ComponentFixture<ImpliquorComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ImpliquorComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ImpliquorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
