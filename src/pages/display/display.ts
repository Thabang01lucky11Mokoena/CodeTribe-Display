import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Task } from '../../app/Task';
import { HomePage } from '../home/home';
import EmpArr from '../../app/Array';

/**
 * Generated class for the DisplayPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-display',
  templateUrl: 'display.html',
})
export class DisplayPage {

  name =EmpArr[0].UserName;
  lastName = EmpArr[0].LastName;
  id = EmpArr[0].ID;
  
  

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
   // console.log('ionViewDidLoad DisplayPage');
  console.log(this.navParams.get('EmpArr'));
  }
 
}
