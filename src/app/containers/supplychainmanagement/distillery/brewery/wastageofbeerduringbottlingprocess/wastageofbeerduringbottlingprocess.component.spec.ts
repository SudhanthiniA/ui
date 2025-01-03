import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WastageofbeerduringbottlingprocessComponent } from './wastageofbeerduringbottlingprocess.component';

describe('WastageofbeerduringbottlingprocessComponent', () => {
  let component: WastageofbeerduringbottlingprocessComponent;
  let fixture: ComponentFixture<WastageofbeerduringbottlingprocessComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WastageofbeerduringbottlingprocessComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WastageofbeerduringbottlingprocessComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
