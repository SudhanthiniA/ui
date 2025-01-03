import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Addpd18imflexportComponent } from './addpd18imflexport.component';

describe('Addpd18imflexportComponent', () => {
  let component: Addpd18imflexportComponent;
  let fixture: ComponentFixture<Addpd18imflexportComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Addpd18imflexportComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Addpd18imflexportComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
