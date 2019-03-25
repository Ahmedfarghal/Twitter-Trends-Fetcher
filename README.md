# Twitter Trends Fetcher
A simple Web Application to get `Twitter Trends` using Twit Package & [Twitter API Credentials](https://developer.twitter.com/en/docs/basics/authentication/guides/access-tokens.html)!

## Getting Started
- `git clone https://github.com/elharony/Twitter-Trends-Fetcher.git`
- `cd Twitter-Trends-Fetcher`
- `npm install`
- Run the NodeJS Server using [nodemon](https://www.npmjs.com/package/nodemon): `nodemon server.js` -- **Port: 5000**
- `cd client`
- `npm install` inside the `client` directory
- Run the ReactJS Server: `npm start` -- **Port: 3000**
- VOALA! 🚀

## How to integrate it with my Twitter App?
- [Create A Twitter App](https://developer.twitter.com/en/apps)
- After creating your app, find your `Twitter API Credentials` (aka. Keys and Tokens)
- In `server.js`, replace the `XXXXXXX` with your `Twitter API Credentials`:
```
var T = new Twit({
    consumer_key: "XXXXXXX",
    consumer_secret: "XXXXXXX",
    access_token: "XXXXXXX",
    access_token_secret: "XXXXXXX",
});
```

## Contributing
This app is fairly simple and is created to help you getting started. It's not a All-In or Production-Ready Application, and the main purpose of it is to help you building your own `Twitter App`. So, any PRs to make it look better won't be approved, but if you are trying to fix a problem or something isn't clear, you are more than welcome!