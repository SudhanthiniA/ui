import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewpossassetComponent } from './viewpossasset.component';

describe('ViewpossassetComponent', () => {
  let component: ViewpossassetComponent;
  let fixture: ComponentFixture<ViewpossassetComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ViewpossassetComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewpossassetComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
