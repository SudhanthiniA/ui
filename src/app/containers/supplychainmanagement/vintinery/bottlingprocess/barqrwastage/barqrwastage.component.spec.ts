import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BarqrwastageComponent } from './barqrwastage.component';

describe('BarqrwastageComponent', () => {
  let component: BarqrwastageComponent;
  let fixture: ComponentFixture<BarqrwastageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BarqrwastageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BarqrwastageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
