import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WsstockinnewComponent } from './wsstockinnew.component';

describe('WsstockinnewComponent', () => {
  let component: WsstockinnewComponent;
  let fixture: ComponentFixture<WsstockinnewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WsstockinnewComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WsstockinnewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
