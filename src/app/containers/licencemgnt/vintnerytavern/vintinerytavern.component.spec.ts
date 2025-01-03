import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { VintinerytavernComponent } from './vintinerytavern.component';

describe('VintinerytavernComponent', () => {
  let component: VintinerytavernComponent;
  let fixture: ComponentFixture<VintinerytavernComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VintinerytavernComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VintinerytavernComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
