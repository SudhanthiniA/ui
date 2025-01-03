import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RolloverstockreportComponent } from './rolloverstockreport.component';

describe('RolloverstockreportComponent', () => {
  let component: RolloverstockreportComponent;
  let fixture: ComponentFixture<RolloverstockreportComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RolloverstockreportComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RolloverstockreportComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
