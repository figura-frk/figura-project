import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LingerieComponent } from './lingerie.component';

describe('LingerieComponent', () => {
  let component: LingerieComponent;
  let fixture: ComponentFixture<LingerieComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LingerieComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LingerieComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
