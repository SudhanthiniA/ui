import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Mf4receivingwastageComponent } from './mf4receivingwastage.component';

describe('Mf4receivingwastageComponent', () => {
  let component: Mf4receivingwastageComponent;
  let fixture: ComponentFixture<Mf4receivingwastageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Mf4receivingwastageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Mf4receivingwastageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
