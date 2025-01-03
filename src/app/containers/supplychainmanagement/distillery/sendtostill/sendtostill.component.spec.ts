import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SendtostillComponent } from './sendtostill.component';

describe('SendtostillComponent', () => {
  let component: SendtostillComponent;
  let fixture: ComponentFixture<SendtostillComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SendtostillComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SendtostillComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
