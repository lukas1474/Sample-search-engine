export const unsplashId = process.env.REACT_APP_UNSPLASH_ACCESS_KEY;

export const UNSPLASH_URL = (search) => (`https://api/unsplash.com/search/photos?page=1&query=${search}&client_id=${unsplashId}`);
