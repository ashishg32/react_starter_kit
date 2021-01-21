import React from 'react';
import { connect } from 'react-redux';
import { Row, Col, ProgressBar } from 'react-bootstrap';

import DataList from '../components/DataList';
import AppPagination from '../components/AppPagination';
import AlertMessage from '../components/AlertMessage';
import Actor from '../components/Actor';

import fetchUsers from '../actions/userActions';

class Dashboard extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      totalPages: 0,
      currentPage: 1,
      actor: {}
    }
    this.loadHeros = this.loadHeros.bind(this);
    this.getTemplate = this.getTemplate.bind(this);
    this.heroClick = this.heroClick.bind(this);
    this.hideHeroDetails = this.hideHeroDetails.bind(this);
    this.myRef = React.createRef();
  }

  componentDidMount(){
    this.props.dispatch(fetchUsers(this.state.currentPage));
  }

  componentWillReceiveProps(nextProps){
    if(nextProps.count && this.state.totalPages == 0){
      const perPageCount = 10;
      const remainder = nextProps.count % perPageCount;
      const division = Math.floor(nextProps.count / perPageCount);
      const totalPages = remainder == 0 ? division : division + 1;      
      this.setState({totalPages: totalPages});
    }

    if(nextProps.isFetchingUsersError && this.state.currentPage > 1) {
      this.setState({ currentPage: this.state.currentPage -1 });
    }
  }

  loadHeros(e, page){
    this.setState({currentPage: page});
    this.props.dispatch(fetchUsers(page));
  }

  heroClick(e, actor) {
    this.setState({actor});
  }

  hideHeroDetails() {
    this.setState({actor: {}});
  }

  getTemplate(){
    return (
      <Row className="show-grid">
          <Col xs={12} md={12}>
            { this.props.isFetchingUSers ? <ProgressBar active now={45} /> : ''}
            { this.props.isFetchingUsersError ?
              <AlertMessage
                type='danger'
                msg='Oh snap! Unable to load heros!'
                ref={this.myRef}
              />
              : 
              ''
            }
            <DataList
              list={this.props.users}
              onItemClick={this.heroClick}
            />
            <AppPagination              
              totalPages={this.state.totalPages}
              currentPage={this.state.currentPage}
              clickFn={this.loadHeros}
            />            
          </Col>
          <Col xs={12} md={12}>
            <Actor actor={this.state.actor} hideFn={this.hideHeroDetails} />
          </Col>
      </Row>
    )
  }

  render(){
    const template = this.getTemplate();
    return template;
  }
}

const mapStateToProps = state => ({
  users: state.users.users,
  count: state.users.count,
  isFetchingUSers: state.users.isFetchingUSers,
  isFetchingUsersSuccess: state.users.isFetchingUsersSuccess,
  isFetchingUsersError: state.users.isFetchingUsersError
});

export default connect(mapStateToProps)(Dashboard);
