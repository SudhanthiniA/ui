import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RedistillationrequestforspiritblindComponent } from './redistillationrequestforspiritblind.component';

describe('RedistillationrequestforspiritblindComponent', () => {
  let component: RedistillationrequestforspiritblindComponent;
  let fixture: ComponentFixture<RedistillationrequestforspiritblindComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RedistillationrequestforspiritblindComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RedistillationrequestforspiritblindComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
