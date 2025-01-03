import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewappfortransbeerfilterationComponent } from './viewappfortransbeerfilteration.component';

describe('ViewappfortransbeerfilterationComponent', () => {
  let component: ViewappfortransbeerfilterationComponent;
  let fixture: ComponentFixture<ViewappfortransbeerfilterationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ViewappfortransbeerfilterationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewappfortransbeerfilterationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
