import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddquotarevenuetransferfeesComponent } from './addquotarevenuetransferfees.component';

describe('AddquotarevenuetransferfeesComponent', () => {
  let component: AddquotarevenuetransferfeesComponent;
  let fixture: ComponentFixture<AddquotarevenuetransferfeesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddquotarevenuetransferfeesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddquotarevenuetransferfeesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
