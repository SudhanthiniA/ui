import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PreprationofflclblendComponent } from './preprationofflclblend.component';

describe('PreprationofflclblendComponent', () => {
  let component: PreprationofflclblendComponent;
  let fixture: ComponentFixture<PreprationofflclblendComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PreprationofflclblendComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PreprationofflclblendComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
