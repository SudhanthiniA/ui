import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Pd9aRawmaterialComponent } from './pd9a-rawmaterial.component';

describe('Pd9aRawmaterialComponent', () => {
  let component: Pd9aRawmaterialComponent;
  let fixture: ComponentFixture<Pd9aRawmaterialComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Pd9aRawmaterialComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Pd9aRawmaterialComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
