import { Injectable } from '@angular/core';
import {Preferences} from "@capacitor/preferences";

@Injectable({
  providedIn: 'root'
})
export class StorageService {

  constructor() { }

  async setLanguage(lang: string) {
    await Preferences.set({ key: 'language', value: lang });
  }

  async getLanguage() {
    const { value } = await Preferences.get({ key: 'language' });
    return value;
  }
}
