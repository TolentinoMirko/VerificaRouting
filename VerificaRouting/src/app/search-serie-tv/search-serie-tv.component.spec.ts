import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SearchSerieTvComponent } from './search-serie-tv.component';

describe('SearchSerieTvComponent', () => {
  let component: SearchSerieTvComponent;
  let fixture: ComponentFixture<SearchSerieTvComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SearchSerieTvComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SearchSerieTvComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
