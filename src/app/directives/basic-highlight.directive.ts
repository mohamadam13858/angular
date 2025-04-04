import { Directive, ElementRef, OnInit } from "@angular/core";


@Directive({
    selector: '[appBasicHighlight]',
    standalone: false
})
export class BasicHighlihgtDirective implements OnInit {

    constructor(private element: ElementRef) {
    }


    ngOnInit() {
        this.element.nativeElement.style.backgroundColor = 'green'
    }
}