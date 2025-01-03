import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RepackcartonsComponent } from './repackcartons.component';

describe('RepackcartonsComponent', () => {
  let component: RepackcartonsComponent;
  let fixture: ComponentFixture<RepackcartonsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RepackcartonsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RepackcartonsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
