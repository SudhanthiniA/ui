import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewmmwstockinComponent } from './viewmmwstockin.component';

describe('ViewmmwstockinComponent', () => {
  let component: ViewmmwstockinComponent;
  let fixture: ComponentFixture<ViewmmwstockinComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ViewmmwstockinComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewmmwstockinComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
