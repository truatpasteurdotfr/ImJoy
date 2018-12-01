(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-2d2244a1"],{e000:function(e,t,n){"use strict";n.r(t);var r,i,o,u,a,s,c,f,d=monaco.Promise,l=12e4,g=function(){function e(e){var t=this;this._defaults=e,this._worker=null,this._idleCheckInterval=setInterval(function(){return t._checkIfIdle()},3e4),this._lastUsedTime=0,this._configChangeListener=this._defaults.onDidChange(function(){return t._stopWorker()})}return e.prototype._stopWorker=function(){this._worker&&(this._worker.dispose(),this._worker=null),this._client=null},e.prototype.dispose=function(){clearInterval(this._idleCheckInterval),this._configChangeListener.dispose(),this._stopWorker()},e.prototype._checkIfIdle=function(){if(this._worker){var e=Date.now()-this._lastUsedTime;e>l&&this._stopWorker()}},e.prototype._getClient=function(){return this._lastUsedTime=Date.now(),this._client||(this._worker=monaco.editor.createWebWorker({moduleId:"vs/language/html/htmlWorker",createData:{languageSettings:this._defaults.options,languageId:this._defaults.languageId},label:this._defaults.languageId}),this._client=this._worker.getProxy()),this._client},e.prototype.getLanguageServiceWorker=function(){for(var e,t=this,n=[],r=0;r<arguments.length;r++)n[r]=arguments[r];return h(this._getClient().then(function(t){e=t}).then(function(e){return t._worker.withSyncedResources(n)}).then(function(t){return e}))},e}();function h(e){var t,n,r=new d(function(e,r){t=e,n=r},function(){});return e.then(t,n),r}(function(e){function t(e,t){return{line:e,character:t}}function n(e){var t=e;return L.defined(t)&&L.number(t.line)&&L.number(t.character)}e.create=t,e.is=n})(r||(r={})),function(e){function t(e,t,n,i){if(L.number(e)&&L.number(t)&&L.number(n)&&L.number(i))return{start:r.create(e,t),end:r.create(n,i)};if(r.is(e)&&r.is(t))return{start:e,end:t};throw new Error("Range#create called with invalid arguments["+e+", "+t+", "+n+", "+i+"]")}function n(e){var t=e;return L.defined(t)&&r.is(t.start)&&r.is(t.end)}e.create=t,e.is=n}(i||(i={})),function(e){function t(e,t){return{uri:e,range:t}}function n(e){var t=e;return L.defined(t)&&i.is(t.range)&&(L.string(t.uri)||L.undefined(t.uri))}e.create=t,e.is=n}(o||(o={})),function(e){e.Error=1,e.Warning=2,e.Information=3,e.Hint=4}(u||(u={})),function(e){function t(e,t,n,r,i){var o={range:e,message:t};return L.defined(n)&&(o.severity=n),L.defined(r)&&(o.code=r),L.defined(i)&&(o.source=i),o}function n(e){var t=e;return L.defined(t)&&i.is(t.range)&&L.string(t.message)&&(L.number(t.severity)||L.undefined(t.severity))&&(L.number(t.code)||L.string(t.code)||L.undefined(t.code))&&(L.string(t.source)||L.undefined(t.source))}e.create=t,e.is=n}(a||(a={})),function(e){function t(e,t){for(var n=[],r=2;r<arguments.length;r++)n[r-2]=arguments[r];var i={title:e,command:t};return L.defined(n)&&n.length>0&&(i.arguments=n),i}function n(e){var t=e;return L.defined(t)&&L.string(t.title)&&L.string(t.title)}e.create=t,e.is=n}(s||(s={})),function(e){function t(e,t){return{range:e,newText:t}}function n(e,t){return{range:{start:e,end:e},newText:t}}function r(e){return{range:e,newText:""}}e.replace=t,e.insert=n,e.del=r}(c||(c={})),function(e){function t(e,t){return{textDocument:e,edits:t}}function n(e){var t=e;return L.defined(t)&&m.is(t.textDocument)&&Array.isArray(t.edits)}e.create=t,e.is=n}(f||(f={}));var p,m,v,_,b,w,y,k,x,C,E,I,S,T,M,P,O,D,F=function(){function e(e){this.edits=e}return e.prototype.insert=function(e,t){this.edits.push(c.insert(e,t))},e.prototype.replace=function(e,t){this.edits.push(c.replace(e,t))},e.prototype.delete=function(e){this.edits.push(c.del(e))},e.prototype.add=function(e){this.edits.push(e)},e.prototype.all=function(){return this.edits},e.prototype.clear=function(){this.edits.splice(0,this.edits.length)},e}();(function(){function e(e){var t=this;this._textEditChanges=Object.create(null),e&&(this._workspaceEdit=e,e.documentChanges?e.documentChanges.forEach(function(e){var n=new F(e.edits);t._textEditChanges[e.textDocument.uri]=n}):e.changes&&Object.keys(e.changes).forEach(function(n){var r=new F(e.changes[n]);t._textEditChanges[n]=r}))}Object.defineProperty(e.prototype,"edit",{get:function(){return this._workspaceEdit},enumerable:!0,configurable:!0}),e.prototype.getTextEditChange=function(e){if(m.is(e)){if(this._workspaceEdit||(this._workspaceEdit={documentChanges:[]}),!this._workspaceEdit.documentChanges)throw new Error("Workspace edit is not configured for versioned document changes.");var t=e,n=this._textEditChanges[t.uri];if(!n){var r=[],i={textDocument:t,edits:r};this._workspaceEdit.documentChanges.push(i),n=new F(r),this._textEditChanges[t.uri]=n}return n}if(this._workspaceEdit||(this._workspaceEdit={changes:Object.create(null)}),!this._workspaceEdit.changes)throw new Error("Workspace edit is not configured for normal text edit changes.");n=this._textEditChanges[e];if(!n){r=[];this._workspaceEdit.changes[e]=r,n=new F(r),this._textEditChanges[e]=n}return n}})();(function(e){function t(e){return{uri:e}}function n(e){var t=e;return L.defined(t)&&L.string(t.uri)}e.create=t,e.is=n})(p||(p={})),function(e){function t(e,t){return{uri:e,version:t}}function n(e){var t=e;return L.defined(t)&&L.string(t.uri)&&L.number(t.version)}e.create=t,e.is=n}(m||(m={})),function(e){function t(e,t,n,r){return{uri:e,languageId:t,version:n,text:r}}function n(e){var t=e;return L.defined(t)&&L.string(t.uri)&&L.string(t.languageId)&&L.number(t.version)&&L.string(t.text)}e.create=t,e.is=n}(v||(v={})),function(e){e.PlainText="plaintext",e.Markdown="markdown"}(_||(_={})),function(e){e.Text=1,e.Method=2,e.Function=3,e.Constructor=4,e.Field=5,e.Variable=6,e.Class=7,e.Interface=8,e.Module=9,e.Property=10,e.Unit=11,e.Value=12,e.Enum=13,e.Keyword=14,e.Snippet=15,e.Color=16,e.File=17,e.Reference=18,e.Folder=19,e.EnumMember=20,e.Constant=21,e.Struct=22,e.Event=23,e.Operator=24,e.TypeParameter=25}(b||(b={})),function(e){e.PlainText=1,e.Snippet=2}(w||(w={})),function(e){function t(e){return{label:e}}e.create=t}(y||(y={})),function(e){function t(e,t){return{items:e||[],isIncomplete:!!t}}e.create=t}(k||(k={})),function(e){function t(e){return e.replace(/[\\`*_{}[\]()#+\-.!]/g,"\\$&")}e.fromPlainText=t}(x||(x={})),function(e){function t(e,t){return t?{label:e,documentation:t}:{label:e}}e.create=t}(C||(C={})),function(e){function t(e,t){for(var n=[],r=2;r<arguments.length;r++)n[r-2]=arguments[r];var i={label:e};return L.defined(t)&&(i.documentation=t),L.defined(n)?i.parameters=n:i.parameters=[],i}e.create=t}(E||(E={})),function(e){e.Text=1,e.Read=2,e.Write=3}(I||(I={})),function(e){function t(e,t){var n={range:e};return L.number(t)&&(n.kind=t),n}e.create=t}(S||(S={})),function(e){e.File=1,e.Module=2,e.Namespace=3,e.Package=4,e.Class=5,e.Method=6,e.Property=7,e.Field=8,e.Constructor=9,e.Enum=10,e.Interface=11,e.Function=12,e.Variable=13,e.Constant=14,e.String=15,e.Number=16,e.Boolean=17,e.Array=18,e.Object=19,e.Key=20,e.Null=21,e.EnumMember=22,e.Struct=23,e.Event=24,e.Operator=25,e.TypeParameter=26}(T||(T={})),function(e){function t(e,t,n,r,i){var o={name:e,kind:t,location:{uri:r,range:n}};return i&&(o.containerName=i),o}e.create=t}(M||(M={})),function(e){function t(e){return{diagnostics:e}}function n(e){var t=e;return L.defined(t)&&L.typedArray(t.diagnostics,a.is)}e.create=t,e.is=n}(P||(P={})),function(e){function t(e,t){var n={range:e};return L.defined(t)&&(n.data=t),n}function n(e){var t=e;return L.defined(t)&&i.is(t.range)&&(L.undefined(t.command)||s.is(t.command))}e.create=t,e.is=n}(O||(O={})),function(e){function t(e,t){return{tabSize:e,insertSpaces:t}}function n(e){var t=e;return L.defined(t)&&L.number(t.tabSize)&&L.boolean(t.insertSpaces)}e.create=t,e.is=n}(D||(D={}));var W=function(){function e(){}return e}();(function(e){function t(e,t){return{range:e,target:t}}function n(e){var t=e;return L.defined(t)&&i.is(t.range)&&(L.undefined(t.target)||L.string(t.target))}e.create=t,e.is=n})(W||(W={}));var A,j;(function(e){function t(e,t,n,r){return new R(e,t,n,r)}function n(e){var t=e;return!!(L.defined(t)&&L.string(t.uri)&&(L.undefined(t.languageId)||L.string(t.languageId))&&L.number(t.lineCount)&&L.func(t.getText)&&L.func(t.positionAt)&&L.func(t.offsetAt))}function r(e,t){for(var n=e.getText(),r=i(t,function(e,t){var n=e.range.start.line-t.range.start.line;return 0===n?e.range.start.character-t.range.start.character:0}),o=n.length,u=r.length-1;u>=0;u--){var a=r[u],s=e.offsetAt(a.range.start),c=e.offsetAt(a.range.end);if(!(c<=o))throw new Error("Ovelapping edit");n=n.substring(0,s)+a.newText+n.substring(c,n.length),o=s}return n}function i(e,t){if(e.length<=1)return e;var n=e.length/2|0,r=e.slice(0,n),o=e.slice(n);i(r,t),i(o,t);var u=0,a=0,s=0;while(u<r.length&&a<o.length){var c=t(r[u],o[a]);e[s++]=c<=0?r[u++]:o[a++]}while(u<r.length)e[s++]=r[u++];while(a<o.length)e[s++]=o[a++];return e}e.create=t,e.is=n,e.applyEdits=r})(A||(A={})),function(e){e.Manual=1,e.AfterDelay=2,e.FocusOut=3}(j||(j={}));var L,R=function(){function e(e,t,n,r){this._uri=e,this._languageId=t,this._version=n,this._content=r,this._lineOffsets=null}return Object.defineProperty(e.prototype,"uri",{get:function(){return this._uri},enumerable:!0,configurable:!0}),Object.defineProperty(e.prototype,"languageId",{get:function(){return this._languageId},enumerable:!0,configurable:!0}),Object.defineProperty(e.prototype,"version",{get:function(){return this._version},enumerable:!0,configurable:!0}),e.prototype.getText=function(e){if(e){var t=this.offsetAt(e.start),n=this.offsetAt(e.end);return this._content.substring(t,n)}return this._content},e.prototype.update=function(e,t){this._content=e.text,this._version=t,this._lineOffsets=null},e.prototype.getLineOffsets=function(){if(null===this._lineOffsets){for(var e=[],t=this._content,n=!0,r=0;r<t.length;r++){n&&(e.push(r),n=!1);var i=t.charAt(r);n="\r"===i||"\n"===i,"\r"===i&&r+1<t.length&&"\n"===t.charAt(r+1)&&r++}n&&t.length>0&&e.push(t.length),this._lineOffsets=e}return this._lineOffsets},e.prototype.positionAt=function(e){e=Math.max(Math.min(e,this._content.length),0);var t=this.getLineOffsets(),n=0,i=t.length;if(0===i)return r.create(0,e);while(n<i){var o=Math.floor((n+i)/2);t[o]>e?i=o:n=o+1}var u=n-1;return r.create(u,e-t[u])},e.prototype.offsetAt=function(e){var t=this.getLineOffsets();if(e.line>=t.length)return this._content.length;if(e.line<0)return 0;var n=t[e.line],r=e.line+1<t.length?t[e.line+1]:this._content.length;return Math.max(Math.min(n+e.character,r),n)},Object.defineProperty(e.prototype,"lineCount",{get:function(){return this.getLineOffsets().length},enumerable:!0,configurable:!0}),e}();(function(e){var t=Object.prototype.toString;function n(e){return"undefined"!==typeof e}function r(e){return"undefined"===typeof e}function i(e){return!0===e||!1===e}function o(e){return"[object String]"===t.call(e)}function u(e){return"[object Number]"===t.call(e)}function a(e){return"[object Function]"===t.call(e)}function s(e,t){return Array.isArray(e)&&e.every(t)}e.defined=n,e.undefined=r,e.boolean=i,e.string=o,e.number=u,e.func=a,e.typedArray=s})(L||(L={}));monaco.Uri;var V=monaco.Range,N=function(){function e(e,t,n){var r=this;this._languageId=e,this._worker=t,this._disposables=[],this._listener=Object.create(null);var i=function(e){var t,n=e.getModeId();n===r._languageId&&(r._listener[e.uri.toString()]=e.onDidChangeContent(function(){clearTimeout(t),t=setTimeout(function(){return r._doValidate(e.uri,n)},500)}),r._doValidate(e.uri,n))},o=function(e){monaco.editor.setModelMarkers(e,r._languageId,[]);var t=e.uri.toString(),n=r._listener[t];n&&(n.dispose(),delete r._listener[t])};this._disposables.push(monaco.editor.onDidCreateModel(i)),this._disposables.push(monaco.editor.onWillDisposeModel(function(e){o(e)})),this._disposables.push(monaco.editor.onDidChangeModelLanguage(function(e){o(e.model),i(e.model)})),this._disposables.push(n.onDidChange(function(e){monaco.editor.getModels().forEach(function(e){e.getModeId()===r._languageId&&(o(e),i(e))})})),this._disposables.push({dispose:function(){for(var e in r._listener)r._listener[e].dispose()}}),monaco.editor.getModels().forEach(i)}return e.prototype.dispose=function(){this._disposables.forEach(function(e){return e&&e.dispose()}),this._disposables=[]},e.prototype._doValidate=function(e,t){this._worker(e).then(function(n){return n.doValidation(e.toString()).then(function(n){var r=n.map(function(t){return H(e,t)});monaco.editor.setModelMarkers(monaco.editor.getModel(e),t,r)})}).then(void 0,function(e){console.error(e)})},e}();function U(e){switch(e){case u.Error:return monaco.MarkerSeverity.Error;case u.Warning:return monaco.MarkerSeverity.Warning;case u.Information:return monaco.MarkerSeverity.Info;case u.Hint:return monaco.MarkerSeverity.Hint;default:return monaco.MarkerSeverity.Info}}function H(e,t){var n="number"===typeof t.code?String(t.code):t.code;return{severity:U(t.severity),startLineNumber:t.range.start.line+1,startColumn:t.range.start.character+1,endLineNumber:t.range.end.line+1,endColumn:t.range.end.character+1,message:t.message,code:n,source:t.source}}function K(e){if(e)return{character:e.column-1,line:e.lineNumber-1}}function z(e){if(e)return{start:K(e.getStartPosition()),end:K(e.getEndPosition())}}function J(e){if(e)return new V(e.start.line+1,e.start.character+1,e.end.line+1,e.end.character+1)}function q(e){var t=monaco.languages.CompletionItemKind;switch(e){case b.Text:return t.Text;case b.Method:return t.Method;case b.Function:return t.Function;case b.Constructor:return t.Constructor;case b.Field:return t.Field;case b.Variable:return t.Variable;case b.Class:return t.Class;case b.Interface:return t.Interface;case b.Module:return t.Module;case b.Property:return t.Property;case b.Unit:return t.Unit;case b.Value:return t.Value;case b.Enum:return t.Enum;case b.Keyword:return t.Keyword;case b.Snippet:return t.Snippet;case b.Color:return t.Color;case b.File:return t.File;case b.Reference:return t.Reference}return t.Property}function B(e){if(e)return{range:J(e.range),text:e.newText}}var $=function(){function e(e){this._worker=e}return Object.defineProperty(e.prototype,"triggerCharacters",{get:function(){return[".",":","<",'"',"=","/"]},enumerable:!0,configurable:!0}),e.prototype.provideCompletionItems=function(e,t,n){e.getWordUntilPosition(t);var r=e.uri;return te(n,this._worker(r).then(function(e){return e.doComplete(r.toString(),K(t))}).then(function(e){if(e){var t=e.items.map(function(e){var t={label:e.label,insertText:e.insertText,sortText:e.sortText,filterText:e.filterText,documentation:e.documentation,detail:e.detail,kind:q(e.kind)};return e.textEdit&&(t.range=J(e.textEdit.range),t.insertText=e.textEdit.newText),e.insertTextFormat===w.Snippet&&(t.insertText={value:t.insertText}),t});return{isIncomplete:e.isIncomplete,items:t}}}))},e}();function G(e){var t=monaco.languages.DocumentHighlightKind;switch(e){case I.Read:return t.Read;case I.Write:return t.Write;case I.Text:return t.Text}return t.Text}var Q=function(){function e(e){this._worker=e}return e.prototype.provideDocumentHighlights=function(e,t,n){var r=e.uri;return te(n,this._worker(r).then(function(e){return e.findDocumentHighlights(r.toString(),K(t))}).then(function(e){if(e)return e.map(function(e){return{range:J(e.range),kind:G(e.kind)}})}))},e}(),X=function(){function e(e){this._worker=e}return e.prototype.provideLinks=function(e,t){var n=e.uri;return te(t,this._worker(n).then(function(e){return e.findDocumentLinks(n.toString())}).then(function(e){if(e)return e.map(function(e){return{range:J(e.range),url:e.target}})}))},e}();function Y(e){return{tabSize:e.tabSize,insertSpaces:e.insertSpaces}}var Z=function(){function e(e){this._worker=e}return e.prototype.provideDocumentFormattingEdits=function(e,t,n){var r=e.uri;return te(n,this._worker(r).then(function(e){return e.format(r.toString(),null,Y(t)).then(function(e){if(e&&0!==e.length)return e.map(B)})}))},e}(),ee=function(){function e(e){this._worker=e}return e.prototype.provideDocumentRangeFormattingEdits=function(e,t,n,r){var i=e.uri;return te(r,this._worker(i).then(function(e){return e.format(i.toString(),z(t),Y(n)).then(function(e){if(e&&0!==e.length)return e.map(B)})}))},e}();function te(e,t){return t.cancel&&e.onCancellationRequested(function(){return t.cancel()}),t}function ne(e){var t=new g(e),n=function(){for(var e=[],n=0;n<arguments.length;n++)e[n]=arguments[n];return t.getLanguageServiceWorker.apply(t,e)},r=e.languageId;monaco.languages.registerCompletionItemProvider(r,new $(n)),monaco.languages.registerDocumentHighlightProvider(r,new Q(n)),monaco.languages.registerLinkProvider(r,new X(n)),"html"===r&&(monaco.languages.registerDocumentFormattingEditProvider(r,new Z(n)),monaco.languages.registerDocumentRangeFormattingEditProvider(r,new ee(n)),new N(r,n,e))}n.d(t,"setupMode",function(){return ne})}}]);
//# sourceMappingURL=chunk-2d2244a1.7ed8779e.js.map