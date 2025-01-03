import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { VieworderpickComponent } from './vieworderpick.component';

describe('VieworderpickComponent', () => {
  let component: VieworderpickComponent;
  let fixture: ComponentFixture<VieworderpickComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VieworderpickComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VieworderpickComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
