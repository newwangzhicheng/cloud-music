import Http from './utils/http';

export async function usePlaylistHot() {
  return Http.get('/playlist/hot');
}
