import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SpiritviewComponent } from './spiritview.component';

describe('SpiritviewComponent', () => {
  let component: SpiritviewComponent;
  let fixture: ComponentFixture<SpiritviewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SpiritviewComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SpiritviewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
