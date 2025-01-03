import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Tariandsendhicl10aComponent } from './tariandsendhicl10a.component';

describe('Tariandsendhicl10aComponent', () => {
  let component: Tariandsendhicl10aComponent;
  let fixture: ComponentFixture<Tariandsendhicl10aComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Tariandsendhicl10aComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Tariandsendhicl10aComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
