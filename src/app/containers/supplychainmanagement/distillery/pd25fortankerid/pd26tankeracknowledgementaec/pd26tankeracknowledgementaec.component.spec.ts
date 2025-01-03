import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Pd26tankeracknowledgementaecComponent } from './pd26tankeracknowledgementaec.component';

describe('Pd26tankeracknowledgementaecComponent', () => {
  let component: Pd26tankeracknowledgementaecComponent;
  let fixture: ComponentFixture<Pd26tankeracknowledgementaecComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Pd26tankeracknowledgementaecComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Pd26tankeracknowledgementaecComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
