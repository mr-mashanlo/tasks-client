import ky from 'ky';

const defaultInstance = ky.create( {
  retry: 2,
  prefixUrl: import.meta.env.VITE_REACT_APP_BACK_URL,
  credentials: 'include',
  hooks: {
    afterResponse: [
      async ( _request, _options, response ) => {
        return response;
      }
    ]
  }
} );

export default defaultInstance;