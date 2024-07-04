import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Mermaid1Component } from './mermaid1.component';

describe('Mermaid1Component', () => {
  let component: Mermaid1Component;
  let fixture: ComponentFixture<Mermaid1Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Mermaid1Component]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(Mermaid1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
