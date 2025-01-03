import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MappingforoverseasupComponent } from './mappingforoverseasup.component';

describe('MappingforoverseasupComponent', () => {
  let component: MappingforoverseasupComponent;
  let fixture: ComponentFixture<MappingforoverseasupComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MappingforoverseasupComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MappingforoverseasupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
