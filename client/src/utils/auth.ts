import { jwtDecode } from 'jwt-decode';

class AuthService {
  getProfile() {
    // TODO: return the decoded token
    const token = this.getToken();
      if (token) {
        return jwtDecode(token); // Decodes the token
      }
      return null;     
  }

  async loggedIn(): Promise<any | undefined> {
    // TODO: return a value that indicates if the user is logged in
     // const savedAuth = localStorage.getItem("auth")
    try {
      const response = await fetch(
        `https://kanban-board-csbr.onrender.com/auth/checkAuth`, {
          method: 'GET',
          headers: {
            'Content-Type': 'application/json',
            Authorization: `${this.getToken()}`
          },
        }
      )
      const data = await response.json();
      console.log(data)
  
      if(!response.ok) {
        throw new Error('invalid API response, check network tab!');
      }
  
      return data;
    } catch (err) {
      console.error('Error checking user auth', err);      
    }    
  }
  
  isTokenExpired() {
    // TODO: return a value that indicates if the token is expired
    const savedAuth = localStorage.getItem("auth")
    let tokenExpired=true
    if (savedAuth) {
      const tokenPayload = JSON.parse(window.atob(savedAuth.split(".")[1]))
      console.log(tokenPayload)
      console.log(Math.floor(Date.now()/1000))
      tokenExpired=Math.floor(Date.now()/1000) > tokenPayload.exp
    }
    if (tokenExpired) {
      localStorage.removeItem("auth")
      location.href="/login"
    }
  }  

  getToken(): string {
    // TODO: return the token
    const savedAuth = localStorage.getItem("auth")
    return savedAuth || ""
  }

  login(idToken: string) {
    // TODO: set the token to localStorage
    localStorage.setItem("auth", idToken)     
    // TODO: redirect to the home page
    location.href="/"
  }

  logout() {
    // TODO: remove the token from localStorage
    localStorage.removeItem("auth")
    // TODO: redirect to the login page
    location.href="/login"
  }
}

export default new AuthService();
