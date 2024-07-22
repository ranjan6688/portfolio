import { Component, ElementRef, ViewChild } from '@angular/core';
import { MenuItem } from 'primeng/api';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'portfolio';
  items!: MenuItem[];
  appTheme: AppTheme = AppTheme.Red;

  @ViewChild("pageContainer") pageContainerRef!: ElementRef;

  constructor() {

  }

  ngOnInit() {
    this.items = [
      { label: 'Home', icon: 'icon-home' },
      { label: 'About', icon: 'icon-about' },
      { label: 'Skills', icon: 'icon-skills' },
      { label: 'Services', icon: 'icon-services' },
      { label: 'Products', icon: 'icon-products' },
      { label: 'Portfolio', icon: 'icon-portfolio' },
      { label: 'Contact', icon: 'icon-contact' },
    ]
  }

  ngAfterViewInit(): void {

  }

  onClickColorPalette(theme: string){
    theme = `theme-${theme?.toLowerCase()}`;
    switch(theme){
      case AppTheme.Blue:
        this.appTheme = AppTheme.Blue;
        break;
      case AppTheme.Green:
        this.appTheme = AppTheme.Green;
        break;
      case AppTheme.Pink:
        this.appTheme = AppTheme.Pink;
        break;
      case AppTheme.Purple:
        this.appTheme = AppTheme.Purple;
        break;
      case AppTheme.Red:
        this.appTheme = AppTheme.Red;
        break;
      case AppTheme.Teal:
        this.appTheme = AppTheme.Teal;
        break;
      default:
        this.appTheme = AppTheme.Red;
        break;
    }
  }
}

export enum AppTheme{
  Blue = 'theme-blue',
  Green = 'theme-green',
  Pink = 'theme-pink',
  Purple = 'theme-purple',
  Red = 'theme-red',
  Teal = 'theme-teal'
}
