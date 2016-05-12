// A simple mime database.
var types = Object.create(null);
module.exports = function setup(defaultMime) {
  return function getMime(path) {
    path = path.trim();
    var index = path.lastIndexOf("/");
    if (index >= 0) {
      path = path.substr(index + 1);
    }
    index = path.lastIndexOf(".");
    if (index >= 0) {
      path = path.substr(index + 1);
    }
    return types[path.toLowerCase()] || defaultMime;
  };
};

function defineTypes(def, mime) {
  if (typeof def == "string") {
    types[def] = mime;
  }
  else if (Array.isArray(def)) {
    def.forEach(function(x) {
      defineTypes(x, mime);
    });
  }
  else {
    Object.keys(def).forEach(function(x) {
      defineTypes(def[x], mime + x);
    });
  }  
}
// Borrowed and passed around from who knows where, last grabbed from connect.
defineTypes({
  "application/": {
    "atom+xml": "atom",
    "candor": "can",
    "java-archive": ["ear", "jar", "war"],
    "javascript": "js",
    "json": "json",
    "mathml+xml": ["mathml", "mml"],
    "mbox": "mbox",
    "msword": ["doc", "dot"],
    "octet-stream": ["a", "bin", "class", "dmg", "gem", "iso", "pkg", "so"],
    "ogg": "ogg",
    "pdf": "pdf",
    "pgp-encrypted": "pgp",
    "pgp-signature": ["asc", "sig"],
    "postscript": ["ai", "eps", "ps"],
    "rdf+xml": "rdf",
    "rss+xml": "rss",
    "rtf": "rtf",
    "vnd.ms-cab-compressed": "cab",
    "vnd.ms-excel": "xls",
    "vnd.ms-htmlhelp": "chm",
    "vnd.ms-powerpoint": ["pps", "ppt"],
    "vnd.oasis.opendocument.presentation": "odp",
    "vnd.oasis.opendocument.spreadsheet": "ods",
    "vnd.oasis.opendocument.text": "odt",
    "wsdl+xml": "wsdl",
    "x-bittorrent": "torrent",
    "x-bytecode.lua": "luac",
    "x-bzip-compressed-tar": "tbz",
    "x-bzip2": "bz2",
    "x-debian-package": "deb",
    "x-dvi": "dvi",
    "x-font-ttf": "ttf",
    "x-gzip": "gz",
    "x-java-jnlp-file": "jnlp",
    "x-msdownload": ["bat", "com", "dll", "exe", "msi"],
    "x-rar-compressed": "rar",
    "x-redhat-package-manager": "rpm",
    "x-sh": "sh",
    "x-shockwave-flash": "swf",
    "x-tar": "tar",
    "x-tcl": "tcl",
    "x-tex": "tex",
    "x-texinfo": ["texi", "texinfo"],
    "x-topcloud": "tci",
    "x-web-app-manifest+json": "webapp",
    "x-x509-ca-cert": ["crt", "der", "pem"],
    "xhtml+xml": "xhtml",
    "xml": ["xml", "xsl"],
    "xml-dtd": "dtd",
    "xslt+xml": "xslt",
    "zip": "zip"
  },
  "audio/": {
    "basic": ["au", "snd"],
    "midi": ["mid", "midi"],
    "mpeg": "mp3",
    "x-aiff": ["aif", "aiff"],
    "x-mpegurl": "m3u",
    "x-ms-wma": "wma",
    "x-pn-realaudio": ["ra", "ram"],
    "x-wav": "wav"
  },
  "image/": {
    "bmp": "bmp",
    "gif": "gif",
    "jpeg": ["jpeg", "jpg"],
    "png": "png",
    "svg+xml": ["svg", "svgz"],
    "tiff": ["tif", "tiff"],
    "vnd.adobe.photoshop": "psd",
    "vnd.djvu": ["djv", "djvu"],
    "vnd.microsoft.icon": "ico",
    "x-portable-anymap": "pnm",
    "x-portable-bitmap": "pbm",
    "x-portable-graymap": "pgm",
    "x-portable-pixmap": "ppm",
    "x-xbitmap": "xbm",
    "x-xpixmap": "xpm"
  },
  "message/rfc822": ["eml", "mime"],
  "model/vrml": ["vrml", "wrl"],
  "text/": {
    "cache-manifest": "manifest",
    "calendar": ["ics", "ifb"],
    "css": ["css", "less"],
    "csv": "csv",
    "html": ["htm", "html"],
    "plain": ["conf", "log", "text", "txt"],
    "sgml": ["sgm", "sgml"],
    "troff": ["man", "mdoc", "me", "ms", "roff", "t", "tr"],
    "x-asm": ["asm", "s"],
    "x-c": ["cpp", "cxx"],
    "x-c++hdr": "hh",
    "x-c++src": "cc",
    "x-chdr": "h",
    "x-csrc": "c",
    "x-diff": "diff",
    "x-fortran": ["f", "f77", "f90", "for"],
    "x-java-source": "java",
    "x-makefile": "makefile",
    "x-markdown": ["markdown", "md"],
    "x-pascal": ["p", "pas"],
    "x-script.lua": "lua",
    "x-script.perl": "pl",
    "x-script.perl-module": "pm",
    "x-script.python": ["gyp", "gypi", "py"],
    "x-script.ruby": ["gemspec", "rake", "rb", "ru"],
    "x-vcalendar": "vcs",
    "x-vcard": "vcf",
    "yaml": ["yaml", "yml"]
  },
  "video/": {
    "3gpp": "3gp",
    "mp4": ["m4v", "mp4", "mp4v"],
    "mpeg": ["mpeg", "mpg"],
    "quicktime": ["mov", "qt"],
    "webm": "webm",
    "x-flv": "flv",
    "x-mng": "mng",
    "x-ms-asf": ["asf", "asx"],
    "x-ms-wmv": "wmv",
    "x-ms-wmx": "wmx",
    "x-msvideo": "avi"
  }
}, "");
