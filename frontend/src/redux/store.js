import { configureStore } from '@reduxjs/toolkit'
import userSlicer from './reducer/userSlicer.js'
import profileSlicer from './reducer/profileSlicer.js';
import propertySlice from './reducer/propertySlicer.js';
import tenantSlicer from './reducer/tenantSlicer.js';
import paymentSlicer from './reducer/paymentSlicer.js';
import dashboardSlicer from './reducer/dashboardSlicer.js';
import roomSlicer from './reducer/roomSlicer.js';
import furnitureSlicer from './reducer/furnitureSlicer.js';

export const store = configureStore({
  reducer: {
    user: userSlicer,
    profile: profileSlicer,
    property: propertySlice,
    tenant: tenantSlicer,
    payment: paymentSlicer,
    dashboard: dashboardSlicer,
    room: roomSlicer,
    furniture: furnitureSlicer
  },
})

export const server = 'http://localhost:4000/api/v1';