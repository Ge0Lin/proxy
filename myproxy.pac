function FindProxyForURL(url, host)
{
var proxy_yes = "PROXY yanggis.f3322.org:3128";
var proxy_no = "DIRECT";
if (shExpMatch(url,"*v.youku.com*")) { return proxy_yes; }
if (shExpMatch(url,"*api.youku.com*")) { return proxy_yes; }
if (shExpMatch(url,"*play.youku.com*")) { return proxy_yes; }
if (shExpMatch(url,"*v2.tudou.com*")) { return proxy_yes; }
if (shExpMatch(url,"*www.tudou.com*")) { return proxy_yes; }
if (shExpMatch(url,"*s.plcloud.music.qq.com*")) { return proxy_yes; }
if (shExpMatch(url,"*i.y.qq.com*")) { return proxy_yes; }
if (shExpMatch(url,"*hot.vrs.sohu.com*")) { return proxy_yes; }
if (shExpMatch(url,"*live.tv.sohu.com*")) { return proxy_yes; }
if (shExpMatch(url,"*pad.tv.sohu.com*")) { return proxy_yes; }
if (shExpMatch(url,"*my.tv.sohu.com*")) { return proxy_yes; }
if (shExpMatch(url,"*hot.vrs.letv.com*")) { return proxy_yes; }
if (shExpMatch(url,"*data.video.qiyi.com*")) { return proxy_yes; }
if (shExpMatch(url,"*cache.video.qiyi.com*")) { return proxy_yes; }
if (shExpMatch(url,"*cache.vip.qiyi.com*")) { return proxy_yes; }
if (shExpMatch(url,"*v.api.hunantv.com*")) { return proxy_yes; }
if (shExpMatch(url,"*vv.video.qq.com*")) { return proxy_yes; }
if (shExpMatch(url,"*tt.video.qq.com*")) { return proxy_yes; }
if (shExpMatch(url,"*ice.video.qq.com*")) { return proxy_yes; }
if (shExpMatch(url,"*tjsa.video.qq.com*")) { return proxy_yes; }
if (shExpMatch(url,"*a10.video.qq.com*")) { return proxy_yes; }
if (shExpMatch(url,"*xyy.video.qq.com*")) { return proxy_yes; }
if (shExpMatch(url,"*vcq.video.qq.com*")) { return proxy_yes; }
if (shExpMatch(url,"*vsh.video.qq.com*")) { return proxy_yes; }
if (shExpMatch(url,"*vbj.video.qq.com*")) { return proxy_yes; }
if (shExpMatch(url,"*bobo.video.qq.com*")) { return proxy_yes; }
if (shExpMatch(url,"*flvs.video.qq.com*")) { return proxy_yes; }
if (shExpMatch(url,"*bkvv.video.qq.com*")) { return proxy_yes; }
if (shExpMatch(url,"*info.zb.qq.com*")) { return proxy_yes; }
if (shExpMatch(url,"*geo.js.kankan.xunlei.com*")) { return proxy_yes; }
if (shExpMatch(url,"*web-play.pptv.com*")) { return proxy_yes; }
if (shExpMatch(url,"*web-play.pplive.cn*")) { return proxy_yes; }
if (shExpMatch(url,"*dyn.ugc.pps.tv*")) { return proxy_yes; }
if (shExpMatch(url,"*v.pps.tv*")) { return proxy_yes; }
if (shExpMatch(url,"*inner.kandian.com*")) { return proxy_yes; }
if (shExpMatch(url,"*ipservice.163.com*")) { return proxy_yes; }
if (shExpMatch(url,"*so.open.163.com*")) { return proxy_yes; }
if (shExpMatch(url,"*zb.s.qq.com*")) { return proxy_yes; }
if (shExpMatch(url,"*ip.kankan.xunlei.com*")) { return proxy_yes; }
if (shExpMatch(url,"*vxml.56.com*")) { return proxy_yes; }
if (shExpMatch(url,"*music.sina.com.cn*")) { return proxy_yes; }
if (shExpMatch(url,"*play.baidu.com*")) { return proxy_yes; }
if (shExpMatch(url,"*v.iask.com*")) { return proxy_yes; }
if (shExpMatch(url,"*tv.weibo.com*")) { return proxy_yes; }
if (shExpMatch(url,"*wtv.v.iask.com*")) { return proxy_yes; }
if (shExpMatch(url,"*video.sina.com.cn*")) { return proxy_yes; }
if (shExpMatch(url,"*www.yinyuetai.com*")) { return proxy_yes; }
if (shExpMatch(url,"*api.letv.com*")) { return proxy_yes; }
if (shExpMatch(url,"*st.live.letv.com*")) { return proxy_yes; }
if (shExpMatch(url,"*live.gslb.letv.com*")) { return proxy_yes; }
if (shExpMatch(url,"*static.itv.letv.com*")) { return proxy_yes; }
if (shExpMatch(url,"*ip.apps.cntv.cn*")) { return proxy_yes; }
if (shExpMatch(url,"*vdn.apps.cntv.cn*")) { return proxy_yes; }
if (shExpMatch(url,"*vdn.live.cntv.cn*")) { return proxy_yes; }
if (shExpMatch(url,"*vip.sports.cntv.cn*")) { return proxy_yes; }
if (shExpMatch(url,"*211.151.157.15*")) { return proxy_yes; }
if (shExpMatch(url,"*a.play.api.3g.youku.com*")) { return proxy_yes; }
if (shExpMatch(url,"*i.play.api.3g.youku.com*")) { return proxy_yes; }
if (shExpMatch(url,"*api.3g.youku.com*")) { return proxy_yes; }
if (shExpMatch(url,"*tv.api.3g.youku.com*")) { return proxy_yes; }
if (shExpMatch(url,"*play.api.3g.youku.com*")) { return proxy_yes; }
if (shExpMatch(url,"*play.api.3g.tudou.com*")) { return proxy_yes; }
if (shExpMatch(url,"*tv.api.3g.tudou.com*")) { return proxy_yes; }
if (shExpMatch(url,"*api.3g.tudou.com*")) { return proxy_yes; }
if (shExpMatch(url,"*api.tv.sohu.com*")) { return proxy_yes; }
if (shExpMatch(url,"*access.tv.sohu.com*")) { return proxy_yes; }
if (shExpMatch(url,"*iface.iqiyi.com*")) { return proxy_yes; }
if (shExpMatch(url,"*iface2.iqiyi.com*")) { return proxy_yes; }
if (shExpMatch(url,"*cache.m.iqiyi.com*")) { return proxy_yes; }
if (shExpMatch(url,"*dynamic.app.m.letv.com*")) { return proxy_yes; }
if (shExpMatch(url,"*dynamic.meizi.app.m.letv.com*")) { return proxy_yes; }
if (shExpMatch(url,"*dynamic.search.app.m.letv.com*")) { return proxy_yes; }
if (shExpMatch(url,"*dynamic.live.app.m.letv.com*")) { return proxy_yes; }
if (shExpMatch(url,"*listso.m.areainfo.ppstream.com*")) { return proxy_yes; }
if (shExpMatch(url,"*epg.api.pptv.com*")) { return proxy_yes; }
if (shExpMatch(url,"*play.api.pptv.com*")) { return proxy_yes; }
if (shExpMatch(url,"*m.letv.com*")) { return proxy_yes; }
if (shExpMatch(url,"*interface.bilibili.com*")) { return proxy_yes; }
if (shExpMatch(url,"*3g.music.qq.com*")) { return proxy_yes; }
if (shExpMatch(url,"*mqqplayer.3g.qq.com*")) { return proxy_yes; }
if (shExpMatch(url,"*proxy.music.qq.com*")) { return proxy_yes; }
if (shExpMatch(url,"*proxymc.qq.com*")) { return proxy_yes; }
if (shExpMatch(url,"*ip2.kugou.com*")) { return proxy_yes; }
if (shExpMatch(url,"*ip.kugou.com*")) { return proxy_yes; }
if (shExpMatch(url,"*client.api.ttpod.com*")) { return proxy_yes; }
if (shExpMatch(url,"*mobi.kuwo.cn*")) { return proxy_yes; }
if (shExpMatch(url,"*mobilefeedback.kugou.com*")) { return proxy_yes; }
if (shExpMatch(url,"*tingapi.ting.baidu.com*")) { return proxy_yes; }
if (shExpMatch(url,"*music.baidu.com*")) { return proxy_yes; }
if (shExpMatch(url,"*serviceinfo.sdk.duomi.com*")) { return proxy_yes; }
if (shExpMatch(url,"*music.163.com*")) { return proxy_yes; }
if (shExpMatch(url,"*www.xiami.com*")) { return proxy_yes; }
if (shExpMatch(url,"*spark.api.xiami.com*")) { return proxy_yes; }
if (shExpMatch(url,"*iplocation.geo.qiyi.com*")) { return proxy_yes; }
if (shExpMatch(url,"*sns.video.qq.com*")) { return proxy_yes; }
if (shExpMatch(url,"*v5.pc.duomi.com*")) { return proxy_yes; }
if (shExpMatch(url,"*tms.is.ysten.com*")) { return proxy_yes; }
if (shExpMatch(url,"*chrome.2345.com*")) { return proxy_yes; }
if (shExpMatch(url,"*internal.check.duokanbox.com*")) { return proxy_yes; }
if (shExpMatch(url,"*180.153.225.136*")) { return proxy_yes; }
if (shExpMatch(url,"*118.244.244.124*")) { return proxy_yes; }
if (shExpMatch(url,"*210.129.145.150*")) { return proxy_yes; }
if (shExpMatch(url,"*182.16.230.98*")) { return proxy_yes; }
if (shExpMatch(url,"*61.135.196.99*")) { return proxy_yes; }
if (shExpMatch(url,"*220.181.185.150*")) { return proxy_yes; }
if (shExpMatch(url,"*111.13.127.46*")) { return proxy_yes; }
if (shExpMatch(url,"*211.151.50.10*")) { return proxy_yes; }
if (shExpMatch(url,"*123.126.99.57*")) { return proxy_yes; }
if (shExpMatch(url,"*123.126.99.39*")) { return proxy_yes; }
if (shExpMatch(url,"*220.181.154.137*")) { return proxy_yes; }
if (shExpMatch(url,"*httpbin.org*")) { return proxy_yes; }
if (shExpMatch(url,"*ip138.com*")) { return proxy_yes; }
// Proxy anything else
return proxy_no;
}