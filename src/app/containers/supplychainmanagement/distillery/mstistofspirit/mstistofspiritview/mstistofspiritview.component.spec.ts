import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MstistofspiritviewComponent } from './mstistofspiritview.component';

describe('MstistofspiritviewComponent', () => {
  let component: MstistofspiritviewComponent;
  let fixture: ComponentFixture<MstistofspiritviewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MstistofspiritviewComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MstistofspiritviewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
