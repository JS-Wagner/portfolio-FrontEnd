import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ArgPLogoComponent } from './navbar.component';

describe('ArgPLogoComponent', () => {
  let component: ArgPLogoComponent;
  let fixture: ComponentFixture<ArgPLogoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ArgPLogoComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ArgPLogoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
