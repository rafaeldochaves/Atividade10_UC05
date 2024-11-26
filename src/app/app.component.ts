import { Component } from '@angular/core';
import { HeaderComponent } from './components/header/header.component';
import { RouterOutlet } from '@angular/router';
import { NavibarComponent } from './components/navibar/navibar.component';
import { CarrouselComponent } from './components/carrousel/carrousel.component';
import { ProdutosComponent } from './components/produtos/produtos.component';
import { BannerComponent } from './components/banner/banner.component';
import { FooterComponent } from './components/footer/footer.component';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, HeaderComponent, NavibarComponent,CarrouselComponent,ProdutosComponent,BannerComponent,FooterComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',

})
export class AppComponent {
  title = 'GameMania';
}
