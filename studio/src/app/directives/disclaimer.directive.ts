import { Directive, ElementRef, HostListener } from '@angular/core';

@Directive({
  selector: '[appDisclaimer]',
})
export class DisclaimertDirective {
  constructor(private elementRef: ElementRef) {
    this.elementRef.nativeElement.style.backgroundColor = '#03a9f4';
    this.elementRef.nativeElement.style.fontSize = '15px';
    this.elementRef.nativeElement.style.padding = '5px';
    this.elementRef.nativeElement.style.color = 'white';
    this.elementRef.nativeElement.style.marginTop = '10px';
    this.elementRef.nativeElement.style.borderRadius = '5px';
    this.elementRef.nativeElement.style.textAlign = 'center';
    this.elementRef.nativeElement.style.cursor = 'pointer';
    this.elementRef.nativeElement.style.transition =
      'background-color 0.3s ease';
  }

  @HostListener('mouseenter') onMouseEnter() {
    this.elementRef.nativeElement.style.backgroundColor = 'black';
  }

  @HostListener('mouseleave') onMouseLeave() {
    this.elementRef.nativeElement.style.backgroundColor = '#03a9f4';
  }
}
