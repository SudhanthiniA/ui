import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EdpreportComponent } from './edpreport.component';

describe('EdpreportComponent', () => {
  let component: EdpreportComponent;
  let fixture: ComponentFixture<EdpreportComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EdpreportComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EdpreportComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
