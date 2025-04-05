import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MohamadComponent } from './mohamad.component';

describe('MohamadComponent', () => {
  let component: MohamadComponent;
  let fixture: ComponentFixture<MohamadComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [MohamadComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MohamadComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
