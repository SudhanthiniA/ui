import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MunicipalareaComponent } from './municipalarea.component';

describe('MunicipalareaComponent', () => {
  let component: MunicipalareaComponent;
  let fixture: ComponentFixture<MunicipalareaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MunicipalareaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MunicipalareaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
