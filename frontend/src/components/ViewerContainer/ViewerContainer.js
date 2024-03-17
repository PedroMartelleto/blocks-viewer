import React from 'react';
import PropTypes from 'prop-types';
// import { GetData, QueryUsers, ServerErrorsString } from '../../common';
// import { Box, CircularProgress, Grid } from '@mui/material';
import VtkComponent from '../vtkComponent';

class ViewerContainer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      loading: false,
      error: '',
      users: [],
    };
    this.holder = { getInputs: null };
  }
  componentDidMount() {
    // this.handleUsers();
  }
  // handleUsers = () => {
  //   const { loading } = this.state;
  //   if (loading) return;
  //   this.setState({ loading: true });
  //   (async () => {
  //     QueryUsers()
  //       .then((res) => {
  //         const data = GetData(res);
  //         const { ok, users, errors } = data.allUsers;
  //         if (ok) this.setState({ loading: false, users });
  //         else throw errors;
  //       })
  //       .catch((error) => {
  //         this.setState({ loading: false, error: ServerErrorsString(error) });
  //       });
  //   })();
  // };
  // handleCloseSnak = () => {
  //   this.setState({ error: '' });
  // };
  render() {
    return (
      <VtkComponent />
    );
  }
}

ViewerContainer.propTypes = {
  classes: PropTypes.object,
};

export default ViewerContainer;
