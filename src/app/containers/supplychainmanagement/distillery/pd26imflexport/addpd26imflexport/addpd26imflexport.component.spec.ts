import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Addpd26imflexportComponent } from './addpd26imflexport.component';

describe('Addpd26imflexportComponent', () => {
  let component: Addpd26imflexportComponent;
  let fixture: ComponentFixture<Addpd26imflexportComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Addpd26imflexportComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Addpd26imflexportComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
