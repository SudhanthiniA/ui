import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewqrcodeprintingComponent } from './viewqrcodeprinting.component';

describe('ViewqrcodeprintingComponent', () => {
  let component: ViewqrcodeprintingComponent;
  let fixture: ComponentFixture<ViewqrcodeprintingComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ViewqrcodeprintingComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewqrcodeprintingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
