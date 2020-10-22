import React from 'react';
import { SearchBox } from 'react-instantsearch-dom';

const Nav = () => {
  return (
    <div className="nav">
      <div className="logo">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="96"
          height="54"
          viewBox="0, 0, 96, 54"
          className="Main-nav__logo"
        >
          <title>TED</title>
          <rect x="0" y="0" width="640" height="360" fill="none"></rect>
          <path
            d="M21.244 21.053h-6.761V14.85h21.012v6.203h-6.762V39.15h-7.489V21.053zm15.414-6.203h20.43v6.203H44.147v2.992h12.941v5.837H44.147v3.065h12.941v6.203h-20.43v-24.3zm21.666 0h12.287c8.071 0 10.906 5.984 10.906 12.114 0 7.443-3.926 12.186-12.36 12.186H58.324v-24.3zm7.489 18.097h2.908c4.653 0 5.308-3.794 5.308-6.056 0-1.533-.509-5.765-5.89-5.765H65.74l.073 11.821z"
            fill="#E62B1E"
          ></path>
        </svg>
      </div>

      <div className="heading">
        <div className="heading-line">
          <span className="heading-bold">
            3500+ talks{' '}
            <span className="heading-medium">to stir your curiosity</span>
          </span>
        </div>
        <div className="heading-thin">Find just right one</div>
      </div>

      <div className="search-options">
        <SearchBox className="select" />
        <select name="topics" className="select__topics" defaultValue="topics">
          <option value="topics" disabled>
            Topics
          </option>
          <option value="technology">Technology</option>
          <option value="entertainment">Entertainment</option>
          <option value="design">Design</option>
          <option value="business">Business</option>
          <option value="science">Science</option>
          <option value="global issues">Global issues</option>
        </select>

        <select
          name="languages"
          className="select__languages"
          defaultValue="lang"
        >
          <option value="lang" disabled>
            Languages
          </option>
          <optgroup label="Top languages">
            <option value="english">English</option>
            <option value="spanish">Español</option>
            <option value="japanese">日本語</option>
            <option value="portuguese">Português brasileiro</option>
            <option value="chinese">中文 (繁體)</option>
            <option value="korean">한국어</option>
          </optgroup>
        </select>

        <select
          name="duration"
          className="select__duration"
          defaultValue="duration"
        >
          <option value="duration" disabled>
            Duration
          </option>
          <option value="0-6">0-6 minutes</option>
          <option value="6-12">6-12 minutes</option>
          <option value="12-18">12-18 minutes</option>
          <option value="18+">18+ minutes</option>
        </select>

        <button>More</button>
      </div>
    </div>
  );
};

export default Nav;
