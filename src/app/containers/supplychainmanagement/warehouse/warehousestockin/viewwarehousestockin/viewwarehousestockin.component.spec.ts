import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewwarehousestockinComponent } from './viewwarehousestockin.component';

describe('ViewwarehousestockinComponent', () => {
  let component: ViewwarehousestockinComponent;
  let fixture: ComponentFixture<ViewwarehousestockinComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ViewwarehousestockinComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewwarehousestockinComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
