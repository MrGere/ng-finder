!function(a,b){return"function"==typeof define&&define.amd?(define("ngFinder",["jquery","angular","elfinder"],function(a,c){return b(c)}),void 0):b(a)}(angular||null,function(a){return a.module("ngFinder",[]).directive("elFinder",function(){return{restrict:"C",scope:{file:"=",onSelect:"&select"},controller:["$scope",function(a){a.selectFile=function(b){var c=a.$parent.fieldName,d=a.$parent.window;d.document.forms[0].elements[c].value=b,$("#elfinder").hide()}}],link:function(b,c,d){var e={toolbar:d.toolbar||"mkdir,mkfile,upload|open,download|info|copy,cut,paste|rename,rm|view|help",navbar:d.contextmenuNavbar||"open,|,copy,cut,paste,|,rm,|,info",cwd:d.contextmenuCwd||"reload,back,|,upload,mkdir,mkfile,paste,|,info",files:d.contextmenuFiles||"open,download,|,copy,cut,paste,|,rm,edit,rename,|,info"},f={allowShortcuts:!1,rememberLastDir:!0,uiOptions:{toolbar:e.toolbar.split("|").map(function(a){return a.split(",")})},contextmenu:{navbar:e.navbar.split(","),cwd:e.cwd.split(","),files:e.files.split(",")},url:d.url||"/elfinder",commandsOptions:{getfile:{onlyURL:!1}}};d.select&&(f.contextmenu.files.unshift("getfile"),f.onlyMimes=["image"],f.getFileCallback=function(a){$("#elfinder").hide(),b.onSelect({$file:a})}),$(c).elfinder(f),$(".elfinder-toolbar",c).addClass("btn-toolbar"),$(".elfinder-buttonset",c).addClass("btn-group"),$(".elfinder-button",c).addClass("btn");var g={back:"arrow-left",forward:"arrow-right",mkdir:"plus-sign",mkfile:"file",upload:"upload",open:"folder-open",download:"download-alt",getfile:"download",info:"info-sign",quicklook:"eye-open",rm:"trash",rename:"pencil",edit:"pencil",resize:"fullscreen",view:"th",sort:"sort",help:"question-sign"};$(".elfinder-button-icon-copy",c).removeClass("elfinder-button-icon").addClass("icon-cut"),$(".elfinder-button-icon-cut",c).removeClass("elfinder-button-icon").addClass("icon-copy"),$(".elfinder-button-icon-paste",c).removeClass("elfinder-button-icon").addClass("icon-paste"),a.forEach(g,function(a,b){$(".elfinder-button-icon-"+b,c).removeClass("elfinder-button-icon").addClass("glyphicon glyphicon-"+a)})}}}),a.module("ngFinder")});
//# sourceMappingURL=ng-finder.map