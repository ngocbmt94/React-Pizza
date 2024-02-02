import { createSlice } from '@reduxjs/toolkit';
import { getAddress } from '../../services/apiGeocoding';

const initialState = {
  name: '',
  address: '',
  position: '',
  status: 'idle',
  error: '',
};

const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    createName(state, action) {
      // payload =  name
      state.name = action.payload;
    },
    updateAddress(state, action) {
      // payload =  result of fetchAddress()
      state.address = action.payload.address;
      state.position = action.payload.position;
      state.status = 'idle';
    },
    isLoadingAddress(state) {
      state.status = 'loading';
    },
    error(state, action) {
      // payload  = error
      state.error = action.payload;
      state.status = 'error';
    },
  },
});

export const { createName } = userSlice.actions;
export default userSlice.reducer;

export const getUserName = (state) => state.user.name;

const getPosition = function () {
  return new Promise(function (resolve, reject) {
    navigator.geolocation.getCurrentPosition(resolve, reject);
  });
};

const fetchAddress = async function () {
  // 1) We get the user's geolocation position
  const positionObj = await getPosition();
  const { latitude, longitude } = positionObj.coords;
  const position = { latitude, longitude };

  // 2) Then we use a reverse geocoding API to get a description of the user's address, so we can display it the order form, so that the user can correct it if wrong
  const addressObj = await getAddress(position);
  const address = `${addressObj?.locality}, ${addressObj?.city} ${addressObj?.postcode}, ${addressObj?.countryName}`;

  // 3) Then we return an object with the data that we are interested in
  return { position, address };
};
// export action creator to placed thunk in there
export function updateAddress() {
  return async function (dispatch, state) {
    dispatch({ type: 'user/isLoadingAddress' });
    try {
      const data = await fetchAddress();

      dispatch({ type: 'user/updateAddress', payload: data });
    } catch (err) {
      console.error(err.message);
      dispatch({ type: 'user/error', payload: err.message });
    }
  };
}
// selector function get address
export const getAddressDefaultUser = (state) => state.user.address;
