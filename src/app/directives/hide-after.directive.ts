import { Directive, Input, OnInit, TemplateRef, ViewContainerRef } from '@angular/core';

@Directive({
  selector: '[hideAfter]',
  standalone: false
})
export class HideAfterDirective implements OnInit {



  @Input('hideAfter') delay = 0


  @Input('hideAfterAfter') placeholder: TemplateRef<any> | null = null



  constructor(
    private tmplate: TemplateRef<any>,
    private containar: ViewContainerRef) { }

  ngOnInit(): void {
    this.containar.createEmbeddedView(this.tmplate)

    setTimeout(() => {
      this.containar.clear();
      if (this.placeholder) {
        this.containar.createEmbeddedView(this.placeholder)
      }
    }, this.delay)
  }

}
