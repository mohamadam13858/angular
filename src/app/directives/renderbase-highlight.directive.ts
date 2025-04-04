import { Directive, ElementRef, HostBinding, HostListener, Input, OnInit, Renderer2 } from '@angular/core';

@Directive({
  selector: '[appRenderbaseHighlight]',
  standalone: false
})
export class RenderbaseHighlightDirective implements OnInit {

  @Input() DefaultColor: string = 'green';
  @Input() hoverColor: string = 'red'


  @HostBinding('style.backgroundColor') backColor: string = this.DefaultColor;



  constructor(private elRef: ElementRef, private renderer: Renderer2) { }


  ngOnInit() {
    this.backColor = this.DefaultColor
    // this.renderer.setStyle(this.elRef.nativeElement, 'backgroundColor', 'green')
  }

  @HostListener('mouseenter') changeColor() {
    // this.renderer.setStyle(this.elRef.nativeElement, 'backgroundColor', 'red')
    this.backColor = this.hoverColor
  }
  @HostListener('mouseleave') defaultColor() {
    // this.renderer.setStyle(this.elRef.nativeElement, 'backgroundColor', 'green')
    this.backColor = this.DefaultColor
  }

}
