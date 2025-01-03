import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SubindentcancellationComponent } from './subindentcancellation.component';

describe('SubindentcancellationComponent', () => {
  let component: SubindentcancellationComponent;
  let fixture: ComponentFixture<SubindentcancellationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SubindentcancellationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SubindentcancellationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
