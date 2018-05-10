import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RecipeIsOpenComponent } from './recipe-is-open.component';

describe('RecipeIsOpenComponent', () => {
  let component: RecipeIsOpenComponent;
  let fixture: ComponentFixture<RecipeIsOpenComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RecipeIsOpenComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RecipeIsOpenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
