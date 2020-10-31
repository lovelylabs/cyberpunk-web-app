import firebase from 'firebase/app'
import 'firebase/auth'
export const signup = async ({ firstName, lastName, email, password }) => {
    const response = await firebase
        .auth()
        .createUserWithEmailAndPassword(email, password)
    const user = response.user
    await user.updateProfile({ displayName: `${firstName} ${lastName}` })
    return user
}

export const logout = () => {
    firebase.auth().signOut()
}

export const login = async ({ email, password }) => {
    const response = await firebase
        .auth()
        .signInWithEmailAndPassword(email, password)
    return response.user
}
