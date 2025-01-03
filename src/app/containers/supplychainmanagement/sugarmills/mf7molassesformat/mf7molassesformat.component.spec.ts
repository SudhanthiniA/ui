import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Mf7molassesformatComponent } from './mf7molassesformat.component';

describe('Mf7molassesformatComponent', () => {
  let component: Mf7molassesformatComponent;
  let fixture: ComponentFixture<Mf7molassesformatComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Mf7molassesformatComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Mf7molassesformatComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
