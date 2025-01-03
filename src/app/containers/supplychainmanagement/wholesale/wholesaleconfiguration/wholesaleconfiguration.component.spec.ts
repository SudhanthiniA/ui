import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WholesaleconfigurationComponent } from './wholesaleconfiguration.component';

describe('WholesaleconfigurationComponent', () => {
  let component: WholesaleconfigurationComponent;
  let fixture: ComponentFixture<WholesaleconfigurationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WholesaleconfigurationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WholesaleconfigurationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
