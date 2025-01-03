import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AfterapprovaltransferforredistillationComponent } from './afterapprovaltransferforredistillation.component';

describe('AfterapprovaltransferforredistillationComponent', () => {
  let component: AfterapprovaltransferforredistillationComponent;
  let fixture: ComponentFixture<AfterapprovaltransferforredistillationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AfterapprovaltransferforredistillationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AfterapprovaltransferforredistillationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
