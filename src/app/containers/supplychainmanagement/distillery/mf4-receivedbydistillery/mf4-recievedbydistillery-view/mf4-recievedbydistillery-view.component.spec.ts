import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Mf4RecievedbydistilleryViewComponent } from './mf4-recievedbydistillery-view.component';

describe('Mf4RecievedbydistilleryViewComponent', () => {
  let component: Mf4RecievedbydistilleryViewComponent;
  let fixture: ComponentFixture<Mf4RecievedbydistilleryViewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Mf4RecievedbydistilleryViewComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Mf4RecievedbydistilleryViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
