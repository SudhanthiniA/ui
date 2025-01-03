import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewVillageComponent } from './view-village.component';

describe('ViewVillageComponent', () => {
  let component: ViewVillageComponent;
  let fixture: ComponentFixture<ViewVillageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ViewVillageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewVillageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
