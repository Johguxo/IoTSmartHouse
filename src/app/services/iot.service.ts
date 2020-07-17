import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { Router } from "@angular/router";
import { AngularFireAuth } from "@angular/fire/auth";

declare let toastr:any

@Injectable({
  providedIn: 'root'
})
export class IotService {

  constructor(
    private AFauth : AngularFireAuth,
    private router : Router,
    private db: AngularFirestore,
    ){}
    consultId(uid : string){
      return this.db.collection('users').doc(uid).snapshotChanges()
        /*return new Promise ((resolve, reject) => {
          .then( res =>{
            // console.log(res.user.uid);
          const uid = res.user.uid;
            this.db.collection('users').doc(uid).set({
              name : name,
              uid : uid
            })
          resolve(res)
        }).catch( err => reject(err))
      })*/
    }
    success(message: string, title?: string){
      toastr.success(message, title)
    }
    info(message: string, title?: string){
        toastr.info(message, title)
    }
    error(message: string, title?: string){
        toastr.error(message, title)
    }
    warning(message: string, title?: string){
        toastr.warning(message, title)
    }
}