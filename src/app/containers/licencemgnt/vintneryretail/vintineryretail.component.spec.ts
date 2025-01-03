import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { VintineryretailComponent } from './vintineryretail.component';

describe('VintineryretailComponent', () => {
  let component: VintineryretailComponent;
  let fixture: ComponentFixture<VintineryretailComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VintineryretailComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VintineryretailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
