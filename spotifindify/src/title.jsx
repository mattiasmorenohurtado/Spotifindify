import './title.css'

function Title(){
    return (
        <div className="title-container">
            <img src="/logo.svg" alt="Spotifindify Logo" className="title-logo" />
            <h1 className="title-heading">Spotifindify</h1>
            <button>Log In</button>
            
        </div>
    )
}



export default Title