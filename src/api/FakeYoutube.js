import axios from "axios";

export default class FakeYoutube {
  constructor() {}
  async search(keyword) {
    return keyword ? this.#searchByKeyword(keyword) : this.#mostPopular();
  }

  async channelImageUrl(id){
    return this.#getChannelImageUrl(id)
  }

  async relatedVideos(id){
    return this.#getRelatedVideos(id)
  }

  async #getRelatedVideos(id) {
    return axios
      .get('/videos/related.json')
      .then((res) => res.data.items.map((item) => ({ ...item, id: item.id.videoId })))
  }
  
  async #searchByKeyword(keyword) {
    return axios
      .get('/videos/search.json')
      .then((res) => res.data.items.map((item) => ({ ...item, id: item.id.videoId })))
  }
  async #mostPopular() {
    return axios.get(`/videos/popular.json`).then((res) => res.data.items);
  }

  async #getChannelImageUrl(id){
    return axios.get('/videos/channel.json').then((res) => res.data.items[0].snippet.thumbnails.default.url);
  }
}

