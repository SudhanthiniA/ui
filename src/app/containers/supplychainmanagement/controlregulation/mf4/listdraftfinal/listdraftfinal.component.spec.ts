import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListdraftfinalComponent } from './listdraftfinal.component';

describe('ListdraftfinalComponent', () => {
  let component: ListdraftfinalComponent;
  let fixture: ComponentFixture<ListdraftfinalComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListdraftfinalComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListdraftfinalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
