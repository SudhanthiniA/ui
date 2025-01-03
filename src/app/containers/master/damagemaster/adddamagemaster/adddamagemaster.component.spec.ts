import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AdddamagemasterComponent } from './adddamagemaster.component';

describe('AdddamagemasterComponent', () => {
  let component: AdddamagemasterComponent;
  let fixture: ComponentFixture<AdddamagemasterComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdddamagemasterComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdddamagemasterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
