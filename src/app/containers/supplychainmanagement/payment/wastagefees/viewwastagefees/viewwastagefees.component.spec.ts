import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewwastagefeesComponent } from './viewwastagefees.component';

describe('ViewwastagefeesComponent', () => {
  let component: ViewwastagefeesComponent;
  let fixture: ComponentFixture<ViewwastagefeesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ViewwastagefeesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewwastagefeesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
