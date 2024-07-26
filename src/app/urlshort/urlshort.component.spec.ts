import { ComponentFixture, TestBed } from '@angular/core/testing';

import { URLShortComponent } from './urlshort.component';

describe('URLShortComponent', () => {
  let component: URLShortComponent;
  let fixture: ComponentFixture<URLShortComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [URLShortComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(URLShortComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
