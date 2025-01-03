import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TankdrumbarrelregistrationComponent } from './tankdrumbarrelregistration.component';

describe('TankdrumbarrelregistrationComponent', () => {
  let component: TankdrumbarrelregistrationComponent;
  let fixture: ComponentFixture<TankdrumbarrelregistrationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TankdrumbarrelregistrationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TankdrumbarrelregistrationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
