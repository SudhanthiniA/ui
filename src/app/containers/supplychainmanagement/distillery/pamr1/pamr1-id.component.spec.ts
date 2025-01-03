import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Pamr1IdComponent } from './pamr1-id.component';

describe('Pamr1IdComponent', () => {
  let component: Pamr1IdComponent;
  let fixture: ComponentFixture<Pamr1IdComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Pamr1IdComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Pamr1IdComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
