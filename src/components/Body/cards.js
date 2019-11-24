// == Import : npm
import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { Card, Image, Icon } from 'semantic-ui-react'; 

// == Import : local
import './body.scss';

const Cards = ({
  item, 
}) => {

  const [displayCard, setDisplay] = useState(true);
  console.log(displayCard);
return (
  <Card id="cards" className={ displayCard ? '' : 'displayOff' }>
    <Image src={item.urlToImage} wrapped ui={false} />
      <Card.Content>
        <Card.Header>{item.title}</Card.Header>
          <Card.Description>Auteur : {item.author}</Card.Description>
          <Card.Meta>
            <span className='date'>{item.publishedAt}</span>
          </Card.Meta>
          <Card.Meta>
            <span className='source'>Source : {item.source.name}</span>
          </Card.Meta>
          <Card.Description>
            {item.description}
          </Card.Description>
          </Card.Content>
          <Card.Content extra>
            <a href={item.url}>En savoir plus</a>
          </Card.Content>
          <Card.Content extra onClick={()=>{setDisplay(false)}}>
            <Icon name='low vision' />
          </Card.Content>
    </Card>
);
}

Cards.propTypes = {
  item: PropTypes.object.isRequired,
};


// == Export
export default Cards;
