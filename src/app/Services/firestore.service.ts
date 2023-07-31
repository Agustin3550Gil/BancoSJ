import { Injectable } from '@angular/core';
import { Firestore, collection, addDoc } from '@angular/fire/firestore';
import { users } from '../Models/user';

@Injectable({
  providedIn: 'root'
})
export class FirestoreService {

  constructor(
              private firestore: Firestore,
  ) { }


addUser(user: users) {

  const userRef = collection(this.firestore,  'users');
  return addDoc(userRef, user);
  }


}
