import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { IndentmetallurgyComponent } from './indentmetallurgy.component';

describe('IndentmetallurgyComponent', () => {
  let component: IndentmetallurgyComponent;
  let fixture: ComponentFixture<IndentmetallurgyComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ IndentmetallurgyComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(IndentmetallurgyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
