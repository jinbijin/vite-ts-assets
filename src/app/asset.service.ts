import { HttpClient } from "@angular/common/http";
import { Injectable, inject } from "@angular/core";
import { Observable } from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class AssetService {
  readonly #httpClient = inject(HttpClient);

  getTsAsset(): Observable<string> {
    return this.#httpClient.get('/assets/unresolved.ts', { responseType: 'text' });
  }

  getTsLink(): Observable<string> {
    return this.#httpClient.get('https://raw.githubusercontent.com/angular/angular/main/packages/core/index.ts', { responseType: 'text' });
  }
}
