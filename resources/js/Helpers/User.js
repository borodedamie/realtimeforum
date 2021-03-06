import Token from './Token.js'
import AppStorage from './AppStorage.js'

class User {
    login(data){ 
        axios.post('/api/auth/login', data)
        .then(response => this.responseAfterLogin(response))  
    .catch(error => console.log(error.response.data))
}

responseAfterLogin(response) {
    const access_token = response.data.access_token;
    const username = response.data.User

    if(Token.isValid(access_token)){
        AppStorage.store(username, access_token)
    }
}

hasToken() {
    const storedToken = AppStorage.getToken();
    if(storedToken){
        return Token.isValid(storedToken) ? true : false
    }

    return false
}

loggedIn(){
    return this.hasToken()
}

logout(){
    AppStorage.clear() 
}

name(){
    if(this.loggedIn()){
        return AppStorage.getUser()
    }
}

id(){
    if(this.loggedIn()){
     const payload = Token.payload(AppStorage.getToken())
     return payload.sub
    }
}
}

export default User = new User()