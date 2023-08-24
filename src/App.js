import "./styles.css";
import api from "./api";
import { Component } from "react";

class App extends Component {
  state = {
    filmes: []
  };

  async componentDidMount() {
    const response = await api.get("batman");

    //console.log(response.data);

    this.setState({ filmes: response.data });
  }

  render() {
    const { filmes } = this.state;
    return (
      <div>
        <h1>Listar Filmes</h1>
        {console.log(filmes)}
        <ul>
          {filmes.map((filme) => (
            <li key={filme.show.id}>
              <h2>
                <strong>Título: </strong>
                {filme.show.name}
              </h2>
              <p>
                <strong>URL: </strong>
                <a
                  href={filme.show.url}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {filme.show.url}
                </a>
              </p>
            </li>
          ))}
        </ul>
      </div>
    );
  }
}

export default App;
