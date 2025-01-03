import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddqrcodeprintingComponent } from './addqrcodeprinting.component';

describe('AddqrcodeprintingComponent', () => {
  let component: AddqrcodeprintingComponent;
  let fixture: ComponentFixture<AddqrcodeprintingComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddqrcodeprintingComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddqrcodeprintingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
