import Http from './utils/http';

export async function getPlaylistHot() {
  return Http.get('/playlist/hot');
}

export async function getLoginPhone(phone, md5_password) {
  return Http.get('login/cellphone/', {
    phone,
    md5_password
  });
}
