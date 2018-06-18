import { Component } from '@angular/core';
import { DataServiceProvider } from '../../providers/data/data.service';
import { Profile } from '../../models/profile/profile';

/**
 * Generated class for the SearchUserComponent component.
 *
 * See https://angular.io/api/core/Component for more info on Angular
 * Components.
 */
@Component({
  selector: 'app-search-user',
  templateUrl: 'search-user.html'
})
export class SearchUserComponent {


  query: string
  profileList: Profile[];
  constructor(private data: DataServiceProvider) {
  }
  searchUser(query: string){
    this.data.searchUser(query).subscribe(profiles => {
      console.log(profiles);
      this.profileList = profiles;
    })
  }

}
