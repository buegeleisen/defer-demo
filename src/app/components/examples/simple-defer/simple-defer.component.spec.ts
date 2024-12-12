import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SimpleDeferComponent } from './simple-defer.component';

describe('SimpleDeferComponent', () => {
  let component: SimpleDeferComponent;
  let fixture: ComponentFixture<SimpleDeferComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SimpleDeferComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SimpleDeferComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
