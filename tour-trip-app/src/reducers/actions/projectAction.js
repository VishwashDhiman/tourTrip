export const userBusData = (project) => {
  return (dispatch, getState, { getFirestore }) => {
  //   // make async call to database
  //   const firestore = getFirestore();
  //   firestore.collection('userBusData').add({
  //     ...project
  //   }).then(() => {
      dispatch({ type: 'CREATE_PROJECT_SUCCESS' });
  //   }).catch(err => {
      // dispatch({ type: 'CREATE_PROJECT_ERROR' , err});
  //   });
  }
  // return project
};

export const userFlightData = (project) => {
  return (dispatch, getState, { getFirestore }) => {
    // make async call to database
    const firestore = getFirestore();
    firestore.collection('userFlightData').add({
      ...project
    }).then(() => {
      dispatch({ type: 'CREATE_PROJECT_SUCCESS' });
    }).catch(err => {
      dispatch({ type: 'CREATE_PROJECT_ERROR' , err});
    });
  }
};

export const addBusData = (busData) => {
  console.log(busData)
  return (dispach, getState) =>{
    dispach({type: 'CREATE_PROJECT', busData});
  }
}