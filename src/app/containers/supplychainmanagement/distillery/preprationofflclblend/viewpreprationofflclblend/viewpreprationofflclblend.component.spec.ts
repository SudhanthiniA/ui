import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewpreprationofflclblendComponent } from './viewpreprationofflclblend.component';

describe('ViewpreprationofflclblendComponent', () => {
  let component: ViewpreprationofflclblendComponent;
  let fixture: ComponentFixture<ViewpreprationofflclblendComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ViewpreprationofflclblendComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewpreprationofflclblendComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
