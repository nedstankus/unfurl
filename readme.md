# Unfurl utility script

This project provides a command-line tool for "unfurling" URLs.

## Installation

```
https://github.com/nedstankus/unfurl.git
then
npm install
```

## Usage

```
node index.js http://www.yahoo.com
```

## Sample Output

```
Neds-MacBook-Pro-2:unfurl nstankus$ node index.js http://www.yahoo.com
Scanning http://www.yahoo.com
result { other: 
   { title: 'Yahoo',
     dnsPrefetch: '//video-api.yql.yahoo.com',
     preconnect: '//video-api.yql.yahoo.com',
     description: 'News, email and search are just the beginning. Discover more every day. Find your yodel.',
     keywords: 'yahoo, yahoo home page, yahoo homepage, yahoo search, yahoo mail, yahoo messenger, yahoo games, news, finance, sport, entertainment',
     fbAppId: '90376669494',
     formatDetection: 'telephone=no',
     icon: 'https://s.yimg.com/os/mit/media/p/common/images/favicon_new-7483e38.svg',
     themeColor: '#400090',
     shortcutIcon: 'https://s.yimg.com/rz/l/favicon.ico',
     canonical: 'https://www.yahoo.com/',
     fbPages: '7040724713, 37510781596, 128015890542670, 73756409831, 1273983622628492, 183227235893, 107952415910993, 828031943896361, 338028696036, 228108177528276, 126435880711, 8603738371, 357311694375173, 168824166370, 116789651713844, 116789651713844, 284428852938, 116789651713844, 169590426398017, 150897358265131, 115060728528067, 358130347547704, 167601473274275, 166721106679241, 1573791532894850, 141301389258994, 138207559575213, 112996545439734, 345185573000, 131747896861126, 345185573000, 81262596234, 107143776010250, 137657892926963, 118757131504803',
     referrer: 'unsafe-url',
     stylesheet: 'https://s.yimg.com/nn/lib/metro/g/fpfooter/advance_0.0.25.css',
     search: 'https://search.yahoo.com/opensearch.xml',
     oathGuceConsentHost: 'guce.yahoo.com' },
  ogp: 
   { ogTitle: 'Yahoo',
     ogType: 'website',
     ogUrl: 'http://www.yahoo.com',
     ogDescription: 'News, email and search are just the beginning. Discover more every day. Find your yodel.',
     ogImage: 
      [ { url: 'https://s.yimg.com/dh/ap/default/130909/y_200_a.png' } ],
     ogSiteName: 'Yahoo' } }
```