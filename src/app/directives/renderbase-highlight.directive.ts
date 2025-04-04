import { Directive, ElementRef, HostBinding, HostListener, OnInit, Renderer2 } from '@angular/core';

@Directive({
  selector: '[appRenderbaseHighlight]',
  standalone: false
})
export class RenderbaseHighlightDirective implements OnInit {

   
  @HostBinding('style.backgroundColor') backColor : string = 'green';



  constructor(private elRef: ElementRef, private renderer: Renderer2) { }


  ngOnInit() {
    // this.renderer.setStyle(this.elRef.nativeElement, 'backgroundColor', 'green')
  }

  @HostListener('mouseenter') changeColor() {
    // this.renderer.setStyle(this.elRef.nativeElement, 'backgroundColor', 'red')
   this.backColor = 'red'
  }
  @HostListener('mouseleave') defaultColor() {
    // this.renderer.setStyle(this.elRef.nativeElement, 'backgroundColor', 'green')
    this.backColor = 'green'
  }

}
