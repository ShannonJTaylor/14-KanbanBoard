import { JwtPayload, jwtDecode } from 'jwt-decode';

class AuthService {
  getProfile() {
    // TODO: return the decoded token
  }

  loggedIn() {
    // TODO: return a value that indicates if the user is logged in
    ry {
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
  
  isTokenExpired(token: string) {
    // TODO: return a value that indicates if the token is expired
  }

  getToken(): string {
    // TODO: return the token
  }

  login(idToken: string) {
    // TODO: set the token to localStorage
    // TODO: redirect to the home page
  }

  logout() {
    // TODO: remove the token from localStorage
    // TODO: redirect to the login page
  }
}

export default new AuthService();
