import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { createticketlistComponent } from './fieldengglist.component';

describe('createticketlistComponent', () => {
  let component: createticketlistComponent;
  let fixture: ComponentFixture<createticketlistComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ createticketlistComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(createticketlistComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
