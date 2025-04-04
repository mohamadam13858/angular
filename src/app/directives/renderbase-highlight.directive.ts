import { Directive, ElementRef, HostListener, OnInit, Renderer2 } from '@angular/core';

@Directive({
  selector: '[appRenderbaseHighlight]',
  standalone: false
})
export class RenderbaseHighlightDirective implements OnInit {

  constructor(private elRef: ElementRef, private renderer: Renderer2) { }


  ngOnInit() {
    this.renderer.setStyle(this.elRef.nativeElement, 'backgroundColor', 'green')
  }

  @HostListener('mouseenter') changeColor() {
    this.renderer.setStyle(this.elRef.nativeElement, 'backgroundColor', 'red')
  }
  @HostListener('mouseleave') defaultColor() {
    this.renderer.setStyle(this.elRef.nativeElement, 'backgroundColor', 'green')
  }

}
