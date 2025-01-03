import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { VechicletrackingComponent } from './vechicletracking.component';

describe('VechicletrackingComponent', () => {
  let component: VechicletrackingComponent;
  let fixture: ComponentFixture<VechicletrackingComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VechicletrackingComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VechicletrackingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
