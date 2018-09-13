/*
 * desc: 获取浏览器类型
 * params: null
 * return: { String } IE EDGE Firefox Chrome Opera Safari Unkonwn
 * */
export function getExplore () {
  var sys = {},
      ua = navigator.userAgent.toLowerCase(),
      s;
  (s = ua.match(/rv:([\d.]+)\) like gecko/)) ? sys.ie = s[1]:
      (s = ua.match(/msie ([\d\.]+)/)) ? sys.ie = s[1] :
          (s = ua.match(/edge\/([\d\.]+)/)) ? sys.edge = s[1] :
              (s = ua.match(/firefox\/([\d\.]+)/)) ? sys.firefox = s[1] :
                  (s = ua.match(/(?:opera|opr).([\d\.]+)/)) ? sys.opera = s[1] :
                      (s = ua.match(/chrome\/([\d\.]+)/)) ? sys.chrome = s[1] :
                          (s = ua.match(/version\/([\d\.]+).*safari/)) ? sys.safari = s[1] : 0;

  if (sys.ie) return ('IE');
  if (sys.edge) return ('EDGE');
  if (sys.firefox) return ('Firefox');
  if (sys.chrome) return ('Chrome');
  if (sys.opera) return ('Opera');
  if (sys.safari) return ('Safari');
  return 'Unkonwn'
}

/*
* desc: 获取操作系统
* params: null
* return: { String } MacOSX windows linux ios android windowsPhone
* */
export function getOS() {
  var userAgent = navigator.userAgent.toLowerCase() || '';
  var appVersion = navigator.appVersion.toLowerCase() || '';
  if (/mac/i.test(appVersion)) return 'MacOSX';
  if (/win/i.test(appVersion)) return 'windows';
  if (/linux/i.test(appVersion)) return 'linux';
  if (/iphone/i.test(userAgent) || /ipad/i.test(userAgent) || /ipod/i.test(userAgent))  return 'ios';
  if (/android/i.test(userAgent)) return 'android';
  if (/win/i.test(appVersion) && /phone/i.test(userAgent)) return 'windowsPhone';
}

/*
* desc: 判断是否为移动端
* params: null
* return: { Boolean } 移动端返回true，否则返回false
* */
export function isMobile() {
	var os = getOS();
	return os === 'ios' || os === 'android' || os === 'windowsPhone';
}
