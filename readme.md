# katha
A wrapper for the Katha.audio API

## Installation
Download node at [nodejs.org](http://nodejs.org) and install it, if you haven't already.

```sh
npm install katha --save
```

## Usage

```js
var katha = require('katha').create({
  token: 'your-token',
  email: 'your-email'
});
```

If you don't know what your token is, you can obtain that by sniffing the traffic between the Katha app and their servers. It is in the header with the tile 'X-API-TOKEN'. The email can also be found in the same, and is the one used to login into the Katha app.

This was done for educational purposes and should not be used for malicious purposes.

## API


### getMe(callback)
Returns your profile on Katha.

```js
katha.getMe(function(error, data){
  console.log(data);
});


{ user:
   { id: 1307,
     name: 'Ishan Marikar',
     description: '',
     email: 'hello@imarikar.com',
     is_verified: false,
     mobile: '',
     overall_rating: 0,
     notifications: [],
     messages: [],
     favourited_messages: [ [Object], [Object], [Object] ],
     image_url: 'http://cdn.katha.s3.amazonaws.com/images/1307/square_128x128_image-b8b71990-de27-0133-0901-696382abe618.jpg',

     messages_count: 0,
     subscribers_count: 0,
     subscriptions_count: 12,
     notification: 'Welcome to Katha' } }
```

### getFeeds(callback)
Returns your feeds on Katha.

```js
katha.getFeeds(function(error, data){
  console.log(data);
});


[ { message:
     { id: 1,
       title: 'Welcome to Katha',
       created_at: '2016-01-11T16:52:47.700Z',
       created_at_time_ago: '3m',
       broadcast: true,
       channel: [Object],
       streaming_url: 'https://s3.amazonaws.com/katha.audio.output/hlsv4/1-af24bf20-9ab1-0133-49b8-077132df8299/index.m3u8',
       download_url: 'https://s3.amazonaws.com/katha.audio.output/mp3/1-af24bf20-9ab1-0133-49b8-077132df8299.mp3',

       share_url: 'https://listen.katha.audio/m/K33e442',
       is_read: true,
       is_favourited: false,
       direction: 'inbox' } } ]
```

### getChannels(type, page, callback)
Returns all the channel on Katha by type. Types are 'paid' and 'free'.

```js
katha.getChannels('free', 1, function(error, data){
  console.log(data);
});


[ { channel:
     { id: 1,
       name: 'Katha ',
       description: 'Subscribe to stay up to date on the latest developments. You can send feedback, comments and bug reports to feedback@katha.audio.',
       overall_rating: 2,
       subscription_type: 'free',
       subscription_fee: 0,
       is_verified: true,

       currency_code: '$',
       quiz_enabled: true,
       image_url: 'http://cdn.katha.s3.amazonaws.com/images/1/square_128x128_image-97bdefa0-9ab1-0133-fe67-2b439b8758a1.png',
       subscribed: true } }]
```

### getChannelById(type, page, callback)
Returns a specific channel by ID. Audio messages are inside messages array.

```js
katha.getChannelById(139, function(error, data){
  console.log(data);
});

{ channel:
   { id: 139,
     name: 'Sharon Stephen',
     description: 'I\'m a trainer, emcee and word artist. I write, speak and design things for money (or not!). I am, in a word, one. @sharond_s on twitter.',

     overall_rating: 0,
     subscription_type: 'free',
     subscription_fee: 0,
     is_verified: false,
     currency_code: '$',
     quiz_enabled: false,
     counter_cache: 79,
     messages: [ [Object], [Object], [Object], [Object], [Object] ],
     reviews: [],
     image_url: 'http://cdn.katha.s3.amazonaws.com/images/139/square_128x128_image-efc011b0-9e5d-0133-cee0-7b4cd9aee052.jpg',
     subscribed: true,
     reviews_count: 0,
     messages_count: 6,
     subscriptions_count: 79 } }
```

## Tests
No tests yet.

## Dependencies
- [unirest](https://github.com/Mashape/unirest-nodejs): Simplified, lightweight HTTP client library
- [url-join](https://github.com/jfromaniello/url-join): Join urls and normalize as in path.join.

## License
ISC
