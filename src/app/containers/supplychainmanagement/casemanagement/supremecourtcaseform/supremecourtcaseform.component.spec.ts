import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SupremecourtcaseformComponent } from './supremecourtcaseform.component';

describe('SupremecourtcaseformComponent', () => {
  let component: SupremecourtcaseformComponent;
  let fixture: ComponentFixture<SupremecourtcaseformComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SupremecourtcaseformComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SupremecourtcaseformComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
