import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RodemapComponent } from './rodemap.component';

describe('RodemapComponent', () => {
  let component: RodemapComponent;
  let fixture: ComponentFixture<RodemapComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RodemapComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RodemapComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
