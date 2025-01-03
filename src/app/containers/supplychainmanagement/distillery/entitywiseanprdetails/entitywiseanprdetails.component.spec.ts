import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EntitywiseanprdetailsComponent } from './entitywiseanprdetails.component';

describe('EntitywiseanprdetailsComponent', () => {
  let component: EntitywiseanprdetailsComponent;
  let fixture: ComponentFixture<EntitywiseanprdetailsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EntitywiseanprdetailsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EntitywiseanprdetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
