import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RandomPreviewComponent } from './random-preview.component';

describe('RandomPreviewComponent', () => {
  let component: RandomPreviewComponent;
  let fixture: ComponentFixture<RandomPreviewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RandomPreviewComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RandomPreviewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
