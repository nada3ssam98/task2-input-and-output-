import { Directive, ElementRef,HostBinding,Input,HostListener } from '@angular/core';

@Directive({
  selector: '[appChangeBackground]',
  standalone: true
})
export class ChangeBackgroundDirective {

  constructor(private element:ElementRef) { }
  @HostBinding('style.backgroundColor') backgroundColor :string ;
  overColor:string = 'gray';
  leaveColor:string = 'white';
  @HostListener('mouseover') mouseOver(eventData:Event){
    this.backgroundColor = this.overColor
  }
  @HostListener('mouseleave') mouseLeave(eventData:Event){
    this.backgroundColor = this.leaveColor
  }
}
