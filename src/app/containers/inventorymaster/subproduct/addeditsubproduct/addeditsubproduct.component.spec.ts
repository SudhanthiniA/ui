import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddeditsubproductComponent } from './addeditsubproduct.component';

describe('AddeditsubproductComponent', () => {
  let component: AddeditsubproductComponent;
  let fixture: ComponentFixture<AddeditsubproductComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddeditsubproductComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddeditsubproductComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
