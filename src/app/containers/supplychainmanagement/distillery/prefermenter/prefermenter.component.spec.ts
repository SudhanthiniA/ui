import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PrefermenterComponent } from './prefermenter.component';

describe('PrefermenterComponent', () => {
  let component: PrefermenterComponent;
  let fixture: ComponentFixture<PrefermenterComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PrefermenterComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PrefermenterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
