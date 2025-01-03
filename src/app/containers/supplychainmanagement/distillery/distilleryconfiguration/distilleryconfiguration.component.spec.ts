import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DistilleryconfigurationComponent } from './distilleryconfiguration.component';

describe('DistilleryconfigurationComponent', () => {
  let component: DistilleryconfigurationComponent;
  let fixture: ComponentFixture<DistilleryconfigurationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DistilleryconfigurationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DistilleryconfigurationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
