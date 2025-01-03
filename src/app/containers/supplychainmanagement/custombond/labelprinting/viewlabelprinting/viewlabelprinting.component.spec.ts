import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewlabelprintingComponent } from './viewlabelprinting.component';

describe('ViewlabelprintingComponent', () => {
  let component: ViewlabelprintingComponent;
  let fixture: ComponentFixture<ViewlabelprintingComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ViewlabelprintingComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewlabelprintingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
