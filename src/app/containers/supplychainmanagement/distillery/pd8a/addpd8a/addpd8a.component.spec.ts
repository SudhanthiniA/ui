import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Addpd8aComponent } from './addpd8a.component';

describe('Addpd8aComponent', () => {
  let component: Addpd8aComponent;
  let fixture: ComponentFixture<Addpd8aComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Addpd8aComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Addpd8aComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
