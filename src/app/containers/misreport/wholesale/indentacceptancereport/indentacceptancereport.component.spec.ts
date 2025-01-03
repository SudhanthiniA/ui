import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { IndentacceptancereportComponent } from './indentacceptancereport.component';

describe('IndentacceptancereportComponent', () => {
  let component: IndentacceptancereportComponent;
  let fixture: ComponentFixture<IndentacceptancereportComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ IndentacceptancereportComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(IndentacceptancereportComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
