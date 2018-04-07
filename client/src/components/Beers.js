import React from 'react';
import { Header, Card } from 'semantic-ui-react';
import axios from 'axios';

class Beers extends React.Component {
  state = {
    beers: [{}]
  }

  componentDidMount() {
    axios.get('/api/all_beers')
      .then( res => this.setState({
        beers: res.data.entries
      })
    )
  }

  render() {
    const { beers } = this.state
    return(
      <div>
        <br />
        <Header textAlign='center'>Beers!</Header>
        <Card.Group itemsPerRow={5}>
          { beers.map(beers =>
          <Card>
            <Card.Content>
              <Card.Header>{beers.name}</Card.Header>
            </Card.Content>
          </Card>
        )}
        </Card.Group>
      </div>
    )
  }
}

export default Beers;
