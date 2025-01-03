import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { IndentcattlefieldComponent } from './indentcattlefield.component';

describe('IndentcattlefieldComponent', () => {
  let component: IndentcattlefieldComponent;
  let fixture: ComponentFixture<IndentcattlefieldComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ IndentcattlefieldComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(IndentcattlefieldComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
