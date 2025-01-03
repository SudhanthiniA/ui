import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Mf4RecieddistilleryEditComponent } from './mf4-recieddistillery-edit.component';

describe('Mf4RecieddistilleryEditComponent', () => {
  let component: Mf4RecieddistilleryEditComponent;
  let fixture: ComponentFixture<Mf4RecieddistilleryEditComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Mf4RecieddistilleryEditComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Mf4RecieddistilleryEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
