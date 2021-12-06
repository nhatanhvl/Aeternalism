import './App.css';
import CreateNft from './components/create-nft.component';
import Gallery from './components/gallery.component';

function App() {
  return (
    <div className="container">
      <header className="header">
        <p>
          Welcome to Aeternalism
        </p>
        <button type="button" className="btn btn-primary" data-bs-toggle="modal" data-bs-target="#exampleModal">
          Create NFT
        </button>
        <br />
        <CreateNft />
        <Gallery />
      </header>
    </div>
  );
}

export default App;
