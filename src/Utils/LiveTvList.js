const data = [
  {
    name: '3 Tamil TV (720p)',
    img: 'https://i.imgur.com/WfAU7pB.png',
    category: 'Entertainment',
    video_url:
      'https://6n3yogbnd9ok-hls-live.5centscdn.com/threetamil/d0dbe915091d400bd8ee7f27f0791303.sdp/index.m3u8',
  },
  {
    name: '7S Music (576p)',
    img: 'https://i.imgur.com/P5EXpPy.jpg',
    category: 'Music',
    video_url:
      'http://103.199.161.254/Content/7smusic/Live/Channel(7smusic)/index.m3u8',
  },
  {
    name: '9X Jalwa (576p)',
    img: 'https://i.imgur.com/6h83JRO.png',
    category: 'Music',
    video_url: 'http://14.199.164.20:4001/play/a0nc/index.m3u8',
  },
  {
    name: '9X Jhakaas (576p)',
    img: 'https://i.imgur.com/aZ0f85I.png',
    category: 'Music',
    video_url: 'http://14.199.164.20:4001/play/a0mx/index.m3u8',
  },
  {
    name: '9XM (480p)',
    img: 'https://i.imgur.com/fD7wLka.jpg',
    category: 'Music',
    video_url:
      'https://d2q8p4pe5spbak.cloudfront.net/bpk-tv/9XM/9XM.isml/index.m3u8',
  },
  {
    name: 'A NEWSDONs TV (720p)',
    img: '',
    category: 'Music',
    video_url:
      'http://newsjatt.camdvr.org:1935/newsjatt/myStream/playlist.m3u8',
  },
  {
    name: 'Aaj Tak (360p)',
    img: 'https://i.imgur.com/x1Y2P21.png',
    category: 'News',
    video_url:
      'https://lmil.live-s.cdn.bitgravity.com/cdn-live/_definst_/lmil/live/aajtak_app.smil/playlist.m3u8',
  },
  {
    name: 'Aathavan TV (720p)',
    img: 'https://i.imgur.com/IgwQ7o5.png',
    category: 'Entertainment',
    video_url: 'http://45.77.66.224:1935/athavantv/live/playlist.m3u8',
  },
  {
    name: 'ABP Ananda (720p)',
    img: 'https://tv.releasemyad.com/images/logo/20160108044853abp-ananada.jpg',
    category: 'News',
    video_url:
      'https://abp-i.akamaihd.net/hls/live/765530/abpananda/master.m3u8',
  },
  {
    name: 'ABP Asmita (720p)',
    img: 'https://i.imgur.com/PtKcu6K.png',
    category: 'News',
    video_url:
      'https://abp-i.akamaihd.net/hls/live/765532/abpasmita/master.m3u8',
  },
  {
    name: 'ABP Hindi (720p)',
    img: 'https://static.abplive.in/wp-content/themes/abp-hindi/images/logo/hindiLogoD.png',
    category: 'News',
    video_url:
      'https://abp-i.akamaihd.net/hls/live/765529/abphindi/master.m3u8',
  },
  {
    name: 'ABP Majha (720p)',
    img: 'https://i.imgur.com/GteRQ6A.png',
    category: 'News',
    video_url:
      'https://abp-i.akamaihd.net/hls/live/765531/abpmajha/master.m3u8',
  },
  {
    name: 'AKD Calcutta News (540p)',
    img: 'https://calcuttanews.tv/images/cnwotag.png',
    category: 'News',
    video_url:
      'https://d39iawgzv3h0yo.cloudfront.net/out/v1/1ef4344a3b4a41908915d58ac7bd5e23/index.m3u8',
  },
  {
    name: 'Amar Ujala (360p)',
    img: '',
    category: 'News',
    video_url:
      'https://streamcdn.amarujala.com/live/smil:stream1.smil/playlist.m3u8',
  },
  {
    name: 'Amrita TV (576p)',
    img: 'https://i.imgur.com/xxWaGyn.jpg',
    category: 'Entertainment',
    video_url:
      'http://103.199.161.254/Content/amrita/Live/Channel(Amrita)/index.m3u8',
  },
  {
    name: 'Anjan (720p)',
    img: '',
    category: 'Undefined',
    video_url:
      'https://f3.vstream.online:7443/bstb/ngrp:anjan_hdall/playlist.m3u8',
  },
  {
    name: 'Apna Punjab (720p)',
    img: '',
    category: 'Undefined',
    video_url: 'http://cdn5.live247stream.com/apnapunjab/tv/playlist.m3u8',
  },
  {
    name: 'Artist Aloud (1080p)',
    img: '',
    category: 'Music',
    video_url: 'https://live.hungama.com/linear/artist-aloud/playlist.m3u8',
  },
  {
    name: 'Ashrafi Channel (484p)',
    img: '',
    category: 'Undefined',
    video_url:
      'http://ashrafichannel.livebox.co.in/ashrafivhannelhls/live.m3u8',
  },
  {
    name: 'Asianet Middle East (576p)',
    img: 'https://i.imgur.com/du9iZ0s.png',
    category: 'Entertainment',
    video_url: 'http://14.199.164.20:4001/play/a0k6/index.m3u8',
  },
  {
    name: 'Asianet News (720p)',
    img: 'https://i.imgur.com/89LBgkl.png',
    category: 'News',
    video_url:
      'https://vidcdn.vidgyor.com/asianet-origin/liveabr/playlist.m3u8',
  },
  {
    name: 'Asianet News Bangla (360p)',
    img: 'https://static.asianetnews.com/v1/images/bangla_logo.png',
    category: 'News',
    video_url:
      'https://vidcdn.vidgyor.com/rplus-origin/rplusasianetlive/playlist.m3u8',
  },
  {
    name: 'Asianet News Kannada (360p)',
    img: 'https://static.asianetnews.com/v1/images/asianet_suvarna_news.png',
    category: 'News',
    video_url:
      'https://vidcdn.vidgyor.com/suvarna-origin/liveabr/playlist.m3u8',
  },
  {
    name: 'Asianet News Tamil (360p)',
    img: 'https://static.asianetnews.com/v1/images/tamil_logo.png',
    category: 'News',
    video_url: 'https://vidcdn.vidgyor.com/ptm-origin/aslive/playlist.m3u8',
  },
  {
    name: 'Assam Talks (240p)',
    img: 'https://i.imgur.com/qL5PpG7.png',
    category: 'Undefined',
    video_url:
      'http://vidnetcdn.vidgyor.com/assamtalks-origin/liveabr/playlist.m3u8',
  },
  {
    name: 'Ayush TV (360p)',
    img: 'https://i.imgur.com/PWzvp0B.png',
    category: 'Lifestyle',
    video_url:
      'https://95eryw39dwn4-hls-live.wmncdn.net/Ayushu/271ddf829afeece44d8732757fba1a66.sdp/index.m3u8',
  },
  {
    name: 'B4U Bhojpuri (576p)',
    img: 'https://i.imgur.com/FizAx6D.png',
    category: 'Movies',
    video_url: 'http://14.199.164.20:4001/play/a0nq/index.m3u8',
  },
  {
    name: 'B4U Kadak (576p)',
    img: 'https://i.imgur.com/vwkjtRT.png',
    category: 'Movies',
    video_url:
      'http://103.199.160.85/Content/moviehouse/Live/Channel(MovieHouse)/index.m3u8',
  },
  {
    name: 'BBC News (540p)',
    img: 'https://raw.githubusercontent.com/Tapiosinn/tv-logos/master/countries/united-kingdom/bbc-news-uk.png',
    category: 'News',
    video_url:
      'https://vs-hls-push-uk-live.akamaized.net/x=3/i=urn:bbc:pips:service:bbc_news_channel_hd/mobile_wifi_main_sd_abr_v2.m3u8',
  },
  {
    name: 'BBC World News (480p)#EXTVLCOPT:',
    img: 'https://i.imgur.com/Nx0BRdV.png',
    category: 'News',
    video_url: 'http://ott-cdn.ucom.am/s24/index.m3u8',
  },
  {
    name: 'Bflix Movies (480p)',
    img: 'https://i.imgur.com/z3ALZQQ.jpg',
    category: 'Movies',
    video_url: 'https://m-c036-j2apps.s.llnwi.net/hls/5045.BFlixMovies.in.m3u8',
  },
  {
    name: 'Bloomberg TV Asia (720p)',
    img: 'https://upload.wikimedia.org/wikipedia/commons/thumb/6/66/Bloomberg_Television_logo.svg/300px-Bloomberg_Television_logo.svg.png',
    category: 'Business',
    video_url:
      'https://liveprodapnortheast.global.ssl.fastly.net/ap1/Channel-APTVqvs-AWS-tokyo-1/Source-APTVqvs-1000-1_live.m3u8',
  },
  {
    name: 'Bloomberg TV Asia Live Event (720p)',
    img: 'https://upload.wikimedia.org/wikipedia/commons/thumb/6/66/Bloomberg_Television_logo.svg/300px-Bloomberg_Television_logo.svg.png',
    category: 'Business',
    video_url:
      'https://www.bloomberg.com/media-manifest/streams/asia-event.m3u8',
  },
  {
    name: 'Boogle Bollywood (1080p)',
    img: 'https://i.imgur.com/Z07M07j.png',
    category: 'Undefined',
    video_url:
      'http://live.agmediachandigarh.com/booglebollywood/774e3ea9f3fa9bcdac47f445b83b6653.sdp/index.m3u8',
  },
  {
    name: 'Box Cinema (576p)',
    img: 'https://i.imgur.com/LGJlmtp.png',
    category: 'Movies',
    video_url: 'http://14.199.164.20:4001/play/a0su/index.m3u8',
  },
  {
    name: 'Captain TV (576p)',
    img: 'https://i.imgur.com/UXg6sac.png',
    category: 'Entertainment',
    video_url:
      'http://103.199.160.85/Content/captain/Live/Channel(Captain)/index.m3u8',
  },
  {
    name: 'Channel (720p)#EXTVLCOPT:',
    img: 'https://static.epg.best/in/ChannelV.in.png',
    category: 'Undefined',
    video_url:
      'https://livecdn.fptplay.net/foxlive/channelvhd_hls.smil/playlist.m3u8',
  },
  {
    name: 'Channel Win (360p)',
    img: '',
    category: 'Undefined',
    video_url:
      'https://cdn.smartstream.video/smartstream-us/channelwinlive/channelwinlive/playlist.m3u8',
  },
  {
    name: 'Channel Y (720p)',
    img: '',
    category: 'Undefined',
    video_url: 'http://cdn19.live247stream.com/channely/tv/playlist.m3u8',
  },
  {
    name: 'CNBC Awaaz (504p)',
    img: '',
    category: 'Business',
    video_url:
      'https://cnbcawaaz-lh.akamaihd.net/i/cnbcawaaz_1@174872/index_5_av-p.m3u8',
  },
  {
    name: 'CNBC Bajar (504p)',
    img: '',
    category: 'News',
    video_url:
      'https://cnbcbazar-lh.akamaihd.net/i/cnbcbajar_1@178933/index_5_av-p.m3u8',
  },
  {
    name: 'CNBC TV18 (504p)',
    img: 'https://i.imgur.com/3yumcV3.jpg',
    category: 'Business',
    video_url:
      'https://cnbctv18-lh.akamaihd.net/i/cnbctv18_1@174868/index_5_av-p.m3u8',
  },
  {
    name: 'Dabangg (576p)',
    img: 'https://i.imgur.com/hpizqP6.png',
    category: 'Entertainment',
    video_url: 'http://14.199.164.20:4001/play/a0nb/index.m3u8',
  },
  {
    name: 'Darshana TV (360p)',
    img: 'https://www.tvchannelpricelist.com/wp-content/uploads/channels-logo-300/darshana-tv-channel-logo-300x300.jpg',
    category: 'Entertainment',
    video_url:
      'https://live.neestream.net/neestream_01/darshanatv/tracks-v1a1/mono.m3u8',
  },
  {
    name: 'DD Malayalam (576p)',
    img: 'https://i.imgur.com/9HfMVKs.jpg',
    category: 'Entertainment',
    video_url:
      'http://103.199.161.254/Content/ddmalayalam/Live/Channel(DDMalayalam)/index.m3u8',
  },
  {
    name: 'DD National (576p)',
    img: 'https://i.imgur.com/MohlE5B.png',
    category: 'Entertainment',
    video_url:
      'http://103.199.161.254/Content/ddnational/Live/Channel(DDNational)/index.m3u8',
  },
  {
    name: 'DD News (1080p)',
    img: 'https://i.imgur.com/9ozOypJ.png',
    category: 'News',
    video_url:
      'http://free.fullspeed.tv/iptv-query?streaming-ip=https://www.youtube.com/channel/UCKwucPzHZ7zCUIf7If-Wo1g/live',
  },
  {
    name: 'DD Sports (576p)',
    img: 'https://i.imgur.com/PEEELsL.png',
    category: 'Sports',
    video_url:
      'http://103.199.161.254/Content/ddsports/Live/Channel(DDSPORTS)/index.m3u8',
  },
  {
    name: 'Desi Beats HD (720p)',
    img: '',
    category: 'Undefined',
    video_url: 'http://cdn7.live247stream.com/desibeats/tv/playlist.m3u8',
  },
  {
    name: 'Desi Channel (720p)',
    img: '',
    category: 'Music',
    video_url:
      'https://live.wmncdn.net/desichannel/7e2dd0aed46b70a5c77f4affdb702e4b.sdp/playlist.m3u8',
  },
  {
    name: 'Desi Plus (720p)',
    img: '',
    category: 'Undefined',
    video_url: 'http://cdn2.live247stream.com/desiplus/tv/playlist.m3u8',
  },
  {
    name: 'Dhamaal (1080p)',
    img: 'https://www.lyngsat.com/logo/tv/dd/dhamaal_in.png',
    category: 'Music',
    video_url: 'https://live.hungama.com/linear/dhamaal/playlist.m3u8',
  },
  {
    name: 'Dhinchaak 2 (576p)',
    img: 'https://i.imgur.com/AC4ze9o.jpg',
    category: 'Movies',
    video_url: 'http://14.199.164.20:4001/play/a0tm/index.m3u8',
  },
  {
    name: 'Dhinchaak (576p)',
    img: 'https://i.imgur.com/T2c6PjU.jpg',
    category: 'Movies',
    video_url: 'http://14.199.164.20:4001/play/a0o5/index.m3u8',
  },
  {
    name: 'Dighvijay (240p)',
    img: 'https://i.imgur.com/wdE7gxU.png',
    category: 'News',
    video_url:
      'https://vidcdn.vidgyor.com/dighvijay-origin/liveabr/playlist.m3u8',
  },
  {
    name: 'Dil Se (360p)',
    img: '',
    category: 'Music',
    video_url: 'https://live.hungama.com/linear/dil-se/playlist.m3u8',
  },
  {
    name: 'Disha TV (360p)',
    img: 'https://www.lyngsat.com/logo/tv/dd/disha_tv.png',
    category: 'Undefined',
    video_url:
      'http://xlbor3aadvaj-hls-live.wmncdn.net/disha/stream.stream/playlist.m3u8',
  },
  {
    name: 'Dishum',
    img: 'https://i.imgur.com/k4j2QJX.png',
    category: 'Entertainment',
    video_url: 'https://m-c29-j2apps.s.llnwi.net/hls/5332.Dishum.in.m3u8',
  },
  {
    name: 'DocuBay TV (1080p)',
    img: 'https://od.lk/s/MF8yMzAxMjQ1MzBf/Docubay_750x750.png',
    category: 'Entertainment',
    video_url:
      'https://docubayvh.s.llnwi.net/526a07ab-6ae7-4b6c-84a1-159791416484_1000004372_HLS/manifest.m3u8',
  },
  {
    name: 'Dreamz TV (576p)',
    img: 'https://i.imgur.com/yXHmKtT.png',
    category: 'Entertainment',
    video_url: 'http://198.144.149.82:8080/NOTV/DREAMHD/index.m3u8?token=GTR',
  },
  {
    name: 'Dum TV Kannada (576p)',
    img: 'https://i.imgur.com/e43ysdo.png',
    category: 'Entertainment',
    video_url: 'http://14.199.164.20:4001/play/a0sq/index.m3u8',
  },
  {
    name: 'DW English (1080p)',
    img: 'https://i.imgur.com/xnv0Pgm.jpg',
    category: 'News',
    video_url:
      'https://dwamdstream102.akamaized.net/hls/live/2015525/dwstream102/index.m3u8',
  },
  {
    name: 'E24 (576p)',
    img: 'https://i.imgur.com/VBu7r0A.png',
    category: 'Entertainment',
    video_url: 'http://14.199.164.20:4001/play/a0pc/index.m3u8',
  },
  {
    name: 'EET TV (1080p)',
    img: 'https://i.imgur.com/f7J37yv.png',
    category: 'Entertainment',
    video_url: 'https://live.streamjo.com/eetlive/eettv.m3u8',
  },
  {
    name: 'Enter10 Bangla (576p)',
    img: 'https://i.imgur.com/fkOxQtS.png',
    category: 'Entertainment',
    video_url: 'http://14.199.164.20:4001/play/a0j5/index.m3u8',
  },
  {
    name: 'ET Now (288p)',
    img: 'https://i.imgur.com/rhkI95a.png',
    category: 'Business',
    video_url:
      'https://etnowweblive-lh.akamaihd.net/i/ETN_1@348070/master.m3u8',
  },
  {
    name: 'ETV Telangana (480p)',
    img: 'https://i.imgur.com/lQBs2Cs.jpg',
    category: 'News',
    video_url:
      'http://free.fullspeed.tv/iptv-query?streaming-ip=https://www.youtube.com/channel/UC6ickpgDIsltU_-8CbZaksQ/live',
  },
  {
    name: 'Fakt Marathi (576p)',
    img: 'https://i.imgur.com/y0VS4QN.png',
    category: 'Entertainment',
    video_url: 'http://14.199.164.20:4001/play/a0q8/index.m3u8',
  },
  {
    name: 'FASTWAY NEWS (720p)',
    img: '',
    category: 'News',
    video_url: 'http://163.47.214.155:1935/fwnews/live/playlist.m3u8',
  },
  {
    name: 'Filmeraa (720p)',
    img: '',
    category: 'Undefined',
    video_url: 'https://a.jsrdn.com/broadcast/7ef91d3d7a/+0000/c.m3u8',
  },
  {
    name: 'Flowers TV (576p)',
    img: 'https://i.imgur.com/ilvwIyG.png',
    category: 'Entertainment',
    video_url:
      'http://103.199.161.254/Content/flowers/Live/Channel(Flowers)/index.m3u8',
  },
  {
    name: 'Food Food (576p)',
    img: 'https://i.imgur.com/J930pA1.png',
    category: 'Entertainment',
    video_url: 'http://14.199.164.20:4001/play/a0qx/index.m3u8',
  },
  {
    name: 'France 24 English (1080p)',
    img: 'https://upload.wikimedia.org/wikipedia/commons/8/8a/France24.png',
    category: 'News',
    video_url:
      'http://f24hls-i.akamaihd.net/hls/live/221147/F24_EN_HI_HLS/master.m3u8',
  },
  {
    name: 'GDNS Ludhiana (1080p)',
    img: '',
    category: 'Undefined',
    video_url:
      'http://akalmultimedia.net:1935/gdnslive/gdns-live/chunklist.m3u8',
  },
  {
    name: 'Global Punjab (720p)',
    img: 'https://i.imgur.com/6GcaSUS.jpg',
    category: 'News',
    video_url: 'https://media.streambrothers.com:1936/8522/8522/playlist.m3u8',
  },
  {
    name: 'Hulchul TV (720p)',
    img: '',
    category: 'Undefined',
    video_url: 'http://cdn12.henico.net:8080/live/jbani/index.m3u8',
  },
  {
    name: 'I Love (576p)',
    img: 'https://i.imgur.com/u191zfh.png',
    category: 'Music',
    video_url: 'http://14.199.164.20:4001/play/a0p3/index.m3u8',
  },
  {
    name: 'Imayam (480p)',
    img: 'https://i.imgur.com/CzdM0pg.png',
    category: 'Entertainment',
    video_url: 'https://idvd.multitvsolution.com/idvo/imayamtv.m3u8',
  },
  {
    name: 'India News (480p)',
    img: 'https://i.imgur.com/90tlaUn.png',
    category: 'News',
    video_url: 'https://m-c036-j2apps.s.llnwi.net/hls/0442.IndiaNews.in.m3u8',
  },
  {
    name: 'India Today (720p)',
    img: 'https://i.imgur.com/koFYddE.png',
    category: 'News',
    video_url:
      'https://indiatodaylive.akamaized.net/hls/live/2014320/indiatoday/indiatodaylive/playlist.m3u8',
  },
  {
    name: 'India TV (480p)',
    img: 'https://i.imgur.com/IYXrLPs.png',
    category: 'Undefined',
    video_url:
      'https://live-indiatvnews.akamaized.net/indiatv-origin/ITV_1_1@199237/playlist.m3u8',
  },
  {
    name: 'Inshort (India) (720p)',
    img: '',
    category: 'Undefined',
    video_url: 'https://inshort-samsungindia.amagi.tv/playlist.m3u8',
  },
  {
    name: 'Isai Aruvi (576p)',
    img: 'https://i.imgur.com/radWIeb.png',
    category: 'Music',
    video_url:
      'http://103.199.161.254/Content/isaiaruvi/Live/Channel(IsaiAruvi)/index.m3u8',
  },
  {
    name: 'Jaihind TV (576p)',
    img: 'https://i.imgur.com/Jw0M6Kp.jpg',
    category: 'Entertainment',
    video_url:
      'http://103.199.161.254/Content/jaihind/Live/Channel(Jaihind)/index.m3u8',
  },
  {
    name: 'Jan TV (720p)',
    img: 'https://i.imgur.com/0qNJuVP.jpg',
    category: 'News',
    video_url:
      'http://free.fullspeed.tv/iptv-query?streaming-ip=http://www.youtube.com/channel/UCjmnq35TvJ1J8JZS49OPg-Q/live',
  },
  {
    name: 'Janam TV (720p)',
    img: 'https://i.imgur.com/LWUpmDm.png',
    category: 'News',
    video_url:
      'https://vidcdn.vidgyor.com/janamtv-origin/liveabr/playlist.m3u8',
  },
  {
    name: 'Janta TV (360p)',
    img: 'https://www.lyngsat.com/logo/tv/jj/janta_tv_in.png',
    category: 'Undefined',
    video_url: 'https://live.wmncdn.net/jantatv/live.stream/index.m3u8',
  },
  {
    name: 'Jeevan TV (576p)',
    img: 'https://i.imgur.com/PYs1W1Y.png',
    category: 'Undefined',
    video_url:
      'http://103.199.161.254/Content/jeevan/Live/Channel(Jeevan)/index.m3u8',
  },
  {
    name: 'Jhanjar Music (1080p)',
    img: 'https://i.imgur.com/gIYOu4i.jpg',
    category: 'Music',
    video_url: 'http://159.203.9.134/hls/jhanjar_music/jhanjar_music.m3u8',
  },
  {
    name: 'Jonack TV (360p)',
    img: '',
    category: 'Undefined',
    video_url:
      'https://cdn.smartstream.video/smartstream-us/jonakk/jonakk/playlist.m3u8',
  },
  {
    name: 'Kadak Hits (1080p)',
    img: '',
    category: 'Music',
    video_url: 'https://live.hungama.com/linear/kadak-hits/playlist.m3u8',
  },
  {
    name: 'Kairali Arabia (480p)',
    img: 'https://i.imgur.com/dp6BvWJ.png',
    category: 'Entertainment',
    video_url:
      'https://idvd.multitvsolution.com/idvo/kairaliarabia_540p/index.m3u8',
  },
  {
    name: 'Kairali News (720p)',
    img: 'https://i.imgur.com/hXsVrIh.jpg',
    category: 'News',
    video_url:
      'http://free.fullspeed.tv/iptv-query?streaming-ip=https://www.youtube.com/channel/UCkCWitaToNG1_lR-Si1oMrg/live',
  },
  {
    name: 'Kairali TV (480p)',
    img: 'https://i.imgur.com/8Di4h6t.png',
    category: 'Entertainment',
    video_url:
      'http://103.199.161.254/Content/kairali/Live/Channel(Kairali)/index.m3u8',
  },
  {
    name: 'Kairali We (576p)',
    img: 'https://i.imgur.com/Z626hKz.jpg',
    category: 'Entertainment',
    video_url: 'http://103.199.161.254/Content/we/Live/Channel(We)/index.m3u8',
  },
  {
    name: 'Kalaignar (576p)',
    img: 'https://upload.wikimedia.org/wikipedia/en/3/3a/Kalaignar_logo.jpg',
    category: 'Undefined',
    video_url:
      'http://103.199.161.254/Content/kalaignartv/Live/Channel(KalaignarTV)/index.m3u8',
  },
  {
    name: 'Kalaignar Murasu (576p)',
    img: 'https://i.imgur.com/ZDXVWVQ.png',
    category: 'Music',
    video_url:
      'http://103.199.160.85/Content/kalaignarmurasu/Live/Channel(KalaignarMurasu)/index.m3u8',
  },
  {
    name: 'Kalaignar Seithikal (576p)',
    img: 'https://i.imgur.com/qWOnWhQ.png',
    category: 'News',
    video_url:
      'http://103.199.160.85/Content/kalaignarseithikal/Live/Channel(KalaignarSeithikal)/index.m3u8',
  },
  {
    name: 'Kalaignar Sirippoli (576p)',
    img: 'https://i.imgur.com/bqXRXaZ.png',
    category: 'Comedy',
    video_url:
      'http://103.199.161.254/Content/kalaignarsirippoli/Live/Channel(Kalaignarsirippoli)/index.m3u8',
  },
  {
    name: 'Kalinga TV (864p)',
    img: 'https://i.imgur.com/mwbseoN.png',
    category: 'Undefined',
    video_url:
      'https://live.mycast.in/kalingatv/d0dbe915091d400bd8ee7f27f0791303.sdp/playlist.m3u8',
  },
  {
    name: 'Kanak News (720p)',
    img: 'https://i.imgur.com/aJsISJb.png',
    category: 'News',
    video_url: 'https://live.kanaknews.com:4443/live/stream/playlist.m3u8',
  },
  {
    name: 'Kannur One (720p)',
    img: 'https://i.imgur.com/hytRL90.png',
    category: 'Undefined',
    video_url:
      'https://bnwdplewrp3a-hls-live.wmncdn.net/kannur1/d0dbe915091d400bd8ee7f27f0791303.sdp/playlist.m3u8',
  },
  {
    name: 'Kannur Vision (360p)',
    img: 'https://i.imgur.com/Zo6TFvK.png',
    category: 'Undefined',
    video_url: 'https://stream.ufworldind.in/live/kvision/playlist.m3u8',
  },
  {
    name: 'Kappa TV (360p)',
    img: 'https://i.imgur.com/MkfPo1V.jpg',
    category: 'Lifestyle',
    video_url:
      'http://103.199.161.254/Content/kappa/Live/Channel(Kappa)/index.m3u8',
  },
  {
    name: 'Kasthuri (576p)',
    img: 'https://upload.wikimedia.org/wikipedia/en/7/78/Kasthuri-TV-logo.jpg',
    category: 'Entertainment',
    video_url:
      'http://103.199.161.254/Content/kasthuritv/Live/Channel(KasthuriTV)/index.m3u8',
  },
  {
    name: 'KCL TV (720p)',
    img: 'https://i.imgur.com/bkp9dIm.png',
    category: 'Entertainment',
    video_url: 'http://kcltv.livebox.co.in/kclhls/live.m3u8',
  },
  {
    name: 'KCV (576p)',
    img: 'https://i.imgur.com/9YD8u4H.png',
    category: 'Entertainment',
    video_url: 'http://198.144.149.82:8080/NOTV/KCVTV/index.m3u8?token=GTR',
  },
  {
    name: 'KCV Movies (576p)',
    img: 'https://i.imgur.com/NY94lnZ.png',
    category: 'Movies',
    video_url: 'http://198.144.149.82:8080/NOTV/KCVMOVIE/index.m3u8?token=GTR',
  },
  {
    name: 'Ken TV (360p)',
    img: 'https://i.imgur.com/OnYOCmw.jpg',
    category: 'Undefined',
    video_url:
      'https://stream.ufworldind.in/kentvlive/smil:kentv.smil/playlist.m3u8',
  },
  {
    name: 'Kerala Vision (576p)',
    img: 'https://i.imgur.com/0XF3nLw.png',
    category: 'Entertainment',
    video_url: 'http://14.199.164.20:4001/play/a0ni/index.m3u8',
  },
  {
    name: 'Khabrain Abhi Tak (480p)',
    img: 'https://www.lyngsat.com/logo/tv/kk/khabrain_abhi_tak_in.png',
    category: 'Undefined',
    video_url: 'https://vidcdn.vidgyor.com/kat-origin/liveabr/playlist.m3u8',
  },
  {
    name: 'KITE Victers (Kerala) (720p)',
    img: '',
    category: 'Undefined',
    video_url:
      'https://932y4x26ljv8-hls-live.5centscdn.com/victers/tv.stream/playlist.m3u8',
  },
  {
    name: 'Life TV (480p)',
    img: '',
    category: 'Undefined',
    video_url:
      'http://59c3ec70cfde0.streamlock.net/channel_6/channel6/playlist.m3u8',
  },
  {
    name: 'Lok Sabha TV (576p)',
    img: 'https://i.imgur.com/NsQE4U1.png',
    category: 'Undefined',
    video_url: 'https://nicls1-lh.akamaihd.net/i/lst_1@26969/master.m3u8',
  },
  {
    name: 'Maha Movie (576p)',
    img: 'https://i.imgur.com/hpShFDL.png',
    category: 'Movies',
    video_url: 'http://14.199.164.20:4001/play/a0q7/index.m3u8',
  },
  {
    name: 'Makkal TV (576p)',
    img: 'https://i.imgur.com/Sv4bLGX.png',
    category: 'General',
    video_url: 'http://14.199.164.20:4001/play/a0l1/index.m3u8',
  },
  {
    name: 'Malabar News (720p)',
    img: 'https://i.imgur.com/yJWfyfM.png',
    category: 'News',
    video_url: 'http://cloud.logicwebs.in:1935/live/malabarnews/playlist.m3u8',
  },
  {
    name: 'Malabar Vision (720p)',
    img: 'https://i.imgur.com/ZNbdouM.jpg',
    category: 'News',
    video_url: 'http://cdn1.logicwebs.in:1935/malabar/malabar/playlist.m3u8',
  },
  {
    name: 'Malappuram Channel (720p)',
    img: 'https://i.imgur.com/X2aZBiz.png',
    category: 'News',
    video_url: 'http://103.78.18.137:1935/live/mlpchannel/chunklist.m3u8',
  },
  {
    name: 'Mangalam (576p)',
    img: 'https://i.imgur.com/V5nQl9m.png',
    category: 'News',
    video_url:
      'http://103.199.160.85/Content/mangalam/Live/Channel(Mangalam)/index.m3u8',
  },
  {
    name: 'Manorama News (576p)',
    img: 'https://i.imgur.com/QWHbIYt.png',
    category: 'News',
    video_url:
      'http://103.199.161.254/Content/manoramanews/Live/Channel(ManoramaNews)/index.m3u8',
  },
  {
    name: 'Manoranjan Grand (576p)',
    img: 'https://i.imgur.com/2BSvBGG.png',
    category: 'Movies',
    video_url: 'http://14.199.164.20:4001/play/a0m2/index.m3u8',
  },
  {
    name: 'Manoranjan Movies (144p)',
    img: 'https://i.imgur.com/F7uHOyA.png',
    category: 'Movies',
    video_url:
      'https://m-c036-j2apps.s.llnwi.net/hls/2172.ManoranjanMovies.in.m3u8',
  },
  {
    name: 'Marutam TV (720p)',
    img: 'https://i.imgur.com/cFNw4Af.png',
    category: 'Entertainment',
    video_url: 'http://mntv.livebox.co.in/mntvhls/mntv.m3u8',
  },
  {
    name: 'Mathrubhumi News (1080p)',
    img: 'https://i.imgur.com/xlGIEnZ.png',
    category: 'News',
    video_url:
      'http://free.fullspeed.tv/iptv-query?streaming-ip=https://www.youtube.com/channel/UCwXrBBZnIh2ER4lal6WbAHw/live',
  },
  {
    name: 'Mazhavil Manorama (576p)',
    img: 'https://i.imgur.com/xCHQrH0.png',
    category: 'Entertainment',
    video_url: 'http://14.199.164.20:4001/play/a0kd/index.m3u8',
  },
  {
    name: 'Mazhavil Manorama HD (1080p)',
    img: 'https://i.imgur.com/xCHQrH0.png',
    category: 'Entertainment',
    video_url: 'http://14.199.164.20:4001/play/a0p9/index.m3u8',
  },
  {
    name: 'Media One (576p)',
    img: 'https://i.imgur.com/tQvdxWo.jpg',
    category: 'News',
    video_url:
      'http://103.199.161.254/Content/mediaone/Live/Channel(MediaOne)/index.m3u8',
  },
  {
    name: 'MH1 Music (360p)',
    img: '',
    category: 'Undefined',
    video_url:
      'http://rtmp.smartstream.video:1935/mhonemusic/mhonemusic/playlist.m3u8',
  },
  {
    name: 'MH1 Prime (360p)',
    img: '',
    category: 'Undefined',
    video_url:
      'http://rtmp.smartstream.video:1935/mhonenews/mhonenews/playlist.m3u8',
  },
  {
    name: 'Mirror Now (360p)',
    img: 'https://yt3.ggpht.com/-XmvqPl571Ak/AAAAAAAAAAI/AAAAAAAAAAA/mMm0Tpd90kU/s900-c-k-no-mo-rj-c0xffffff/photo.jpg',
    category: 'Undefined',
    video_url: 'https://mbnowweb-lh.akamaihd.net/i/MRN_1@346545/master.m3u8',
  },
  {
    name: 'MK Six (576p)',
    img: 'https://i.imgur.com/FAytBoW.png',
    category: 'Undefined',
    video_url:
      'http://103.199.160.85/Content/mktv6/Live/Channel(MKTV6)/index.m3u8',
  },
  {
    name: 'MK Tunes (576p)',
    img: 'https://i.imgur.com/m8DPQd6.png',
    category: 'Undefined',
    video_url:
      'http://103.199.160.85/Content/mktunes/Live/Channel(MKTunes)/index.m3u8',
  },
  {
    name: 'MK TV (576p)',
    img: 'https://i.imgur.com/UxxbaR3.png',
    category: 'Entertainment',
    video_url:
      'http://103.199.160.85/Content/mktv/Live/Channel(MKTV)/index.m3u8',
  },
  {
    name: 'Mtunes Plus (576p)',
    img: 'https://i.imgur.com/Rt7k6E3.png',
    category: 'Music',
    video_url: 'http://14.199.164.20:4001/play/a0p2/index.m3u8',
  },
  {
    name: 'Music India (576p)',
    img: 'https://i.imgur.com/F7tPCwh.png',
    category: 'Music',
    video_url: 'http://14.199.164.20:4001/play/a0mt/index.m3u8',
  },
  {
    name: 'Naaptol (576p)',
    img: 'https://pbs.twimg.com/profile_images/897059156556783616/BUbUxAuW.jpg',
    category: 'Undefined',
    video_url: 'http://14.199.164.20:4001/play/a0n1/index.m3u8',
  },
  {
    name: 'Namdhari (404p)',
    img: '',
    category: 'Undefined',
    video_url: 'https://namdhari.tv/live/sbs1.m3u8',
  },
  {
    name: 'Nazrana (720p)',
    img: '',
    category: 'Music',
    video_url: 'https://live.hungama.com/linear/nazrana/playlist.m3u8',
  },
  {
    name: 'NCV (720p)',
    img: 'https://i.imgur.com/ltdtvL3.png',
    category: 'Entertainment',
    video_url: 'http://103.146.174.60:1935/NCV/ncvstream/master.m3u8',
  },
  {
    name: 'NDTV 24X7 (480p)',
    img: '',
    category: 'Undefined',
    video_url:
      'https://ndtv24x7elemarchana.akamaized.net/hls/live/2003678/ndtv24x7/master.m3u8',
  },
  {
    name: 'NDTV India (480p)',
    img: 'https://i.imgur.com/QjJYohG.png',
    category: 'Undefined',
    video_url:
      'https://ndtvindiaelemarchana.akamaized.net/hls/live/2003679/ndtvindia/master.m3u8',
  },
  {
    name: 'NDTV Profit',
    img: 'https://i.imgur.com/bkGH7q3.jpg',
    category: 'Business',
    video_url:
      'https://ndtv.live-s.cdn.bitgravity.com/cdn-live/_definst_/ndtv/live/ndtv_profit.smil/playlist.m3u8',
  },
  {
    name: 'Nee Cinema (576p)',
    img: 'https://i.imgur.com/vYme2fs.png',
    category: 'Movies',
    video_url:
      'https://live.neestream.com/neestream_01/nee_cinema/playlist.m3u8',
  },
  {
    name: 'News 7 Tamil (1080p)',
    img: 'https://i.imgur.com/oBjgUTc.png',
    category: 'News',
    video_url:
      'http://free.fullspeed.tv/iptv-query?streaming-ip=https://www.youtube.com/channel/UC2f4w_ppqHplvjiNaoTAK9w/live',
  },
  {
    name: 'News18 Assam (504p)',
    img: '',
    category: 'News',
    video_url:
      'https://news18assam-lh.akamaihd.net/i/n18assamne_1@526575/index_5_av-p.m3u8',
  },
  {
    name: 'News18 Bangla (360p)',
    img: '',
    category: 'News',
    video_url:
      'https://news18bangla-lh.akamaihd.net/i/n18bangla_1@2289/index_4_av-p.m3u8',
  },
  {
    name: 'News 18 Bengali (360p)',
    img: 'https://i.imgur.com/lVbw2xH.png',
    category: 'News',
    video_url:
      'https://news18bangla-lh.akamaihd.net/i/n18bangla_1@2289/index_4_av-p.m3u8?rebase=on&sd=10',
  },
  {
    name: 'News 18 Chhattisgarh (360p)',
    img: '',
    category: 'News',
    video_url:
      'https://news18mp-lh.akamaihd.net/i/n18mpcg_1@175737/index_4_av-p.m3u8?rebase=on&sd=10',
  },
  {
    name: 'News 18 Gujarati (360p)',
    img: 'https://i.imgur.com/u9RVst4.png',
    category: 'News',
    video_url:
      'https://news18gujarati-lh.akamaihd.net/i/n18gujarat_1@370955/index_4_av-p.m3u8?rebase=on&sd=10',
  },
  {
    name: 'News 18 Hindi (360p)',
    img: '',
    category: 'News',
    video_url:
      'https://news18india-lh.akamaihd.net/i/news18india_1@174951/index_4_av-p.m3u8?rebase=on&sd=10',
  },
  {
    name: 'News18 India (504p)',
    img: 'https://i.imgur.com/S0fxbjy.png',
    category: 'News',
    video_url:
      'https://news18india-lh.akamaihd.net/i/news18india_1@174951/index_5_av-p.m3u8',
  },
  {
    name: 'News 18 Jharkhand (360p)',
    img: '',
    category: 'News',
    video_url:
      'https://news18bihar-lh.akamaihd.net/i/n18biharjh_1@175736/index_4_av-p.m3u8?rebase=on&sd=10',
  },
  {
    name: 'News 18 Kannada (360p)',
    img: 'https://static.kannada.news18.com/kannada/uploads/2020/03/Kannada1.png',
    category: 'News',
    video_url:
      'https://news18kannada-lh.akamaihd.net/i/n18kannada_1@372918/index_4_av-p.m3u8?rebase=on&sd=10',
  },
  {
    name: 'News18 Lokmat (504p)',
    img: 'https://i.imgur.com/jUxXjTt.png',
    category: 'Undefined',
    video_url:
      'https://news18lokmat-lh.akamaihd.net/i/n18lokmat_1@178974/index_5_av-p.m3u8',
  },
  {
    name: 'News 18 Malayalam (360p)',
    img: 'https://i.imgur.com/D9lMLmX.png',
    category: 'News',
    video_url:
      'https://news18kerala-lh.akamaihd.net/i/n18kerala_1@526583/index_4_av-p.m3u8?rebase=on&sd=10',
  },
  {
    name: 'News 18 Odia (360p)',
    img: 'https://i.imgur.com/fGetI6C.png',
    category: 'News',
    video_url:
      'https://etv-oriya.akamaized.net/i/n18odia_1@179753/index_4_av-p.m3u8?rebase=on&sd=10',
  },
  {
    name: 'News 18 Punjab (360p)',
    img: '',
    category: 'News',
    video_url:
      'https://news18haryana-lh.akamaihd.net/i/n18punjabhimhar_1@349009/index_4_av-p.m3u8?rebase=on&sd=10',
  },
  {
    name: 'News 18 Rajasthan (360p)',
    img: 'https://i.imgur.com/jsNaozG.png',
    category: 'News',
    video_url:
      'https://news18rajasthan-lh.akamaihd.net/i/n18raj_1@175738/index_4_av-p.m3u8?rebase=on&sd=10',
  },
  {
    name: 'News 18 Tamil (360p)',
    img: 'https://static.wikia.nocookie.net/logopedia/images/a/a8/News18_Tamilnadu.jpeg/revision/latest?cb=20191220041122',
    category: 'News',
    video_url:
      'https://news18tamil-lh.akamaihd.net/i/n18tamil_1@526595/index_4_av-p.m3u8?rebase=on&sd=10',
  },
  {
    name: 'News 18 Urdu (360p)',
    img: 'https://i.imgur.com/Spri9X3.png',
    category: 'News',
    video_url:
      'https://news18urdu-lh.akamaihd.net/i/n18urdu_1@373059/index_4_av-p.m3u8?rebase=on&sd=10',
  },
  {
    name: 'News 18 Uttarakhand (360p)',
    img: '',
    category: 'News',
    video_url:
      'https://news18up-lh.akamaihd.net/i/n18upuk_1@175735/index_4_av-p.m3u8?rebase=on&sd=10',
  },
  {
    name: 'Next TV Malabar (720p)',
    img: 'https://cdn.statically.io/img/nexttv.in/f=auto%2Cw=160/assets/images/toplogo-2.png?v=1',
    category: 'Undefined',
    video_url:
      'https://6zklxbgpdw9b-hls-live.5centscdn.com/next/c9a1fdac6e082dd89e7173244f34d7b3.sdp/playlist.m3u8',
  },
  {
    name: 'One TV (720p)',
    img: 'https://i.imgur.com/ssMOeaj.png',
    category: 'Entertainment',
    video_url: 'http://137.59.86.218:1935/live/onetv/playlist.m3u8',
  },
  {
    name: 'Peace TV Bangla (720p)',
    img: 'https://github.com/fawazahmed0/tiger/raw/master/peace/bangla.jpg',
    category: 'Religious',
    video_url: 'http://199.223.252.162:8032/bangla_adaptive/index.m3u8',
  },
  {
    name: 'Peace TV English (1080p)',
    img: 'https://github.com/fawazahmed0/tiger/raw/master/peace/english.jpg',
    category: 'Religious',
    video_url: 'http://199.223.252.162:8032/english_adaptive/index.m3u8',
  },
  {
    name: 'Peace TV Urdu (1080p)',
    img: 'https://github.com/fawazahmed0/tiger/raw/master/peace/urdu.jpg',
    category: 'Religious',
    video_url: 'http://199.223.252.162:8032/urdu_adaptive/index.m3u8',
  },
  {
    name: 'Polimer News (720p)',
    img: 'https://india.mom-rsf.org/typo3temp/_processed_/d/c/csm_16526-1592_import_d84315ad22.png',
    category: 'News',
    video_url:
      'https://versewsa.pc.cdn.bitgravity.com/versewsa/live/polimernews.smil/chunklist_b1800000.m3u8',
  },
  {
    name: 'Pop Pataka (480p)',
    img: '',
    category: 'Music',
    video_url: 'https://live.hungama.com/linear/pop-pataka/playlist.m3u8',
  },
  {
    name: 'Pramaya News7 (576p)',
    img: '',
    category: 'News',
    video_url:
      'https://live.mycast.in/encode/ee0c5a36ff5a7083ee044991974ad3ba.sdp/playlist.m3u8',
  },
  {
    name: 'Pratidin Time (360p)',
    img: 'https://i.imgur.com/gUEpVvR.png',
    category: 'News',
    video_url:
      'https://rtmp.smartstream.video/pratidintime/pratidintime/playlist.m3u8',
  },
  {
    name: 'Pravasi (1080p)',
    img: 'https://i.imgur.com/DtXRfBj.png',
    category: 'Undefined',
    video_url:
      'https://5ee50688d7b5d.streamlock.net:444/live/pravasi/playlist.m3u8',
  },
  {
    name: 'Public Movies (576p)',
    img: 'https://i.imgur.com/GpAvaCx.png',
    category: 'Movies',
    video_url: 'http://14.199.164.20:4001/play/a0ll/index.m3u8',
  },
  {
    name: 'Public Music (576p)',
    img: 'https://upload.wikimedia.org/wikipedia/en/3/35/Public_Music_Kannada_Channel_Logo.jpg',
    category: 'Music',
    video_url:
      'http://103.199.161.254/Content/publicmusic/Live/Channel(PublicMusic)/index.m3u8',
  },
  {
    name: 'Public TV (576p)',
    img: 'https://i.imgur.com/tmXFHhk.png',
    category: 'Entertainment',
    video_url: 'http://14.199.164.20:4001/play/a0ld/index.m3u8',
  },
  {
    name: 'Pulari TV (720p)',
    img: 'https://i.imgur.com/v5urG30.png',
    category: 'Undefined',
    video_url: 'https://royalstarindia.co.in/pularitv_hls/pularitv.m3u8',
  },
  {
    name: 'Punjabi Zindabad (360p)',
    img: '',
    category: 'Undefined',
    video_url: 'http://stream.pztv.online/pztv/playlist.m3u8',
  },
  {
    name: 'Puthiya Thalaimurai (1080p)',
    img: 'https://static.wikia.nocookie.net/logopedia/images/f/f3/Puthiya_Thalaimurai.jpeg/revision/latest?cb=20191224103436',
    category: 'News',
    video_url:
      'http://free.fullspeed.tv/iptv-query?streaming-ip=https://www.youtube.com/channel/UCmyKnNRH0wH-r8I-ceP-dsg/live',
  },
  {
    name: 'Puthuyugam TV (576p)',
    img: 'https://i.imgur.com/1q1LQQ9.png',
    category: 'Undefined',
    video_url:
      'http://103.199.160.85/Content/puthuyugam/Live/Channel(Puthuyugam)/index.m3u8',
  },
  {
    name: 'Real News Kerala (1080p)',
    img: 'https://i.imgur.com/EmBpOWM.png',
    category: 'News',
    video_url:
      'https://bk7l298nyx53-hls-live.5centscdn.com/realnews/e7dee419f91aa9e65939d3677fb9c4f5.sdp/playlist.m3u8',
  },
  {
    name: 'Red Bull TV (1080p)',
    img: 'https://i.imgur.com/7NeBmWX.jpg',
    category: 'Sports',
    video_url:
      'https://rbmn-live.akamaized.net/hls/live/590964/BoRB-AT/master.m3u8',
  },
  {
    name: 'Relax TV (576p)',
    img: '',
    category: 'Undefined',
    video_url: 'http://198.144.149.82:8080/NOTV/RELAXTV/index.m3u8?token=GTR',
  },
  {
    name: 'Reporter TV (576p)',
    img: 'https://i.imgur.com/a80vdrp.jpg',
    category: 'News',
    video_url:
      'http://103.199.161.254/Content/reporter/Live/Channel(Reporter)/index.m3u8',
  },
  {
    name: 'Republic Bharat (360p)',
    img: '',
    category: 'Undefined',
    video_url:
      'https://republic.pc.cdn.bitgravity.com/live/bharat_hls/master.m3u8',
  },
  {
    name: 'Republic TV',
    img: 'https://i.imgur.com/PvI2PCX.png',
    category: 'Undefined',
    video_url:
      'https://weblive.republicworld.com/liveorigin/republictv/playlist.m3u8',
  },
  {
    name: 'RT News (1080p)',
    img: 'https://i.imgur.com/tyXIHlj.png',
    category: 'News',
    video_url: 'https://strm.yandex.ru/kal/rt_hd/rt_hd0.m3u8',
  },
  {
    name: 'Sachin Music (576p)',
    img: '',
    category: 'Music',
    video_url:
      'http://singamcloud.in:1935/sachinmusichd/sachinmusichd/playlist.m3u8',
  },
  {
    name: 'Sada TV (1080p)',
    img: '',
    category: 'Undefined',
    video_url: 'http://cdn12.henico.net:8080/live/sadatv/index.m3u8',
  },
  {
    name: 'Safari TV (480p)',
    img: 'https://i.imgur.com/LOepeP3.jpg',
    category: 'Undefined',
    video_url:
      'https://j78dp346yq5r-hls-live.5centscdn.com/safari/live.stream/playlist.m3u8',
  },
  {
    name: 'Sana Plus (720p)',
    img: 'https://i.imgur.com/cA7PpJG.jpg',
    category: 'Music',
    video_url: 'http://media.7starcloud.com:1935/live/sanatv2/playlist.m3u8',
  },
  {
    name: 'Sana TV (576p)',
    img: 'https://i.imgur.com/D03gyp2.png',
    category: 'Entertainment',
    video_url:
      'http://hdserver.7starcloud.com:1935/sanatv/sanatv/playlist.m3u8',
  },
  {
    name: 'Santhora Short Flim (720p)',
    img: 'https://i.imgur.com/kKFfLMd.jpg',
    category: 'Movies',
    video_url:
      'http://rtmp.santhoratv.zecast.net/santhora/santhorashortfilm/playlist.m3u8',
  },
  {
    name: 'Santhora TV (720p)',
    img: 'https://i.imgur.com/LsacUVi.png',
    category: 'Undefined',
    video_url: 'http://santhoratv.zecast.net/santhoratv/santhoratv/index.m3u8',
  },
  {
    name: 'Sardari TV (1080p)',
    img: '',
    category: 'Undefined',
    video_url: 'http://158.69.124.9:1935/sardaritv/sardaritv/playlist.m3u8',
  },
  {
    name: 'Shekinah TV (576p)',
    img: 'https://i.imgur.com/6hTshsG.png',
    category: 'Undefined',
    video_url: 'http://14.199.164.20:4001/play/a0ok/index.m3u8',
  },
  {
    name: 'Shemaroo TV (576p)',
    img: 'https://i.imgur.com/UNNcOef.png',
    category: 'Entertainment',
    video_url: 'http://14.199.164.20:4001/play/a0nh/index.m3u8',
  },
  {
    name: 'Shraddha (360p)',
    img: '',
    category: 'Undefined',
    video_url:
      'http://rtmp.smartstream.video:1935/mhoneshradha/mhoneshradha/playlist.m3u8',
  },
  {
    name: 'Shubhsandesh (720p)',
    img: 'https://i.imgur.com/ibnqDAD.png',
    category: 'Religious',
    video_url:
      'https://6284rn2xr7xv-hls-live.wmncdn.net/shubhsandeshtv1/live123.stream/index.m3u8',
  },
  {
    name: 'Sony Six (1080p)',
    img: 'https://i.imgur.com/mmX4kPb.png',
    category: 'Undefined',
    video_url: 'http://137.59.155.77:8088/hls/05sonysix.m3u8',
  },
  {
    name: 'Sri Sankara (360p)',
    img: '',
    category: 'Religious',
    video_url:
      'https://8noro432dm6g-hls-live.wmncdn.net/Sri/a5518065f47332dad6b509920c827474.sdp/playlist.m3u8',
  },
  {
    name: 'Star Cinema (576p)',
    img: '',
    category: 'Movies',
    video_url:
      'http://c0.cdn.trinity-tv.net/stream/nh9u54a7sfnc2hwzxr2zwykwkqm43bgyyzsm68ybbbnjei8kytwcgs3zm5gnw5c6efa5gr3fadzqe686w8gj2eaehrj89wvujvqza3kez78dtknwbbmnqf79yygmqqg7e9pnc3i3bpywjkiqrwke94yf.m3u8',
  },
  {
    name: 'Star Family (576p)',
    img: '',
    category: 'Family',
    video_url:
      'http://c0.cdn.trinity-tv.net/stream/zfmjgma9zn46fa797ez9fgkw7msh9mj4tppspg23gey6mmx5fqiy7ky3jqx4uhgsfsrd8r76si8ykb2anw9442g4qkq5fzpdvwdqf5te24ixu9zrx3aesm9fzt59q5y2s8qwgbqhvf6d3z5bjy3qb2t4.m3u8',
  },
  {
    name: 'Star Plus HD (720p)#EXTVLCOPT:',
    img: 'https://i.imgur.com/Hgl0JGO.png',
    category: 'Undefined',
    video_url: 'http://208.115.215.42/Utsav_Plus_HD/playlist.m3u8',
  },
  {
    name: 'Steelbird Music (720p)',
    img: 'https://i.imgur.com/5r4gCMh.jpg',
    category: 'Music',
    video_url: 'http://cdn25.live247stream.com/steelbirdmusic/tv/playlist.m3u8',
  },
  {
    name: 'Studio One Plus (720p)',
    img: 'https://i.imgur.com/DBbajAs.jpg',
    category: 'Movies',
    video_url:
      'http://free.fullspeed.tv/iptv-query?streaming-ip=https://www.youtube.com/channel/UCEoaVUxpFlmCxwRBy9yhb1Q/live',
  },
  {
    name: 'Studio One Yuva (720p)',
    img: 'https://i.imgur.com/nACKF3x.jpg',
    category: 'Movies',
    video_url:
      'http://free.fullspeed.tv/iptv-query?streaming-ip=https://www.youtube.com/channel/UCqR2tCs8ufgAjRd6rn4a2wg/live',
  },
  {
    name: 'Swantham (720p)',
    img: 'https://i.imgur.com/oodBB6x.png',
    category: 'Entertainment',
    video_url: 'http://cdn1.logicwebs.in:1935/SWANTHAM/live/playlist.m3u8',
  },
  {
    name: 'Swaraj Express (720p)',
    img: '',
    category: 'Undefined',
    video_url: 'https://live.wmncdn.net/highnews/swaraj.stream/index.m3u8',
  },
  {
    name: 'Tamil Vision TV (1080p)',
    img: 'https://i.imgur.com/jSWRXdg.png',
    category: 'Undefined',
    video_url: 'http://live.tamilvision.tv:8081/TVI/HD/playlist.m3u8',
  },
  {
    name: 'Tehelka TV (480p)',
    img: 'https://upload.wikimedia.org/wikipedia/en/1/15/Sangsad_Television_Logo.jpg',
    category: 'General',
    video_url:
      'https://cdn.appv.jagobd.com:444/c3VydmVyX8RpbEU9Mi8xNy8yMDE0GIDU6RgzQ6NTAgdEoaeFzbF92YWxIZTO0U0ezN1IzMyfvcGVMZEJCTEFWeVN3PTOmdFsaWRtaW51aiPhnPTI/tehelkatv.stream/playlist.m3u8',
  },
  {
    name: 'Thanthi TV (1080p)',
    img: 'https://images-eu.ssl-images-amazon.com/images/I/71QprgRT4rL.png',
    category: 'News',
    video_url:
      'http://free.fullspeed.tv/iptv-query?streaming-ip=https://www.youtube.com/watch?v=wc3Y6vI-poI',
  },
  {
    name: 'Thrill (360p)',
    img: 'https://i.imgur.com/isr5jto.png',
    category: 'Movies',
    video_url: 'http://45.126.83.51/qwr9ew/s/s34/02.m3u8',
  },
  {
    name: 'Times Now (480p)',
    img: 'https://upload.wikimedia.org/wikipedia/en/a/aa/Times_Now_2010.png',
    category: 'News',
    video_url: 'https://timesnow-lh.akamaihd.net/i/TNHD_1@129288/master.m3u8',
  },
  {
    name: 'TRT World (720p)',
    img: 'https://i.ibb.co/phw4pjP/mjTjJ1N.png',
    category: 'News',
    video_url: 'https://tv-trtworld.live.trt.com.tr/master.m3u8',
  },
  {
    name: 'TV9 Kannada (720p)',
    img: 'https://d2jo35ozacw6sq.cloudfront.net/wp-content/themes/tv9kannada/images/Tv9-Kannada-57x57.png',
    category: 'News',
    video_url:
      'https://vidcdn.vidgyor.com/tv9kannada-origin/live/playlist.m3u8',
  },
  {
    name: 'TV9 News (720p)',
    img: 'https://www.lyngsat-logo.com/logo/tv/tt/tv-9-telugu-in.png',
    category: 'News',
    video_url:
      'https://vidcdn.vidgyor.com/tv9telugu-origin/live/tv9telugu-origin/live1/playlist.m3u8',
  },
  {
    name: 'TV BRICS English (1080p)',
    img: 'https://i.imgur.com/vLpm8tN.png',
    category: 'General',
    video_url: 'https://brics.bonus-tv.ru/cdn/brics/english/playlist.m3u8',
  },
  {
    name: 'Twenty Four News (576p)',
    img: 'https://i.imgur.com/eS2fVDh.png',
    category: 'News',
    video_url:
      'http://103.199.160.85/Content/24news/Live/Channel(24news)/index.m3u8',
  },
  {
    name: 'UBL HD (1080p)',
    img: 'https://i.imgur.com/pt7gl1T.png',
    category: 'Undefined',
    video_url: 'https://cdn.logicwebs.in/hls/ublhdkey.m3u8',
  },
  {
    name: 'Utsav Gold (720p)',
    img: 'https://i.imgur.com/FYym7gH.png',
    category: 'Movies',
    video_url: 'http://208.115.215.42/Utsav_Gold_HD/index.m3u8',
  },
  {
    name: 'Vaanvavil (576p)',
    img: 'https://i.imgur.com/etr1k08.png',
    category: 'Music',
    video_url: 'http://14.199.164.20:4001/play/a0nx/index.m3u8',
  },
  {
    name: 'Vathanam TV',
    img: '',
    category: 'Undefined',
    video_url:
      'http://95.216.167.183:5080/LiveApp/streams/443106610169904881506470.m3u8',
  },
  {
    name: 'Velicham (360p)',
    img: 'https://i.imgur.com/YeR3mm9.png',
    category: 'Entertainment',
    video_url:
      'https://rtmp.smartstream.video/velichamtv/velichamtv/playlist.m3u8',
  },
  {
    name: 'Vismaya News (720p)',
    img: 'https://i.imgur.com/TIj6xBg.png',
    category: 'Undefined',
    video_url:
      'http://live.singamcloud.in:1935/vismayanews/vismayanews/playlist.m3u8',
  },
  {
    name: 'Wow Cinema One (576p)',
    img: 'https://i.imgur.com/s690F67.png',
    category: 'Movies',
    video_url: 'http://14.199.164.20:4001/play/a0n3/index.m3u8',
  },
  {
    name: 'Xplore Channel (720p)',
    img: '',
    category: 'Undefined',
    video_url: 'http://cdn18.live247stream.com/ndachannel/tv/playlist.m3u8',
  },
  {
    name: 'Yolo (410p)',
    img: 'https://i.imgur.com/kzudV52.jpg',
    category: 'Entertainment',
    video_url: 'http://cdn.logicwebs.in/hls/yolo.m3u8',
  },
  {
    name: 'Yupp Thirai (270p)',
    img: 'https://i.imgur.com/6E8SbCf.png',
    category: 'Movies',
    video_url: 'http://119.81.82.28/encoded/yuppthirai_800/playlist.m3u8',
  },
  {
    name: 'Zee TV (480p)',
    img: '',
    category: 'Undefined',
    video_url:
      'https://d2q8p4pe5spbak.cloudfront.net/bpk-tv/ZEETV/ZEETV.isml/index.m3u8',
  },
];
export default data;
