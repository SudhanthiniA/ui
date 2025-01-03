import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BottlingindentComponent } from './bottlingindent.component';

describe('BottlingindentComponent', () => {
  let component: BottlingindentComponent;
  let fixture: ComponentFixture<BottlingindentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BottlingindentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BottlingindentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
