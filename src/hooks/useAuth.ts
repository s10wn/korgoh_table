export const useAuth = () => {
    const isAuth = localStorage.getItem('authorized')
    if(isAuth){
        return true
    }
    return false
}