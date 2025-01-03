import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewbarqrwastageComponent } from './viewbarqrwastage.component';

describe('ViewbarqrwastageComponent', () => {
  let component: ViewbarqrwastageComponent;
  let fixture: ComponentFixture<ViewbarqrwastageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ViewbarqrwastageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewbarqrwastageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
