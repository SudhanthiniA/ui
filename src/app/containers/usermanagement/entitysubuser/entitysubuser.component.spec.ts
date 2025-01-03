import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EntitysubuserComponent } from './entitysubuser.component';

describe('EntitysubuserComponent', () => {
  let component: EntitysubuserComponent;
  let fixture: ComponentFixture<EntitysubuserComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EntitysubuserComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EntitysubuserComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
