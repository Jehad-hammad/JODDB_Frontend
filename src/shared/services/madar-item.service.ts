import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class MadarItemService {

  item: any;

  clearItem() {
    this.item = null;
  }

}
