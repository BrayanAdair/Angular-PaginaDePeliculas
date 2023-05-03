import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BlumhouseComponent } from './blumhouse.component';

describe('BlumhouseComponent', () => {
  let component: BlumhouseComponent;
  let fixture: ComponentFixture<BlumhouseComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BlumhouseComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BlumhouseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
