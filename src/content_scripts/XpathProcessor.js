function XpathProcessor(){
    this.getElementByXpath=function(path){
        return document.evaluate(path, document, null, 9, null).singleNodeValue;
    };

    this.getElementTreeXPath=function(element){
        var paths = [];
        for (; element && element.nodeType == 1; element = element.parentNode){
            var index = 0;
            for (var sibling = element.previousSibling; sibling; sibling = sibling.previousSibling){
                if (sibling.nodeType == Node.DOCUMENT_TYPE_NODE)
                    continue;
                if (sibling.nodeName == element.nodeName)
                    ++index;
            }
            var tagName = element.nodeName.toLowerCase();
            var pathIndex = (index ? "[" + (index+1) + "]" : "");
            paths.splice(0, 0, tagName + pathIndex);
        }
        return paths.length ? "/" + paths.join("/") : null;
    };


    this.getElementXPath=function(element){
        if (element && element.id)
            return '//*[@id="' + element.id + '"]';
        else
            return this.getElementTreeXPath(element);
    };

    this.getXPath=function(element){
        var paths = [];
        for (; element && element.nodeType == 1; element = element.parentNode){
            var index = 0;
            for (var sibling = element.previousSibling; sibling; sibling = sibling.previousSibling){
                if (sibling.nodeType == Node.DOCUMENT_TYPE_NODE)
                    continue;
                if (sibling.nodeName == element.nodeName)
                    ++index;
            }
            var tagName = element.nodeName.toLowerCase();
            var unique=true;
            for (sibling = element.nextSibling; sibling; sibling = sibling.nextSibling){
                if (sibling.nodeType == Node.DOCUMENT_TYPE_NODE) continue;
                if (sibling.nodeName == element.nodeName){
                    unique=false;
                    break;
                }
            }
            var pathIndex = ( !unique ? "[" + (index+1) + "]" : "");
            paths.splice(0, 0, tagName + pathIndex);
        }
        return paths.length ? "/" + paths.join("/") : null;
    };


    this.clearXpath=function(xpath){
        return xpath.replace(/\d+/g, "*");
    };

    this.xPathToCss=function(xpath) {
        return xpath
            .replace(/\[(\d+?)\]/g, function(s,m1){ return '['+(m1-1)+']'; })
            .replace(/\/{2}/g, '')
            .replace(/\/+/g, ' > ')
            .replace(/@/g, '')
            .replace(/\[(\d+)\]/g, ':eq($1)')
            .replace(/^\s+/, '');
    }

}