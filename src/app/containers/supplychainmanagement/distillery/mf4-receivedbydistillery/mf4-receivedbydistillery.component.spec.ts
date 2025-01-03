import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Mf4ReceivedbydistilleryComponent } from './mf4-receivedbydistillery.component';

describe('Mf4ReceivedbydistilleryComponent', () => {
  let component: Mf4ReceivedbydistilleryComponent;
  let fixture: ComponentFixture<Mf4ReceivedbydistilleryComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Mf4ReceivedbydistilleryComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Mf4ReceivedbydistilleryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
