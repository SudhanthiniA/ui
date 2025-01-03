import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewndepermitComponent } from './viewndepermit.component';

describe('ViewndepermitComponent', () => {
  let component: ViewndepermitComponent;
  let fixture: ComponentFixture<ViewndepermitComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ViewndepermitComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewndepermitComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
