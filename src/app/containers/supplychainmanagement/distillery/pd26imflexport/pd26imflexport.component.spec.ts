import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Pd26imflexportComponent } from './pd26imflexport.component';

describe('Pd26imflexportComponent', () => {
  let component: Pd26imflexportComponent;
  let fixture: ComponentFixture<Pd26imflexportComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Pd26imflexportComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Pd26imflexportComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
