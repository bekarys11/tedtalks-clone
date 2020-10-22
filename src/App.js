import React from 'react';
import algoliasearch from 'algoliasearch/lite';
import { InstantSearch, Hits } from 'react-instantsearch-dom';
import Nav from './components/Nav';

import './App.css';

//app id: TPPZ32GA6D
//api key: edabfe75cb858d711a0818e206739ad6
//index name: talks

const searchClient = algoliasearch(
  'TPPZ32GA6D',
  'edabfe75cb858d711a0818e206739ad6'
);

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
