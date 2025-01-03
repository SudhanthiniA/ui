import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MisreportvtsComponent } from './misreportvts.component';

describe('MisreportvtsComponent', () => {
  let component: MisreportvtsComponent;
  let fixture: ComponentFixture<MisreportvtsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MisreportvtsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MisreportvtsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
