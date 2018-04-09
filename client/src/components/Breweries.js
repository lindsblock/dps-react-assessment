import React from 'react';
import { Header, Card } from 'semantic-ui-react';
import axios from 'axios';
import { Link } from 'react-router-dom';


class Breweries extends React.Component {
  state = {
    breweries: [{}]
  }

  componentDidMount() {
    axios.get('/api/all_breweries')
      .then( res => this.setState({
        breweries: res.data.entries
      })
    )
  }

  render() {
    const { breweries } = this.state
    return(
      <div>
        <br />
        <Header textAlign='center'>Breweries!</Header>
        <Card.Group itemsPerRow={5}>
          { breweries.map(breweries =>
          <Card>
            <Card.Content>
              <Card.Header>{breweries.name}</Card.Header>
            </Card.Content>
            <Card.Content extra>
              <Link to='/breweryview'>
                View This Brewery
              </Link>
            </Card.Content>
          </Card>
        )}
        </Card.Group>
      </div>
    )
  }
}

export default Breweries;
