import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LocationService {
  private storageKey = 'selectedLocation';

  constructor() {}

  getLocation(): string | null {
    return localStorage.getItem(this.storageKey);
  }

  setLocation(location: string): void {
    localStorage.setItem(this.storageKey, location);
  }
}
