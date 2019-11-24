// == Import : npm
import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Card, Image, Icon } from 'semantic-ui-react'; 

import Cards from 'src/components/Body/cards'; 
// == Import : local
import './body.scss';

// == Composant
class Body extends Component {
  render() {
    return (
      <div className="Body">
        <h2 className="title-body">Articles</h2>
        <div className="articles-container">
          {this.props.articles.map((item) => (
            <Cards key={item.url} item={item}/>
          ))}
        </div>
      </div>
    );
  }
}

Body.propTypes = {
  articles: PropTypes.array.isRequired,
};


// == Export
export default Body;
