import { Directive, ElementRef, HostListener } from '@angular/core';

@Directive({
  selector: 'img[appImgBroken]'
})
export class ImgBrokenDirective {
  @HostListener('error') handleError(): void{
    const elNativo = this.elHost.nativeElement
    console.log('🚫Esta imagen no se pudo cargar -->', this.elHost)
    elNativo.src = "../../../assets/images/imgBroken.jpeg"
  }
  constructor(private elHost: ElementRef) {

   }

}
