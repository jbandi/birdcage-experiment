export const TWEETS_LOADED = 'TWEETS_LOADED';

export function tweetsLoaded(tweets) {
  return {
    type: TWEETS_LOADED,
    tweets
  };
}


