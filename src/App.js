import React from 'react';
import { config } from './config';
import algoliasearch from 'algoliasearch/lite';
import { InstantSearch, Hits } from 'react-instantsearch-dom';
import Nav from './components/Nav';
import './App.css';

const my_id = config.api_id;
const my_key = config.api_key;

const searchClient = algoliasearch(my_id, my_key);

function App() {
  return (
    <InstantSearch searchClient={searchClient} indexName="talks">
      <div className="app">
        <div className="search-container">
          <Nav />
          <Hits hitComponent={({ hit }) => <SingleTalk hit={hit} />} />
        </div>
      </div>
    </InstantSearch>
  );
}

const SingleTalk = ({ hit }) => {
  return (
    <div>
      <h3>{hit.name}</h3>
      <img src={hit.image_url} alt="img" height="200" width="200" />
    </div>
  );
};

export default App;
