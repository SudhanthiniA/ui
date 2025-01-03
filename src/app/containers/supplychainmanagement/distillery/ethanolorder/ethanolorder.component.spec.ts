import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EthanolorderComponent } from './ethanolorder.component';

describe('EthanolorderComponent', () => {
  let component: EthanolorderComponent;
  let fixture: ComponentFixture<EthanolorderComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EthanolorderComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EthanolorderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
