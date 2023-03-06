const storeToken = (value) =>{
    if(value){
        const access= value
        localStorage.setItem('access_token',access)
    }
}

const getToken = () =>{

       const access_token= localStorage.getItem('access_token')
       return access_token;
}

const removeToken = () => {
    localStorage.removeItem('access_token')
}
const storeRole = (value) =>{
    if(value){
        const level= value
        localStorage.setItem('role',level)
    }
}

const getRole = () =>{

       const level= localStorage.getItem('role')
       return level;
}

const removeRole = () => {
    localStorage.removeItem('role')
}

export { storeToken, getToken , removeToken, storeRole ,getRole, removeRole}