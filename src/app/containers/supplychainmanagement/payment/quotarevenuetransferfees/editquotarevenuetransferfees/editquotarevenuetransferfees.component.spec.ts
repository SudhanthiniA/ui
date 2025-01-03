import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EditquotarevenuetransferfeesComponent } from './editquotarevenuetransferfees.component';

describe('EditquotarevenuetransferfeesComponent', () => {
  let component: EditquotarevenuetransferfeesComponent;
  let fixture: ComponentFixture<EditquotarevenuetransferfeesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EditquotarevenuetransferfeesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EditquotarevenuetransferfeesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
