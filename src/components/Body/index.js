// == Import : npm
import React, { Component } from 'react';
import { Card, Image } from 'semantic-ui-react'; 


// == Import : local
import './body.scss';

// == Composant
class Body extends Component {
  constructor(props) {
    super(props);
    this.state = { 
     articles: []
  }
  };

  /*componentDidMount() {
    fetch(
      'https://newsapi.org/v2/everything?' + 
      'country=${searchByContry}' + 
      'q=${searchByKeyWord}' +
      'from=${searchByDate}' +
      'sortBy=popularity&' +
      'apiKey=803fdd9b8517490d89d8c85ade466b8d'
    ).then((response) => {
      return response.json()
    })
      .then((result) => {
        this.setState({ articles: result.articles });
        console.log(result);
    })
  };*/
  render() {
    return (
      <div className="Body">
        <h2 className="title-body">Articles</h2>
        <div className="articles-container">
          {this.state.articles.map((item) => (
                <Card id="cards" key={item.url}>
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
                </Card>
          ))}
        </div>
      </div>
    );
  }
}

// == Export
export default Body;
