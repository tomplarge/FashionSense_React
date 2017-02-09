import * as firebase from "firebase";

class Firebase {

    /**
     * Initialises Firebase
     */
    static initialise() {
        firebase.initializeApp({
          apiKey: "AIzaSyCPC7F_RqNXOrAYyXohY5BsYrSYEVjQ_Oo",
          authDomain: "yourdrobe-e7c91.firebaseapp.com",
          databaseURL: "https://yourdrobe-e7c91.firebaseio.com",
          storageBucket: "yourdrobe-e7c91.appspot.com",
          messagingSenderId: "558235157219"
        });
    }

}

module.exports = Firebase;
