import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PasscanmodComponent } from './passcanmod.component';

describe('PasscanmodComponent', () => {
  let component: PasscanmodComponent;
  let fixture: ComponentFixture<PasscanmodComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PasscanmodComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PasscanmodComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
