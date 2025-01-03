import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HighcourtcaseformComponent } from './highcourtcaseform.component';

describe('HighcourtcaseformComponent', () => {
  let component: HighcourtcaseformComponent;
  let fixture: ComponentFixture<HighcourtcaseformComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HighcourtcaseformComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HighcourtcaseformComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
