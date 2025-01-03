import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ChatreportComponent } from './chatreport.component';

describe('ChatreportComponent', () => {
  let component: ChatreportComponent;
  let fixture: ComponentFixture<ChatreportComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ChatreportComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ChatreportComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
