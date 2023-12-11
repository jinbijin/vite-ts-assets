import { Component, OnInit, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { AssetService } from './asset.service';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent implements OnInit {
  readonly #assetService = inject(AssetService);

  title = 'vite-ts-assets';

  ngOnInit(): void {
    this.#assetService.getTsAsset().subscribe(console.log);
  }
}
