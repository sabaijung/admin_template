export function AUTHEN(users, accessToken) {
  return { type: 'AUTHEN', users, accessToken };
}

export function UAUTHEN() {
  return { type: 'UAUTHEN' };
}

export function USERINFO() {
  return { type: 'USERINFO' };
}
