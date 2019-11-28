import React from 'react';
import logo from './logo.svg';
import './App.css';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = { input: '', loading: false, image: '' };
  }

  fetchCephalopod = async () => {
    const { input } = this.state;
    this.setState({ loading: true })
    const response = await fetch(`https://cephalatar.herokuapp.com/${input}`);
    const image = await response.blob();
    console.log({ image })
    this.setState({ loading: false, image });
  }

  render() {
    const { input, loading, image } = this.state;
    return (
      <div className="App" >
        <header className="App-header">
          <img src={logo || image} className="App-logo" alt="logo" />
          <div><input placeholder="Enter a string" value={input} onChange={e => this.setState({ input: e.currentTarget.value })} /></div>
          {loading ? <h2>...</h2> : <div>{input ? <button onClick={this.fetchCephalopod}>Get a Cephalopod</button> : ''}</div>}
        </header>
      </div>
    );
  }
}

export default App;
