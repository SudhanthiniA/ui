import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RedistillationforbottledstockComponent } from './redistillationforbottledstock.component';

describe('RedistillationforbottledstockComponent', () => {
  let component: RedistillationforbottledstockComponent;
  let fixture: ComponentFixture<RedistillationforbottledstockComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RedistillationforbottledstockComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RedistillationforbottledstockComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
