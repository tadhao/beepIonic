import { Component } from '@angular/core';
import { IonicPage} from 'ionic-angular';

/**
 * Generated class for the TabsPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-tabs',
  templateUrl: 'tabs.html',
})
export class TabsPage {

  tab1Page: string;
  tab2Page: string;
  tab3Page: string;

  constructor() {
    this.tab1Page = 'InboxPage';
    this.tab2Page = 'ChannelsPage';
    this.tab3Page = 'ProfilePage';
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad TabsPage');
  }

}
