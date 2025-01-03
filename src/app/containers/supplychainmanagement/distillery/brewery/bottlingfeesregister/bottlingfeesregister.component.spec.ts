import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BottlingfeesregisterComponent } from './bottlingfeesregister.component';

describe('BottlingfeesregisterComponent', () => {
  let component: BottlingfeesregisterComponent;
  let fixture: ComponentFixture<BottlingfeesregisterComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BottlingfeesregisterComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BottlingfeesregisterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
