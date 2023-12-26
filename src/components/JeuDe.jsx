import React from "react";

class JeuDe extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      face: 0,
      nbrEssais: 0,
      fin: false,
    };
  }

  initialiser() {
    this.setState({
      face: 0,
      nbrEssais: 0,
      fin: false,
    });
  }

  jouer() {
    let newState = { ...this.state }; //Copy

    let newNumber = Math.floor(Math.random() * 6) + 1;
    newState.nbrEssais = newState.nbrEssais + 1;
    newState.face = newNumber;
    if (this.props.secret == newNumber) {
      newState.fin = true;
    } else {
      newState.fin = false;
    }

    this.setState(newState);
  }

  render() {
    return (
      <div className="jeuDE">
        <img src={"./images/imgDice" + this.state.face + ".png"} alt="Dice" />
        <h1>Jeu de Dé... {this.props.secret}</h1>
        <h2>Face : {this.state.face}</h2>
        <h2>Nombres d'essais : {this.state.nbrEssais}</h2>

        {this.state.fin == true ? (
          <p>Bravo vous avez trouvé la face cachée.</p>
        ) : (
          <button onClick={() => this.jouer()}>Jouer</button>
        )}

        <button onClick={() => this.initialiser()}>Initialiser</button>
      </div>
    );
  }
}

export default JeuDe;
