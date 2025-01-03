import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NotifisentlicregComponent } from './notifisentlicreg.component';

describe('NotifisentlicregComponent', () => {
  let component: NotifisentlicregComponent;
  let fixture: ComponentFixture<NotifisentlicregComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NotifisentlicregComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NotifisentlicregComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
