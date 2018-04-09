import React from 'react';
import { Header, Card, Pagination } from 'semantic-ui-react';
import { Link } from 'react-router-dom';
import BeerView from './BeerView';
import axios from 'axios';
import InfiniteScroll from 'react-infinite-scroller';

class Beers extends React.Component {
  state = {
    beers: [{}],
    page: 0,
    total_pages: 0,
    num: 0,
    viewMode: false,
  }
  componentDidMount() {
    axios.get('/api/all_beers?page=1&per_page=10')
      .then( res => this.setState({
        beers: res.data.entries
      })
    )
  }

  // componentDidMount() {
  //   this.paginate()
  // }
  // paginate = () => {
  //   const { beers, page } = this.state;
  //   const nextPage = page + 1;
  //   if (this.state.hasMore) {
  //     axios.get('/api/all_beers?page1&per_page=10')
  //     .then( res => {
  //       let { beers, total_pages} = res.data.entries;
  //       let hasMore = total_pages > nextPage
  //       this.setState({ beers: [...beers], page: nextPage, total_pages, hasMore})
  //     })
  //   }
  // }

  render() {
    const { beers } = this.state
    return(
      <div>
        <br />
        <Header textAlign='center'>Beers!</Header>
        <Card.Group itemsPerRow={5}>
          { beers.map(beers =>
          <Card key={beers.id}>
            <Card.Content>
              <Card.Header>{beers.name}</Card.Header>
            </Card.Content>
            <Card.Content extra>
              {/* <Link to={`/beerview/${beers.id}`}> */}
              <Link to='/beerview'>
                View This Beer
              </Link>
            </Card.Content>
          </Card>
        )}
        </Card.Group>
      </div>
    )
  }
}

export default Beers;
