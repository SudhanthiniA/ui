import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Viewmf9fortnightComponent } from './viewmf9fortnight.component';

describe('Viewmf9fortnightComponent', () => {
  let component: Viewmf9fortnightComponent;
  let fixture: ComponentFixture<Viewmf9fortnightComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Viewmf9fortnightComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Viewmf9fortnightComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
