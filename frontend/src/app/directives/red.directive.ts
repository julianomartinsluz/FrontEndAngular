import { Directive, ElementRef } from '@angular/core';

@Directive({
  selector: '[icone]'
})
export class RedDirective {

  constructor(private el: ElementRef) {
    el.nativeElement.style.color = 'red'
  }

}
