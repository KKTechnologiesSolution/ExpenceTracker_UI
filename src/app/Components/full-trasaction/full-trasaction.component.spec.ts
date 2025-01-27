import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FullTrasactionComponent } from './full-trasaction.component';

describe('FullTrasactionComponent', () => {
  let component: FullTrasactionComponent;
  let fixture: ComponentFixture<FullTrasactionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FullTrasactionComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FullTrasactionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
