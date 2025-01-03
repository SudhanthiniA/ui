import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Viewmf7molassesformatComponent } from './viewmf7molassesformat.component';

describe('Viewmf7molassesformatComponent', () => {
  let component: Viewmf7molassesformatComponent;
  let fixture: ComponentFixture<Viewmf7molassesformatComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Viewmf7molassesformatComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Viewmf7molassesformatComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
