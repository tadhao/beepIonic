import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { EditProfileFormPage } from './edit-profile-form';
import { ComponentsModule } from '../../components/components.module';


@NgModule({
  declarations: [
    EditProfileFormPage,
  ],
  imports: [
    IonicPageModule.forChild(EditProfileFormPage),
    ComponentsModule
  ],
})
export class EditProfileFormPageModule {}
