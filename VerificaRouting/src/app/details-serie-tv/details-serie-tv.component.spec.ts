import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DetailsSerieTvComponent } from './details-serie-tv.component';

describe('DetailsSerieTvComponent', () => {
  let component: DetailsSerieTvComponent;
  let fixture: ComponentFixture<DetailsSerieTvComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DetailsSerieTvComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DetailsSerieTvComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
