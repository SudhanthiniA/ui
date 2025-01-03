import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MistransfersalesComponent } from './mistransfersales.component';

describe('MistransfersalesComponent', () => {
  let component: MistransfersalesComponent;
  let fixture: ComponentFixture<MistransfersalesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MistransfersalesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MistransfersalesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
