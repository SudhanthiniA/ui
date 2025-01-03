import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Viewcl10aComponent } from './viewcl10a.component';

describe('Viewcl10aComponent', () => {
  let component: Viewcl10aComponent;
  let fixture: ComponentFixture<Viewcl10aComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Viewcl10aComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Viewcl10aComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
