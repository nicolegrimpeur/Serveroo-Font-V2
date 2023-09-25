import {Component, OnInit} from '@angular/core';
import {TranslateService} from "@ngx-translate/core";
import {StorageService} from "../../../core/storage/storage.service";

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements OnInit {
  constructor(public translate: TranslateService, private storage: StorageService) {
  }

  ngOnInit() {
  }

  public changeLanguage(e: any) {
    this.translate.use(e.target.value);
    this.translate.setDefaultLang(e.target.value);
    this.storage.setLanguage(e.target.value).then();
  }
}
