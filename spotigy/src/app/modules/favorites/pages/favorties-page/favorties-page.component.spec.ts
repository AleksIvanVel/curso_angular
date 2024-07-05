import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FavortiesPageComponent } from './favorties-page.component';

describe('FavortiesPageComponent', () => {
  let component: FavortiesPageComponent;
  let fixture: ComponentFixture<FavortiesPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FavortiesPageComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FavortiesPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
