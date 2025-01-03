import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PossassetComponent } from './possasset.component';

describe('PossassetComponent', () => {
  let component: PossassetComponent;
  let fixture: ComponentFixture<PossassetComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PossassetComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PossassetComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
