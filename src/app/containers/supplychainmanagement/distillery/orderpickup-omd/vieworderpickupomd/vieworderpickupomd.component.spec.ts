import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { VieworderpickupomdComponent } from './vieworderpickupomd.component';

describe('VieworderpickupomdComponent', () => {
  let component: VieworderpickupomdComponent;
  let fixture: ComponentFixture<VieworderpickupomdComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VieworderpickupomdComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VieworderpickupomdComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
