import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AppfortransbeerfilterationComponent } from './appfortransbeerfilteration.component';

describe('AppfortransbeerfilterationComponent', () => {
  let component: AppfortransbeerfilterationComponent;
  let fixture: ComponentFixture<AppfortransbeerfilterationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AppfortransbeerfilterationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AppfortransbeerfilterationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
