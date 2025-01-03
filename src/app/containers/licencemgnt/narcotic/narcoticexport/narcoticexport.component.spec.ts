import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NarcoticexportComponent } from './narcoticexport.component';

describe('NarcoticexportComponent', () => {
  let component: NarcoticexportComponent;
  let fixture: ComponentFixture<NarcoticexportComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NarcoticexportComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NarcoticexportComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
