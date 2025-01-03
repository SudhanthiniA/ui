import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UsedforrawmaterialtanktypeComponent } from './usedforrawmaterialtanktype.component';

describe('UsedforrawmaterialtanktypeComponent', () => {
  let component: UsedforrawmaterialtanktypeComponent;
  let fixture: ComponentFixture<UsedforrawmaterialtanktypeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UsedforrawmaterialtanktypeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UsedforrawmaterialtanktypeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
