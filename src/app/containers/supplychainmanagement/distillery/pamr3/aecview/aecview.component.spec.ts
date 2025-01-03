import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AecviewComponent } from './aecview.component';

describe('AecviewComponent', () => {
  let component: AecviewComponent;
  let fixture: ComponentFixture<AecviewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AecviewComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AecviewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
