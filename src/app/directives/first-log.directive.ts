import { Directive, Input, OnInit } from '@angular/core';

@Directive({
  selector: '[firstlog]',
  standalone: false
})
export class FirstLogDirective implements OnInit {


  @Input('firstlog') firstName: string = '';
  @Input('firstlogAfter') secondName: string = ''
  @Input('firstlogAtend') atEnd : string = ''
  constructor() { }


  ngOnInit(): void {
    console.log('first name is:' + this.firstName);
    console.log('secondName name is:' + this.secondName);
    console.log('atEnd name is:' + this.atEnd);

  }

}
