import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewstoremasterComponent } from './viewstoremaster.component';

describe('ViewstoremasterComponent', () => {
  let component: ViewstoremasterComponent;
  let fixture: ComponentFixture<ViewstoremasterComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ViewstoremasterComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewstoremasterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
