import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewfieldengineerComponent } from './viewfieldengineer.component';

describe('ViewfieldengineerComponent', () => {
  let component: ViewfieldengineerComponent;
  let fixture: ComponentFixture<ViewfieldengineerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ViewfieldengineerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewfieldengineerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
