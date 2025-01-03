import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RolloverstkentryprevyearComponent } from './rolloverstkentryprevyear.component';

describe('RolloverstkentryprevyearComponent', () => {
  let component: RolloverstkentryprevyearComponent;
  let fixture: ComponentFixture<RolloverstkentryprevyearComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RolloverstkentryprevyearComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RolloverstkentryprevyearComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
