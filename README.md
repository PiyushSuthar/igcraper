<p align="center" >
    <h1 align="center">IG Craper 🚀</h1>
    <p align="center">Scrape Info out of Instagram :p</p>
</p>
<p align="center">
<a href="https://github.com/PiyushSuthar/igcraper/issues"><img alt="GitHub issues" src="https://img.shields.io/github/issues/PiyushSuthar/igcraper?style=for-the-badge"></a>
<a href="https://github.com/PiyushSuthar/igcraper/network"><img alt="GitHub forks" src="https://img.shields.io/github/forks/PiyushSuthar/igcraper?style=for-the-badge"></a>
</p>

## 🔗 Installation

```sh
# npm install igcraper
yarn add igcraper
```

## ⚡️ Usage

I haven't added much methods to it yet. And This is type safe. I have added type even for Instagram response.

You can:-

- `getPost` - Get Post information and Media.
- `getUser` - Get User information, follower count, recent 15 posts, etc...
- `getLocation` - Get information about location, top and recent posts from that place.
- `getHashtag` - Get information about hashtag and recent posts in that hashtag.
- `filterPost` - Filters out the post response and gives an array of image and video urls. Also return captions and like count.

```js
// Import IgCraper from 'igcraper'
const IgCraper = require("igcraper").default;

const igCraper = new IgCraper();

// All are promise based functions :) So use the lovely async-await
const run = async () => {
  // Getting Post
  const post = await igCraper.getPost(
    "https://www.instagram.com/p/CDL3Ut0ndO0/"
  );

  // Filtering that response
  const filtredData = igCraper.filterPost(post);

  // Getting User
  const user = await igCraper.getUser("piyushsthr");

  // Getting Location
  const location = await igCraper.getLocation("238765449");

  // Getting Hashtag
  const hashtag = await igCraper.getHashtag("instagram");
};

run();
```

## 🤔 Who's Using?

Here are some projects using this Package.

- [Toolzar](https://toolzar.netlify.app) - By me :p

## 🤟 Contributions

Contributions, issues and feature requests are welcome!

if you feel that something is missing, feel free to create an [Issue](https://github.com/PiyushSuthar/igcraper/issues).

## ❤ Support

Almost all the project I make are Open Source. To keep me supporting, consider supporting.

Do ⭐ this Project.

Well, I'll meet you on Mars.

`Shinzou Wo Sasageyo ❤`

---

Made with ❤ and TypeScript.
