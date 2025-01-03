import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ExportindentliquorComponent } from './exportindentliquor.component';

describe('ExportindentliquorComponent', () => {
  let component: ExportindentliquorComponent;
  let fixture: ComponentFixture<ExportindentliquorComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ExportindentliquorComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ExportindentliquorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
