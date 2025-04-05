import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MohamadIdComponent } from './mohamad-id.component';

describe('MohamadIdComponent', () => {
  let component: MohamadIdComponent;
  let fixture: ComponentFixture<MohamadIdComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [MohamadIdComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MohamadIdComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
