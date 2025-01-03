import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Mf4TpGenerationComponent } from './mf4-tp-generation.component';

describe('Mf4TpGenerationComponent', () => {
  let component: Mf4TpGenerationComponent;
  let fixture: ComponentFixture<Mf4TpGenerationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Mf4TpGenerationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Mf4TpGenerationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
