import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WholesalemonocartontransportpassdraftComponent } from './wholesalemonocartontransportpassdraft.component';

describe('WholesalemonocartontransportpassdraftComponent', () => {
  let component: WholesalemonocartontransportpassdraftComponent;
  let fixture: ComponentFixture<WholesalemonocartontransportpassdraftComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WholesalemonocartontransportpassdraftComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WholesalemonocartontransportpassdraftComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
