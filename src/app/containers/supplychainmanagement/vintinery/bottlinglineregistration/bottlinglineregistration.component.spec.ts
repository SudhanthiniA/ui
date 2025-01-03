import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BottlinglineregistrationComponent } from './bottlinglineregistration.component';

describe('BottlinglineregistrationComponent', () => {
  let component: BottlinglineregistrationComponent;
  let fixture: ComponentFixture<BottlinglineregistrationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BottlinglineregistrationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BottlinglineregistrationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
