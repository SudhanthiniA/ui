import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SheerastatementformatComponent } from './sheerastatementformat.component';

describe('SheerastatementformatComponent', () => {
  let component: SheerastatementformatComponent;
  let fixture: ComponentFixture<SheerastatementformatComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SheerastatementformatComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SheerastatementformatComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
