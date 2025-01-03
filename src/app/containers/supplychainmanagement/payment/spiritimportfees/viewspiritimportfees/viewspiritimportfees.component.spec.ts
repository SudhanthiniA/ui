import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewspiritimportfeesComponent } from './viewspiritimportfees.component';

describe('ViewspiritimportfeesComponent', () => {
  let component: ViewspiritimportfeesComponent;
  let fixture: ComponentFixture<ViewspiritimportfeesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ViewspiritimportfeesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewspiritimportfeesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
