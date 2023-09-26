import {
  Component,
  OnInit,
  Input,
  Output,
  EventEmitter,
  OnChanges,
  AfterViewInit,
  OnDestroy,
  SimpleChanges,
} from '@angular/core';

@Component({
  selector: 'app-img',
  templateUrl: './img.component.html',
  styleUrls: ['./img.component.scss'],
})
export class ImgComponent
  implements OnInit, OnChanges, AfterViewInit, OnDestroy
{
  img: string = '';

  @Input('img') set changeImg(newImg: string) {
    this.img = newImg;
    console.log('change just img =>', this.img);
  }
  @Input() alt: string = '';
  @Output() loaded = new EventEmitter<string>();
  imageDefault = './assets/images/default.png';
  // counter = 0;
  // counterFn: number | undefined;

  constructor() {
    // before render
    // NO async -- once time
    console.log('constructor', 'imgValue =>', this.img);
  }

  ngOnInit(): void {
    // before - during render
    // async -- once time
    // console.log('ngOnInit', 'imgValue =>', this.img);
    // this.counterFn = window.setInterval(() => {
    //   this.counter++;
    //   console.log('run counter');
    // }, 1000);
  }

  ngOnChanges(changes: SimpleChanges) {
    // before render
    // changes inputs -- times
    console.log('ngOnChanges', 'imgValue =>', this.img);
    console.log('changes', changes);
  }

  ngAfterViewInit() {
    // after render
    // handler children
    console.log('ngAfterViewInit');
  }

  ngOnDestroy() {
    // delete
    console.log('ngOnDestroy');
    // window.clearInterval(this.counterFn);
  }

  imgError() {
    this.img = this.imageDefault;
  }

  imgLoaded() {
    console.log('log hijo');
    this.loaded.emit(this.img);
  }
}
