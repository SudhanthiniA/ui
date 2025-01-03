import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BottlingplanclosureComponent } from './bottlingplanclosure.component';

describe('BottlingplanclosureComponent', () => {
  let component: BottlingplanclosureComponent;
  let fixture: ComponentFixture<BottlingplanclosureComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BottlingplanclosureComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BottlingplanclosureComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
