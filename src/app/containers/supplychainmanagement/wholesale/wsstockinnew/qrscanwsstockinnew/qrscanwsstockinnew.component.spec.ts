import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { QrscanwsstockinnewComponent } from './qrscanwsstockinnew.component';

describe('QrscanwsstockinnewComponent', () => {
  let component: QrscanwsstockinnewComponent;
  let fixture: ComponentFixture<QrscanwsstockinnewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ QrscanwsstockinnewComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(QrscanwsstockinnewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
