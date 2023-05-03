import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PixaComponent } from './pixa.component';

describe('PixaComponent', () => {
  let component: PixaComponent;
  let fixture: ComponentFixture<PixaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PixaComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PixaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
