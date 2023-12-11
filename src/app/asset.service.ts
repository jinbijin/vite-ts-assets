import { HttpClient } from "@angular/common/http";
import { Injectable, inject } from "@angular/core";
import { Observable } from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class AssetService {
  readonly #httpClient = inject(HttpClient);

  getTsAsset(): Observable<any> {
    return this.#httpClient.get('/assets/unresolved.ts', { responseType: 'text' });
  }
}
