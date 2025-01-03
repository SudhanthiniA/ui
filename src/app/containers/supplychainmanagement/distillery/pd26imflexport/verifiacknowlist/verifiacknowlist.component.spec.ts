import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { VerifiacknowlistComponent } from './verifiacknowlist.component';

describe('VerifiacknowlistComponent', () => {
  let component: VerifiacknowlistComponent;
  let fixture: ComponentFixture<VerifiacknowlistComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VerifiacknowlistComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VerifiacknowlistComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
