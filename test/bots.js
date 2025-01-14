/**
* @author Luiz Freneda <lfreneda@gmail.com>
*/
const test = require('ava');
const UserAgent = require('../lib/useragent.js');

console.log(UserAgent)

test('Arbitrary bot UA', (t) => {
  const source = 'sockbot/3.1.0-RC1 (Linux x86_64) (nodejs 5.10.1) (owner:fred user:george)';
  const userAgent = new UserAgent(source);

  t.true(!userAgent.isAuthoritative, 'Authoritative');
  t.true(!userAgent.isMobile, 'Mobile');
  t.true(!userAgent.isiPad, 'iPad');
  t.true(!userAgent.isiPod, 'iPod');
  t.true(!userAgent.isiPhone, 'iPhone');
  t.true(!userAgent.isAndroid, 'Android');
  t.true(!userAgent.isBlackberry, 'Blackberry');
  t.true(!userAgent.isOpera, 'Opera');
  t.true(!userAgent.isIE, 'IE');
  t.true(!userAgent.isSafari, 'Safari');
  t.true(!userAgent.isFirefox, 'Firefox');
  t.true(!userAgent.isWebkit, 'Webkit');
  t.true(!userAgent.isChrome, 'Chrome');
  t.true(!userAgent.isKonqueror, 'Konqueror');
  t.true(!userAgent.isOmniWeb, 'OmniWeb');
  t.true(!userAgent.isSeaMonkey, 'SeaMonkey');
  t.true(!userAgent.isFlock, 'Flock');
  t.true(!userAgent.isAmaya, 'Amaya');
  t.true(!userAgent.isEpiphany, 'Epiphany');
  t.true(userAgent.isDesktop, 'Desktop');
  t.true(!userAgent.isWindows, 'Windows');
  t.true(userAgent.isLinux, 'Linux');
  t.true(!userAgent.isMac, 'Mac');
  t.true(!userAgent.isBada, 'Bada');
  t.true(!userAgent.isSamsung, 'Samsung');
  t.true(!userAgent.isRaspberry, 'Raspberry');
  t.true(!userAgent.isAndroidTablet, 'AndroidTablet');
  t.true(userAgent.isBot, 'Bot');
  t.is(userAgent.browser, 'sockbot');
  t.is(userAgent.version, '3.1.0-RC1');
});

test('Baiduspider Bot', (t) => {
  const source = 'Mozilla/5.0 (compatible; Baiduspider/2.0; +http://www.baidu.com/search/spider.html)';
  const userAgent = new UserAgent(source);

  t.true(userAgent.isAuthoritative, 'Authoritative');
  t.true(!userAgent.isMobile, 'Mobile');
  t.true(!userAgent.isiPad, 'iPad');
  t.true(!userAgent.isiPod, 'iPod');
  t.true(!userAgent.isiPhone, 'iPhone');
  t.true(!userAgent.isAndroid, 'Android');
  t.true(!userAgent.isBlackberry, 'Blackberry');
  t.true(!userAgent.isOpera, 'Opera');
  t.true(!userAgent.isIE, 'IE');
  t.true(!userAgent.isSafari, 'Safari');
  t.true(!userAgent.isFirefox, 'Firefox');
  t.true(!userAgent.isWebkit, 'Webkit');
  t.true(!userAgent.isChrome, 'Chrome');
  t.true(!userAgent.isKonqueror, 'Konqueror');
  t.true(!userAgent.isOmniWeb, 'OmniWeb');
  t.true(!userAgent.isSeaMonkey, 'SeaMonkey');
  t.true(!userAgent.isFlock, 'Flock');
  t.true(!userAgent.isAmaya, 'Amaya');
  t.true(!userAgent.isEpiphany, 'Epiphany');
  t.true(!userAgent.isDesktop, 'Desktop');
  t.true(!userAgent.isWindows, 'Windows');
  t.true(!userAgent.isLinux, 'Linux');
  t.true(!userAgent.isMac, 'Mac');
  t.true(!userAgent.isBada, 'Bada');
  t.true(!userAgent.isSamsung, 'Samsung');
  t.true(!userAgent.isRaspberry, 'Raspberry');
  t.is(userAgent.isBot, 'baiduspider');
  t.true(!userAgent.isAndroidTablet, 'AndroidTablet');
});

test('Apple Bot', (t) => {
  const source = 'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_10_1) AppleWebKit/600.2.5 (KHTML, like Gecko) Version/8.0.2 Safari/600.2.5 (Applebot/0.1)';
  const userAgent = new UserAgent(source);

  t.true(userAgent.isAuthoritative, 'Authoritative');
  t.true(!userAgent.isMobile, 'Mobile');
  t.true(!userAgent.isiPad, 'iPad');
  t.true(!userAgent.isiPod, 'iPod');
  t.true(!userAgent.isiPhone, 'iPhone');
  t.true(!userAgent.isAndroid, 'Android');
  t.true(!userAgent.isBlackberry, 'Blackberry');
  t.true(!userAgent.isOpera, 'Opera');
  t.true(!userAgent.isIE, 'IE');
  t.true(userAgent.isSafari, 'Safari');
  t.true(!userAgent.isFirefox, 'Firefox');
  t.true(!userAgent.isWebkit, 'Webkit');
  t.true(!userAgent.isChrome, 'Chrome');
  t.true(!userAgent.isKonqueror, 'Konqueror');
  t.true(!userAgent.isOmniWeb, 'OmniWeb');
  t.true(!userAgent.isSeaMonkey, 'SeaMonkey');
  t.true(!userAgent.isFlock, 'Flock');
  t.true(!userAgent.isAmaya, 'Amaya');
  t.true(!userAgent.isEpiphany, 'Epiphany');
  t.true(userAgent.isDesktop, 'Desktop');
  t.true(!userAgent.isWindows, 'Windows');
  t.true(!userAgent.isLinux, 'Linux');
  t.true(userAgent.isMac, 'Mac');
  t.true(!userAgent.isBada, 'Bada');
  t.true(!userAgent.isSamsung, 'Samsung');
  t.true(!userAgent.isRaspberry, 'Raspberry');
  t.is(userAgent.isBot, 'applebot');
  t.true(!userAgent.isAndroidTablet, 'AndroidTablet');
});

test('Pingdom Bot', (t) => {
  const source = 'Pingdom.com_bot_version_1.4_(http://www.pingdom.com/)';
  const userAgent = new UserAgent(source);

  t.true(userAgent.isAuthoritative, 'Authoritative');
  t.true(!userAgent.isMobile, 'Mobile');
  t.true(!userAgent.isiPad, 'iPad');
  t.true(!userAgent.isiPod, 'iPod');
  t.true(!userAgent.isiPhone, 'iPhone');
  t.true(!userAgent.isAndroid, 'Android');
  t.true(!userAgent.isBlackberry, 'Blackberry');
  t.true(!userAgent.isOpera, 'Opera');
  t.true(!userAgent.isIE, 'IE');
  t.true(!userAgent.isSafari, 'Safari');
  t.true(!userAgent.isFirefox, 'Firefox');
  t.true(!userAgent.isWebkit, 'Webkit');
  t.true(!userAgent.isChrome, 'Chrome');
  t.true(!userAgent.isKonqueror, 'Konqueror');
  t.true(!userAgent.isOmniWeb, 'OmniWeb');
  t.true(!userAgent.isSeaMonkey, 'SeaMonkey');
  t.true(!userAgent.isFlock, 'Flock');
  t.true(!userAgent.isAmaya, 'Amaya');
  t.true(!userAgent.isEpiphany, 'Epiphany');
  t.true(!userAgent.isDesktop, 'Desktop');
  t.true(!userAgent.isWindows, 'Windows');
  t.true(!userAgent.isLinux, 'Linux');
  t.true(!userAgent.isMac, 'Mac');
  t.true(!userAgent.isBada, 'Bada');
  t.true(!userAgent.isSamsung, 'Samsung');
  t.true(!userAgent.isRaspberry, 'Raspberry');
  t.is(userAgent.isBot, 'pingdom');
  t.true(!userAgent.isAndroidTablet, 'AndroidTablet');
});

test('Google Bot', (t) => {
  const source = 'Mozilla/5.0 (iPhone; CPU iPhone OS 8_3 like Mac OS X) AppleWebKit/537.36 (KHTML, like Gecko; Google Page Speed Insights) Version/8.0 Mobile/12F70 Safari/600.1.4';
  const userAgent = new UserAgent(source);

  t.true(userAgent.isAuthoritative, 'Authoritative');
  t.true(userAgent.isMobile, 'Mobile');
  t.true(!userAgent.isiPad, 'iPad');
  t.true(!userAgent.isiPod, 'iPod');
  t.true(userAgent.isiPhone, 'iPhone');
  t.true(!userAgent.isAndroid, 'Android');
  t.true(!userAgent.isBlackberry, 'Blackberry');
  t.true(!userAgent.isOpera, 'Opera');
  t.true(!userAgent.isIE, 'IE');
  t.true(userAgent.isSafari, 'Safari');
  t.true(!userAgent.isFirefox, 'Firefox');
  t.true(!userAgent.isWebkit, 'Webkit');
  t.true(!userAgent.isChrome, 'Chrome');
  t.true(!userAgent.isKonqueror, 'Konqueror');
  t.true(!userAgent.isOmniWeb, 'OmniWeb');
  t.true(!userAgent.isSeaMonkey, 'SeaMonkey');
  t.true(!userAgent.isFlock, 'Flock');
  t.true(!userAgent.isAmaya, 'Amaya');
  t.true(!userAgent.isEpiphany, 'Epiphany');
  t.true(!userAgent.isDesktop, 'Desktop');
  t.true(!userAgent.isWindows, 'Windows');
  t.true(!userAgent.isLinux, 'Linux');
  t.true(userAgent.isMac, 'Mac');
  t.true(!userAgent.isBada, 'Bada');
  t.true(!userAgent.isSamsung, 'Samsung');
  t.true(!userAgent.isRaspberry, 'Raspberry');
  t.is(userAgent.isBot, 'insights');
  t.true(!userAgent.isAndroidTablet, 'AndroidTablet');
});

/** new bot's * */
test('BLEX Bot', (t) => {
  const source = 'Mozilla/5.0 (compatible; BLEXBot/1.0; +http://webmeup-crawler.com/)';
  const userAgent = new UserAgent(source);

  t.true(userAgent.isAuthoritative, 'Authoritative');
  t.true(!userAgent.isiPad, 'iPad');
  t.true(!userAgent.isiPod, 'iPod');
  t.true(!userAgent.isiPhone, 'iPhone');
  t.true(!userAgent.isAndroid, 'Android');
  t.true(!userAgent.isBlackberry, 'Blackberry');
  t.true(!userAgent.isOpera, 'Opera');
  t.true(!userAgent.isIE, 'IE');
  t.true(!userAgent.isSafari, 'Safari');
  t.true(!userAgent.isFirefox, 'Firefox');
  t.true(!userAgent.isWebkit, 'Webkit');
  t.true(!userAgent.isChrome, 'Chrome');
  t.true(!userAgent.isKonqueror, 'Konqueror');
  t.true(!userAgent.isOmniWeb, 'OmniWeb');
  t.true(!userAgent.isSeaMonkey, 'SeaMonkey');
  t.true(!userAgent.isFlock, 'Flock');
  t.true(!userAgent.isAmaya, 'Amaya');
  t.true(!userAgent.isEpiphany, 'Epiphany');
  t.true(!userAgent.isDesktop, 'Desktop');
  t.true(!userAgent.isWindows, 'Windows');
  t.true(!userAgent.isLinux, 'Linux');
  t.true(!userAgent.isMac, 'Mac');
  t.true(!userAgent.isBada, 'Bada');
  t.true(!userAgent.isSamsung, 'Samsung');
  t.true(!userAgent.isRaspberry, 'Raspberry');
  t.is(userAgent.isBot, 'crawler');
  t.true(!userAgent.isAndroidTablet, 'AndroidTablet');
});

test('Orange Bot', (t) => {
  const source = 'Mozilla/5.0 (compatible; OrangeBot/2.0; support.orangebot@orange.com)';
  const userAgent = new UserAgent(source);

  t.true(userAgent.isAuthoritative, 'Authoritative');
  t.true(!userAgent.isiPad, 'iPad');
  t.true(!userAgent.isiPod, 'iPod');
  t.true(!userAgent.isiPhone, 'iPhone');
  t.true(!userAgent.isAndroid, 'Android');
  t.true(!userAgent.isBlackberry, 'Blackberry');
  t.true(!userAgent.isOpera, 'Opera');
  t.true(!userAgent.isIE, 'IE');
  t.true(!userAgent.isSafari, 'Safari');
  t.true(!userAgent.isFirefox, 'Firefox');
  t.true(!userAgent.isWebkit, 'Webkit');
  t.true(!userAgent.isChrome, 'Chrome');
  t.true(!userAgent.isKonqueror, 'Konqueror');
  t.true(!userAgent.isOmniWeb, 'OmniWeb');
  t.true(!userAgent.isSeaMonkey, 'SeaMonkey');
  t.true(!userAgent.isFlock, 'Flock');
  t.true(!userAgent.isAmaya, 'Amaya');
  t.true(!userAgent.isEpiphany, 'Epiphany');
  t.true(!userAgent.isDesktop, 'Desktop');
  t.true(!userAgent.isWindows, 'Windows');
  t.true(!userAgent.isLinux, 'Linux');
  t.true(!userAgent.isMac, 'Mac');
  t.true(!userAgent.isBada, 'Bada');
  t.true(!userAgent.isSamsung, 'Samsung');
  t.true(!userAgent.isRaspberry, 'Raspberry');
  t.is(userAgent.isBot, 'orangebot');
  t.true(!userAgent.isAndroidTablet, 'AndroidTablet');
});

test('SMT Bot', (t) => {
  const source = 'Mozilla/5.0 (Windows NT 6.1) (compatible; SMTBot/1.0; +http://www.similartech.com/smtbot)';
  const userAgent = new UserAgent(source);

  t.true(userAgent.isAuthoritative, 'Authoritative');
  t.true(!userAgent.isiPad, 'iPad');
  t.true(!userAgent.isiPod, 'iPod');
  t.true(!userAgent.isiPhone, 'iPhone');
  t.true(!userAgent.isAndroid, 'Android');
  t.true(!userAgent.isBlackberry, 'Blackberry');
  t.true(!userAgent.isOpera, 'Opera');
  t.true(!userAgent.isIE, 'IE');
  t.true(!userAgent.isSafari, 'Safari');
  t.true(!userAgent.isFirefox, 'Firefox');
  t.true(!userAgent.isWebkit, 'Webkit');
  t.true(!userAgent.isChrome, 'Chrome');
  t.true(!userAgent.isKonqueror, 'Konqueror');
  t.true(!userAgent.isOmniWeb, 'OmniWeb');
  t.true(!userAgent.isSeaMonkey, 'SeaMonkey');
  t.true(!userAgent.isFlock, 'Flock');
  t.true(!userAgent.isAmaya, 'Amaya');
  t.true(!userAgent.isEpiphany, 'Epiphany');
  t.true(userAgent.isDesktop, 'Desktop');
  t.true(userAgent.isWindows, 'Windows');
  t.true(!userAgent.isLinux, 'Linux');
  t.true(!userAgent.isMac, 'Mac');
  t.true(!userAgent.isBada, 'Bada');
  t.true(!userAgent.isSamsung, 'Samsung');
  t.true(!userAgent.isRaspberry, 'Raspberry');
  t.is(userAgent.isBot, 'smtbot');
  t.true(!userAgent.isAndroidTablet, 'AndroidTablet');
});

test('Qwantify Bot', (t) => {
  const source = 'Mozilla/5.0 (compatible; Qwantify/2.3w; +https://www.qwant.com/)/2.3w';
  const userAgent = new UserAgent(source);

  t.true(userAgent.isAuthoritative, 'Authoritative');
  t.true(!userAgent.isiPad, 'iPad');
  t.true(!userAgent.isiPod, 'iPod');
  t.true(!userAgent.isiPhone, 'iPhone');
  t.true(!userAgent.isAndroid, 'Android');
  t.true(!userAgent.isBlackberry, 'Blackberry');
  t.true(!userAgent.isOpera, 'Opera');
  t.true(!userAgent.isIE, 'IE');
  t.true(!userAgent.isSafari, 'Safari');
  t.true(!userAgent.isFirefox, 'Firefox');
  t.true(!userAgent.isWebkit, 'Webkit');
  t.true(!userAgent.isChrome, 'Chrome');
  t.true(!userAgent.isKonqueror, 'Konqueror');
  t.true(!userAgent.isOmniWeb, 'OmniWeb');
  t.true(!userAgent.isSeaMonkey, 'SeaMonkey');
  t.true(!userAgent.isFlock, 'Flock');
  t.true(!userAgent.isAmaya, 'Amaya');
  t.true(!userAgent.isEpiphany, 'Epiphany');
  t.true(!userAgent.isDesktop, 'Desktop');
  t.true(!userAgent.isWindows, 'Windows');
  t.true(!userAgent.isLinux, 'Linux');
  t.true(!userAgent.isMac, 'Mac');
  t.true(!userAgent.isBada, 'Bada');
  t.true(!userAgent.isSamsung, 'Samsung');
  t.true(!userAgent.isRaspberry, 'Raspberry');
  t.is(userAgent.isBot, 'qwantify');
  t.true(!userAgent.isAndroidTablet, 'AndroidTablet');
});

test('MJ12 Bot', (t) => {
  const source = 'Mozilla/5.0 (compatible; MJ12bot/v1.4.5; http://www.majestic12.co.uk/bot.php?+)';
  const userAgent = new UserAgent(source);

  t.true(userAgent.isAuthoritative, 'Authoritative');
  t.true(!userAgent.isiPad, 'iPad');
  t.true(!userAgent.isiPod, 'iPod');
  t.true(!userAgent.isiPhone, 'iPhone');
  t.true(!userAgent.isAndroid, 'Android');
  t.true(!userAgent.isBlackberry, 'Blackberry');
  t.true(!userAgent.isOpera, 'Opera');
  t.true(!userAgent.isIE, 'IE');
  t.true(!userAgent.isSafari, 'Safari');
  t.true(!userAgent.isFirefox, 'Firefox');
  t.true(!userAgent.isWebkit, 'Webkit');
  t.true(!userAgent.isChrome, 'Chrome');
  t.true(!userAgent.isKonqueror, 'Konqueror');
  t.true(!userAgent.isOmniWeb, 'OmniWeb');
  t.true(!userAgent.isSeaMonkey, 'SeaMonkey');
  t.true(!userAgent.isFlock, 'Flock');
  t.true(!userAgent.isAmaya, 'Amaya');
  t.true(!userAgent.isEpiphany, 'Epiphany');
  t.true(!userAgent.isDesktop, 'Desktop');
  t.true(!userAgent.isWindows, 'Windows');
  t.true(!userAgent.isLinux, 'Linux');
  t.true(!userAgent.isMac, 'Mac');
  t.true(!userAgent.isBada, 'Bada');
  t.true(!userAgent.isSamsung, 'Samsung');
  t.true(!userAgent.isRaspberry, 'Raspberry');
  t.is(userAgent.isBot, 'mj12bot');
  t.true(!userAgent.isAndroidTablet, 'AndroidTablet');
});

test('Ahrefs Bot', (t) => {
  const source = 'Mozilla/5.0 (compatible; AhrefsBot/5.1; +http://ahrefs.com/robot/)';
  const userAgent = new UserAgent(source);

  t.true(userAgent.isAuthoritative, 'Authoritative');
  t.true(!userAgent.isiPad, 'iPad');
  t.true(!userAgent.isiPod, 'iPod');
  t.true(!userAgent.isiPhone, 'iPhone');
  t.true(!userAgent.isAndroid, 'Android');
  t.true(!userAgent.isBlackberry, 'Blackberry');
  t.true(!userAgent.isOpera, 'Opera');
  t.true(!userAgent.isIE, 'IE');
  t.true(!userAgent.isSafari, 'Safari');
  t.true(!userAgent.isFirefox, 'Firefox');
  t.true(!userAgent.isWebkit, 'Webkit');
  t.true(!userAgent.isChrome, 'Chrome');
  t.true(!userAgent.isKonqueror, 'Konqueror');
  t.true(!userAgent.isOmniWeb, 'OmniWeb');
  t.true(!userAgent.isSeaMonkey, 'SeaMonkey');
  t.true(!userAgent.isFlock, 'Flock');
  t.true(!userAgent.isAmaya, 'Amaya');
  t.true(!userAgent.isEpiphany, 'Epiphany');
  t.true(!userAgent.isDesktop, 'Desktop');
  t.true(!userAgent.isWindows, 'Windows');
  t.true(!userAgent.isLinux, 'Linux');
  t.true(!userAgent.isMac, 'Mac');
  t.true(!userAgent.isBada, 'Bada');
  t.true(!userAgent.isSamsung, 'Samsung');
  t.true(!userAgent.isRaspberry, 'Raspberry');
  t.is(userAgent.isBot, 'ahrefsbot');
  t.true(!userAgent.isAndroidTablet, 'AndroidTablet');
});

test('Panscient Bot', (t) => {
  const source = 'panscient.com';
  const userAgent = new UserAgent(source);

  t.true(userAgent.isAuthoritative, 'Authoritative');
  t.true(!userAgent.isiPad, 'iPad');
  t.true(!userAgent.isiPod, 'iPod');
  t.true(!userAgent.isiPhone, 'iPhone');
  t.true(!userAgent.isAndroid, 'Android');
  t.true(!userAgent.isBlackberry, 'Blackberry');
  t.true(!userAgent.isOpera, 'Opera');
  t.true(!userAgent.isIE, 'IE');
  t.true(!userAgent.isSafari, 'Safari');
  t.true(!userAgent.isFirefox, 'Firefox');
  t.true(!userAgent.isWebkit, 'Webkit');
  t.true(!userAgent.isChrome, 'Chrome');
  t.true(!userAgent.isKonqueror, 'Konqueror');
  t.true(!userAgent.isOmniWeb, 'OmniWeb');
  t.true(!userAgent.isSeaMonkey, 'SeaMonkey');
  t.true(!userAgent.isFlock, 'Flock');
  t.true(!userAgent.isAmaya, 'Amaya');
  t.true(!userAgent.isEpiphany, 'Epiphany');
  t.true(!userAgent.isDesktop, 'Desktop');
  t.true(!userAgent.isWindows, 'Windows');
  t.true(!userAgent.isLinux, 'Linux');
  t.true(!userAgent.isMac, 'Mac');
  t.true(!userAgent.isBada, 'Bada');
  t.true(!userAgent.isSamsung, 'Samsung');
  t.true(!userAgent.isRaspberry, 'Raspberry');
  t.is(userAgent.isBot, 'panscient.com');
  t.true(!userAgent.isAndroidTablet, 'AndroidTablet');
});

test('Seznam Bot', (t) => {
  const source = 'Mozilla/5.0 (compatible; SeznamBot/3.2; +http://napoveda.seznam.cz/en/seznambot-intro/)';
  const userAgent = new UserAgent(source);

  t.true(userAgent.isAuthoritative, 'Authoritative');
  t.true(!userAgent.isiPad, 'iPad');
  t.true(!userAgent.isiPod, 'iPod');
  t.true(!userAgent.isiPhone, 'iPhone');
  t.true(!userAgent.isAndroid, 'Android');
  t.true(!userAgent.isBlackberry, 'Blackberry');
  t.true(!userAgent.isOpera, 'Opera');
  t.true(!userAgent.isIE, 'IE');
  t.true(!userAgent.isSafari, 'Safari');
  t.true(!userAgent.isFirefox, 'Firefox');
  t.true(!userAgent.isWebkit, 'Webkit');
  t.true(!userAgent.isChrome, 'Chrome');
  t.true(!userAgent.isKonqueror, 'Konqueror');
  t.true(!userAgent.isOmniWeb, 'OmniWeb');
  t.true(!userAgent.isSeaMonkey, 'SeaMonkey');
  t.true(!userAgent.isFlock, 'Flock');
  t.true(!userAgent.isAmaya, 'Amaya');
  t.true(!userAgent.isEpiphany, 'Epiphany');
  t.true(!userAgent.isDesktop, 'Desktop');
  t.true(!userAgent.isWindows, 'Windows');
  t.true(!userAgent.isLinux, 'Linux');
  t.true(!userAgent.isMac, 'Mac');
  t.true(!userAgent.isBada, 'Bada');
  t.true(!userAgent.isSamsung, 'Samsung');
  t.true(!userAgent.isRaspberry, 'Raspberry');
  t.is(userAgent.isBot, 'seznambot');
  t.true(!userAgent.isAndroidTablet, 'AndroidTablet');
});
