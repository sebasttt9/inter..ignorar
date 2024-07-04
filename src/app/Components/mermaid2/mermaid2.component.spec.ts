import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Mermaid2Component } from './mermaid2.component';

describe('Mermaid2Component', () => {
  let component: Mermaid2Component;
  let fixture: ComponentFixture<Mermaid2Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Mermaid2Component]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(Mermaid2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
