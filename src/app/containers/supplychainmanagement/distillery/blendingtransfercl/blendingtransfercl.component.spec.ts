import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BlendingtransferclComponent } from './blendingtransfercl.component';

describe('BlendingtransferclComponent', () => {
  let component: BlendingtransferclComponent;
  let fixture: ComponentFixture<BlendingtransferclComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BlendingtransferclComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BlendingtransferclComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
