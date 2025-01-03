import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Bio1aComponent } from './bio1a.component';

describe('Bio1aComponent', () => {
  let component: Bio1aComponent;
  let fixture: ComponentFixture<Bio1aComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Bio1aComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Bio1aComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
