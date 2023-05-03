import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DreamworksComponent } from './dreamworks.component';

describe('DreamworksComponent', () => {
  let component: DreamworksComponent;
  let fixture: ComponentFixture<DreamworksComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DreamworksComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DreamworksComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
