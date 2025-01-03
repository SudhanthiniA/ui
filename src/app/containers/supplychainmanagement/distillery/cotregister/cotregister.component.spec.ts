import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CotregisterComponent } from './cotregister.component';

describe('CotregisterComponent', () => {
  let component: CotregisterComponent;
  let fixture: ComponentFixture<CotregisterComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CotregisterComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CotregisterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
