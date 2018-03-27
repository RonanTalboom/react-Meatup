import { AsyncStorage } from "react-native";

export const USER_KEY = "USER_KEY";

export const onSignIn = (User_data) => {
  //check if user data is good then set to true
    return new Promise((resolve, reject) => {
        

        AsyncStorage.setItem(
            USER_KEY, 'true')


            return new Promise((resolve, reject) => {
              AsyncStorage.getItem(USER_KEY)
                .then(res => {
                  if (res !== null) {
                    console.log('sign in data '+ res);
                  } else {
                    console.log('error');
                  }
                })
                .catch(err => reject(err));
            });
      });
    //do checks
}

export const onSignOut = () => {
    AsyncStorage.setItem(
      USER_KEY, 'false')
    return new Promise((resolve, reject) => {
      AsyncStorage.removeItem(USER_KEY)
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