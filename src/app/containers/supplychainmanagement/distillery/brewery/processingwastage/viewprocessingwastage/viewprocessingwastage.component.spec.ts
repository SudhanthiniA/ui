import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewprocessingwastageComponent } from './viewprocessingwastage.component';

describe('ViewprocessingwastageComponent', () => {
  let component: ViewprocessingwastageComponent;
  let fixture: ComponentFixture<ViewprocessingwastageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ViewprocessingwastageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewprocessingwastageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
