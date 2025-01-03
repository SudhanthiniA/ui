import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Clb5declarationComponent } from './clb5declaration.component';

describe('Clb5declarationComponent', () => {
  let component: Clb5declarationComponent;
  let fixture: ComponentFixture<Clb5declarationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Clb5declarationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Clb5declarationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
