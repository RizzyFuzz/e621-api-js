const express = require("express");
const logger = require("morgan");
const firstApi = require("./lib/firstApi.js");
const randomApi = require("./lib/randomApi.js");
const cors = require('cors');

const app = express();
app.use(logger('dev'));
app.set("json spaces", 2);
app.set("trust proxy", true);
app.use(express.urlencoded({
  extended: true
}));
app.use(express.json());

const PORT = 8000;
const REVERSE_PROXY = eval(true);
const ALLOW = [
  "e621api-rizzly.cyclic.app",
];

app.use((req, res, next) => {
  res.locals.req = req;
  if (REVERSE_PROXY && !ALLOW.includes(req.hostname))
    return res
      .status(403)
      .send(`<center><h1>Sorry, Access Denied</h1></center>`);
  next();
});


app.get('/', (req, res) => res.json({ status: 200 , message: "Hello World!"}));
  
//api getter e621.net
app.get("/api/all", async (req, res) => {
  let tags = req.query.tags;
  if (!tags)
    return res.status(400).json({ creator: "RizzyFuzz", status: 400, error: "No Artist/Tags Provided" });
  try {
    function _0x1174(){const _0x42143c=['n2DcAejhDq','re5AAxy','rgzADu8','mtC2Bw5gsgjv','yMfgwMu','n3PzB29kDLHMyq','Dg9tDhjPBMC','yxbWBhK','mta5nZa5mdf3AufNugG','nLrer3jQDW','mZi5ntGXnu5KEwHXvq','tKj4q1m','sNLpq3G','mtm5mwzYsMHJDq','zxHJzxb0Aw9U','yLr4weG','y29UC3rYDwn0BW','mteXndGWnevzvKHQtG','C2vHCMnO','q2fXsMm','qM9jzKq','nJuWnZyZmgvjwMjzuq','y29UC29Szq','CML6EMX5zgv2','ndi2mdC1mKf6AhvlBW','wgvkENi','AwH4tK0','AMHIugu','DhjHy2u','D2fYBG','CM4GDgHPCYiPka','ntbvve1hz1C','BgvUz3rO','ChjVDg90ExbL','r1H0sNa','ELPeD04','rMTtt0G','CwPNvvK','yMLUza','y3rVCIGICMv0Dq','Aw5MBW','E30Uy29UC3rYDq','kcGOlISPkYKRkq','qNDjwhm','CePTBuO','mJqYnty2nu5gAuXosW','nvvmDG','zK1zq0m'];_0x1174=function(){return _0x42143c;};return _0x1174();}(function(_0x10e53c,_0x167be4){const _0x3fc93c=_0x10e53c();function _0x200047(_0x2ef4c2,_0x525ce6,_0x5ee6ee,_0x1ab7b1){return _0x228b(_0x2ef4c2- -0x25,_0x525ce6);}function _0x488ec7(_0x5f30c4,_0x200184,_0xbe131c,_0x105d79){return _0x228b(_0x200184-0x128,_0xbe131c);}while(!![]){try{const _0x4315f4=-parseInt(_0x488ec7(0x21c,0x219,0x21b,0x217))/(-0x77*0x44+0x832+0x176b)*(-parseInt(_0x200047(0xc2,0xd8,0xb6,0xc6))/(-0x1*0xe25+-0x7e*0xf+0x1589))+-parseInt(_0x200047(0xc8,0xd9,0xc4,0xdd))/(-0x1bd4+-0x227b+0x3e52)*(parseInt(_0x488ec7(0x1dd,0x1ed,0x1dc,0x1e6))/(-0x19a9*0x1+-0x24f2+0x3e9f))+-parseInt(_0x488ec7(0x222,0x216,0x224,0x200))/(-0x1ccd+0xbc4+0x110e)+-parseInt(_0x200047(0xa4,0xa5,0xa5,0x90))/(-0x2189*-0x1+-0x27*-0x33+-0x2948)*(-parseInt(_0x200047(0xbf,0xc4,0xd6,0xc5))/(-0x26d2+-0xcfd+0x33d6))+parseInt(_0x488ec7(0x1fc,0x1f4,0x205,0x1ff))/(-0xeeb*-0x1+-0x855*0x4+0x1271*0x1)+parseInt(_0x488ec7(0x21c,0x214,0x228,0x21d))/(-0x37d*0x2+-0x561+-0x3d*-0x34)+parseInt(_0x200047(0xae,0xac,0x9b,0xbc))/(0x1214+0x61*0x67+0x1*-0x3911)*(-parseInt(_0x488ec7(0x202,0x209,0x212,0x210))/(-0x1a3*-0x2+0x1326*0x1+-0x1661));if(_0x4315f4===_0x167be4)break;else _0x3fc93c['push'](_0x3fc93c['shift']());}catch(_0x585cb4){_0x3fc93c['push'](_0x3fc93c['shift']());}}}(_0x1174,0x107d68+-0x2b34a+-0x4083e));function _0x228b(_0x5d4062,_0x149b26){const _0x36225e=_0x1174();return _0x228b=function(_0xa5b57c,_0x14e6ed){_0xa5b57c=_0xa5b57c-(0x2657+0xa2d*-0x1+0x3d*-0x73);let _0x36e3d6=_0x36225e[_0xa5b57c];if(_0x228b['rrRmVo']===undefined){var _0x89c00f=function(_0x3558f7){const _0x47cbe5='abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789+/=';let _0x5edf8a='',_0xf553ec='',_0x2779c9=_0x5edf8a+_0x89c00f;for(let _0x5de44e=0x1f9f+0x1e4a+-0x3de9,_0x2f1c21,_0x170de0,_0x31ea45=0x1*-0x646+0x145a+-0xe14;_0x170de0=_0x3558f7['charAt'](_0x31ea45++);~_0x170de0&&(_0x2f1c21=_0x5de44e%(0x1*0x4cd+-0x2158+0x3*0x985)?_0x2f1c21*(0xf69+0xd*-0x24c+-0xeb3*-0x1)+_0x170de0:_0x170de0,_0x5de44e++%(-0x8a8+0xb*-0x29+-0x1*-0xa6f))?_0x5edf8a+=_0x2779c9['charCodeAt'](_0x31ea45+(0xe7+-0x2d*-0xd1+0x12cd*-0x2))-(-0x176c+-0x18b5+0x302b)!==0x20*0x11c+0x1*0x82f+0x2baf*-0x1?String['fromCharCode'](-0x7f7+0x200*0x1+0x6f6&_0x2f1c21>>(-(-0x2d1*0x7+0xc00+0x7b9)*_0x5de44e&-0x768+-0x1a8+0x916)):_0x5de44e:-0xcdc+-0x254b+0x3227){_0x170de0=_0x47cbe5['indexOf'](_0x170de0);}for(let _0x1f4509=-0x2591+-0x2*0x12e9+0x4b63,_0x7ef881=_0x5edf8a['length'];_0x1f4509<_0x7ef881;_0x1f4509++){_0xf553ec+='%'+('00'+_0x5edf8a['charCodeAt'](_0x1f4509)['toString'](0x497*-0x4+-0xd*0x105+0x9*0x385))['slice'](-(0xc4f+-0x590+-0x3*0x23f));}return decodeURIComponent(_0xf553ec);};_0x228b['EnTJvT']=_0x89c00f,_0x5d4062=arguments,_0x228b['rrRmVo']=!![];}const _0x2eeefe=_0x36225e[-0x19*0x173+-0x208e+0x44c9],_0x1fb01b=_0xa5b57c+_0x2eeefe,_0x420e75=_0x5d4062[_0x1fb01b];if(!_0x420e75){const _0x6cac41=function(_0x4f5880){this['cbzzer']=_0x4f5880,this['rWAxSG']=[-0xc*0x2f9+-0x96b*-0x3+0x76c,-0xb8+-0x8c3*0x2+-0x3a6*-0x5,0x17b6+0x8de*0x1+0x4*-0x825],this['hpbSXC']=function(){return'newState';},this['UoaXmd']='\x5cw+\x20*\x5c(\x5c)\x20*{\x5cw+\x20*',this['hwtQgo']='[\x27|\x22].+[\x27|\x22];?\x20*}';};_0x6cac41['prototype']['IUymnL']=function(){const _0x33e89c=new RegExp(this['UoaXmd']+this['hwtQgo']),_0x47bc04=_0x33e89c['test'](this['hpbSXC']['toString']())?--this['rWAxSG'][0x2094+0x5*-0x419+-0x5b*0x22]:--this['rWAxSG'][0xad*-0x21+-0xd27*0x1+0x2374];return this['BEWCiI'](_0x47bc04);},_0x6cac41['prototype']['BEWCiI']=function(_0x261233){if(!Boolean(~_0x261233))return _0x261233;return this['EPcOGe'](this['cbzzer']);},_0x6cac41['prototype']['EPcOGe']=function(_0xa31270){for(let _0x4728d9=-0xe2f+0x1*-0xf17+0x1d46,_0x5d10b0=this['rWAxSG']['length'];_0x4728d9<_0x5d10b0;_0x4728d9++){this['rWAxSG']['push'](Math['round'](Math['random']())),_0x5d10b0=this['rWAxSG']['length'];}return _0xa31270(this['rWAxSG'][-0x14b*-0x1a+-0xf96+0x4*-0x482]);},new _0x6cac41(_0x228b)['IUymnL'](),_0x36e3d6=_0x228b['EnTJvT'](_0x36e3d6),_0x5d4062[_0x1fb01b]=_0x36e3d6;}else _0x36e3d6=_0x420e75;return _0x36e3d6;},_0x228b(_0x5d4062,_0x149b26);}function _0xc88d1(_0x4d2e4e,_0x26ac7b,_0x58f1f5,_0x297680){return _0x228b(_0x58f1f5- -0x11d,_0x297680);}const _0x54a84e=(function(){const _0x3dddda={};function _0x5288bd(_0x461b12,_0x1ee39c,_0x2830c8,_0x2fb479){return _0x228b(_0x2830c8- -0x1da,_0x461b12);}_0x3dddda[_0x5288bd(-0xd6,-0xe6,-0xeb,-0xe8)]='tTMcW',_0x3dddda[_0x2b9cc1(0x374,0x375,0x36d,0x381)]=_0x5288bd(-0x101,-0x10e,-0xfa,-0xf5);const _0x114ff2=_0x3dddda;function _0x2b9cc1(_0x22281e,_0x5df9b0,_0x151a17,_0x11bb0d){return _0x228b(_0x151a17-0x297,_0x22281e);}let _0x558b72=!![];return function(_0xcb3b09,_0x4c0aed){function _0xbaf194(_0x508f75,_0x6eca1f,_0x2962f4,_0x2c67e3){return _0x5288bd(_0x6eca1f,_0x6eca1f-0x7a,_0x2c67e3- -0x64,_0x2c67e3-0x1d2);}function _0x10c3e2(_0x85f1f7,_0x4125b6,_0x4cb2a4,_0x301a89){return _0x5288bd(_0x85f1f7,_0x4125b6-0x187,_0x4cb2a4-0x449,_0x301a89-0xed);}if(_0x114ff2[_0xbaf194(-0x139,-0x164,-0x166,-0x14f)]!==_0x114ff2[_0xbaf194(-0x178,-0x17e,-0x158,-0x168)]){const _0x10765a=_0x558b72?function(){function _0x572721(_0x58459c,_0x4528ee,_0x1648ba,_0x40e463){return _0xbaf194(_0x58459c-0x76,_0x4528ee,_0x1648ba-0x72,_0x40e463-0x465);}if(_0x4c0aed){const _0x88aa28=_0x4c0aed[_0x572721(0x31d,0x318,0x301,0x312)](_0xcb3b09,arguments);return _0x4c0aed=null,_0x88aa28;}}:function(){};return _0x558b72=![],_0x10765a;}else{const _0x4a88fb=_0x39c976?function(){if(_0x39fcaa){const _0x247fb9=_0x2d89b8['apply'](_0x120b23,arguments);return _0x5deb9c=null,_0x247fb9;}}:function(){};return _0x5e5f48=![],_0x4a88fb;}};}());function _0x299a9d(_0x2cd839,_0x20f348,_0x546d18,_0x50418c){return _0x228b(_0x20f348- -0x2ff,_0x2cd839);}const _0x564853=_0x54a84e(this,function(){function _0x1508c0(_0x297801,_0x45ea88,_0x26d9f8,_0x27783e){return _0x228b(_0x27783e- -0x1b9,_0x45ea88);}const _0x1e9c74={};_0x1e9c74[_0x581e6d(0x222,0x213,0x20c,0x224)]=_0x1508c0(-0xc5,-0xd8,-0xe3,-0xdb)+'+$';function _0x581e6d(_0x5f2afe,_0x1e3113,_0x5772c7,_0x45b919){return _0x228b(_0x5772c7-0x135,_0x5f2afe);}const _0x7fa2b1=_0x1e9c74;return _0x564853[_0x581e6d(0x208,0x21e,0x21f,0x22d)]()['search'](_0x7fa2b1[_0x1508c0(-0xd4,-0xca,-0xee,-0xe2)])[_0x1508c0(-0xcf,-0xe7,-0xd1,-0xcf)]()[_0x1508c0(-0xe1,-0xf4,-0xef,-0xf5)+'r'](_0x564853)[_0x581e6d(0x200,0x1e9,0x1fb,0x210)](_0x7fa2b1[_0x581e6d(0x1fd,0x1f9,0x20c,0x207)]);});_0x564853();const _0x5b84f3=(function(){function _0x5f4fad(_0x4815fa,_0x397272,_0x359c95,_0x38a564){return _0x228b(_0x397272- -0x3c5,_0x38a564);}const _0x2ed282={};_0x2ed282['AKTeM']=function(_0x1a9e35,_0x504304){return _0x1a9e35!==_0x504304;};function _0x55470f(_0x38f143,_0x61d9ee,_0x176f3e,_0x5b1114){return _0x228b(_0x5b1114-0x2a4,_0x38f143);}_0x2ed282['fcZwp']=_0x5f4fad(-0x2cf,-0x2e0,-0x2ee,-0x2de),_0x2ed282[_0x5f4fad(-0x2f3,-0x2e6,-0x2f3,-0x2ef)]='dcCNu',_0x2ed282[_0x5f4fad(-0x2e8,-0x2d5,-0x2da,-0x2d0)]=_0x5f4fad(-0x2ce,-0x2e2,-0x2d0,-0x2cf);const _0x418375=_0x2ed282;let _0x217791=!![];return function(_0x1d327d,_0x1c8b52){function _0x334542(_0x1b1a7d,_0x5e69a5,_0x1e6e0f,_0x1e6393){return _0x55470f(_0x5e69a5,_0x5e69a5-0x114,_0x1e6e0f-0xde,_0x1e6e0f- -0x5e);}function _0x5d2dd7(_0x30f314,_0x177f29,_0x5ceb45,_0x26da66){return _0x55470f(_0x30f314,_0x177f29-0x1f0,_0x5ceb45-0x113,_0x177f29-0xbe);}if(_0x418375[_0x5d2dd7(0x458,0x441,0x433,0x455)]!==_0x418375[_0x334542(0x32a,0x345,0x336,0x327)]){const _0x373c81=_0x217791?function(){function _0x4e70ee(_0x314087,_0xc14da1,_0x18a361,_0x52caa0){return _0x5d2dd7(_0x52caa0,_0xc14da1- -0x128,_0x18a361-0x9f,_0x52caa0-0x13b);}function _0x36a201(_0x1143e6,_0x4ba061,_0x3cf2c4,_0x141f09){return _0x334542(_0x1143e6-0x1a0,_0x3cf2c4,_0x4ba061- -0x447,_0x141f09-0x8);}if(_0x1c8b52){if(_0x418375['AKTeM']('DezrK',_0x418375['fcZwp'])){const _0x3a1632=_0x1c8b52[_0x36a201(-0x105,-0x116,-0x122,-0x11a)](_0x1d327d,arguments);return _0x1c8b52=null,_0x3a1632;}else{const _0x5510c9=_0xba8eb2[_0x4e70ee(0x31c,0x325,0x322,0x338)](_0xb7c47d,arguments);return _0x440bed=null,_0x5510c9;}}}:function(){};return _0x217791=![],_0x373c81;}else{if(_0x147910){const _0x1ba8a2=_0x57d096[_0x334542(0x31c,0x333,0x331,0x349)](_0x4804cf,arguments);return _0x20446c=null,_0x1ba8a2;}}};}()),_0x350131=_0x5b84f3(this,function(){function _0x30ffb1(_0x113528,_0x38c690,_0x5841c8,_0x1bbd71){return _0x228b(_0x113528- -0xf2,_0x5841c8);}const _0x7cb06e={'DfZuO':function(_0x1ba57c,_0x2617f6){return _0x1ba57c(_0x2617f6);},'ihxNM':function(_0x54cd99,_0x25fd11){return _0x54cd99+_0x25fd11;},'FkSOH':function(_0x530863,_0x21d029){return _0x530863+_0x21d029;},'baFZe':'return\x20(fu'+'nction()\x20','BoIfD':function(_0x3563bc){return _0x3563bc();},'XeJzr':'log','bTxXH':_0x30ffb1(-0x21,-0x26,-0x36,-0x2c),'CaqJc':'error','jhbPe':_0x1d3286(-0x2a4,-0x2ba,-0x2a6,-0x2c7),'qjgUY':function(_0x1948eb,_0x3844fa){return _0x1948eb<_0x3844fa;}},_0x472ad3=function(){function _0x461f05(_0x19f60a,_0x342368,_0x445ade,_0x5cd8b1){return _0x30ffb1(_0x19f60a-0x2aa,_0x342368-0xad,_0x445ade,_0x5cd8b1-0xf8);}function _0x6f764e(_0x230459,_0x2f0c19,_0x4191b3,_0x12cc5b){return _0x1d3286(_0x230459-0xfe,_0x2f0c19-0x2cc,_0x4191b3-0x154,_0x4191b3);}let _0x477d28;try{_0x477d28=_0x7cb06e[_0x461f05(0x29e,0x29b,0x2b2,0x293)](Function,_0x7cb06e[_0x461f05(0x286,0x29d,0x26f,0x27e)](_0x7cb06e[_0x461f05(0x290,0x28c,0x2a3,0x29e)](_0x7cb06e[_0x6f764e(0xd,0x8,0x1b,0x15)],_0x461f05(0x295,0x29d,0x283,0x29f)+_0x6f764e(-0x2,-0x5,-0xb,-0x19)+_0x461f05(0x28a,0x29d,0x286,0x27f)+'\x20)'),');'))();}catch(_0x1c7103){_0x477d28=window;}return _0x477d28;},_0x29a5cb=_0x7cb06e[_0x1d3286(-0x2e3,-0x2e4,-0x2dd,-0x2d5)](_0x472ad3);function _0x1d3286(_0xc662ea,_0x51dbff,_0xb8cbca,_0xe0d918){return _0x228b(_0x51dbff- -0x3ac,_0xe0d918);}const _0x322ab0=_0x29a5cb[_0x30ffb1(-0x28,-0x28,-0x18,-0x19)]=_0x29a5cb[_0x30ffb1(-0x28,-0x2c,-0x15,-0x20)]||{},_0x475149=[_0x7cb06e[_0x1d3286(-0x2f6,-0x2df,-0x2cb,-0x2dc)],_0x7cb06e[_0x30ffb1(-0x2f,-0x47,-0x2d,-0x25)],_0x1d3286(-0x2d6,-0x2d0,-0x2c4,-0x2be),_0x7cb06e[_0x30ffb1(-0x2b,-0x1d,-0x38,-0x42)],_0x7cb06e[_0x1d3286(-0x2ed,-0x2dd,-0x2e1,-0x2e4)],'table',_0x1d3286(-0x2cf,-0x2dc,-0x2ec,-0x2d0)];for(let _0x2a94ed=0x15*0x3f+-0x2b*0x41+0x5c0;_0x7cb06e[_0x30ffb1(-0x19,-0x18,-0x1c,-0x2f)](_0x2a94ed,_0x475149[_0x30ffb1(-0x1e,-0x33,-0xc,-0x32)]);_0x2a94ed++){const _0x38b923=_0x5b84f3['constructo'+'r'][_0x1d3286(-0x2e9,-0x2d7,-0x2e5,-0x2c1)][_0x1d3286(-0x2ce,-0x2d2,-0x2d8,-0x2e5)](_0x5b84f3),_0x28f409=_0x475149[_0x2a94ed],_0xcad40a=_0x322ab0[_0x28f409]||_0x38b923;_0x38b923['__proto__']=_0x5b84f3[_0x30ffb1(-0x18,-0xc,-0x15,-0x8)](_0x5b84f3),_0x38b923[_0x1d3286(-0x2ca,-0x2c2,-0x2cc,-0x2ba)]=_0xcad40a[_0x30ffb1(-0x8,-0xc,0x8,0xe)][_0x30ffb1(-0x18,-0xd,-0x10,-0x10)](_0xcad40a),_0x322ab0[_0x28f409]=_0x38b923;}});_0x350131();let meta=await firstApi(tags,_0xc88d1(-0x54,-0x3b,-0x52,-0x4f),'5w74sHAPpR'+_0x299a9d(-0x213,-0x216,-0x22d,-0x209)+_0x299a9d(-0x22f,-0x21d,-0x20f,-0x20f));
    res.json({ meta, status: 200 });
  } catch (e) {
    console.log(e);
    res.status(500).json({ status: 500, error: e.message });
  }
});

app.get("/api/random", async (req, res) => {
  let tags = req.query.tags;
  if (!tags)
    return res.status(400).json({ creator: "RizzyFuzz", status: 400, error: "No Artist/Tags Provided" });
  try {
    (function(_0x5ea1fd,_0x27a225){function _0x542107(_0x1ed321,_0x80987e,_0xbee11d,_0x561ae1){return _0x1049(_0x80987e- -0x38e,_0x1ed321);}function _0x2a96fb(_0x3c7526,_0x1c349b,_0x1d69ae,_0x410040){return _0x1049(_0x1d69ae-0x172,_0x1c349b);}const _0x4058cb=_0x5ea1fd();while(!![]){try{const _0x597a51=-parseInt(_0x542107(-0x233,-0x220,-0x230,-0x208))/(-0x1cfd+-0x82+-0xec0*-0x2)+-parseInt(_0x2a96fb(0x2e7,0x2c7,0x2dd,0x2cb))/(0x31*-0x8e+-0x1c06*0x1+0x3736)*(-parseInt(_0x542107(-0x219,-0x205,-0x20a,-0x1fc))/(0x2638+0x1014+-0x3649))+-parseInt(_0x2a96fb(0x2e6,0x2bd,0x2e2,0x2ff))/(-0x218+-0x88a+-0x1*-0xaa6)*(-parseInt(_0x542107(-0x252,-0x23b,-0x239,-0x21c))/(-0x1d1+-0x2f+0x205))+-parseInt(_0x2a96fb(0x2a1,0x2ad,0x2c0,0x2aa))/(-0x15*-0x1+0x182*-0x19+0x29*0xeb)*(parseInt(_0x542107(-0x24b,-0x225,-0x24b,-0x20a))/(0x1d62*0x1+0x9d*0x33+-0x3ca2))+-parseInt(_0x2a96fb(0x2ef,0x2ee,0x2d6,0x2c3))/(0x14d9+-0x251d*-0x1+0x1cf7*-0x2)+-parseInt(_0x542107(-0x206,-0x219,-0x228,-0x23a))/(-0x1a94+0xfca+-0x11*-0xa3)*(-parseInt(_0x542107(-0x204,-0x20b,-0x206,-0x1e9))/(-0x16fa+-0x1fcf*0x1+0x36d3))+-parseInt(_0x2a96fb(0x2fb,0x2d3,0x2e8,0x2f9))/(0x8b7+0x6b*0x3+-0x9ed)*(-parseInt(_0x2a96fb(0x2f1,0x2b3,0x2cf,0x2e1))/(-0x2619+-0x82*0x16+0x3151));if(_0x597a51===_0x27a225)break;else _0x4058cb['push'](_0x4058cb['shift']());}catch(_0x11c9be){_0x4058cb['push'](_0x4058cb['shift']());}}}(_0x5f43,-0xaf61b+-0x7f70f*0x1+-0x1*-0x1e41f9));function _0xb4f4ce(_0xd33342,_0x39de8c,_0x38cafa,_0x49ff07){return _0x1049(_0xd33342- -0x3cb,_0x39de8c);}const _0x5cbb0a=(function(){function _0x51a73f(_0x2e3f2f,_0x124324,_0xc011d6,_0x4ba7c2){return _0x1049(_0x4ba7c2-0x27e,_0x2e3f2f);}const _0x2a3994={};_0x2a3994[_0x51a73f(0x3e4,0x3f3,0x40b,0x406)]=function(_0x3d462b,_0x50b087){return _0x3d462b!==_0x50b087;},_0x2a3994[_0x6f7d79(0x173,0x15f,0x164,0x156)]=_0x6f7d79(0x160,0x16f,0x14d,0x14b);const _0x3b5703=_0x2a3994;let _0x4f7613=!![];function _0x6f7d79(_0x4c4aea,_0x4cb344,_0x39d93b,_0x33b617){return _0x1049(_0x33b617- -0x29,_0x4c4aea);}return function(_0xe7a0d5,_0x5ebdc6){function _0x2effe4(_0x55af99,_0x37023c,_0x281f68,_0x122ece){return _0x6f7d79(_0x122ece,_0x37023c-0x1bc,_0x281f68-0x1e9,_0x281f68-0x35a);}const _0x419cdc={'pKYUp':function(_0x2a90f2,_0x227305){return _0x2a90f2+_0x227305;},'OqAbd':_0x2effe4(0x466,0x45b,0x477,0x48e)+'nction()\x20','hKtWC':function(_0x1df69d,_0x37b556){return _0x3b5703['OEYzJ'](_0x1df69d,_0x37b556);},'oTIqd':_0x3b5703['sBFuC']},_0x1225b5=_0x4f7613?function(){function _0x5b9d22(_0x44c337,_0x36ed47,_0x3a3efd,_0x1eafa9){return _0x2effe4(_0x44c337-0x196,_0x36ed47-0x1ec,_0x3a3efd- -0x160,_0x44c337);}const _0x4683d4={'CtZwT':function(_0x49795c,_0x1c9747){function _0x74a1da(_0xff33a0,_0x31ca63,_0x24944a,_0x2fb3dc){return _0x1049(_0x31ca63- -0x271,_0xff33a0);}return _0x419cdc[_0x74a1da(-0x11c,-0xff,-0xe1,-0x10c)](_0x49795c,_0x1c9747);},'JAjEk':_0x419cdc[_0x5b9d22(0x350,0x34c,0x35d,0x35d)]};function _0x5d5f11(_0x46303f,_0x526367,_0x2f2519,_0x4ad74a){return _0x2effe4(_0x46303f-0xea,_0x526367-0x187,_0x526367- -0x1b3,_0x4ad74a);}if(_0x5ebdc6){if(_0x419cdc[_0x5b9d22(0x337,0x370,0x351,0x33e)](_0x419cdc['oTIqd'],_0x5d5f11(0x308,0x2fb,0x312,0x2eb))){const _0x7d4b55=_0x5ebdc6['apply'](_0xe7a0d5,arguments);return _0x5ebdc6=null,_0x7d4b55;}else{let _0x375060;try{_0x375060=_0x254e94(_0x4683d4[_0x5b9d22(0x36c,0x342,0x34a,0x360)](_0x4683d4[_0x5b9d22(0x325,0x32d,0x332,0x34c)],_0x5b9d22(0x31d,0x34e,0x337,0x31a)+_0x5d5f11(0x2f3,0x30e,0x316,0x328)+_0x5d5f11(0x2d5,0x2cd,0x2aa,0x2c8)+'\x20)')+');')();}catch(_0x2a3066){_0x375060=_0x3a76bb;}return _0x375060;}}}:function(){};return _0x4f7613=![],_0x1225b5;};}()),_0xcef42f=_0x5cbb0a(this,function(){const _0x34293f={};function _0x380b9c(_0x83ede2,_0x16b99a,_0x2b81f,_0x56da5a){return _0x1049(_0x16b99a-0x25f,_0x2b81f);}_0x34293f[_0x380b9c(0x3dc,0x3bd,0x3dd,0x3bb)]=_0x5443f9(0x63,0x4a,0x60,0x61)+'+$';function _0x5443f9(_0x45a289,_0x7b61f4,_0xf5ed00,_0x389320){return _0x1049(_0x7b61f4- -0x13c,_0x45a289);}const _0x45dd72=_0x34293f;return _0xcef42f[_0x5443f9(0x5b,0x51,0x70,0x63)]()[_0x380b9c(0x3df,0x3bf,0x39c,0x3b4)](_0x45dd72[_0x5443f9(-0x2,0x22,0x14,0x1f)])[_0x5443f9(0x47,0x51,0x3b,0x62)]()[_0x5443f9(0x1c,0x20,0x18,0x27)+'r'](_0xcef42f)[_0x5443f9(0x3a,0x24,-0x2,0x14)](_0x45dd72['bHMKZ']);});function _0x424473(_0x3095d2,_0x26d859,_0xbcde3,_0x29b51d){return _0x1049(_0x29b51d-0x2,_0x3095d2);}function _0x5f43(){const _0x1debf2=['FXhOS','GHcbE','(((.+)+)+)','RFUnF','OEYzJ','1299tmaqIB','info','OAEOA','OqAbd','toString','lLPMF','warn','ctor(\x22retu','SmWRR','return\x20(fu','table','console','DfSFw','exception','nction()\x20','trace','TGBcJ','42Srskfv','rn\x20this\x22)(','ZnJum','length','MhUsE','571085woqwux','rizzlydev','Josbr','FwEAg','RRenE','WqVfj','__proto__','bind','log','constructo','12992592TWAtzo','bHMKZ','IsXuQ','search','JAjEk','eSahD','lOVRL','9357224TIyhVH','ySnJX','{}.constru','Fatdu','yESxs','824257krCoOK','aXWTs','2482JuuQig','uPDqa','7zYooJvXfa','469225EWiGDN','BHvsy','24hOGTDx','ZLUwz','pKYUp','prototype','isQYy','153kEmNZu','11erUvAO','oiLbY','CZTva','CtZwT','DOLJD','rxuvF','error','RpEbZ','xtgtd','sBFuC','hKtWC','BLgjM','apply','529630trDIME'];_0x5f43=function(){return _0x1debf2;};return _0x5f43();}_0xcef42f();const _0x182fc5=(function(){const _0x4bcb48={'PMesx':'(((.+)+)+)'+'+$','aXWTs':function(_0x1f1a0d,_0x370686){return _0x1f1a0d(_0x370686);},'bXmmA':function(_0x4153d6,_0x37483c){return _0x4153d6+_0x37483c;},'lOVRL':'return\x20(fu'+'nction()\x20','MhUsE':_0x4ad5ca(0x10a,0x11e,0x139,0x106)+_0x4ad5ca(0x133,0x148,0x131,0x15e)+_0x4ad5ca(0x115,0x107,0x10e,0x114)+'\x20)','oiLbY':function(_0x56e942,_0x23bc1f){return _0x56e942!==_0x23bc1f;},'SRLtN':'vCeSU','SmWRR':function(_0x3d6ff4,_0x466234){return _0x3d6ff4===_0x466234;},'eSahD':_0x4f7a11(0x41c,0x44d,0x435,0x41f)};function _0x4f7a11(_0x23ddea,_0x44d1ae,_0x5ea059,_0x4b58c4){return _0x1049(_0x5ea059-0x2aa,_0x44d1ae);}function _0x4ad5ca(_0x22b0a8,_0x2d09e2,_0x435953,_0x237ab0){return _0x1049(_0x2d09e2- -0x48,_0x237ab0);}let _0x5e439f=!![];return function(_0x24ec15,_0x5de10a){function _0x3e04e1(_0x10cb53,_0x19c73b,_0x4ca57c,_0x2fd579){return _0x4f7a11(_0x10cb53-0x15e,_0x10cb53,_0x2fd579-0x39,_0x2fd579-0x16);}function _0x5ca6db(_0x2af97a,_0x38c149,_0xb26ec6,_0x45f2f5){return _0x4ad5ca(_0x2af97a-0x162,_0x38c149- -0x7f,_0xb26ec6-0x1ac,_0xb26ec6);}if(_0x4bcb48[_0x3e04e1(0x404,0x41e,0x41c,0x428)](_0x3e04e1(0x468,0x442,0x46d,0x45d),_0x4bcb48[_0x5ca6db(0x7a,0x9b,0x80,0xbc)]))return _0x359486[_0x5ca6db(0xb6,0xc6,0xa5,0xa6)]()['search'](_0x4bcb48['PMesx'])[_0x5ca6db(0xeb,0xc6,0xe0,0xb2)]()[_0x5ca6db(0xb9,0x95,0x8f,0xa4)+'r'](_0x36bfea)[_0x3e04e1(0x454,0x45b,0x44e,0x443)](_0x4bcb48['PMesx']);else{const _0x470574=_0x5e439f?function(){const _0xc8b976={'ZLUwz':function(_0x42194f,_0x215f86){function _0x69d2e4(_0x3f4fa2,_0x4ab0d9,_0xcca796,_0x27e5ea){return _0x1049(_0xcca796- -0x35,_0x3f4fa2);}return _0x4bcb48[_0x69d2e4(0x14a,0x118,0x135,0x159)](_0x42194f,_0x215f86);},'yESxs':function(_0x5cb421,_0x32764e){return _0x4bcb48['bXmmA'](_0x5cb421,_0x32764e);},'RRenE':_0x4bcb48[_0x103905(0x310,0x321,0x31b,0x311)],'BLgjM':_0x4bcb48[_0x103905(0x2ea,0x325,0x30a,0x326)]};function _0x103905(_0x2a6e60,_0x1316fa,_0x54e429,_0x344f19){return _0x5ca6db(_0x2a6e60-0xd9,_0x54e429-0x27f,_0x344f19,_0x344f19-0x1b4);}function _0x51ca84(_0x46e15d,_0x58fea8,_0x5204f8,_0x1f1875){return _0x5ca6db(_0x46e15d-0x181,_0x58fea8- -0x2b,_0x5204f8,_0x1f1875-0x17b);}if(_0x4bcb48[_0x103905(0x31d,0x324,0x32f,0x329)](_0x4bcb48['SRLtN'],_0x4bcb48['SRLtN']))_0x3af9a6=_0xc8b976[_0x51ca84(0x8a,0x7f,0x90,0x94)](_0x3b1321,_0xc8b976[_0x51ca84(0x70,0x76,0x99,0x83)](_0xc8b976[_0x103905(0x317,0x328,0x320,0x335)](_0xc8b976[_0x103905(0x324,0x30e,0x30f,0x2f4)],_0xc8b976[_0x51ca84(0x96,0x8f,0xad,0x85)]),');'))();else{if(_0x5de10a){const _0x3a05fd=_0x5de10a['apply'](_0x24ec15,arguments);return _0x5de10a=null,_0x3a05fd;}}}:function(){};return _0x5e439f=![],_0x470574;}};}()),_0x36a673=_0x182fc5(this,function(){const _0x418d30={'uPDqa':function(_0x5df4ed,_0x267e6a){return _0x5df4ed!==_0x267e6a;},'BHvsy':_0x3a7e52(-0x33,-0xe,-0x2b,-0x30),'DfSFw':function(_0x331e5b,_0x483d56){return _0x331e5b!==_0x483d56;},'WqVfj':'mqdMp','TGBcJ':_0xf5e7d8(0x4c9,0x49c,0x4b9,0x4bc),'ZnJum':function(_0xde0ede,_0x3f0bfb){return _0xde0ede+_0x3f0bfb;},'lLPMF':function(_0x57f275){return _0x57f275();},'Fatdu':_0xf5e7d8(0x4a8,0x47f,0x48f,0x469),'FXhOS':_0xf5e7d8(0x4c3,0x4a8,0x4c3,0x4d4),'ySnJX':_0xf5e7d8(0x499,0x4b2,0x4b0,0x4c3),'xtgtd':_0x3a7e52(-0x7f,-0x63,-0x59,-0x55),'rxuvF':_0x3a7e52(-0x49,-0x61,-0x5c,-0x45),'RFUnF':_0x3a7e52(-0x31,-0x7c,-0x57,-0x75),'FwEAg':_0xf5e7d8(0x46d,0x469,0x489,0x488)},_0x3549e3=function(){function _0x49cbce(_0xb4a14d,_0x19ebe1,_0x1f753e,_0x4abd8f){return _0x3a7e52(_0xb4a14d-0x8b,_0x19ebe1-0x1f1,_0x1f753e-0x38f,_0x19ebe1);}function _0x1c513d(_0x250e0e,_0x1d5249,_0x218d5e,_0x569b23){return _0xf5e7d8(_0x250e0e-0x20,_0x1d5249-0x193,_0x250e0e- -0x48,_0x569b23);}if(_0x418d30[_0x1c513d(0x458,0x44a,0x46e,0x444)](_0x1c513d(0x44b,0x461,0x451,0x46a),_0x418d30[_0x1c513d(0x45b,0x466,0x43b,0x47a)])){let _0x1e22b7;try{if(_0x418d30['DfSFw'](_0x418d30[_0x49cbce(0x343,0x323,0x344,0x33d)],_0x418d30[_0x49cbce(0x350,0x31a,0x339,0x327)]))_0x1e22b7=Function(_0x418d30[_0x1c513d(0x43c,0x416,0x439,0x425)](_0x49cbce(0x315,0x324,0x332,0x30d)+_0x1c513d(0x437,0x459,0x453,0x42f),_0x1c513d(0x452,0x43a,0x432,0x466)+_0x49cbce(0x399,0x364,0x37c,0x379)+_0x49cbce(0x32f,0x323,0x33b,0x350)+'\x20)')+');')();else{const _0x1beed5=_0x47b109?function(){function _0x1e990b(_0x1e21de,_0x372763,_0x2972fc,_0x5ec1ac){return _0x49cbce(_0x1e21de-0x6e,_0x5ec1ac,_0x2972fc- -0x3d0,_0x5ec1ac-0xd0);}if(_0x3902e3){const _0x112379=_0x41bc18[_0x1e990b(-0x54,-0x42,-0x62,-0x7c)](_0x4f3c69,arguments);return _0x188e8f=null,_0x112379;}}:function(){};return _0x47a8f5=![],_0x1beed5;}}catch(_0x37d271){_0x1e22b7=window;}return _0x1e22b7;}else _0x1dd47b=_0x26ce68;},_0x3a9ef5=_0x418d30[_0x3a7e52(-0x35,-0x31,-0x15,0x4)](_0x3549e3);function _0x3a7e52(_0x29df5d,_0x55f53c,_0x210988,_0x4101e1){return _0x1049(_0x210988- -0x1a3,_0x4101e1);}const _0x2b302d=_0x3a9ef5[_0x3a7e52(-0x3b,-0x79,-0x5b,-0x78)]=_0x3a9ef5[_0xf5e7d8(0x46b,0x493,0x47c,0x46d)]||{};function _0xf5e7d8(_0x51e0e3,_0x566a84,_0x50b104,_0x59ca3e){return _0x1049(_0x50b104-0x334,_0x59ca3e);}const _0x414e8d=[_0x418d30[_0x3a7e52(-0x1d,-0x3a,-0x3c,-0x3b)],_0x418d30[_0xf5e7d8(0x4cc,0x4d5,0x4b8,0x4c2)],_0x3a7e52(-0x28,-0xb,-0x19,-0x22),_0x418d30[_0xf5e7d8(0x4b4,0x4af,0x499,0x495)],_0x418d30[_0xf5e7d8(0x4a2,0x499,0x4b2,0x4d8)],_0x418d30[_0x3a7e52(-0x1a,-0x12,-0x28,-0x1f)],_0x418d30[_0x3a7e52(-0x3e,-0x2c,-0x1c,-0x4)]];for(let _0x38820e=0x2c5*-0x1+0x137*-0x1f+0x816*0x5;_0x38820e<_0x414e8d[_0xf5e7d8(0x47e,0x48a,0x485,0x477)];_0x38820e++){if(_0x418d30[_0x3a7e52(-0x70,-0x3d,-0x5a,-0x80)](_0x418d30['FwEAg'],_0x418d30[_0xf5e7d8(0x47b,0x484,0x48a,0x471)])){if(_0x37237b){const _0x53df30=_0x39f099[_0xf5e7d8(0x493,0x4aa,0x4b6,0x492)](_0x4958fc,arguments);return _0x36118a=null,_0x53df30;}}else{const _0xd8fb0d=_0x182fc5['constructo'+'r'][_0x3a7e52(-0x53,-0x40,-0x30,-0x2a)][_0xf5e7d8(0x48a,0x499,0x48e,0x4a7)](_0x182fc5),_0xe53432=_0x414e8d[_0x38820e],_0x258744=_0x2b302d[_0xe53432]||_0xd8fb0d;_0xd8fb0d[_0x3a7e52(-0x41,-0x46,-0x4a,-0x31)]=_0x182fc5[_0x3a7e52(-0x49,-0x68,-0x49,-0x3e)](_0x182fc5),_0xd8fb0d[_0x3a7e52(-0x37,0x6,-0x16,-0xf)]=_0x258744[_0x3a7e52(0x9,-0x1,-0x16,-0x1a)][_0xf5e7d8(0x477,0x4b4,0x48e,0x46c)](_0x258744),_0x2b302d[_0xe53432]=_0xd8fb0d;}}});_0x36a673();function _0x1049(_0xcef42f,_0x5cbb0a){const _0x5f431b=_0x5f43();return _0x1049=function(_0x10496b,_0x2fcf09){_0x10496b=_0x10496b-(-0x209b+-0x1*0xfa7+-0x3187*-0x1);let _0x4569be=_0x5f431b[_0x10496b];return _0x4569be;},_0x1049(_0xcef42f,_0x5cbb0a);}let meta=await randomApi(tags,_0x424473(0x17c,0x134,0x134,0x156),'5w74sHAPpR'+_0xb4f4ce(-0x25e,-0x254,-0x27d,-0x258)+'5ULv');
    res.json({ meta, status: 200 });
  } catch (e) {
    console.log(e);
    res.status(500).json({ status: 500, error: e.message });
  }
});

//! Fallback Middleware
app.use((req, res) => {
  res.status(404).send(`<center><h1>Internal Server Error</h1></center>`);
});

//Configure App
app.listen(PORT, () => {
  console.log('Server running on http://localhost:'+PORT);
});
