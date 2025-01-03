import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ShherastatementformatportalComponent } from './shherastatementformatportal.component';

describe('ShherastatementformatportalComponent', () => {
  let component: ShherastatementformatportalComponent;
  let fixture: ComponentFixture<ShherastatementformatportalComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ShherastatementformatportalComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ShherastatementformatportalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
