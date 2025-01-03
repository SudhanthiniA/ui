import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BottlingproplannewComponent } from './bottlingproplannew.component';

describe('BottlingproplannewComponent', () => {
  let component: BottlingproplannewComponent;
  let fixture: ComponentFixture<BottlingproplannewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BottlingproplannewComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BottlingproplannewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
