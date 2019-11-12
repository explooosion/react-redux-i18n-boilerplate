/* eslint-disable jsx-a11y/control-has-associated-label */
import React, { Component } from 'react';
import { withTranslation } from 'react-i18next';
import { connect } from 'react-redux';
import styled from 'styled-components';

class Footer extends Component {
  constructor(props) {
    super(props);
    this.t = this.props.t;
  }

  renderFoot() {
    const Foot = styled.footer`
      padding: 2rem;
      margin-top: 2rem;
      text-align: center;
      background-color: ${p => p.theme.dark};
      color: #fff;
    `;
    return <Foot>{this.t('footer')}</Foot>
  }

  render() {
    return this.renderFoot();
  }
}

Footer.propTypes = {}

const mapStateToProps = state => {
  return {
  }
}

export default withTranslation()(connect(mapStateToProps)(Footer));
