import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Mermaid4Component } from './mermaid4.component';

describe('Mermaid4Component', () => {
  let component: Mermaid4Component;
  let fixture: ComponentFixture<Mermaid4Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Mermaid4Component]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(Mermaid4Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
