import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LatesttransactionComponent } from './latesttransaction.component';

describe('LatesttransactionComponent', () => {
  let component: LatesttransactionComponent;
  let fixture: ComponentFixture<LatesttransactionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [LatesttransactionComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LatesttransactionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
