import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TranspassmasterwarehouseComponent } from './transpassmasterwarehouse.component';

describe('TranspassmasterwarehouseComponent', () => {
  let component: TranspassmasterwarehouseComponent;
  let fixture: ComponentFixture<TranspassmasterwarehouseComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TranspassmasterwarehouseComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TranspassmasterwarehouseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
