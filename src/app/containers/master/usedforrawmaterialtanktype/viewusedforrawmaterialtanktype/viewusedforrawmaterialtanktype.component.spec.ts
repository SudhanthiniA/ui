import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewusedforrawmaterialtanktypeComponent } from './viewusedforrawmaterialtanktype.component';

describe('ViewusedforrawmaterialtanktypeComponent', () => {
  let component: ViewusedforrawmaterialtanktypeComponent;
  let fixture: ComponentFixture<ViewusedforrawmaterialtanktypeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ViewusedforrawmaterialtanktypeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewusedforrawmaterialtanktypeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
