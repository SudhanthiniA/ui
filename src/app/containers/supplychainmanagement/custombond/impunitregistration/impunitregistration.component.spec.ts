import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ImpunitregistrationComponent } from './impunitregistration.component';

describe('ImpunitregistrationComponent', () => {
  let component: ImpunitregistrationComponent;
  let fixture: ComponentFixture<ImpunitregistrationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ImpunitregistrationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ImpunitregistrationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
