import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { DisplayPage } from '../display/display';
import { Task } from '../../app/Task';
import EmpArr from '../../app/Array';

 
import { AlertController } from 'ionic-angular';
@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {


  constructor(public navCtrl: NavController , public alertCtrl: AlertController) {

  }
Display(UserName, LastName, ID){
  
  
  if( UserName != "" &&  LastName != ""  && ID != "")
  {
    let emp = new Task(UserName, LastName, ID)
    EmpArr.push(emp)
    console.log(EmpArr)
  this.navCtrl.push(DisplayPage, emp)

} else{

  const alert = this.alertCtrl.create({
    title: 'Enter Details!',
    subTitle: 'Please enter you full details!',
    buttons: ['OK']
  });
  alert.present();



}
  
  
}
}
