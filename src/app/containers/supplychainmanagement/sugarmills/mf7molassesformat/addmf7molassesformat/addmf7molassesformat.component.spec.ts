import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Addmf7molassesformatComponent } from './addmf7molassesformat.component';

describe('Addmf7molassesformatComponent', () => {
  let component: Addmf7molassesformatComponent;
  let fixture: ComponentFixture<Addmf7molassesformatComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Addmf7molassesformatComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Addmf7molassesformatComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
