import { Directive, ElementRef, HostListener } from '@angular/core';

@Directive({
  selector: 'img[appImgBroken]' //solo afecta a las etiquetas img
})
export class ImgBrokenDirective {
  @HostListener('error') handlerError(): void{  //abre un listener del elemento html
    const nativeElement = this.elHost.nativeElement

    nativeElement.src = '../../../assets/images/imgBroken.png'
  
  }          
  constructor(private elHost: ElementRef) { 
  }



}
