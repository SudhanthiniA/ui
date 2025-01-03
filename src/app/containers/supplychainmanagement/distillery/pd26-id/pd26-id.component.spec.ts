import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Pd26IdComponent } from './pd26-id.component';

describe('Pd26IdComponent', () => {
  let component: Pd26IdComponent;
  let fixture: ComponentFixture<Pd26IdComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Pd26IdComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Pd26IdComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
