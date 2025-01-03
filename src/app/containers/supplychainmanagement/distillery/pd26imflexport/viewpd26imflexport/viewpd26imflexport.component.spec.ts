import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Viewpd26imflexportComponent } from './viewpd26imflexport.component';

describe('Viewpd26imflexportComponent', () => {
  let component: Viewpd26imflexportComponent;
  let fixture: ComponentFixture<Viewpd26imflexportComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Viewpd26imflexportComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Viewpd26imflexportComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
