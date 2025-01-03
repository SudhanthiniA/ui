import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Mf9fortnightComponent } from './mf9fortnight.component';

describe('Mf9fortnightComponent', () => {
  let component: Mf9fortnightComponent;
  let fixture: ComponentFixture<Mf9fortnightComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Mf9fortnightComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Mf9fortnightComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
