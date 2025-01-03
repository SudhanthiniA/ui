import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewquotaComponent } from './viewquota.component';

describe('ViewquotaComponent', () => {
  let component: ViewquotaComponent;
  let fixture: ComponentFixture<ViewquotaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ViewquotaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewquotaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
