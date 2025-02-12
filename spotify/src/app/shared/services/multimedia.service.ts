import { EventEmitter, Injectable } from '@angular/core';
import { TrackModel } from '@core/models/tracks.models';
import { BehaviorSubject, min, Observable, Observer, of, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MultimediaService {

  callback: EventEmitter<any>= new EventEmitter<any>();

 //se utiliza el ! para no inicializar alguna varible 
  public audio!: HTMLAudioElement;
  public trackInfo$: BehaviorSubject<any> = new BehaviorSubject(undefined)
  public timeElapsed$: BehaviorSubject<string> = new BehaviorSubject('00:00')
  public timRemaining$: BehaviorSubject<string> = new BehaviorSubject('-00:00')


  constructor() {
      this.audio = new Audio()
      //capturamos la info de la cancion a reproducir
      this.trackInfo$.subscribe(responseOk => {
        if(responseOk){
          this.setAudio(responseOk)
        }
      })
   }

   private listenAllEvents(): void{
    this.audio.addEventListener('timeupdate', this.calculeTime, false)
   }

   private calculeTime = () =>{
    console.log('Disparando evento');
    const {duration, currentTime} = this.audio;
    console.table([duration, currentTime]);
    this.setTimeElapsed(currentTime);
    this.setTimeRemaining(currentTime, duration);
   }

   private setTimeElapsed(currentTime: number) : void{
      let seconds = Math.floor(currentTime % 60);
      let minutes = Math.floor(currentTime / 60) % 60;

      const displaySeconds = (seconds < 10) ? `0${seconds}` : seconds;
      const displayMinutes = (minutes < 10) ? `0${minutes}` : minutes;
      const displayFormat = `${displayMinutes}:${displaySeconds}`;

      this.timeElapsed$.next(displayFormat);
   }

   private setTimeRemaining(currentTime: number, duration: number): void{
      let timeLeft = duration - currentTime;
      let seconds = Math.floor(timeLeft % 60);
      let minutes = Math.floor((timeLeft / 60) % 60);
      const displaySeconds = (seconds < 10) ? `0${seconds}` : seconds;
      const displayMinutes = (minutes < 10) ? `0${minutes}` : minutes;
      const displayFormat = `-${displayMinutes}:${displaySeconds}`;
      this.timRemaining$.next(displayFormat);
   }

   // manda la url del audio a la propiedad del objeto audio html
   public setAudio(track: TrackModel): void {
    console.log('recibiendo track', track);
    this.audio.src = track.url;
    this.audio.play();
    this.listenAllEvents();
   }
}
