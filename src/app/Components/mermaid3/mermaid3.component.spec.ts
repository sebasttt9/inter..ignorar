import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Mermaid3Component } from './mermaid3.component';

describe('Mermaid3Component', () => {
  let component: Mermaid3Component;
  let fixture: ComponentFixture<Mermaid3Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Mermaid3Component]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(Mermaid3Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
