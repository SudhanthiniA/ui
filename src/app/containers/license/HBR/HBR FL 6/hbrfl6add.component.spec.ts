import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Hbrfl6addComponent } from './hbrfl6add.component';

describe('Hbrfl6addComponent', () => {
  let component: Hbrfl6addComponent;
  let fixture: ComponentFixture<Hbrfl6addComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Hbrfl6addComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Hbrfl6addComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
