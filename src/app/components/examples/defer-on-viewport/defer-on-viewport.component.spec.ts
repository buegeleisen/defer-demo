import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DeferOnViewportComponent } from './defer-on-viewport.component';

describe('DeferOnViewportComponent', () => {
  let component: DeferOnViewportComponent;
  let fixture: ComponentFixture<DeferOnViewportComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DeferOnViewportComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DeferOnViewportComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
