import React, {Component} from 'react';

let status = "";

class Password extends Component {
    constructor(props) {
        super(props);
        this.state = {
            password : ""
        }
    }

    getPassword(event) {
      this.setState({
        password: event.target.value
  		})

      if (this.state.password.match(/(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[#?!@$%^&*-]).{7,}/)) {
        status = 'fort'
      } else if (this.state.password.match(/(?=.*?[A-Z])(?=.*?[a-z]).{7,}/)) {
        status = 'moyen'
      } else if (this.state.password.match(/[a-z]/)) {
        status = 'faible'
      }
    }

    handleSubmit(event) {
      if (status === 'fort') {
        alert('mot de passe envoyé avec succès');
      } else {
        event.preventDefault();
        alert('votre mot de passe est trop faible');
      }

    }

    render() {
        return (
          <div>
            <p>{status}</p>
            <form onSubmit={this.handleSubmit}>
              <label>Mot de passe
                <input onChange={this.getPassword.bind(this)} type="password" name="password"/>
              </label>
              <input type="submit" value="Soumettre"/>
            </form>
          </div>
        );
    }
}
export default Password;
