var initialState = {
  users: localStorage.getItem('users'),
  accessToken: localStorage.getItem('accessToken'),
};

export default function Authentication(state = initialState, action) {
  switch (action.type) {
    case 'AUTHEN':
      localStorage.setItem('users', action.users);
      localStorage.setItem('accessToken', action.accessToken);
      return {
        ...state,
        users: localStorage.getItem('users'),
        accessToken: localStorage.getItem('accessToken'),
      };
    case 'UAUTHEN':
      localStorage.removeItem('users');
      localStorage.removeItem('accessToken');
      return {
        ...state,
        users: localStorage.getItem('users'),
        accessToken: localStorage.getItem('accessToken'),
      };
    case 'USERINFO':
      return {
        ...state,
        users: localStorage.getItem('users'),
        accessToken: localStorage.getItem('accessToken'),
      };
    default:
      return {
        ...state,
        users: localStorage.getItem('users'),
        accessToken: localStorage.getItem('accessToken'),
      };
  }
}
