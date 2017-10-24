import React, { Component, PropTypes } from 'react';
import { Battle } from '../components/Battle';

export class BattleContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isLoading: true,
      playerInfo: [],
    };
  }

  componentDidMount() {
    const query = this.props.location.query;
    console.log(`query${query}`);
  }

  render() {
    const { route } = this.props;
    return (
      <Battle header={route.header} />
    );
  }
}
