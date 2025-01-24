import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ResourcerodemapComponent } from './resourcerodemap.component';

describe('ResourcerodemapComponent', () => {
  let component: ResourcerodemapComponent;
  let fixture: ComponentFixture<ResourcerodemapComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ResourcerodemapComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ResourcerodemapComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
