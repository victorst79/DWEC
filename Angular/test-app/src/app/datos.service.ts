import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DatosService {
  public data = ['jose', 'paco', 'luis'];
  constructor() { }

  getData() {
    return this.data;
  }
}
