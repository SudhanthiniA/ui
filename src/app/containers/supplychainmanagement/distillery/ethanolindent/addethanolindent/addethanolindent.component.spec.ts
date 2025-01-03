import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddethanolindentComponent } from './addethanolindent.component';

describe('AddethanolindentComponent', () => {
  let component: AddethanolindentComponent;
  let fixture: ComponentFixture<AddethanolindentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddethanolindentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddethanolindentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
