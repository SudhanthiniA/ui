import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Viewpd18IdComponent } from './viewpd18-id.component';

describe('Viewpd18IdComponent', () => {
  let component: Viewpd18IdComponent;
  let fixture: ComponentFixture<Viewpd18IdComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Viewpd18IdComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Viewpd18IdComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
