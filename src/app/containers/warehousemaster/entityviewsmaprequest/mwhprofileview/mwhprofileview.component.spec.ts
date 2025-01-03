import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MwhprofileviewComponent } from './mwhprofileview.component';

describe('MwhprofileviewComponent', () => {
  let component: MwhprofileviewComponent;
  let fixture: ComponentFixture<MwhprofileviewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MwhprofileviewComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MwhprofileviewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
