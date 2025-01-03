import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewoutupdistbrandregComponent } from './viewoutupdistbrandreg.component';

describe('ViewoutupdistbrandregComponent', () => {
  let component: ViewoutupdistbrandregComponent;
  let fixture: ComponentFixture<ViewoutupdistbrandregComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ViewoutupdistbrandregComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewoutupdistbrandregComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
