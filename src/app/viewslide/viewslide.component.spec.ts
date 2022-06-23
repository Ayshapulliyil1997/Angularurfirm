import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewslideComponent } from './viewslide.component';

describe('ViewslideComponent', () => {
  let component: ViewslideComponent;
  let fixture: ComponentFixture<ViewslideComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ViewslideComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewslideComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
