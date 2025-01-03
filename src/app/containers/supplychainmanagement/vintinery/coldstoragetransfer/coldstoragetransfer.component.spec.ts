import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ColdstoragetransferComponent } from './coldstoragetransfer.component';

describe('ColdstoragetransferComponent', () => {
  let component: ColdstoragetransferComponent;
  let fixture: ComponentFixture<ColdstoragetransferComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ColdstoragetransferComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ColdstoragetransferComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
