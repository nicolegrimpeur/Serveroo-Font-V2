import {Component} from '@angular/core';
import {TranslateService} from '@ngx-translate/core';
import {StorageService} from "./core/storage/storage.service";

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {
  public appPages = [
    {title: 'Inbox', url: '/folder/inbox', icon: 'mail'},
    {title: 'Outbox', url: '/folder/outbox', icon: 'paper-plane'},
    {title: 'Favorites', url: '/folder/favorites', icon: 'heart'},
    {title: 'Archived', url: '/folder/archived', icon: 'archive'},
    {title: 'Trash', url: '/folder/trash', icon: 'trash'},
    {title: 'Spam', url: '/folder/spam', icon: 'warning'},
  ];
  public labels = ['Family', 'Friends', 'Notes', 'Work', 'Travel', 'Reminders'];

  constructor(private translate: TranslateService, private storage: StorageService) {
    const listLang = ['fr', 'en'];
    this.translate.addLangs(listLang);
    const browserLang = this.translate.getBrowserLang()!;
    this.translate.setDefaultLang(listLang.includes(browserLang) ? browserLang : 'fr');
    this.translate.use(this.translate.getDefaultLang());

    this.storage.getLanguage().then((language) => {
      if (language) {
        this.translate.use(language);
      } else {
        this.storage.setLanguage('fr');
      }
    });
  }
}
