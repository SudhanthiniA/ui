import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MwindentacceptanceComponent } from './mwindentacceptance.component';

describe('MwindentacceptanceComponent', () => {
  let component: MwindentacceptanceComponent;
  let fixture: ComponentFixture<MwindentacceptanceComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MwindentacceptanceComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MwindentacceptanceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
