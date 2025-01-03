import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewshiftconfigComponent } from './viewshiftconfig.component';

describe('ViewshiftconfigComponent', () => {
  let component: ViewshiftconfigComponent;
  let fixture: ComponentFixture<ViewshiftconfigComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ViewshiftconfigComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewshiftconfigComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
