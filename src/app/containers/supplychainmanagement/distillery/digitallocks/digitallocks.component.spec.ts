import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DigitallocksComponent } from './digitallocks.component';

describe('DigitallocksComponent', () => {
  let component: DigitallocksComponent;
  let fixture: ComponentFixture<DigitallocksComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DigitallocksComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DigitallocksComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
