import { AsyncStorage } from "react-native";

// export const USER_KEY = "auth-demo-key";

export const onSignIn = (USER_KEY) => {
    return new Promise((resolve, reject) => {
        
        console.log(USER_KEY)
        AsyncStorage.setItem(
            USER_KEY, "true");  
      });
    
    //do checks
}

export const onSignOut = () => AsyncStorage.removeItem(USER_KEY);

export const isSignedIn = () => {
  return new Promise((resolve, reject) => {
    AsyncStorage.getItem(USER_KEY)
      .then(res => {
        if (res !== null) {
          resolve(true);
        } else {
          resolve(false);
        }
      })
      .catch(err => reject(err));
  });
};