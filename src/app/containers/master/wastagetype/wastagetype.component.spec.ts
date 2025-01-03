import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WastagetypeComponent } from './wastagetype.component';

describe('WastagetypeComponent', () => {
  let component: WastagetypeComponent;
  let fixture: ComponentFixture<WastagetypeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WastagetypeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WastagetypeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
