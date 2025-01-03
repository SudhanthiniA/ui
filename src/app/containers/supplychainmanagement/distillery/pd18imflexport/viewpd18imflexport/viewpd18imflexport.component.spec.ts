import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Viewpd18imflexportComponent } from './viewpd18imflexport.component';

describe('Viewpd18imflexportComponent', () => {
  let component: Viewpd18imflexportComponent;
  let fixture: ComponentFixture<Viewpd18imflexportComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Viewpd18imflexportComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Viewpd18imflexportComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
