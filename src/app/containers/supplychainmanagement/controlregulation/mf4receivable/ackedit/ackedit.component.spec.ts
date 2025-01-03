import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AckeditComponent } from './ackedit.component';

describe('AckeditComponent', () => {
  let component: AckeditComponent;
  let fixture: ComponentFixture<AckeditComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AckeditComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AckeditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
