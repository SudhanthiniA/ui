import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewoutupdistlabelregComponent } from './viewoutupdistlabelreg.component';

describe('ViewoutupdistlabelregComponent', () => {
  let component: ViewoutupdistlabelregComponent;
  let fixture: ComponentFixture<ViewoutupdistlabelregComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ViewoutupdistlabelregComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewoutupdistlabelregComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
