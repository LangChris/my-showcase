import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TechnologiesComponent } from './technologies.component';

describe('TechnologiesComponent', () => {
  let component: TechnologiesComponent;
  let fixture: ComponentFixture<TechnologiesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [TechnologiesComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TechnologiesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
