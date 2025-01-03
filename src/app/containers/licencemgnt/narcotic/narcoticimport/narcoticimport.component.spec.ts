import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NarcoticimportComponent } from './narcoticimport.component';

describe('NarcoticimportComponent', () => {
  let component: NarcoticimportComponent;
  let fixture: ComponentFixture<NarcoticimportComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NarcoticimportComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NarcoticimportComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
