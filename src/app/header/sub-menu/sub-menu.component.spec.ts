import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RoundMenuComponent } from './sub-menu.component';

describe('RoundMenuComponent', () => {
  let component: RoundMenuComponent;
  let fixture: ComponentFixture<RoundMenuComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RoundMenuComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RoundMenuComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
