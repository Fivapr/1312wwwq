export const selectLoggedIn = state => !!state.auth.token;
export const selectToken = state => state.auth.token;
export const selectUser = state => state.auth.user;
export const selectIsPro = state => state.auth.user.pro;
export const selectSubscribeError = state => state.auth.error;
export const selectPlans = state => state.auth.plans;
