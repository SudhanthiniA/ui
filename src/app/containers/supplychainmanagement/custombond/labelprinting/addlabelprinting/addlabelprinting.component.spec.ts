import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddlabelprintingComponent } from './addlabelprinting.component';

describe('AddlabelprintingComponent', () => {
  let component: AddlabelprintingComponent;
  let fixture: ComponentFixture<AddlabelprintingComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddlabelprintingComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddlabelprintingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
