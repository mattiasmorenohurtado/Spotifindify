import { useState , useEffect} from 'react'
import HomePage from './HomePage'
import LandingPage from './LandingPage'


const spotifyLoginUrl = "https://accounts.spotify.com/authorize"
const clientId = import.meta.env.VITE_SPOTIFY_CLIENT_ID
const redirectUri = "http://127.0.0.1:5178/callback"

function Auth(){
    const [isLoggingIn,setIsLoggingIn] =useState(false);
    const [isLoggedIn, setIsLoggedIn] = useState(false);  


    function Login(){
        
        
        try{

            setIsLoggingIn(true)


            const scopes = "user-read-private user-read-email playlist-read-private"
            const fullUrl = `${spotifyLoginUrl}?client_id=${clientId}&redirect_uri=${redirectUri}&scope=${scopes}&response_type=code`
            window.location.href = fullUrl
            console.log("Success")
        } catch (error){
            setIsLoggingIn(false)
        }
    }


    function clearAllCookies(){
        document.cookie.split(";").forEach(cookie => {
        const name = cookie.split("=")[0].trim()
         document.cookie = `${name}=;expires=Thu, 01 Jan 1970 00:00:00 GMT;path=/`
        
    })}








    function Logout(){
        setIsLoggedIn(false)
        setIsLoggingIn(false)


        localStorage.removeItem('spotify_access_token')
        localStorage.removeItem('spotify_refresh_token')


        clearAllCookies()
        const spotifyLogoutWindow = window.open("https://accounts.spotify.com/logout")

    
        setTimeout(() => {
        if (spotifyLogoutWindow && !spotifyLogoutWindow.closed) {
            spotifyLogoutWindow.close()
            console.log("Spotify logout window closed automatically!")
        }
    }, 500) 
        
    
    }

    useEffect(() => {
        const urlParams = new URLSearchParams(window.location.search)
        const code = urlParams.get('code')
        
        if (code) {
            setIsLoggedIn(true)
            setIsLoggingIn(false)
            console.log("User returned from Spotify!")
        }
    }, [])

    if (isLoggingIn === true){
        return(
            <div className='loading-container'>
                <h2>Connecting to Spotify</h2>
            </div>
        )
    }

    if (isLoggedIn) {
        return <HomePage onLogout={Logout} />
    }

    return <LandingPage onLogin={Login} />
}

export default Auth