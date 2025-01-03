import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Addpd18IdComponent } from './addpd18-id.component';

describe('Addpd18IdComponent', () => {
  let component: Addpd18IdComponent;
  let fixture: ComponentFixture<Addpd18IdComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Addpd18IdComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Addpd18IdComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
