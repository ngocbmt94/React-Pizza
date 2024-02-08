import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { getAddress } from '../../services/apiGeocoding';

const getPosition = function () {
  return new Promise(function (resolve, reject) {
    navigator.geolocation.getCurrentPosition(resolve, reject);
  });
};

const initialState = {
  name: '',
  address: '',
  position: {},
  status: 'idle',
  error: '',
};
export const fetchAddress = createAsyncThunk(
  'user/fetchAddress',
  async function () {
    // 1) We get the user's geolocation position
    const positionObj = await getPosition();
    const { latitude, longitude } = positionObj.coords;
    const position = { latitude, longitude };

    // 2) Then we use a reverse geocoding API to get a description of the user's address, so we can display it the order form, so that the user can correct it if wrong
    const addressObj = await getAddress(position);
    const address = `${addressObj?.locality}, ${addressObj?.city} ${addressObj?.postcode}, ${addressObj?.countryName}`;

    // 3) Then we return an object with the payload = data
    return { position, address };
  },
);

const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    createName(state, action) {
      // payload = name
      state.name = action.payload;
    },
  },
  extraReducers(builders) {
    builders
      .addCase(fetchAddress.pending, (state, action) => {
        state.status = 'loading';
      })
      .addCase(fetchAddress.fulfilled, (state, action) => {
        state.status = 'idle';
        state.address = action.payload.address;
        state.position = action.payload.position;
      })
      .addCase(fetchAddress.rejected, (state, action) => {
        state.status = 'error';
        state.error =
          'There was a problem getting your address. Make sure to fill this field!';
      });
  },
});

export const { createName } = userSlice.actions;
export default userSlice.reducer;

export const getUserName = (state) => state.user.name;

// selector function get address
export const getAddressDefaultUser = (state) => state.user.address;
export const getStatusAddress = (state) => state.user.status;
export const getIsHasPostion = (state) => state.user.position;
export const getErrorAddress = (state) => state.user.error;
