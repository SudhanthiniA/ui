import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewdamagemasterComponent } from './viewdamagemaster.component';

describe('ViewdamagemasterComponent', () => {
  let component: ViewdamagemasterComponent;
  let fixture: ComponentFixture<ViewdamagemasterComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ViewdamagemasterComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewdamagemasterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
