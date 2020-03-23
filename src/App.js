import React, { Component } from 'react'
import Container from '@material-ui/core/Container';
import StaticsStructure from './components/staticsStructure/StaticsStructure';
import styles from './App.module.css';

export default class App extends Component {
  render() {
    return (
      <Container className={styles.container} maxWidth="lg">
        <StaticsStructure />
      </Container>
    )
  }
}
