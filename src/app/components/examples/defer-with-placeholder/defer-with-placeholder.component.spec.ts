import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DeferWithPlaceholderComponent } from './defer-with-placeholder.component';

describe('DeferWithPlaceholderComponent', () => {
  let component: DeferWithPlaceholderComponent;
  let fixture: ComponentFixture<DeferWithPlaceholderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DeferWithPlaceholderComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DeferWithPlaceholderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
