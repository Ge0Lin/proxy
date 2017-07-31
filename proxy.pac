function FindProxyForURL(url, host) {
    // Your proxy server name and port
    var proxyserver = "166.111.77.32:3128";
    //
    //  Here's a list of hosts to connect via the PROXY server
    //
    var proxylist = new Array(
    "www.nature.com",
    "springer.com",
    "webofscience.com",
    "sciencemag.org",
    "ieeexplore.ieee.org",
    "www.sciencedirect.com",
    "acw.sciencedirect.com",
    "acw.elsevier.com",
    "journals.sagepub.com",
    "journals.cambridge.org",
    "www.cnki.net",
    "kns.cnki.net",
    "wiley.com",
    "ip.cn"
);
    
//var reglist = new Array(
//     "*121.46.19.*", //s
//     "*123.125.123.*" //s
//);
  
  for(var i=0; i<proxylist.length; i++) {
    var value = proxylist[i];
    if ( localHostOrDomainIs(host, value) ) { return "PROXY "+proxyserver;}
   }
 //for(var i=0; i<reglist.length; i++) {
 // var value = reglist[i];
 //  if ( shExpMatch(url, value) ) { return "PROXY "+proxyserver;}
 // }
    
return "DIRECT";
}
