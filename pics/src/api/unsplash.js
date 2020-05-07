import axios from 'axios';

export default axios.create({
  baseURL: 'https://api.unsplash.com',
  headers: {
    Authorization: 'Client-ID sNg2-JCB2Jef3aQml_ehfhwPXSdHaHgA9Lkrzxt9ULw'
  }
});
