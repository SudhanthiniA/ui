import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EthanolindentComponent } from './ethanolindent.component';

describe('EthanolindentComponent', () => {
  let component: EthanolindentComponent;
  let fixture: ComponentFixture<EthanolindentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EthanolindentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EthanolindentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
