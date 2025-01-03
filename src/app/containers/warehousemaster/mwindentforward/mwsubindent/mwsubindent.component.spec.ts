import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MwsubindentComponent } from './mwsubindent.component';

describe('MwsubindentComponent', () => {
  let component: MwsubindentComponent;
  let fixture: ComponentFixture<MwsubindentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MwsubindentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MwsubindentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
