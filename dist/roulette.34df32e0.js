// modules are defined as an array
// [ module function, map of requires ]
//
// map of requires is short require name -> numeric require
//
// anything defined in a previous bundle is accessed via the
// orig method which is the require for previous bundles

(function (
  modules,
  entry,
  mainEntry,
  parcelRequireName,
  externals,
  distDir,
  publicUrl,
  devServer
) {
  /* eslint-disable no-undef */
  var globalObject =
    typeof globalThis !== 'undefined'
      ? globalThis
      : typeof self !== 'undefined'
      ? self
      : typeof window !== 'undefined'
      ? window
      : typeof global !== 'undefined'
      ? global
      : {};
  /* eslint-enable no-undef */

  // Save the require from previous bundle to this closure if any
  var previousRequire =
    typeof globalObject[parcelRequireName] === 'function' &&
    globalObject[parcelRequireName];

  var importMap = previousRequire.i || {};
  var cache = previousRequire.cache || {};
  // Do not use `require` to prevent Webpack from trying to bundle this call
  var nodeRequire =
    typeof module !== 'undefined' &&
    typeof module.require === 'function' &&
    module.require.bind(module);

  function newRequire(name, jumped) {
    if (!cache[name]) {
      if (!modules[name]) {
        if (externals[name]) {
          return externals[name];
        }
        // if we cannot find the module within our internal map or
        // cache jump to the current global require ie. the last bundle
        // that was added to the page.
        var currentRequire =
          typeof globalObject[parcelRequireName] === 'function' &&
          globalObject[parcelRequireName];
        if (!jumped && currentRequire) {
          return currentRequire(name, true);
        }

        // If there are other bundles on this page the require from the
        // previous one is saved to 'previousRequire'. Repeat this as
        // many times as there are bundles until the module is found or
        // we exhaust the require chain.
        if (previousRequire) {
          return previousRequire(name, true);
        }

        // Try the node require function if it exists.
        if (nodeRequire && typeof name === 'string') {
          return nodeRequire(name);
        }

        var err = new Error("Cannot find module '" + name + "'");
        err.code = 'MODULE_NOT_FOUND';
        throw err;
      }

      localRequire.resolve = resolve;
      localRequire.cache = {};

      var module = (cache[name] = new newRequire.Module(name));

      modules[name][0].call(
        module.exports,
        localRequire,
        module,
        module.exports,
        globalObject
      );
    }

    return cache[name].exports;

    function localRequire(x) {
      var res = localRequire.resolve(x);
      if (res === false) {
        return {};
      }
      // Synthesize a module to follow re-exports.
      if (Array.isArray(res)) {
        var m = {__esModule: true};
        res.forEach(function (v) {
          var key = v[0];
          var id = v[1];
          var exp = v[2] || v[0];
          var x = newRequire(id);
          if (key === '*') {
            Object.keys(x).forEach(function (key) {
              if (
                key === 'default' ||
                key === '__esModule' ||
                Object.prototype.hasOwnProperty.call(m, key)
              ) {
                return;
              }

              Object.defineProperty(m, key, {
                enumerable: true,
                get: function () {
                  return x[key];
                },
              });
            });
          } else if (exp === '*') {
            Object.defineProperty(m, key, {
              enumerable: true,
              value: x,
            });
          } else {
            Object.defineProperty(m, key, {
              enumerable: true,
              get: function () {
                if (exp === 'default') {
                  return x.__esModule ? x.default : x;
                }
                return x[exp];
              },
            });
          }
        });
        return m;
      }
      return newRequire(res);
    }

    function resolve(x) {
      var id = modules[name][1][x];
      return id != null ? id : x;
    }
  }

  function Module(moduleName) {
    this.id = moduleName;
    this.bundle = newRequire;
    this.require = nodeRequire;
    this.exports = {};
  }

  newRequire.isParcelRequire = true;
  newRequire.Module = Module;
  newRequire.modules = modules;
  newRequire.cache = cache;
  newRequire.parent = previousRequire;
  newRequire.distDir = distDir;
  newRequire.publicUrl = publicUrl;
  newRequire.devServer = devServer;
  newRequire.i = importMap;
  newRequire.register = function (id, exports) {
    modules[id] = [
      function (require, module) {
        module.exports = exports;
      },
      {},
    ];
  };

  // Only insert newRequire.load when it is actually used.
  // The code in this file is linted against ES5, so dynamic import is not allowed.
  function $parcel$resolve(url) {  url = importMap[url] || url;  return import.meta.resolve(distDir + url);}newRequire.resolve = $parcel$resolve;

  Object.defineProperty(newRequire, 'root', {
    get: function () {
      return globalObject[parcelRequireName];
    },
  });

  globalObject[parcelRequireName] = newRequire;

  for (var i = 0; i < entry.length; i++) {
    newRequire(entry[i]);
  }

  if (mainEntry) {
    // Expose entry point to Node, AMD or browser globals
    // Based on https://github.com/ForbesLindesay/umd/blob/master/template.js
    var mainExports = newRequire(mainEntry);

    // CommonJS
    if (typeof exports === 'object' && typeof module !== 'undefined') {
      module.exports = mainExports;

      // RequireJS
    } else if (typeof define === 'function' && define.amd) {
      define(function () {
        return mainExports;
      });
    }
  }
})({"9ZvZc":[function(require,module,exports,__globalThis) {
var global = arguments[3];
var HMR_HOST = null;
var HMR_PORT = null;
var HMR_SERVER_PORT = 1235;
var HMR_SECURE = false;
var HMR_ENV_HASH = "439701173a9199ea";
var HMR_USE_SSE = false;
module.bundle.HMR_BUNDLE_ID = "4b8ea06834df32e0";
"use strict";
/* global HMR_HOST, HMR_PORT, HMR_SERVER_PORT, HMR_ENV_HASH, HMR_SECURE, HMR_USE_SSE, chrome, browser, __parcel__import__, __parcel__importScripts__, ServiceWorkerGlobalScope */ /*::
import type {
  HMRAsset,
  HMRMessage,
} from '@parcel/reporter-dev-server/src/HMRServer.js';
interface ParcelRequire {
  (string): mixed;
  cache: {|[string]: ParcelModule|};
  hotData: {|[string]: mixed|};
  Module: any;
  parent: ?ParcelRequire;
  isParcelRequire: true;
  modules: {|[string]: [Function, {|[string]: string|}]|};
  HMR_BUNDLE_ID: string;
  root: ParcelRequire;
}
interface ParcelModule {
  hot: {|
    data: mixed,
    accept(cb: (Function) => void): void,
    dispose(cb: (mixed) => void): void,
    // accept(deps: Array<string> | string, cb: (Function) => void): void,
    // decline(): void,
    _acceptCallbacks: Array<(Function) => void>,
    _disposeCallbacks: Array<(mixed) => void>,
  |};
}
interface ExtensionContext {
  runtime: {|
    reload(): void,
    getURL(url: string): string;
    getManifest(): {manifest_version: number, ...};
  |};
}
declare var module: {bundle: ParcelRequire, ...};
declare var HMR_HOST: string;
declare var HMR_PORT: string;
declare var HMR_SERVER_PORT: string;
declare var HMR_ENV_HASH: string;
declare var HMR_SECURE: boolean;
declare var HMR_USE_SSE: boolean;
declare var chrome: ExtensionContext;
declare var browser: ExtensionContext;
declare var __parcel__import__: (string) => Promise<void>;
declare var __parcel__importScripts__: (string) => Promise<void>;
declare var globalThis: typeof self;
declare var ServiceWorkerGlobalScope: Object;
*/ var OVERLAY_ID = '__parcel__error__overlay__';
var OldModule = module.bundle.Module;
function Module(moduleName) {
    OldModule.call(this, moduleName);
    this.hot = {
        data: module.bundle.hotData[moduleName],
        _acceptCallbacks: [],
        _disposeCallbacks: [],
        accept: function(fn) {
            this._acceptCallbacks.push(fn || function() {});
        },
        dispose: function(fn) {
            this._disposeCallbacks.push(fn);
        }
    };
    module.bundle.hotData[moduleName] = undefined;
}
module.bundle.Module = Module;
module.bundle.hotData = {};
var checkedAssets /*: {|[string]: boolean|} */ , disposedAssets /*: {|[string]: boolean|} */ , assetsToDispose /*: Array<[ParcelRequire, string]> */ , assetsToAccept /*: Array<[ParcelRequire, string]> */ , bundleNotFound = false;
function getHostname() {
    return HMR_HOST || (typeof location !== 'undefined' && location.protocol.indexOf('http') === 0 ? location.hostname : 'localhost');
}
function getPort() {
    return HMR_PORT || (typeof location !== 'undefined' ? location.port : HMR_SERVER_PORT);
}
// eslint-disable-next-line no-redeclare
let WebSocket = globalThis.WebSocket;
if (!WebSocket && typeof module.bundle.root === 'function') try {
    // eslint-disable-next-line no-global-assign
    WebSocket = module.bundle.root('ws');
} catch  {
// ignore.
}
var hostname = getHostname();
var port = getPort();
var protocol = HMR_SECURE || typeof location !== 'undefined' && location.protocol === 'https:' && ![
    'localhost',
    '127.0.0.1',
    '0.0.0.0'
].includes(hostname) ? 'wss' : 'ws';
// eslint-disable-next-line no-redeclare
var parent = module.bundle.parent;
if (!parent || !parent.isParcelRequire) {
    // Web extension context
    var extCtx = typeof browser === 'undefined' ? typeof chrome === 'undefined' ? null : chrome : browser;
    // Safari doesn't support sourceURL in error stacks.
    // eval may also be disabled via CSP, so do a quick check.
    var supportsSourceURL = false;
    try {
        (0, eval)('throw new Error("test"); //# sourceURL=test.js');
    } catch (err) {
        supportsSourceURL = err.stack.includes('test.js');
    }
    var ws;
    if (HMR_USE_SSE) ws = new EventSource('/__parcel_hmr');
    else try {
        // If we're running in the dev server's node runner, listen for messages on the parent port.
        let { workerData, parentPort } = module.bundle.root('node:worker_threads') /*: any*/ ;
        if (workerData !== null && workerData !== void 0 && workerData.__parcel) {
            parentPort.on('message', async (message)=>{
                try {
                    await handleMessage(message);
                    parentPort.postMessage('updated');
                } catch  {
                    parentPort.postMessage('restart');
                }
            });
            // After the bundle has finished running, notify the dev server that the HMR update is complete.
            queueMicrotask(()=>parentPort.postMessage('ready'));
        }
    } catch  {
        if (typeof WebSocket !== 'undefined') try {
            ws = new WebSocket(protocol + '://' + hostname + (port ? ':' + port : '') + '/');
        } catch (err) {
            // Ignore cloudflare workers error.
            if (err.message && !err.message.includes('Disallowed operation called within global scope')) console.error(err.message);
        }
    }
    if (ws) {
        // $FlowFixMe
        ws.onmessage = async function(event /*: {data: string, ...} */ ) {
            var data /*: HMRMessage */  = JSON.parse(event.data);
            await handleMessage(data);
        };
        if (ws instanceof WebSocket) {
            ws.onerror = function(e) {
                if (e.message) console.error(e.message);
            };
            ws.onclose = function() {
                console.warn("[parcel] \uD83D\uDEA8 Connection to the HMR server was lost");
            };
        }
    }
}
async function handleMessage(data /*: HMRMessage */ ) {
    checkedAssets = {} /*: {|[string]: boolean|} */ ;
    disposedAssets = {} /*: {|[string]: boolean|} */ ;
    assetsToAccept = [];
    assetsToDispose = [];
    bundleNotFound = false;
    if (data.type === 'reload') fullReload();
    else if (data.type === 'update') {
        // Remove error overlay if there is one
        if (typeof document !== 'undefined') removeErrorOverlay();
        let assets = data.assets;
        // Handle HMR Update
        let handled = assets.every((asset)=>{
            return asset.type === 'css' || asset.type === 'js' && hmrAcceptCheck(module.bundle.root, asset.id, asset.depsByBundle);
        });
        // Dispatch a custom event in case a bundle was not found. This might mean
        // an asset on the server changed and we should reload the page. This event
        // gives the client an opportunity to refresh without losing state
        // (e.g. via React Server Components). If e.preventDefault() is not called,
        // we will trigger a full page reload.
        if (handled && bundleNotFound && assets.some((a)=>a.envHash !== HMR_ENV_HASH) && typeof window !== 'undefined' && typeof CustomEvent !== 'undefined') handled = !window.dispatchEvent(new CustomEvent('parcelhmrreload', {
            cancelable: true
        }));
        if (handled) {
            console.clear();
            // Dispatch custom event so other runtimes (e.g React Refresh) are aware.
            if (typeof window !== 'undefined' && typeof CustomEvent !== 'undefined') window.dispatchEvent(new CustomEvent('parcelhmraccept'));
            await hmrApplyUpdates(assets);
            hmrDisposeQueue();
            // Run accept callbacks. This will also re-execute other disposed assets in topological order.
            let processedAssets = {};
            for(let i = 0; i < assetsToAccept.length; i++){
                let id = assetsToAccept[i][1];
                if (!processedAssets[id]) {
                    hmrAccept(assetsToAccept[i][0], id);
                    processedAssets[id] = true;
                }
            }
        } else fullReload();
    }
    if (data.type === 'error') {
        // Log parcel errors to console
        for (let ansiDiagnostic of data.diagnostics.ansi){
            let stack = ansiDiagnostic.codeframe ? ansiDiagnostic.codeframe : ansiDiagnostic.stack;
            console.error("\uD83D\uDEA8 [parcel]: " + ansiDiagnostic.message + '\n' + stack + '\n\n' + ansiDiagnostic.hints.join('\n'));
        }
        if (typeof document !== 'undefined') {
            // Render the fancy html overlay
            removeErrorOverlay();
            var overlay = createErrorOverlay(data.diagnostics.html);
            // $FlowFixMe
            document.body.appendChild(overlay);
        }
    }
}
function removeErrorOverlay() {
    var overlay = document.getElementById(OVERLAY_ID);
    if (overlay) {
        overlay.remove();
        console.log("[parcel] \u2728 Error resolved");
    }
}
function createErrorOverlay(diagnostics) {
    var overlay = document.createElement('div');
    overlay.id = OVERLAY_ID;
    let errorHTML = '<div style="background: black; opacity: 0.85; font-size: 16px; color: white; position: fixed; height: 100%; width: 100%; top: 0px; left: 0px; padding: 30px; font-family: Menlo, Consolas, monospace; z-index: 9999;">';
    for (let diagnostic of diagnostics){
        let stack = diagnostic.frames.length ? diagnostic.frames.reduce((p, frame)=>{
            return `${p}
<a href="${protocol === 'wss' ? 'https' : 'http'}://${hostname}:${port}/__parcel_launch_editor?file=${encodeURIComponent(frame.location)}" style="text-decoration: underline; color: #888" onclick="fetch(this.href); return false">${frame.location}</a>
${frame.code}`;
        }, '') : diagnostic.stack;
        errorHTML += `
      <div>
        <div style="font-size: 18px; font-weight: bold; margin-top: 20px;">
          \u{1F6A8} ${diagnostic.message}
        </div>
        <pre>${stack}</pre>
        <div>
          ${diagnostic.hints.map((hint)=>"<div>\uD83D\uDCA1 " + hint + '</div>').join('')}
        </div>
        ${diagnostic.documentation ? `<div>\u{1F4DD} <a style="color: violet" href="${diagnostic.documentation}" target="_blank">Learn more</a></div>` : ''}
      </div>
    `;
    }
    errorHTML += '</div>';
    overlay.innerHTML = errorHTML;
    return overlay;
}
function fullReload() {
    if (typeof location !== 'undefined' && 'reload' in location) location.reload();
    else if (typeof extCtx !== 'undefined' && extCtx && extCtx.runtime && extCtx.runtime.reload) extCtx.runtime.reload();
    else try {
        let { workerData, parentPort } = module.bundle.root('node:worker_threads') /*: any*/ ;
        if (workerData !== null && workerData !== void 0 && workerData.__parcel) parentPort.postMessage('restart');
    } catch (err) {
        console.error("[parcel] \u26A0\uFE0F An HMR update was not accepted. Please restart the process.");
    }
}
function getParents(bundle, id) /*: Array<[ParcelRequire, string]> */ {
    var modules = bundle.modules;
    if (!modules) return [];
    var parents = [];
    var k, d, dep;
    for(k in modules)for(d in modules[k][1]){
        dep = modules[k][1][d];
        if (dep === id || Array.isArray(dep) && dep[dep.length - 1] === id) parents.push([
            bundle,
            k
        ]);
    }
    if (bundle.parent) parents = parents.concat(getParents(bundle.parent, id));
    return parents;
}
function updateLink(link) {
    var href = link.getAttribute('href');
    if (!href) return;
    var newLink = link.cloneNode();
    newLink.onload = function() {
        if (link.parentNode !== null) // $FlowFixMe
        link.parentNode.removeChild(link);
    };
    newLink.setAttribute('href', // $FlowFixMe
    href.split('?')[0] + '?' + Date.now());
    // $FlowFixMe
    link.parentNode.insertBefore(newLink, link.nextSibling);
}
var cssTimeout = null;
function reloadCSS() {
    if (cssTimeout || typeof document === 'undefined') return;
    cssTimeout = setTimeout(function() {
        var links = document.querySelectorAll('link[rel="stylesheet"]');
        for(var i = 0; i < links.length; i++){
            // $FlowFixMe[incompatible-type]
            var href /*: string */  = links[i].getAttribute('href');
            var hostname = getHostname();
            var servedFromHMRServer = hostname === 'localhost' ? new RegExp('^(https?:\\/\\/(0.0.0.0|127.0.0.1)|localhost):' + getPort()).test(href) : href.indexOf(hostname + ':' + getPort());
            var absolute = /^https?:\/\//i.test(href) && href.indexOf(location.origin) !== 0 && !servedFromHMRServer;
            if (!absolute) updateLink(links[i]);
        }
        cssTimeout = null;
    }, 50);
}
function hmrDownload(asset) {
    if (asset.type === 'js') {
        if (typeof document !== 'undefined') {
            let script = document.createElement('script');
            script.src = asset.url + '?t=' + Date.now();
            if (asset.outputFormat === 'esmodule') script.type = 'module';
            return new Promise((resolve, reject)=>{
                var _document$head;
                script.onload = ()=>resolve(script);
                script.onerror = reject;
                (_document$head = document.head) === null || _document$head === void 0 || _document$head.appendChild(script);
            });
        } else if (typeof importScripts === 'function') {
            // Worker scripts
            if (asset.outputFormat === 'esmodule') return import(asset.url + '?t=' + Date.now());
            else return new Promise((resolve, reject)=>{
                try {
                    importScripts(asset.url + '?t=' + Date.now());
                    resolve();
                } catch (err) {
                    reject(err);
                }
            });
        }
    }
}
async function hmrApplyUpdates(assets) {
    global.parcelHotUpdate = Object.create(null);
    let scriptsToRemove;
    try {
        // If sourceURL comments aren't supported in eval, we need to load
        // the update from the dev server over HTTP so that stack traces
        // are correct in errors/logs. This is much slower than eval, so
        // we only do it if needed (currently just Safari).
        // https://bugs.webkit.org/show_bug.cgi?id=137297
        // This path is also taken if a CSP disallows eval.
        if (!supportsSourceURL) {
            let promises = assets.map((asset)=>{
                var _hmrDownload;
                return (_hmrDownload = hmrDownload(asset)) === null || _hmrDownload === void 0 ? void 0 : _hmrDownload.catch((err)=>{
                    // Web extension fix
                    if (extCtx && extCtx.runtime && extCtx.runtime.getManifest().manifest_version == 3 && typeof ServiceWorkerGlobalScope != 'undefined' && global instanceof ServiceWorkerGlobalScope) {
                        extCtx.runtime.reload();
                        return;
                    }
                    throw err;
                });
            });
            scriptsToRemove = await Promise.all(promises);
        }
        assets.forEach(function(asset) {
            hmrApply(module.bundle.root, asset);
        });
    } finally{
        delete global.parcelHotUpdate;
        if (scriptsToRemove) scriptsToRemove.forEach((script)=>{
            if (script) {
                var _document$head2;
                (_document$head2 = document.head) === null || _document$head2 === void 0 || _document$head2.removeChild(script);
            }
        });
    }
}
function hmrApply(bundle /*: ParcelRequire */ , asset /*:  HMRAsset */ ) {
    var modules = bundle.modules;
    if (!modules) return;
    if (asset.type === 'css') reloadCSS();
    else if (asset.type === 'js') {
        let deps = asset.depsByBundle[bundle.HMR_BUNDLE_ID];
        if (deps) {
            if (modules[asset.id]) {
                // Remove dependencies that are removed and will become orphaned.
                // This is necessary so that if the asset is added back again, the cache is gone, and we prevent a full page reload.
                let oldDeps = modules[asset.id][1];
                for(let dep in oldDeps)if (!deps[dep] || deps[dep] !== oldDeps[dep]) {
                    let id = oldDeps[dep];
                    let parents = getParents(module.bundle.root, id);
                    if (parents.length === 1) hmrDelete(module.bundle.root, id);
                }
            }
            if (supportsSourceURL) // Global eval. We would use `new Function` here but browser
            // support for source maps is better with eval.
            (0, eval)(asset.output);
            // $FlowFixMe
            let fn = global.parcelHotUpdate[asset.id];
            modules[asset.id] = [
                fn,
                deps
            ];
        }
        // Always traverse to the parent bundle, even if we already replaced the asset in this bundle.
        // This is required in case modules are duplicated. We need to ensure all instances have the updated code.
        if (bundle.parent) hmrApply(bundle.parent, asset);
    }
}
function hmrDelete(bundle, id) {
    let modules = bundle.modules;
    if (!modules) return;
    if (modules[id]) {
        // Collect dependencies that will become orphaned when this module is deleted.
        let deps = modules[id][1];
        let orphans = [];
        for(let dep in deps){
            let parents = getParents(module.bundle.root, deps[dep]);
            if (parents.length === 1) orphans.push(deps[dep]);
        }
        // Delete the module. This must be done before deleting dependencies in case of circular dependencies.
        delete modules[id];
        delete bundle.cache[id];
        // Now delete the orphans.
        orphans.forEach((id)=>{
            hmrDelete(module.bundle.root, id);
        });
    } else if (bundle.parent) hmrDelete(bundle.parent, id);
}
function hmrAcceptCheck(bundle /*: ParcelRequire */ , id /*: string */ , depsByBundle /*: ?{ [string]: { [string]: string } }*/ ) {
    checkedAssets = {};
    if (hmrAcceptCheckOne(bundle, id, depsByBundle)) return true;
    // Traverse parents breadth first. All possible ancestries must accept the HMR update, or we'll reload.
    let parents = getParents(module.bundle.root, id);
    let accepted = false;
    while(parents.length > 0){
        let v = parents.shift();
        let a = hmrAcceptCheckOne(v[0], v[1], null);
        if (a) // If this parent accepts, stop traversing upward, but still consider siblings.
        accepted = true;
        else if (a !== null) {
            // Otherwise, queue the parents in the next level upward.
            let p = getParents(module.bundle.root, v[1]);
            if (p.length === 0) {
                // If there are no parents, then we've reached an entry without accepting. Reload.
                accepted = false;
                break;
            }
            parents.push(...p);
        }
    }
    return accepted;
}
function hmrAcceptCheckOne(bundle /*: ParcelRequire */ , id /*: string */ , depsByBundle /*: ?{ [string]: { [string]: string } }*/ ) {
    var modules = bundle.modules;
    if (!modules) return;
    if (depsByBundle && !depsByBundle[bundle.HMR_BUNDLE_ID]) {
        // If we reached the root bundle without finding where the asset should go,
        // there's nothing to do. Mark as "accepted" so we don't reload the page.
        if (!bundle.parent) {
            bundleNotFound = true;
            return true;
        }
        return hmrAcceptCheckOne(bundle.parent, id, depsByBundle);
    }
    if (checkedAssets[id]) return null;
    checkedAssets[id] = true;
    var cached = bundle.cache[id];
    if (!cached) return true;
    assetsToDispose.push([
        bundle,
        id
    ]);
    if (cached && cached.hot && cached.hot._acceptCallbacks.length) {
        assetsToAccept.push([
            bundle,
            id
        ]);
        return true;
    }
    return false;
}
function hmrDisposeQueue() {
    // Dispose all old assets.
    for(let i = 0; i < assetsToDispose.length; i++){
        let id = assetsToDispose[i][1];
        if (!disposedAssets[id]) {
            hmrDispose(assetsToDispose[i][0], id);
            disposedAssets[id] = true;
        }
    }
    assetsToDispose = [];
}
function hmrDispose(bundle /*: ParcelRequire */ , id /*: string */ ) {
    var cached = bundle.cache[id];
    bundle.hotData[id] = {};
    if (cached && cached.hot) cached.hot.data = bundle.hotData[id];
    if (cached && cached.hot && cached.hot._disposeCallbacks.length) cached.hot._disposeCallbacks.forEach(function(cb) {
        cb(bundle.hotData[id]);
    });
    delete bundle.cache[id];
}
function hmrAccept(bundle /*: ParcelRequire */ , id /*: string */ ) {
    // Execute the module.
    bundle(id);
    // Run the accept callbacks in the new version of the module.
    var cached = bundle.cache[id];
    if (cached && cached.hot && cached.hot._acceptCallbacks.length) {
        let assetsToAlsoAccept = [];
        cached.hot._acceptCallbacks.forEach(function(cb) {
            let additionalAssets = cb(function() {
                return getParents(module.bundle.root, id);
            });
            if (Array.isArray(additionalAssets) && additionalAssets.length) assetsToAlsoAccept.push(...additionalAssets);
        });
        if (assetsToAlsoAccept.length) {
            let handled = assetsToAlsoAccept.every(function(a) {
                return hmrAcceptCheck(a[0], a[1]);
            });
            if (!handled) return fullReload();
            hmrDisposeQueue();
        }
    }
}

},{}],"gH3Lb":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
var _localization = require("./localization");
var _roulette = require("./roulette");
var _options = require("./options");
var _optionsDefault = parcelHelpers.interopDefault(_options);
var _registerServiceWorker = require("./registerServiceWorker");
var _multiplayerUI = require("./multiplayer/MultiplayerUI");
(0, _registerServiceWorker.registerServiceWorker)();
const roulette = new (0, _roulette.Roulette)();
const multiplayerUI = new (0, _multiplayerUI.MultiplayerUI)();
// 멀티플레이어 UI 초기화
document.addEventListener('DOMContentLoaded', ()=>{
    multiplayerUI.init();
});
// eslint-disable-next-line
window.roulette = roulette;
// eslint-disable-next-line
window.options = (0, _optionsDefault.default);
// eslint-disable-next-line
window.multiplayerUI = multiplayerUI;

},{"./localization":"7e5dA","./roulette":"dWQgg","./options":"jebMA","./registerServiceWorker":"dWLxR","./multiplayer/MultiplayerUI":"dNlK5","@parcel/transformer-js/src/esmodule-helpers.js":"jnFvT"}],"7e5dA":[function(require,module,exports,__globalThis) {
var _languages = require("./data/languages");
const defaultLocale = 'en';
let locale;
function getBrowserLocale() {
    return navigator.language.split('-')[0];
}
function translateElement(element) {
    if (!(element instanceof HTMLElement) || !locale) return;
    const prop = element.getAttribute('data-trans');
    if (prop) {
        const key = (element.getAttribute(prop) || '').trim();
        if (key && key in (0, _languages.Translations)[locale]) element.setAttribute(prop, (0, _languages.Translations)[locale][key]);
    } else {
        const key = element.innerText.trim();
        if (key && key in (0, _languages.Translations)[locale]) element.innerText = (0, _languages.Translations)[locale][key];
    }
}
function translatePage() {
    document.querySelectorAll('[data-trans]').forEach(translateElement);
}
function setLocale(newLocale) {
    if (newLocale === locale) return;
    document.documentElement.lang = newLocale;
    const newLocaleLower = newLocale.toLocaleLowerCase();
    locale = newLocaleLower in (0, _languages.Translations) ? newLocaleLower : defaultLocale;
    translatePage();
}
document.addEventListener('DOMContentLoaded', ()=>{
    console.log('localization loaded');
    const browserLocale = getBrowserLocale();
    console.log('detected locale: ', browserLocale);
    setLocale(browserLocale);
});
// eslint-disable-next-line
window.translateElement = translateElement;

},{"./data/languages":"6pmzJ"}],"6pmzJ":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "Translations", ()=>Translations);
const Translations = {
    en: {
        'Enter names below': 'Enter names below',
        Shuffle: 'Shuffle',
        Start: 'Start',
        Map: 'Map',
        Recording: 'Recording',
        'The winner is': 'The winner is',
        'Using skills': 'Using skills',
        First: 'First',
        Last: 'Last',
        'Wheel of fortune': 'Wheel of fortune',
        BubblePop: 'BubblePop',
        'Pot of greed': 'Pot of greed',
        'Yoru ni Kakeru': 'Into The Night (by item4)',
        'Shake!': 'Shake!',
        'Input names separated by commas or line feed here': 'Input names separated by commas or line feed here',
        'This program is freeware and may be used freely anywhere, including in broadcasts and videos.': 'This program is freeware and may be used freely anywhere, including in broadcasts and videos.',
        'Close': 'Close',
        'The result has been copied': 'The result has been copied'
    },
    ko: {
        'Enter names below': "\uC774\uB984\uB4E4\uC744 \uC785\uB825\uD558\uC138\uC694",
        Shuffle: "\uC11E\uAE30",
        Start: "\uC2DC\uC791",
        Map: "\uB9F5",
        Recording: "\uB179\uD654",
        'The winner is': "\uB2F9\uCCA8 \uC21C\uC704",
        'Using skills': "\uC2A4\uD0AC \uD65C\uC131\uD654",
        First: "\uCCAB\uBC88\uC9F8",
        Last: "\uB9C8\uC9C0\uB9C9",
        'Wheel of fortune': "\uC6B4\uBA85\uC758 \uC218\uB808\uBC14\uD034",
        BubblePop: "\uBC84\uBE14\uD31D",
        'Pot of greed': "\uC695\uB9DD\uC758 \uD56D\uC544\uB9AC",
        'Yoru ni Kakeru': "\uBC24\uC744 \uB2EC\uB9AC\uB2E4 (by item4)",
        'Shake!': "\uD754\uB4E4\uAE30!",
        'Input names separated by commas or line feed here': "\uC774\uB984\uB4E4\uC744 \uC27C\uD45C\uB098 \uC5D4\uD130\uB85C \uAD6C\uBD84\uD574\uC11C \uB123\uC5B4\uC8FC\uC138\uC694",
        'This program is freeware and may be used freely anywhere, including in broadcasts and videos.': "\uC774 \uD504\uB85C\uADF8\uB7A8\uC740 \uD504\uB9AC\uC6E8\uC5B4\uC774\uBA70 \uBC29\uC1A1\uC774\uB098 \uC601\uC0C1 \uB4F1\uC744 \uD3EC\uD568\uD55C \uC5B4\uB5A4 \uC6A9\uB3C4\uB85C\uB4E0 \uC790\uC720\uB86D\uAC8C \uC0AC\uC6A9\uD558\uB294 \uAC83\uC774 \uD5C8\uC6A9\uB418\uC5B4\uC788\uC2B5\uB2C8\uB2E4.",
        'Close': "\uB2EB\uAE30",
        'The result has been copied': "\uACB0\uACFC\uAC00 \uBCF5\uC0AC\uB418\uC5C8\uC2B5\uB2C8\uB2E4"
    }
};

},{"@parcel/transformer-js/src/esmodule-helpers.js":"jnFvT"}],"jnFvT":[function(require,module,exports,__globalThis) {
exports.interopDefault = function(a) {
    return a && a.__esModule ? a : {
        default: a
    };
};
exports.defineInteropFlag = function(a) {
    Object.defineProperty(a, '__esModule', {
        value: true
    });
};
exports.exportAll = function(source, dest) {
    Object.keys(source).forEach(function(key) {
        if (key === 'default' || key === '__esModule' || Object.prototype.hasOwnProperty.call(dest, key)) return;
        Object.defineProperty(dest, key, {
            enumerable: true,
            get: function() {
                return source[key];
            }
        });
    });
    return dest;
};
exports.export = function(dest, destName, get) {
    Object.defineProperty(dest, destName, {
        enumerable: true,
        get: get
    });
};

},{}],"dWQgg":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "Roulette", ()=>Roulette);
var _tsDecorate = require("@swc/helpers/_/_ts_decorate");
var _marble = require("./marble");
var _constants = require("./data/constants");
var _particleManager = require("./particleManager");
var _maps = require("./data/maps");
var _utils = require("./utils/utils");
var _camera = require("./camera");
var _rouletteRenderer = require("./rouletteRenderer");
var _skillEffect = require("./skillEffect");
var _options = require("./options");
var _optionsDefault = parcelHelpers.interopDefault(_options);
var _boundDecorator = require("./utils/bound.decorator");
var _rankRenderer = require("./rankRenderer");
var _minimap = require("./minimap");
var _videoRecorder = require("./utils/videoRecorder");
var _physicsBox2D = require("./physics-box2d");
var _fastForwader = require("./fastForwader");
var _logger = require("./utils/Logger");
class Roulette extends EventTarget {
    get isReady() {
        return this._isReady;
    }
    constructor(){
        super(), this._marbles = [], // 2025-11-14: 성능 최적화 - Marble 소팅 최적화를 위한 dirty flag 추가
        this._marblesSortDirty = false, this._lastTime = 0, this._elapsed = 0, this._noMoveDuration = 0, this._shakeAvailable = false, this._updateInterval = 10, this._timeScale = 1, this._speed = 1, this._winners = [], this._particleManager = new (0, _particleManager.ParticleManager)(), this._stage = null, this._camera = new (0, _camera.Camera)(), this._renderer = new (0, _rouletteRenderer.RouletteRenderer)(), this._effects = [], this._winnerRank = 0, this._totalMarbleCount = 0, this._goalDist = Infinity, this._isRunning = false, this._winner = null, this._uiObjects = [], this._autoRecording = false, this._isReady = false, this._randomSeed = null, this._isMultiplayerGuest = false // 멀티플레이어 참가자 여부
        , // 2025-11-14: 성능 최적화 - 이벤트 리스너 정리를 위한 핸들러 저장
        this.eventHandlers = new Map();
        this._renderer.init().then(()=>{
            this._init().then(()=>{
                this._isReady = true;
                this._update();
            });
        });
    }
    getZoom() {
        return (0, _constants.initialZoom) * this._camera.zoom;
    }
    getFastForwarder() {
        return this.fastForwarder;
    }
    addUiObject(obj) {
        this._uiObjects.push(obj);
        if (obj.onWheel) this._renderer.canvas.addEventListener('wheel', obj.onWheel);
        if (obj.onMessage) obj.onMessage((msg)=>{
            console.log('onMessage', msg);
            this.dispatchEvent(new CustomEvent('message', {
                detail: msg
            }));
        });
    }
    _update() {
        if (!this._lastTime) this._lastTime = Date.now();
        const currentTime = Date.now();
        this._elapsed += (currentTime - this._lastTime) * this._speed * this.fastForwarder.speed;
        if (this._elapsed > 100) this._elapsed %= 100;
        this._lastTime = currentTime;
        const interval = this._updateInterval / 1000 * this._timeScale;
        while(this._elapsed >= this._updateInterval){
            this.physics.step(interval);
            this._updateMarbles(this._updateInterval);
            this._particleManager.update(this._updateInterval);
            this._updateEffects(this._updateInterval);
            this._elapsed -= this._updateInterval;
            this._uiObjects.forEach((obj)=>obj.update(this._updateInterval));
            // 2025-11-14: 물리 엔진 업데이트 후 구슬 위치가 변경되었으므로 소팅 필요
            this._marblesSortDirty = true;
        }
        // 2025-11-14: 성능 최적화 - 매 프레임 소팅에서 dirty flag 기반 소팅으로 변경
        // 기존: 60fps 기준 초당 60회 소팅 (구슬 100개 시 초당 39,600회 비교)
        // 개선: 구슬 위치 변경 시에만 소팅 (약 15-20% CPU 사용률 감소 예상)
        if (this._marblesSortDirty && this._marbles.length > 1) {
            this._marbles.sort((a, b)=>b.y - a.y);
            this._marblesSortDirty = false;
        }
        if (this._stage) {
            this._camera.update({
                marbles: this._marbles,
                stage: this._stage,
                needToZoom: this._goalDist < (0, _constants.zoomThreshold),
                targetIndex: this._winners.length > 0 ? this._winnerRank - this._winners.length : 0
            });
            if (this._isRunning && this._marbles.length > 0 && this._noMoveDuration > 3000) this._changeShakeAvailable(true);
            else this._changeShakeAvailable(false);
        }
        this._render();
        window.requestAnimationFrame(this._update);
    }
    _updateMarbles(deltaTime) {
        if (!this._stage) return;
        for(let i = 0; i < this._marbles.length; i++){
            const marble = this._marbles[i];
            marble.update(deltaTime);
            if (marble.skill === (0, _constants.Skills).Impact) {
                this._effects.push(new (0, _skillEffect.SkillEffect)(marble.x, marble.y));
                this.physics.impact(marble.id);
            }
            if (marble.y > this._stage.goalY) {
                this._winners.push(marble);
                if (this._isRunning && this._winners.length === this._winnerRank + 1) {
                    (0, _logger.Logger).info('Roulette', "\uD83C\uDFC6 \uC6B0\uC2B9\uC790 \uACB0\uC815", {
                        winner: marble.name,
                        winnerRank: this._winnerRank,
                        winnersCount: this._winners.length,
                        isMultiplayerGuest: this._isMultiplayerGuest
                    });
                    this.dispatchEvent(new CustomEvent('goal', {
                        detail: {
                            winner: marble.name
                        }
                    }));
                    this._winner = marble;
                    this._isRunning = false;
                    this._particleManager.shot(this._renderer.width, this._renderer.height);
                    setTimeout(()=>{
                        this._recorder.stop();
                    }, 1000);
                } else if (this._isRunning && this._winnerRank === this._winners.length && this._winnerRank === this._totalMarbleCount - 1) {
                    this.dispatchEvent(new CustomEvent('goal', {
                        detail: {
                            winner: this._marbles[i + 1].name
                        }
                    }));
                    this._winner = this._marbles[i + 1];
                    this._isRunning = false;
                    this._particleManager.shot(this._renderer.width, this._renderer.height);
                    setTimeout(()=>{
                        this._recorder.stop();
                    }, 1000);
                }
                setTimeout(()=>{
                    this.physics.removeMarble(marble.id);
                }, 500);
            }
        }
        const targetIndex = this._winnerRank - this._winners.length;
        const topY = this._marbles[targetIndex] ? this._marbles[targetIndex].y : 0;
        this._goalDist = Math.abs(this._stage.zoomY - topY);
        this._timeScale = this._calcTimeScale();
        this._marbles = this._marbles.filter((marble)=>marble.y <= this._stage.goalY);
    }
    _calcTimeScale() {
        if (!this._stage) return 1;
        const targetIndex = this._winnerRank - this._winners.length;
        if (this._winners.length < this._winnerRank + 1 && this._goalDist < (0, _constants.zoomThreshold)) {
            if (this._marbles[targetIndex].y > this._stage.zoomY - (0, _constants.zoomThreshold) * 1.2 && (this._marbles[targetIndex - 1] || this._marbles[targetIndex + 1])) return Math.max(0.2, this._goalDist / (0, _constants.zoomThreshold));
        }
        return 1;
    }
    _updateEffects(deltaTime) {
        this._effects.forEach((effect)=>effect.update(deltaTime));
        this._effects = this._effects.filter((effect)=>!effect.isDestroy);
    }
    _render() {
        if (!this._stage) return;
        const renderParams = {
            camera: this._camera,
            stage: this._stage,
            entities: this.physics.getEntities(),
            marbles: this._marbles,
            winners: this._winners,
            particleManager: this._particleManager,
            effects: this._effects,
            winnerRank: this._winnerRank,
            winner: this._winner,
            size: {
                x: this._renderer.width,
                y: this._renderer.height
            }
        };
        this._renderer.render(renderParams, this._uiObjects);
    }
    async _init() {
        this._recorder = new (0, _videoRecorder.VideoRecorder)(this._renderer.canvas);
        this.physics = new (0, _physicsBox2D.Box2dPhysics)();
        await this.physics.init();
        this.addUiObject(new (0, _rankRenderer.RankRenderer)());
        this.attachEvent();
        const minimap = new (0, _minimap.Minimap)();
        minimap.onViewportChange((pos)=>{
            if (pos) {
                this._camera.setPosition(pos, false);
                this._camera.lock(true);
            } else this._camera.lock(false);
        });
        this.addUiObject(minimap);
        this.fastForwarder = new (0, _fastForwader.FastForwader)();
        this.addUiObject(this.fastForwarder);
        this._stage = (0, _maps.stages)[0];
        this._loadMap();
    }
    mouseHandler(eventName, e) {
        const handlerName = `on${eventName}`;
        const sizeFactor = this._renderer.sizeFactor;
        const pos = {
            x: e.offsetX * sizeFactor,
            y: e.offsetY * sizeFactor
        };
        this._uiObjects.forEach((obj)=>{
            if (!obj[handlerName]) return;
            const bounds = obj.getBoundingBox();
            if (!bounds) obj[handlerName]({
                ...pos,
                button: e.button
            });
            else if (bounds && pos.x >= bounds.x && pos.y >= bounds.y && pos.x <= bounds.x + bounds.w && pos.y <= bounds.y + bounds.h) obj[handlerName]({
                x: pos.x - bounds.x,
                y: pos.y - bounds.y,
                button: e.button
            });
            else obj[handlerName](undefined);
        });
    }
    attachEvent() {
        [
            'MouseMove',
            'MouseUp',
            'MouseDown',
            'DblClick'
        ].forEach((ev)=>{
            const eventName = ev.toLowerCase().replace('mouse', 'pointer');
            const handler = this.mouseHandler.bind(this, ev);
            this.eventHandlers.set(eventName, handler);
            // @ts-ignore
            this._renderer.canvas.addEventListener(eventName, handler);
        });
        const contextMenuHandler = (e)=>{
            e.preventDefault();
        };
        this.eventHandlers.set('contextmenu', contextMenuHandler);
        this._renderer.canvas.addEventListener('contextmenu', contextMenuHandler);
    }
    /**
   * 2025-11-14: 성능 최적화 - 이벤트 리스너 정리 메서드
   * 메모리 누수 방지를 위해 모든 이벤트 리스너를 제거
   */ cleanup() {
        // Canvas 이벤트 리스너 제거
        this.eventHandlers.forEach((handler, eventName)=>{
            this._renderer.canvas.removeEventListener(eventName, handler);
        });
        this.eventHandlers.clear();
        // Physics 정리
        if (this.physics) this.physics.clear();
        // 구슬 정리
        this._marbles = [];
        (0, _logger.Logger).info('Roulette', "cleanup \uC644\uB8CC - \uBAA8\uB4E0 \uB9AC\uC2A4\uB108 \uBC0F \uB9AC\uC18C\uC2A4 \uC815\uB9AC\uB428");
    }
    _loadMap() {
        if (!this._stage) throw new Error('No map has been selected');
        this.physics.createStage(this._stage);
        this._camera.initializePosition();
    }
    clearMarbles() {
        this.physics.clearMarbles();
        this._winner = null;
        this._winners = [];
        this._marbles = [];
    }
    start() {
        this._isRunning = true;
        this._winnerRank = (0, _optionsDefault.default).winningRank;
        if (this._winnerRank >= this._marbles.length) this._winnerRank = this._marbles.length - 1;
        this._camera.startFollowingMarbles();
        if (this._autoRecording) this._recorder.start().then(()=>{
            this.physics.start();
            this._marbles.forEach((marble)=>marble.isActive = true);
        });
        else {
            this.physics.start();
            this._marbles.forEach((marble)=>marble.isActive = true);
        }
    }
    setSpeed(value) {
        if (value <= 0) throw new Error('Speed multiplier must larger than 0');
        this._speed = value;
    }
    getSpeed() {
        return this._speed;
    }
    setWinningRank(rank) {
        this._winnerRank = rank;
    }
    setAutoRecording(value) {
        this._autoRecording = value;
    }
    /**
   * 랜덤 시드 설정 (멀티플레이어 동기화용)
   * @param seed 랜덤 시드 (null이면 Math.random() 사용)
   */ setRandomSeed(seed) {
        this._randomSeed = seed;
        (0, _logger.Logger).info('Roulette', "\uB79C\uB364 \uC2DC\uB4DC \uC124\uC815", {
            seed
        });
    }
    /**
   * 멀티플레이어 참가자 모드 설정
   * @param isGuest true이면 자체 goal 이벤트를 발생시키지 않음
   */ setMultiplayerGuest(isGuest) {
        this._isMultiplayerGuest = isGuest;
    }
    /**
   * 시드 기반 랜덤 함수 (Mulberry32 알고리즘)
   * @param seed 시드 값
   * @returns 0~1 사이의 랜덤 숫자를 반환하는 함수
   */ createSeededRandom(seed) {
        return function() {
            let t = seed += 0x6D2B79F5;
            t = Math.imul(t ^ t >>> 15, t | 1);
            t ^= t + Math.imul(t ^ t >>> 7, t | 61);
            return ((t ^ t >>> 14) >>> 0) / 4294967296;
        };
    }
    setMarbles(names) {
        this.reset();
        const arr = names.slice();
        let maxWeight = -Infinity;
        let minWeight = Infinity;
        const members = arr.map((nameString)=>{
            const result = (0, _utils.parseName)(nameString);
            if (!result) return null;
            const { name, weight, count } = result;
            if (weight > maxWeight) maxWeight = weight;
            if (weight < minWeight) minWeight = weight;
            return {
                name,
                weight,
                count
            };
        }).filter((member)=>!!member);
        const gap = maxWeight - minWeight;
        let totalCount = 0;
        members.forEach((member)=>{
            if (member) {
                member.weight = 0.1 + (gap ? (member.weight - minWeight) / gap : 0);
                totalCount += member.count;
            }
        });
        // 랜덤 함수 선택: 시드가 있으면 시드 기반, 없으면 Math.random() 사용
        const randomFunc = this._randomSeed !== null ? this.createSeededRandom(this._randomSeed) : Math.random;
        (0, _logger.Logger).info('Roulette', "setMarbles - \uB79C\uB364 \uD568\uC218 \uC124\uC815", {
            hasRandomSeed: this._randomSeed !== null,
            randomSeed: this._randomSeed,
            totalCount
        });
        // 물리 엔진에도 같은 랜덤 함수 적용 (동기화 보장)
        if (this.physics && 'setRandomFunc' in this.physics) {
            this.physics.setRandomFunc(randomFunc);
            (0, _logger.Logger).info('Roulette', "\uBB3C\uB9AC \uC5D4\uC9C4\uC5D0 \uB79C\uB364 \uD568\uC218 \uC124\uC815 \uC644\uB8CC");
        }
        const orders = Array(totalCount).fill(0).map((_, i)=>i).sort(()=>randomFunc() - 0.5);
        (0, _logger.Logger).info('Roulette', "setMarbles - \uAD6C\uC2AC \uC21C\uC11C \uC0DD\uC131 \uC644\uB8CC", {
            orders: [
                ...orders
            ],
            randomSeed: this._randomSeed
        });
        members.forEach((member)=>{
            if (member) for(let j = 0; j < member.count; j++){
                const order = orders.pop() || 0;
                this._marbles.push(new (0, _marble.Marble)(this.physics, order, totalCount, member.name, member.weight, randomFunc));
            }
        });
        this._totalMarbleCount = totalCount;
        // 2025-11-14: 새로운 구슬이 추가되었으므로 소팅 필요
        this._marblesSortDirty = true;
    }
    _clearMap() {
        this.physics.clear();
        this._marbles = [];
        // 2025-11-14: 구슬 배열이 초기화되었으므로 소팅 필요
        this._marblesSortDirty = true;
    }
    reset() {
        this.clearMarbles();
        this._clearMap();
        this._loadMap();
        this._goalDist = Infinity;
    // 주의: randomSeed는 유지됨 (멀티플레이어 동기화를 위해)
    }
    getCount() {
        return this._marbles.length;
    }
    _changeShakeAvailable(v) {
        if (this._shakeAvailable !== v) {
            this._shakeAvailable = v;
            this.dispatchEvent(new CustomEvent('shakeAvailableChanged', {
                detail: v
            }));
        }
    }
    shake() {
        if (!this._shakeAvailable) return;
    }
    getMaps() {
        return (0, _maps.stages).map((stage, index)=>{
            return {
                index,
                title: stage.title
            };
        });
    }
    /**
   * 맵만 변경 (구슬 재생성 없이)
   * @param index 맵 인덱스
   */ setMapOnly(index) {
        if (index < 0 || index > (0, _maps.stages).length - 1) throw new Error('Incorrect map number');
        this._stage = (0, _maps.stages)[index];
        this.reset(); // 맵과 물리엔진만 초기화 (randomSeed는 유지)
        this._camera.initializePosition();
    }
    /**
   * 맵 변경 (기존 구슬 유지하면서 맵만 변경)
   * @param index 맵 인덱스
   */ setMap(index) {
        if (index < 0 || index > (0, _maps.stages).length - 1) throw new Error('Incorrect map number');
        const names = this._marbles.map((marble)=>marble.name);
        this._stage = (0, _maps.stages)[index];
        this.setMarbles(names);
        this._camera.initializePosition();
    }
    /**
   * 2025-11-14: 성능 최적화 - 멀티플레이어 초기화를 위한 배치 설정 메서드
   * 기존: setMapOnly() → setMarbles() → setWinningRank() 각각 물리 엔진 재초기화
   * 개선: 한 번에 모든 설정을 수행하여 물리 엔진 초기화 1회로 감소
   *
   * @param config 게임 설정 객체
   */ batchSetup(config) {
        // 1. 랜덤 시드 설정 (옵션)
        if (config.randomSeed !== undefined) this.setRandomSeed(config.randomSeed);
        // 2. 맵 설정 (물리 엔진 초기화 포함)
        if (config.mapIndex < 0 || config.mapIndex > (0, _maps.stages).length - 1) throw new Error('Incorrect map number');
        this._stage = (0, _maps.stages)[config.mapIndex];
        this.reset(); // 맵과 물리엔진 초기화
        // 3. 구슬 생성 (이미 초기화된 물리 엔진 사용)
        this.setMarbles(config.marbleNames);
        // 4. 당첨 순위 설정
        this._winnerRank = config.winnerRank;
        // 5. 카메라 초기화
        this._camera.initializePosition();
        (0, _logger.Logger).info('Roulette', "\uBC30\uCE58 \uC124\uC815 \uC644\uB8CC", {
            mapIndex: config.mapIndex,
            marbleCount: config.marbleNames.length,
            winnerRank: config.winnerRank,
            randomSeed: config.randomSeed
        });
    }
}
(0, _tsDecorate._)([
    (0, _boundDecorator.bound)
], Roulette.prototype, "_update", null);
(0, _tsDecorate._)([
    (0, _boundDecorator.bound)
], Roulette.prototype, "mouseHandler", null);

},{"@swc/helpers/_/_ts_decorate":"aPTou","./marble":"jGScz","./data/constants":"dKlb7","./particleManager":"7yEm2","./data/maps":"cUMXH","./utils/utils":"ljVDB","./camera":"eRxgS","./rouletteRenderer":"kaELn","./skillEffect":"LqJb0","./options":"jebMA","./utils/bound.decorator":"auTxm","./rankRenderer":"ewQVA","./minimap":"5BIBs","./utils/videoRecorder":"j59yE","./physics-box2d":"Agzxl","./fastForwader":"bTlP4","./utils/Logger":"7YW8a","@parcel/transformer-js/src/esmodule-helpers.js":"jnFvT"}],"aPTou":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "_", ()=>(0, _tslib.__decorate));
var _tslib = require("tslib");

},{"tslib":"iC1Dx","@parcel/transformer-js/src/esmodule-helpers.js":"jnFvT"}],"iC1Dx":[function(require,module,exports,__globalThis) {
/******************************************************************************
Copyright (c) Microsoft Corporation.

Permission to use, copy, modify, and/or distribute this software for any
purpose with or without fee is hereby granted.

THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
PERFORMANCE OF THIS SOFTWARE.
***************************************************************************** */ /* global Reflect, Promise, SuppressedError, Symbol, Iterator */ var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "__extends", ()=>__extends);
parcelHelpers.export(exports, "__assign", ()=>__assign);
parcelHelpers.export(exports, "__rest", ()=>__rest);
parcelHelpers.export(exports, "__decorate", ()=>__decorate);
parcelHelpers.export(exports, "__param", ()=>__param);
parcelHelpers.export(exports, "__esDecorate", ()=>__esDecorate);
parcelHelpers.export(exports, "__runInitializers", ()=>__runInitializers);
parcelHelpers.export(exports, "__propKey", ()=>__propKey);
parcelHelpers.export(exports, "__setFunctionName", ()=>__setFunctionName);
parcelHelpers.export(exports, "__metadata", ()=>__metadata);
parcelHelpers.export(exports, "__awaiter", ()=>__awaiter);
parcelHelpers.export(exports, "__generator", ()=>__generator);
parcelHelpers.export(exports, "__createBinding", ()=>__createBinding);
parcelHelpers.export(exports, "__exportStar", ()=>__exportStar);
parcelHelpers.export(exports, "__values", ()=>__values);
parcelHelpers.export(exports, "__read", ()=>__read);
/** @deprecated */ parcelHelpers.export(exports, "__spread", ()=>__spread);
/** @deprecated */ parcelHelpers.export(exports, "__spreadArrays", ()=>__spreadArrays);
parcelHelpers.export(exports, "__spreadArray", ()=>__spreadArray);
parcelHelpers.export(exports, "__await", ()=>__await);
parcelHelpers.export(exports, "__asyncGenerator", ()=>__asyncGenerator);
parcelHelpers.export(exports, "__asyncDelegator", ()=>__asyncDelegator);
parcelHelpers.export(exports, "__asyncValues", ()=>__asyncValues);
parcelHelpers.export(exports, "__makeTemplateObject", ()=>__makeTemplateObject);
parcelHelpers.export(exports, "__importStar", ()=>__importStar);
parcelHelpers.export(exports, "__importDefault", ()=>__importDefault);
parcelHelpers.export(exports, "__classPrivateFieldGet", ()=>__classPrivateFieldGet);
parcelHelpers.export(exports, "__classPrivateFieldSet", ()=>__classPrivateFieldSet);
parcelHelpers.export(exports, "__classPrivateFieldIn", ()=>__classPrivateFieldIn);
parcelHelpers.export(exports, "__addDisposableResource", ()=>__addDisposableResource);
parcelHelpers.export(exports, "__disposeResources", ()=>__disposeResources);
parcelHelpers.export(exports, "__rewriteRelativeImportExtension", ()=>__rewriteRelativeImportExtension);
var extendStatics = function(d, b) {
    extendStatics = Object.setPrototypeOf || ({
        __proto__: []
    }) instanceof Array && function(d, b) {
        d.__proto__ = b;
    } || function(d, b) {
        for(var p in b)if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p];
    };
    return extendStatics(d, b);
};
function __extends(d, b) {
    if (typeof b !== "function" && b !== null) throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
    extendStatics(d, b);
    function __() {
        this.constructor = d;
    }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
}
var __assign = function() {
    __assign = Object.assign || function __assign(t) {
        for(var s, i = 1, n = arguments.length; i < n; i++){
            s = arguments[i];
            for(var p in s)if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
function __rest(s, e) {
    var t = {};
    for(var p in s)if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0) t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function") {
        for(var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++)if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i])) t[p[i]] = s[p[i]];
    }
    return t;
}
function __decorate(decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for(var i = decorators.length - 1; i >= 0; i--)if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
}
function __param(paramIndex, decorator) {
    return function(target, key) {
        decorator(target, key, paramIndex);
    };
}
function __esDecorate(ctor, descriptorIn, decorators, contextIn, initializers, extraInitializers) {
    function accept(f) {
        if (f !== void 0 && typeof f !== "function") throw new TypeError("Function expected");
        return f;
    }
    var kind = contextIn.kind, key = kind === "getter" ? "get" : kind === "setter" ? "set" : "value";
    var target = !descriptorIn && ctor ? contextIn["static"] ? ctor : ctor.prototype : null;
    var descriptor = descriptorIn || (target ? Object.getOwnPropertyDescriptor(target, contextIn.name) : {});
    var _, done = false;
    for(var i = decorators.length - 1; i >= 0; i--){
        var context = {};
        for(var p in contextIn)context[p] = p === "access" ? {} : contextIn[p];
        for(var p in contextIn.access)context.access[p] = contextIn.access[p];
        context.addInitializer = function(f) {
            if (done) throw new TypeError("Cannot add initializers after decoration has completed");
            extraInitializers.push(accept(f || null));
        };
        var result = (0, decorators[i])(kind === "accessor" ? {
            get: descriptor.get,
            set: descriptor.set
        } : descriptor[key], context);
        if (kind === "accessor") {
            if (result === void 0) continue;
            if (result === null || typeof result !== "object") throw new TypeError("Object expected");
            if (_ = accept(result.get)) descriptor.get = _;
            if (_ = accept(result.set)) descriptor.set = _;
            if (_ = accept(result.init)) initializers.unshift(_);
        } else if (_ = accept(result)) {
            if (kind === "field") initializers.unshift(_);
            else descriptor[key] = _;
        }
    }
    if (target) Object.defineProperty(target, contextIn.name, descriptor);
    done = true;
}
function __runInitializers(thisArg, initializers, value) {
    var useValue = arguments.length > 2;
    for(var i = 0; i < initializers.length; i++)value = useValue ? initializers[i].call(thisArg, value) : initializers[i].call(thisArg);
    return useValue ? value : void 0;
}
function __propKey(x) {
    return typeof x === "symbol" ? x : "".concat(x);
}
function __setFunctionName(f, name, prefix) {
    if (typeof name === "symbol") name = name.description ? "[".concat(name.description, "]") : "";
    return Object.defineProperty(f, "name", {
        configurable: true,
        value: prefix ? "".concat(prefix, " ", name) : name
    });
}
function __metadata(metadataKey, metadataValue) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(metadataKey, metadataValue);
}
function __awaiter(thisArg, _arguments, P, generator) {
    function adopt(value) {
        return value instanceof P ? value : new P(function(resolve) {
            resolve(value);
        });
    }
    return new (P || (P = Promise))(function(resolve, reject) {
        function fulfilled(value) {
            try {
                step(generator.next(value));
            } catch (e) {
                reject(e);
            }
        }
        function rejected(value) {
            try {
                step(generator["throw"](value));
            } catch (e) {
                reject(e);
            }
        }
        function step(result) {
            result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected);
        }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
}
function __generator(thisArg, body) {
    var _ = {
        label: 0,
        sent: function() {
            if (t[0] & 1) throw t[1];
            return t[1];
        },
        trys: [],
        ops: []
    }, f, y, t, g = Object.create((typeof Iterator === "function" ? Iterator : Object).prototype);
    return g.next = verb(0), g["throw"] = verb(1), g["return"] = verb(2), typeof Symbol === "function" && (g[Symbol.iterator] = function() {
        return this;
    }), g;
    function verb(n) {
        return function(v) {
            return step([
                n,
                v
            ]);
        };
    }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while(g && (g = 0, op[0] && (_ = 0)), _)try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [
                op[0] & 2,
                t.value
            ];
            switch(op[0]){
                case 0:
                case 1:
                    t = op;
                    break;
                case 4:
                    _.label++;
                    return {
                        value: op[1],
                        done: false
                    };
                case 5:
                    _.label++;
                    y = op[1];
                    op = [
                        0
                    ];
                    continue;
                case 7:
                    op = _.ops.pop();
                    _.trys.pop();
                    continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) {
                        _ = 0;
                        continue;
                    }
                    if (op[0] === 3 && (!t || op[1] > t[0] && op[1] < t[3])) {
                        _.label = op[1];
                        break;
                    }
                    if (op[0] === 6 && _.label < t[1]) {
                        _.label = t[1];
                        t = op;
                        break;
                    }
                    if (t && _.label < t[2]) {
                        _.label = t[2];
                        _.ops.push(op);
                        break;
                    }
                    if (t[2]) _.ops.pop();
                    _.trys.pop();
                    continue;
            }
            op = body.call(thisArg, _);
        } catch (e) {
            op = [
                6,
                e
            ];
            y = 0;
        } finally{
            f = t = 0;
        }
        if (op[0] & 5) throw op[1];
        return {
            value: op[0] ? op[1] : void 0,
            done: true
        };
    }
}
var __createBinding = Object.create ? function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) desc = {
        enumerable: true,
        get: function() {
            return m[k];
        }
    };
    Object.defineProperty(o, k2, desc);
} : function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
};
function __exportStar(m, o) {
    for(var p in m)if (p !== "default" && !Object.prototype.hasOwnProperty.call(o, p)) __createBinding(o, m, p);
}
function __values(o) {
    var s = typeof Symbol === "function" && Symbol.iterator, m = s && o[s], i = 0;
    if (m) return m.call(o);
    if (o && typeof o.length === "number") return {
        next: function() {
            if (o && i >= o.length) o = void 0;
            return {
                value: o && o[i++],
                done: !o
            };
        }
    };
    throw new TypeError(s ? "Object is not iterable." : "Symbol.iterator is not defined.");
}
function __read(o, n) {
    var m = typeof Symbol === "function" && o[Symbol.iterator];
    if (!m) return o;
    var i = m.call(o), r, ar = [], e;
    try {
        while((n === void 0 || n-- > 0) && !(r = i.next()).done)ar.push(r.value);
    } catch (error) {
        e = {
            error: error
        };
    } finally{
        try {
            if (r && !r.done && (m = i["return"])) m.call(i);
        } finally{
            if (e) throw e.error;
        }
    }
    return ar;
}
function __spread() {
    for(var ar = [], i = 0; i < arguments.length; i++)ar = ar.concat(__read(arguments[i]));
    return ar;
}
function __spreadArrays() {
    for(var s = 0, i = 0, il = arguments.length; i < il; i++)s += arguments[i].length;
    for(var r = Array(s), k = 0, i = 0; i < il; i++)for(var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++)r[k] = a[j];
    return r;
}
function __spreadArray(to, from, pack) {
    if (pack || arguments.length === 2) {
        for(var i = 0, l = from.length, ar; i < l; i++)if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
}
function __await(v) {
    return this instanceof __await ? (this.v = v, this) : new __await(v);
}
function __asyncGenerator(thisArg, _arguments, generator) {
    if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
    var g = generator.apply(thisArg, _arguments || []), i, q = [];
    return i = Object.create((typeof AsyncIterator === "function" ? AsyncIterator : Object).prototype), verb("next"), verb("throw"), verb("return", awaitReturn), i[Symbol.asyncIterator] = function() {
        return this;
    }, i;
    function awaitReturn(f) {
        return function(v) {
            return Promise.resolve(v).then(f, reject);
        };
    }
    function verb(n, f) {
        if (g[n]) {
            i[n] = function(v) {
                return new Promise(function(a, b) {
                    q.push([
                        n,
                        v,
                        a,
                        b
                    ]) > 1 || resume(n, v);
                });
            };
            if (f) i[n] = f(i[n]);
        }
    }
    function resume(n, v) {
        try {
            step(g[n](v));
        } catch (e) {
            settle(q[0][3], e);
        }
    }
    function step(r) {
        r.value instanceof __await ? Promise.resolve(r.value.v).then(fulfill, reject) : settle(q[0][2], r);
    }
    function fulfill(value) {
        resume("next", value);
    }
    function reject(value) {
        resume("throw", value);
    }
    function settle(f, v) {
        if (f(v), q.shift(), q.length) resume(q[0][0], q[0][1]);
    }
}
function __asyncDelegator(o) {
    var i, p;
    return i = {}, verb("next"), verb("throw", function(e) {
        throw e;
    }), verb("return"), i[Symbol.iterator] = function() {
        return this;
    }, i;
    function verb(n, f) {
        i[n] = o[n] ? function(v) {
            return (p = !p) ? {
                value: __await(o[n](v)),
                done: false
            } : f ? f(v) : v;
        } : f;
    }
}
function __asyncValues(o) {
    if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
    var m = o[Symbol.asyncIterator], i;
    return m ? m.call(o) : (o = typeof __values === "function" ? __values(o) : o[Symbol.iterator](), i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function() {
        return this;
    }, i);
    function verb(n) {
        i[n] = o[n] && function(v) {
            return new Promise(function(resolve, reject) {
                v = o[n](v), settle(resolve, reject, v.done, v.value);
            });
        };
    }
    function settle(resolve, reject, d, v) {
        Promise.resolve(v).then(function(v) {
            resolve({
                value: v,
                done: d
            });
        }, reject);
    }
}
function __makeTemplateObject(cooked, raw) {
    if (Object.defineProperty) Object.defineProperty(cooked, "raw", {
        value: raw
    });
    else cooked.raw = raw;
    return cooked;
}
var __setModuleDefault = Object.create ? function(o, v) {
    Object.defineProperty(o, "default", {
        enumerable: true,
        value: v
    });
} : function(o, v) {
    o["default"] = v;
};
var ownKeys = function(o) {
    ownKeys = Object.getOwnPropertyNames || function(o) {
        var ar = [];
        for(var k in o)if (Object.prototype.hasOwnProperty.call(o, k)) ar[ar.length] = k;
        return ar;
    };
    return ownKeys(o);
};
function __importStar(mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) {
        for(var k = ownKeys(mod), i = 0; i < k.length; i++)if (k[i] !== "default") __createBinding(result, mod, k[i]);
    }
    __setModuleDefault(result, mod);
    return result;
}
function __importDefault(mod) {
    return mod && mod.__esModule ? mod : {
        default: mod
    };
}
function __classPrivateFieldGet(receiver, state, kind, f) {
    if (kind === "a" && !f) throw new TypeError("Private accessor was defined without a getter");
    if (typeof state === "function" ? receiver !== state || !f : !state.has(receiver)) throw new TypeError("Cannot read private member from an object whose class did not declare it");
    return kind === "m" ? f : kind === "a" ? f.call(receiver) : f ? f.value : state.get(receiver);
}
function __classPrivateFieldSet(receiver, state, value, kind, f) {
    if (kind === "m") throw new TypeError("Private method is not writable");
    if (kind === "a" && !f) throw new TypeError("Private accessor was defined without a setter");
    if (typeof state === "function" ? receiver !== state || !f : !state.has(receiver)) throw new TypeError("Cannot write private member to an object whose class did not declare it");
    return kind === "a" ? f.call(receiver, value) : f ? f.value = value : state.set(receiver, value), value;
}
function __classPrivateFieldIn(state, receiver) {
    if (receiver === null || typeof receiver !== "object" && typeof receiver !== "function") throw new TypeError("Cannot use 'in' operator on non-object");
    return typeof state === "function" ? receiver === state : state.has(receiver);
}
function __addDisposableResource(env, value, async) {
    if (value !== null && value !== void 0) {
        if (typeof value !== "object" && typeof value !== "function") throw new TypeError("Object expected.");
        var dispose, inner;
        if (async) {
            if (!Symbol.asyncDispose) throw new TypeError("Symbol.asyncDispose is not defined.");
            dispose = value[Symbol.asyncDispose];
        }
        if (dispose === void 0) {
            if (!Symbol.dispose) throw new TypeError("Symbol.dispose is not defined.");
            dispose = value[Symbol.dispose];
            if (async) inner = dispose;
        }
        if (typeof dispose !== "function") throw new TypeError("Object not disposable.");
        if (inner) dispose = function() {
            try {
                inner.call(this);
            } catch (e) {
                return Promise.reject(e);
            }
        };
        env.stack.push({
            value: value,
            dispose: dispose,
            async: async
        });
    } else if (async) env.stack.push({
        async: true
    });
    return value;
}
var _SuppressedError = typeof SuppressedError === "function" ? SuppressedError : function(error, suppressed, message) {
    var e = new Error(message);
    return e.name = "SuppressedError", e.error = error, e.suppressed = suppressed, e;
};
function __disposeResources(env) {
    function fail(e) {
        env.error = env.hasError ? new _SuppressedError(e, env.error, "An error was suppressed during disposal.") : e;
        env.hasError = true;
    }
    var r, s = 0;
    function next() {
        while(r = env.stack.pop())try {
            if (!r.async && s === 1) return s = 0, env.stack.push(r), Promise.resolve().then(next);
            if (r.dispose) {
                var result = r.dispose.call(r.value);
                if (r.async) return s |= 2, Promise.resolve(result).then(next, function(e) {
                    fail(e);
                    return next();
                });
            } else s |= 1;
        } catch (e) {
            fail(e);
        }
        if (s === 1) return env.hasError ? Promise.reject(env.error) : Promise.resolve();
        if (env.hasError) throw env.error;
    }
    return next();
}
function __rewriteRelativeImportExtension(path, preserveJsx) {
    if (typeof path === "string" && /^\.\.?\//.test(path)) return path.replace(/\.(tsx)$|((?:\.d)?)((?:\.[^./]+?)?)\.([cm]?)ts$/i, function(m, tsx, d, ext, cm) {
        return tsx ? preserveJsx ? ".jsx" : ".js" : d && (!ext || !cm) ? m : d + ext + "." + cm.toLowerCase() + "js";
    });
    return path;
}
exports.default = {
    __extends: __extends,
    __assign: __assign,
    __rest: __rest,
    __decorate: __decorate,
    __param: __param,
    __esDecorate: __esDecorate,
    __runInitializers: __runInitializers,
    __propKey: __propKey,
    __setFunctionName: __setFunctionName,
    __metadata: __metadata,
    __awaiter: __awaiter,
    __generator: __generator,
    __createBinding: __createBinding,
    __exportStar: __exportStar,
    __values: __values,
    __read: __read,
    __spread: __spread,
    __spreadArrays: __spreadArrays,
    __spreadArray: __spreadArray,
    __await: __await,
    __asyncGenerator: __asyncGenerator,
    __asyncDelegator: __asyncDelegator,
    __asyncValues: __asyncValues,
    __makeTemplateObject: __makeTemplateObject,
    __importStar: __importStar,
    __importDefault: __importDefault,
    __classPrivateFieldGet: __classPrivateFieldGet,
    __classPrivateFieldSet: __classPrivateFieldSet,
    __classPrivateFieldIn: __classPrivateFieldIn,
    __addDisposableResource: __addDisposableResource,
    __disposeResources: __disposeResources,
    __rewriteRelativeImportExtension: __rewriteRelativeImportExtension
};

},{"@parcel/transformer-js/src/esmodule-helpers.js":"jnFvT"}],"jGScz":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "Marble", ()=>Marble);
var _constants = require("./data/constants");
var _utils = require("./utils/utils");
var _options = require("./options");
var _optionsDefault = parcelHelpers.interopDefault(_options);
var _vector = require("./utils/Vector");
class Marble {
    get position() {
        return this.physics.getMarblePosition(this.id) || {
            x: 0,
            y: 0,
            angle: 0
        };
    }
    get x() {
        return this.position.x;
    }
    set x(v) {
        this.position.x = v;
    }
    get y() {
        return this.position.y;
    }
    set y(v) {
        this.position.y = v;
    }
    get angle() {
        return this.position.angle;
    }
    constructor(physics, order, max, name, weight = 1, randomFunc = Math.random){
        this.type = 'marble';
        this.name = '';
        this.size = 0.5;
        this.color = 'red';
        this.hue = 0;
        this.impact = 0;
        this.weight = 1;
        this.skill = (0, _constants.Skills).None;
        this.isActive = false;
        this._skillRate = 0.0005;
        this._coolTime = 5000;
        this._maxCoolTime = 5000;
        this._stuckTime = 0;
        this.lastPosition = {
            x: 0,
            y: 0
        };
        this.name = name || `M${order}`;
        this.weight = weight;
        this.physics = physics;
        this._randomFunc = randomFunc; // 랜덤 함수 저장 (스킬 발동에도 사용)
        this._maxCoolTime = 1000 + (1 - this.weight) * 4000;
        this._coolTime = this._maxCoolTime * randomFunc(); // 전달된 랜덤 함수 사용
        this._skillRate = 0.2 * this.weight;
        const maxLine = Math.ceil(max / 10);
        const line = Math.floor(order / 10);
        const lineDelta = -Math.max(0, Math.ceil(maxLine - 5));
        this.hue = 360 / max * order;
        this.color = `hsl(${this.hue} 100% 70%)`;
        this.id = order;
        physics.createMarble(order, 10.25 + order % 10 * 0.6, maxLine - line + lineDelta);
    }
    update(deltaTime) {
        if (this.isActive && (0, _vector.Vector).lenSq((0, _vector.Vector).sub(this.lastPosition, this.position)) < 0.00001) {
            this._stuckTime += deltaTime;
            if (this._stuckTime > (0, _constants.STUCK_DELAY)) {
                this.physics.shakeMarble(this.id);
                this._stuckTime = 0;
            }
        } else this._stuckTime = 0;
        this.lastPosition = {
            x: this.position.x,
            y: this.position.y
        };
        this.skill = (0, _constants.Skills).None;
        if (this.impact) this.impact = Math.max(0, this.impact - deltaTime);
        if (!this.isActive) return;
        if ((0, _optionsDefault.default).useSkills) this._updateSkillInformation(deltaTime);
    }
    _updateSkillInformation(deltaTime) {
        if (this._coolTime > 0) this._coolTime -= deltaTime;
        if (this._coolTime <= 0) {
            // 시드 기반 랜덤 함수 사용 (멀티플레이어 동기화)
            this.skill = this._randomFunc() < this._skillRate ? (0, _constants.Skills).Impact : (0, _constants.Skills).None;
            this._coolTime = this._maxCoolTime;
        }
    }
    render(ctx, zoom, outline, isMinimap = false, skin, viewPort) {
        const viewPortHw = viewPort.w / viewPort.zoom / 2;
        const viewPortHh = viewPort.h / viewPort.zoom / 2;
        const viewPortLeft = viewPort.x - viewPortHw;
        const viewPortRight = viewPort.x + viewPortHw;
        const viewPortTop = viewPort.y - viewPortHh - this.size / 2;
        const viewPortBottom = viewPort.y + viewPortHh;
        if (!isMinimap && (this.x < viewPortLeft || this.x > viewPortRight || this.y < viewPortTop || this.y > viewPortBottom)) return;
        const transform = ctx.getTransform();
        if (isMinimap) this._renderMinimap(ctx);
        else this._renderNormal(ctx, zoom, outline, skin);
        ctx.setTransform(transform);
    }
    _renderMinimap(ctx) {
        ctx.fillStyle = this.color;
        this._drawMarbleBody(ctx, true);
    }
    _drawMarbleBody(ctx, isMinimap) {
        ctx.beginPath();
        ctx.arc(this.x, this.y, isMinimap ? this.size : this.size / 2, 0, Math.PI * 2);
        ctx.fill();
    }
    _renderNormal(ctx, zoom, outline, skin) {
        const hs = this.size / 2;
        if (this._stuckTime > 0) ctx.fillStyle = `hsl(${this.hue} 100% ${70 + 25 * Math.min(1, this._stuckTime / (0, _constants.STUCK_DELAY))}%`;
        else ctx.fillStyle = `hsl(${this.hue} 100% ${70 + 25 * Math.min(1, this.impact / 500)}%`;
        // ctx.shadowColor = this.color;
        // ctx.shadowBlur = zoom / 2;
        if (skin) {
            ctx.translate(this.x, this.y);
            ctx.rotate(this.angle);
            ctx.drawImage(skin, -hs, -hs, hs * 2, hs * 2);
            ctx.rotate(-this.angle);
            ctx.translate(-this.x, -this.y);
        } else this._drawMarbleBody(ctx, false);
        ctx.shadowColor = '';
        ctx.shadowBlur = 0;
        this._drawName(ctx, zoom);
        if (outline) this._drawOutline(ctx, 2 / zoom);
        if ((0, _optionsDefault.default).useSkills) this._renderCooltime(ctx, zoom);
    // this._renderStuck(ctx, zoom); // for debug
    }
    _drawName(ctx, zoom) {
        ctx.font = `${12 / zoom}pt sans-serif`;
        ctx.strokeStyle = 'black';
        ctx.lineWidth = 2 / zoom;
        ctx.fillStyle = this.color;
        ctx.shadowBlur = 0;
        ctx.strokeText(this.name, this.x, this.y + 0.25);
        ctx.fillText(this.name, this.x, this.y + 0.25);
    }
    _drawOutline(ctx, lineWidth) {
        ctx.beginPath();
        ctx.strokeStyle = 'white';
        ctx.lineWidth = lineWidth;
        ctx.arc(this.x, this.y, this.size / 2, 0, Math.PI * 2);
        ctx.stroke();
    }
    _renderCooltime(ctx, zoom) {
        ctx.strokeStyle = 'red';
        ctx.lineWidth = 1 / zoom;
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.size / 2 + 2 / zoom, (0, _utils.rad)(270), (0, _utils.rad)(270 + 360 * this._coolTime / this._maxCoolTime));
        ctx.stroke();
    }
}

},{"./data/constants":"dKlb7","./utils/utils":"ljVDB","./options":"jebMA","./utils/Vector":"3pOEC","@parcel/transformer-js/src/esmodule-helpers.js":"jnFvT"}],"dKlb7":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "initialZoom", ()=>initialZoom);
parcelHelpers.export(exports, "canvasWidth", ()=>canvasWidth);
parcelHelpers.export(exports, "canvasHeight", ()=>canvasHeight);
parcelHelpers.export(exports, "zoomThreshold", ()=>zoomThreshold);
parcelHelpers.export(exports, "STUCK_DELAY", ()=>STUCK_DELAY);
parcelHelpers.export(exports, "Skills", ()=>Skills);
parcelHelpers.export(exports, "DefaultEntityColor", ()=>DefaultEntityColor);
parcelHelpers.export(exports, "DefaultBloomColor", ()=>DefaultBloomColor);
const initialZoom = 30;
const canvasWidth = 1600;
const canvasHeight = 900;
const zoomThreshold = 5;
const STUCK_DELAY = 5000;
var Skills = /*#__PURE__*/ function(Skills) {
    Skills[Skills["None"] = 0] = "None";
    Skills[Skills["Impact"] = 1] = "Impact";
    return Skills;
}({});
const DefaultEntityColor = {
    box: 'cyan',
    circle: 'yellow',
    polyline: 'white'
};
const DefaultBloomColor = {
    box: 'cyan',
    circle: 'yellow',
    polyline: 'cyan'
};

},{"@parcel/transformer-js/src/esmodule-helpers.js":"jnFvT"}],"ljVDB":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "rad", ()=>rad);
parcelHelpers.export(exports, "parseName", ()=>parseName);
parcelHelpers.export(exports, "pad", ()=>pad);
function rad(degree) {
    return Math.PI * degree / 180;
}
function getRegexValue(regex, str) {
    const result = regex.exec(str);
    return result ? result[1] : '';
}
function parseName(nameStr) {
    const weightRegex = /\/(\d+)/;
    const countRegex = /\*(\d+)/;
    const hasWeight = weightRegex.test(nameStr);
    const hasCount = countRegex.test(nameStr);
    const name = getRegexValue(/^\s*([^\/*]+)?/, nameStr);
    if (!name) return null;
    const weight = hasWeight ? parseInt(getRegexValue(weightRegex, nameStr)) : 1;
    const count = hasCount ? parseInt(getRegexValue(countRegex, nameStr)) : 1;
    return {
        name,
        weight,
        count
    };
}
function pad(v) {
    return v.toString().padStart(2, '0');
}

},{"@parcel/transformer-js/src/esmodule-helpers.js":"jnFvT"}],"jebMA":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
class Options {
    constructor(){
        this.useSkills = true;
        this.winningRank = 0;
        this.autoRecording = true;
    }
}
const options = new Options();
exports.default = options;

},{"@parcel/transformer-js/src/esmodule-helpers.js":"jnFvT"}],"3pOEC":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "Vector", ()=>Vector);
class Vector {
    static sub(v1, v2) {
        return {
            x: v2.x - v1.x,
            y: v2.y - v1.y
        };
    }
    static lenSq(v) {
        return v.x * v.x + v.y * v.y;
    }
    static len(v) {
        return Math.sqrt(this.lenSq(v));
    }
    static mul(v, scalar) {
        return {
            x: v.x * scalar,
            y: v.y * scalar
        };
    }
    static add(v1, v2) {
        return {
            x: v1.x + v2.x,
            y: v1.y + v2.y
        };
    }
}

},{"@parcel/transformer-js/src/esmodule-helpers.js":"jnFvT"}],"7yEm2":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "ParticleManager", ()=>ParticleManager);
var _particle = require("./particle");
class ParticleManager {
    update(deltaTime) {
        this._particles.forEach((particle)=>{
            particle.update(deltaTime);
        });
        this._particles = this._particles.filter((particle)=>!particle.isDestroy);
    }
    render(ctx) {
        this._particles.forEach((particle)=>particle.render(ctx));
    }
    shot(x, y) {
        for(let i = 0; i < 200; i++)this._particles.push(new (0, _particle.Particle)(x, y));
    }
    constructor(){
        this._particles = [];
    }
}

},{"./particle":"1fdhA","@parcel/transformer-js/src/esmodule-helpers.js":"jnFvT"}],"1fdhA":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "Particle", ()=>Particle);
var _utils = require("./utils/utils");
var _vector = require("./utils/Vector");
const lifetime = 3000;
class Particle {
    constructor(x, y){
        this._elapsed = 0;
        this.position = {
            x: 0,
            y: 0
        };
        this.force = {
            x: 0,
            y: 0
        };
        this.color = '';
        this.isDestroy = false;
        this.position.x = x;
        this.position.y = y;
        const force = Math.random() * 250;
        const ang = (0, _utils.rad)(90 * Math.random() - 180);
        const fx = Math.cos(ang) * force;
        const fy = Math.sin(ang) * force;
        this.color = `hsl(${Math.random() * 360} 50% 50%)`;
        this.force = {
            x: fx,
            y: fy
        };
    }
    update(deltaTime) {
        this._elapsed += deltaTime;
        const delta = (0, _vector.Vector).mul(this.force, deltaTime / 100);
        this.position = (0, _vector.Vector).add(this.position, delta);
        this.force.y += 10 * deltaTime / 100;
        if (this._elapsed > lifetime) this.isDestroy = true;
    }
    render(ctx) {
        ctx.save();
        ctx.globalAlpha = 1 - Math.pow(this._elapsed / lifetime, 2);
        ctx.fillStyle = this.color;
        ctx.fillRect(this.position.x, this.position.y, 20, 20);
        ctx.restore();
    }
}

},{"./utils/utils":"ljVDB","./utils/Vector":"3pOEC","@parcel/transformer-js/src/esmodule-helpers.js":"jnFvT"}],"cUMXH":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "stages", ()=>stages);
const stages = [
    {
        title: 'Wheel of fortune',
        goalY: 111,
        zoomY: 106.75,
        entities: [
            // polyline
            {
                position: {
                    x: 0,
                    y: 0
                },
                shape: {
                    type: 'polyline',
                    points: [
                        [
                            16.5,
                            -300
                        ],
                        [
                            9.25,
                            -300
                        ],
                        [
                            9.25,
                            8.5
                        ],
                        [
                            2,
                            19.25
                        ],
                        [
                            2,
                            26
                        ],
                        [
                            9.75,
                            30
                        ],
                        [
                            9.75,
                            33.5
                        ],
                        [
                            1.25,
                            41
                        ],
                        [
                            1.25,
                            53.75
                        ],
                        [
                            8.25,
                            58.75
                        ],
                        [
                            8.25,
                            63
                        ],
                        [
                            9.25,
                            64
                        ],
                        [
                            8.25,
                            65
                        ],
                        [
                            8.25,
                            99.25
                        ],
                        [
                            15.1,
                            106.75
                        ],
                        [
                            15.1,
                            111.75
                        ]
                    ],
                    rotation: 0
                },
                type: 'static',
                props: {
                    density: 1,
                    angularVelocity: 0,
                    restitution: 0
                }
            },
            {
                type: 'static',
                position: {
                    x: 0,
                    y: 0
                },
                props: {
                    density: 1,
                    angularVelocity: 0,
                    restitution: 0
                },
                shape: {
                    type: 'polyline',
                    rotation: 0,
                    points: [
                        [
                            16.5,
                            -300
                        ],
                        [
                            16.5,
                            9.25
                        ],
                        [
                            9.5,
                            20
                        ],
                        [
                            9.5,
                            22.5
                        ],
                        [
                            17.5,
                            26
                        ],
                        [
                            17.5,
                            33.5
                        ],
                        [
                            24,
                            38.5
                        ],
                        [
                            19,
                            45.5
                        ],
                        [
                            19,
                            55.5
                        ],
                        [
                            24,
                            59.25
                        ],
                        [
                            24,
                            63
                        ],
                        [
                            23,
                            64
                        ],
                        [
                            24,
                            65
                        ],
                        [
                            24,
                            100.5
                        ],
                        [
                            16,
                            106.75
                        ],
                        [
                            16,
                            111.75
                        ]
                    ]
                }
            },
            {
                type: 'static',
                position: {
                    x: 0,
                    y: 0
                },
                props: {
                    density: 1,
                    angularVelocity: 0,
                    restitution: 0
                },
                shape: {
                    type: 'polyline',
                    rotation: 0,
                    points: [
                        [
                            12.75,
                            37.5
                        ],
                        [
                            7,
                            43.5
                        ],
                        [
                            7,
                            49.75
                        ],
                        [
                            12.75,
                            53.75
                        ],
                        [
                            12.75,
                            37.5
                        ]
                    ]
                }
            },
            {
                type: 'static',
                position: {
                    x: 0,
                    y: 0
                },
                props: {
                    density: 1,
                    angularVelocity: 0,
                    restitution: 0
                },
                shape: {
                    type: 'polyline',
                    rotation: 0,
                    points: [
                        [
                            14.75,
                            37.5
                        ],
                        [
                            14.75,
                            43
                        ],
                        [
                            17.5,
                            40.25
                        ],
                        [
                            14.75,
                            37.5
                        ]
                    ]
                }
            },
            // boxes
            {
                position: {
                    x: 15.5,
                    y: 30.0
                },
                shape: {
                    type: 'box',
                    width: 0.2,
                    height: 0.2,
                    rotation: -45
                },
                type: 'static',
                props: {
                    density: 1,
                    angularVelocity: 0,
                    restitution: 1
                }
            },
            {
                position: {
                    x: 15.5,
                    y: 32
                },
                type: 'static',
                shape: {
                    type: 'box',
                    width: 0.2,
                    height: 0.2,
                    rotation: -45
                },
                props: {
                    density: 1,
                    angularVelocity: 0,
                    restitution: 0
                }
            },
            {
                position: {
                    x: 15.5,
                    y: 28
                },
                type: 'static',
                shape: {
                    type: 'box',
                    width: 0.2,
                    height: 0.2,
                    rotation: -45
                },
                props: {
                    density: 1,
                    angularVelocity: 0,
                    restitution: 0
                }
            },
            {
                position: {
                    x: 12.5,
                    y: 30
                },
                type: 'static',
                shape: {
                    type: 'box',
                    width: 0.2,
                    height: 0.2,
                    rotation: -45
                },
                props: {
                    density: 1,
                    angularVelocity: 0,
                    restitution: 0
                }
            },
            {
                position: {
                    x: 12.5,
                    y: 32
                },
                type: 'static',
                shape: {
                    type: 'box',
                    width: 0.2,
                    height: 0.2,
                    rotation: -45
                },
                props: {
                    density: 1,
                    angularVelocity: 0,
                    restitution: 0
                }
            },
            {
                position: {
                    x: 12.5,
                    y: 28
                },
                type: 'static',
                shape: {
                    type: 'box',
                    width: 0.2,
                    height: 0.2,
                    rotation: -45
                },
                props: {
                    density: 1,
                    angularVelocity: 0,
                    restitution: 0
                }
            },
            {
                position: {
                    x: 9.4,
                    y: 66.6
                },
                type: 'static',
                shape: {
                    type: 'box',
                    width: 0.6,
                    height: 0.1,
                    rotation: 45
                },
                props: {
                    density: 1,
                    angularVelocity: 0,
                    restitution: 0
                }
            },
            {
                position: {
                    x: 11.3,
                    y: 66.6
                },
                type: 'static',
                shape: {
                    type: 'box',
                    width: 0.6,
                    height: 0.1,
                    rotation: 45
                },
                props: {
                    density: 1,
                    angularVelocity: 0,
                    restitution: 0
                }
            },
            {
                position: {
                    x: 13.2,
                    y: 66.6
                },
                type: 'static',
                shape: {
                    type: 'box',
                    width: 0.6,
                    height: 0.1,
                    rotation: 45
                },
                props: {
                    density: 1,
                    angularVelocity: 0,
                    restitution: 0
                }
            },
            {
                position: {
                    x: 15.1,
                    y: 66.6
                },
                type: 'static',
                shape: {
                    type: 'box',
                    width: 0.6,
                    height: 0.1,
                    rotation: 45
                },
                props: {
                    density: 1,
                    angularVelocity: 0,
                    restitution: 0
                }
            },
            {
                position: {
                    x: 17,
                    y: 66.6
                },
                type: 'static',
                shape: {
                    type: 'box',
                    width: 0.6,
                    height: 0.1,
                    rotation: 45
                },
                props: {
                    density: 1,
                    angularVelocity: 0,
                    restitution: 0
                }
            },
            {
                position: {
                    x: 18.9,
                    y: 66.6
                },
                type: 'static',
                shape: {
                    type: 'box',
                    width: 0.6,
                    height: 0.1,
                    rotation: 45
                },
                props: {
                    density: 1,
                    angularVelocity: 0,
                    restitution: 0
                }
            },
            {
                position: {
                    x: 20.699999999999996,
                    y: 66.6
                },
                type: 'static',
                shape: {
                    type: 'box',
                    width: 0.6,
                    height: 0.1,
                    rotation: 45
                },
                props: {
                    density: 1,
                    angularVelocity: 0,
                    restitution: 0
                }
            },
            {
                position: {
                    x: 22.7,
                    y: 66.6
                },
                type: 'static',
                shape: {
                    type: 'box',
                    width: 0.6,
                    height: 0.1,
                    rotation: 45
                },
                props: {
                    density: 1,
                    angularVelocity: 0,
                    restitution: 0
                }
            },
            {
                position: {
                    x: 9.4,
                    y: 69.1
                },
                type: 'static',
                shape: {
                    type: 'box',
                    width: 0.6,
                    height: 0.1,
                    rotation: -45
                },
                props: {
                    density: 1,
                    angularVelocity: 0,
                    restitution: 0
                }
            },
            {
                position: {
                    x: 11.3,
                    y: 69.1
                },
                type: 'static',
                shape: {
                    type: 'box',
                    width: 0.6,
                    height: 0.1,
                    rotation: -45
                },
                props: {
                    density: 1,
                    angularVelocity: 0,
                    restitution: 0
                }
            },
            {
                position: {
                    x: 13.2,
                    y: 69.1
                },
                type: 'static',
                shape: {
                    type: 'box',
                    width: 0.6,
                    height: 0.1,
                    rotation: -45
                },
                props: {
                    density: 1,
                    angularVelocity: 0,
                    restitution: 0
                }
            },
            {
                position: {
                    x: 15.1,
                    y: 69.1
                },
                type: 'static',
                shape: {
                    type: 'box',
                    width: 0.6,
                    height: 0.1,
                    rotation: -45
                },
                props: {
                    density: 1,
                    angularVelocity: 0,
                    restitution: 0
                }
            },
            {
                position: {
                    x: 17,
                    y: 69.1
                },
                type: 'static',
                shape: {
                    type: 'box',
                    width: 0.6,
                    height: 0.1,
                    rotation: -45
                },
                props: {
                    density: 1,
                    angularVelocity: 0,
                    restitution: 0
                }
            },
            {
                position: {
                    x: 18.9,
                    y: 69.1
                },
                type: 'static',
                shape: {
                    type: 'box',
                    width: 0.6,
                    height: 0.1,
                    rotation: -45
                },
                props: {
                    density: 1,
                    angularVelocity: 0,
                    restitution: 0
                }
            },
            {
                position: {
                    x: 20.699999999999996,
                    y: 69.1
                },
                type: 'static',
                shape: {
                    type: 'box',
                    width: 0.6,
                    height: 0.1,
                    rotation: -45
                },
                props: {
                    density: 1,
                    angularVelocity: 0,
                    restitution: 0
                }
            },
            {
                position: {
                    x: 22.7,
                    y: 69.1
                },
                type: 'static',
                shape: {
                    type: 'box',
                    width: 0.6,
                    height: 0.1,
                    rotation: -45
                },
                props: {
                    density: 1,
                    angularVelocity: 0,
                    restitution: 0
                }
            },
            {
                position: {
                    x: 9.5,
                    y: 92
                },
                type: 'static',
                shape: {
                    type: 'box',
                    width: 0.25,
                    height: 0.25,
                    rotation: 0.7853981633974483
                },
                props: {
                    density: 1,
                    angularVelocity: 0,
                    restitution: 0
                }
            },
            {
                position: {
                    x: 12.75,
                    y: 92
                },
                type: 'static',
                shape: {
                    type: 'box',
                    width: 0.25,
                    height: 0.25,
                    rotation: 0.7853981633974483
                },
                props: {
                    density: 1,
                    angularVelocity: 0,
                    restitution: 0
                }
            },
            {
                position: {
                    x: 16,
                    y: 92
                },
                type: 'static',
                shape: {
                    type: 'box',
                    width: 0.25,
                    height: 0.25,
                    rotation: 0.7853981633974483
                },
                props: {
                    density: 1,
                    angularVelocity: 0,
                    restitution: 0
                }
            },
            {
                position: {
                    x: 19.25,
                    y: 92
                },
                type: 'static',
                shape: {
                    type: 'box',
                    width: 0.25,
                    height: 0.25,
                    rotation: 0.7853981633974483
                },
                props: {
                    density: 1,
                    angularVelocity: 0,
                    restitution: 0
                }
            },
            {
                position: {
                    x: 22.5,
                    y: 92
                },
                type: 'static',
                shape: {
                    type: 'box',
                    width: 0.25,
                    height: 0.25,
                    rotation: 0.7853981633974483
                },
                props: {
                    density: 1,
                    angularVelocity: 0,
                    restitution: 0
                }
            },
            {
                position: {
                    x: 11,
                    y: 95
                },
                type: 'static',
                shape: {
                    type: 'box',
                    width: 0.25,
                    height: 0.25,
                    rotation: 0.7853981633974483
                },
                props: {
                    density: 1,
                    angularVelocity: 0,
                    restitution: 0
                }
            },
            {
                position: {
                    x: 14.25,
                    y: 95
                },
                type: 'static',
                shape: {
                    type: 'box',
                    width: 0.25,
                    height: 0.25,
                    rotation: 0.7853981633974483
                },
                props: {
                    density: 1,
                    angularVelocity: 0,
                    restitution: 0
                }
            },
            {
                position: {
                    x: 17.5,
                    y: 95
                },
                type: 'static',
                shape: {
                    type: 'box',
                    width: 0.25,
                    height: 0.25,
                    rotation: 0.7853981633974483
                },
                props: {
                    density: 1,
                    angularVelocity: 0,
                    restitution: 0
                }
            },
            {
                position: {
                    x: 20.75,
                    y: 95
                },
                type: 'static',
                shape: {
                    type: 'box',
                    width: 0.25,
                    height: 0.25,
                    rotation: 0.7853981633974483
                },
                props: {
                    density: 1,
                    angularVelocity: 0,
                    restitution: 0
                }
            },
            {
                position: {
                    x: 9.5,
                    y: 98
                },
                type: 'static',
                shape: {
                    type: 'box',
                    width: 0.25,
                    height: 0.25,
                    rotation: 0.7853981633974483
                },
                props: {
                    density: 1,
                    angularVelocity: 0,
                    restitution: 0
                }
            },
            {
                position: {
                    x: 12.75,
                    y: 98
                },
                type: 'static',
                shape: {
                    type: 'box',
                    width: 0.25,
                    height: 0.25,
                    rotation: 0.7853981633974483
                },
                props: {
                    density: 1,
                    angularVelocity: 0,
                    restitution: 0
                }
            },
            {
                position: {
                    x: 16,
                    y: 98
                },
                type: 'static',
                shape: {
                    type: 'box',
                    width: 0.25,
                    height: 0.25,
                    rotation: 0.7853981633974483
                },
                props: {
                    density: 1,
                    angularVelocity: 0,
                    restitution: 0
                }
            },
            {
                position: {
                    x: 19.25,
                    y: 98
                },
                type: 'static',
                shape: {
                    type: 'box',
                    width: 0.25,
                    height: 0.25,
                    rotation: 0.7853981633974483
                },
                props: {
                    density: 1,
                    angularVelocity: 0,
                    restitution: 0
                }
            },
            {
                position: {
                    x: 22.5,
                    y: 98
                },
                type: 'static',
                shape: {
                    type: 'box',
                    width: 0.25,
                    height: 0.25,
                    rotation: 0.7853981633974483
                },
                props: {
                    density: 1,
                    angularVelocity: 0,
                    restitution: 0
                }
            },
            // wheels
            {
                position: {
                    x: 8,
                    y: 75
                },
                type: 'kinematic',
                shape: {
                    type: 'box',
                    width: 2,
                    height: 0.1,
                    rotation: 0
                },
                props: {
                    density: 1,
                    angularVelocity: 3.5,
                    restitution: 0
                }
            },
            {
                position: {
                    x: 12,
                    y: 75
                },
                type: 'kinematic',
                shape: {
                    type: 'box',
                    width: 2,
                    height: 0.1,
                    rotation: 0
                },
                props: {
                    density: 1,
                    angularVelocity: -3.5,
                    restitution: 0
                }
            },
            {
                position: {
                    x: 16,
                    y: 75
                },
                type: 'kinematic',
                shape: {
                    type: 'box',
                    width: 2,
                    height: 0.1,
                    rotation: 0
                },
                props: {
                    density: 1,
                    angularVelocity: 3.5,
                    restitution: 0
                }
            },
            {
                position: {
                    x: 20,
                    y: 75
                },
                type: 'kinematic',
                shape: {
                    type: 'box',
                    width: 2,
                    height: 0.1,
                    rotation: 0
                },
                props: {
                    density: 1,
                    angularVelocity: -3.5,
                    restitution: 0
                }
            },
            {
                position: {
                    x: 24,
                    y: 75
                },
                type: 'kinematic',
                shape: {
                    type: 'box',
                    width: 2,
                    height: 0.1,
                    rotation: 0
                },
                props: {
                    density: 1,
                    angularVelocity: 3.5,
                    restitution: 0
                }
            },
            {
                position: {
                    x: 14,
                    y: 106.75
                },
                type: 'kinematic',
                shape: {
                    type: 'box',
                    width: 2,
                    height: 0.1,
                    rotation: 0
                },
                props: {
                    density: 1,
                    angularVelocity: -1.2,
                    restitution: 0
                }
            }
        ]
    },
    {
        'title': 'BubblePop',
        'goalY': 83,
        'zoomY': 78,
        'entities': [
            {
                'type': 'static',
                'position': {
                    'x': 10.375,
                    'y': -108.5
                },
                'props': {
                    'angularVelocity': 0,
                    'density': 1,
                    'restitution': 0
                },
                'shape': {
                    'type': 'polyline',
                    'rotation': 0,
                    'points': [
                        [
                            6.125,
                            -191.5
                        ],
                        [
                            -1.125,
                            -191.5
                        ],
                        [
                            -1.125,
                            108.5
                        ],
                        [
                            -1.125,
                            151.5
                        ],
                        [
                            -6.125,
                            158.5
                        ],
                        [
                            -1.125,
                            161.5
                        ],
                        [
                            -1.125,
                            179.5
                        ],
                        [
                            -0.9128679656440362,
                            179.7498817789222
                        ],
                        [
                            -1.125,
                            179.9997635578444
                        ],
                        [
                            -1.125,
                            183.5
                        ],
                        [
                            1.625,
                            188.5
                        ],
                        [
                            1.625,
                            191.5
                        ]
                    ]
                }
            },
            {
                'type': 'static',
                'position': {
                    'x': 16.25,
                    'y': -108.5
                },
                'props': {
                    'angularVelocity': 0,
                    'density': 1,
                    'restitution': 0
                },
                'shape': {
                    'type': 'polyline',
                    'rotation': 0,
                    'points': [
                        [
                            0.25,
                            -191.5
                        ],
                        [
                            0.25,
                            158.5
                        ],
                        [
                            3.25,
                            162.5
                        ],
                        [
                            2.25,
                            164.5
                        ],
                        [
                            3.25,
                            166.5
                        ],
                        [
                            0.25,
                            169.5
                        ],
                        [
                            0.25,
                            179.5
                        ],
                        [
                            0.03786796564403616,
                            179.75925677892224
                        ],
                        [
                            0.25,
                            179.9997635578444
                        ],
                        [
                            0.25,
                            183.5
                        ],
                        [
                            -3.25,
                            188.5
                        ],
                        [
                            -3.25,
                            191.5
                        ]
                    ]
                }
            },
            {
                'type': 'static',
                'position': {
                    'x': 16.5,
                    'y': 55.75
                },
                'props': {
                    'angularVelocity': 0,
                    'density': 1,
                    'restitution': 0
                },
                'shape': {
                    'type': 'polyline',
                    'rotation': 0,
                    'points': [
                        [
                            0,
                            -3.25
                        ],
                        [
                            1,
                            -1.75
                        ],
                        [
                            0,
                            0.25
                        ],
                        [
                            1,
                            2.25
                        ],
                        [
                            0,
                            3.25
                        ],
                        [
                            -1,
                            0.25
                        ],
                        [
                            0,
                            -3.25
                        ]
                    ]
                }
            },
            {
                'type': 'static',
                'position': {
                    'x': 10.375,
                    'y': 48.25
                },
                'props': {
                    'angularVelocity': 0,
                    'density': 1,
                    'restitution': 0
                },
                'shape': {
                    'type': 'polyline',
                    'rotation': 0,
                    'points': [
                        [
                            -1.125,
                            -2.75
                        ],
                        [
                            -4.125,
                            1.25
                        ],
                        [
                            -1.125,
                            2.75
                        ],
                        [
                            4.125,
                            2.25
                        ],
                        [
                            -1.125,
                            -2.75
                        ]
                    ]
                }
            },
            {
                'type': 'static',
                'position': {
                    'x': 10.15625,
                    'y': 26.75
                },
                'props': {
                    'angularVelocity': 0,
                    'density': 1,
                    'restitution': 0
                },
                'shape': {
                    'type': 'polyline',
                    'rotation': 0,
                    'points': [
                        [
                            -0.90625,
                            -0.75
                        ],
                        [
                            0.90625,
                            0.75
                        ]
                    ]
                }
            },
            {
                'type': 'static',
                'position': {
                    'x': 15.59375,
                    'y': 26.75
                },
                'props': {
                    'angularVelocity': 0,
                    'density': 1,
                    'restitution': 0
                },
                'shape': {
                    'type': 'polyline',
                    'rotation': 0,
                    'points': [
                        [
                            0.90625,
                            -0.75
                        ],
                        [
                            -0.90625,
                            0.75
                        ]
                    ]
                }
            },
            {
                'type': 'static',
                'position': {
                    'x': 12.875,
                    'y': 29.25
                },
                'props': {
                    'angularVelocity': 0,
                    'density': 1,
                    'restitution': 0
                },
                'shape': {
                    'type': 'polyline',
                    'rotation': 0,
                    'points': [
                        [
                            -1.8125,
                            0.75
                        ],
                        [
                            0,
                            -0.75
                        ],
                        [
                            1.8125,
                            0.75
                        ]
                    ]
                }
            },
            {
                'type': 'static',
                'position': {
                    'x': 10.15625,
                    'y': 31.75
                },
                'props': {
                    'angularVelocity': 0,
                    'density': 1,
                    'restitution': 0
                },
                'shape': {
                    'type': 'polyline',
                    'rotation': 0,
                    'points': [
                        [
                            -0.90625,
                            -0.75
                        ],
                        [
                            0.90625,
                            0.75
                        ]
                    ]
                }
            },
            {
                'type': 'static',
                'position': {
                    'x': 15.59375,
                    'y': 31.75
                },
                'props': {
                    'angularVelocity': 0,
                    'density': 1,
                    'restitution': 0
                },
                'shape': {
                    'type': 'polyline',
                    'rotation': 0,
                    'points': [
                        [
                            0.90625,
                            -0.75
                        ],
                        [
                            -0.90625,
                            0.75
                        ]
                    ]
                }
            },
            {
                'type': 'static',
                'position': {
                    'x': 12.875,
                    'y': 34.25
                },
                'props': {
                    'angularVelocity': 0,
                    'density': 1,
                    'restitution': 0
                },
                'shape': {
                    'type': 'polyline',
                    'rotation': 0,
                    'points': [
                        [
                            -1.8125,
                            0.75
                        ],
                        [
                            0,
                            -0.75
                        ],
                        [
                            1.8125,
                            0.75
                        ]
                    ]
                }
            },
            {
                'type': 'static',
                'position': {
                    'x': 9.25,
                    'y': 18
                },
                'props': {
                    'angularVelocity': 0,
                    'density': 1,
                    'restitution': 0
                },
                'shape': {
                    'type': 'box',
                    'rotation': 0.7853981633974483,
                    'width': 0.15,
                    'height': 0.15
                }
            },
            {
                'type': 'static',
                'position': {
                    'x': 11.25,
                    'y': 18
                },
                'props': {
                    'angularVelocity': 0,
                    'density': 1,
                    'restitution': 0
                },
                'shape': {
                    'type': 'box',
                    'rotation': 0.7853981633974483,
                    'width': 0.15,
                    'height': 0.15
                }
            },
            {
                'type': 'static',
                'position': {
                    'x': 13.25,
                    'y': 18
                },
                'props': {
                    'angularVelocity': 0,
                    'density': 1,
                    'restitution': 0
                },
                'shape': {
                    'type': 'box',
                    'rotation': 0.7853981633974483,
                    'width': 0.15,
                    'height': 0.15
                }
            },
            {
                'type': 'static',
                'position': {
                    'x': 15.25,
                    'y': 18
                },
                'props': {
                    'angularVelocity': 0,
                    'density': 1,
                    'restitution': 0
                },
                'shape': {
                    'type': 'box',
                    'rotation': 0.7853981633974483,
                    'width': 0.15,
                    'height': 0.15
                }
            },
            {
                'type': 'static',
                'position': {
                    'x': 10.5,
                    'y': 19
                },
                'props': {
                    'angularVelocity': 0,
                    'density': 1,
                    'restitution': 0
                },
                'shape': {
                    'type': 'box',
                    'rotation': 0.7853981633974483,
                    'width': 0.15,
                    'height': 0.15
                }
            },
            {
                'type': 'static',
                'position': {
                    'x': 12.5,
                    'y': 19
                },
                'props': {
                    'angularVelocity': 0,
                    'density': 1,
                    'restitution': 0
                },
                'shape': {
                    'type': 'box',
                    'rotation': 0.7853981633974483,
                    'width': 0.15,
                    'height': 0.15
                }
            },
            {
                'type': 'static',
                'position': {
                    'x': 14.5,
                    'y': 19
                },
                'props': {
                    'angularVelocity': 0,
                    'density': 1,
                    'restitution': 0
                },
                'shape': {
                    'type': 'box',
                    'rotation': 0.7853981633974483,
                    'width': 0.15,
                    'height': 0.15
                }
            },
            {
                'type': 'static',
                'position': {
                    'x': 16.5,
                    'y': 19
                },
                'props': {
                    'angularVelocity': 0,
                    'density': 1,
                    'restitution': 0
                },
                'shape': {
                    'type': 'box',
                    'rotation': 0.7853981633974483,
                    'width': 0.15,
                    'height': 0.15
                }
            },
            {
                'type': 'static',
                'position': {
                    'x': 9.25,
                    'y': 20
                },
                'props': {
                    'angularVelocity': 0,
                    'density': 1,
                    'restitution': 0
                },
                'shape': {
                    'type': 'box',
                    'rotation': 0.7853981633974483,
                    'width': 0.15,
                    'height': 0.15
                }
            },
            {
                'type': 'static',
                'position': {
                    'x': 11.25,
                    'y': 20
                },
                'props': {
                    'angularVelocity': 0,
                    'density': 1,
                    'restitution': 0
                },
                'shape': {
                    'type': 'box',
                    'rotation': 0.7853981633974483,
                    'width': 0.15,
                    'height': 0.15
                }
            },
            {
                'type': 'static',
                'position': {
                    'x': 13.25,
                    'y': 20
                },
                'props': {
                    'angularVelocity': 0,
                    'density': 1,
                    'restitution': 0
                },
                'shape': {
                    'type': 'box',
                    'rotation': 0.7853981633974483,
                    'width': 0.15,
                    'height': 0.15
                }
            },
            {
                'type': 'static',
                'position': {
                    'x': 15.25,
                    'y': 20
                },
                'props': {
                    'angularVelocity': 0,
                    'density': 1,
                    'restitution': 0
                },
                'shape': {
                    'type': 'box',
                    'rotation': 0.7853981633974483,
                    'width': 0.15,
                    'height': 0.15
                }
            },
            {
                'type': 'static',
                'position': {
                    'x': 10.5,
                    'y': 21
                },
                'props': {
                    'angularVelocity': 0,
                    'density': 1,
                    'restitution': 0
                },
                'shape': {
                    'type': 'box',
                    'rotation': 0.7853981633974483,
                    'width': 0.15,
                    'height': 0.15
                }
            },
            {
                'type': 'static',
                'position': {
                    'x': 12.5,
                    'y': 21
                },
                'props': {
                    'angularVelocity': 0,
                    'density': 1,
                    'restitution': 0
                },
                'shape': {
                    'type': 'box',
                    'rotation': 0.7853981633974483,
                    'width': 0.15,
                    'height': 0.15
                }
            },
            {
                'type': 'static',
                'position': {
                    'x': 14.5,
                    'y': 21
                },
                'props': {
                    'angularVelocity': 0,
                    'density': 1,
                    'restitution': 0
                },
                'shape': {
                    'type': 'box',
                    'rotation': 0.7853981633974483,
                    'width': 0.15,
                    'height': 0.15
                }
            },
            {
                'type': 'static',
                'position': {
                    'x': 16.5,
                    'y': 21
                },
                'props': {
                    'angularVelocity': 0,
                    'density': 1,
                    'restitution': 0
                },
                'shape': {
                    'type': 'box',
                    'rotation': 0.7853981633974483,
                    'width': 0.15,
                    'height': 0.15
                }
            },
            {
                'type': 'static',
                'position': {
                    'x': 9.25,
                    'y': 22
                },
                'props': {
                    'angularVelocity': 0,
                    'density': 1,
                    'restitution': 0
                },
                'shape': {
                    'type': 'box',
                    'rotation': 0.7853981633974483,
                    'width': 0.15,
                    'height': 0.15
                }
            },
            {
                'type': 'static',
                'position': {
                    'x': 11.25,
                    'y': 22
                },
                'props': {
                    'angularVelocity': 0,
                    'density': 1,
                    'restitution': 0
                },
                'shape': {
                    'type': 'box',
                    'rotation': 0.7853981633974483,
                    'width': 0.15,
                    'height': 0.15
                }
            },
            {
                'type': 'static',
                'position': {
                    'x': 13.25,
                    'y': 22
                },
                'props': {
                    'angularVelocity': 0,
                    'density': 1,
                    'restitution': 0
                },
                'shape': {
                    'type': 'box',
                    'rotation': 0.7853981633974483,
                    'width': 0.15,
                    'height': 0.15
                }
            },
            {
                'type': 'static',
                'position': {
                    'x': 15.25,
                    'y': 22
                },
                'props': {
                    'angularVelocity': 0,
                    'density': 1,
                    'restitution': 0
                },
                'shape': {
                    'type': 'box',
                    'rotation': 0.7853981633974483,
                    'width': 0.15,
                    'height': 0.15
                }
            },
            {
                'type': 'static',
                'position': {
                    'x': 10.5,
                    'y': 23
                },
                'props': {
                    'angularVelocity': 0,
                    'density': 1,
                    'restitution': 0
                },
                'shape': {
                    'type': 'box',
                    'rotation': 0.7853981633974483,
                    'width': 0.15,
                    'height': 0.15
                }
            },
            {
                'type': 'static',
                'position': {
                    'x': 12.5,
                    'y': 23
                },
                'props': {
                    'angularVelocity': 0,
                    'density': 1,
                    'restitution': 0
                },
                'shape': {
                    'type': 'box',
                    'rotation': 0.7853981633974483,
                    'width': 0.15,
                    'height': 0.15
                }
            },
            {
                'type': 'static',
                'position': {
                    'x': 14.5,
                    'y': 23
                },
                'props': {
                    'angularVelocity': 0,
                    'density': 1,
                    'restitution': 0
                },
                'shape': {
                    'type': 'box',
                    'rotation': 0.7853981633974483,
                    'width': 0.15,
                    'height': 0.15
                }
            },
            {
                'type': 'static',
                'position': {
                    'x': 16.5,
                    'y': 23
                },
                'props': {
                    'angularVelocity': 0,
                    'density': 1,
                    'restitution': 0
                },
                'shape': {
                    'type': 'box',
                    'rotation': 0.7853981633974483,
                    'width': 0.15,
                    'height': 0.15
                }
            },
            {
                'type': 'static',
                'position': {
                    'x': 9.400000000000002,
                    'y': 39
                },
                'props': {
                    'angularVelocity': 0,
                    'density': 1,
                    'restitution': 0
                },
                'shape': {
                    'type': 'box',
                    'rotation': 0.7853981633974483,
                    'width': 3,
                    'height': 3
                }
            },
            {
                'type': 'static',
                'position': {
                    'x': 16.5,
                    'y': 43
                },
                'props': {
                    'angularVelocity': 0,
                    'density': 1,
                    'restitution': 0
                },
                'shape': {
                    'type': 'box',
                    'rotation': 0.7853981633974483,
                    'width': 3,
                    'height': 3
                }
            },
            {
                'type': 'kinematic',
                'position': {
                    'x': 10.7,
                    'y': 10
                },
                'props': {
                    'angularVelocity': 10,
                    'density': 1,
                    'restitution': 0
                },
                'shape': {
                    'type': 'box',
                    'rotation': 0,
                    'width': 0.5,
                    'height': 0.1
                }
            },
            {
                'type': 'kinematic',
                'position': {
                    'x': 14.7,
                    'y': 10
                },
                'props': {
                    'angularVelocity': -10,
                    'density': 1,
                    'restitution': 0
                },
                'shape': {
                    'type': 'box',
                    'rotation': 0,
                    'width': 0.5,
                    'height': 0.1
                }
            },
            {
                'type': 'kinematic',
                'position': {
                    'x': 12.7,
                    'y': 10
                },
                'props': {
                    'angularVelocity': 10,
                    'density': 1,
                    'restitution': 0
                },
                'shape': {
                    'type': 'box',
                    'rotation': 0,
                    'width': 0.5,
                    'height': 0.1
                }
            },
            {
                'type': 'kinematic',
                'position': {
                    'x': 10.7,
                    'y': 14
                },
                'props': {
                    'angularVelocity': -3,
                    'density': 1,
                    'restitution': 0
                },
                'shape': {
                    'type': 'box',
                    'rotation': 0,
                    'width': 2,
                    'height': 0.1
                }
            },
            {
                'type': 'kinematic',
                'position': {
                    'x': 14.7,
                    'y': 14
                },
                'props': {
                    'angularVelocity': 3,
                    'density': 1,
                    'restitution': 0
                },
                'shape': {
                    'type': 'box',
                    'rotation': 0,
                    'width': 2,
                    'height': 0.1
                }
            },
            {
                'type': 'kinematic',
                'position': {
                    'x': 11.2,
                    'y': 44
                },
                'props': {
                    'angularVelocity': -5,
                    'density': 1,
                    'restitution': 0
                },
                'shape': {
                    'type': 'box',
                    'rotation': 0,
                    'width': 0.5,
                    'height': 0.1
                }
            },
            {
                'type': 'kinematic',
                'position': {
                    'x': 10.3,
                    'y': 75
                },
                'props': {
                    'angularVelocity': 8,
                    'density': 1,
                    'restitution': 0
                },
                'shape': {
                    'type': 'box',
                    'rotation': 0,
                    'width': 1,
                    'height': 0.1
                }
            },
            {
                'type': 'kinematic',
                'position': {
                    'x': 15.462132034355964,
                    'y': 75
                },
                'props': {
                    'angularVelocity': -8,
                    'density': 1,
                    'restitution': 0
                },
                'shape': {
                    'type': 'box',
                    'rotation': 0,
                    'width': 1,
                    'height': 0.1
                }
            },
            {
                'type': 'static',
                'position': {
                    'x': 11,
                    'y': 65
                },
                'props': {
                    'angularVelocity': 0,
                    'density': 1,
                    'restitution': 1.5,
                    'life': 1
                },
                'shape': {
                    'type': 'circle',
                    'radius': 0.5
                }
            },
            {
                'type': 'static',
                'position': {
                    'x': 13,
                    'y': 65
                },
                'props': {
                    'angularVelocity': 0,
                    'density': 1,
                    'restitution': 1.5,
                    'life': 1
                },
                'shape': {
                    'type': 'circle',
                    'radius': 0.5
                }
            },
            {
                'type': 'static',
                'position': {
                    'x': 15,
                    'y': 65
                },
                'props': {
                    'angularVelocity': 0,
                    'density': 1,
                    'restitution': 1.5,
                    'life': 1
                },
                'shape': {
                    'type': 'circle',
                    'radius': 0.5
                }
            },
            {
                'type': 'static',
                'position': {
                    'x': 12,
                    'y': 67.5
                },
                'props': {
                    'angularVelocity': 0,
                    'density': 1,
                    'restitution': 1.5,
                    'life': 1
                },
                'shape': {
                    'type': 'circle',
                    'radius': 0.5
                }
            },
            {
                'type': 'static',
                'position': {
                    'x': 14,
                    'y': 67.5
                },
                'props': {
                    'angularVelocity': 0,
                    'density': 1,
                    'restitution': 1.5,
                    'life': 1
                },
                'shape': {
                    'type': 'circle',
                    'radius': 0.5
                }
            },
            {
                'type': 'static',
                'position': {
                    'x': 13,
                    'y': 69.77058813837772
                },
                'props': {
                    'angularVelocity': 0,
                    'density': 1,
                    'restitution': 1.5,
                    'life': 1
                },
                'shape': {
                    'type': 'circle',
                    'radius': 0.8
                }
            },
            {
                'type': 'static',
                'position': {
                    'x': 10.7,
                    'y': 77.5
                },
                'props': {
                    'angularVelocity': 0,
                    'density': 1,
                    'restitution': 1.5,
                    'life': 1
                },
                'shape': {
                    'type': 'circle',
                    'radius': 0.8
                }
            },
            {
                'type': 'static',
                'position': {
                    'x': 14.7,
                    'y': 77.5
                },
                'props': {
                    'angularVelocity': 0,
                    'density': 1,
                    'restitution': 1.5,
                    'life': 1
                },
                'shape': {
                    'type': 'circle',
                    'radius': 0.8
                }
            },
            {
                'type': 'static',
                'position': {
                    'x': 12.625,
                    'y': 80
                },
                'props': {
                    'angularVelocity': 0,
                    'density': 1,
                    'restitution': 1.5,
                    'life': 1
                },
                'shape': {
                    'type': 'circle',
                    'radius': 1.5
                }
            },
            {
                'type': 'static',
                'position': {
                    'x': 12.625,
                    'y': 80
                },
                'props': {
                    'angularVelocity': 0,
                    'density': 1,
                    'restitution': 1.5,
                    'life': 1
                },
                'shape': {
                    'type': 'circle',
                    'radius': 1.2
                }
            },
            {
                'type': 'kinematic',
                'position': {
                    'x': 12.625,
                    'y': 56.00000000000001
                },
                'props': {
                    'angularVelocity': -8,
                    'density': 1,
                    'restitution': 0
                },
                'shape': {
                    'type': 'box',
                    'rotation': 0,
                    'width': 1,
                    'height': 0.1
                }
            },
            {
                'type': 'static',
                'position': {
                    'x': 9.947604593262161,
                    'y': 62.59581680393866
                },
                'props': {
                    'angularVelocity': 0,
                    'density': 1,
                    'restitution': 1.5,
                    'life': 1
                },
                'shape': {
                    'type': 'circle',
                    'radius': 0.5
                }
            },
            {
                'type': 'static',
                'position': {
                    'x': 11.947604593262161,
                    'y': 62.59581680393866
                },
                'props': {
                    'angularVelocity': 0,
                    'density': 1,
                    'restitution': 1.5,
                    'life': 1
                },
                'shape': {
                    'type': 'circle',
                    'radius': 0.5
                }
            },
            {
                'type': 'static',
                'position': {
                    'x': 13.947604593262161,
                    'y': 62.59581680393866
                },
                'props': {
                    'angularVelocity': 0,
                    'density': 1,
                    'restitution': 1.5,
                    'life': 1
                },
                'shape': {
                    'type': 'circle',
                    'radius': 0.5
                }
            },
            {
                'type': 'static',
                'position': {
                    'x': 15.828283102570442,
                    'y': 62.59581680393866
                },
                'props': {
                    'angularVelocity': 0,
                    'density': 1,
                    'restitution': 1.5,
                    'life': 1
                },
                'shape': {
                    'type': 'circle',
                    'radius': 0.5
                }
            }
        ]
    },
    {
        title: 'Pot of greed',
        goalY: 111,
        zoomY: 110,
        entities: [
            {
                type: 'static',
                position: {
                    x: 0,
                    y: 0
                },
                props: {
                    density: 1,
                    angularVelocity: 0,
                    restitution: 0
                },
                shape: {
                    type: 'polyline',
                    rotation: 0,
                    points: [
                        [
                            17,
                            -300
                        ],
                        [
                            9,
                            -300
                        ],
                        [
                            9,
                            8.5
                        ],
                        [
                            2,
                            15
                        ],
                        [
                            6,
                            61.5
                        ]
                    ]
                }
            },
            {
                type: 'static',
                position: {
                    x: 0,
                    y: 0
                },
                props: {
                    density: 1,
                    angularVelocity: 0,
                    restitution: 0
                },
                shape: {
                    type: 'polyline',
                    rotation: 0,
                    points: [
                        [
                            7,
                            71
                        ],
                        [
                            9,
                            101
                        ],
                        [
                            8,
                            100.5
                        ],
                        [
                            6,
                            100
                        ],
                        [
                            5,
                            90
                        ],
                        [
                            4,
                            70
                        ],
                        [
                            7,
                            71
                        ]
                    ]
                }
            },
            {
                type: 'static',
                position: {
                    x: 0,
                    y: 0
                },
                props: {
                    density: 1,
                    angularVelocity: 0,
                    restitution: 0
                },
                shape: {
                    type: 'polyline',
                    rotation: 0,
                    points: [
                        [
                            17,
                            -300
                        ],
                        [
                            17,
                            8.5
                        ],
                        [
                            24,
                            15
                        ],
                        [
                            20,
                            61.5
                        ]
                    ]
                }
            },
            {
                type: 'static',
                position: {
                    x: 0,
                    y: 0
                },
                props: {
                    density: 1,
                    angularVelocity: 0,
                    restitution: 0
                },
                shape: {
                    type: 'polyline',
                    rotation: 0,
                    points: [
                        [
                            19,
                            71
                        ],
                        [
                            17,
                            101
                        ],
                        [
                            18,
                            100.5
                        ],
                        [
                            20,
                            100
                        ],
                        [
                            21,
                            90
                        ],
                        [
                            22,
                            70
                        ],
                        [
                            19,
                            71
                        ]
                    ]
                }
            },
            {
                type: 'static',
                position: {
                    x: 0,
                    y: 0
                },
                props: {
                    density: 1,
                    angularVelocity: 0,
                    restitution: 0
                },
                shape: {
                    type: 'polyline',
                    rotation: 0,
                    points: [
                        [
                            11,
                            88
                        ],
                        [
                            12,
                            90
                        ],
                        [
                            12,
                            112
                        ]
                    ]
                }
            },
            {
                type: 'static',
                position: {
                    x: 0,
                    y: 0
                },
                props: {
                    density: 1,
                    angularVelocity: 0,
                    restitution: 0
                },
                shape: {
                    type: 'polyline',
                    rotation: 0,
                    points: [
                        [
                            15,
                            88
                        ],
                        [
                            14,
                            90
                        ],
                        [
                            14,
                            112
                        ]
                    ]
                }
            },
            {
                type: 'static',
                position: {
                    x: 0,
                    y: 0
                },
                props: {
                    density: 1,
                    angularVelocity: 0,
                    restitution: 0
                },
                shape: {
                    type: 'polyline',
                    rotation: 0,
                    points: [
                        [
                            12,
                            102
                        ],
                        [
                            11,
                            103
                        ],
                        [
                            9,
                            104
                        ],
                        [
                            8,
                            104
                        ],
                        [
                            6,
                            103
                        ],
                        [
                            5,
                            102
                        ],
                        [
                            4,
                            100
                        ],
                        [
                            3,
                            90
                        ],
                        [
                            2,
                            70
                        ],
                        [
                            3,
                            65
                        ],
                        [
                            4,
                            63
                        ],
                        [
                            5,
                            62
                        ],
                        [
                            6,
                            61.5
                        ]
                    ]
                }
            },
            {
                type: 'static',
                position: {
                    x: 0,
                    y: 0
                },
                props: {
                    density: 1,
                    angularVelocity: 0,
                    restitution: 0
                },
                shape: {
                    type: 'polyline',
                    rotation: 0,
                    points: [
                        [
                            14,
                            102
                        ],
                        [
                            15,
                            103
                        ],
                        [
                            17,
                            104
                        ],
                        [
                            18,
                            104
                        ],
                        [
                            20,
                            103
                        ],
                        [
                            21,
                            102
                        ],
                        [
                            22,
                            100
                        ],
                        [
                            23,
                            90
                        ],
                        [
                            24,
                            70
                        ],
                        [
                            23,
                            65
                        ],
                        [
                            22,
                            63
                        ],
                        [
                            21,
                            62
                        ],
                        [
                            20,
                            61.5
                        ]
                    ]
                }
            },
            {
                position: {
                    x: 13,
                    y: 20
                },
                type: 'static',
                shape: {
                    type: 'box',
                    width: 3,
                    height: 3,
                    rotation: 0.7853981633974483
                },
                props: {
                    density: 1,
                    angularVelocity: 0,
                    restitution: 0
                }
            },
            {
                position: {
                    x: 13,
                    y: 55
                },
                type: 'static',
                shape: {
                    type: 'box',
                    width: 3,
                    height: 3,
                    rotation: 0.7853981633974483
                },
                props: {
                    density: 1,
                    angularVelocity: 0,
                    restitution: 0
                }
            },
            {
                position: {
                    x: 8,
                    y: 37
                },
                type: 'static',
                shape: {
                    type: 'box',
                    width: 2,
                    height: 2,
                    rotation: 0.7853981633974483
                },
                props: {
                    density: 1,
                    angularVelocity: 0,
                    restitution: 0
                }
            },
            {
                position: {
                    x: 18,
                    y: 37
                },
                type: 'static',
                shape: {
                    type: 'box',
                    width: 2,
                    height: 2,
                    rotation: 0.7853981633974483
                },
                props: {
                    density: 1,
                    angularVelocity: 0,
                    restitution: 0
                }
            },
            {
                position: {
                    x: 11,
                    y: 12
                },
                type: 'kinematic',
                shape: {
                    type: 'box',
                    width: 2,
                    height: 0.1,
                    rotation: 0
                },
                props: {
                    density: 1,
                    angularVelocity: -3,
                    restitution: 0
                }
            },
            {
                position: {
                    x: 15,
                    y: 12
                },
                type: 'kinematic',
                shape: {
                    type: 'box',
                    width: 2,
                    height: 0.1,
                    rotation: 0
                },
                props: {
                    density: 1,
                    angularVelocity: 3,
                    restitution: 0
                }
            },
            {
                position: {
                    x: 8,
                    y: 104
                },
                type: 'kinematic',
                shape: {
                    type: 'box',
                    width: 1,
                    height: 0.1,
                    rotation: 0
                },
                props: {
                    density: 1,
                    angularVelocity: -10,
                    restitution: 0
                }
            },
            {
                position: {
                    x: 6,
                    y: 103
                },
                type: 'kinematic',
                shape: {
                    type: 'box',
                    width: 1.5,
                    height: 0.1,
                    rotation: 0
                },
                props: {
                    density: 1,
                    angularVelocity: -10,
                    restitution: 0
                }
            },
            {
                position: {
                    x: 4,
                    y: 100
                },
                type: 'kinematic',
                shape: {
                    type: 'box',
                    width: 1.5,
                    height: 0.1,
                    rotation: 0
                },
                props: {
                    density: 1,
                    angularVelocity: -10,
                    restitution: 0
                }
            },
            {
                position: {
                    x: 3.5,
                    y: 95
                },
                type: 'kinematic',
                shape: {
                    type: 'box',
                    width: 2,
                    height: 0.1,
                    rotation: 0
                },
                props: {
                    density: 1,
                    angularVelocity: -10,
                    restitution: 0
                }
            },
            {
                position: {
                    x: 3,
                    y: 90
                },
                type: 'kinematic',
                shape: {
                    type: 'box',
                    width: 2,
                    height: 0.1,
                    rotation: 0
                },
                props: {
                    density: 1,
                    angularVelocity: -10,
                    restitution: 0
                }
            },
            {
                position: {
                    x: 2.75,
                    y: 85
                },
                type: 'kinematic',
                shape: {
                    type: 'box',
                    width: 2,
                    height: 0.1,
                    rotation: 0
                },
                props: {
                    density: 1,
                    angularVelocity: -10,
                    restitution: 0
                }
            },
            {
                position: {
                    x: 2.5,
                    y: 80
                },
                type: 'kinematic',
                shape: {
                    type: 'box',
                    width: 2,
                    height: 0.1,
                    rotation: 0
                },
                props: {
                    density: 1,
                    angularVelocity: -10,
                    restitution: 0
                }
            },
            {
                position: {
                    x: 2.25,
                    y: 75
                },
                type: 'kinematic',
                shape: {
                    type: 'box',
                    width: 2,
                    height: 0.1,
                    rotation: 0
                },
                props: {
                    density: 1,
                    angularVelocity: -10,
                    restitution: 0
                }
            },
            {
                position: {
                    x: 2,
                    y: 70
                },
                type: 'kinematic',
                shape: {
                    type: 'box',
                    width: 2,
                    height: 0.1,
                    rotation: 0
                },
                props: {
                    density: 1,
                    angularVelocity: -10,
                    restitution: 0
                }
            },
            {
                position: {
                    x: 18,
                    y: 104
                },
                type: 'kinematic',
                shape: {
                    type: 'box',
                    width: 1,
                    height: 0.1,
                    rotation: 0
                },
                props: {
                    density: 1,
                    angularVelocity: 10,
                    restitution: 0
                }
            },
            {
                position: {
                    x: 20,
                    y: 103
                },
                type: 'kinematic',
                shape: {
                    type: 'box',
                    width: 1.5,
                    height: 0.1,
                    rotation: 0
                },
                props: {
                    density: 1,
                    angularVelocity: 10,
                    restitution: 0
                }
            },
            {
                position: {
                    x: 22,
                    y: 100
                },
                type: 'kinematic',
                shape: {
                    type: 'box',
                    width: 1.5,
                    height: 0.1,
                    rotation: 0
                },
                props: {
                    density: 1,
                    angularVelocity: 10,
                    restitution: 0
                }
            },
            {
                position: {
                    x: 22.5,
                    y: 95
                },
                type: 'kinematic',
                shape: {
                    type: 'box',
                    width: 2,
                    height: 0.1,
                    rotation: 0
                },
                props: {
                    density: 1,
                    angularVelocity: 10,
                    restitution: 0
                }
            },
            {
                position: {
                    x: 23,
                    y: 90
                },
                type: 'kinematic',
                shape: {
                    type: 'box',
                    width: 2,
                    height: 0.1,
                    rotation: 0
                },
                props: {
                    density: 1,
                    angularVelocity: 10,
                    restitution: 0
                }
            },
            {
                position: {
                    x: 23.25,
                    y: 85
                },
                type: 'kinematic',
                shape: {
                    type: 'box',
                    width: 2,
                    height: 0.1,
                    rotation: 0
                },
                props: {
                    density: 1,
                    angularVelocity: 10,
                    restitution: 0
                }
            },
            {
                position: {
                    x: 23.5,
                    y: 80
                },
                type: 'kinematic',
                shape: {
                    type: 'box',
                    width: 2,
                    height: 0.1,
                    rotation: 0
                },
                props: {
                    density: 1,
                    angularVelocity: 10,
                    restitution: 0
                }
            },
            {
                position: {
                    x: 23.75,
                    y: 75
                },
                type: 'kinematic',
                shape: {
                    type: 'box',
                    width: 2,
                    height: 0.1,
                    rotation: 0
                },
                props: {
                    density: 1,
                    angularVelocity: 10,
                    restitution: 0
                }
            },
            {
                position: {
                    x: 24,
                    y: 70
                },
                type: 'kinematic',
                shape: {
                    type: 'box',
                    width: 2,
                    height: 0.1,
                    rotation: 0
                },
                props: {
                    density: 1,
                    angularVelocity: 10,
                    restitution: 0
                }
            }
        ]
    },
    {
        title: 'Yoru ni Kakeru',
        goalY: 248,
        zoomY: 234.5,
        entities: [
            {
                position: {
                    x: 2,
                    y: 0
                },
                shape: {
                    type: 'box',
                    width: 1,
                    height: 800,
                    rotation: 0,
                    color: '#222',
                    bloomColor: '#777'
                },
                type: 'static',
                props: {
                    density: 500,
                    angularVelocity: 0,
                    restitution: 0
                }
            },
            {
                type: 'static',
                position: {
                    x: 21,
                    y: 0
                },
                props: {
                    density: 500,
                    angularVelocity: 0,
                    restitution: 0
                },
                shape: {
                    type: 'box',
                    rotation: 0,
                    width: 1,
                    height: 800,
                    color: '#222',
                    bloomColor: '#777'
                }
            },
            {
                position: {
                    x: 4.0,
                    y: 25.0
                },
                shape: {
                    type: 'box',
                    width: 0.2,
                    height: 0.2,
                    rotation: -45,
                    color: '#818fb4'
                },
                type: 'static',
                props: {
                    density: 1,
                    angularVelocity: 0,
                    restitution: 1
                }
            },
            {
                position: {
                    x: 4.0,
                    y: 30.0
                },
                type: 'static',
                shape: {
                    type: 'box',
                    width: 0.2,
                    height: 0.2,
                    rotation: -45,
                    color: '#818fb4'
                },
                props: {
                    density: 1,
                    angularVelocity: 0,
                    restitution: 0
                }
            },
            {
                position: {
                    x: 4.0,
                    y: 35.0
                },
                type: 'static',
                shape: {
                    type: 'box',
                    width: 0.2,
                    height: 0.2,
                    rotation: -45,
                    color: '#818fb4'
                },
                props: {
                    density: 1,
                    angularVelocity: 0,
                    restitution: 0
                }
            },
            {
                position: {
                    x: 4.0,
                    y: 40.0
                },
                type: 'static',
                shape: {
                    type: 'box',
                    width: 0.2,
                    height: 0.2,
                    rotation: -45,
                    color: '#818fb4'
                },
                props: {
                    density: 1,
                    angularVelocity: 0,
                    restitution: 0
                }
            },
            {
                position: {
                    x: 9.0,
                    y: 25.0
                },
                type: 'static',
                shape: {
                    type: 'box',
                    width: 0.2,
                    height: 0.2,
                    rotation: -45,
                    color: '#818fb4'
                },
                props: {
                    density: 1,
                    angularVelocity: 0,
                    restitution: 0
                }
            },
            {
                position: {
                    x: 9.0,
                    y: 30.0
                },
                type: 'static',
                shape: {
                    type: 'box',
                    width: 0.2,
                    height: 0.2,
                    rotation: -45,
                    color: '#818fb4'
                },
                props: {
                    density: 1,
                    angularVelocity: 0,
                    restitution: 0
                }
            },
            {
                position: {
                    x: 9.0,
                    y: 35.0
                },
                type: 'static',
                shape: {
                    type: 'box',
                    width: 0.2,
                    height: 0.2,
                    rotation: -45,
                    color: '#818fb4'
                },
                props: {
                    density: 1,
                    angularVelocity: 0,
                    restitution: 0
                }
            },
            {
                position: {
                    x: 9.0,
                    y: 40.0
                },
                type: 'static',
                shape: {
                    type: 'box',
                    width: 0.2,
                    height: 0.2,
                    rotation: -45,
                    color: '#818fb4'
                },
                props: {
                    density: 1,
                    angularVelocity: 0,
                    restitution: 0
                }
            },
            {
                position: {
                    x: 14.0,
                    y: 25.0
                },
                type: 'static',
                shape: {
                    type: 'box',
                    width: 0.2,
                    height: 0.2,
                    rotation: -45,
                    color: '#818fb4'
                },
                props: {
                    density: 1,
                    angularVelocity: 0,
                    restitution: 0
                }
            },
            {
                position: {
                    x: 14.0,
                    y: 30.0
                },
                type: 'static',
                shape: {
                    type: 'box',
                    width: 0.2,
                    height: 0.2,
                    rotation: -45,
                    color: '#818fb4'
                },
                props: {
                    density: 1,
                    angularVelocity: 0,
                    restitution: 0
                }
            },
            {
                position: {
                    x: 14.0,
                    y: 35.0
                },
                type: 'static',
                shape: {
                    type: 'box',
                    width: 0.2,
                    height: 0.2,
                    rotation: -45,
                    color: '#818fb4'
                },
                props: {
                    density: 1,
                    angularVelocity: 0,
                    restitution: 0
                }
            },
            {
                position: {
                    x: 14.0,
                    y: 40.0
                },
                type: 'static',
                shape: {
                    type: 'box',
                    width: 0.2,
                    height: 0.2,
                    rotation: -45,
                    color: '#818fb4'
                },
                props: {
                    density: 1,
                    angularVelocity: 0,
                    restitution: 0
                }
            },
            {
                position: {
                    x: 19.0,
                    y: 25.0
                },
                type: 'static',
                shape: {
                    type: 'box',
                    width: 0.2,
                    height: 0.2,
                    rotation: -45,
                    color: '#818fb4'
                },
                props: {
                    density: 1,
                    angularVelocity: 0,
                    restitution: 0
                }
            },
            {
                position: {
                    x: 19.0,
                    y: 30.0
                },
                type: 'static',
                shape: {
                    type: 'box',
                    width: 0.2,
                    height: 0.2,
                    rotation: -45,
                    color: '#818fb4'
                },
                props: {
                    density: 1,
                    angularVelocity: 0,
                    restitution: 0
                }
            },
            {
                position: {
                    x: 19.0,
                    y: 35.0
                },
                type: 'static',
                shape: {
                    type: 'box',
                    width: 0.2,
                    height: 0.2,
                    rotation: -45,
                    color: '#818fb4'
                },
                props: {
                    density: 1,
                    angularVelocity: 0,
                    restitution: 0
                }
            },
            {
                position: {
                    x: 19.0,
                    y: 40.0
                },
                type: 'static',
                shape: {
                    type: 'box',
                    width: 0.2,
                    height: 0.2,
                    rotation: -45,
                    color: '#818fb4'
                },
                props: {
                    density: 1,
                    angularVelocity: 0,
                    restitution: 0
                }
            },
            {
                position: {
                    x: 6.5,
                    y: 27.5
                },
                type: 'kinematic',
                shape: {
                    type: 'box',
                    width: 2,
                    height: 0.1,
                    rotation: 0,
                    color: '#9bec00'
                },
                props: {
                    density: 1,
                    angularVelocity: 2.0,
                    restitution: 0
                }
            },
            {
                position: {
                    x: 6.5,
                    y: 37.5
                },
                type: 'kinematic',
                shape: {
                    type: 'box',
                    width: 2,
                    height: 0.1,
                    rotation: 0,
                    color: '#ff6868'
                },
                props: {
                    density: 1,
                    angularVelocity: 2.0,
                    restitution: 0
                }
            },
            {
                position: {
                    x: 11.5,
                    y: 32.5
                },
                type: 'kinematic',
                shape: {
                    type: 'box',
                    width: 2,
                    height: 0.1,
                    rotation: 0,
                    color: '#80b3ff'
                },
                props: {
                    density: 2,
                    angularVelocity: 4.0,
                    restitution: 0
                }
            },
            {
                position: {
                    x: 16.5,
                    y: 27.5
                },
                type: 'kinematic',
                shape: {
                    type: 'box',
                    width: 2,
                    height: 0.1,
                    rotation: 0,
                    color: '#ff6868'
                },
                props: {
                    density: 1,
                    angularVelocity: -2,
                    restitution: 0
                }
            },
            {
                position: {
                    x: 16.5,
                    y: 37.5
                },
                type: 'kinematic',
                shape: {
                    type: 'box',
                    width: 2,
                    height: 0.1,
                    rotation: 0,
                    color: '#9bec00'
                },
                props: {
                    density: 1,
                    angularVelocity: -2,
                    restitution: 0
                }
            },
            {
                position: {
                    x: 10.0,
                    y: 26.0
                },
                type: 'static',
                shape: {
                    type: 'circle',
                    radius: 0.5,
                    color: '#fff4b7'
                },
                props: {
                    angularVelocity: 0.0,
                    density: 1,
                    restitution: 1.5,
                    life: 1
                }
            },
            {
                position: {
                    x: 11.5,
                    y: 26.0
                },
                type: 'static',
                shape: {
                    type: 'circle',
                    radius: 0.5,
                    color: '#fff4b7'
                },
                props: {
                    angularVelocity: 0.0,
                    density: 1,
                    restitution: 1.5,
                    life: 1
                }
            },
            {
                position: {
                    x: 13.0,
                    y: 26.0
                },
                type: 'static',
                shape: {
                    type: 'circle',
                    radius: 0.5,
                    color: '#fff4b7'
                },
                props: {
                    angularVelocity: 0.0,
                    density: 1,
                    restitution: 1.5,
                    life: 1
                }
            },
            {
                position: {
                    x: 10.0,
                    y: 27.5
                },
                type: 'static',
                shape: {
                    type: 'circle',
                    radius: 0.5,
                    color: '#fff4b7'
                },
                props: {
                    angularVelocity: 0.0,
                    density: 1,
                    restitution: 1.5,
                    life: 1
                }
            },
            {
                position: {
                    x: 11.5,
                    y: 27.5
                },
                type: 'static',
                shape: {
                    type: 'circle',
                    radius: 0.5,
                    color: '#fff4b7'
                },
                props: {
                    angularVelocity: 0.0,
                    density: 1,
                    restitution: 1.5,
                    life: 1
                }
            },
            {
                position: {
                    x: 13.0,
                    y: 27.5
                },
                type: 'static',
                shape: {
                    type: 'circle',
                    radius: 0.5,
                    color: '#fff4b7'
                },
                props: {
                    angularVelocity: 0.0,
                    density: 1,
                    restitution: 1.5,
                    life: 1
                }
            },
            {
                position: {
                    x: 10.0,
                    y: 29.0
                },
                type: 'static',
                shape: {
                    type: 'circle',
                    radius: 0.5,
                    color: '#fff4b7'
                },
                props: {
                    angularVelocity: 0.0,
                    density: 1,
                    restitution: 1.5,
                    life: 1
                }
            },
            {
                position: {
                    x: 11.5,
                    y: 29.0
                },
                type: 'static',
                shape: {
                    type: 'circle',
                    radius: 0.5,
                    color: '#fff4b7'
                },
                props: {
                    angularVelocity: 0.0,
                    density: 1,
                    restitution: 1.5,
                    life: 1
                }
            },
            {
                position: {
                    x: 13.0,
                    y: 29.0
                },
                type: 'static',
                shape: {
                    type: 'circle',
                    radius: 0.5,
                    color: '#fff4b7'
                },
                props: {
                    angularVelocity: 0.0,
                    density: 1,
                    restitution: 1.5,
                    life: 1
                }
            },
            {
                position: {
                    x: 5.0,
                    y: 31.0
                },
                type: 'static',
                shape: {
                    type: 'circle',
                    radius: 0.5,
                    color: '#fff4b7'
                },
                props: {
                    angularVelocity: 0.0,
                    density: 1,
                    restitution: 1.5,
                    life: 1
                }
            },
            {
                position: {
                    x: 6.5,
                    y: 31.0
                },
                type: 'static',
                shape: {
                    type: 'circle',
                    radius: 0.5,
                    color: '#fff4b7'
                },
                props: {
                    angularVelocity: 0.0,
                    density: 1,
                    restitution: 1.5,
                    life: 1
                }
            },
            {
                position: {
                    x: 8.0,
                    y: 31.0
                },
                type: 'static',
                shape: {
                    type: 'circle',
                    radius: 0.5,
                    color: '#fff4b7'
                },
                props: {
                    angularVelocity: 0.0,
                    density: 1,
                    restitution: 1.5,
                    life: 1
                }
            },
            {
                position: {
                    x: 5.0,
                    y: 32.5
                },
                type: 'static',
                shape: {
                    type: 'circle',
                    radius: 0.5,
                    color: '#fff4b7'
                },
                props: {
                    angularVelocity: 0.0,
                    density: 1,
                    restitution: 1.5,
                    life: 1
                }
            },
            {
                position: {
                    x: 6.5,
                    y: 32.5
                },
                type: 'static',
                shape: {
                    type: 'circle',
                    radius: 0.5,
                    color: '#fff4b7'
                },
                props: {
                    angularVelocity: 0.0,
                    density: 1,
                    restitution: 1.5,
                    life: 1
                }
            },
            {
                position: {
                    x: 8.0,
                    y: 32.5
                },
                type: 'static',
                shape: {
                    type: 'circle',
                    radius: 0.5,
                    color: '#fff4b7'
                },
                props: {
                    angularVelocity: 0.0,
                    density: 1,
                    restitution: 1.5,
                    life: 1
                }
            },
            {
                position: {
                    x: 5.0,
                    y: 34.0
                },
                type: 'static',
                shape: {
                    type: 'circle',
                    radius: 0.5,
                    color: '#fff4b7'
                },
                props: {
                    angularVelocity: 0.0,
                    density: 1,
                    restitution: 1.5,
                    life: 1
                }
            },
            {
                position: {
                    x: 6.5,
                    y: 34.0
                },
                type: 'static',
                shape: {
                    type: 'circle',
                    radius: 0.5,
                    color: '#fff4b7'
                },
                props: {
                    angularVelocity: 0.0,
                    density: 1,
                    restitution: 1.5,
                    life: 1
                }
            },
            {
                position: {
                    x: 8.0,
                    y: 34.0
                },
                type: 'static',
                shape: {
                    type: 'circle',
                    radius: 0.5,
                    color: '#fff4b7'
                },
                props: {
                    angularVelocity: 0.0,
                    density: 1,
                    restitution: 1.5,
                    life: 1
                }
            },
            {
                position: {
                    x: 15.0,
                    y: 31.0
                },
                type: 'static',
                shape: {
                    type: 'circle',
                    radius: 0.5,
                    color: '#fff4b7'
                },
                props: {
                    angularVelocity: 0.0,
                    density: 1,
                    restitution: 1.5,
                    life: 1
                }
            },
            {
                position: {
                    x: 16.5,
                    y: 31.0
                },
                type: 'static',
                shape: {
                    type: 'circle',
                    radius: 0.5,
                    color: '#fff4b7'
                },
                props: {
                    angularVelocity: 0.0,
                    density: 1,
                    restitution: 1.5,
                    life: 1
                }
            },
            {
                position: {
                    x: 18.0,
                    y: 31.0
                },
                type: 'static',
                shape: {
                    type: 'circle',
                    radius: 0.5,
                    color: '#fff4b7'
                },
                props: {
                    angularVelocity: 0.0,
                    density: 1,
                    restitution: 1.5,
                    life: 1
                }
            },
            {
                position: {
                    x: 15.0,
                    y: 32.5
                },
                type: 'static',
                shape: {
                    type: 'circle',
                    radius: 0.5,
                    color: '#fff4b7'
                },
                props: {
                    angularVelocity: 0.0,
                    density: 1,
                    restitution: 1.5,
                    life: 1
                }
            },
            {
                position: {
                    x: 16.5,
                    y: 32.5
                },
                type: 'static',
                shape: {
                    type: 'circle',
                    radius: 0.5,
                    color: '#fff4b7'
                },
                props: {
                    angularVelocity: 0.0,
                    density: 1,
                    restitution: 1.5,
                    life: 1
                }
            },
            {
                position: {
                    x: 18.0,
                    y: 32.5
                },
                type: 'static',
                shape: {
                    type: 'circle',
                    radius: 0.5,
                    color: '#fff4b7'
                },
                props: {
                    angularVelocity: 0.0,
                    density: 1,
                    restitution: 1.5,
                    life: 1
                }
            },
            {
                position: {
                    x: 15.0,
                    y: 34.0
                },
                type: 'static',
                shape: {
                    type: 'circle',
                    radius: 0.5,
                    color: '#fff4b7'
                },
                props: {
                    angularVelocity: 0.0,
                    density: 1,
                    restitution: 1.5,
                    life: 1
                }
            },
            {
                position: {
                    x: 16.5,
                    y: 34.0
                },
                type: 'static',
                shape: {
                    type: 'circle',
                    radius: 0.5,
                    color: '#fff4b7'
                },
                props: {
                    angularVelocity: 0.0,
                    density: 1,
                    restitution: 1.5,
                    life: 1
                }
            },
            {
                position: {
                    x: 18.0,
                    y: 34.0
                },
                type: 'static',
                shape: {
                    type: 'circle',
                    radius: 0.5,
                    color: '#fff4b7'
                },
                props: {
                    angularVelocity: 0.0,
                    density: 1,
                    restitution: 1.5,
                    life: 1
                }
            },
            {
                position: {
                    x: 10.0,
                    y: 36.0
                },
                type: 'static',
                shape: {
                    type: 'circle',
                    radius: 0.5,
                    color: '#fff4b7'
                },
                props: {
                    angularVelocity: 0.0,
                    density: 1,
                    restitution: 1.5,
                    life: 1
                }
            },
            {
                position: {
                    x: 11.5,
                    y: 36.0
                },
                type: 'static',
                shape: {
                    type: 'circle',
                    radius: 0.5,
                    color: '#fff4b7'
                },
                props: {
                    angularVelocity: 0.0,
                    density: 1,
                    restitution: 1.5,
                    life: 1
                }
            },
            {
                position: {
                    x: 13.0,
                    y: 36.0
                },
                type: 'static',
                shape: {
                    type: 'circle',
                    radius: 0.5,
                    color: '#fff4b7'
                },
                props: {
                    angularVelocity: 0.0,
                    density: 1,
                    restitution: 1.5,
                    life: 1
                }
            },
            {
                position: {
                    x: 10.0,
                    y: 37.5
                },
                type: 'static',
                shape: {
                    type: 'circle',
                    radius: 0.5,
                    color: '#fff4b7'
                },
                props: {
                    angularVelocity: 0.0,
                    density: 1,
                    restitution: 1.5,
                    life: 1
                }
            },
            {
                position: {
                    x: 11.5,
                    y: 37.5
                },
                type: 'static',
                shape: {
                    type: 'circle',
                    radius: 0.5,
                    color: '#fff4b7'
                },
                props: {
                    angularVelocity: 0.0,
                    density: 1,
                    restitution: 1.5,
                    life: 1
                }
            },
            {
                position: {
                    x: 13.0,
                    y: 37.5
                },
                type: 'static',
                shape: {
                    type: 'circle',
                    radius: 0.5,
                    color: '#fff4b7'
                },
                props: {
                    angularVelocity: 0.0,
                    density: 1,
                    restitution: 1.5,
                    life: 1
                }
            },
            {
                position: {
                    x: 10.0,
                    y: 39.0
                },
                type: 'static',
                shape: {
                    type: 'circle',
                    radius: 0.5,
                    color: '#fff4b7'
                },
                props: {
                    angularVelocity: 0.0,
                    density: 1,
                    restitution: 1.5,
                    life: 1
                }
            },
            {
                position: {
                    x: 11.5,
                    y: 39.0
                },
                type: 'static',
                shape: {
                    type: 'circle',
                    radius: 0.5,
                    color: '#fff4b7'
                },
                props: {
                    angularVelocity: 0.0,
                    density: 1,
                    restitution: 1.5,
                    life: 1
                }
            },
            {
                position: {
                    x: 13.0,
                    y: 39.0
                },
                type: 'static',
                shape: {
                    type: 'circle',
                    radius: 0.5,
                    color: '#fff4b7'
                },
                props: {
                    angularVelocity: 0.0,
                    density: 1,
                    restitution: 1.5,
                    life: 1
                }
            },
            {
                position: {
                    x: 11.5,
                    y: 50.0
                },
                type: 'kinematic',
                shape: {
                    type: 'box',
                    width: 6.5,
                    height: 0.1,
                    rotation: 0,
                    color: '#5c5470'
                },
                props: {
                    density: 1,
                    angularVelocity: -2,
                    restitution: 0
                }
            },
            {
                position: {
                    x: 3.5,
                    y: 60.0
                },
                type: 'static',
                shape: {
                    type: 'circle',
                    radius: 0.5,
                    color: '#fff4b7'
                },
                props: {
                    angularVelocity: 0.0,
                    density: 1,
                    restitution: 1.5,
                    life: 1
                }
            },
            {
                position: {
                    x: 5.0,
                    y: 60.0
                },
                type: 'static',
                shape: {
                    type: 'circle',
                    radius: 0.5,
                    color: '#fff4b7'
                },
                props: {
                    angularVelocity: 0.0,
                    density: 1,
                    restitution: 1.5,
                    life: 1
                }
            },
            {
                position: {
                    x: 6.5,
                    y: 60.0
                },
                type: 'static',
                shape: {
                    type: 'circle',
                    radius: 0.5,
                    color: '#fff4b7'
                },
                props: {
                    angularVelocity: 0.0,
                    density: 1,
                    restitution: 1.5,
                    life: 1
                }
            },
            {
                position: {
                    x: 8.0,
                    y: 60.0
                },
                type: 'static',
                shape: {
                    type: 'circle',
                    radius: 0.5,
                    color: '#fff4b7'
                },
                props: {
                    angularVelocity: 0.0,
                    density: 1,
                    restitution: 1.5,
                    life: 1
                }
            },
            {
                position: {
                    x: 9.5,
                    y: 60.0
                },
                type: 'static',
                shape: {
                    type: 'circle',
                    radius: 0.5,
                    color: '#fff4b7'
                },
                props: {
                    angularVelocity: 0.0,
                    density: 1,
                    restitution: 1.5,
                    life: 1
                }
            },
            {
                position: {
                    x: 11.0,
                    y: 60.0
                },
                type: 'static',
                shape: {
                    type: 'circle',
                    radius: 0.5,
                    color: '#fff4b7'
                },
                props: {
                    angularVelocity: 0.0,
                    density: 1,
                    restitution: 1.5,
                    life: 1
                }
            },
            {
                position: {
                    x: 12.5,
                    y: 60.0
                },
                type: 'static',
                shape: {
                    type: 'circle',
                    radius: 0.5,
                    color: '#fff4b7'
                },
                props: {
                    angularVelocity: 0.0,
                    density: 1,
                    restitution: 1.5,
                    life: 1
                }
            },
            {
                position: {
                    x: 14.0,
                    y: 60.0
                },
                type: 'static',
                shape: {
                    type: 'circle',
                    radius: 0.5,
                    color: '#fff4b7'
                },
                props: {
                    angularVelocity: 0.0,
                    density: 1,
                    restitution: 1.5,
                    life: 1
                }
            },
            {
                position: {
                    x: 15.5,
                    y: 60.0
                },
                type: 'static',
                shape: {
                    type: 'circle',
                    radius: 0.5,
                    color: '#fff4b7'
                },
                props: {
                    angularVelocity: 0.0,
                    density: 1,
                    restitution: 1.5,
                    life: 1
                }
            },
            {
                position: {
                    x: 17.0,
                    y: 60.0
                },
                type: 'static',
                shape: {
                    type: 'circle',
                    radius: 0.5,
                    color: '#fff4b7'
                },
                props: {
                    angularVelocity: 0.0,
                    density: 1,
                    restitution: 1.5,
                    life: 1
                }
            },
            {
                position: {
                    x: 18.5,
                    y: 60.0
                },
                type: 'static',
                shape: {
                    type: 'circle',
                    radius: 0.5,
                    color: '#fff4b7'
                },
                props: {
                    angularVelocity: 0.0,
                    density: 1,
                    restitution: 1.5,
                    life: 1
                }
            },
            {
                position: {
                    x: 20.0,
                    y: 60.0
                },
                type: 'static',
                shape: {
                    type: 'circle',
                    radius: 0.5,
                    color: '#fff4b7'
                },
                props: {
                    angularVelocity: 0.0,
                    density: 1,
                    restitution: 1.5,
                    life: 1
                }
            },
            {
                position: {
                    x: 3.0,
                    y: 63.0
                },
                type: 'static',
                shape: {
                    type: 'circle',
                    radius: 0.5,
                    color: '#ffe227'
                },
                props: {
                    angularVelocity: 0.0,
                    density: 1,
                    restitution: 1.5,
                    life: 1
                }
            },
            {
                position: {
                    x: 4.5,
                    y: 63.0
                },
                type: 'static',
                shape: {
                    type: 'circle',
                    radius: 0.5,
                    color: '#ffe227'
                },
                props: {
                    angularVelocity: 0.0,
                    density: 1,
                    restitution: 1.5,
                    life: 1
                }
            },
            {
                position: {
                    x: 6.0,
                    y: 63.0
                },
                type: 'static',
                shape: {
                    type: 'circle',
                    radius: 0.5,
                    color: '#ffe227'
                },
                props: {
                    angularVelocity: 0.0,
                    density: 1,
                    restitution: 1.5,
                    life: 1
                }
            },
            {
                position: {
                    x: 7.5,
                    y: 63.0
                },
                type: 'static',
                shape: {
                    type: 'circle',
                    radius: 0.5,
                    color: '#ffe227'
                },
                props: {
                    angularVelocity: 0.0,
                    density: 1,
                    restitution: 1.5,
                    life: 1
                }
            },
            {
                position: {
                    x: 9.0,
                    y: 63.0
                },
                type: 'static',
                shape: {
                    type: 'circle',
                    radius: 0.5,
                    color: '#ffe227'
                },
                props: {
                    angularVelocity: 0.0,
                    density: 1,
                    restitution: 1.5,
                    life: 1
                }
            },
            {
                position: {
                    x: 10.5,
                    y: 63.0
                },
                type: 'static',
                shape: {
                    type: 'circle',
                    radius: 0.5,
                    color: '#ffe227'
                },
                props: {
                    angularVelocity: 0.0,
                    density: 1,
                    restitution: 1.5,
                    life: 1
                }
            },
            {
                position: {
                    x: 12.0,
                    y: 63.0
                },
                type: 'static',
                shape: {
                    type: 'circle',
                    radius: 0.5,
                    color: '#ffe227'
                },
                props: {
                    angularVelocity: 0.0,
                    density: 1,
                    restitution: 1.5,
                    life: 1
                }
            },
            {
                position: {
                    x: 13.5,
                    y: 63.0
                },
                type: 'static',
                shape: {
                    type: 'circle',
                    radius: 0.5,
                    color: '#ffe227'
                },
                props: {
                    angularVelocity: 0.0,
                    density: 1,
                    restitution: 1.5,
                    life: 1
                }
            },
            {
                position: {
                    x: 15.0,
                    y: 63.0
                },
                type: 'static',
                shape: {
                    type: 'circle',
                    radius: 0.5,
                    color: '#ffe227'
                },
                props: {
                    angularVelocity: 0.0,
                    density: 1,
                    restitution: 1.5,
                    life: 1
                }
            },
            {
                position: {
                    x: 16.5,
                    y: 63.0
                },
                type: 'static',
                shape: {
                    type: 'circle',
                    radius: 0.5,
                    color: '#ffe227'
                },
                props: {
                    angularVelocity: 0.0,
                    density: 1,
                    restitution: 1.5,
                    life: 1
                }
            },
            {
                position: {
                    x: 18.0,
                    y: 63.0
                },
                type: 'static',
                shape: {
                    type: 'circle',
                    radius: 0.5,
                    color: '#ffe227'
                },
                props: {
                    angularVelocity: 0.0,
                    density: 1,
                    restitution: 1.5,
                    life: 1
                }
            },
            {
                position: {
                    x: 19.5,
                    y: 63.0
                },
                type: 'static',
                shape: {
                    type: 'circle',
                    radius: 0.5,
                    color: '#ffe227'
                },
                props: {
                    angularVelocity: 0.0,
                    density: 1,
                    restitution: 1.5,
                    life: 1
                }
            },
            {
                position: {
                    x: 3.5,
                    y: 66.0
                },
                type: 'static',
                shape: {
                    type: 'circle',
                    radius: 0.5,
                    color: '#fff4b7'
                },
                props: {
                    angularVelocity: 0.0,
                    density: 1,
                    restitution: 1.5,
                    life: 1
                }
            },
            {
                position: {
                    x: 5.0,
                    y: 66.0
                },
                type: 'static',
                shape: {
                    type: 'circle',
                    radius: 0.5,
                    color: '#fff4b7'
                },
                props: {
                    angularVelocity: 0.0,
                    density: 1,
                    restitution: 1.5,
                    life: 1
                }
            },
            {
                position: {
                    x: 6.5,
                    y: 66.0
                },
                type: 'static',
                shape: {
                    type: 'circle',
                    radius: 0.5,
                    color: '#fff4b7'
                },
                props: {
                    angularVelocity: 0.0,
                    density: 1,
                    restitution: 1.5,
                    life: 1
                }
            },
            {
                position: {
                    x: 8.0,
                    y: 66.0
                },
                type: 'static',
                shape: {
                    type: 'circle',
                    radius: 0.5,
                    color: '#fff4b7'
                },
                props: {
                    angularVelocity: 0.0,
                    density: 1,
                    restitution: 1.5,
                    life: 1
                }
            },
            {
                position: {
                    x: 9.5,
                    y: 66.0
                },
                type: 'static',
                shape: {
                    type: 'circle',
                    radius: 0.5,
                    color: '#fff4b7'
                },
                props: {
                    angularVelocity: 0.0,
                    density: 1,
                    restitution: 1.5,
                    life: 1
                }
            },
            {
                position: {
                    x: 11.0,
                    y: 66.0
                },
                type: 'static',
                shape: {
                    type: 'circle',
                    radius: 0.5,
                    color: '#fff4b7'
                },
                props: {
                    angularVelocity: 0.0,
                    density: 1,
                    restitution: 1.5,
                    life: 1
                }
            },
            {
                position: {
                    x: 12.5,
                    y: 66.0
                },
                type: 'static',
                shape: {
                    type: 'circle',
                    radius: 0.5,
                    color: '#fff4b7'
                },
                props: {
                    angularVelocity: 0.0,
                    density: 1,
                    restitution: 1.5,
                    life: 1
                }
            },
            {
                position: {
                    x: 14.0,
                    y: 66.0
                },
                type: 'static',
                shape: {
                    type: 'circle',
                    radius: 0.5,
                    color: '#fff4b7'
                },
                props: {
                    angularVelocity: 0.0,
                    density: 1,
                    restitution: 1.5,
                    life: 1
                }
            },
            {
                position: {
                    x: 15.5,
                    y: 66.0
                },
                type: 'static',
                shape: {
                    type: 'circle',
                    radius: 0.5,
                    color: '#fff4b7'
                },
                props: {
                    angularVelocity: 0.0,
                    density: 1,
                    restitution: 1.5,
                    life: 1
                }
            },
            {
                position: {
                    x: 17.0,
                    y: 66.0
                },
                type: 'static',
                shape: {
                    type: 'circle',
                    radius: 0.5,
                    color: '#fff4b7'
                },
                props: {
                    angularVelocity: 0.0,
                    density: 1,
                    restitution: 1.5,
                    life: 1
                }
            },
            {
                position: {
                    x: 18.5,
                    y: 66.0
                },
                type: 'static',
                shape: {
                    type: 'circle',
                    radius: 0.5,
                    color: '#fff4b7'
                },
                props: {
                    angularVelocity: 0.0,
                    density: 1,
                    restitution: 1.5,
                    life: 1
                }
            },
            {
                position: {
                    x: 20.0,
                    y: 66.0
                },
                type: 'static',
                shape: {
                    type: 'circle',
                    radius: 0.5,
                    color: '#fff4b7'
                },
                props: {
                    angularVelocity: 0.0,
                    density: 1,
                    restitution: 1.5,
                    life: 1
                }
            },
            {
                position: {
                    x: 4.5,
                    y: 75.0
                },
                type: 'kinematic',
                shape: {
                    type: 'box',
                    width: 4.0,
                    height: 0.1,
                    rotation: 0,
                    color: '#ff577f'
                },
                props: {
                    density: 1,
                    angularVelocity: -4,
                    restitution: 0
                }
            },
            {
                position: {
                    x: 18.5,
                    y: 75.0
                },
                type: 'kinematic',
                shape: {
                    type: 'box',
                    width: 4.0,
                    height: 0.1,
                    rotation: 0,
                    color: '#ff577f'
                },
                props: {
                    density: 1,
                    angularVelocity: 4.0,
                    restitution: 0
                }
            },
            {
                position: {
                    x: 3.8,
                    y: 90.0
                },
                type: 'static',
                shape: {
                    type: 'box',
                    width: 0.1,
                    height: 0.1,
                    rotation: -90,
                    color: '#c7ffd8'
                },
                props: {
                    density: 1,
                    angularVelocity: 1.0,
                    restitution: 0
                }
            },
            {
                position: {
                    x: 19.2,
                    y: 90.0
                },
                type: 'static',
                shape: {
                    type: 'box',
                    width: 0.1,
                    height: 0.1,
                    rotation: -90,
                    color: '#c7ffd8'
                },
                props: {
                    density: 1,
                    angularVelocity: 1.0,
                    restitution: 0
                }
            },
            {
                position: {
                    x: 5.8,
                    y: 92.0
                },
                type: 'static',
                shape: {
                    type: 'box',
                    width: 0.1,
                    height: 0.1,
                    rotation: -90,
                    color: '#c7ffd8'
                },
                props: {
                    density: 1,
                    angularVelocity: 1.2,
                    restitution: 0
                }
            },
            {
                position: {
                    x: 17.2,
                    y: 92.0
                },
                type: 'static',
                shape: {
                    type: 'box',
                    width: 0.1,
                    height: 0.1,
                    rotation: -90,
                    color: '#c7ffd8'
                },
                props: {
                    density: 1,
                    angularVelocity: 1.2,
                    restitution: 0
                }
            },
            {
                position: {
                    x: 7.8,
                    y: 94.0
                },
                type: 'static',
                shape: {
                    type: 'box',
                    width: 0.1,
                    height: 0.1,
                    rotation: -90,
                    color: '#c7ffd8'
                },
                props: {
                    density: 1,
                    angularVelocity: 1.4,
                    restitution: 0
                }
            },
            {
                position: {
                    x: 15.2,
                    y: 94.0
                },
                type: 'static',
                shape: {
                    type: 'box',
                    width: 0.1,
                    height: 0.1,
                    rotation: -90,
                    color: '#c7ffd8'
                },
                props: {
                    density: 1,
                    angularVelocity: 1.4,
                    restitution: 0
                }
            },
            {
                position: {
                    x: 9.8,
                    y: 96.0
                },
                type: 'static',
                shape: {
                    type: 'box',
                    width: 0.1,
                    height: 0.1,
                    rotation: -90,
                    color: '#c7ffd8'
                },
                props: {
                    density: 1,
                    angularVelocity: 1.6,
                    restitution: 0
                }
            },
            {
                position: {
                    x: 13.2,
                    y: 96.0
                },
                type: 'static',
                shape: {
                    type: 'box',
                    width: 0.1,
                    height: 0.1,
                    rotation: -90,
                    color: '#c7ffd8'
                },
                props: {
                    density: 1,
                    angularVelocity: 1.6,
                    restitution: 0
                }
            },
            {
                position: {
                    x: 3.8,
                    y: 94.0
                },
                type: 'static',
                shape: {
                    type: 'box',
                    width: 0.1,
                    height: 0.1,
                    rotation: -90,
                    color: '#98ded9'
                },
                props: {
                    density: 1,
                    angularVelocity: 1.2,
                    restitution: 0
                }
            },
            {
                position: {
                    x: 19.2,
                    y: 94.0
                },
                type: 'static',
                shape: {
                    type: 'box',
                    width: 0.1,
                    height: 0.1,
                    rotation: -90,
                    color: '#98ded9'
                },
                props: {
                    density: 1,
                    angularVelocity: 1.2,
                    restitution: 0
                }
            },
            {
                position: {
                    x: 5.8,
                    y: 96.0
                },
                type: 'static',
                shape: {
                    type: 'box',
                    width: 0.1,
                    height: 0.1,
                    rotation: -90,
                    color: '#98ded9'
                },
                props: {
                    density: 1,
                    angularVelocity: 1.4,
                    restitution: 0
                }
            },
            {
                position: {
                    x: 17.2,
                    y: 96.0
                },
                type: 'static',
                shape: {
                    type: 'box',
                    width: 0.1,
                    height: 0.1,
                    rotation: -90,
                    color: '#98ded9'
                },
                props: {
                    density: 1,
                    angularVelocity: 1.4,
                    restitution: 0
                }
            },
            {
                position: {
                    x: 7.8,
                    y: 98.0
                },
                type: 'static',
                shape: {
                    type: 'box',
                    width: 0.1,
                    height: 0.1,
                    rotation: -90,
                    color: '#98ded9'
                },
                props: {
                    density: 1,
                    angularVelocity: 1.6,
                    restitution: 0
                }
            },
            {
                position: {
                    x: 15.2,
                    y: 98.0
                },
                type: 'static',
                shape: {
                    type: 'box',
                    width: 0.1,
                    height: 0.1,
                    rotation: -90,
                    color: '#98ded9'
                },
                props: {
                    density: 1,
                    angularVelocity: 1.6,
                    restitution: 0
                }
            },
            {
                position: {
                    x: 9.8,
                    y: 100.0
                },
                type: 'static',
                shape: {
                    type: 'box',
                    width: 0.1,
                    height: 0.1,
                    rotation: -90,
                    color: '#98ded9'
                },
                props: {
                    density: 1,
                    angularVelocity: 1.8,
                    restitution: 0
                }
            },
            {
                position: {
                    x: 13.2,
                    y: 100.0
                },
                type: 'static',
                shape: {
                    type: 'box',
                    width: 0.1,
                    height: 0.1,
                    rotation: -90,
                    color: '#98ded9'
                },
                props: {
                    density: 1,
                    angularVelocity: 1.8,
                    restitution: 0
                }
            },
            {
                position: {
                    x: 10.0,
                    y: 90.0
                },
                type: 'static',
                shape: {
                    type: 'circle',
                    radius: 0.5,
                    color: '#ffe3fe'
                },
                props: {
                    angularVelocity: 0.0,
                    density: 1,
                    restitution: 1.5,
                    life: 1
                }
            },
            {
                position: {
                    x: 12.0,
                    y: 90.0
                },
                type: 'static',
                shape: {
                    type: 'circle',
                    radius: 0.5,
                    color: '#ffe3fe'
                },
                props: {
                    angularVelocity: 0.0,
                    density: 1,
                    restitution: 1.5,
                    life: 1
                }
            },
            {
                position: {
                    x: 8.0,
                    y: 92.0
                },
                type: 'static',
                shape: {
                    type: 'circle',
                    radius: 0.5,
                    color: '#ffe3fe'
                },
                props: {
                    angularVelocity: 0.0,
                    density: 1,
                    restitution: 1.5,
                    life: 1
                }
            },
            {
                position: {
                    x: 14.0,
                    y: 92.0
                },
                type: 'static',
                shape: {
                    type: 'circle',
                    radius: 0.5,
                    color: '#ffe3fe'
                },
                props: {
                    angularVelocity: 0.0,
                    density: 1,
                    restitution: 1.5,
                    life: 1
                }
            },
            {
                position: {
                    x: 6.0,
                    y: 94.0
                },
                type: 'static',
                shape: {
                    type: 'circle',
                    radius: 0.5,
                    color: '#ffe3fe'
                },
                props: {
                    angularVelocity: 0.0,
                    density: 1,
                    restitution: 1.5,
                    life: 1
                }
            },
            {
                position: {
                    x: 16.0,
                    y: 94.0
                },
                type: 'static',
                shape: {
                    type: 'circle',
                    radius: 0.5,
                    color: '#ffe3fe'
                },
                props: {
                    angularVelocity: 0.0,
                    density: 1,
                    restitution: 1.5,
                    life: 1
                }
            },
            {
                position: {
                    x: 4.0,
                    y: 96.0
                },
                type: 'static',
                shape: {
                    type: 'circle',
                    radius: 0.5,
                    color: '#ffe3fe'
                },
                props: {
                    angularVelocity: 0.0,
                    density: 1,
                    restitution: 1.5,
                    life: 1
                }
            },
            {
                position: {
                    x: 18.0,
                    y: 96.0
                },
                type: 'static',
                shape: {
                    type: 'circle',
                    radius: 0.5,
                    color: '#ffe3fe'
                },
                props: {
                    angularVelocity: 0.0,
                    density: 1,
                    restitution: 1.5,
                    life: 1
                }
            },
            {
                position: {
                    x: 10.0,
                    y: 94.0
                },
                type: 'static',
                shape: {
                    type: 'circle',
                    radius: 0.5,
                    color: '#ff94cc'
                },
                props: {
                    angularVelocity: 0.0,
                    density: 1,
                    restitution: 1.5,
                    life: 1
                }
            },
            {
                position: {
                    x: 12.0,
                    y: 94.0
                },
                type: 'static',
                shape: {
                    type: 'circle',
                    radius: 0.5,
                    color: '#ff94cc'
                },
                props: {
                    angularVelocity: 0.0,
                    density: 1,
                    restitution: 1.5,
                    life: 1
                }
            },
            {
                position: {
                    x: 8.0,
                    y: 96.0
                },
                type: 'static',
                shape: {
                    type: 'circle',
                    radius: 0.5,
                    color: '#ff94cc'
                },
                props: {
                    angularVelocity: 0.0,
                    density: 1,
                    restitution: 1.5,
                    life: 1
                }
            },
            {
                position: {
                    x: 14.0,
                    y: 96.0
                },
                type: 'static',
                shape: {
                    type: 'circle',
                    radius: 0.5,
                    color: '#ff94cc'
                },
                props: {
                    angularVelocity: 0.0,
                    density: 1,
                    restitution: 1.5,
                    life: 1
                }
            },
            {
                position: {
                    x: 6.0,
                    y: 98.0
                },
                type: 'static',
                shape: {
                    type: 'circle',
                    radius: 0.5,
                    color: '#ff94cc'
                },
                props: {
                    angularVelocity: 0.0,
                    density: 1,
                    restitution: 1.5,
                    life: 1
                }
            },
            {
                position: {
                    x: 16.0,
                    y: 98.0
                },
                type: 'static',
                shape: {
                    type: 'circle',
                    radius: 0.5,
                    color: '#ff94cc'
                },
                props: {
                    angularVelocity: 0.0,
                    density: 1,
                    restitution: 1.5,
                    life: 1
                }
            },
            {
                position: {
                    x: 4.0,
                    y: 100.0
                },
                type: 'static',
                shape: {
                    type: 'circle',
                    radius: 0.5,
                    color: '#ff94cc'
                },
                props: {
                    angularVelocity: 0.0,
                    density: 1,
                    restitution: 1.5,
                    life: 1
                }
            },
            {
                position: {
                    x: 18.0,
                    y: 100.0
                },
                type: 'static',
                shape: {
                    type: 'circle',
                    radius: 0.5,
                    color: '#ff94cc'
                },
                props: {
                    angularVelocity: 0.0,
                    density: 1,
                    restitution: 1.5,
                    life: 1
                }
            },
            {
                position: {
                    x: 4.5,
                    y: 100.0
                },
                type: 'kinematic',
                shape: {
                    type: 'box',
                    width: 5.0,
                    height: 0.1,
                    rotation: 0,
                    color: '#5c8374'
                },
                props: {
                    density: 1,
                    angularVelocity: -2.5,
                    restitution: 0
                }
            },
            {
                position: {
                    x: 18.5,
                    y: 100.0
                },
                type: 'kinematic',
                shape: {
                    type: 'box',
                    width: 5.0,
                    height: 0.1,
                    rotation: 0,
                    color: '#5c8374'
                },
                props: {
                    density: 1,
                    angularVelocity: 2.5,
                    restitution: 0
                }
            },
            {
                position: {
                    x: 3.8,
                    y: 104.0
                },
                type: 'static',
                shape: {
                    type: 'box',
                    width: 0.1,
                    height: 0.1,
                    rotation: -90,
                    color: '#c7ffd8'
                },
                props: {
                    density: 1,
                    angularVelocity: 1.4,
                    restitution: 0
                }
            },
            {
                position: {
                    x: 19.2,
                    y: 104.0
                },
                type: 'static',
                shape: {
                    type: 'box',
                    width: 0.1,
                    height: 0.1,
                    rotation: -90,
                    color: '#c7ffd8'
                },
                props: {
                    density: 1,
                    angularVelocity: 1.4,
                    restitution: 0
                }
            },
            {
                position: {
                    x: 5.8,
                    y: 106.0
                },
                type: 'static',
                shape: {
                    type: 'box',
                    width: 0.1,
                    height: 0.1,
                    rotation: -90,
                    color: '#c7ffd8'
                },
                props: {
                    density: 1,
                    angularVelocity: 1.6,
                    restitution: 0
                }
            },
            {
                position: {
                    x: 17.2,
                    y: 106.0
                },
                type: 'static',
                shape: {
                    type: 'box',
                    width: 0.1,
                    height: 0.1,
                    rotation: -90,
                    color: '#c7ffd8'
                },
                props: {
                    density: 1,
                    angularVelocity: 1.6,
                    restitution: 0
                }
            },
            {
                position: {
                    x: 7.8,
                    y: 108.0
                },
                type: 'static',
                shape: {
                    type: 'box',
                    width: 0.1,
                    height: 0.1,
                    rotation: -90,
                    color: '#c7ffd8'
                },
                props: {
                    density: 1,
                    angularVelocity: 1.8,
                    restitution: 0
                }
            },
            {
                position: {
                    x: 15.2,
                    y: 108.0
                },
                type: 'static',
                shape: {
                    type: 'box',
                    width: 0.1,
                    height: 0.1,
                    rotation: -90,
                    color: '#c7ffd8'
                },
                props: {
                    density: 1,
                    angularVelocity: 1.8,
                    restitution: 0
                }
            },
            {
                position: {
                    x: 9.8,
                    y: 110.0
                },
                type: 'static',
                shape: {
                    type: 'box',
                    width: 0.1,
                    height: 0.1,
                    rotation: -90,
                    color: '#c7ffd8'
                },
                props: {
                    density: 1,
                    angularVelocity: 2.0,
                    restitution: 0
                }
            },
            {
                position: {
                    x: 13.2,
                    y: 110.0
                },
                type: 'static',
                shape: {
                    type: 'box',
                    width: 0.1,
                    height: 0.1,
                    rotation: -90,
                    color: '#c7ffd8'
                },
                props: {
                    density: 1,
                    angularVelocity: 2.0,
                    restitution: 0
                }
            },
            {
                position: {
                    x: 3.8,
                    y: 108.0
                },
                type: 'static',
                shape: {
                    type: 'box',
                    width: 0.1,
                    height: 0.1,
                    rotation: -90,
                    color: '#98ded9'
                },
                props: {
                    density: 1,
                    angularVelocity: 1.6,
                    restitution: 0
                }
            },
            {
                position: {
                    x: 19.2,
                    y: 108.0
                },
                type: 'static',
                shape: {
                    type: 'box',
                    width: 0.1,
                    height: 0.1,
                    rotation: -90,
                    color: '#98ded9'
                },
                props: {
                    density: 1,
                    angularVelocity: 1.6,
                    restitution: 0
                }
            },
            {
                position: {
                    x: 5.8,
                    y: 110.0
                },
                type: 'static',
                shape: {
                    type: 'box',
                    width: 0.1,
                    height: 0.1,
                    rotation: -90,
                    color: '#98ded9'
                },
                props: {
                    density: 1,
                    angularVelocity: 1.8,
                    restitution: 0
                }
            },
            {
                position: {
                    x: 17.2,
                    y: 110.0
                },
                type: 'static',
                shape: {
                    type: 'box',
                    width: 0.1,
                    height: 0.1,
                    rotation: -90,
                    color: '#98ded9'
                },
                props: {
                    density: 1,
                    angularVelocity: 1.8,
                    restitution: 0
                }
            },
            {
                position: {
                    x: 7.8,
                    y: 112.0
                },
                type: 'static',
                shape: {
                    type: 'box',
                    width: 0.1,
                    height: 0.1,
                    rotation: -90,
                    color: '#98ded9'
                },
                props: {
                    density: 1,
                    angularVelocity: 2.0,
                    restitution: 0
                }
            },
            {
                position: {
                    x: 15.2,
                    y: 112.0
                },
                type: 'static',
                shape: {
                    type: 'box',
                    width: 0.1,
                    height: 0.1,
                    rotation: -90,
                    color: '#98ded9'
                },
                props: {
                    density: 1,
                    angularVelocity: 2.0,
                    restitution: 0
                }
            },
            {
                position: {
                    x: 9.8,
                    y: 114.0
                },
                type: 'static',
                shape: {
                    type: 'box',
                    width: 0.1,
                    height: 0.1,
                    rotation: -90,
                    color: '#98ded9'
                },
                props: {
                    density: 1,
                    angularVelocity: 2.2,
                    restitution: 0
                }
            },
            {
                position: {
                    x: 13.2,
                    y: 114.0
                },
                type: 'static',
                shape: {
                    type: 'box',
                    width: 0.1,
                    height: 0.1,
                    rotation: -90,
                    color: '#98ded9'
                },
                props: {
                    density: 1,
                    angularVelocity: 2.2,
                    restitution: 0
                }
            },
            {
                position: {
                    x: 3.5,
                    y: 105.0
                },
                type: 'static',
                shape: {
                    type: 'circle',
                    radius: 0.5,
                    color: '#edeef7'
                },
                props: {
                    angularVelocity: 0.0,
                    density: 1,
                    restitution: 1.5,
                    life: 1
                }
            },
            {
                position: {
                    x: 19.5,
                    y: 105.0
                },
                type: 'static',
                shape: {
                    type: 'circle',
                    radius: 0.5,
                    color: '#edeef7'
                },
                props: {
                    angularVelocity: 0.0,
                    density: 1,
                    restitution: 1.5,
                    life: 1
                }
            },
            {
                position: {
                    x: 3.5,
                    y: 107.0
                },
                type: 'static',
                shape: {
                    type: 'circle',
                    radius: 0.5,
                    color: '#edeef7'
                },
                props: {
                    angularVelocity: 0.0,
                    density: 1,
                    restitution: 1.5,
                    life: 1
                }
            },
            {
                position: {
                    x: 19.5,
                    y: 107.0
                },
                type: 'static',
                shape: {
                    type: 'circle',
                    radius: 0.5,
                    color: '#edeef7'
                },
                props: {
                    angularVelocity: 0.0,
                    density: 1,
                    restitution: 1.5,
                    life: 1
                }
            },
            {
                position: {
                    x: 5.5,
                    y: 107.0
                },
                type: 'static',
                shape: {
                    type: 'circle',
                    radius: 0.5,
                    color: '#edeef7'
                },
                props: {
                    angularVelocity: 0.0,
                    density: 1,
                    restitution: 1.5,
                    life: 1
                }
            },
            {
                position: {
                    x: 17.5,
                    y: 107.0
                },
                type: 'static',
                shape: {
                    type: 'circle',
                    radius: 0.5,
                    color: '#edeef7'
                },
                props: {
                    angularVelocity: 0.0,
                    density: 1,
                    restitution: 1.5,
                    life: 1
                }
            },
            {
                position: {
                    x: 3.5,
                    y: 109.0
                },
                type: 'static',
                shape: {
                    type: 'circle',
                    radius: 0.5,
                    color: '#edeef7'
                },
                props: {
                    angularVelocity: 0.0,
                    density: 1,
                    restitution: 1.5,
                    life: 1
                }
            },
            {
                position: {
                    x: 19.5,
                    y: 109.0
                },
                type: 'static',
                shape: {
                    type: 'circle',
                    radius: 0.5,
                    color: '#edeef7'
                },
                props: {
                    angularVelocity: 0.0,
                    density: 1,
                    restitution: 1.5,
                    life: 1
                }
            },
            {
                position: {
                    x: 5.5,
                    y: 109.0
                },
                type: 'static',
                shape: {
                    type: 'circle',
                    radius: 0.5,
                    color: '#edeef7'
                },
                props: {
                    angularVelocity: 0.0,
                    density: 1,
                    restitution: 1.5,
                    life: 1
                }
            },
            {
                position: {
                    x: 17.5,
                    y: 109.0
                },
                type: 'static',
                shape: {
                    type: 'circle',
                    radius: 0.5,
                    color: '#edeef7'
                },
                props: {
                    angularVelocity: 0.0,
                    density: 1,
                    restitution: 1.5,
                    life: 1
                }
            },
            {
                position: {
                    x: 7.5,
                    y: 109.0
                },
                type: 'static',
                shape: {
                    type: 'circle',
                    radius: 0.5,
                    color: '#edeef7'
                },
                props: {
                    angularVelocity: 0.0,
                    density: 1,
                    restitution: 1.5,
                    life: 1
                }
            },
            {
                position: {
                    x: 15.5,
                    y: 109.0
                },
                type: 'static',
                shape: {
                    type: 'circle',
                    radius: 0.5,
                    color: '#edeef7'
                },
                props: {
                    angularVelocity: 0.0,
                    density: 1,
                    restitution: 1.5,
                    life: 1
                }
            },
            {
                position: {
                    x: 5.5,
                    y: 115.0
                },
                type: 'static',
                shape: {
                    type: 'circle',
                    radius: 0.4,
                    color: '#e6176d'
                },
                props: {
                    angularVelocity: 0.0,
                    density: 1,
                    restitution: 1.5,
                    life: 5
                }
            },
            {
                position: {
                    x: 17.5,
                    y: 115.0
                },
                type: 'static',
                shape: {
                    type: 'circle',
                    radius: 0.4,
                    color: '#e6176d'
                },
                props: {
                    angularVelocity: 0.0,
                    density: 1,
                    restitution: 1.5,
                    life: 5
                }
            },
            {
                position: {
                    x: 5.5,
                    y: 115.0
                },
                type: 'static',
                shape: {
                    type: 'circle',
                    radius: 1.2,
                    color: '#e64588'
                },
                props: {
                    angularVelocity: 0.0,
                    density: 1,
                    restitution: 1.5,
                    life: 4
                }
            },
            {
                position: {
                    x: 17.5,
                    y: 115.0
                },
                type: 'static',
                shape: {
                    type: 'circle',
                    radius: 1.2,
                    color: '#e64588'
                },
                props: {
                    angularVelocity: 0.0,
                    density: 1,
                    restitution: 1.5,
                    life: 4
                }
            },
            {
                position: {
                    x: 5.5,
                    y: 115.0
                },
                type: 'static',
                shape: {
                    type: 'circle',
                    radius: 2.0,
                    color: '#e673a3'
                },
                props: {
                    angularVelocity: 0.0,
                    density: 1,
                    restitution: 1.5,
                    life: 3
                }
            },
            {
                position: {
                    x: 17.5,
                    y: 115.0
                },
                type: 'static',
                shape: {
                    type: 'circle',
                    radius: 2.0,
                    color: '#e673a3'
                },
                props: {
                    angularVelocity: 0.0,
                    density: 1,
                    restitution: 1.5,
                    life: 3
                }
            },
            {
                position: {
                    x: 5.5,
                    y: 115.0
                },
                type: 'static',
                shape: {
                    type: 'circle',
                    radius: 2.8,
                    color: '#e6a1bd'
                },
                props: {
                    angularVelocity: 0.0,
                    density: 1,
                    restitution: 1.5,
                    life: 2
                }
            },
            {
                position: {
                    x: 17.5,
                    y: 115.0
                },
                type: 'static',
                shape: {
                    type: 'circle',
                    radius: 2.8,
                    color: '#e6a1bd'
                },
                props: {
                    angularVelocity: 0.0,
                    density: 1,
                    restitution: 1.5,
                    life: 2
                }
            },
            {
                position: {
                    x: 5.5,
                    y: 115.0
                },
                type: 'static',
                shape: {
                    type: 'circle',
                    radius: 3.8,
                    color: '#e6cfd8'
                },
                props: {
                    angularVelocity: 0.0,
                    density: 1,
                    restitution: 1.5,
                    life: 1
                }
            },
            {
                position: {
                    x: 17.5,
                    y: 115.0
                },
                type: 'static',
                shape: {
                    type: 'circle',
                    radius: 3.8,
                    color: '#e6cfd8'
                },
                props: {
                    angularVelocity: 0.0,
                    density: 1,
                    restitution: 1.5,
                    life: 1
                }
            },
            {
                position: {
                    x: 11.5,
                    y: 120.0
                },
                type: 'static',
                shape: {
                    type: 'circle',
                    radius: 0.4,
                    color: '#e6176d'
                },
                props: {
                    angularVelocity: 0.0,
                    density: 1,
                    restitution: 1.5,
                    life: 5
                }
            },
            {
                position: {
                    x: 11.5,
                    y: 120.0
                },
                type: 'static',
                shape: {
                    type: 'circle',
                    radius: 1.2,
                    color: '#e64588'
                },
                props: {
                    angularVelocity: 0.0,
                    density: 1,
                    restitution: 1.5,
                    life: 4
                }
            },
            {
                position: {
                    x: 11.5,
                    y: 120.0
                },
                type: 'static',
                shape: {
                    type: 'circle',
                    radius: 2.0,
                    color: '#e673a3'
                },
                props: {
                    angularVelocity: 0.0,
                    density: 1,
                    restitution: 1.5,
                    life: 3
                }
            },
            {
                position: {
                    x: 11.5,
                    y: 120.0
                },
                type: 'static',
                shape: {
                    type: 'circle',
                    radius: 2.8,
                    color: '#e6a1bd'
                },
                props: {
                    angularVelocity: 0.0,
                    density: 1,
                    restitution: 1.5,
                    life: 2
                }
            },
            {
                position: {
                    x: 11.5,
                    y: 120.0
                },
                type: 'static',
                shape: {
                    type: 'circle',
                    radius: 3.8,
                    color: '#e6cfd8'
                },
                props: {
                    angularVelocity: 0.0,
                    density: 1,
                    restitution: 1.5,
                    life: 1
                }
            },
            {
                position: {
                    x: 4.5,
                    y: 130.0
                },
                type: 'kinematic',
                shape: {
                    type: 'box',
                    width: 5.0,
                    height: 0.1,
                    rotation: 0,
                    color: '#435585'
                },
                props: {
                    density: 1,
                    angularVelocity: 0.25,
                    restitution: 0
                }
            },
            {
                position: {
                    x: 18.5,
                    y: 130.0
                },
                type: 'kinematic',
                shape: {
                    type: 'box',
                    width: 5.0,
                    height: 0.1,
                    rotation: 0,
                    color: '#5c8374'
                },
                props: {
                    density: 1,
                    angularVelocity: -0.32,
                    restitution: 0
                }
            },
            {
                position: {
                    x: 4.5,
                    y: 140.0
                },
                type: 'kinematic',
                shape: {
                    type: 'box',
                    width: 4.0,
                    height: 0.1,
                    rotation: 30,
                    color: '#610c9f'
                },
                props: {
                    density: 1,
                    angularVelocity: 0.32,
                    restitution: 0
                }
            },
            {
                position: {
                    x: 18.5,
                    y: 140.0
                },
                type: 'kinematic',
                shape: {
                    type: 'box',
                    width: 4.0,
                    height: 0.1,
                    rotation: -30,
                    color: '#872341'
                },
                props: {
                    density: 1,
                    angularVelocity: -0.32,
                    restitution: 0
                }
            },
            {
                position: {
                    x: 4.5,
                    y: 150.0
                },
                type: 'kinematic',
                shape: {
                    type: 'box',
                    width: 5.0,
                    height: 0.1,
                    rotation: 60,
                    color: '#503c3c'
                },
                props: {
                    density: 1,
                    angularVelocity: 0.32,
                    restitution: 0
                }
            },
            {
                position: {
                    x: 18.5,
                    y: 150.0
                },
                type: 'kinematic',
                shape: {
                    type: 'box',
                    width: 5.0,
                    height: 0.1,
                    rotation: -60,
                    color: '#5c5470'
                },
                props: {
                    density: 1,
                    angularVelocity: -0.32,
                    restitution: 0
                }
            },
            {
                position: {
                    x: 4.5,
                    y: 160.0
                },
                type: 'kinematic',
                shape: {
                    type: 'box',
                    width: 4.0,
                    height: 0.1,
                    rotation: 90,
                    color: '#1a3636'
                },
                props: {
                    density: 1,
                    angularVelocity: 0.32,
                    restitution: 0
                }
            },
            {
                position: {
                    x: 18.5,
                    y: 160.0
                },
                type: 'kinematic',
                shape: {
                    type: 'box',
                    width: 4.0,
                    height: 0.1,
                    rotation: -90,
                    color: '#522258'
                },
                props: {
                    density: 1,
                    angularVelocity: -0.32,
                    restitution: 0
                }
            },
            {
                position: {
                    x: 3.5,
                    y: 135.0
                },
                type: 'static',
                shape: {
                    type: 'circle',
                    radius: 0.2,
                    color: '#e6e1ae'
                },
                props: {
                    angularVelocity: 1.0,
                    density: 1,
                    restitution: 1.5,
                    life: 1
                }
            },
            {
                position: {
                    x: 4.5,
                    y: 135.0
                },
                type: 'static',
                shape: {
                    type: 'circle',
                    radius: 0.2,
                    color: '#e6e1ae'
                },
                props: {
                    angularVelocity: 1.0,
                    density: 1,
                    restitution: 1.5,
                    life: 1
                }
            },
            {
                position: {
                    x: 5.5,
                    y: 135.0
                },
                type: 'static',
                shape: {
                    type: 'circle',
                    radius: 0.2,
                    color: '#e6e1ae'
                },
                props: {
                    angularVelocity: 1.0,
                    density: 1,
                    restitution: 1.5,
                    life: 1
                }
            },
            {
                position: {
                    x: 6.5,
                    y: 135.0
                },
                type: 'static',
                shape: {
                    type: 'circle',
                    radius: 0.2,
                    color: '#e6e1ae'
                },
                props: {
                    angularVelocity: 1.0,
                    density: 1,
                    restitution: 1.5,
                    life: 1
                }
            },
            {
                position: {
                    x: 7.5,
                    y: 135.0
                },
                type: 'static',
                shape: {
                    type: 'circle',
                    radius: 0.2,
                    color: '#e6e1ae'
                },
                props: {
                    angularVelocity: 1.0,
                    density: 1,
                    restitution: 1.5,
                    life: 1
                }
            },
            {
                position: {
                    x: 8.5,
                    y: 135.0
                },
                type: 'static',
                shape: {
                    type: 'circle',
                    radius: 0.2,
                    color: '#e6e1ae'
                },
                props: {
                    angularVelocity: 1.0,
                    density: 1,
                    restitution: 1.5,
                    life: 1
                }
            },
            {
                position: {
                    x: 9.5,
                    y: 135.0
                },
                type: 'static',
                shape: {
                    type: 'circle',
                    radius: 0.2,
                    color: '#e6e1ae'
                },
                props: {
                    angularVelocity: 1.0,
                    density: 1,
                    restitution: 1.5,
                    life: 1
                }
            },
            {
                position: {
                    x: 10.5,
                    y: 135.0
                },
                type: 'static',
                shape: {
                    type: 'circle',
                    radius: 0.2,
                    color: '#e6e1ae'
                },
                props: {
                    angularVelocity: 1.0,
                    density: 1,
                    restitution: 1.5,
                    life: 1
                }
            },
            {
                position: {
                    x: 11.5,
                    y: 135.0
                },
                type: 'static',
                shape: {
                    type: 'circle',
                    radius: 0.2,
                    color: '#e6e1ae'
                },
                props: {
                    angularVelocity: 1.0,
                    density: 1,
                    restitution: 1.5,
                    life: 1
                }
            },
            {
                position: {
                    x: 12.5,
                    y: 135.0
                },
                type: 'static',
                shape: {
                    type: 'circle',
                    radius: 0.2,
                    color: '#e6e1ae'
                },
                props: {
                    angularVelocity: 1.0,
                    density: 1,
                    restitution: 1.5,
                    life: 1
                }
            },
            {
                position: {
                    x: 13.5,
                    y: 135.0
                },
                type: 'static',
                shape: {
                    type: 'circle',
                    radius: 0.2,
                    color: '#e6e1ae'
                },
                props: {
                    angularVelocity: 1.0,
                    density: 1,
                    restitution: 1.5,
                    life: 1
                }
            },
            {
                position: {
                    x: 14.5,
                    y: 135.0
                },
                type: 'static',
                shape: {
                    type: 'circle',
                    radius: 0.2,
                    color: '#e6e1ae'
                },
                props: {
                    angularVelocity: 1.0,
                    density: 1,
                    restitution: 1.5,
                    life: 1
                }
            },
            {
                position: {
                    x: 15.5,
                    y: 135.0
                },
                type: 'static',
                shape: {
                    type: 'circle',
                    radius: 0.2,
                    color: '#e6e1ae'
                },
                props: {
                    angularVelocity: 1.0,
                    density: 1,
                    restitution: 1.5,
                    life: 1
                }
            },
            {
                position: {
                    x: 16.5,
                    y: 135.0
                },
                type: 'static',
                shape: {
                    type: 'circle',
                    radius: 0.2,
                    color: '#e6e1ae'
                },
                props: {
                    angularVelocity: 1.0,
                    density: 1,
                    restitution: 1.5,
                    life: 1
                }
            },
            {
                position: {
                    x: 17.5,
                    y: 135.0
                },
                type: 'static',
                shape: {
                    type: 'circle',
                    radius: 0.2,
                    color: '#e6e1ae'
                },
                props: {
                    angularVelocity: 1.0,
                    density: 1,
                    restitution: 1.5,
                    life: 1
                }
            },
            {
                position: {
                    x: 18.5,
                    y: 135.0
                },
                type: 'static',
                shape: {
                    type: 'circle',
                    radius: 0.2,
                    color: '#e6e1ae'
                },
                props: {
                    angularVelocity: 1.0,
                    density: 1,
                    restitution: 1.5,
                    life: 1
                }
            },
            {
                position: {
                    x: 19.5,
                    y: 135.0
                },
                type: 'static',
                shape: {
                    type: 'circle',
                    radius: 0.2,
                    color: '#e6e1ae'
                },
                props: {
                    angularVelocity: 1.0,
                    density: 1,
                    restitution: 1.5,
                    life: 1
                }
            },
            {
                position: {
                    x: 3.5,
                    y: 140.0
                },
                type: 'static',
                shape: {
                    type: 'circle',
                    radius: 0.2,
                    color: '#e6e1ae'
                },
                props: {
                    angularVelocity: 1.0,
                    density: 1,
                    restitution: 1.5,
                    life: 1
                }
            },
            {
                position: {
                    x: 4.5,
                    y: 140.0
                },
                type: 'static',
                shape: {
                    type: 'circle',
                    radius: 0.2,
                    color: '#e6e1ae'
                },
                props: {
                    angularVelocity: 1.0,
                    density: 1,
                    restitution: 1.5,
                    life: 1
                }
            },
            {
                position: {
                    x: 5.5,
                    y: 140.0
                },
                type: 'static',
                shape: {
                    type: 'circle',
                    radius: 0.2,
                    color: '#e6e1ae'
                },
                props: {
                    angularVelocity: 1.0,
                    density: 1,
                    restitution: 1.5,
                    life: 1
                }
            },
            {
                position: {
                    x: 6.5,
                    y: 140.0
                },
                type: 'static',
                shape: {
                    type: 'circle',
                    radius: 0.2,
                    color: '#e6e1ae'
                },
                props: {
                    angularVelocity: 1.0,
                    density: 1,
                    restitution: 1.5,
                    life: 1
                }
            },
            {
                position: {
                    x: 7.5,
                    y: 140.0
                },
                type: 'static',
                shape: {
                    type: 'circle',
                    radius: 0.2,
                    color: '#e6e1ae'
                },
                props: {
                    angularVelocity: 1.0,
                    density: 1,
                    restitution: 1.5,
                    life: 1
                }
            },
            {
                position: {
                    x: 8.5,
                    y: 140.0
                },
                type: 'static',
                shape: {
                    type: 'circle',
                    radius: 0.2,
                    color: '#e6e1ae'
                },
                props: {
                    angularVelocity: 1.0,
                    density: 1,
                    restitution: 1.5,
                    life: 1
                }
            },
            {
                position: {
                    x: 9.5,
                    y: 140.0
                },
                type: 'static',
                shape: {
                    type: 'circle',
                    radius: 0.2,
                    color: '#e6e1ae'
                },
                props: {
                    angularVelocity: 1.0,
                    density: 1,
                    restitution: 1.5,
                    life: 1
                }
            },
            {
                position: {
                    x: 10.5,
                    y: 140.0
                },
                type: 'static',
                shape: {
                    type: 'circle',
                    radius: 0.2,
                    color: '#e6e1ae'
                },
                props: {
                    angularVelocity: 1.0,
                    density: 1,
                    restitution: 1.5,
                    life: 1
                }
            },
            {
                position: {
                    x: 11.5,
                    y: 140.0
                },
                type: 'static',
                shape: {
                    type: 'circle',
                    radius: 0.2,
                    color: '#e6e1ae'
                },
                props: {
                    angularVelocity: 1.0,
                    density: 1,
                    restitution: 1.5,
                    life: 1
                }
            },
            {
                position: {
                    x: 12.5,
                    y: 140.0
                },
                type: 'static',
                shape: {
                    type: 'circle',
                    radius: 0.2,
                    color: '#e6e1ae'
                },
                props: {
                    angularVelocity: 1.0,
                    density: 1,
                    restitution: 1.5,
                    life: 1
                }
            },
            {
                position: {
                    x: 13.5,
                    y: 140.0
                },
                type: 'static',
                shape: {
                    type: 'circle',
                    radius: 0.2,
                    color: '#e6e1ae'
                },
                props: {
                    angularVelocity: 1.0,
                    density: 1,
                    restitution: 1.5,
                    life: 1
                }
            },
            {
                position: {
                    x: 14.5,
                    y: 140.0
                },
                type: 'static',
                shape: {
                    type: 'circle',
                    radius: 0.2,
                    color: '#e6e1ae'
                },
                props: {
                    angularVelocity: 1.0,
                    density: 1,
                    restitution: 1.5,
                    life: 1
                }
            },
            {
                position: {
                    x: 15.5,
                    y: 140.0
                },
                type: 'static',
                shape: {
                    type: 'circle',
                    radius: 0.2,
                    color: '#e6e1ae'
                },
                props: {
                    angularVelocity: 1.0,
                    density: 1,
                    restitution: 1.5,
                    life: 1
                }
            },
            {
                position: {
                    x: 16.5,
                    y: 140.0
                },
                type: 'static',
                shape: {
                    type: 'circle',
                    radius: 0.2,
                    color: '#e6e1ae'
                },
                props: {
                    angularVelocity: 1.0,
                    density: 1,
                    restitution: 1.5,
                    life: 1
                }
            },
            {
                position: {
                    x: 17.5,
                    y: 140.0
                },
                type: 'static',
                shape: {
                    type: 'circle',
                    radius: 0.2,
                    color: '#e6e1ae'
                },
                props: {
                    angularVelocity: 1.0,
                    density: 1,
                    restitution: 1.5,
                    life: 1
                }
            },
            {
                position: {
                    x: 18.5,
                    y: 140.0
                },
                type: 'static',
                shape: {
                    type: 'circle',
                    radius: 0.2,
                    color: '#e6e1ae'
                },
                props: {
                    angularVelocity: 1.0,
                    density: 1,
                    restitution: 1.5,
                    life: 1
                }
            },
            {
                position: {
                    x: 19.5,
                    y: 140.0
                },
                type: 'static',
                shape: {
                    type: 'circle',
                    radius: 0.2,
                    color: '#e6e1ae'
                },
                props: {
                    angularVelocity: 1.0,
                    density: 1,
                    restitution: 1.5,
                    life: 1
                }
            },
            {
                position: {
                    x: 3.5,
                    y: 144.0
                },
                type: 'static',
                shape: {
                    type: 'circle',
                    radius: 0.2,
                    color: '#e6e1ae'
                },
                props: {
                    angularVelocity: 1.0,
                    density: 1,
                    restitution: 1.5,
                    life: 1
                }
            },
            {
                position: {
                    x: 4.5,
                    y: 144.0
                },
                type: 'static',
                shape: {
                    type: 'circle',
                    radius: 0.2,
                    color: '#e6e1ae'
                },
                props: {
                    angularVelocity: 1.0,
                    density: 1,
                    restitution: 1.5,
                    life: 1
                }
            },
            {
                position: {
                    x: 5.5,
                    y: 144.0
                },
                type: 'static',
                shape: {
                    type: 'circle',
                    radius: 0.2,
                    color: '#e6e1ae'
                },
                props: {
                    angularVelocity: 1.0,
                    density: 1,
                    restitution: 1.5,
                    life: 1
                }
            },
            {
                position: {
                    x: 6.5,
                    y: 144.0
                },
                type: 'static',
                shape: {
                    type: 'circle',
                    radius: 0.2,
                    color: '#e6e1ae'
                },
                props: {
                    angularVelocity: 1.0,
                    density: 1,
                    restitution: 1.5,
                    life: 1
                }
            },
            {
                position: {
                    x: 7.5,
                    y: 144.0
                },
                type: 'static',
                shape: {
                    type: 'circle',
                    radius: 0.2,
                    color: '#e6e1ae'
                },
                props: {
                    angularVelocity: 1.0,
                    density: 1,
                    restitution: 1.5,
                    life: 1
                }
            },
            {
                position: {
                    x: 8.5,
                    y: 144.0
                },
                type: 'static',
                shape: {
                    type: 'circle',
                    radius: 0.2,
                    color: '#e6e1ae'
                },
                props: {
                    angularVelocity: 1.0,
                    density: 1,
                    restitution: 1.5,
                    life: 1
                }
            },
            {
                position: {
                    x: 9.5,
                    y: 144.0
                },
                type: 'static',
                shape: {
                    type: 'circle',
                    radius: 0.2,
                    color: '#e6e1ae'
                },
                props: {
                    angularVelocity: 1.0,
                    density: 1,
                    restitution: 1.5,
                    life: 1
                }
            },
            {
                position: {
                    x: 10.5,
                    y: 144.0
                },
                type: 'static',
                shape: {
                    type: 'circle',
                    radius: 0.2,
                    color: '#e6e1ae'
                },
                props: {
                    angularVelocity: 1.0,
                    density: 1,
                    restitution: 1.5,
                    life: 1
                }
            },
            {
                position: {
                    x: 11.5,
                    y: 144.0
                },
                type: 'static',
                shape: {
                    type: 'circle',
                    radius: 0.2,
                    color: '#e6e1ae'
                },
                props: {
                    angularVelocity: 1.0,
                    density: 1,
                    restitution: 1.5,
                    life: 1
                }
            },
            {
                position: {
                    x: 12.5,
                    y: 144.0
                },
                type: 'static',
                shape: {
                    type: 'circle',
                    radius: 0.2,
                    color: '#e6e1ae'
                },
                props: {
                    angularVelocity: 1.0,
                    density: 1,
                    restitution: 1.5,
                    life: 1
                }
            },
            {
                position: {
                    x: 13.5,
                    y: 144.0
                },
                type: 'static',
                shape: {
                    type: 'circle',
                    radius: 0.2,
                    color: '#e6e1ae'
                },
                props: {
                    angularVelocity: 1.0,
                    density: 1,
                    restitution: 1.5,
                    life: 1
                }
            },
            {
                position: {
                    x: 14.5,
                    y: 144.0
                },
                type: 'static',
                shape: {
                    type: 'circle',
                    radius: 0.2,
                    color: '#e6e1ae'
                },
                props: {
                    angularVelocity: 1.0,
                    density: 1,
                    restitution: 1.5,
                    life: 1
                }
            },
            {
                position: {
                    x: 15.5,
                    y: 144.0
                },
                type: 'static',
                shape: {
                    type: 'circle',
                    radius: 0.2,
                    color: '#e6e1ae'
                },
                props: {
                    angularVelocity: 1.0,
                    density: 1,
                    restitution: 1.5,
                    life: 1
                }
            },
            {
                position: {
                    x: 16.5,
                    y: 144.0
                },
                type: 'static',
                shape: {
                    type: 'circle',
                    radius: 0.2,
                    color: '#e6e1ae'
                },
                props: {
                    angularVelocity: 1.0,
                    density: 1,
                    restitution: 1.5,
                    life: 1
                }
            },
            {
                position: {
                    x: 17.5,
                    y: 144.0
                },
                type: 'static',
                shape: {
                    type: 'circle',
                    radius: 0.2,
                    color: '#e6e1ae'
                },
                props: {
                    angularVelocity: 1.0,
                    density: 1,
                    restitution: 1.5,
                    life: 1
                }
            },
            {
                position: {
                    x: 18.5,
                    y: 144.0
                },
                type: 'static',
                shape: {
                    type: 'circle',
                    radius: 0.2,
                    color: '#e6e1ae'
                },
                props: {
                    angularVelocity: 1.0,
                    density: 1,
                    restitution: 1.5,
                    life: 1
                }
            },
            {
                position: {
                    x: 19.5,
                    y: 144.0
                },
                type: 'static',
                shape: {
                    type: 'circle',
                    radius: 0.2,
                    color: '#e6e1ae'
                },
                props: {
                    angularVelocity: 1.0,
                    density: 1,
                    restitution: 1.5,
                    life: 1
                }
            },
            {
                position: {
                    x: 3.5,
                    y: 147.0
                },
                type: 'static',
                shape: {
                    type: 'circle',
                    radius: 0.2,
                    color: '#e6e1ae'
                },
                props: {
                    angularVelocity: 1.0,
                    density: 1,
                    restitution: 1.5,
                    life: 1
                }
            },
            {
                position: {
                    x: 4.5,
                    y: 147.0
                },
                type: 'static',
                shape: {
                    type: 'circle',
                    radius: 0.2,
                    color: '#e6e1ae'
                },
                props: {
                    angularVelocity: 1.0,
                    density: 1,
                    restitution: 1.5,
                    life: 1
                }
            },
            {
                position: {
                    x: 5.5,
                    y: 147.0
                },
                type: 'static',
                shape: {
                    type: 'circle',
                    radius: 0.2,
                    color: '#e6e1ae'
                },
                props: {
                    angularVelocity: 1.0,
                    density: 1,
                    restitution: 1.5,
                    life: 1
                }
            },
            {
                position: {
                    x: 6.5,
                    y: 147.0
                },
                type: 'static',
                shape: {
                    type: 'circle',
                    radius: 0.2,
                    color: '#e6e1ae'
                },
                props: {
                    angularVelocity: 1.0,
                    density: 1,
                    restitution: 1.5,
                    life: 1
                }
            },
            {
                position: {
                    x: 7.5,
                    y: 147.0
                },
                type: 'static',
                shape: {
                    type: 'circle',
                    radius: 0.2,
                    color: '#e6e1ae'
                },
                props: {
                    angularVelocity: 1.0,
                    density: 1,
                    restitution: 1.5,
                    life: 1
                }
            },
            {
                position: {
                    x: 8.5,
                    y: 147.0
                },
                type: 'static',
                shape: {
                    type: 'circle',
                    radius: 0.2,
                    color: '#e6e1ae'
                },
                props: {
                    angularVelocity: 1.0,
                    density: 1,
                    restitution: 1.5,
                    life: 1
                }
            },
            {
                position: {
                    x: 9.5,
                    y: 147.0
                },
                type: 'static',
                shape: {
                    type: 'circle',
                    radius: 0.2,
                    color: '#e6e1ae'
                },
                props: {
                    angularVelocity: 1.0,
                    density: 1,
                    restitution: 1.5,
                    life: 1
                }
            },
            {
                position: {
                    x: 10.5,
                    y: 147.0
                },
                type: 'static',
                shape: {
                    type: 'circle',
                    radius: 0.2,
                    color: '#e6e1ae'
                },
                props: {
                    angularVelocity: 1.0,
                    density: 1,
                    restitution: 1.5,
                    life: 1
                }
            },
            {
                position: {
                    x: 11.5,
                    y: 147.0
                },
                type: 'static',
                shape: {
                    type: 'circle',
                    radius: 0.2,
                    color: '#e6e1ae'
                },
                props: {
                    angularVelocity: 1.0,
                    density: 1,
                    restitution: 1.5,
                    life: 1
                }
            },
            {
                position: {
                    x: 12.5,
                    y: 147.0
                },
                type: 'static',
                shape: {
                    type: 'circle',
                    radius: 0.2,
                    color: '#e6e1ae'
                },
                props: {
                    angularVelocity: 1.0,
                    density: 1,
                    restitution: 1.5,
                    life: 1
                }
            },
            {
                position: {
                    x: 13.5,
                    y: 147.0
                },
                type: 'static',
                shape: {
                    type: 'circle',
                    radius: 0.2,
                    color: '#e6e1ae'
                },
                props: {
                    angularVelocity: 1.0,
                    density: 1,
                    restitution: 1.5,
                    life: 1
                }
            },
            {
                position: {
                    x: 14.5,
                    y: 147.0
                },
                type: 'static',
                shape: {
                    type: 'circle',
                    radius: 0.2,
                    color: '#e6e1ae'
                },
                props: {
                    angularVelocity: 1.0,
                    density: 1,
                    restitution: 1.5,
                    life: 1
                }
            },
            {
                position: {
                    x: 15.5,
                    y: 147.0
                },
                type: 'static',
                shape: {
                    type: 'circle',
                    radius: 0.2,
                    color: '#e6e1ae'
                },
                props: {
                    angularVelocity: 1.0,
                    density: 1,
                    restitution: 1.5,
                    life: 1
                }
            },
            {
                position: {
                    x: 16.5,
                    y: 147.0
                },
                type: 'static',
                shape: {
                    type: 'circle',
                    radius: 0.2,
                    color: '#e6e1ae'
                },
                props: {
                    angularVelocity: 1.0,
                    density: 1,
                    restitution: 1.5,
                    life: 1
                }
            },
            {
                position: {
                    x: 17.5,
                    y: 147.0
                },
                type: 'static',
                shape: {
                    type: 'circle',
                    radius: 0.2,
                    color: '#e6e1ae'
                },
                props: {
                    angularVelocity: 1.0,
                    density: 1,
                    restitution: 1.5,
                    life: 1
                }
            },
            {
                position: {
                    x: 18.5,
                    y: 147.0
                },
                type: 'static',
                shape: {
                    type: 'circle',
                    radius: 0.2,
                    color: '#e6e1ae'
                },
                props: {
                    angularVelocity: 1.0,
                    density: 1,
                    restitution: 1.5,
                    life: 1
                }
            },
            {
                position: {
                    x: 19.5,
                    y: 147.0
                },
                type: 'static',
                shape: {
                    type: 'circle',
                    radius: 0.2,
                    color: '#e6e1ae'
                },
                props: {
                    angularVelocity: 1.0,
                    density: 1,
                    restitution: 1.5,
                    life: 1
                }
            },
            {
                position: {
                    x: 3.5,
                    y: 149.0
                },
                type: 'static',
                shape: {
                    type: 'circle',
                    radius: 0.2,
                    color: '#e6e1ae'
                },
                props: {
                    angularVelocity: 1.0,
                    density: 1,
                    restitution: 1.5,
                    life: 1
                }
            },
            {
                position: {
                    x: 4.5,
                    y: 149.0
                },
                type: 'static',
                shape: {
                    type: 'circle',
                    radius: 0.2,
                    color: '#e6e1ae'
                },
                props: {
                    angularVelocity: 1.0,
                    density: 1,
                    restitution: 1.5,
                    life: 1
                }
            },
            {
                position: {
                    x: 5.5,
                    y: 149.0
                },
                type: 'static',
                shape: {
                    type: 'circle',
                    radius: 0.2,
                    color: '#e6e1ae'
                },
                props: {
                    angularVelocity: 1.0,
                    density: 1,
                    restitution: 1.5,
                    life: 1
                }
            },
            {
                position: {
                    x: 6.5,
                    y: 149.0
                },
                type: 'static',
                shape: {
                    type: 'circle',
                    radius: 0.2,
                    color: '#e6e1ae'
                },
                props: {
                    angularVelocity: 1.0,
                    density: 1,
                    restitution: 1.5,
                    life: 1
                }
            },
            {
                position: {
                    x: 7.5,
                    y: 149.0
                },
                type: 'static',
                shape: {
                    type: 'circle',
                    radius: 0.2,
                    color: '#e6e1ae'
                },
                props: {
                    angularVelocity: 1.0,
                    density: 1,
                    restitution: 1.5,
                    life: 1
                }
            },
            {
                position: {
                    x: 8.5,
                    y: 149.0
                },
                type: 'static',
                shape: {
                    type: 'circle',
                    radius: 0.2,
                    color: '#e6e1ae'
                },
                props: {
                    angularVelocity: 1.0,
                    density: 1,
                    restitution: 1.5,
                    life: 1
                }
            },
            {
                position: {
                    x: 9.5,
                    y: 149.0
                },
                type: 'static',
                shape: {
                    type: 'circle',
                    radius: 0.2,
                    color: '#e6e1ae'
                },
                props: {
                    angularVelocity: 1.0,
                    density: 1,
                    restitution: 1.5,
                    life: 1
                }
            },
            {
                position: {
                    x: 10.5,
                    y: 149.0
                },
                type: 'static',
                shape: {
                    type: 'circle',
                    radius: 0.2,
                    color: '#e6e1ae'
                },
                props: {
                    angularVelocity: 1.0,
                    density: 1,
                    restitution: 1.5,
                    life: 1
                }
            },
            {
                position: {
                    x: 11.5,
                    y: 149.0
                },
                type: 'static',
                shape: {
                    type: 'circle',
                    radius: 0.2,
                    color: '#e6e1ae'
                },
                props: {
                    angularVelocity: 1.0,
                    density: 1,
                    restitution: 1.5,
                    life: 1
                }
            },
            {
                position: {
                    x: 12.5,
                    y: 149.0
                },
                type: 'static',
                shape: {
                    type: 'circle',
                    radius: 0.2,
                    color: '#e6e1ae'
                },
                props: {
                    angularVelocity: 1.0,
                    density: 1,
                    restitution: 1.5,
                    life: 1
                }
            },
            {
                position: {
                    x: 13.5,
                    y: 149.0
                },
                type: 'static',
                shape: {
                    type: 'circle',
                    radius: 0.2,
                    color: '#e6e1ae'
                },
                props: {
                    angularVelocity: 1.0,
                    density: 1,
                    restitution: 1.5,
                    life: 1
                }
            },
            {
                position: {
                    x: 14.5,
                    y: 149.0
                },
                type: 'static',
                shape: {
                    type: 'circle',
                    radius: 0.2,
                    color: '#e6e1ae'
                },
                props: {
                    angularVelocity: 1.0,
                    density: 1,
                    restitution: 1.5,
                    life: 1
                }
            },
            {
                position: {
                    x: 15.5,
                    y: 149.0
                },
                type: 'static',
                shape: {
                    type: 'circle',
                    radius: 0.2,
                    color: '#e6e1ae'
                },
                props: {
                    angularVelocity: 1.0,
                    density: 1,
                    restitution: 1.5,
                    life: 1
                }
            },
            {
                position: {
                    x: 16.5,
                    y: 149.0
                },
                type: 'static',
                shape: {
                    type: 'circle',
                    radius: 0.2,
                    color: '#e6e1ae'
                },
                props: {
                    angularVelocity: 1.0,
                    density: 1,
                    restitution: 1.5,
                    life: 1
                }
            },
            {
                position: {
                    x: 17.5,
                    y: 149.0
                },
                type: 'static',
                shape: {
                    type: 'circle',
                    radius: 0.2,
                    color: '#e6e1ae'
                },
                props: {
                    angularVelocity: 1.0,
                    density: 1,
                    restitution: 1.5,
                    life: 1
                }
            },
            {
                position: {
                    x: 18.5,
                    y: 149.0
                },
                type: 'static',
                shape: {
                    type: 'circle',
                    radius: 0.2,
                    color: '#e6e1ae'
                },
                props: {
                    angularVelocity: 1.0,
                    density: 1,
                    restitution: 1.5,
                    life: 1
                }
            },
            {
                position: {
                    x: 19.5,
                    y: 149.0
                },
                type: 'static',
                shape: {
                    type: 'circle',
                    radius: 0.2,
                    color: '#e6e1ae'
                },
                props: {
                    angularVelocity: 1.0,
                    density: 1,
                    restitution: 1.5,
                    life: 1
                }
            },
            {
                position: {
                    x: 3.5,
                    y: 150.0
                },
                type: 'static',
                shape: {
                    type: 'circle',
                    radius: 0.2,
                    color: '#e6e1ae'
                },
                props: {
                    angularVelocity: 1.0,
                    density: 1,
                    restitution: 1.5,
                    life: 1
                }
            },
            {
                position: {
                    x: 4.5,
                    y: 150.0
                },
                type: 'static',
                shape: {
                    type: 'circle',
                    radius: 0.2,
                    color: '#e6e1ae'
                },
                props: {
                    angularVelocity: 1.0,
                    density: 1,
                    restitution: 1.5,
                    life: 1
                }
            },
            {
                position: {
                    x: 5.5,
                    y: 150.0
                },
                type: 'static',
                shape: {
                    type: 'circle',
                    radius: 0.2,
                    color: '#e6e1ae'
                },
                props: {
                    angularVelocity: 1.0,
                    density: 1,
                    restitution: 1.5,
                    life: 1
                }
            },
            {
                position: {
                    x: 6.5,
                    y: 150.0
                },
                type: 'static',
                shape: {
                    type: 'circle',
                    radius: 0.2,
                    color: '#e6e1ae'
                },
                props: {
                    angularVelocity: 1.0,
                    density: 1,
                    restitution: 1.5,
                    life: 1
                }
            },
            {
                position: {
                    x: 7.5,
                    y: 150.0
                },
                type: 'static',
                shape: {
                    type: 'circle',
                    radius: 0.2,
                    color: '#e6e1ae'
                },
                props: {
                    angularVelocity: 1.0,
                    density: 1,
                    restitution: 1.5,
                    life: 1
                }
            },
            {
                position: {
                    x: 8.5,
                    y: 150.0
                },
                type: 'static',
                shape: {
                    type: 'circle',
                    radius: 0.2,
                    color: '#e6e1ae'
                },
                props: {
                    angularVelocity: 1.0,
                    density: 1,
                    restitution: 1.5,
                    life: 1
                }
            },
            {
                position: {
                    x: 9.5,
                    y: 150.0
                },
                type: 'static',
                shape: {
                    type: 'circle',
                    radius: 0.2,
                    color: '#e6e1ae'
                },
                props: {
                    angularVelocity: 1.0,
                    density: 1,
                    restitution: 1.5,
                    life: 1
                }
            },
            {
                position: {
                    x: 10.5,
                    y: 150.0
                },
                type: 'static',
                shape: {
                    type: 'circle',
                    radius: 0.2,
                    color: '#e6e1ae'
                },
                props: {
                    angularVelocity: 1.0,
                    density: 1,
                    restitution: 1.5,
                    life: 1
                }
            },
            {
                position: {
                    x: 11.5,
                    y: 150.0
                },
                type: 'static',
                shape: {
                    type: 'circle',
                    radius: 0.2,
                    color: '#e6e1ae'
                },
                props: {
                    angularVelocity: 1.0,
                    density: 1,
                    restitution: 1.5,
                    life: 1
                }
            },
            {
                position: {
                    x: 12.5,
                    y: 150.0
                },
                type: 'static',
                shape: {
                    type: 'circle',
                    radius: 0.2,
                    color: '#e6e1ae'
                },
                props: {
                    angularVelocity: 1.0,
                    density: 1,
                    restitution: 1.5,
                    life: 1
                }
            },
            {
                position: {
                    x: 13.5,
                    y: 150.0
                },
                type: 'static',
                shape: {
                    type: 'circle',
                    radius: 0.2,
                    color: '#e6e1ae'
                },
                props: {
                    angularVelocity: 1.0,
                    density: 1,
                    restitution: 1.5,
                    life: 1
                }
            },
            {
                position: {
                    x: 14.5,
                    y: 150.0
                },
                type: 'static',
                shape: {
                    type: 'circle',
                    radius: 0.2,
                    color: '#e6e1ae'
                },
                props: {
                    angularVelocity: 1.0,
                    density: 1,
                    restitution: 1.5,
                    life: 1
                }
            },
            {
                position: {
                    x: 15.5,
                    y: 150.0
                },
                type: 'static',
                shape: {
                    type: 'circle',
                    radius: 0.2,
                    color: '#e6e1ae'
                },
                props: {
                    angularVelocity: 1.0,
                    density: 1,
                    restitution: 1.5,
                    life: 1
                }
            },
            {
                position: {
                    x: 16.5,
                    y: 150.0
                },
                type: 'static',
                shape: {
                    type: 'circle',
                    radius: 0.2,
                    color: '#e6e1ae'
                },
                props: {
                    angularVelocity: 1.0,
                    density: 1,
                    restitution: 1.5,
                    life: 1
                }
            },
            {
                position: {
                    x: 17.5,
                    y: 150.0
                },
                type: 'static',
                shape: {
                    type: 'circle',
                    radius: 0.2,
                    color: '#e6e1ae'
                },
                props: {
                    angularVelocity: 1.0,
                    density: 1,
                    restitution: 1.5,
                    life: 1
                }
            },
            {
                position: {
                    x: 18.5,
                    y: 150.0
                },
                type: 'static',
                shape: {
                    type: 'circle',
                    radius: 0.2,
                    color: '#e6e1ae'
                },
                props: {
                    angularVelocity: 1.0,
                    density: 1,
                    restitution: 1.5,
                    life: 1
                }
            },
            {
                position: {
                    x: 19.5,
                    y: 150.0
                },
                type: 'static',
                shape: {
                    type: 'circle',
                    radius: 0.2,
                    color: '#e6e1ae'
                },
                props: {
                    angularVelocity: 1.0,
                    density: 1,
                    restitution: 1.5,
                    life: 1
                }
            },
            {
                position: {
                    x: 4.5,
                    y: 180.0
                },
                type: 'kinematic',
                shape: {
                    type: 'box',
                    width: 6.0,
                    height: 0.1,
                    rotation: 0,
                    color: '#ccb1b1'
                },
                props: {
                    density: 1,
                    angularVelocity: 4.6,
                    restitution: 0
                }
            },
            {
                position: {
                    x: 18.5,
                    y: 180.0
                },
                type: 'kinematic',
                shape: {
                    type: 'box',
                    width: 7.0,
                    height: 0.1,
                    rotation: 0,
                    color: '#b1ccb1'
                },
                props: {
                    density: 1,
                    angularVelocity: -4,
                    restitution: 0
                }
            },
            {
                position: {
                    x: 11.5,
                    y: 195.0
                },
                type: 'kinematic',
                shape: {
                    type: 'box',
                    width: 8.0,
                    height: 0.1,
                    rotation: 0,
                    color: '#b3ccff'
                },
                props: {
                    density: 1,
                    angularVelocity: 5.5,
                    restitution: 0
                }
            }
        ]
    }
];

},{"@parcel/transformer-js/src/esmodule-helpers.js":"jnFvT"}],"eRxgS":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "Camera", ()=>Camera);
var _constants = require("./data/constants");
class Camera {
    get zoom() {
        return this._zoom;
    }
    set zoom(v) {
        this._targetZoom = v;
    }
    get x() {
        return this._position.x;
    }
    set x(v) {
        this._targetPosition.x = v;
    }
    get y() {
        return this._position.y;
    }
    set y(v) {
        this._targetPosition.y = v;
    }
    get position() {
        return this._position;
    }
    setPosition(v, force = false) {
        if (force) return this._position = {
            x: v.x,
            y: v.y
        };
        return this._targetPosition = {
            x: v.x,
            y: v.y
        };
    }
    lock(v) {
        this._locked = v;
    }
    startFollowingMarbles() {
        this._shouldFollowMarbles = true;
    }
    initializePosition() {
        const centerX = 12.95;
        const initialY = 2;
        this._position = {
            x: centerX,
            y: initialY
        };
        this._targetPosition = {
            x: centerX,
            y: initialY
        };
        this._shouldFollowMarbles = false;
    }
    update({ marbles, stage, needToZoom, targetIndex }) {
        // set target position
        if (!this._locked) this._calcTargetPositionAndZoom(marbles, stage, needToZoom, targetIndex);
        // interpolate position
        this._position.x = this._interpolation(this.x, this._targetPosition.x);
        this._position.y = this._interpolation(this.y, this._targetPosition.y);
        // interpolate zoom
        this._zoom = this._interpolation(this._zoom, this._targetZoom);
    }
    _calcTargetPositionAndZoom(marbles, stage, needToZoom, targetIndex) {
        if (!this._shouldFollowMarbles) return;
        if (marbles.length > 0) {
            const targetMarble = marbles[targetIndex] ? marbles[targetIndex] : marbles[0];
            this.setPosition(targetMarble.position);
            if (needToZoom) {
                const goalDist = Math.abs(stage.zoomY - this._position.y);
                this.zoom = Math.max(1, (1 - goalDist / (0, _constants.zoomThreshold)) * 4);
            } else this.zoom = 1;
        } else this.zoom = 1;
    }
    _interpolation(current, target) {
        const d = target - current;
        if (Math.abs(d) < 1 / (0, _constants.initialZoom)) return target;
        return current + d / 10;
    }
    renderScene(ctx, callback) {
        const zoomFactor = (0, _constants.initialZoom) * 2 * this._zoom;
        ctx.save();
        ctx.translate(-this.x * this._zoom, -this.y * this._zoom);
        ctx.scale(this.zoom, this.zoom);
        ctx.translate(ctx.canvas.width / zoomFactor, ctx.canvas.height / zoomFactor);
        callback(ctx);
        ctx.restore();
    }
    constructor(){
        this._position = {
            x: 0,
            y: 0
        };
        this._targetPosition = {
            x: 0,
            y: 0
        };
        this._zoom = 1;
        this._targetZoom = 1;
        this._locked = false;
        this._shouldFollowMarbles = false;
    }
}

},{"./data/constants":"dKlb7","@parcel/transformer-js/src/esmodule-helpers.js":"jnFvT"}],"kaELn":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "RouletteRenderer", ()=>RouletteRenderer);
var _constants = require("./data/constants");
class RouletteRenderer {
    constructor(){
        this.sizeFactor = 1;
        this._images = {};
    }
    get width() {
        return this._canvas.width;
    }
    get height() {
        return this._canvas.height;
    }
    get canvas() {
        return this._canvas;
    }
    async init() {
        await this._load();
        this._canvas = document.createElement('canvas');
        this._canvas.width = (0, _constants.canvasWidth);
        this._canvas.height = (0, _constants.canvasHeight);
        this.ctx = this._canvas.getContext('2d', {
            alpha: false
        });
        document.body.appendChild(this._canvas);
        const resizing = (entries)=>{
            const realSize = entries ? entries[0].contentRect : this._canvas.getBoundingClientRect();
            const width = Math.max(realSize.width / 2, 640);
            const height = width / realSize.width * realSize.height;
            this._canvas.width = width;
            this._canvas.height = height;
            this.sizeFactor = width / realSize.width;
        };
        const resizeObserver = new ResizeObserver(resizing);
        resizeObserver.observe(this._canvas);
        resizing();
    }
    // 2025-11-14: 성능 최적화 - 이미지 로딩 timeout 및 에러 처리 추가
    async _loadImage(url) {
        const TIMEOUT_MS = 10000; // 10초 타임아웃
        return Promise.race([
            // 실제 이미지 로딩
            new Promise((resolve, reject)=>{
                const img = new Image();
                const onLoad = ()=>{
                    img.removeEventListener('load', onLoad);
                    img.removeEventListener('error', onError);
                    resolve(img);
                };
                const onError = ()=>{
                    img.removeEventListener('load', onLoad);
                    img.removeEventListener('error', onError);
                    reject(new Error(`Failed to load image: ${url}`));
                };
                img.addEventListener('load', onLoad);
                img.addEventListener('error', onError);
                img.src = url;
            }),
            // 타임아웃
            new Promise((_, reject)=>setTimeout(()=>reject(new Error(`Image load timeout: ${url}`)), TIMEOUT_MS))
        ]).catch((error)=>{
            console.warn('Image load failed, using fallback:', error);
            // Fallback: 빈 이미지 반환
            const fallbackImg = new Image();
            fallbackImg.width = 1;
            fallbackImg.height = 1;
            return fallbackImg;
        });
    }
    async _load() {
        const loadPromises = [
            {
                name: "\uCC54\uB8E8",
                imgUrl: new URL(require("c5fa5cad7ab28dff"))
            },
            {
                name: "\uCFE0\uBE48",
                imgUrl: new URL(require("e27ebf0909884c3d"))
            },
            {
                name: "\uAF49\uBCC0",
                imgUrl: new URL(require("829379cacf56b816"))
            },
            {
                name: "\uAF49\uBCC0\uD638\uC0AC",
                imgUrl: new URL(require("829379cacf56b816"))
            },
            {
                name: "\uAF49 \uBCC0\uD638\uC0AC",
                imgUrl: new URL(require("829379cacf56b816"))
            },
            {
                name: "\uC8FC\uB204\uD53C",
                imgUrl: new URL(require("d7a95745752c0f1"))
            }
        ].map(({ name, imgUrl })=>{
            return (async ()=>{
                this._images[name] = await this._loadImage(imgUrl.toString());
            })();
        });
        loadPromises.push((async ()=>{
            await this._loadImage(new URL(require("3c1155060c04461c")).toString());
        })());
        await Promise.all(loadPromises);
    }
    render(renderParameters, uiObjects) {
        this.ctx.fillStyle = 'black';
        this.ctx.fillRect(0, 0, this._canvas.width, this._canvas.height);
        this.ctx.save();
        this.ctx.scale((0, _constants.initialZoom), (0, _constants.initialZoom));
        this.ctx.textAlign = 'left';
        this.ctx.textBaseline = 'top';
        this.ctx.font = '0.4pt sans-serif';
        this.ctx.lineWidth = 3 / (renderParameters.camera.zoom + (0, _constants.initialZoom));
        renderParameters.camera.renderScene(this.ctx, ()=>{
            this.renderEntities(renderParameters.entities);
            this.renderEffects(renderParameters);
            this.renderMarbles(renderParameters);
        });
        this.ctx.restore();
        uiObjects.forEach((obj)=>obj.render(this.ctx, renderParameters, this._canvas.width, this._canvas.height));
        renderParameters.particleManager.render(this.ctx);
        this.renderWinner(renderParameters);
    }
    renderEntities(entities) {
        this.ctx.save();
        entities.forEach((entity)=>{
            const transform = this.ctx.getTransform();
            this.ctx.translate(entity.x, entity.y);
            this.ctx.rotate(entity.angle);
            this.ctx.fillStyle = entity.shape.color ?? (0, _constants.DefaultEntityColor)[entity.shape.type];
            this.ctx.strokeStyle = entity.shape.color ?? (0, _constants.DefaultEntityColor)[entity.shape.type];
            this.ctx.shadowBlur = 15;
            this.ctx.shadowColor = entity.shape.bloomColor ?? entity.shape.color ?? (0, _constants.DefaultBloomColor)[entity.shape.type];
            const shape = entity.shape;
            switch(shape.type){
                case 'polyline':
                    if (shape.points.length > 0) {
                        this.ctx.beginPath();
                        this.ctx.moveTo(shape.points[0][0], shape.points[0][1]);
                        for(let i = 1; i < shape.points.length; i++)this.ctx.lineTo(shape.points[i][0], shape.points[i][1]);
                        this.ctx.stroke();
                    }
                    break;
                case 'box':
                    const w = shape.width * 2;
                    const h = shape.height * 2;
                    this.ctx.rotate(shape.rotation);
                    this.ctx.fillRect(-w / 2, -h / 2, w, h);
                    this.ctx.strokeRect(-w / 2, -h / 2, w, h);
                    break;
                case 'circle':
                    this.ctx.beginPath();
                    this.ctx.arc(0, 0, shape.radius, 0, Math.PI * 2, false);
                    this.ctx.stroke();
                    break;
            }
            this.ctx.setTransform(transform);
        });
        this.ctx.restore();
    }
    renderEffects({ effects, camera }) {
        effects.forEach((effect)=>effect.render(this.ctx, camera.zoom * (0, _constants.initialZoom)));
    }
    renderMarbles({ marbles, camera, winnerRank, winners, size }) {
        const winnerIndex = winnerRank - winners.length;
        const viewPort = {
            x: camera.x,
            y: camera.y,
            w: size.x,
            h: size.y,
            zoom: camera.zoom * (0, _constants.initialZoom)
        };
        marbles.forEach((marble, i)=>{
            marble.render(this.ctx, camera.zoom * (0, _constants.initialZoom), i === winnerIndex, false, this._images[marble.name] || undefined, viewPort);
        });
    }
    renderWinner({ winner }) {
        if (!winner) return;
        this.ctx.save();
        this.ctx.fillStyle = 'rgba(0, 0, 0, 0.5)';
        this.ctx.fillRect(this._canvas.width / 2, this._canvas.height - 168, this._canvas.width / 2, 168);
        this.ctx.fillStyle = 'white';
        this.ctx.font = 'bold 48px sans-serif';
        this.ctx.textAlign = 'right';
        this.ctx.fillText('Winner', this._canvas.width - 10, this._canvas.height - 120);
        this.ctx.font = 'bold 72px sans-serif';
        this.ctx.fillStyle = winner.color;
        this.ctx.fillText(winner.name, this._canvas.width - 10, this._canvas.height - 55);
        this.ctx.restore();
    }
}

},{"./data/constants":"dKlb7","c5fa5cad7ab28dff":"fEghL","e27ebf0909884c3d":"lEaYi","829379cacf56b816":"9m1Wx","d7a95745752c0f1":"66J9F","3c1155060c04461c":"4QZHP","@parcel/transformer-js/src/esmodule-helpers.js":"jnFvT"}],"fEghL":[function(require,module,exports,__globalThis) {
module.exports = module.bundle.resolve("chamru.192d6726.png") + "?" + Date.now();

},{}],"lEaYi":[function(require,module,exports,__globalThis) {
module.exports = module.bundle.resolve("kubin.860ce731.png") + "?" + Date.now();

},{}],"9m1Wx":[function(require,module,exports,__globalThis) {
module.exports = module.bundle.resolve("kkwak.8288312c.png") + "?" + Date.now();

},{}],"66J9F":[function(require,module,exports,__globalThis) {
module.exports = module.bundle.resolve("junyoop.1200c7a5.png") + "?" + Date.now();

},{}],"4QZHP":[function(require,module,exports,__globalThis) {
module.exports = module.bundle.resolve("ff.f22e3cf2.svg") + "?" + Date.now();

},{}],"LqJb0":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "SkillEffect", ()=>SkillEffect);
const lifetime = 500;
class SkillEffect {
    constructor(x, y){
        this._size = 0;
        this._elapsed = 0;
        this.isDestroy = false;
        this.position = {
            x,
            y
        };
    }
    update(deltaTime) {
        this._elapsed += deltaTime;
        this._size = this._elapsed / lifetime * 10;
        if (this._elapsed > lifetime) this.isDestroy = true;
    }
    render(ctx, zoom) {
        ctx.save();
        const rate = this._elapsed / lifetime;
        ctx.globalAlpha = 1 - rate * rate;
        ctx.strokeStyle = 'white';
        ctx.lineWidth = 1 / zoom;
        ctx.beginPath();
        ctx.arc(this.position.x, this.position.y, this._size, 0, Math.PI * 2);
        ctx.stroke();
        ctx.restore();
    }
}

},{"@parcel/transformer-js/src/esmodule-helpers.js":"jnFvT"}],"auTxm":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "bound", ()=>bound);
function bound(// eslint-disable-next-line
target, propertyKey, descriptor) {
    return {
        configurable: true,
        get () {
            const boundMethod = descriptor.value.bind(this);
            Object.defineProperty(this, propertyKey, {
                value: boundMethod,
                configurable: true,
                writable: true
            });
            return boundMethod;
        }
    };
}

},{"@parcel/transformer-js/src/esmodule-helpers.js":"jnFvT"}],"ewQVA":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "RankRenderer", ()=>RankRenderer);
var _tsDecorate = require("@swc/helpers/_/_ts_decorate");
var _boundDecorator = require("./utils/bound.decorator");
class RankRenderer {
    constructor(){
        this._currentY = 0;
        this._targetY = 0;
        this.fontHeight = 16;
        this._userMoved = 0;
        this._currentWinner = -1;
        this.maxY = 0;
        this.winners = [];
        this.marbles = [];
        this.winnerRank = -1;
    }
    onWheel(e) {
        this._targetY += e.deltaY;
        if (this._targetY > this.maxY) this._targetY = this.maxY;
        this._userMoved = 2000;
    }
    onDblClick(e) {
        if (e) {
            if (navigator.clipboard) {
                const tsv = [];
                let rank = 0;
                tsv.push(...[
                    ...this.winners,
                    ...this.marbles
                ].map((m)=>{
                    rank++;
                    return [
                        rank.toString(),
                        m.name,
                        rank - 1 === this.winnerRank ? "\u2606" : ''
                    ].join('\t');
                }));
                tsv.unshift([
                    'Rank',
                    'Name',
                    'Winner'
                ].join('\t'));
                navigator.clipboard.writeText(tsv.join('\n')).then(()=>{
                    if (this.messageHandler) this.messageHandler('The result has been copied');
                });
            }
        }
    }
    onMessage(func) {
        this.messageHandler = func;
    }
    render(ctx, { winners, marbles, winnerRank }, width, height) {
        const startX = width - 5;
        const startY = Math.max(-this.fontHeight, this._currentY - height / 2);
        this.maxY = Math.max(0, (marbles.length + winners.length) * this.fontHeight + this.fontHeight);
        this._currentWinner = winners.length;
        this.winners = winners;
        this.marbles = marbles;
        this.winnerRank = winnerRank;
        ctx.save();
        ctx.textAlign = 'right';
        ctx.font = '10pt sans-serif';
        ctx.fillStyle = '#666';
        ctx.fillText(`${winners.length} / ${winners.length + marbles.length}`, width - 5, this.fontHeight);
        ctx.beginPath();
        ctx.rect(0, this.fontHeight + 2, width, this.maxY);
        ctx.clip();
        ctx.translate(0, -startY);
        ctx.font = 'bold 11pt sans-serif';
        winners.forEach((marble, rank)=>{
            const y = rank * this.fontHeight;
            if (y >= startY && y <= startY + ctx.canvas.height) {
                ctx.fillStyle = marble.color;
                ctx.fillText(`${rank === winnerRank ? "\u2606" : '\u2714'} ${marble.name} #${rank + 1}`, startX, 20 + y);
            }
        });
        ctx.font = '10pt sans-serif';
        marbles.forEach((marble, rank)=>{
            const y = (rank + winners.length) * this.fontHeight;
            if (y >= startY && y <= startY + ctx.canvas.height) {
                ctx.fillStyle = marble.color;
                ctx.fillText(`${marble.name} #${rank + 1 + winners.length}`, startX, 20 + y);
            }
        });
        ctx.restore();
    }
    update(deltaTime) {
        if (this._currentWinner === -1) return;
        if (this._userMoved > 0) this._userMoved -= deltaTime;
        else this._targetY = this._currentWinner * this.fontHeight + this.fontHeight;
        if (this._currentY !== this._targetY) this._currentY += (this._targetY - this._currentY) * (deltaTime / 250);
        if (Math.abs(this._currentY - this._targetY) < 1) this._currentY = this._targetY;
    }
    getBoundingBox() {
        return null;
    }
}
(0, _tsDecorate._)([
    (0, _boundDecorator.bound)
], RankRenderer.prototype, "onWheel", null);
(0, _tsDecorate._)([
    (0, _boundDecorator.bound)
], RankRenderer.prototype, "onDblClick", null);

},{"@swc/helpers/_/_ts_decorate":"aPTou","./utils/bound.decorator":"auTxm","@parcel/transformer-js/src/esmodule-helpers.js":"jnFvT"}],"5BIBs":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "Minimap", ()=>Minimap);
var _tsDecorate = require("@swc/helpers/_/_ts_decorate");
var _constants = require("./data/constants");
var _boundDecorator = require("./utils/bound.decorator");
class Minimap {
    constructor(){
        this.lastParams = null;
        this._onViewportChangeHandler = null;
        this.mousePosition = null;
        this.boundingBox = {
            x: 10,
            y: 10,
            w: 104,
            h: 0
        };
    }
    getBoundingBox() {
        return this.boundingBox;
    }
    onViewportChange(callback) {
        this._onViewportChangeHandler = callback;
    }
    update() {
    // nothing to do
    }
    onMouseMove(e) {
        if (!e) {
            this.mousePosition = null;
            if (this._onViewportChangeHandler) this._onViewportChangeHandler();
            return;
        }
        if (!this.lastParams) return;
        this.mousePosition = {
            x: e.x,
            y: e.y
        };
        if (this._onViewportChangeHandler) this._onViewportChangeHandler({
            x: this.mousePosition.x / 4,
            y: this.mousePosition.y / 4
        });
    }
    render(ctx, params) {
        if (!ctx) return;
        const { stage } = params;
        if (!stage) return;
        this.boundingBox.h = stage.goalY * 4;
        this.lastParams = params;
        this.ctx = ctx;
        ctx.save();
        ctx.fillStyle = '#333';
        ctx.translate(10, 10);
        ctx.scale(4, 4);
        ctx.fillRect(0, 0, 26, stage.goalY);
        this.ctx.lineWidth = 3 / (params.camera.zoom + (0, _constants.initialZoom));
        this.drawEntities(params.entities);
        this.drawMarbles(params);
        this.drawViewport(params);
        ctx.restore();
        ctx.save();
        ctx.strokeStyle = 'green';
        ctx.lineWidth = 1;
        ctx.strokeRect(this.boundingBox.x, this.boundingBox.y, this.boundingBox.w, this.boundingBox.h);
        ctx.restore();
    }
    drawViewport(params) {
        this.ctx.save();
        const { camera, size } = params;
        const zoom = camera.zoom * (0, _constants.initialZoom);
        const w = size.x / zoom;
        const h = size.y / zoom;
        this.ctx.strokeStyle = 'white';
        this.ctx.lineWidth = 1 / zoom;
        this.ctx.strokeRect(camera.x - w / 2, camera.y - h / 2, w, h);
        this.ctx.restore();
    }
    drawEntities(entities) {
        this.ctx.save();
        entities.forEach((entity)=>{
            this.ctx.save();
            this.ctx.fillStyle = entity.shape.color ?? (0, _constants.DefaultEntityColor)[entity.shape.type];
            this.ctx.strokeStyle = entity.shape.color ?? (0, _constants.DefaultEntityColor)[entity.shape.type];
            this.ctx.translate(entity.x, entity.y);
            this.ctx.rotate(entity.angle);
            this.ctx.save();
            const shape = entity.shape;
            switch(shape.type){
                case 'box':
                    const w = shape.width * 2;
                    const h = shape.height * 2;
                    this.ctx.rotate(shape.rotation);
                    this.ctx.fillRect(-w / 2, -h / 2, w, h);
                    break;
                case 'circle':
                    this.ctx.beginPath();
                    this.ctx.arc(0, 0, shape.radius, 0, Math.PI * 2, false);
                    this.ctx.stroke();
                    break;
                case 'polyline':
                    if (shape.points.length > 0) {
                        this.ctx.beginPath();
                        this.ctx.moveTo(shape.points[0][0], shape.points[0][1]);
                        for(let i = 1; i < shape.points.length; i++)this.ctx.lineTo(shape.points[i][0], shape.points[i][1]);
                        this.ctx.stroke();
                    }
                    break;
            }
            this.ctx.restore();
            this.ctx.restore();
        });
        this.ctx.restore();
    }
    drawMarbles(params) {
        const { marbles } = params;
        const viewPort = {
            x: params.camera.x,
            y: params.camera.y,
            w: params.size.x,
            h: params.size.y,
            zoom: params.camera.zoom * (0, _constants.initialZoom)
        };
        marbles.forEach((marble)=>{
            marble.render(this.ctx, 1, false, true, undefined, viewPort);
        });
    }
}
(0, _tsDecorate._)([
    (0, _boundDecorator.bound)
], Minimap.prototype, "onMouseMove", null);

},{"@swc/helpers/_/_ts_decorate":"aPTou","./data/constants":"dKlb7","./utils/bound.decorator":"auTxm","@parcel/transformer-js/src/esmodule-helpers.js":"jnFvT"}],"j59yE":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "VideoRecorder", ()=>VideoRecorder);
var _utils = require("./utils");
class VideoRecorder {
    constructor(canvas){
        this.chunks = [];
        this.stopping = false;
        this.targetCanvas = canvas;
        this.videoStream = this.targetCanvas.captureStream();
        this.mediaRecorder = new MediaRecorder(this.videoStream, {
            videoBitsPerSecond: 6000000
        });
    }
    async start() {
        this.stopping = false;
        return new Promise((rs)=>{
            this.chunks = [];
            this.mediaRecorder.ondataavailable = (e)=>{
                this.chunks.push(e.data);
            };
            this.mediaRecorder.onstop = ()=>{
                const blob = new Blob(this.chunks, {
                    type: 'video/mp4'
                });
                const videoUrl = URL.createObjectURL(blob);
                const downloadLink = document.createElement('a');
                const d = new Date();
                downloadLink.href = videoUrl;
                downloadLink.download = `marble_roulette_${d.getFullYear()}${(0, _utils.pad)(d.getMonth() + 1)}${(0, _utils.pad)(d.getDate())}${(0, _utils.pad)(d.getHours())}${(0, _utils.pad)(d.getMinutes())}${(0, _utils.pad)(d.getSeconds())}.mp4`;
                downloadLink.click();
                downloadLink.remove();
                URL.revokeObjectURL(videoUrl);
            };
            this.mediaRecorder.onstart = ()=>{
                rs();
            };
            this.mediaRecorder.start();
        });
    }
    stop() {
        this.stopping = true;
        if (this.mediaRecorder.state === 'recording') this.mediaRecorder.stop();
    }
}

},{"./utils":"ljVDB","@parcel/transformer-js/src/esmodule-helpers.js":"jnFvT"}],"Agzxl":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "Box2dPhysics", ()=>Box2dPhysics);
var _box2DWasm = require("box2d-wasm");
var _box2DWasmDefault = parcelHelpers.interopDefault(_box2DWasm);
class Box2dPhysics {
    async init() {
        this.Box2D = await (0, _box2DWasmDefault.default)();
        this.gravity = new this.Box2D.b2Vec2(0, 10);
        this.world = new this.Box2D.b2World(this.gravity);
        console.log('box2d ready');
    }
    clear() {
        this.clearEntities();
    }
    clearMarbles() {
        Object.values(this.marbleMap).forEach((body)=>{
            this.world.DestroyBody(body);
        });
        this.marbleMap = {};
    }
    createStage(stage) {
        this.createEntities(stage.entities);
    }
    createEntities(entities) {
        if (!entities) return;
        const bodyTypes = {
            static: this.Box2D.b2_staticBody,
            kinematic: this.Box2D.b2_kinematicBody
        };
        entities.forEach((entity)=>{
            const bodyDef = new this.Box2D.b2BodyDef();
            bodyDef.set_type(bodyTypes[entity.type]);
            const body = this.world.CreateBody(bodyDef);
            const fixtureDef = new this.Box2D.b2FixtureDef();
            fixtureDef.set_density(entity.props.density);
            fixtureDef.set_restitution(entity.props.restitution);
            let shape;
            switch(entity.shape.type){
                case 'box':
                    shape = new this.Box2D.b2PolygonShape();
                    shape.SetAsBox(entity.shape.width, entity.shape.height, 0, entity.shape.rotation);
                    fixtureDef.set_shape(shape);
                    body.CreateFixture(fixtureDef);
                    break;
                case 'polyline':
                    shape = new this.Box2D.b2EdgeShape();
                    for(let i = 0; i < entity.shape.points.length - 1; i++){
                        const p1 = entity.shape.points[i];
                        const p2 = entity.shape.points[i + 1];
                        const v1 = new this.Box2D.b2Vec2(p1[0], p1[1]);
                        const v2 = new this.Box2D.b2Vec2(p2[0], p2[1]);
                        const edge = new this.Box2D.b2EdgeShape();
                        edge.SetTwoSided(v1, v2);
                        body.CreateFixture(edge, 1);
                    }
                    break;
                case 'circle':
                    shape = new this.Box2D.b2CircleShape();
                    shape.set_m_radius(entity.shape.radius);
                    fixtureDef.set_shape(shape);
                    body.CreateFixture(fixtureDef);
                    break;
            }
            body.SetAngularVelocity(entity.props.angularVelocity);
            body.SetTransform(new this.Box2D.b2Vec2(entity.position.x, entity.position.y), 0);
            this.entities.push({
                body,
                x: entity.position.x,
                y: entity.position.y,
                angle: 0,
                shape: entity.shape,
                life: entity.props.life ?? -1
            });
        });
    }
    clearEntities() {
        this.entities.forEach((entity)=>{
            this.world.DestroyBody(entity.body);
        });
        this.entities = [];
    }
    createMarble(id, x, y) {
        const circleShape = new this.Box2D.b2CircleShape();
        circleShape.set_m_radius(0.25);
        const bodyDef = new this.Box2D.b2BodyDef();
        bodyDef.set_type(this.Box2D.b2_dynamicBody);
        bodyDef.set_position(new this.Box2D.b2Vec2(x, y));
        const body = this.world.CreateBody(bodyDef);
        // 시드 기반 랜덤 사용 (멀티플레이어 동기화)
        body.CreateFixture(circleShape, 1 + this.randomFunc());
        body.SetAwake(false);
        body.SetEnabled(false);
        this.marbleMap[id] = body;
    }
    shakeMarble(id) {
        const body = this.marbleMap[id];
        if (body) // 시드 기반 랜덤 사용 (멀티플레이어 동기화)
        body.ApplyLinearImpulseToCenter(new this.Box2D.b2Vec2(this.randomFunc() * 10 - 5, this.randomFunc() * 10 - 5), true);
    }
    removeMarble(id) {
        const marble = this.marbleMap[id];
        if (marble) {
            this.world.DestroyBody(marble);
            delete this.marbleMap[id];
        }
    }
    getMarblePosition(id) {
        const marble = this.marbleMap[id];
        if (marble) {
            const pos = marble.GetPosition();
            return {
                x: pos.x,
                y: pos.y,
                angle: marble.GetAngle()
            };
        } else return {
            x: 0,
            y: 0,
            angle: 0
        };
    }
    getEntities() {
        return this.entities.map((entity)=>{
            return {
                ...entity,
                angle: entity.body.GetAngle()
            };
        });
    }
    impact(id) {
        const src = this.marbleMap[id];
        if (!src) return;
        Object.values(this.marbleMap).forEach((body)=>{
            if (body === src) return;
            const distVector = new this.Box2D.b2Vec2(body.GetPosition().x, body.GetPosition().y);
            distVector.op_sub(src.GetPosition());
            const distSq = distVector.LengthSquared();
            if (distSq < 100) {
                distVector.Normalize();
                const power = 1 - distVector.Length() / 10;
                distVector.op_mul(power * power * 5);
                body.ApplyLinearImpulseToCenter(distVector, true);
            }
        });
    }
    start() {
        for(const key in this.marbleMap){
            const marble = this.marbleMap[key];
            marble.SetAwake(true);
            marble.SetEnabled(true);
        }
    }
    step(deltaSeconds) {
        this.deleteCandidates.forEach((body)=>{
            this.world.DestroyBody(body);
        });
        this.deleteCandidates = [];
        this.world.Step(deltaSeconds, 6, 2);
        for(let i = this.entities.length - 1; i >= 0; i--){
            const entity = this.entities[i];
            if (entity.life > 0) {
                const edge = entity.body.GetContactList();
                if (edge.contact && edge.contact.IsTouching()) {
                    this.deleteCandidates.push(entity.body);
                    this.entities.splice(i, 1);
                }
            }
        }
    }
    /**
   * 랜덤 함수 설정 (멀티플레이어 동기화용)
   * @param randomFunc 시드 기반 랜덤 함수
   */ setRandomFunc(randomFunc) {
        this.randomFunc = randomFunc;
    }
    constructor(){
        this.marbleMap = {};
        this.entities = [];
        this.deleteCandidates = [];
        this.randomFunc = Math.random // 시드 기반 랜덤 함수 (동기화용)
        ;
    }
}

},{"box2d-wasm":"21GKF","@parcel/transformer-js/src/esmodule-helpers.js":"jnFvT"}],"21GKF":[function(require,module,exports,__globalThis) {
/**
 * @param {Parameters<import('box2d-wasm')>} args
 * @return {ReturnType<import('box2d-wasm')>}
 */ var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
exports.default = async (...args)=>{
    /**
   * This validation expression comes from wasm-feature-detect:
   * https://github.com/GoogleChromeLabs/wasm-feature-detect
   * 
   * Copyright 2019 Google Inc. All Rights Reserved.
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *     http://www.apache.org/licenses/LICENSE-2.0
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   */ const hasSIMD = WebAssembly.validate(new Uint8Array([
        0,
        97,
        115,
        109,
        1,
        0,
        0,
        0,
        1,
        5,
        1,
        96,
        0,
        1,
        123,
        3,
        2,
        1,
        0,
        10,
        10,
        1,
        8,
        0,
        65,
        0,
        253,
        15,
        253,
        98,
        11
    ]));
    /** @type {{ 'default': import('box2d-wasm') }} */ const Box2DModule = await (hasSIMD ? require("1c9c9cecb712db83") : require("1131b71228caeef3"));
    const { 'default': Box2DFactory } = Box2DModule;
    // awaiting gives us a better stack trace (at the cost of an extra microtask)
    return await Box2DFactory(...args);
};

},{"1c9c9cecb712db83":"P2Zvm","1131b71228caeef3":"4bXPM","@parcel/transformer-js/src/esmodule-helpers.js":"jnFvT"}],"P2Zvm":[function(require,module,exports,__globalThis) {
module.exports = import("./Box2D.simd.7cdb49ce.js").then(()=>module.bundle.root('1SQho'));

},{"1SQho":"1SQho"}],"4bXPM":[function(require,module,exports,__globalThis) {
module.exports = import("./Box2D.a070c79d.js").then(()=>module.bundle.root('66ig1'));

},{"66ig1":"66ig1"}],"bTlP4":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "FastForwader", ()=>FastForwader);
class FastForwader {
    constructor(){
        this.bound = {
            x: 0,
            y: 0,
            w: 0,
            h: 0
        };
        this.isEnabled = false;
        this.icon = new Image();
        this.icon.src = new URL(require("ed6eacbba593253f")).toString();
    }
    get speed() {
        return this.isEnabled ? 2 : 1;
    }
    /**
   * 빨리감기 활성화/비활성화 (외부 제어용)
   * @param enabled 활성화 여부
   */ setEnabled(enabled) {
        this.isEnabled = enabled;
    }
    /**
   * 현재 빨리감기 상태
   */ getEnabled() {
        return this.isEnabled;
    }
    update(deltaTime) {}
    render(ctx, params, width, height) {
        this.bound.w = width / 2;
        this.bound.h = height / 2;
        this.bound.x = this.bound.w / 2;
        this.bound.y = this.bound.h / 2;
        const centerX = this.bound.x + this.bound.w / 2;
        const centerY = this.bound.y + this.bound.h / 2;
        if (this.isEnabled) {
            ctx.save();
            ctx.strokeStyle = 'white';
            ctx.globalAlpha = 0.5;
            ctx.drawImage(this.icon, centerX - 25, centerY - 25, 25, 25);
            ctx.restore();
        }
    }
    getBoundingBox() {
        return this.bound;
    }
    onMouseDown(e) {
        this.isEnabled = true;
    }
    onMouseUp(e) {
        this.isEnabled = false;
    }
}

},{"ed6eacbba593253f":"4QZHP","@parcel/transformer-js/src/esmodule-helpers.js":"jnFvT"}],"7YW8a":[function(require,module,exports,__globalThis) {
/**
 * Logger 유틸리티 클래스
 * 브라우저 환경용 로깅 시스템
 *
 * 작성일: 2025-11-13
 * 기능: 콘솔 로그 + localStorage 저장 + Loki 전송, 로그 레벨 관리, 로그 내보내기
 */ var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "LogLevel", ()=>LogLevel);
parcelHelpers.export(exports, "Logger", ()=>Logger);
var LogLevel = /*#__PURE__*/ function(LogLevel) {
    LogLevel["DEBUG"] = "DEBUG";
    LogLevel["INFO"] = "INFO";
    LogLevel["WARN"] = "WARN";
    LogLevel["ERROR"] = "ERROR";
    return LogLevel;
}({});
class Logger {
    static{
        this.logs = [];
    }
    static{
        this.maxLogs = 1000 // 최대 저장 로그 수
        ;
    }
    static{
        this.storageKey = 'roulette_multiplayer_logs';
    }
    static{
        // Loki 설정
        this.lokiConfig = null;
    }
    static{
        this.lokiEnabled = false;
    }
    static{
        this.lokiBatch = [];
    }
    static{
        this.lokiFlushInterval = null;
    }
    /**
   * DEBUG 레벨 로그
   * @param module 모듈명 (예: 'PeerManager', 'RoomManager')
   * @param message 로그 메시지
   * @param data 추가 데이터 (선택)
   */ static debug(module, message, data) {
        this.log("DEBUG", module, message, data);
    }
    /**
   * INFO 레벨 로그
   * @param module 모듈명
   * @param message 로그 메시지
   * @param data 추가 데이터 (선택)
   */ static info(module, message, data) {
        this.log("INFO", module, message, data);
    }
    /**
   * WARN 레벨 로그
   * @param module 모듈명
   * @param message 로그 메시지
   * @param data 추가 데이터 (선택)
   */ static warn(module, message, data) {
        this.log("WARN", module, message, data);
    }
    /**
   * ERROR 레벨 로그
   * @param module 모듈명
   * @param message 로그 메시지
   * @param error Error 객체 (선택)
   */ static error(module, message, error) {
        this.log("ERROR", module, message, undefined, error);
    }
    /**
   * 로그 기록 (내부 메서드)
   * @param level 로그 레벨
   * @param module 모듈명
   * @param message 로그 메시지
   * @param data 추가 데이터
   * @param error Error 객체
   */ static log(level, module, message, data, error) {
        const entry = {
            timestamp: Date.now(),
            level,
            module,
            message,
            data,
            error: error ? {
                name: error.name,
                message: error.message,
                stack: error.stack
            } : undefined
        };
        // 메모리에 저장
        this.logs.push(entry);
        // 최대 개수 초과 시 오래된 로그 제거
        if (this.logs.length > this.maxLogs) this.logs = this.logs.slice(-this.maxLogs);
        // localStorage에 저장 (에러 무시)
        this.saveToStorage();
        // Loki에 전송
        this.sendToLoki(entry);
        // 콘솔에 출력
        this.printToConsole(entry);
    }
    /**
   * localStorage에 로그 저장
   */ static saveToStorage() {
        try {
            const recentLogs = this.logs.slice(-100); // 최근 100개만 저장
            localStorage.setItem(this.storageKey, JSON.stringify(recentLogs));
        } catch (err) {
        // localStorage 용량 초과 등의 에러 무시
        }
    }
    /**
   * 콘솔에 로그 출력
   * @param entry 로그 엔트리
   */ static printToConsole(entry) {
        const time = new Date(entry.timestamp).toLocaleTimeString('ko-KR');
        const prefix = `[${time}] [${entry.module}]`;
        switch(entry.level){
            case "DEBUG":
                console.debug(prefix, entry.message, entry.data || '');
                break;
            case "INFO":
                console.log(prefix, entry.message, entry.data || '');
                break;
            case "WARN":
                console.warn(prefix, entry.message, entry.data || '');
                break;
            case "ERROR":
                console.error(prefix, entry.message, entry.error || entry.data || '');
                break;
        }
    }
    /**
   * 모든 로그 내보내기 (JSON 문자열)
   * @returns JSON 형식의 로그
   */ static exportLogs() {
        return JSON.stringify(this.logs, null, 2);
    }
    /**
   * 로그 다운로드
   * @param filename 파일명 (기본: roulette-logs-{timestamp}.json)
   */ static downloadLogs(filename) {
        const defaultFilename = `roulette-logs-${Date.now()}.json`;
        const blob = new Blob([
            this.exportLogs()
        ], {
            type: 'application/json'
        });
        const url = URL.createObjectURL(blob);
        const a = document.createElement('a');
        a.href = url;
        a.download = filename || defaultFilename;
        a.click();
        URL.revokeObjectURL(url);
    }
    /**
   * 로그 클리어
   */ static clearLogs() {
        this.logs = [];
        try {
            localStorage.removeItem(this.storageKey);
        } catch (err) {
        // 무시
        }
        console.log("[Logger] \uB85C\uADF8\uAC00 \uD074\uB9AC\uC5B4\uB418\uC5C8\uC2B5\uB2C8\uB2E4.");
    }
    /**
   * localStorage에서 로그 불러오기
   */ static loadFromStorage() {
        try {
            const stored = localStorage.getItem(this.storageKey);
            if (stored) {
                this.logs = JSON.parse(stored);
                console.log(`[Logger] ${this.logs.length}\u{AC1C}\u{C758} \u{B85C}\u{ADF8}\u{B97C} \u{BD88}\u{B7EC}\u{C654}\u{C2B5}\u{B2C8}\u{B2E4}.`);
            }
        } catch (err) {
            console.error("[Logger] \uB85C\uADF8 \uBD88\uB7EC\uC624\uAE30 \uC2E4\uD328:", err);
        }
    }
    /**
   * 현재 로그 개수 조회
   * @returns 로그 개수
   */ static getLogCount() {
        return this.logs.length;
    }
    /**
   * Loki 로깅 초기화
   * @param config Loki 설정
   */ static initLoki(config) {
        this.lokiConfig = {
            ...config,
            batchSize: config.batchSize || 10,
            flushInterval: config.flushInterval || 5000
        };
        this.lokiEnabled = true;
        console.log("[Logger] Loki \uB85C\uAE45 \uD65C\uC131\uD654:", config.host, config.labels);
        // 주기적으로 배치 전송
        this.lokiFlushInterval = window.setInterval(()=>{
            this.flushLokiBatch();
        }, this.lokiConfig.flushInterval);
    }
    /**
   * Loki에 로그 전송
   * @param entry 로그 엔트리
   */ static sendToLoki(entry) {
        if (!this.lokiEnabled || !this.lokiConfig) return;
        // 배치에 추가
        this.lokiBatch.push(entry);
        // 배치 크기 초과 시 즉시 전송
        if (this.lokiBatch.length >= this.lokiConfig.batchSize) this.flushLokiBatch();
    }
    /**
   * Loki 배치 전송
   */ static flushLokiBatch() {
        if (!this.lokiEnabled || !this.lokiConfig || this.lokiBatch.length === 0) return;
        const batch = [
            ...this.lokiBatch
        ];
        this.lokiBatch = [];
        const streams = [
            {
                stream: this.lokiConfig.labels,
                values: batch.map((entry)=>[
                        `${entry.timestamp}000000`,
                        JSON.stringify({
                            level: entry.level,
                            module: entry.module,
                            message: entry.message,
                            data: entry.data,
                            error: entry.error ? {
                                name: entry.error.name,
                                message: entry.error.message,
                                stack: entry.error.stack
                            } : undefined
                        })
                    ])
            }
        ];
        // Loki Push API 호출
        fetch(`${this.lokiConfig.host}/loki/api/v1/push`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                streams
            })
        }).then((response)=>{
            if (!response.ok) console.error("[Logger] Loki \uC804\uC1A1 \uC2E4\uD328:", response.status, response.statusText);
        }).catch((error)=>{
            console.error("[Logger] Loki \uC804\uC1A1 \uC5D0\uB7EC:", error);
        });
    }
    /**
   * Loki 로깅 비활성화
   */ static disableLoki() {
        if (this.lokiFlushInterval !== null) {
            clearInterval(this.lokiFlushInterval);
            this.lokiFlushInterval = null;
        }
        // 남은 배치 전송
        this.flushLokiBatch();
        this.lokiEnabled = false;
        console.log("[Logger] Loki \uB85C\uAE45 \uBE44\uD65C\uC131\uD654");
    }
}
// 페이지 로드 시 저장된 로그 불러오기
if (typeof window !== 'undefined') {
    Logger.loadFromStorage();
    // Loki 초기화 (https://logs.samlab.co.kr)
    Logger.initLoki({
        host: 'https://logs.samlab.co.kr',
        labels: {
            app: 'roulette-multiplayer',
            service: 'multiplayer-game',
            environment: 'production',
            hostname: typeof window !== 'undefined' ? window.location.hostname : 'unknown'
        },
        batchSize: 10,
        flushInterval: 5000
    });
}

},{"@parcel/transformer-js/src/esmodule-helpers.js":"jnFvT"}],"dWLxR":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "registerServiceWorker", ()=>registerServiceWorker);
function registerServiceWorker() {
    if ('serviceWorker' in navigator) window.addEventListener('load', ()=>{
        const swUrl = `${window.location.origin}/roulette/service-worker.js`;
        navigator.serviceWorker.register(swUrl).then((reg)=>console.log('service worker registered', reg.scope)).catch((err)=>console.error('service worker registration failed', err));
    });
}

},{"@parcel/transformer-js/src/esmodule-helpers.js":"jnFvT"}],"dNlK5":[function(require,module,exports,__globalThis) {
/**
 * MultiplayerUI 클래스
 * 멀티플레이어 UI 관리
 *
 * 작성일: 2025-11-13
 * 기능: 방 생성/참가 모달, 참가자 목록 표시
 */ var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
/**
 * MultiplayerUI 클래스
 * 멀티플레이어 관련 모든 UI를 관리
 */ parcelHelpers.export(exports, "MultiplayerUI", ()=>MultiplayerUI);
var _peerManager = require("./PeerManager");
var _roomManager = require("./RoomManager");
var _gameSync = require("./GameSync");
var _logger = require("../utils/Logger");
class MultiplayerUI {
    constructor(){
        this.isInitialized = false;
        this.peerManager = new (0, _peerManager.PeerManager)();
        this.roomManager = new (0, _roomManager.RoomManager)(this.peerManager);
        this.gameSync = new (0, _gameSync.GameSync)(this.peerManager, this.roomManager);
        this.setupRoomManagerEvents();
        this.setupGameSyncEvents();
    }
    /**
   * 초기화
   */ init() {
        if (this.isInitialized) return;
        console.log("[MultiplayerUI] \uCD08\uAE30\uD654");
        this.setupUI();
        this.isInitialized = true;
    }
    /**
   * UI 설정
   */ setupUI() {
        // 방 만들기 버튼 이벤트
        const createBtn = document.getElementById('mp-create-room-btn');
        if (createBtn) createBtn.addEventListener('click', ()=>this.showCreateRoomModal());
        // 방 참가하기 버튼 이벤트
        const joinBtn = document.getElementById('mp-join-room-btn');
        if (joinBtn) joinBtn.addEventListener('click', ()=>this.showJoinRoomModal());
        // 준비 버튼 이벤트
        const readyBtn = document.getElementById('mp-ready-btn');
        if (readyBtn) readyBtn.addEventListener('click', ()=>this.toggleReady());
        // 방 나가기 버튼 이벤트
        const leaveBtn = document.getElementById('mp-leave-room-btn');
        if (leaveBtn) leaveBtn.addEventListener('click', ()=>this.leaveRoom());
        // 이름 변경 버튼 이벤트
        const changeNameBtn = document.getElementById('mp-change-name-btn');
        if (changeNameBtn) changeNameBtn.addEventListener('click', ()=>this.showChangeNameModal());
    }
    /**
   * RoomManager 이벤트 설정
   */ setupRoomManagerEvents() {
        this.roomManager.on('playerJoined', (player)=>{
            this.updatePlayerList();
        });
        this.roomManager.on('playerLeft', (playerId)=>{
            this.updatePlayerList();
        });
        this.roomManager.on('playerReady', (playerId, isReady)=>{
            this.updatePlayerList();
        });
        this.roomManager.on('allReady', ()=>{
            this.onAllPlayersReady();
        });
    }
    /**
   * GameSync 이벤트 설정
   */ setupGameSyncEvents() {
        // 게임 시작 이벤트 (호스트 + 참가자 모두)
        this.gameSync.on('gameStart', (config)=>{
            const isHost = this.roomManager.getIsHost();
            console.log("[MultiplayerUI] \uAC8C\uC784 \uC2DC\uC791 \uC2E0\uD638 \uC218\uC2E0");
            (0, _logger.Logger).info('MultiplayerUI', `[${isHost ? "\uD638\uC2A4\uD2B8" : "\uCC38\uAC00\uC790"}] \u{AC8C}\u{C784} \u{C2DC}\u{C791} \u{C774}\u{BCA4}\u{D2B8}`, {
                randomSeed: config.randomSeed,
                marbles: config.marbles,
                mapIndex: config.mapIndex,
                winnerRank: config.winnerRank
            });
            // 게임 설정 적용
            const names = [];
            config.marbles.forEach((marble)=>{
                const count = marble.count || 1;
                const weight = marble.weight || 1;
                let nameStr = marble.name;
                if (weight > 1) nameStr += `/${weight}`;
                for(let i = 0; i < count; i++)names.push(nameStr);
            });
            (0, _logger.Logger).info('MultiplayerUI', "\uAD6C\uC2AC \uC774\uB984 \uBC30\uC5F4 \uC0DD\uC131", {
                names
            });
            // 2025-11-14: 성능 최적화 - 배치 설정 메서드로 변경
            // 기존: setRandomSeed() → setMapOnly() → setMarbles() → setWinningRank() (물리 엔진 3-4회 재초기화)
            // 개선: batchSetup() 한 번 호출 (물리 엔진 1회 초기화) → 게임 시작 시간 30% 단축
            window.roulette.batchSetup({
                mapIndex: config.mapIndex,
                marbleNames: names,
                winnerRank: config.winnerRank,
                randomSeed: config.randomSeed
            });
            (0, _logger.Logger).info('MultiplayerUI', "\uBC30\uCE58 \uC124\uC815 \uC644\uB8CC (\uCD5C\uC801\uD654\uB428)", {
                mapIndex: config.mapIndex,
                marbleCount: names.length,
                winnerRank: config.winnerRank
            });
            // options도 동기화
            window.options.winningRank = config.winnerRank;
            // 게임 시작
            window.roulette.start();
            document.querySelector('#settings')?.classList.add('hide');
        });
        // 게임 종료 이벤트 (참가자만 받음)
        this.gameSync.on('gameEnd', (winners, results)=>{
            if (this.roomManager.getIsHost()) return; // 호스트는 이미 자기 결과 있음
            console.log("[MultiplayerUI] \uD638\uC2A4\uD2B8\uB85C\uBD80\uD130 \uAC8C\uC784 \uC885\uB8CC \uC218\uC2E0:", winners);
            (0, _logger.Logger).info('MultiplayerUI', "\uD638\uC2A4\uD2B8 \uAC8C\uC784 \uC885\uB8CC \uC218\uC2E0", {
                winners
            });
            // 강제로 게임 종료 처리 (호스트 결과 따르기)
            const roulette = window.roulette;
            // 게임 강제 종료
            roulette._isRunning = false;
            // 우승자 알림 표시 (fromHost 플래그 추가)
            roulette.dispatchEvent(new CustomEvent('goal', {
                detail: {
                    winner: winners[0],
                    fromHost: true // 호스트로부터 받은 결과임을 표시
                }
            }));
            // 파티클 효과
            roulette._particleManager.shot(roulette._renderer.width, roulette._renderer.height);
        });
        // 빨리감기 이벤트 (참가자만 받음)
        this.gameSync.on('fastForward', (isEnabled)=>{
            if (this.roomManager.getIsHost()) return; // 호스트는 자기가 제어
            console.log("[MultiplayerUI] \uD638\uC2A4\uD2B8 \uBE68\uB9AC\uAC10\uAE30 \uC0C1\uD0DC:", isEnabled);
            // FastForwader 제어
            const roulette = window.roulette;
            const fastForwarder = roulette.getFastForwarder();
            fastForwarder.setEnabled(isEnabled);
        });
    }
    /**
   * 방 생성 모달 표시 (이름 입력 제거 - 자동으로 "호스트"로 설정)
   */ showCreateRoomModal() {
        // 이름 입력 없이 바로 방 생성
        this.createRoomDirectly();
    }
    /**
   * 방 생성 (이름 입력 없이 바로 생성)
   */ async createRoomDirectly() {
        const playerName = "\uD638\uC2A4\uD2B8"; // 기본 이름
        try {
            const roomId = await this.roomManager.createRoom(playerName);
            this.onRoomCreated(roomId);
        } catch (error) {
            this.showErrorUI("\uBC29 \uC0DD\uC131 \uC2E4\uD328", error.message, ()=>this.createRoomDirectly() // 재시도
            );
        }
    }
    /**
   * 방 참가 모달 표시
   */ showJoinRoomModal() {
        const modal = document.getElementById('mp-modal');
        const title = document.getElementById('mp-modal-title');
        const content = document.getElementById('mp-modal-content');
        if (!modal || !title || !content) return;
        title.textContent = "\uBC29 \uCC38\uAC00\uD558\uAE30";
        content.innerHTML = `
      <div class="mp-modal-form">
        <label>
          \u{BC29} \u{CF54}\u{B4DC}:
          <input type="text" id="mp-room-code" placeholder="6\u{C790}\u{B9AC} \u{BC29} \u{CF54}\u{B4DC}" maxlength="6" style="text-transform: uppercase;" autofocus />
        </label>
        <label>
          \u{C774}\u{B984} (\u{C120}\u{D0DD}):
          <input type="text" id="mp-player-name" placeholder="\u{C774}\u{B984} \u{BBF8}\u{C785}\u{B825} \u{C2DC} '\u{AC8C}\u{C2A4}\u{D2B8}'\u{B85C} \u{D45C}\u{C2DC}" maxlength="20" />
        </label>
        <button id="mp-join-btn" class="mp-btn-primary">\u{CC38}\u{AC00}\u{D558}\u{AE30}</button>
        <button id="mp-cancel-btn" class="mp-btn-secondary">\u{CDE8}\u{C18C}</button>
      </div>
    `;
        modal.style.display = 'flex';
        // 방 코드 입력란에서 Enter 키 입력 시 참가
        const codeInput = document.getElementById('mp-room-code');
        codeInput?.addEventListener('keypress', (e)=>{
            if (e.key === 'Enter') document.getElementById('mp-join-btn')?.click();
        });
        // 이름 입력란에서 Enter 키 입력 시 참가
        const nameInput = document.getElementById('mp-player-name');
        nameInput?.addEventListener('keypress', (e)=>{
            if (e.key === 'Enter') document.getElementById('mp-join-btn')?.click();
        });
        // 버튼 이벤트
        document.getElementById('mp-join-btn')?.addEventListener('click', async ()=>{
            const playerName = nameInput?.value.trim() || "\uAC8C\uC2A4\uD2B8";
            const roomCode = codeInput?.value.trim().toUpperCase();
            if (!roomCode || roomCode.length !== 6) {
                alert("\uC62C\uBC14\uB978 \uBC29 \uCF54\uB4DC\uB97C \uC785\uB825\uD574\uC8FC\uC138\uC694.");
                return;
            }
            (0, _logger.Logger).info('MultiplayerUI', "\uBC29 \uCC38\uAC00 \uC2DC\uB3C4", {
                playerName,
                roomCode
            });
            // 로딩 UI 표시
            this.showLoadingUI("\uBC29\uC5D0 \uC5F0\uACB0 \uC911...", "\uD638\uC2A4\uD2B8\uB97C \uCC3E\uACE0 \uC788\uC2B5\uB2C8\uB2E4.");
            // 진행 상황 이벤트 리스너 등록
            const progressHandler = (message)=>{
                this.updateLoadingMessage(message);
            };
            this.peerManager.on('connectionProgress', progressHandler);
            try {
                await this.roomManager.joinRoom(playerName, roomCode);
                (0, _logger.Logger).info('MultiplayerUI', "\uBC29 \uCC38\uAC00 \uC131\uACF5", {
                    roomCode
                });
                this.onRoomJoined(roomCode);
                modal.style.display = 'none';
            } catch (error) {
                (0, _logger.Logger).error('MultiplayerUI', "\uBC29 \uCC38\uAC00 \uC2E4\uD328", error);
                // 에러 UI 표시
                this.showErrorUI("\uBC29 \uCC38\uAC00 \uC2E4\uD328", error.message, ()=>this.showJoinRoomModal() // 재시도
                );
            }
        });
        document.getElementById('mp-cancel-btn')?.addEventListener('click', ()=>{
            modal.style.display = 'none';
        });
    }
    /**
   * 이름 변경 모달 표시
   */ showChangeNameModal() {
        const modal = document.getElementById('mp-modal');
        const title = document.getElementById('mp-modal-title');
        const content = document.getElementById('mp-modal-content');
        if (!modal || !title || !content) return;
        const myPlayer = this.roomManager.getMyPlayer();
        if (!myPlayer) return;
        title.textContent = "\uC774\uB984 \uBCC0\uACBD";
        content.innerHTML = `
      <div class="mp-modal-form">
        <label>
          \u{C0C8} \u{C774}\u{B984}:
          <input type="text" id="mp-new-name" placeholder="\u{C0C8} \u{C774}\u{B984}\u{C744} \u{C785}\u{B825}\u{D558}\u{C138}\u{C694}" maxlength="20" value="${myPlayer.name}" autofocus />
        </label>
        <button id="mp-change-name-confirm-btn" class="mp-btn-primary">\u{BCC0}\u{ACBD}</button>
        <button id="mp-cancel-btn" class="mp-btn-secondary">\u{CDE8}\u{C18C}</button>
      </div>
    `;
        modal.style.display = 'flex';
        // 새 이름 입력란에서 Enter 키 입력 시 변경
        const newNameInput = document.getElementById('mp-new-name');
        newNameInput?.addEventListener('keypress', (e)=>{
            if (e.key === 'Enter') document.getElementById('mp-change-name-confirm-btn')?.click();
        });
        // 입력란에 포커스 및 전체 선택
        setTimeout(()=>{
            newNameInput?.select();
        }, 100);
        // 변경 버튼 이벤트
        document.getElementById('mp-change-name-confirm-btn')?.addEventListener('click', async ()=>{
            const newName = newNameInput?.value.trim() || "\uAC8C\uC2A4\uD2B8";
            if (newName === myPlayer.name) {
                modal.style.display = 'none';
                return;
            }
            try {
                await this.roomManager.changePlayerName(newName);
                modal.style.display = 'none';
                this.updatePlayerList();
            } catch (error) {
                alert("\uC774\uB984 \uBCC0\uACBD \uC2E4\uD328: " + error.message);
            }
        });
        document.getElementById('mp-cancel-btn')?.addEventListener('click', ()=>{
            modal.style.display = 'none';
        });
    }
    /**
   * 방 생성 완료 처리
   * @param roomId 방 코드
   */ onRoomCreated(roomId) {
        console.log("[MultiplayerUI] \uBC29 \uC0DD\uC131 \uC644\uB8CC:", roomId);
        // 방 정보 패널 표시
        const roomPanel = document.getElementById('mp-room-panel');
        if (roomPanel) roomPanel.style.display = 'block';
        // 방 코드 표시
        const roomCodeEl = document.getElementById('mp-room-code-display');
        if (roomCodeEl) roomCodeEl.textContent = roomId;
        // 복사 버튼 이벤트
        const copyBtn = document.getElementById('mp-copy-room-code');
        if (copyBtn) copyBtn.onclick = ()=>{
            navigator.clipboard.writeText(roomId);
            this.showToast("\uBC29 \uCF54\uB4DC\uAC00 \uBCF5\uC0AC\uB418\uC5C8\uC2B5\uB2C8\uB2E4!");
        };
        // 참가자 목록 업데이트
        this.updatePlayerList();
        // 초기 버튼 표시
        this.hideMainMenuButtons();
        this.showRoomButtons(true);
        // 구슬 입력란 숨기기
        this.hideMarbleInput();
    }
    /**
   * 방 참가 완료 처리
   * @param roomId 방 코드
   */ onRoomJoined(roomId) {
        console.log("[MultiplayerUI] \uBC29 \uCC38\uAC00 \uC644\uB8CC:", roomId);
        // 방 정보 패널 표시
        const roomPanel = document.getElementById('mp-room-panel');
        if (roomPanel) roomPanel.style.display = 'block';
        // 방 코드 표시
        const roomCodeEl = document.getElementById('mp-room-code-display');
        if (roomCodeEl) roomCodeEl.textContent = roomId;
        // 참가자 목록 업데이트
        this.updatePlayerList();
        // 초기 버튼 표시
        this.hideMainMenuButtons();
        this.showRoomButtons(false);
        // 구슬 입력란 숨기기
        this.hideMarbleInput();
    }
    /**
   * 참가자 목록 업데이트
   */ updatePlayerList() {
        const playerListEl = document.getElementById('mp-player-list');
        if (!playerListEl) return;
        const players = this.roomManager.getPlayers();
        const myPlayer = this.roomManager.getMyPlayer();
        playerListEl.innerHTML = players.map((player)=>{
            const hostBadge = player.isHost ? '<span class="mp-badge-host">\uD83D\uDC51</span>' : '';
            const readyBadge = player.isReady ? '<span class="mp-badge-ready">\uD83D\uDFE2</span>' : '<span class="mp-badge-not-ready">\uD83D\uDD34</span>';
            const isMe = player.id === myPlayer?.id ? '<span class="mp-badge-me">(\uB098)</span>' : '';
            return `
          <div class="mp-player-item">
            <span class="mp-player-name">${hostBadge} ${player.name} ${isMe}</span>
            <span class="mp-player-status">${readyBadge}</span>
          </div>
        `;
        }).join('');
        // 준비 버튼 상태 업데이트
        this.updateReadyButton();
    }
    /**
   * 준비 버튼 상태 업데이트
   */ updateReadyButton() {
        const readyBtn = document.getElementById('mp-ready-btn');
        if (!readyBtn) return;
        const myPlayer = this.roomManager.getMyPlayer();
        if (!myPlayer || myPlayer.isHost) {
            readyBtn.style.display = 'none';
            return;
        }
        readyBtn.style.display = 'block';
        readyBtn.textContent = myPlayer.isReady ? "\uC900\uBE44 \uCDE8\uC18C" : "\uC900\uBE44";
        readyBtn.className = myPlayer.isReady ? 'mp-btn-secondary' : 'mp-btn-primary';
    }
    /**
   * 준비 상태 토글
   */ toggleReady() {
        this.roomManager.toggleReady();
    }
    /**
   * 모든 참가자 준비 완료
   */ onAllPlayersReady() {
        console.log("[MultiplayerUI] \uBAA8\uB4E0 \uCC38\uAC00\uC790 \uC900\uBE44 \uC644\uB8CC");
        // 호스트인 경우 시작 버튼 활성화
        if (this.roomManager.getIsHost()) {
            const startBtn = document.getElementById('start');
            if (startBtn) {
                startBtn.removeAttribute('disabled');
                startBtn.style.opacity = '1';
                startBtn.style.cursor = 'pointer';
            }
        }
    }
    /**
   * 방 나가기
   */ leaveRoom() {
        if (confirm("\uC815\uB9D0 \uBC29\uC744 \uB098\uAC00\uC2DC\uACA0\uC2B5\uB2C8\uAE4C?")) {
            this.roomManager.leaveRoom();
            // UI 초기화
            const roomPanel = document.getElementById('mp-room-panel');
            if (roomPanel) roomPanel.style.display = 'none';
            this.showMainMenuButtons();
            this.hideRoomButtons();
            this.showMarbleInput(); // 구슬 입력란 다시 표시
        }
    }
    /**
   * 메인 메뉴 버튼 숨기기
   */ hideMainMenuButtons() {
        const createBtn = document.getElementById('mp-create-room-btn');
        const joinBtn = document.getElementById('mp-join-room-btn');
        if (createBtn) createBtn.style.display = 'none';
        if (joinBtn) joinBtn.style.display = 'none';
    }
    /**
   * 메인 메뉴 버튼 표시
   */ showMainMenuButtons() {
        const createBtn = document.getElementById('mp-create-room-btn');
        const joinBtn = document.getElementById('mp-join-room-btn');
        if (createBtn) createBtn.style.display = 'block';
        if (joinBtn) joinBtn.style.display = 'block';
    }
    /**
   * 룸 버튼 표시
   * @param isHost 호스트 여부
   */ showRoomButtons(isHost) {
        const readyBtn = document.getElementById('mp-ready-btn');
        const leaveBtn = document.getElementById('mp-leave-room-btn');
        if (readyBtn) readyBtn.style.display = isHost ? 'none' : 'block';
        if (leaveBtn) leaveBtn.style.display = 'block';
    }
    /**
   * 룸 버튼 숨기기
   */ hideRoomButtons() {
        const readyBtn = document.getElementById('mp-ready-btn');
        const leaveBtn = document.getElementById('mp-leave-room-btn');
        if (readyBtn) readyBtn.style.display = 'none';
        if (leaveBtn) leaveBtn.style.display = 'none';
    }
    /**
   * 구슬 입력란 숨기기 (멀티플레이어 모드용)
   */ hideMarbleInput() {
        // 구슬 입력란 섹션에 mp-mode 클래스 추가 (CSS로 선택적 숨김)
        const marbleSection = document.querySelector('.left');
        if (marbleSection) marbleSection.classList.add('mp-mode');
        // 대신 참가자 안내 메시지 표시
        const roomPanel = document.getElementById('mp-room-panel');
        if (roomPanel && !document.getElementById('mp-marble-info')) {
            const infoDiv = document.createElement('div');
            infoDiv.id = 'mp-marble-info';
            infoDiv.style.cssText = 'padding: 10px; margin: 10px 0; background: rgba(255, 255, 255, 0.1); border-radius: 8px; text-align: center;';
            infoDiv.innerHTML = '<p style="margin: 0; color: #fff;">\u2728 \uCC38\uAC00\uC790 \uC774\uB984\uC73C\uB85C \uAC8C\uC784\uC774 \uC9C4\uD589\uB429\uB2C8\uB2E4</p>';
            roomPanel.appendChild(infoDiv);
        }
    }
    /**
   * 구슬 입력란 다시 표시
   */ showMarbleInput() {
        const marbleSection = document.querySelector('.left');
        if (marbleSection) marbleSection.classList.remove('mp-mode');
        // 안내 메시지 제거
        const infoDiv = document.getElementById('mp-marble-info');
        if (infoDiv) infoDiv.remove();
    }
    /**
   * 로딩 UI 표시
   * @param title 로딩 제목
   * @param message 로딩 메시지
   */ showLoadingUI(title, message) {
        const modal = document.getElementById('mp-modal');
        const titleEl = document.getElementById('mp-modal-title');
        const content = document.getElementById('mp-modal-content');
        if (!modal || !titleEl || !content) return;
        titleEl.textContent = title;
        content.innerHTML = `
      <div class="mp-loading">
        <div class="mp-spinner"></div>
        <p id="mp-loading-message" class="mp-loading-message">${message}</p>
      </div>
    `;
        modal.style.display = 'flex';
    }
    /**
   * 로딩 메시지 업데이트
   * @param message 새 메시지
   */ updateLoadingMessage(message) {
        const messageEl = document.getElementById('mp-loading-message');
        if (messageEl) {
            messageEl.textContent = message;
            (0, _logger.Logger).debug('MultiplayerUI', "\uB85C\uB529 \uBA54\uC2DC\uC9C0 \uC5C5\uB370\uC774\uD2B8", {
                message
            });
        }
    }
    /**
   * 에러 UI 표시
   * @param title 에러 제목
   * @param message 에러 메시지
   * @param onRetry 재시도 콜백
   */ showErrorUI(title, message, onRetry) {
        const modal = document.getElementById('mp-modal');
        const titleEl = document.getElementById('mp-modal-title');
        const content = document.getElementById('mp-modal-content');
        if (!modal || !titleEl || !content) return;
        titleEl.textContent = title;
        content.innerHTML = `
      <div class="mp-error">
        <p class="mp-error-message">\u{274C} ${message}</p>
        <div class="mp-error-actions">
          ${onRetry ? '<button id="mp-retry-btn" class="mp-btn-primary">\uB2E4\uC2DC \uC2DC\uB3C4</button>' : ''}
          <button id="mp-error-close-btn" class="mp-btn-secondary">\u{B2EB}\u{AE30}</button>
        </div>
        <div class="mp-error-logs">
          <button id="mp-download-logs-btn" class="mp-btn-small">\u{B85C}\u{ADF8} \u{B2E4}\u{C6B4}\u{B85C}\u{B4DC}</button>
        </div>
      </div>
    `;
        modal.style.display = 'flex';
        // 재시도 버튼 이벤트
        if (onRetry) document.getElementById('mp-retry-btn')?.addEventListener('click', ()=>{
            modal.style.display = 'none';
            onRetry();
        });
        // 닫기 버튼 이벤트
        document.getElementById('mp-error-close-btn')?.addEventListener('click', ()=>{
            modal.style.display = 'none';
        });
        // 로그 다운로드 버튼 이벤트
        document.getElementById('mp-download-logs-btn')?.addEventListener('click', ()=>{
            (0, _logger.Logger).downloadLogs();
        });
    }
    /**
   * 토스트 메시지 표시
   * @param message 표시할 메시지
   * @param duration 표시 시간 (ms, 기본 2000ms)
   */ showToast(message, duration = 2000) {
        // 기존 토스트가 있으면 제거
        const existingToast = document.getElementById('mp-toast');
        if (existingToast) existingToast.remove();
        // 토스트 엘리먼트 생성
        const toast = document.createElement('div');
        toast.id = 'mp-toast';
        toast.textContent = message;
        toast.style.cssText = `
      position: fixed;
      bottom: 80px;
      left: 50%;
      transform: translateX(-50%);
      background: rgba(0, 0, 0, 0.8);
      color: white;
      padding: 12px 24px;
      border-radius: 8px;
      font-size: 14px;
      z-index: 10000;
      animation: mp-toast-fadein 0.3s ease-in-out;
    `;
        // 애니메이션 스타일 추가
        if (!document.getElementById('mp-toast-style')) {
            const style = document.createElement('style');
            style.id = 'mp-toast-style';
            style.textContent = `
        @keyframes mp-toast-fadein {
          from {
            opacity: 0;
            transform: translateX(-50%) translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateX(-50%) translateY(0);
          }
        }
        @keyframes mp-toast-fadeout {
          from {
            opacity: 1;
            transform: translateX(-50%) translateY(0);
          }
          to {
            opacity: 0;
            transform: translateX(-50%) translateY(20px);
          }
        }
      `;
            document.head.appendChild(style);
        }
        document.body.appendChild(toast);
        // 지정된 시간 후 페이드아웃 후 제거
        setTimeout(()=>{
            toast.style.animation = 'mp-toast-fadeout 0.3s ease-in-out';
            setTimeout(()=>toast.remove(), 300);
        }, duration);
    }
    // Getter 메서드들
    getPeerManager() {
        return this.peerManager;
    }
    getRoomManager() {
        return this.roomManager;
    }
    getGameSync() {
        return this.gameSync;
    }
}

},{"./PeerManager":"jSfm7","./RoomManager":"lWYrr","./GameSync":"31mqk","../utils/Logger":"7YW8a","@parcel/transformer-js/src/esmodule-helpers.js":"jnFvT"}],"jSfm7":[function(require,module,exports,__globalThis) {
/**
 * PeerManager 클래스
 * PeerJS를 사용한 P2P 연결 관리
 *
 * 작성일: 2025-11-13
 * 기능: Peer 생성, 연결 관리, 메시지 송수신
 */ var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
/**
 * PeerManager 클래스
 * P2P 연결 생성 및 관리를 담당
 */ parcelHelpers.export(exports, "PeerManager", ()=>PeerManager);
var _peerjs = require("peerjs");
var _peerjsDefault = parcelHelpers.interopDefault(_peerjs);
var _logger = require("../utils/Logger");
class PeerManager {
    /**
   * Peer 생성 (호스트용)
   * @param customId 사용자 지정 ID (선택)
   * @returns Promise<string> 생성된 Peer ID
   */ async createPeer(customId) {
        (0, _logger.Logger).info('PeerManager', "Peer \uC0DD\uC131 \uC2DC\uC791", {
            customId
        });
        return new Promise((resolve, reject)=>{
            try {
                // Peer 인스턴스 생성
                // 무료 공개 PeerJS 서버 사용 (0.peerjs.com - 공식 서버)
                this.peer = new (0, _peerjsDefault.default)(customId, {
                    host: '0.peerjs.com',
                    port: 443,
                    path: '/',
                    secure: true,
                    config: {
                        // STUN 서버 설정 (NAT 통과용)
                        iceServers: [
                            {
                                urls: 'stun:stun.l.google.com:19302'
                            },
                            {
                                urls: 'stun:stun1.l.google.com:19302'
                            }
                        ]
                    }
                });
                // Peer 생성 완료 이벤트
                this.peer.on('open', (id)=>{
                    (0, _logger.Logger).info('PeerManager', "Peer \uC0DD\uC131 \uC644\uB8CC", {
                        peerId: id
                    });
                    console.log("[PeerManager] Peer \uC0DD\uC131 \uC644\uB8CC:", id);
                    this.reconnectAttempts = 0; // 재연결 카운터 초기화
                    this.emit('open', id);
                    resolve(id);
                });
                // 새 연결 수신 이벤트 (호스트만)
                this.peer.on('connection', (conn)=>{
                    (0, _logger.Logger).info('PeerManager', "\uC0C8 \uC5F0\uACB0 \uC218\uC2E0", {
                        peerId: conn.peer
                    });
                    console.log("[PeerManager] \uC0C8 \uC5F0\uACB0 \uC218\uC2E0:", conn.peer);
                    this.handleConnection(conn);
                    this.emit('connection', conn);
                });
                // 연결 끊김 이벤트
                this.peer.on('disconnected', ()=>{
                    (0, _logger.Logger).warn('PeerManager', "Peer \uC11C\uBC84 \uC5F0\uACB0 \uB04A\uAE40");
                    console.warn("[PeerManager] Peer \uC11C\uBC84 \uC5F0\uACB0 \uB04A\uAE40");
                    this.emit('disconnected');
                    this.attemptReconnect();
                });
                // 에러 이벤트
                this.peer.on('error', (error)=>{
                    (0, _logger.Logger).error('PeerManager', "Peer \uC5D0\uB7EC", error);
                    console.error("[PeerManager] Peer \uC5D0\uB7EC:", error);
                    this.emit('error', error);
                    // 특정 에러의 경우 reject
                    if (error.message.includes('ID is taken')) reject(new Error("\uC774\uBBF8 \uC0AC\uC6A9 \uC911\uC778 \uBC29 \uCF54\uB4DC\uC785\uB2C8\uB2E4."));
                });
            } catch (error) {
                reject(error);
            }
        });
    }
    /**
   * 호스트에 연결 (참가자용) - 재시도 지원
   * @param hostId 호스트 Peer ID
   * @param maxRetries 최대 재시도 횟수 (기본: 3회)
   * @returns Promise<DataConnection> 연결 객체
   */ async connectToHost(hostId, maxRetries = 3) {
        (0, _logger.Logger).info('PeerManager', "\uD638\uC2A4\uD2B8 \uC5F0\uACB0 \uC2DC\uB3C4 \uC2DC\uC791", {
            hostId,
            maxRetries
        });
        for(let attempt = 1; attempt <= maxRetries; attempt++)try {
            (0, _logger.Logger).info('PeerManager', `\u{C5F0}\u{ACB0} \u{C2DC}\u{B3C4} ${attempt}/${maxRetries}`, {
                hostId
            });
            this.emit('connectionProgress', `\u{BC29}\u{C5D0} \u{C5F0}\u{ACB0} \u{C911}... (${attempt}/${maxRetries})`);
            const conn = await this.attemptConnection(hostId, 30000); // 30초 타임아웃
            (0, _logger.Logger).info('PeerManager', "\uD638\uC2A4\uD2B8 \uC5F0\uACB0 \uC131\uACF5", {
                hostId,
                attempt
            });
            return conn;
        } catch (error) {
            (0, _logger.Logger).warn('PeerManager', `\u{C5F0}\u{ACB0} \u{C2DC}\u{B3C4} ${attempt} \u{C2E4}\u{D328}`, {
                hostId,
                error: error.message
            });
            if (attempt === maxRetries) {
                (0, _logger.Logger).error('PeerManager', "\uBAA8\uB4E0 \uC5F0\uACB0 \uC2DC\uB3C4 \uC2E4\uD328", error);
                throw error;
            }
            // 재시도 전 대기 (2초 * 시도 횟수)
            const delay = 2000 * attempt;
            (0, _logger.Logger).info('PeerManager', `${delay}ms \u{D6C4} \u{C7AC}\u{C2DC}\u{B3C4}`, {
                attempt
            });
            this.emit('connectionProgress', `\u{C7AC}\u{C5F0}\u{ACB0} \u{C911}... (${attempt + 1}/${maxRetries})`);
            await this.delay(delay);
        }
        throw new Error("\uC5F0\uACB0 \uC2E4\uD328");
    }
    /**
   * 단일 연결 시도
   * @param hostId 호스트 Peer ID
   * @param timeout 타임아웃 (ms)
   * @returns Promise<DataConnection> 연결 객체
   */ attemptConnection(hostId, timeout) {
        return new Promise((resolve, reject)=>{
            if (!this.peer) {
                reject(new Error("Peer\uAC00 \uC0DD\uC131\uB418\uC9C0 \uC54A\uC558\uC2B5\uB2C8\uB2E4."));
                return;
            }
            try {
                // 호스트에 연결
                const conn = this.peer.connect(hostId, {
                    reliable: true,
                    serialization: 'json' // JSON 직렬화
                });
                // 연결 성공 이벤트
                conn.on('open', ()=>{
                    (0, _logger.Logger).info('PeerManager', "\uD638\uC2A4\uD2B8 \uC5F0\uACB0 \uC218\uB9BD \uC644\uB8CC", {
                        hostId
                    });
                    console.log("[PeerManager] \uD638\uC2A4\uD2B8 \uC5F0\uACB0 \uC131\uACF5:", hostId);
                    this.handleConnection(conn);
                    resolve(conn);
                });
                // 연결 실패 이벤트
                conn.on('error', (error)=>{
                    (0, _logger.Logger).error('PeerManager', "\uC5F0\uACB0 \uC5D0\uB7EC", error);
                    console.error("[PeerManager] \uC5F0\uACB0 \uC2E4\uD328:", error);
                    reject(error);
                });
                // 타임아웃 설정
                setTimeout(()=>{
                    if (!conn.open) {
                        const timeoutError = new Error(`\u{C5F0}\u{ACB0} \u{C2DC}\u{AC04} \u{CD08}\u{ACFC} (${timeout}ms)`);
                        (0, _logger.Logger).warn('PeerManager', "\uC5F0\uACB0 \uD0C0\uC784\uC544\uC6C3", {
                            hostId,
                            timeout
                        });
                        reject(timeoutError);
                    }
                }, timeout);
            } catch (error) {
                reject(error);
            }
        });
    }
    /**
   * 지연 유틸리티
   * @param ms 지연 시간 (ms)
   * @returns Promise<void>
   */ delay(ms) {
        return new Promise((resolve)=>setTimeout(resolve, ms));
    }
    /**
   * 연결 처리 (공통)
   * @param conn 연결 객체
   */ handleConnection(conn) {
        // 연결 맵에 추가
        this.connections.set(conn.peer, conn);
        // 데이터 수신 이벤트
        conn.on('data', (data)=>{
            try {
                const message = data;
                console.log("[PeerManager] \uB370\uC774\uD130 \uC218\uC2E0:", message.type, 'from', conn.peer);
                this.emit('data', message, conn);
            } catch (error) {
                console.error("[PeerManager] \uB370\uC774\uD130 \uD30C\uC2F1 \uC2E4\uD328:", error);
            }
        });
        // 연결 종료 이벤트
        conn.on('close', ()=>{
            console.log("[PeerManager] \uC5F0\uACB0 \uC885\uB8CC:", conn.peer);
            this.connections.delete(conn.peer);
            this.emit('close', conn);
        });
        // 에러 이벤트
        conn.on('error', (error)=>{
            console.error("[PeerManager] \uC5F0\uACB0 \uC5D0\uB7EC:", error);
            this.emit('error', error);
        });
    }
    /**
   * 메시지 전송 (특정 연결)
   * @param peerId 대상 Peer ID
   * @param message 메시지 객체
   */ send(peerId, message) {
        const conn = this.connections.get(peerId);
        if (conn && conn.open) try {
            conn.send(message);
            console.log("[PeerManager] \uBA54\uC2DC\uC9C0 \uC804\uC1A1:", message.type, 'to', peerId);
        } catch (error) {
            console.error("[PeerManager] \uBA54\uC2DC\uC9C0 \uC804\uC1A1 \uC2E4\uD328:", error);
        }
        else console.warn("[PeerManager] \uC5F0\uACB0\uC744 \uCC3E\uC744 \uC218 \uC5C6\uC74C:", peerId);
    }
    /**
   * 메시지 브로드캐스트 (모든 연결)
   * @param message 메시지 객체
   * @param excludePeerId 제외할 Peer ID (선택)
   */ broadcast(message, excludePeerId) {
        console.log("[PeerManager] \uBA54\uC2DC\uC9C0 \uBE0C\uB85C\uB4DC\uCE90\uC2A4\uD2B8:", message.type, '(', this.connections.size, "\uBA85)");
        this.connections.forEach((conn, peerId)=>{
            if (peerId !== excludePeerId && conn.open) try {
                conn.send(message);
            } catch (error) {
                console.error("[PeerManager] \uBE0C\uB85C\uB4DC\uCE90\uC2A4\uD2B8 \uC2E4\uD328:", peerId, error);
            }
        });
    }
    /**
   * 특정 연결 종료
   * @param peerId 대상 Peer ID
   */ disconnect(peerId) {
        const conn = this.connections.get(peerId);
        if (conn) {
            conn.close();
            this.connections.delete(peerId);
            console.log("[PeerManager] \uC5F0\uACB0 \uC885\uB8CC:", peerId);
        }
    }
    /**
   * 모든 연결 종료
   */ disconnectAll() {
        console.log("[PeerManager] \uBAA8\uB4E0 \uC5F0\uACB0 \uC885\uB8CC");
        this.connections.forEach((conn)=>{
            conn.close();
        });
        this.connections.clear();
    }
    /**
   * Peer 종료
   */ destroy() {
        console.log("[PeerManager] Peer \uC885\uB8CC");
        this.disconnectAll();
        if (this.peer) {
            this.peer.destroy();
            this.peer = null;
        }
        this.eventHandlers.clear();
    }
    /**
   * 재연결 시도
   */ attemptReconnect() {
        if (this.reconnectAttempts >= this.maxReconnectAttempts) {
            console.error("[PeerManager] \uCD5C\uB300 \uC7AC\uC5F0\uACB0 \uC2DC\uB3C4 \uD69F\uC218 \uCD08\uACFC");
            this.emit('error', new Error("\uC11C\uBC84 \uC5F0\uACB0 \uC2E4\uD328"));
            return;
        }
        this.reconnectAttempts++;
        console.log(`[PeerManager] \u{C7AC}\u{C5F0}\u{ACB0} \u{C2DC}\u{B3C4} (${this.reconnectAttempts}/${this.maxReconnectAttempts})`);
        if (this.peer && !this.peer.destroyed) setTimeout(()=>{
            this.peer?.reconnect();
        }, 1000 * this.reconnectAttempts); // 지수 백오프
    }
    /**
   * 이벤트 핸들러 등록 (여러 핸들러 지원)
   * @param event 이벤트 이름
   * @param handler 핸들러 함수
   */ on(event, handler) {
        if (!this.eventHandlers.has(event)) this.eventHandlers.set(event, []);
        this.eventHandlers.get(event).push(handler);
    }
    /**
   * 이벤트 발생 (모든 핸들러 호출)
   * @param event 이벤트 이름
   * @param args 인자
   */ emit(event, ...args) {
        const handlers = this.eventHandlers.get(event);
        if (handlers) handlers.forEach((handler)=>{
            try {
                handler(...args);
            } catch (error) {
                console.error(`[PeerManager] \u{C774}\u{BCA4}\u{D2B8} \u{D578}\u{B4E4}\u{B7EC} \u{C5D0}\u{B7EC} (${event}):`, error);
            }
        });
    }
    /**
   * Peer ID 조회
   * @returns Peer ID 또는 null
   */ getPeerId() {
        return this.peer?.id || null;
    }
    /**
   * 연결 수 조회
   * @returns 활성 연결 수
   */ getConnectionCount() {
        return this.connections.size;
    }
    /**
   * 연결된 Peer ID 목록 조회
   * @returns Peer ID 배열
   */ getConnectedPeerIds() {
        return Array.from(this.connections.keys());
    }
    /**
   * 특정 Peer가 연결되어 있는지 확인
   * @param peerId Peer ID
   * @returns 연결 여부
   */ isConnected(peerId) {
        const conn = this.connections.get(peerId);
        return conn ? conn.open : false;
    }
    constructor(){
        this.peer = null // Peer 인스턴스
        ;
        this.connections = new Map() // 연결 맵 (peerId -> connection)
        ;
        this.eventHandlers = new Map() // 이벤트 핸들러 배열 (여러 리스너 지원)
        ;
        this.reconnectAttempts = 0 // 재연결 시도 횟수
        ;
        this.maxReconnectAttempts = 5 // 최대 재연결 시도 횟수
        ;
    }
}

},{"peerjs":"8QkfH","../utils/Logger":"7YW8a","@parcel/transformer-js/src/esmodule-helpers.js":"jnFvT"}],"8QkfH":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "default", ()=>$dd0187d7f28e386f$export$2e2bcd8739ae039);
parcelHelpers.export(exports, "util", ()=>$4f4134156c446392$export$7debb50ef11d5e0b);
parcelHelpers.export(exports, "BufferedConnection", ()=>$a229bedbcaa6ca23$export$ff7c9d4c11d94e8b);
parcelHelpers.export(exports, "StreamConnection", ()=>$20dbe68149d7aad9$export$72aa44612e2200cd);
parcelHelpers.export(exports, "MsgPack", ()=>$6e39230ab36396ad$export$80f5de1a66c4d624);
parcelHelpers.export(exports, "Peer", ()=>$416260bce337df90$export$ecd1fc136c422448);
parcelHelpers.export(exports, "MsgPackPeer", ()=>$1e0aff16be2c328e$export$d72c7bf8eef50853);
parcelHelpers.export(exports, "PeerError", ()=>$23779d1881157a18$export$98871882f492de82);
parcelHelpers.export(exports, "ConnectionType", ()=>$78455e22dea96b8c$export$3157d57b4135e3bc);
parcelHelpers.export(exports, "PeerErrorType", ()=>$78455e22dea96b8c$export$9547aaa2e39030ff);
parcelHelpers.export(exports, "BaseConnectionErrorType", ()=>$78455e22dea96b8c$export$7974935686149686);
parcelHelpers.export(exports, "DataConnectionErrorType", ()=>$78455e22dea96b8c$export$49ae800c114df41d);
parcelHelpers.export(exports, "SerializationType", ()=>$78455e22dea96b8c$export$89f507cf986a947);
parcelHelpers.export(exports, "SocketEventType", ()=>$78455e22dea96b8c$export$3b5c4a4b6354f023);
parcelHelpers.export(exports, "ServerMessageType", ()=>$78455e22dea96b8c$export$adb4a1754da6f10d);
var _peerjsJsBinarypack = require("peerjs-js-binarypack");
var _webrtcAdapter = require("webrtc-adapter");
var _webrtcAdapterDefault = parcelHelpers.interopDefault(_webrtcAdapter);
var _msgpack = require("@msgpack/msgpack");
function $parcel$export(e, n, v, s) {
    Object.defineProperty(e, n, {
        get: v,
        set: s,
        enumerable: true,
        configurable: true
    });
}
class $fcbcc7538a6776d5$export$f1c5f4c9cb95390b {
    constructor(){
        this.chunkedMTU = 16300 // The original 60000 bytes setting does not work when sending data from Firefox to Chrome, which is "cut off" after 16384 bytes and delivered individually.
        ;
        // Binary stuff
        this._dataCount = 1;
        this.chunk = (blob)=>{
            const chunks = [];
            const size = blob.byteLength;
            const total = Math.ceil(size / this.chunkedMTU);
            let index = 0;
            let start = 0;
            while(start < size){
                const end = Math.min(size, start + this.chunkedMTU);
                const b = blob.slice(start, end);
                const chunk = {
                    __peerData: this._dataCount,
                    n: index,
                    data: b,
                    total: total
                };
                chunks.push(chunk);
                start = end;
                index++;
            }
            this._dataCount++;
            return chunks;
        };
    }
}
function $fcbcc7538a6776d5$export$52c89ebcdc4f53f2(bufs) {
    let size = 0;
    for (const buf of bufs)size += buf.byteLength;
    const result = new Uint8Array(size);
    let offset = 0;
    for (const buf of bufs){
        result.set(buf, offset);
        offset += buf.byteLength;
    }
    return result;
}
const $fb63e766cfafaab9$var$webRTCAdapter = (0, _webrtcAdapterDefault.default).default || (0, _webrtcAdapterDefault.default);
const $fb63e766cfafaab9$export$25be9502477c137d = new class {
    isWebRTCSupported() {
        return typeof RTCPeerConnection !== "undefined";
    }
    isBrowserSupported() {
        const browser = this.getBrowser();
        const version = this.getVersion();
        const validBrowser = this.supportedBrowsers.includes(browser);
        if (!validBrowser) return false;
        if (browser === "chrome") return version >= this.minChromeVersion;
        if (browser === "firefox") return version >= this.minFirefoxVersion;
        if (browser === "safari") return !this.isIOS && version >= this.minSafariVersion;
        return false;
    }
    getBrowser() {
        return $fb63e766cfafaab9$var$webRTCAdapter.browserDetails.browser;
    }
    getVersion() {
        return $fb63e766cfafaab9$var$webRTCAdapter.browserDetails.version || 0;
    }
    isUnifiedPlanSupported() {
        const browser = this.getBrowser();
        const version = $fb63e766cfafaab9$var$webRTCAdapter.browserDetails.version || 0;
        if (browser === "chrome" && version < this.minChromeVersion) return false;
        if (browser === "firefox" && version >= this.minFirefoxVersion) return true;
        if (!window.RTCRtpTransceiver || !("currentDirection" in RTCRtpTransceiver.prototype)) return false;
        let tempPc;
        let supported = false;
        try {
            tempPc = new RTCPeerConnection();
            tempPc.addTransceiver("audio");
            supported = true;
        } catch (e) {} finally{
            if (tempPc) tempPc.close();
        }
        return supported;
    }
    toString() {
        return `Supports:
    browser:${this.getBrowser()}
    version:${this.getVersion()}
    isIOS:${this.isIOS}
    isWebRTCSupported:${this.isWebRTCSupported()}
    isBrowserSupported:${this.isBrowserSupported()}
    isUnifiedPlanSupported:${this.isUnifiedPlanSupported()}`;
    }
    constructor(){
        this.isIOS = typeof navigator !== "undefined" ? [
            "iPad",
            "iPhone",
            "iPod"
        ].includes(navigator.platform) : false;
        this.supportedBrowsers = [
            "firefox",
            "chrome",
            "safari"
        ];
        this.minFirefoxVersion = 59;
        this.minChromeVersion = 72;
        this.minSafariVersion = 605;
    }
}();
const $9a84a32bf0bf36bb$export$f35f128fd59ea256 = (id)=>{
    // Allow empty ids
    return !id || /^[A-Za-z0-9]+(?:[ _-][A-Za-z0-9]+)*$/.test(id);
};
const $0e5fd1585784c252$export$4e61f672936bec77 = ()=>Math.random().toString(36).slice(2);
const $4f4134156c446392$var$DEFAULT_CONFIG = {
    iceServers: [
        {
            urls: "stun:stun.l.google.com:19302"
        },
        {
            urls: [
                "turn:eu-0.turn.peerjs.com:3478",
                "turn:us-0.turn.peerjs.com:3478"
            ],
            username: "peerjs",
            credential: "peerjsp"
        }
    ],
    sdpSemantics: "unified-plan"
};
class $4f4134156c446392$export$f8f26dd395d7e1bd extends $fcbcc7538a6776d5$export$f1c5f4c9cb95390b {
    noop() {}
    blobToArrayBuffer(blob, cb) {
        const fr = new FileReader();
        fr.onload = function(evt) {
            if (evt.target) cb(evt.target.result);
        };
        fr.readAsArrayBuffer(blob);
        return fr;
    }
    binaryStringToArrayBuffer(binary) {
        const byteArray = new Uint8Array(binary.length);
        for(let i = 0; i < binary.length; i++)byteArray[i] = binary.charCodeAt(i) & 0xff;
        return byteArray.buffer;
    }
    isSecure() {
        return location.protocol === "https:";
    }
    constructor(...args){
        super(...args), this.CLOUD_HOST = "0.peerjs.com", this.CLOUD_PORT = 443, this.chunkedBrowsers = {
            Chrome: 1,
            chrome: 1
        }, this.defaultConfig = $4f4134156c446392$var$DEFAULT_CONFIG, this.browser = $fb63e766cfafaab9$export$25be9502477c137d.getBrowser(), this.browserVersion = $fb63e766cfafaab9$export$25be9502477c137d.getVersion(), this.pack = (0, _peerjsJsBinarypack.pack), this.unpack = (0, _peerjsJsBinarypack.unpack), /**
	 * A hash of WebRTC features mapped to booleans that correspond to whether the feature is supported by the current browser.
	 *
	 * :::caution
	 * Only the properties documented here are guaranteed to be present on `util.supports`
	 * :::
	 */ this.supports = function() {
            const supported = {
                browser: $fb63e766cfafaab9$export$25be9502477c137d.isBrowserSupported(),
                webRTC: $fb63e766cfafaab9$export$25be9502477c137d.isWebRTCSupported(),
                audioVideo: false,
                data: false,
                binaryBlob: false,
                reliable: false
            };
            if (!supported.webRTC) return supported;
            let pc;
            try {
                pc = new RTCPeerConnection($4f4134156c446392$var$DEFAULT_CONFIG);
                supported.audioVideo = true;
                let dc;
                try {
                    dc = pc.createDataChannel("_PEERJSTEST", {
                        ordered: true
                    });
                    supported.data = true;
                    supported.reliable = !!dc.ordered;
                    // Binary test
                    try {
                        dc.binaryType = "blob";
                        supported.binaryBlob = !$fb63e766cfafaab9$export$25be9502477c137d.isIOS;
                    } catch (e) {}
                } catch (e) {} finally{
                    if (dc) dc.close();
                }
            } catch (e) {} finally{
                if (pc) pc.close();
            }
            return supported;
        }(), this.validateId = $9a84a32bf0bf36bb$export$f35f128fd59ea256, this.randomToken = $0e5fd1585784c252$export$4e61f672936bec77;
    }
}
const $4f4134156c446392$export$7debb50ef11d5e0b = new $4f4134156c446392$export$f8f26dd395d7e1bd();
const $257947e92926277a$var$LOG_PREFIX = "PeerJS: ";
var $257947e92926277a$export$243e62d78d3b544d = /*#__PURE__*/ function(LogLevel) {
    /**
	 * Prints no logs.
	 */ LogLevel[LogLevel["Disabled"] = 0] = "Disabled";
    /**
	 * Prints only errors.
	 */ LogLevel[LogLevel["Errors"] = 1] = "Errors";
    /**
	 * Prints errors and warnings.
	 */ LogLevel[LogLevel["Warnings"] = 2] = "Warnings";
    /**
	 * Prints all logs.
	 */ LogLevel[LogLevel["All"] = 3] = "All";
    return LogLevel;
}({});
class $257947e92926277a$var$Logger {
    get logLevel() {
        return this._logLevel;
    }
    set logLevel(logLevel) {
        this._logLevel = logLevel;
    }
    log(...args) {
        if (this._logLevel >= 3) this._print(3, ...args);
    }
    warn(...args) {
        if (this._logLevel >= 2) this._print(2, ...args);
    }
    error(...args) {
        if (this._logLevel >= 1) this._print(1, ...args);
    }
    setLogFunction(fn) {
        this._print = fn;
    }
    _print(logLevel, ...rest) {
        const copy = [
            $257947e92926277a$var$LOG_PREFIX,
            ...rest
        ];
        for(const i in copy)if (copy[i] instanceof Error) copy[i] = "(" + copy[i].name + ") " + copy[i].message;
        if (logLevel >= 3) console.log(...copy);
        else if (logLevel >= 2) console.warn("WARNING", ...copy);
        else if (logLevel >= 1) console.error("ERROR", ...copy);
    }
    constructor(){
        this._logLevel = 0;
    }
}
var $257947e92926277a$export$2e2bcd8739ae039 = new $257947e92926277a$var$Logger();
var $c4dcfd1d1ea86647$exports = {};
'use strict';
var $c4dcfd1d1ea86647$var$has = Object.prototype.hasOwnProperty, $c4dcfd1d1ea86647$var$prefix = '~';
/**
 * Constructor to create a storage for our `EE` objects.
 * An `Events` instance is a plain object whose properties are event names.
 *
 * @constructor
 * @private
 */ function $c4dcfd1d1ea86647$var$Events() {}
//
// We try to not inherit from `Object.prototype`. In some engines creating an
// instance in this way is faster than calling `Object.create(null)` directly.
// If `Object.create(null)` is not supported we prefix the event names with a
// character to make sure that the built-in object properties are not
// overridden or used as an attack vector.
//
if (Object.create) {
    $c4dcfd1d1ea86647$var$Events.prototype = Object.create(null);
    //
    // This hack is needed because the `__proto__` property is still inherited in
    // some old browsers like Android 4, iPhone 5.1, Opera 11 and Safari 5.
    //
    if (!new $c4dcfd1d1ea86647$var$Events().__proto__) $c4dcfd1d1ea86647$var$prefix = false;
}
/**
 * Representation of a single event listener.
 *
 * @param {Function} fn The listener function.
 * @param {*} context The context to invoke the listener with.
 * @param {Boolean} [once=false] Specify if the listener is a one-time listener.
 * @constructor
 * @private
 */ function $c4dcfd1d1ea86647$var$EE(fn, context, once) {
    this.fn = fn;
    this.context = context;
    this.once = once || false;
}
/**
 * Add a listener for a given event.
 *
 * @param {EventEmitter} emitter Reference to the `EventEmitter` instance.
 * @param {(String|Symbol)} event The event name.
 * @param {Function} fn The listener function.
 * @param {*} context The context to invoke the listener with.
 * @param {Boolean} once Specify if the listener is a one-time listener.
 * @returns {EventEmitter}
 * @private
 */ function $c4dcfd1d1ea86647$var$addListener(emitter, event, fn, context, once) {
    if (typeof fn !== 'function') throw new TypeError('The listener must be a function');
    var listener = new $c4dcfd1d1ea86647$var$EE(fn, context || emitter, once), evt = $c4dcfd1d1ea86647$var$prefix ? $c4dcfd1d1ea86647$var$prefix + event : event;
    if (!emitter._events[evt]) emitter._events[evt] = listener, emitter._eventsCount++;
    else if (!emitter._events[evt].fn) emitter._events[evt].push(listener);
    else emitter._events[evt] = [
        emitter._events[evt],
        listener
    ];
    return emitter;
}
/**
 * Clear event by name.
 *
 * @param {EventEmitter} emitter Reference to the `EventEmitter` instance.
 * @param {(String|Symbol)} evt The Event name.
 * @private
 */ function $c4dcfd1d1ea86647$var$clearEvent(emitter, evt) {
    if (--emitter._eventsCount === 0) emitter._events = new $c4dcfd1d1ea86647$var$Events();
    else delete emitter._events[evt];
}
/**
 * Minimal `EventEmitter` interface that is molded against the Node.js
 * `EventEmitter` interface.
 *
 * @constructor
 * @public
 */ function $c4dcfd1d1ea86647$var$EventEmitter() {
    this._events = new $c4dcfd1d1ea86647$var$Events();
    this._eventsCount = 0;
}
/**
 * Return an array listing the events for which the emitter has registered
 * listeners.
 *
 * @returns {Array}
 * @public
 */ $c4dcfd1d1ea86647$var$EventEmitter.prototype.eventNames = function eventNames() {
    var names = [], events, name;
    if (this._eventsCount === 0) return names;
    for(name in events = this._events)if ($c4dcfd1d1ea86647$var$has.call(events, name)) names.push($c4dcfd1d1ea86647$var$prefix ? name.slice(1) : name);
    if (Object.getOwnPropertySymbols) return names.concat(Object.getOwnPropertySymbols(events));
    return names;
};
/**
 * Return the listeners registered for a given event.
 *
 * @param {(String|Symbol)} event The event name.
 * @returns {Array} The registered listeners.
 * @public
 */ $c4dcfd1d1ea86647$var$EventEmitter.prototype.listeners = function listeners(event) {
    var evt = $c4dcfd1d1ea86647$var$prefix ? $c4dcfd1d1ea86647$var$prefix + event : event, handlers = this._events[evt];
    if (!handlers) return [];
    if (handlers.fn) return [
        handlers.fn
    ];
    for(var i = 0, l = handlers.length, ee = new Array(l); i < l; i++)ee[i] = handlers[i].fn;
    return ee;
};
/**
 * Return the number of listeners listening to a given event.
 *
 * @param {(String|Symbol)} event The event name.
 * @returns {Number} The number of listeners.
 * @public
 */ $c4dcfd1d1ea86647$var$EventEmitter.prototype.listenerCount = function listenerCount(event) {
    var evt = $c4dcfd1d1ea86647$var$prefix ? $c4dcfd1d1ea86647$var$prefix + event : event, listeners = this._events[evt];
    if (!listeners) return 0;
    if (listeners.fn) return 1;
    return listeners.length;
};
/**
 * Calls each of the listeners registered for a given event.
 *
 * @param {(String|Symbol)} event The event name.
 * @returns {Boolean} `true` if the event had listeners, else `false`.
 * @public
 */ $c4dcfd1d1ea86647$var$EventEmitter.prototype.emit = function emit(event, a1, a2, a3, a4, a5) {
    var evt = $c4dcfd1d1ea86647$var$prefix ? $c4dcfd1d1ea86647$var$prefix + event : event;
    if (!this._events[evt]) return false;
    var listeners = this._events[evt], len = arguments.length, args, i;
    if (listeners.fn) {
        if (listeners.once) this.removeListener(event, listeners.fn, undefined, true);
        switch(len){
            case 1:
                return listeners.fn.call(listeners.context), true;
            case 2:
                return listeners.fn.call(listeners.context, a1), true;
            case 3:
                return listeners.fn.call(listeners.context, a1, a2), true;
            case 4:
                return listeners.fn.call(listeners.context, a1, a2, a3), true;
            case 5:
                return listeners.fn.call(listeners.context, a1, a2, a3, a4), true;
            case 6:
                return listeners.fn.call(listeners.context, a1, a2, a3, a4, a5), true;
        }
        for(i = 1, args = new Array(len - 1); i < len; i++)args[i - 1] = arguments[i];
        listeners.fn.apply(listeners.context, args);
    } else {
        var length = listeners.length, j;
        for(i = 0; i < length; i++){
            if (listeners[i].once) this.removeListener(event, listeners[i].fn, undefined, true);
            switch(len){
                case 1:
                    listeners[i].fn.call(listeners[i].context);
                    break;
                case 2:
                    listeners[i].fn.call(listeners[i].context, a1);
                    break;
                case 3:
                    listeners[i].fn.call(listeners[i].context, a1, a2);
                    break;
                case 4:
                    listeners[i].fn.call(listeners[i].context, a1, a2, a3);
                    break;
                default:
                    if (!args) for(j = 1, args = new Array(len - 1); j < len; j++)args[j - 1] = arguments[j];
                    listeners[i].fn.apply(listeners[i].context, args);
            }
        }
    }
    return true;
};
/**
 * Add a listener for a given event.
 *
 * @param {(String|Symbol)} event The event name.
 * @param {Function} fn The listener function.
 * @param {*} [context=this] The context to invoke the listener with.
 * @returns {EventEmitter} `this`.
 * @public
 */ $c4dcfd1d1ea86647$var$EventEmitter.prototype.on = function on(event, fn, context) {
    return $c4dcfd1d1ea86647$var$addListener(this, event, fn, context, false);
};
/**
 * Add a one-time listener for a given event.
 *
 * @param {(String|Symbol)} event The event name.
 * @param {Function} fn The listener function.
 * @param {*} [context=this] The context to invoke the listener with.
 * @returns {EventEmitter} `this`.
 * @public
 */ $c4dcfd1d1ea86647$var$EventEmitter.prototype.once = function once(event, fn, context) {
    return $c4dcfd1d1ea86647$var$addListener(this, event, fn, context, true);
};
/**
 * Remove the listeners of a given event.
 *
 * @param {(String|Symbol)} event The event name.
 * @param {Function} fn Only remove the listeners that match this function.
 * @param {*} context Only remove the listeners that have this context.
 * @param {Boolean} once Only remove one-time listeners.
 * @returns {EventEmitter} `this`.
 * @public
 */ $c4dcfd1d1ea86647$var$EventEmitter.prototype.removeListener = function removeListener(event, fn, context, once) {
    var evt = $c4dcfd1d1ea86647$var$prefix ? $c4dcfd1d1ea86647$var$prefix + event : event;
    if (!this._events[evt]) return this;
    if (!fn) {
        $c4dcfd1d1ea86647$var$clearEvent(this, evt);
        return this;
    }
    var listeners = this._events[evt];
    if (listeners.fn) {
        if (listeners.fn === fn && (!once || listeners.once) && (!context || listeners.context === context)) $c4dcfd1d1ea86647$var$clearEvent(this, evt);
    } else {
        for(var i = 0, events = [], length = listeners.length; i < length; i++)if (listeners[i].fn !== fn || once && !listeners[i].once || context && listeners[i].context !== context) events.push(listeners[i]);
        //
        // Reset the array, or remove it completely if we have no more listeners.
        //
        if (events.length) this._events[evt] = events.length === 1 ? events[0] : events;
        else $c4dcfd1d1ea86647$var$clearEvent(this, evt);
    }
    return this;
};
/**
 * Remove all listeners, or those of the specified event.
 *
 * @param {(String|Symbol)} [event] The event name.
 * @returns {EventEmitter} `this`.
 * @public
 */ $c4dcfd1d1ea86647$var$EventEmitter.prototype.removeAllListeners = function removeAllListeners(event) {
    var evt;
    if (event) {
        evt = $c4dcfd1d1ea86647$var$prefix ? $c4dcfd1d1ea86647$var$prefix + event : event;
        if (this._events[evt]) $c4dcfd1d1ea86647$var$clearEvent(this, evt);
    } else {
        this._events = new $c4dcfd1d1ea86647$var$Events();
        this._eventsCount = 0;
    }
    return this;
};
//
// Alias methods names because people roll like that.
//
$c4dcfd1d1ea86647$var$EventEmitter.prototype.off = $c4dcfd1d1ea86647$var$EventEmitter.prototype.removeListener;
$c4dcfd1d1ea86647$var$EventEmitter.prototype.addListener = $c4dcfd1d1ea86647$var$EventEmitter.prototype.on;
//
// Expose the prefix.
//
$c4dcfd1d1ea86647$var$EventEmitter.prefixed = $c4dcfd1d1ea86647$var$prefix;
//
// Allow `EventEmitter` to be imported as module namespace.
//
$c4dcfd1d1ea86647$var$EventEmitter.EventEmitter = $c4dcfd1d1ea86647$var$EventEmitter;
$c4dcfd1d1ea86647$exports = $c4dcfd1d1ea86647$var$EventEmitter;
var $78455e22dea96b8c$exports = {};
$parcel$export($78455e22dea96b8c$exports, "ConnectionType", ()=>$78455e22dea96b8c$export$3157d57b4135e3bc);
$parcel$export($78455e22dea96b8c$exports, "PeerErrorType", ()=>$78455e22dea96b8c$export$9547aaa2e39030ff);
$parcel$export($78455e22dea96b8c$exports, "BaseConnectionErrorType", ()=>$78455e22dea96b8c$export$7974935686149686);
$parcel$export($78455e22dea96b8c$exports, "DataConnectionErrorType", ()=>$78455e22dea96b8c$export$49ae800c114df41d);
$parcel$export($78455e22dea96b8c$exports, "SerializationType", ()=>$78455e22dea96b8c$export$89f507cf986a947);
$parcel$export($78455e22dea96b8c$exports, "SocketEventType", ()=>$78455e22dea96b8c$export$3b5c4a4b6354f023);
$parcel$export($78455e22dea96b8c$exports, "ServerMessageType", ()=>$78455e22dea96b8c$export$adb4a1754da6f10d);
var $78455e22dea96b8c$export$3157d57b4135e3bc = /*#__PURE__*/ function(ConnectionType) {
    ConnectionType["Data"] = "data";
    ConnectionType["Media"] = "media";
    return ConnectionType;
}({});
var $78455e22dea96b8c$export$9547aaa2e39030ff = /*#__PURE__*/ function(PeerErrorType) {
    /**
	 * The client's browser does not support some or all WebRTC features that you are trying to use.
	 */ PeerErrorType["BrowserIncompatible"] = "browser-incompatible";
    /**
	 * You've already disconnected this peer from the server and can no longer make any new connections on it.
	 */ PeerErrorType["Disconnected"] = "disconnected";
    /**
	 * The ID passed into the Peer constructor contains illegal characters.
	 */ PeerErrorType["InvalidID"] = "invalid-id";
    /**
	 * The API key passed into the Peer constructor contains illegal characters or is not in the system (cloud server only).
	 */ PeerErrorType["InvalidKey"] = "invalid-key";
    /**
	 * Lost or cannot establish a connection to the signalling server.
	 */ PeerErrorType["Network"] = "network";
    /**
	 * The peer you're trying to connect to does not exist.
	 */ PeerErrorType["PeerUnavailable"] = "peer-unavailable";
    /**
	 * PeerJS is being used securely, but the cloud server does not support SSL. Use a custom PeerServer.
	 */ PeerErrorType["SslUnavailable"] = "ssl-unavailable";
    /**
	 * Unable to reach the server.
	 */ PeerErrorType["ServerError"] = "server-error";
    /**
	 * An error from the underlying socket.
	 */ PeerErrorType["SocketError"] = "socket-error";
    /**
	 * The underlying socket closed unexpectedly.
	 */ PeerErrorType["SocketClosed"] = "socket-closed";
    /**
	 * The ID passed into the Peer constructor is already taken.
	 *
	 * :::caution
	 * This error is not fatal if your peer has open peer-to-peer connections.
	 * This can happen if you attempt to {@apilink Peer.reconnect} a peer that has been disconnected from the server,
	 * but its old ID has now been taken.
	 * :::
	 */ PeerErrorType["UnavailableID"] = "unavailable-id";
    /**
	 * Native WebRTC errors.
	 */ PeerErrorType["WebRTC"] = "webrtc";
    return PeerErrorType;
}({});
var $78455e22dea96b8c$export$7974935686149686 = /*#__PURE__*/ function(BaseConnectionErrorType) {
    BaseConnectionErrorType["NegotiationFailed"] = "negotiation-failed";
    BaseConnectionErrorType["ConnectionClosed"] = "connection-closed";
    return BaseConnectionErrorType;
}({});
var $78455e22dea96b8c$export$49ae800c114df41d = /*#__PURE__*/ function(DataConnectionErrorType) {
    DataConnectionErrorType["NotOpenYet"] = "not-open-yet";
    DataConnectionErrorType["MessageToBig"] = "message-too-big";
    return DataConnectionErrorType;
}({});
var $78455e22dea96b8c$export$89f507cf986a947 = /*#__PURE__*/ function(SerializationType) {
    SerializationType["Binary"] = "binary";
    SerializationType["BinaryUTF8"] = "binary-utf8";
    SerializationType["JSON"] = "json";
    SerializationType["None"] = "raw";
    return SerializationType;
}({});
var $78455e22dea96b8c$export$3b5c4a4b6354f023 = /*#__PURE__*/ function(SocketEventType) {
    SocketEventType["Message"] = "message";
    SocketEventType["Disconnected"] = "disconnected";
    SocketEventType["Error"] = "error";
    SocketEventType["Close"] = "close";
    return SocketEventType;
}({});
var $78455e22dea96b8c$export$adb4a1754da6f10d = /*#__PURE__*/ function(ServerMessageType) {
    ServerMessageType["Heartbeat"] = "HEARTBEAT";
    ServerMessageType["Candidate"] = "CANDIDATE";
    ServerMessageType["Offer"] = "OFFER";
    ServerMessageType["Answer"] = "ANSWER";
    ServerMessageType["Open"] = "OPEN";
    ServerMessageType["Error"] = "ERROR";
    ServerMessageType["IdTaken"] = "ID-TAKEN";
    ServerMessageType["InvalidKey"] = "INVALID-KEY";
    ServerMessageType["Leave"] = "LEAVE";
    ServerMessageType["Expire"] = "EXPIRE";
    return ServerMessageType;
}({});
const $520832d44ba058c8$export$83d89fbfd8236492 = "1.5.5";
class $8f5bfa60836d261d$export$4798917dbf149b79 extends $c4dcfd1d1ea86647$exports.EventEmitter {
    constructor(secure, host, port, path, key, pingInterval = 5000){
        super(), this.pingInterval = pingInterval, this._disconnected = true, this._messagesQueue = [];
        const wsProtocol = secure ? "wss://" : "ws://";
        this._baseUrl = wsProtocol + host + ":" + port + path + "peerjs?key=" + key;
    }
    start(id, token) {
        this._id = id;
        const wsUrl = `${this._baseUrl}&id=${id}&token=${token}`;
        if (!!this._socket || !this._disconnected) return;
        this._socket = new WebSocket(wsUrl + "&version=" + $520832d44ba058c8$export$83d89fbfd8236492);
        this._disconnected = false;
        this._socket.onmessage = (event)=>{
            let data;
            try {
                data = JSON.parse(event.data);
                $257947e92926277a$export$2e2bcd8739ae039.log("Server message received:", data);
            } catch (e) {
                $257947e92926277a$export$2e2bcd8739ae039.log("Invalid server message", event.data);
                return;
            }
            this.emit($78455e22dea96b8c$export$3b5c4a4b6354f023.Message, data);
        };
        this._socket.onclose = (event)=>{
            if (this._disconnected) return;
            $257947e92926277a$export$2e2bcd8739ae039.log("Socket closed.", event);
            this._cleanup();
            this._disconnected = true;
            this.emit($78455e22dea96b8c$export$3b5c4a4b6354f023.Disconnected);
        };
        // Take care of the queue of connections if necessary and make sure Peer knows
        // socket is open.
        this._socket.onopen = ()=>{
            if (this._disconnected) return;
            this._sendQueuedMessages();
            $257947e92926277a$export$2e2bcd8739ae039.log("Socket open");
            this._scheduleHeartbeat();
        };
    }
    _scheduleHeartbeat() {
        this._wsPingTimer = setTimeout(()=>{
            this._sendHeartbeat();
        }, this.pingInterval);
    }
    _sendHeartbeat() {
        if (!this._wsOpen()) {
            $257947e92926277a$export$2e2bcd8739ae039.log(`Cannot send heartbeat, because socket closed`);
            return;
        }
        const message = JSON.stringify({
            type: $78455e22dea96b8c$export$adb4a1754da6f10d.Heartbeat
        });
        this._socket.send(message);
        this._scheduleHeartbeat();
    }
    /** Is the websocket currently open? */ _wsOpen() {
        return !!this._socket && this._socket.readyState === 1;
    }
    /** Send queued messages. */ _sendQueuedMessages() {
        //Create copy of queue and clear it,
        //because send method push the message back to queue if smth will go wrong
        const copiedQueue = [
            ...this._messagesQueue
        ];
        this._messagesQueue = [];
        for (const message of copiedQueue)this.send(message);
    }
    /** Exposed send for DC & Peer. */ send(data) {
        if (this._disconnected) return;
        // If we didn't get an ID yet, we can't yet send anything so we should queue
        // up these messages.
        if (!this._id) {
            this._messagesQueue.push(data);
            return;
        }
        if (!data.type) {
            this.emit($78455e22dea96b8c$export$3b5c4a4b6354f023.Error, "Invalid message");
            return;
        }
        if (!this._wsOpen()) return;
        const message = JSON.stringify(data);
        this._socket.send(message);
    }
    close() {
        if (this._disconnected) return;
        this._cleanup();
        this._disconnected = true;
    }
    _cleanup() {
        if (this._socket) {
            this._socket.onopen = this._socket.onmessage = this._socket.onclose = null;
            this._socket.close();
            this._socket = undefined;
        }
        clearTimeout(this._wsPingTimer);
    }
}
class $b82fb8fc0514bfc1$export$89e6bb5ad64bf4a {
    constructor(connection){
        this.connection = connection;
    }
    /** Returns a PeerConnection object set up correctly (for data, media). */ startConnection(options) {
        const peerConnection = this._startPeerConnection();
        // Set the connection's PC.
        this.connection.peerConnection = peerConnection;
        if (this.connection.type === $78455e22dea96b8c$export$3157d57b4135e3bc.Media && options._stream) this._addTracksToConnection(options._stream, peerConnection);
        // What do we need to do now?
        if (options.originator) {
            const dataConnection = this.connection;
            const config = {
                ordered: !!options.reliable
            };
            const dataChannel = peerConnection.createDataChannel(dataConnection.label, config);
            dataConnection._initializeDataChannel(dataChannel);
            this._makeOffer();
        } else this.handleSDP("OFFER", options.sdp);
    }
    /** Start a PC. */ _startPeerConnection() {
        $257947e92926277a$export$2e2bcd8739ae039.log("Creating RTCPeerConnection.");
        const peerConnection = new RTCPeerConnection(this.connection.provider.options.config);
        this._setupListeners(peerConnection);
        return peerConnection;
    }
    /** Set up various WebRTC listeners. */ _setupListeners(peerConnection) {
        const peerId = this.connection.peer;
        const connectionId = this.connection.connectionId;
        const connectionType = this.connection.type;
        const provider = this.connection.provider;
        $257947e92926277a$export$2e2bcd8739ae039.log("Listening for ICE candidates.");
        peerConnection.onicecandidate = (evt)=>{
            if (!evt.candidate || !evt.candidate.candidate) return;
            $257947e92926277a$export$2e2bcd8739ae039.log(`Received ICE candidates for ${peerId}:`, evt.candidate);
            provider.socket.send({
                type: $78455e22dea96b8c$export$adb4a1754da6f10d.Candidate,
                payload: {
                    candidate: evt.candidate,
                    type: connectionType,
                    connectionId: connectionId
                },
                dst: peerId
            });
        };
        peerConnection.oniceconnectionstatechange = ()=>{
            switch(peerConnection.iceConnectionState){
                case "failed":
                    $257947e92926277a$export$2e2bcd8739ae039.log("iceConnectionState is failed, closing connections to " + peerId);
                    this.connection.emitError($78455e22dea96b8c$export$7974935686149686.NegotiationFailed, "Negotiation of connection to " + peerId + " failed.");
                    this.connection.close();
                    break;
                case "closed":
                    $257947e92926277a$export$2e2bcd8739ae039.log("iceConnectionState is closed, closing connections to " + peerId);
                    this.connection.emitError($78455e22dea96b8c$export$7974935686149686.ConnectionClosed, "Connection to " + peerId + " closed.");
                    this.connection.close();
                    break;
                case "disconnected":
                    $257947e92926277a$export$2e2bcd8739ae039.log("iceConnectionState changed to disconnected on the connection with " + peerId);
                    break;
                case "completed":
                    peerConnection.onicecandidate = ()=>{};
                    break;
            }
            this.connection.emit("iceStateChanged", peerConnection.iceConnectionState);
        };
        $257947e92926277a$export$2e2bcd8739ae039.log("Listening for data channel");
        // Fired between offer and answer, so options should already be saved
        // in the options hash.
        peerConnection.ondatachannel = (evt)=>{
            $257947e92926277a$export$2e2bcd8739ae039.log("Received data channel");
            const dataChannel = evt.channel;
            const connection = provider.getConnection(peerId, connectionId);
            connection._initializeDataChannel(dataChannel);
        };
        $257947e92926277a$export$2e2bcd8739ae039.log("Listening for remote stream");
        peerConnection.ontrack = (evt)=>{
            $257947e92926277a$export$2e2bcd8739ae039.log("Received remote stream");
            const stream = evt.streams[0];
            const connection = provider.getConnection(peerId, connectionId);
            if (connection.type === $78455e22dea96b8c$export$3157d57b4135e3bc.Media) {
                const mediaConnection = connection;
                this._addStreamToMediaConnection(stream, mediaConnection);
            }
        };
    }
    cleanup() {
        $257947e92926277a$export$2e2bcd8739ae039.log("Cleaning up PeerConnection to " + this.connection.peer);
        const peerConnection = this.connection.peerConnection;
        if (!peerConnection) return;
        this.connection.peerConnection = null;
        //unsubscribe from all PeerConnection's events
        peerConnection.onicecandidate = peerConnection.oniceconnectionstatechange = peerConnection.ondatachannel = peerConnection.ontrack = ()=>{};
        const peerConnectionNotClosed = peerConnection.signalingState !== "closed";
        let dataChannelNotClosed = false;
        const dataChannel = this.connection.dataChannel;
        if (dataChannel) dataChannelNotClosed = !!dataChannel.readyState && dataChannel.readyState !== "closed";
        if (peerConnectionNotClosed || dataChannelNotClosed) peerConnection.close();
    }
    async _makeOffer() {
        const peerConnection = this.connection.peerConnection;
        const provider = this.connection.provider;
        try {
            const offer = await peerConnection.createOffer(this.connection.options.constraints);
            $257947e92926277a$export$2e2bcd8739ae039.log("Created offer.");
            if (this.connection.options.sdpTransform && typeof this.connection.options.sdpTransform === "function") offer.sdp = this.connection.options.sdpTransform(offer.sdp) || offer.sdp;
            try {
                await peerConnection.setLocalDescription(offer);
                $257947e92926277a$export$2e2bcd8739ae039.log("Set localDescription:", offer, `for:${this.connection.peer}`);
                let payload = {
                    sdp: offer,
                    type: this.connection.type,
                    connectionId: this.connection.connectionId,
                    metadata: this.connection.metadata
                };
                if (this.connection.type === $78455e22dea96b8c$export$3157d57b4135e3bc.Data) {
                    const dataConnection = this.connection;
                    payload = {
                        ...payload,
                        label: dataConnection.label,
                        reliable: dataConnection.reliable,
                        serialization: dataConnection.serialization
                    };
                }
                provider.socket.send({
                    type: $78455e22dea96b8c$export$adb4a1754da6f10d.Offer,
                    payload: payload,
                    dst: this.connection.peer
                });
            } catch (err) {
                // TODO: investigate why _makeOffer is being called from the answer
                if (err != "OperationError: Failed to set local offer sdp: Called in wrong state: kHaveRemoteOffer") {
                    provider.emitError($78455e22dea96b8c$export$9547aaa2e39030ff.WebRTC, err);
                    $257947e92926277a$export$2e2bcd8739ae039.log("Failed to setLocalDescription, ", err);
                }
            }
        } catch (err_1) {
            provider.emitError($78455e22dea96b8c$export$9547aaa2e39030ff.WebRTC, err_1);
            $257947e92926277a$export$2e2bcd8739ae039.log("Failed to createOffer, ", err_1);
        }
    }
    async _makeAnswer() {
        const peerConnection = this.connection.peerConnection;
        const provider = this.connection.provider;
        try {
            const answer = await peerConnection.createAnswer();
            $257947e92926277a$export$2e2bcd8739ae039.log("Created answer.");
            if (this.connection.options.sdpTransform && typeof this.connection.options.sdpTransform === "function") answer.sdp = this.connection.options.sdpTransform(answer.sdp) || answer.sdp;
            try {
                await peerConnection.setLocalDescription(answer);
                $257947e92926277a$export$2e2bcd8739ae039.log(`Set localDescription:`, answer, `for:${this.connection.peer}`);
                provider.socket.send({
                    type: $78455e22dea96b8c$export$adb4a1754da6f10d.Answer,
                    payload: {
                        sdp: answer,
                        type: this.connection.type,
                        connectionId: this.connection.connectionId
                    },
                    dst: this.connection.peer
                });
            } catch (err) {
                provider.emitError($78455e22dea96b8c$export$9547aaa2e39030ff.WebRTC, err);
                $257947e92926277a$export$2e2bcd8739ae039.log("Failed to setLocalDescription, ", err);
            }
        } catch (err_1) {
            provider.emitError($78455e22dea96b8c$export$9547aaa2e39030ff.WebRTC, err_1);
            $257947e92926277a$export$2e2bcd8739ae039.log("Failed to create answer, ", err_1);
        }
    }
    /** Handle an SDP. */ async handleSDP(type, sdp) {
        sdp = new RTCSessionDescription(sdp);
        const peerConnection = this.connection.peerConnection;
        const provider = this.connection.provider;
        $257947e92926277a$export$2e2bcd8739ae039.log("Setting remote description", sdp);
        const self = this;
        try {
            await peerConnection.setRemoteDescription(sdp);
            $257947e92926277a$export$2e2bcd8739ae039.log(`Set remoteDescription:${type} for:${this.connection.peer}`);
            if (type === "OFFER") await self._makeAnswer();
        } catch (err) {
            provider.emitError($78455e22dea96b8c$export$9547aaa2e39030ff.WebRTC, err);
            $257947e92926277a$export$2e2bcd8739ae039.log("Failed to setRemoteDescription, ", err);
        }
    }
    /** Handle a candidate. */ async handleCandidate(ice) {
        $257947e92926277a$export$2e2bcd8739ae039.log(`handleCandidate:`, ice);
        try {
            await this.connection.peerConnection.addIceCandidate(ice);
            $257947e92926277a$export$2e2bcd8739ae039.log(`Added ICE candidate for:${this.connection.peer}`);
        } catch (err) {
            this.connection.provider.emitError($78455e22dea96b8c$export$9547aaa2e39030ff.WebRTC, err);
            $257947e92926277a$export$2e2bcd8739ae039.log("Failed to handleCandidate, ", err);
        }
    }
    _addTracksToConnection(stream, peerConnection) {
        $257947e92926277a$export$2e2bcd8739ae039.log(`add tracks from stream ${stream.id} to peer connection`);
        if (!peerConnection.addTrack) return $257947e92926277a$export$2e2bcd8739ae039.error(`Your browser does't support RTCPeerConnection#addTrack. Ignored.`);
        stream.getTracks().forEach((track)=>{
            peerConnection.addTrack(track, stream);
        });
    }
    _addStreamToMediaConnection(stream, mediaConnection) {
        $257947e92926277a$export$2e2bcd8739ae039.log(`add stream ${stream.id} to media connection ${mediaConnection.connectionId}`);
        mediaConnection.addStream(stream);
    }
}
class $23779d1881157a18$export$6a678e589c8a4542 extends $c4dcfd1d1ea86647$exports.EventEmitter {
    /**
	 * Emits a typed error message.
	 *
	 * @internal
	 */ emitError(type, err) {
        $257947e92926277a$export$2e2bcd8739ae039.error("Error:", err);
        // @ts-ignore
        this.emit("error", new $23779d1881157a18$export$98871882f492de82(`${type}`, err));
    }
}
class $23779d1881157a18$export$98871882f492de82 extends Error {
    /**
	 * @internal
	 */ constructor(type, err){
        if (typeof err === "string") super(err);
        else {
            super();
            Object.assign(this, err);
        }
        this.type = type;
    }
}
class $5045192fc6d387ba$export$23a2a68283c24d80 extends $23779d1881157a18$export$6a678e589c8a4542 {
    /**
	 * Whether the media connection is active (e.g. your call has been answered).
	 * You can check this if you want to set a maximum wait time for a one-sided call.
	 */ get open() {
        return this._open;
    }
    constructor(/**
		 * The ID of the peer on the other end of this connection.
		 */ peer, provider, options){
        super(), this.peer = peer, this.provider = provider, this.options = options, this._open = false;
        this.metadata = options.metadata;
    }
}
class $5c1d08c7c57da9a3$export$4a84e95a2324ac29 extends $5045192fc6d387ba$export$23a2a68283c24d80 {
    static #_ = this.ID_PREFIX = "mc_";
    /**
	 * For media connections, this is always 'media'.
	 */ get type() {
        return $78455e22dea96b8c$export$3157d57b4135e3bc.Media;
    }
    get localStream() {
        return this._localStream;
    }
    get remoteStream() {
        return this._remoteStream;
    }
    constructor(peerId, provider, options){
        super(peerId, provider, options);
        this._localStream = this.options._stream;
        this.connectionId = this.options.connectionId || $5c1d08c7c57da9a3$export$4a84e95a2324ac29.ID_PREFIX + $4f4134156c446392$export$7debb50ef11d5e0b.randomToken();
        this._negotiator = new $b82fb8fc0514bfc1$export$89e6bb5ad64bf4a(this);
        if (this._localStream) this._negotiator.startConnection({
            _stream: this._localStream,
            originator: true
        });
    }
    /** Called by the Negotiator when the DataChannel is ready. */ _initializeDataChannel(dc) {
        this.dataChannel = dc;
        this.dataChannel.onopen = ()=>{
            $257947e92926277a$export$2e2bcd8739ae039.log(`DC#${this.connectionId} dc connection success`);
            this.emit("willCloseOnRemote");
        };
        this.dataChannel.onclose = ()=>{
            $257947e92926277a$export$2e2bcd8739ae039.log(`DC#${this.connectionId} dc closed for:`, this.peer);
            this.close();
        };
    }
    addStream(remoteStream) {
        $257947e92926277a$export$2e2bcd8739ae039.log("Receiving stream", remoteStream);
        this._remoteStream = remoteStream;
        super.emit("stream", remoteStream); // Should we call this `open`?
    }
    /**
	 * @internal
	 */ handleMessage(message) {
        const type = message.type;
        const payload = message.payload;
        switch(message.type){
            case $78455e22dea96b8c$export$adb4a1754da6f10d.Answer:
                // Forward to negotiator
                this._negotiator.handleSDP(type, payload.sdp);
                this._open = true;
                break;
            case $78455e22dea96b8c$export$adb4a1754da6f10d.Candidate:
                this._negotiator.handleCandidate(payload.candidate);
                break;
            default:
                $257947e92926277a$export$2e2bcd8739ae039.warn(`Unrecognized message type:${type} from peer:${this.peer}`);
                break;
        }
    }
    /**
     * When receiving a {@apilink PeerEvents | `call`} event on a peer, you can call
     * `answer` on the media connection provided by the callback to accept the call
     * and optionally send your own media stream.

     *
     * @param stream A WebRTC media stream.
     * @param options
     * @returns
     */ answer(stream, options = {}) {
        if (this._localStream) {
            $257947e92926277a$export$2e2bcd8739ae039.warn("Local stream already exists on this MediaConnection. Are you answering a call twice?");
            return;
        }
        this._localStream = stream;
        if (options && options.sdpTransform) this.options.sdpTransform = options.sdpTransform;
        this._negotiator.startConnection({
            ...this.options._payload,
            _stream: stream
        });
        // Retrieve lost messages stored because PeerConnection not set up.
        const messages = this.provider._getMessages(this.connectionId);
        for (const message of messages)this.handleMessage(message);
        this._open = true;
    }
    /**
	 * Exposed functionality for users.
	 */ /**
	 * Closes the media connection.
	 */ close() {
        if (this._negotiator) {
            this._negotiator.cleanup();
            this._negotiator = null;
        }
        this._localStream = null;
        this._remoteStream = null;
        if (this.provider) {
            this.provider._removeConnection(this);
            this.provider = null;
        }
        if (this.options && this.options._stream) this.options._stream = null;
        if (!this.open) return;
        this._open = false;
        super.emit("close");
    }
}
class $abf266641927cd89$export$2c4e825dc9120f87 {
    constructor(_options){
        this._options = _options;
    }
    _buildRequest(method) {
        const protocol = this._options.secure ? "https" : "http";
        const { host: host, port: port, path: path, key: key } = this._options;
        const url = new URL(`${protocol}://${host}:${port}${path}${key}/${method}`);
        // TODO: Why timestamp, why random?
        url.searchParams.set("ts", `${Date.now()}${Math.random()}`);
        url.searchParams.set("version", $520832d44ba058c8$export$83d89fbfd8236492);
        return fetch(url.href, {
            referrerPolicy: this._options.referrerPolicy
        });
    }
    /** Get a unique ID from the server via XHR and initialize with it. */ async retrieveId() {
        try {
            const response = await this._buildRequest("id");
            if (response.status !== 200) throw new Error(`Error. Status:${response.status}`);
            return response.text();
        } catch (error) {
            $257947e92926277a$export$2e2bcd8739ae039.error("Error retrieving ID", error);
            let pathError = "";
            if (this._options.path === "/" && this._options.host !== $4f4134156c446392$export$7debb50ef11d5e0b.CLOUD_HOST) pathError = " If you passed in a `path` to your self-hosted PeerServer, you'll also need to pass in that same path when creating a new Peer.";
            throw new Error("Could not get an ID from the server." + pathError);
        }
    }
    /** @deprecated */ async listAllPeers() {
        try {
            const response = await this._buildRequest("peers");
            if (response.status !== 200) {
                if (response.status === 401) {
                    let helpfulError = "";
                    if (this._options.host === $4f4134156c446392$export$7debb50ef11d5e0b.CLOUD_HOST) helpfulError = "It looks like you're using the cloud server. You can email team@peerjs.com to enable peer listing for your API key.";
                    else helpfulError = "You need to enable `allow_discovery` on your self-hosted PeerServer to use this feature.";
                    throw new Error("It doesn't look like you have permission to list peers IDs. " + helpfulError);
                }
                throw new Error(`Error. Status:${response.status}`);
            }
            return response.json();
        } catch (error) {
            $257947e92926277a$export$2e2bcd8739ae039.error("Error retrieving list peers", error);
            throw new Error("Could not get list peers from the server." + error);
        }
    }
}
class $6366c4ca161bc297$export$d365f7ad9d7df9c9 extends $5045192fc6d387ba$export$23a2a68283c24d80 {
    static #_ = this.ID_PREFIX = "dc_";
    static #_2 = this.MAX_BUFFERED_AMOUNT = 8388608;
    get type() {
        return $78455e22dea96b8c$export$3157d57b4135e3bc.Data;
    }
    constructor(peerId, provider, options){
        super(peerId, provider, options);
        this.connectionId = this.options.connectionId || $6366c4ca161bc297$export$d365f7ad9d7df9c9.ID_PREFIX + $0e5fd1585784c252$export$4e61f672936bec77();
        this.label = this.options.label || this.connectionId;
        this.reliable = !!this.options.reliable;
        this._negotiator = new $b82fb8fc0514bfc1$export$89e6bb5ad64bf4a(this);
        this._negotiator.startConnection(this.options._payload || {
            originator: true,
            reliable: this.reliable
        });
    }
    /** Called by the Negotiator when the DataChannel is ready. */ _initializeDataChannel(dc) {
        this.dataChannel = dc;
        this.dataChannel.onopen = ()=>{
            $257947e92926277a$export$2e2bcd8739ae039.log(`DC#${this.connectionId} dc connection success`);
            this._open = true;
            this.emit("open");
        };
        this.dataChannel.onmessage = (e)=>{
            $257947e92926277a$export$2e2bcd8739ae039.log(`DC#${this.connectionId} dc onmessage:`, e.data);
        // this._handleDataMessage(e);
        };
        this.dataChannel.onclose = ()=>{
            $257947e92926277a$export$2e2bcd8739ae039.log(`DC#${this.connectionId} dc closed for:`, this.peer);
            this.close();
        };
    }
    /**
	 * Exposed functionality for users.
	 */ /** Allows user to close connection. */ close(options) {
        if (options?.flush) {
            this.send({
                __peerData: {
                    type: "close"
                }
            });
            return;
        }
        if (this._negotiator) {
            this._negotiator.cleanup();
            this._negotiator = null;
        }
        if (this.provider) {
            this.provider._removeConnection(this);
            this.provider = null;
        }
        if (this.dataChannel) {
            this.dataChannel.onopen = null;
            this.dataChannel.onmessage = null;
            this.dataChannel.onclose = null;
            this.dataChannel = null;
        }
        if (!this.open) return;
        this._open = false;
        super.emit("close");
    }
    /** Allows user to send data. */ send(data, chunked = false) {
        if (!this.open) {
            this.emitError($78455e22dea96b8c$export$49ae800c114df41d.NotOpenYet, "Connection is not open. You should listen for the `open` event before sending messages.");
            return;
        }
        return this._send(data, chunked);
    }
    async handleMessage(message) {
        const payload = message.payload;
        switch(message.type){
            case $78455e22dea96b8c$export$adb4a1754da6f10d.Answer:
                await this._negotiator.handleSDP(message.type, payload.sdp);
                break;
            case $78455e22dea96b8c$export$adb4a1754da6f10d.Candidate:
                await this._negotiator.handleCandidate(payload.candidate);
                break;
            default:
                $257947e92926277a$export$2e2bcd8739ae039.warn("Unrecognized message type:", message.type, "from peer:", this.peer);
                break;
        }
    }
}
class $a229bedbcaa6ca23$export$ff7c9d4c11d94e8b extends $6366c4ca161bc297$export$d365f7ad9d7df9c9 {
    get bufferSize() {
        return this._bufferSize;
    }
    _initializeDataChannel(dc) {
        super._initializeDataChannel(dc);
        this.dataChannel.binaryType = "arraybuffer";
        this.dataChannel.addEventListener("message", (e)=>this._handleDataMessage(e));
    }
    _bufferedSend(msg) {
        if (this._buffering || !this._trySend(msg)) {
            this._buffer.push(msg);
            this._bufferSize = this._buffer.length;
        }
    }
    // Returns true if the send succeeds.
    _trySend(msg) {
        if (!this.open) return false;
        if (this.dataChannel.bufferedAmount > $6366c4ca161bc297$export$d365f7ad9d7df9c9.MAX_BUFFERED_AMOUNT) {
            this._buffering = true;
            setTimeout(()=>{
                this._buffering = false;
                this._tryBuffer();
            }, 50);
            return false;
        }
        try {
            this.dataChannel.send(msg);
        } catch (e) {
            $257947e92926277a$export$2e2bcd8739ae039.error(`DC#:${this.connectionId} Error when sending:`, e);
            this._buffering = true;
            this.close();
            return false;
        }
        return true;
    }
    // Try to send the first message in the buffer.
    _tryBuffer() {
        if (!this.open) return;
        if (this._buffer.length === 0) return;
        const msg = this._buffer[0];
        if (this._trySend(msg)) {
            this._buffer.shift();
            this._bufferSize = this._buffer.length;
            this._tryBuffer();
        }
    }
    close(options) {
        if (options?.flush) {
            this.send({
                __peerData: {
                    type: "close"
                }
            });
            return;
        }
        this._buffer = [];
        this._bufferSize = 0;
        super.close();
    }
    constructor(...args){
        super(...args), this._buffer = [], this._bufferSize = 0, this._buffering = false;
    }
}
class $9fcfddb3ae148f88$export$f0a5a64d5bb37108 extends $a229bedbcaa6ca23$export$ff7c9d4c11d94e8b {
    close(options) {
        super.close(options);
        this._chunkedData = {};
    }
    constructor(peerId, provider, options){
        super(peerId, provider, options), this.chunker = new $fcbcc7538a6776d5$export$f1c5f4c9cb95390b(), this.serialization = $78455e22dea96b8c$export$89f507cf986a947.Binary, this._chunkedData = {};
    }
    // Handles a DataChannel message.
    _handleDataMessage({ data: data }) {
        const deserializedData = (0, _peerjsJsBinarypack.unpack)(data);
        // PeerJS specific message
        const peerData = deserializedData["__peerData"];
        if (peerData) {
            if (peerData.type === "close") {
                this.close();
                return;
            }
            // Chunked data -- piece things back together.
            // @ts-ignore
            this._handleChunk(deserializedData);
            return;
        }
        this.emit("data", deserializedData);
    }
    _handleChunk(data) {
        const id = data.__peerData;
        const chunkInfo = this._chunkedData[id] || {
            data: [],
            count: 0,
            total: data.total
        };
        chunkInfo.data[data.n] = new Uint8Array(data.data);
        chunkInfo.count++;
        this._chunkedData[id] = chunkInfo;
        if (chunkInfo.total === chunkInfo.count) {
            // Clean up before making the recursive call to `_handleDataMessage`.
            delete this._chunkedData[id];
            // We've received all the chunks--time to construct the complete data.
            // const data = new Blob(chunkInfo.data);
            const data = $fcbcc7538a6776d5$export$52c89ebcdc4f53f2(chunkInfo.data);
            this._handleDataMessage({
                data: data
            });
        }
    }
    _send(data, chunked) {
        const blob = (0, _peerjsJsBinarypack.pack)(data);
        if (blob instanceof Promise) return this._send_blob(blob);
        if (!chunked && blob.byteLength > this.chunker.chunkedMTU) {
            this._sendChunks(blob);
            return;
        }
        this._bufferedSend(blob);
    }
    async _send_blob(blobPromise) {
        const blob = await blobPromise;
        if (blob.byteLength > this.chunker.chunkedMTU) {
            this._sendChunks(blob);
            return;
        }
        this._bufferedSend(blob);
    }
    _sendChunks(blob) {
        const blobs = this.chunker.chunk(blob);
        $257947e92926277a$export$2e2bcd8739ae039.log(`DC#${this.connectionId} Try to send ${blobs.length} chunks...`);
        for (const blob of blobs)this.send(blob, true);
    }
}
class $bbaee3f15f714663$export$6f88fe47d32c9c94 extends $a229bedbcaa6ca23$export$ff7c9d4c11d94e8b {
    _handleDataMessage({ data: data }) {
        super.emit("data", data);
    }
    _send(data, _chunked) {
        this._bufferedSend(data);
    }
    constructor(...args){
        super(...args), this.serialization = $78455e22dea96b8c$export$89f507cf986a947.None;
    }
}
class $817f931e3f9096cf$export$48880ac635f47186 extends $a229bedbcaa6ca23$export$ff7c9d4c11d94e8b {
    // Handles a DataChannel message.
    _handleDataMessage({ data: data }) {
        const deserializedData = this.parse(this.decoder.decode(data));
        // PeerJS specific message
        const peerData = deserializedData["__peerData"];
        if (peerData && peerData.type === "close") {
            this.close();
            return;
        }
        this.emit("data", deserializedData);
    }
    _send(data, _chunked) {
        const encodedData = this.encoder.encode(this.stringify(data));
        if (encodedData.byteLength >= $4f4134156c446392$export$7debb50ef11d5e0b.chunkedMTU) {
            this.emitError($78455e22dea96b8c$export$49ae800c114df41d.MessageToBig, "Message too big for JSON channel");
            return;
        }
        this._bufferedSend(encodedData);
    }
    constructor(...args){
        super(...args), this.serialization = $78455e22dea96b8c$export$89f507cf986a947.JSON, this.encoder = new TextEncoder(), this.decoder = new TextDecoder(), this.stringify = JSON.stringify, this.parse = JSON.parse;
    }
}
class $416260bce337df90$var$PeerOptions {
}
class $416260bce337df90$export$ecd1fc136c422448 extends $23779d1881157a18$export$6a678e589c8a4542 {
    static #_ = this.DEFAULT_KEY = "peerjs";
    /**
	 * The brokering ID of this peer
	 *
	 * If no ID was specified in {@apilink Peer | the constructor},
	 * this will be `undefined` until the {@apilink PeerEvents | `open`} event is emitted.
	 */ get id() {
        return this._id;
    }
    get options() {
        return this._options;
    }
    get open() {
        return this._open;
    }
    /**
	 * @internal
	 */ get socket() {
        return this._socket;
    }
    /**
	 * A hash of all connections associated with this peer, keyed by the remote peer's ID.
	 * @deprecated
	 * Return type will change from Object to Map<string,[]>
	 */ get connections() {
        const plainConnections = Object.create(null);
        for (const [k, v] of this._connections)plainConnections[k] = v;
        return plainConnections;
    }
    /**
	 * true if this peer and all of its connections can no longer be used.
	 */ get destroyed() {
        return this._destroyed;
    }
    /**
	 * false if there is an active connection to the PeerServer.
	 */ get disconnected() {
        return this._disconnected;
    }
    constructor(id, options){
        super(), this._serializers = {
            raw: $bbaee3f15f714663$export$6f88fe47d32c9c94,
            json: $817f931e3f9096cf$export$48880ac635f47186,
            binary: $9fcfddb3ae148f88$export$f0a5a64d5bb37108,
            "binary-utf8": $9fcfddb3ae148f88$export$f0a5a64d5bb37108,
            default: $9fcfddb3ae148f88$export$f0a5a64d5bb37108
        }, this._id = null, this._lastServerId = null, this._destroyed = false // Connections have been killed
        , this._disconnected = false // Connection to PeerServer killed but P2P connections still active
        , this._open = false // Sockets and such are not yet open.
        , this._connections = new Map() // All connections for this peer.
        , this._lostMessages = new Map() // src => [list of messages]
        ;
        let userId;
        // Deal with overloading
        if (id && id.constructor == Object) options = id;
        else if (id) userId = id.toString();
        // Configurize options
        options = {
            debug: 0,
            host: $4f4134156c446392$export$7debb50ef11d5e0b.CLOUD_HOST,
            port: $4f4134156c446392$export$7debb50ef11d5e0b.CLOUD_PORT,
            path: "/",
            key: $416260bce337df90$export$ecd1fc136c422448.DEFAULT_KEY,
            token: $4f4134156c446392$export$7debb50ef11d5e0b.randomToken(),
            config: $4f4134156c446392$export$7debb50ef11d5e0b.defaultConfig,
            referrerPolicy: "strict-origin-when-cross-origin",
            serializers: {},
            ...options
        };
        this._options = options;
        this._serializers = {
            ...this._serializers,
            ...this.options.serializers
        };
        // Detect relative URL host.
        if (this._options.host === "/") this._options.host = window.location.hostname;
        // Set path correctly.
        if (this._options.path) {
            if (this._options.path[0] !== "/") this._options.path = "/" + this._options.path;
            if (this._options.path[this._options.path.length - 1] !== "/") this._options.path += "/";
        }
        // Set whether we use SSL to same as current host
        if (this._options.secure === undefined && this._options.host !== $4f4134156c446392$export$7debb50ef11d5e0b.CLOUD_HOST) this._options.secure = $4f4134156c446392$export$7debb50ef11d5e0b.isSecure();
        else if (this._options.host == $4f4134156c446392$export$7debb50ef11d5e0b.CLOUD_HOST) this._options.secure = true;
        // Set a custom log function if present
        if (this._options.logFunction) $257947e92926277a$export$2e2bcd8739ae039.setLogFunction(this._options.logFunction);
        $257947e92926277a$export$2e2bcd8739ae039.logLevel = this._options.debug || 0;
        this._api = new $abf266641927cd89$export$2c4e825dc9120f87(options);
        this._socket = this._createServerConnection();
        // Sanity checks
        // Ensure WebRTC supported
        if (!$4f4134156c446392$export$7debb50ef11d5e0b.supports.audioVideo && !$4f4134156c446392$export$7debb50ef11d5e0b.supports.data) {
            this._delayedAbort($78455e22dea96b8c$export$9547aaa2e39030ff.BrowserIncompatible, "The current browser does not support WebRTC");
            return;
        }
        // Ensure alphanumeric id
        if (!!userId && !$4f4134156c446392$export$7debb50ef11d5e0b.validateId(userId)) {
            this._delayedAbort($78455e22dea96b8c$export$9547aaa2e39030ff.InvalidID, `ID "${userId}" is invalid`);
            return;
        }
        if (userId) this._initialize(userId);
        else this._api.retrieveId().then((id)=>this._initialize(id)).catch((error)=>this._abort($78455e22dea96b8c$export$9547aaa2e39030ff.ServerError, error));
    }
    _createServerConnection() {
        const socket = new $8f5bfa60836d261d$export$4798917dbf149b79(this._options.secure, this._options.host, this._options.port, this._options.path, this._options.key, this._options.pingInterval);
        socket.on($78455e22dea96b8c$export$3b5c4a4b6354f023.Message, (data)=>{
            this._handleMessage(data);
        });
        socket.on($78455e22dea96b8c$export$3b5c4a4b6354f023.Error, (error)=>{
            this._abort($78455e22dea96b8c$export$9547aaa2e39030ff.SocketError, error);
        });
        socket.on($78455e22dea96b8c$export$3b5c4a4b6354f023.Disconnected, ()=>{
            if (this.disconnected) return;
            this.emitError($78455e22dea96b8c$export$9547aaa2e39030ff.Network, "Lost connection to server.");
            this.disconnect();
        });
        socket.on($78455e22dea96b8c$export$3b5c4a4b6354f023.Close, ()=>{
            if (this.disconnected) return;
            this._abort($78455e22dea96b8c$export$9547aaa2e39030ff.SocketClosed, "Underlying socket is already closed.");
        });
        return socket;
    }
    /** Initialize a connection with the server. */ _initialize(id) {
        this._id = id;
        this.socket.start(id, this._options.token);
    }
    /** Handles messages from the server. */ _handleMessage(message) {
        const type = message.type;
        const payload = message.payload;
        const peerId = message.src;
        switch(type){
            case $78455e22dea96b8c$export$adb4a1754da6f10d.Open:
                this._lastServerId = this.id;
                this._open = true;
                this.emit("open", this.id);
                break;
            case $78455e22dea96b8c$export$adb4a1754da6f10d.Error:
                this._abort($78455e22dea96b8c$export$9547aaa2e39030ff.ServerError, payload.msg);
                break;
            case $78455e22dea96b8c$export$adb4a1754da6f10d.IdTaken:
                this._abort($78455e22dea96b8c$export$9547aaa2e39030ff.UnavailableID, `ID "${this.id}" is taken`);
                break;
            case $78455e22dea96b8c$export$adb4a1754da6f10d.InvalidKey:
                this._abort($78455e22dea96b8c$export$9547aaa2e39030ff.InvalidKey, `API KEY "${this._options.key}" is invalid`);
                break;
            case $78455e22dea96b8c$export$adb4a1754da6f10d.Leave:
                $257947e92926277a$export$2e2bcd8739ae039.log(`Received leave message from ${peerId}`);
                this._cleanupPeer(peerId);
                this._connections.delete(peerId);
                break;
            case $78455e22dea96b8c$export$adb4a1754da6f10d.Expire:
                this.emitError($78455e22dea96b8c$export$9547aaa2e39030ff.PeerUnavailable, `Could not connect to peer ${peerId}`);
                break;
            case $78455e22dea96b8c$export$adb4a1754da6f10d.Offer:
                {
                    // we should consider switching this to CALL/CONNECT, but this is the least breaking option.
                    const connectionId = payload.connectionId;
                    let connection = this.getConnection(peerId, connectionId);
                    if (connection) {
                        connection.close();
                        $257947e92926277a$export$2e2bcd8739ae039.warn(`Offer received for existing Connection ID:${connectionId}`);
                    }
                    // Create a new connection.
                    if (payload.type === $78455e22dea96b8c$export$3157d57b4135e3bc.Media) {
                        const mediaConnection = new $5c1d08c7c57da9a3$export$4a84e95a2324ac29(peerId, this, {
                            connectionId: connectionId,
                            _payload: payload,
                            metadata: payload.metadata
                        });
                        connection = mediaConnection;
                        this._addConnection(peerId, connection);
                        this.emit("call", mediaConnection);
                    } else if (payload.type === $78455e22dea96b8c$export$3157d57b4135e3bc.Data) {
                        const dataConnection = new this._serializers[payload.serialization](peerId, this, {
                            connectionId: connectionId,
                            _payload: payload,
                            metadata: payload.metadata,
                            label: payload.label,
                            serialization: payload.serialization,
                            reliable: payload.reliable
                        });
                        connection = dataConnection;
                        this._addConnection(peerId, connection);
                        this.emit("connection", dataConnection);
                    } else {
                        $257947e92926277a$export$2e2bcd8739ae039.warn(`Received malformed connection type:${payload.type}`);
                        return;
                    }
                    // Find messages.
                    const messages = this._getMessages(connectionId);
                    for (const message of messages)connection.handleMessage(message);
                    break;
                }
            default:
                {
                    if (!payload) {
                        $257947e92926277a$export$2e2bcd8739ae039.warn(`You received a malformed message from ${peerId} of type ${type}`);
                        return;
                    }
                    const connectionId = payload.connectionId;
                    const connection = this.getConnection(peerId, connectionId);
                    if (connection && connection.peerConnection) connection.handleMessage(message);
                    else if (connectionId) this._storeMessage(connectionId, message);
                    else $257947e92926277a$export$2e2bcd8739ae039.warn("You received an unrecognized message:", message);
                    break;
                }
        }
    }
    /** Stores messages without a set up connection, to be claimed later. */ _storeMessage(connectionId, message) {
        if (!this._lostMessages.has(connectionId)) this._lostMessages.set(connectionId, []);
        this._lostMessages.get(connectionId).push(message);
    }
    /**
	 * Retrieve messages from lost message store
	 * @internal
	 */ //TODO Change it to private
    _getMessages(connectionId) {
        const messages = this._lostMessages.get(connectionId);
        if (messages) {
            this._lostMessages.delete(connectionId);
            return messages;
        }
        return [];
    }
    /**
	 * Connects to the remote peer specified by id and returns a data connection.
	 * @param peer The brokering ID of the remote peer (their {@apilink Peer.id}).
	 * @param options for specifying details about Peer Connection
	 */ connect(peer, options = {}) {
        options = {
            serialization: "default",
            ...options
        };
        if (this.disconnected) {
            $257947e92926277a$export$2e2bcd8739ae039.warn("You cannot connect to a new Peer because you called .disconnect() on this Peer and ended your connection with the server. You can create a new Peer to reconnect, or call reconnect on this peer if you believe its ID to still be available.");
            this.emitError($78455e22dea96b8c$export$9547aaa2e39030ff.Disconnected, "Cannot connect to new Peer after disconnecting from server.");
            return;
        }
        const dataConnection = new this._serializers[options.serialization](peer, this, options);
        this._addConnection(peer, dataConnection);
        return dataConnection;
    }
    /**
	 * Calls the remote peer specified by id and returns a media connection.
	 * @param peer The brokering ID of the remote peer (their peer.id).
	 * @param stream The caller's media stream
	 * @param options Metadata associated with the connection, passed in by whoever initiated the connection.
	 */ call(peer, stream, options = {}) {
        if (this.disconnected) {
            $257947e92926277a$export$2e2bcd8739ae039.warn("You cannot connect to a new Peer because you called .disconnect() on this Peer and ended your connection with the server. You can create a new Peer to reconnect.");
            this.emitError($78455e22dea96b8c$export$9547aaa2e39030ff.Disconnected, "Cannot connect to new Peer after disconnecting from server.");
            return;
        }
        if (!stream) {
            $257947e92926277a$export$2e2bcd8739ae039.error("To call a peer, you must provide a stream from your browser's `getUserMedia`.");
            return;
        }
        const mediaConnection = new $5c1d08c7c57da9a3$export$4a84e95a2324ac29(peer, this, {
            ...options,
            _stream: stream
        });
        this._addConnection(peer, mediaConnection);
        return mediaConnection;
    }
    /** Add a data/media connection to this peer. */ _addConnection(peerId, connection) {
        $257947e92926277a$export$2e2bcd8739ae039.log(`add connection ${connection.type}:${connection.connectionId} to peerId:${peerId}`);
        if (!this._connections.has(peerId)) this._connections.set(peerId, []);
        this._connections.get(peerId).push(connection);
    }
    //TODO should be private
    _removeConnection(connection) {
        const connections = this._connections.get(connection.peer);
        if (connections) {
            const index = connections.indexOf(connection);
            if (index !== -1) connections.splice(index, 1);
        }
        //remove from lost messages
        this._lostMessages.delete(connection.connectionId);
    }
    /** Retrieve a data/media connection for this peer. */ getConnection(peerId, connectionId) {
        const connections = this._connections.get(peerId);
        if (!connections) return null;
        for (const connection of connections){
            if (connection.connectionId === connectionId) return connection;
        }
        return null;
    }
    _delayedAbort(type, message) {
        setTimeout(()=>{
            this._abort(type, message);
        }, 0);
    }
    /**
	 * Emits an error message and destroys the Peer.
	 * The Peer is not destroyed if it's in a disconnected state, in which case
	 * it retains its disconnected state and its existing connections.
	 */ _abort(type, message) {
        $257947e92926277a$export$2e2bcd8739ae039.error("Aborting!");
        this.emitError(type, message);
        if (!this._lastServerId) this.destroy();
        else this.disconnect();
    }
    /**
	 * Destroys the Peer: closes all active connections as well as the connection
	 * to the server.
	 *
	 * :::caution
	 * This cannot be undone; the respective peer object will no longer be able
	 * to create or receive any connections, its ID will be forfeited on the server,
	 * and all of its data and media connections will be closed.
	 * :::
	 */ destroy() {
        if (this.destroyed) return;
        $257947e92926277a$export$2e2bcd8739ae039.log(`Destroy peer with ID:${this.id}`);
        this.disconnect();
        this._cleanup();
        this._destroyed = true;
        this.emit("close");
    }
    /** Disconnects every connection on this peer. */ _cleanup() {
        for (const peerId of this._connections.keys()){
            this._cleanupPeer(peerId);
            this._connections.delete(peerId);
        }
        this.socket.removeAllListeners();
    }
    /** Closes all connections to this peer. */ _cleanupPeer(peerId) {
        const connections = this._connections.get(peerId);
        if (!connections) return;
        for (const connection of connections)connection.close();
    }
    /**
	 * Disconnects the Peer's connection to the PeerServer. Does not close any
	 *  active connections.
	 * Warning: The peer can no longer create or accept connections after being
	 *  disconnected. It also cannot reconnect to the server.
	 */ disconnect() {
        if (this.disconnected) return;
        const currentId = this.id;
        $257947e92926277a$export$2e2bcd8739ae039.log(`Disconnect peer with ID:${currentId}`);
        this._disconnected = true;
        this._open = false;
        this.socket.close();
        this._lastServerId = currentId;
        this._id = null;
        this.emit("disconnected", currentId);
    }
    /** Attempts to reconnect with the same ID.
	 *
	 * Only {@apilink Peer.disconnect | disconnected peers} can be reconnected.
	 * Destroyed peers cannot be reconnected.
	 * If the connection fails (as an example, if the peer's old ID is now taken),
	 * the peer's existing connections will not close, but any associated errors events will fire.
	 */ reconnect() {
        if (this.disconnected && !this.destroyed) {
            $257947e92926277a$export$2e2bcd8739ae039.log(`Attempting reconnection to server with ID ${this._lastServerId}`);
            this._disconnected = false;
            this._initialize(this._lastServerId);
        } else if (this.destroyed) throw new Error("This peer cannot reconnect to the server. It has already been destroyed.");
        else if (!this.disconnected && !this.open) $257947e92926277a$export$2e2bcd8739ae039.error("In a hurry? We're still trying to make the initial connection!");
        else throw new Error(`Peer ${this.id} cannot reconnect because it is not disconnected from the server!`);
    }
    /**
	 * Get a list of available peer IDs. If you're running your own server, you'll
	 * want to set allow_discovery: true in the PeerServer options. If you're using
	 * the cloud server, email team@peerjs.com to get the functionality enabled for
	 * your key.
	 */ listAllPeers(cb = (_)=>{}) {
        this._api.listAllPeers().then((peers)=>cb(peers)).catch((error)=>this._abort($78455e22dea96b8c$export$9547aaa2e39030ff.ServerError, error));
    }
}
class $20dbe68149d7aad9$export$72aa44612e2200cd extends $6366c4ca161bc297$export$d365f7ad9d7df9c9 {
    constructor(peerId, provider, options){
        super(peerId, provider, {
            ...options,
            reliable: true
        }), this._CHUNK_SIZE = 32768, this._splitStream = new TransformStream({
            transform: (chunk, controller)=>{
                for(let split = 0; split < chunk.length; split += this._CHUNK_SIZE)controller.enqueue(chunk.subarray(split, split + this._CHUNK_SIZE));
            }
        }), this._rawSendStream = new WritableStream({
            write: async (chunk, controller)=>{
                const openEvent = new Promise((resolve)=>this.dataChannel.addEventListener("bufferedamountlow", resolve, {
                        once: true
                    }));
                // if we can send the chunk now, send it
                // if not, we wait until at least half of the sending buffer is free again
                await (this.dataChannel.bufferedAmount <= $6366c4ca161bc297$export$d365f7ad9d7df9c9.MAX_BUFFERED_AMOUNT - chunk.byteLength || openEvent);
                // TODO: what can go wrong here?
                try {
                    this.dataChannel.send(chunk);
                } catch (e) {
                    $257947e92926277a$export$2e2bcd8739ae039.error(`DC#:${this.connectionId} Error when sending:`, e);
                    controller.error(e);
                    this.close();
                }
            }
        }), this.writer = this._splitStream.writable.getWriter(), this._rawReadStream = new ReadableStream({
            start: (controller)=>{
                this.once("open", ()=>{
                    this.dataChannel.addEventListener("message", (e)=>{
                        controller.enqueue(e.data);
                    });
                });
            }
        });
        this._splitStream.readable.pipeTo(this._rawSendStream);
    }
    _initializeDataChannel(dc) {
        super._initializeDataChannel(dc);
        this.dataChannel.binaryType = "arraybuffer";
        this.dataChannel.bufferedAmountLowThreshold = $6366c4ca161bc297$export$d365f7ad9d7df9c9.MAX_BUFFERED_AMOUNT / 2;
    }
}
class $6e39230ab36396ad$export$80f5de1a66c4d624 extends $20dbe68149d7aad9$export$72aa44612e2200cd {
    constructor(peerId, provider, options){
        super(peerId, provider, options), this.serialization = "MsgPack", this._encoder = new (0, _msgpack.Encoder)();
        (async ()=>{
            for await (const msg of (0, _msgpack.decodeMultiStream)(this._rawReadStream)){
                // @ts-ignore
                if (msg.__peerData?.type === "close") {
                    this.close();
                    return;
                }
                this.emit("data", msg);
            }
        })();
    }
    _send(data) {
        return this.writer.write(this._encoder.encode(data));
    }
}
class $1e0aff16be2c328e$export$d72c7bf8eef50853 extends $416260bce337df90$export$ecd1fc136c422448 {
    constructor(...args){
        super(...args), this._serializers = {
            MsgPack: $6e39230ab36396ad$export$80f5de1a66c4d624,
            default: $6e39230ab36396ad$export$80f5de1a66c4d624
        };
    }
}
var $dd0187d7f28e386f$export$2e2bcd8739ae039 = $416260bce337df90$export$ecd1fc136c422448;

},{"peerjs-js-binarypack":"kzuYo","webrtc-adapter":"27l12","@msgpack/msgpack":"lFLkL","@parcel/transformer-js/src/esmodule-helpers.js":"jnFvT"}],"kzuYo":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "unpack", ()=>$0cfd7828ad59115f$export$417857010dc9287f);
parcelHelpers.export(exports, "pack", ()=>$0cfd7828ad59115f$export$2a703dbb0cb35339);
parcelHelpers.export(exports, "Packer", ()=>$0cfd7828ad59115f$export$b9ec4b114aa40074);
class $e8379818650e2442$export$93654d4f2d6cd524 {
    constructor(){
        this.encoder = new TextEncoder();
        this._pieces = [];
        this._parts = [];
    }
    append_buffer(data) {
        this.flush();
        this._parts.push(data);
    }
    append(data) {
        this._pieces.push(data);
    }
    flush() {
        if (this._pieces.length > 0) {
            const buf = new Uint8Array(this._pieces);
            this._parts.push(buf);
            this._pieces = [];
        }
    }
    toArrayBuffer() {
        const buffer = [];
        for (const part of this._parts)buffer.push(part);
        return $e8379818650e2442$var$concatArrayBuffers(buffer).buffer;
    }
}
function $e8379818650e2442$var$concatArrayBuffers(bufs) {
    let size = 0;
    for (const buf of bufs)size += buf.byteLength;
    const result = new Uint8Array(size);
    let offset = 0;
    for (const buf of bufs){
        const view = new Uint8Array(buf.buffer, buf.byteOffset, buf.byteLength);
        result.set(view, offset);
        offset += buf.byteLength;
    }
    return result;
}
function $0cfd7828ad59115f$export$417857010dc9287f(data) {
    const unpacker = new $0cfd7828ad59115f$var$Unpacker(data);
    return unpacker.unpack();
}
function $0cfd7828ad59115f$export$2a703dbb0cb35339(data) {
    const packer = new $0cfd7828ad59115f$export$b9ec4b114aa40074();
    const res = packer.pack(data);
    if (res instanceof Promise) return res.then(()=>packer.getBuffer());
    return packer.getBuffer();
}
class $0cfd7828ad59115f$var$Unpacker {
    constructor(data){
        this.index = 0;
        this.dataBuffer = data;
        this.dataView = new Uint8Array(this.dataBuffer);
        this.length = this.dataBuffer.byteLength;
    }
    unpack() {
        const type = this.unpack_uint8();
        if (type < 0x80) return type;
        else if ((type ^ 0xe0) < 0x20) return (type ^ 0xe0) - 0x20;
        let size;
        if ((size = type ^ 0xa0) <= 0x0f) return this.unpack_raw(size);
        else if ((size = type ^ 0xb0) <= 0x0f) return this.unpack_string(size);
        else if ((size = type ^ 0x90) <= 0x0f) return this.unpack_array(size);
        else if ((size = type ^ 0x80) <= 0x0f) return this.unpack_map(size);
        switch(type){
            case 0xc0:
                return null;
            case 0xc1:
                return undefined;
            case 0xc2:
                return false;
            case 0xc3:
                return true;
            case 0xca:
                return this.unpack_float();
            case 0xcb:
                return this.unpack_double();
            case 0xcc:
                return this.unpack_uint8();
            case 0xcd:
                return this.unpack_uint16();
            case 0xce:
                return this.unpack_uint32();
            case 0xcf:
                return this.unpack_uint64();
            case 0xd0:
                return this.unpack_int8();
            case 0xd1:
                return this.unpack_int16();
            case 0xd2:
                return this.unpack_int32();
            case 0xd3:
                return this.unpack_int64();
            case 0xd4:
                return undefined;
            case 0xd5:
                return undefined;
            case 0xd6:
                return undefined;
            case 0xd7:
                return undefined;
            case 0xd8:
                size = this.unpack_uint16();
                return this.unpack_string(size);
            case 0xd9:
                size = this.unpack_uint32();
                return this.unpack_string(size);
            case 0xda:
                size = this.unpack_uint16();
                return this.unpack_raw(size);
            case 0xdb:
                size = this.unpack_uint32();
                return this.unpack_raw(size);
            case 0xdc:
                size = this.unpack_uint16();
                return this.unpack_array(size);
            case 0xdd:
                size = this.unpack_uint32();
                return this.unpack_array(size);
            case 0xde:
                size = this.unpack_uint16();
                return this.unpack_map(size);
            case 0xdf:
                size = this.unpack_uint32();
                return this.unpack_map(size);
        }
    }
    unpack_uint8() {
        const byte = this.dataView[this.index] & 0xff;
        this.index++;
        return byte;
    }
    unpack_uint16() {
        const bytes = this.read(2);
        const uint16 = (bytes[0] & 0xff) * 256 + (bytes[1] & 0xff);
        this.index += 2;
        return uint16;
    }
    unpack_uint32() {
        const bytes = this.read(4);
        const uint32 = ((bytes[0] * 256 + bytes[1]) * 256 + bytes[2]) * 256 + bytes[3];
        this.index += 4;
        return uint32;
    }
    unpack_uint64() {
        const bytes = this.read(8);
        const uint64 = ((((((bytes[0] * 256 + bytes[1]) * 256 + bytes[2]) * 256 + bytes[3]) * 256 + bytes[4]) * 256 + bytes[5]) * 256 + bytes[6]) * 256 + bytes[7];
        this.index += 8;
        return uint64;
    }
    unpack_int8() {
        const uint8 = this.unpack_uint8();
        return uint8 < 0x80 ? uint8 : uint8 - 256;
    }
    unpack_int16() {
        const uint16 = this.unpack_uint16();
        return uint16 < 0x8000 ? uint16 : uint16 - 65536;
    }
    unpack_int32() {
        const uint32 = this.unpack_uint32();
        return uint32 < 2 ** 31 ? uint32 : uint32 - 2 ** 32;
    }
    unpack_int64() {
        const uint64 = this.unpack_uint64();
        return uint64 < 2 ** 63 ? uint64 : uint64 - 2 ** 64;
    }
    unpack_raw(size) {
        if (this.length < this.index + size) throw new Error(`BinaryPackFailure: index is out of range ${this.index} ${size} ${this.length}`);
        const buf = this.dataBuffer.slice(this.index, this.index + size);
        this.index += size;
        return buf;
    }
    unpack_string(size) {
        const bytes = this.read(size);
        let i = 0;
        let str = "";
        let c;
        let code;
        while(i < size){
            c = bytes[i];
            // The length of a UTF-8 sequence is specified in the first byte:
            // 0xxxxxxx means length 1,
            // 110xxxxx means length 2,
            // 1110xxxx means length 3,
            // 11110xxx means length 4.
            // 10xxxxxx is for non-initial bytes.
            if (c < 0xa0) {
                // One-byte sequence: bits 0xxxxxxx
                code = c;
                i++;
            } else if ((c ^ 0xc0) < 0x20) {
                // Two-byte sequence: bits 110xxxxx 10xxxxxx
                code = (c & 0x1f) << 6 | bytes[i + 1] & 0x3f;
                i += 2;
            } else if ((c ^ 0xe0) < 0x10) {
                // Three-byte sequence: bits 1110xxxx 10xxxxxx 10xxxxxx
                code = (c & 0x0f) << 12 | (bytes[i + 1] & 0x3f) << 6 | bytes[i + 2] & 0x3f;
                i += 3;
            } else {
                // Four-byte sequence: bits 11110xxx 10xxxxxx 10xxxxxx 10xxxxxx
                code = (c & 0x07) << 18 | (bytes[i + 1] & 0x3f) << 12 | (bytes[i + 2] & 0x3f) << 6 | bytes[i + 3] & 0x3f;
                i += 4;
            }
            str += String.fromCodePoint(code);
        }
        this.index += size;
        return str;
    }
    unpack_array(size) {
        const objects = new Array(size);
        for(let i = 0; i < size; i++)objects[i] = this.unpack();
        return objects;
    }
    unpack_map(size) {
        const map = {};
        for(let i = 0; i < size; i++){
            const key = this.unpack();
            map[key] = this.unpack();
        }
        return map;
    }
    unpack_float() {
        const uint32 = this.unpack_uint32();
        const sign = uint32 >> 31;
        const exp = (uint32 >> 23 & 0xff) - 127;
        const fraction = uint32 & 0x7fffff | 0x800000;
        return (sign === 0 ? 1 : -1) * fraction * 2 ** (exp - 23);
    }
    unpack_double() {
        const h32 = this.unpack_uint32();
        const l32 = this.unpack_uint32();
        const sign = h32 >> 31;
        const exp = (h32 >> 20 & 0x7ff) - 1023;
        const hfrac = h32 & 0xfffff | 0x100000;
        const frac = hfrac * 2 ** (exp - 20) + l32 * 2 ** (exp - 52);
        return (sign === 0 ? 1 : -1) * frac;
    }
    read(length) {
        const j = this.index;
        if (j + length <= this.length) return this.dataView.subarray(j, j + length);
        else throw new Error("BinaryPackFailure: read index out of range");
    }
}
class $0cfd7828ad59115f$export$b9ec4b114aa40074 {
    getBuffer() {
        return this._bufferBuilder.toArrayBuffer();
    }
    pack(value) {
        if (typeof value === "string") this.pack_string(value);
        else if (typeof value === "number") {
            if (Math.floor(value) === value) this.pack_integer(value);
            else this.pack_double(value);
        } else if (typeof value === "boolean") {
            if (value === true) this._bufferBuilder.append(0xc3);
            else if (value === false) this._bufferBuilder.append(0xc2);
        } else if (value === undefined) this._bufferBuilder.append(0xc0);
        else if (typeof value === "object") {
            if (value === null) this._bufferBuilder.append(0xc0);
            else {
                const constructor = value.constructor;
                if (value instanceof Array) {
                    const res = this.pack_array(value);
                    if (res instanceof Promise) return res.then(()=>this._bufferBuilder.flush());
                } else if (value instanceof ArrayBuffer) this.pack_bin(new Uint8Array(value));
                else if ("BYTES_PER_ELEMENT" in value) {
                    const v = value;
                    this.pack_bin(new Uint8Array(v.buffer, v.byteOffset, v.byteLength));
                } else if (value instanceof Date) this.pack_string(value.toString());
                else if (value instanceof Blob) return value.arrayBuffer().then((buffer)=>{
                    this.pack_bin(new Uint8Array(buffer));
                    this._bufferBuilder.flush();
                });
                else if (constructor == Object || constructor.toString().startsWith("class")) {
                    const res = this.pack_object(value);
                    if (res instanceof Promise) return res.then(()=>this._bufferBuilder.flush());
                } else throw new Error(`Type "${constructor.toString()}" not yet supported`);
            }
        } else throw new Error(`Type "${typeof value}" not yet supported`);
        this._bufferBuilder.flush();
    }
    pack_bin(blob) {
        const length = blob.length;
        if (length <= 0x0f) this.pack_uint8(0xa0 + length);
        else if (length <= 0xffff) {
            this._bufferBuilder.append(0xda);
            this.pack_uint16(length);
        } else if (length <= 0xffffffff) {
            this._bufferBuilder.append(0xdb);
            this.pack_uint32(length);
        } else throw new Error("Invalid length");
        this._bufferBuilder.append_buffer(blob);
    }
    pack_string(str) {
        const encoded = this._textEncoder.encode(str);
        const length = encoded.length;
        if (length <= 0x0f) this.pack_uint8(0xb0 + length);
        else if (length <= 0xffff) {
            this._bufferBuilder.append(0xd8);
            this.pack_uint16(length);
        } else if (length <= 0xffffffff) {
            this._bufferBuilder.append(0xd9);
            this.pack_uint32(length);
        } else throw new Error("Invalid length");
        this._bufferBuilder.append_buffer(encoded);
    }
    pack_array(ary) {
        const length = ary.length;
        if (length <= 0x0f) this.pack_uint8(0x90 + length);
        else if (length <= 0xffff) {
            this._bufferBuilder.append(0xdc);
            this.pack_uint16(length);
        } else if (length <= 0xffffffff) {
            this._bufferBuilder.append(0xdd);
            this.pack_uint32(length);
        } else throw new Error("Invalid length");
        const packNext = (index)=>{
            if (index < length) {
                const res = this.pack(ary[index]);
                if (res instanceof Promise) return res.then(()=>packNext(index + 1));
                return packNext(index + 1);
            }
        };
        return packNext(0);
    }
    pack_integer(num) {
        if (num >= -32 && num <= 0x7f) this._bufferBuilder.append(num & 0xff);
        else if (num >= 0x00 && num <= 0xff) {
            this._bufferBuilder.append(0xcc);
            this.pack_uint8(num);
        } else if (num >= -128 && num <= 0x7f) {
            this._bufferBuilder.append(0xd0);
            this.pack_int8(num);
        } else if (num >= 0x0000 && num <= 0xffff) {
            this._bufferBuilder.append(0xcd);
            this.pack_uint16(num);
        } else if (num >= -32768 && num <= 0x7fff) {
            this._bufferBuilder.append(0xd1);
            this.pack_int16(num);
        } else if (num >= 0x00000000 && num <= 0xffffffff) {
            this._bufferBuilder.append(0xce);
            this.pack_uint32(num);
        } else if (num >= -2147483648 && num <= 0x7fffffff) {
            this._bufferBuilder.append(0xd2);
            this.pack_int32(num);
        } else if (num >= -9223372036854776000 && num <= 0x7fffffffffffffff) {
            this._bufferBuilder.append(0xd3);
            this.pack_int64(num);
        } else if (num >= 0x0000000000000000 && num <= 0xffffffffffffffff) {
            this._bufferBuilder.append(0xcf);
            this.pack_uint64(num);
        } else throw new Error("Invalid integer");
    }
    pack_double(num) {
        let sign = 0;
        if (num < 0) {
            sign = 1;
            num = -num;
        }
        const exp = Math.floor(Math.log(num) / Math.LN2);
        const frac0 = num / 2 ** exp - 1;
        const frac1 = Math.floor(frac0 * 2 ** 52);
        const b32 = 2 ** 32;
        const h32 = sign << 31 | exp + 1023 << 20 | frac1 / b32 & 0x0fffff;
        const l32 = frac1 % b32;
        this._bufferBuilder.append(0xcb);
        this.pack_int32(h32);
        this.pack_int32(l32);
    }
    pack_object(obj) {
        const keys = Object.keys(obj);
        const length = keys.length;
        if (length <= 0x0f) this.pack_uint8(0x80 + length);
        else if (length <= 0xffff) {
            this._bufferBuilder.append(0xde);
            this.pack_uint16(length);
        } else if (length <= 0xffffffff) {
            this._bufferBuilder.append(0xdf);
            this.pack_uint32(length);
        } else throw new Error("Invalid length");
        const packNext = (index)=>{
            if (index < keys.length) {
                const prop = keys[index];
                // eslint-disable-next-line no-prototype-builtins
                if (obj.hasOwnProperty(prop)) {
                    this.pack(prop);
                    const res = this.pack(obj[prop]);
                    if (res instanceof Promise) return res.then(()=>packNext(index + 1));
                }
                return packNext(index + 1);
            }
        };
        return packNext(0);
    }
    pack_uint8(num) {
        this._bufferBuilder.append(num);
    }
    pack_uint16(num) {
        this._bufferBuilder.append(num >> 8);
        this._bufferBuilder.append(num & 0xff);
    }
    pack_uint32(num) {
        const n = num & 0xffffffff;
        this._bufferBuilder.append((n & 0xff000000) >>> 24);
        this._bufferBuilder.append((n & 0x00ff0000) >>> 16);
        this._bufferBuilder.append((n & 0x0000ff00) >>> 8);
        this._bufferBuilder.append(n & 0x000000ff);
    }
    pack_uint64(num) {
        const high = num / 2 ** 32;
        const low = num % 2 ** 32;
        this._bufferBuilder.append((high & 0xff000000) >>> 24);
        this._bufferBuilder.append((high & 0x00ff0000) >>> 16);
        this._bufferBuilder.append((high & 0x0000ff00) >>> 8);
        this._bufferBuilder.append(high & 0x000000ff);
        this._bufferBuilder.append((low & 0xff000000) >>> 24);
        this._bufferBuilder.append((low & 0x00ff0000) >>> 16);
        this._bufferBuilder.append((low & 0x0000ff00) >>> 8);
        this._bufferBuilder.append(low & 0x000000ff);
    }
    pack_int8(num) {
        this._bufferBuilder.append(num & 0xff);
    }
    pack_int16(num) {
        this._bufferBuilder.append((num & 0xff00) >> 8);
        this._bufferBuilder.append(num & 0xff);
    }
    pack_int32(num) {
        this._bufferBuilder.append(num >>> 24 & 0xff);
        this._bufferBuilder.append((num & 0x00ff0000) >>> 16);
        this._bufferBuilder.append((num & 0x0000ff00) >>> 8);
        this._bufferBuilder.append(num & 0x000000ff);
    }
    pack_int64(num) {
        const high = Math.floor(num / 2 ** 32);
        const low = num % 2 ** 32;
        this._bufferBuilder.append((high & 0xff000000) >>> 24);
        this._bufferBuilder.append((high & 0x00ff0000) >>> 16);
        this._bufferBuilder.append((high & 0x0000ff00) >>> 8);
        this._bufferBuilder.append(high & 0x000000ff);
        this._bufferBuilder.append((low & 0xff000000) >>> 24);
        this._bufferBuilder.append((low & 0x00ff0000) >>> 16);
        this._bufferBuilder.append((low & 0x0000ff00) >>> 8);
        this._bufferBuilder.append(low & 0x000000ff);
    }
    constructor(){
        this._bufferBuilder = new $e8379818650e2442$export$93654d4f2d6cd524();
        this._textEncoder = new TextEncoder();
    }
}

},{"@parcel/transformer-js/src/esmodule-helpers.js":"jnFvT"}],"27l12":[function(require,module,exports,__globalThis) {
/*
 *  Copyright (c) 2016 The WebRTC project authors. All Rights Reserved.
 *
 *  Use of this source code is governed by a BSD-style license
 *  that can be found in the LICENSE file in the root of the source
 *  tree.
 */ /* eslint-env node */ var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _adapterFactoryJs = require("./adapter_factory.js");
'use strict';
const adapter = (0, _adapterFactoryJs.adapterFactory)({
    window: typeof window === 'undefined' ? undefined : window
});
exports.default = adapter;

},{"./adapter_factory.js":"fshKD","@parcel/transformer-js/src/esmodule-helpers.js":"jnFvT"}],"fshKD":[function(require,module,exports,__globalThis) {
/*
 *  Copyright (c) 2016 The WebRTC project authors. All Rights Reserved.
 *
 *  Use of this source code is governed by a BSD-style license
 *  that can be found in the LICENSE file in the root of the source
 *  tree.
 */ var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
// Shimming starts here.
parcelHelpers.export(exports, "adapterFactory", ()=>adapterFactory);
var _utils = require("./utils");
// Browser shims.
var _chromeShim = require("./chrome/chrome_shim");
var _firefoxShim = require("./firefox/firefox_shim");
var _safariShim = require("./safari/safari_shim");
var _commonShim = require("./common_shim");
var _sdp = require("sdp");
function adapterFactory({ window } = {}, options = {
    shimChrome: true,
    shimFirefox: true,
    shimSafari: true
}) {
    // Utils.
    const logging = _utils.log;
    const browserDetails = _utils.detectBrowser(window);
    const adapter = {
        browserDetails,
        commonShim: _commonShim,
        extractVersion: _utils.extractVersion,
        disableLog: _utils.disableLog,
        disableWarnings: _utils.disableWarnings,
        sdp: // Expose sdp as a convenience. For production apps include directly.
        _sdp
    };
    // Shim browser if found.
    switch(browserDetails.browser){
        case 'chrome':
            if (!_chromeShim || !_chromeShim.shimPeerConnection || !options.shimChrome) {
                logging('Chrome shim is not included in this adapter release.');
                return adapter;
            }
            if (browserDetails.version === null) {
                logging('Chrome shim can not determine version, not shimming.');
                return adapter;
            }
            logging('adapter.js shimming chrome.');
            // Export to the adapter global object visible in the browser.
            adapter.browserShim = _chromeShim;
            // Must be called before shimPeerConnection.
            _commonShim.shimAddIceCandidateNullOrEmpty(window, browserDetails);
            _commonShim.shimParameterlessSetLocalDescription(window, browserDetails);
            _chromeShim.shimGetUserMedia(window, browserDetails);
            _chromeShim.shimMediaStream(window, browserDetails);
            _chromeShim.shimPeerConnection(window, browserDetails);
            _chromeShim.shimOnTrack(window, browserDetails);
            _chromeShim.shimAddTrackRemoveTrack(window, browserDetails);
            _chromeShim.shimGetSendersWithDtmf(window, browserDetails);
            _chromeShim.shimSenderReceiverGetStats(window, browserDetails);
            _chromeShim.fixNegotiationNeeded(window, browserDetails);
            _commonShim.shimRTCIceCandidate(window, browserDetails);
            _commonShim.shimRTCIceCandidateRelayProtocol(window, browserDetails);
            _commonShim.shimConnectionState(window, browserDetails);
            _commonShim.shimMaxMessageSize(window, browserDetails);
            _commonShim.shimSendThrowTypeError(window, browserDetails);
            _commonShim.removeExtmapAllowMixed(window, browserDetails);
            break;
        case 'firefox':
            if (!_firefoxShim || !_firefoxShim.shimPeerConnection || !options.shimFirefox) {
                logging('Firefox shim is not included in this adapter release.');
                return adapter;
            }
            logging('adapter.js shimming firefox.');
            // Export to the adapter global object visible in the browser.
            adapter.browserShim = _firefoxShim;
            // Must be called before shimPeerConnection.
            _commonShim.shimAddIceCandidateNullOrEmpty(window, browserDetails);
            _commonShim.shimParameterlessSetLocalDescription(window, browserDetails);
            _firefoxShim.shimGetUserMedia(window, browserDetails);
            _firefoxShim.shimPeerConnection(window, browserDetails);
            _firefoxShim.shimOnTrack(window, browserDetails);
            _firefoxShim.shimRemoveStream(window, browserDetails);
            _firefoxShim.shimSenderGetStats(window, browserDetails);
            _firefoxShim.shimReceiverGetStats(window, browserDetails);
            _firefoxShim.shimRTCDataChannel(window, browserDetails);
            _firefoxShim.shimAddTransceiver(window, browserDetails);
            _firefoxShim.shimGetParameters(window, browserDetails);
            _firefoxShim.shimCreateOffer(window, browserDetails);
            _firefoxShim.shimCreateAnswer(window, browserDetails);
            _commonShim.shimRTCIceCandidate(window, browserDetails);
            _commonShim.shimConnectionState(window, browserDetails);
            _commonShim.shimMaxMessageSize(window, browserDetails);
            _commonShim.shimSendThrowTypeError(window, browserDetails);
            break;
        case 'safari':
            if (!_safariShim || !options.shimSafari) {
                logging('Safari shim is not included in this adapter release.');
                return adapter;
            }
            logging('adapter.js shimming safari.');
            // Export to the adapter global object visible in the browser.
            adapter.browserShim = _safariShim;
            // Must be called before shimCallbackAPI.
            _commonShim.shimAddIceCandidateNullOrEmpty(window, browserDetails);
            _commonShim.shimParameterlessSetLocalDescription(window, browserDetails);
            _safariShim.shimRTCIceServerUrls(window, browserDetails);
            _safariShim.shimCreateOfferLegacy(window, browserDetails);
            _safariShim.shimCallbacksAPI(window, browserDetails);
            _safariShim.shimLocalStreamsAPI(window, browserDetails);
            _safariShim.shimRemoteStreamsAPI(window, browserDetails);
            _safariShim.shimTrackEventTransceiver(window, browserDetails);
            _safariShim.shimGetUserMedia(window, browserDetails);
            _safariShim.shimAudioContext(window, browserDetails);
            _commonShim.shimRTCIceCandidate(window, browserDetails);
            _commonShim.shimRTCIceCandidateRelayProtocol(window, browserDetails);
            _commonShim.shimMaxMessageSize(window, browserDetails);
            _commonShim.shimSendThrowTypeError(window, browserDetails);
            _commonShim.removeExtmapAllowMixed(window, browserDetails);
            break;
        default:
            logging('Unsupported browser!');
            break;
    }
    return adapter;
}

},{"./utils":"130jN","./chrome/chrome_shim":"gnS8k","./firefox/firefox_shim":"bXIO7","./safari/safari_shim":"8DlmS","./common_shim":"bXwPT","sdp":"ipaHk","@parcel/transformer-js/src/esmodule-helpers.js":"jnFvT"}],"130jN":[function(require,module,exports,__globalThis) {
/*
 *  Copyright (c) 2016 The WebRTC project authors. All Rights Reserved.
 *
 *  Use of this source code is governed by a BSD-style license
 *  that can be found in the LICENSE file in the root of the source
 *  tree.
 */ /* eslint-env node */ var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
/**
 * Extract browser version out of the provided user agent string.
 *
 * @param {!string} uastring userAgent string.
 * @param {!string} expr Regular expression used as match criteria.
 * @param {!number} pos position in the version string to be returned.
 * @return {!number} browser version.
 */ parcelHelpers.export(exports, "extractVersion", ()=>extractVersion);
// Wraps the peerconnection event eventNameToWrap in a function
// which returns the modified event object (or false to prevent
// the event).
parcelHelpers.export(exports, "wrapPeerConnectionEvent", ()=>wrapPeerConnectionEvent);
parcelHelpers.export(exports, "disableLog", ()=>disableLog);
/**
 * Disable or enable deprecation warnings
 * @param {!boolean} bool set to true to disable warnings.
 */ parcelHelpers.export(exports, "disableWarnings", ()=>disableWarnings);
parcelHelpers.export(exports, "log", ()=>log);
/**
 * Shows a deprecation warning suggesting the modern and spec-compatible API.
 */ parcelHelpers.export(exports, "deprecated", ()=>deprecated);
/**
 * Browser detector.
 *
 * @return {object} result containing browser and version
 *     properties.
 */ parcelHelpers.export(exports, "detectBrowser", ()=>detectBrowser);
/**
 * Remove all empty objects and undefined values
 * from a nested object -- an enhanced and vanilla version
 * of Lodash's `compact`.
 */ parcelHelpers.export(exports, "compactObject", ()=>compactObject);
/* iterates the stats graph recursively. */ parcelHelpers.export(exports, "walkStats", ()=>walkStats);
/* filter getStats for a sender/receiver track. */ parcelHelpers.export(exports, "filterStats", ()=>filterStats);
'use strict';
let logDisabled_ = true;
let deprecationWarnings_ = true;
function extractVersion(uastring, expr, pos) {
    const match = uastring.match(expr);
    return match && match.length >= pos && parseFloat(match[pos], 10);
}
function wrapPeerConnectionEvent(window1, eventNameToWrap, wrapper) {
    if (!window1.RTCPeerConnection) return;
    const proto = window1.RTCPeerConnection.prototype;
    const nativeAddEventListener = proto.addEventListener;
    proto.addEventListener = function(nativeEventName, cb) {
        if (nativeEventName !== eventNameToWrap) return nativeAddEventListener.apply(this, arguments);
        const wrappedCallback = (e)=>{
            const modifiedEvent = wrapper(e);
            if (modifiedEvent) {
                if (cb.handleEvent) cb.handleEvent(modifiedEvent);
                else cb(modifiedEvent);
            }
        };
        this._eventMap = this._eventMap || {};
        if (!this._eventMap[eventNameToWrap]) this._eventMap[eventNameToWrap] = new Map();
        this._eventMap[eventNameToWrap].set(cb, wrappedCallback);
        return nativeAddEventListener.apply(this, [
            nativeEventName,
            wrappedCallback
        ]);
    };
    const nativeRemoveEventListener = proto.removeEventListener;
    proto.removeEventListener = function(nativeEventName, cb) {
        if (nativeEventName !== eventNameToWrap || !this._eventMap || !this._eventMap[eventNameToWrap]) return nativeRemoveEventListener.apply(this, arguments);
        if (!this._eventMap[eventNameToWrap].has(cb)) return nativeRemoveEventListener.apply(this, arguments);
        const unwrappedCb = this._eventMap[eventNameToWrap].get(cb);
        this._eventMap[eventNameToWrap].delete(cb);
        if (this._eventMap[eventNameToWrap].size === 0) delete this._eventMap[eventNameToWrap];
        if (Object.keys(this._eventMap).length === 0) delete this._eventMap;
        return nativeRemoveEventListener.apply(this, [
            nativeEventName,
            unwrappedCb
        ]);
    };
    Object.defineProperty(proto, 'on' + eventNameToWrap, {
        get () {
            return this['_on' + eventNameToWrap];
        },
        set (cb) {
            if (this['_on' + eventNameToWrap]) {
                this.removeEventListener(eventNameToWrap, this['_on' + eventNameToWrap]);
                delete this['_on' + eventNameToWrap];
            }
            if (cb) this.addEventListener(eventNameToWrap, this['_on' + eventNameToWrap] = cb);
        },
        enumerable: true,
        configurable: true
    });
}
function disableLog(bool) {
    if (typeof bool !== 'boolean') return new Error('Argument type: ' + typeof bool + '. Please use a boolean.');
    logDisabled_ = bool;
    return bool ? 'adapter.js logging disabled' : 'adapter.js logging enabled';
}
function disableWarnings(bool) {
    if (typeof bool !== 'boolean') return new Error('Argument type: ' + typeof bool + '. Please use a boolean.');
    deprecationWarnings_ = !bool;
    return 'adapter.js deprecation warnings ' + (bool ? 'disabled' : 'enabled');
}
function log() {
    if (typeof window === 'object') {
        if (logDisabled_) return;
        if (typeof console !== 'undefined' && typeof console.log === 'function') console.log.apply(console, arguments);
    }
}
function deprecated(oldMethod, newMethod) {
    if (!deprecationWarnings_) return;
    console.warn(oldMethod + ' is deprecated, please use ' + newMethod + ' instead.');
}
function detectBrowser(window1) {
    // Returned result object.
    const result = {
        browser: null,
        version: null
    };
    // Fail early if it's not a browser
    if (typeof window1 === 'undefined' || !window1.navigator || !window1.navigator.userAgent) {
        result.browser = 'Not a browser.';
        return result;
    }
    const { navigator } = window1;
    // Prefer navigator.userAgentData.
    if (navigator.userAgentData && navigator.userAgentData.brands) {
        const chromium = navigator.userAgentData.brands.find((brand)=>{
            return brand.brand === 'Chromium';
        });
        if (chromium) return {
            browser: 'chrome',
            version: parseInt(chromium.version, 10)
        };
    }
    if (navigator.mozGetUserMedia) {
        result.browser = 'firefox';
        result.version = parseInt(extractVersion(navigator.userAgent, /Firefox\/(\d+)\./, 1));
    } else if (navigator.webkitGetUserMedia || window1.isSecureContext === false && window1.webkitRTCPeerConnection) {
        // Chrome, Chromium, Webview, Opera.
        // Version matches Chrome/WebRTC version.
        // Chrome 74 removed webkitGetUserMedia on http as well so we need the
        // more complicated fallback to webkitRTCPeerConnection.
        result.browser = 'chrome';
        result.version = parseInt(extractVersion(navigator.userAgent, /Chrom(e|ium)\/(\d+)\./, 2));
    } else if (window1.RTCPeerConnection && navigator.userAgent.match(/AppleWebKit\/(\d+)\./)) {
        result.browser = 'safari';
        result.version = parseInt(extractVersion(navigator.userAgent, /AppleWebKit\/(\d+)\./, 1));
        result.supportsUnifiedPlan = window1.RTCRtpTransceiver && 'currentDirection' in window1.RTCRtpTransceiver.prototype;
        // Only for internal usage.
        result._safariVersion = extractVersion(navigator.userAgent, /Version\/(\d+(\.?\d+))/, 1);
    } else {
        result.browser = 'Not a supported browser.';
        return result;
    }
    return result;
}
/**
 * Checks if something is an object.
 *
 * @param {*} val The something you want to check.
 * @return true if val is an object, false otherwise.
 */ function isObject(val) {
    return Object.prototype.toString.call(val) === '[object Object]';
}
function compactObject(data) {
    if (!isObject(data)) return data;
    return Object.keys(data).reduce(function(accumulator, key) {
        const isObj = isObject(data[key]);
        const value = isObj ? compactObject(data[key]) : data[key];
        const isEmptyObject = isObj && !Object.keys(value).length;
        if (value === undefined || isEmptyObject) return accumulator;
        return Object.assign(accumulator, {
            [key]: value
        });
    }, {});
}
function walkStats(stats, base, resultSet) {
    if (!base || resultSet.has(base.id)) return;
    resultSet.set(base.id, base);
    Object.keys(base).forEach((name)=>{
        if (name.endsWith('Id')) walkStats(stats, stats.get(base[name]), resultSet);
        else if (name.endsWith('Ids')) base[name].forEach((id)=>{
            walkStats(stats, stats.get(id), resultSet);
        });
    });
}
function filterStats(result, track, outbound) {
    const streamStatsType = outbound ? 'outbound-rtp' : 'inbound-rtp';
    const filteredResult = new Map();
    if (track === null) return filteredResult;
    const trackStats = [];
    result.forEach((value)=>{
        if (value.type === 'track' && value.trackIdentifier === track.id) trackStats.push(value);
    });
    trackStats.forEach((trackStat)=>{
        result.forEach((stats)=>{
            if (stats.type === streamStatsType && stats.trackId === trackStat.id) walkStats(result, stats, filteredResult);
        });
    });
    return filteredResult;
}

},{"@parcel/transformer-js/src/esmodule-helpers.js":"jnFvT"}],"gnS8k":[function(require,module,exports,__globalThis) {
/*
 *  Copyright (c) 2016 The WebRTC project authors. All Rights Reserved.
 *
 *  Use of this source code is governed by a BSD-style license
 *  that can be found in the LICENSE file in the root of the source
 *  tree.
 */ /* eslint-env node */ var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "shimGetUserMedia", ()=>(0, _getusermedia.shimGetUserMedia));
parcelHelpers.export(exports, "shimMediaStream", ()=>shimMediaStream);
parcelHelpers.export(exports, "shimOnTrack", ()=>shimOnTrack);
parcelHelpers.export(exports, "shimGetSendersWithDtmf", ()=>shimGetSendersWithDtmf);
parcelHelpers.export(exports, "shimSenderReceiverGetStats", ()=>shimSenderReceiverGetStats);
parcelHelpers.export(exports, "shimAddTrackRemoveTrackWithNative", ()=>shimAddTrackRemoveTrackWithNative);
parcelHelpers.export(exports, "shimAddTrackRemoveTrack", ()=>shimAddTrackRemoveTrack);
parcelHelpers.export(exports, "shimPeerConnection", ()=>shimPeerConnection);
// Attempt to fix ONN in plan-b mode.
parcelHelpers.export(exports, "fixNegotiationNeeded", ()=>fixNegotiationNeeded);
var _utilsJs = require("../utils.js");
var _getusermedia = require("./getusermedia");
'use strict';
function shimMediaStream(window) {
    window.MediaStream = window.MediaStream || window.webkitMediaStream;
}
function shimOnTrack(window) {
    if (typeof window === 'object' && window.RTCPeerConnection && !('ontrack' in window.RTCPeerConnection.prototype)) {
        Object.defineProperty(window.RTCPeerConnection.prototype, 'ontrack', {
            get () {
                return this._ontrack;
            },
            set (f) {
                if (this._ontrack) this.removeEventListener('track', this._ontrack);
                this.addEventListener('track', this._ontrack = f);
            },
            enumerable: true,
            configurable: true
        });
        const origSetRemoteDescription = window.RTCPeerConnection.prototype.setRemoteDescription;
        window.RTCPeerConnection.prototype.setRemoteDescription = function setRemoteDescription() {
            if (!this._ontrackpoly) {
                this._ontrackpoly = (e)=>{
                    // onaddstream does not fire when a track is added to an existing
                    // stream. But stream.onaddtrack is implemented so we use that.
                    e.stream.addEventListener('addtrack', (te)=>{
                        let receiver;
                        if (window.RTCPeerConnection.prototype.getReceivers) receiver = this.getReceivers().find((r)=>r.track && r.track.id === te.track.id);
                        else receiver = {
                            track: te.track
                        };
                        const event = new Event('track');
                        event.track = te.track;
                        event.receiver = receiver;
                        event.transceiver = {
                            receiver
                        };
                        event.streams = [
                            e.stream
                        ];
                        this.dispatchEvent(event);
                    });
                    e.stream.getTracks().forEach((track)=>{
                        let receiver;
                        if (window.RTCPeerConnection.prototype.getReceivers) receiver = this.getReceivers().find((r)=>r.track && r.track.id === track.id);
                        else receiver = {
                            track
                        };
                        const event = new Event('track');
                        event.track = track;
                        event.receiver = receiver;
                        event.transceiver = {
                            receiver
                        };
                        event.streams = [
                            e.stream
                        ];
                        this.dispatchEvent(event);
                    });
                };
                this.addEventListener('addstream', this._ontrackpoly);
            }
            return origSetRemoteDescription.apply(this, arguments);
        };
    } else // even if RTCRtpTransceiver is in window, it is only used and
    // emitted in unified-plan. Unfortunately this means we need
    // to unconditionally wrap the event.
    _utilsJs.wrapPeerConnectionEvent(window, 'track', (e)=>{
        if (!e.transceiver) Object.defineProperty(e, 'transceiver', {
            value: {
                receiver: e.receiver
            }
        });
        return e;
    });
}
function shimGetSendersWithDtmf(window) {
    // Overrides addTrack/removeTrack, depends on shimAddTrackRemoveTrack.
    if (typeof window === 'object' && window.RTCPeerConnection && !('getSenders' in window.RTCPeerConnection.prototype) && 'createDTMFSender' in window.RTCPeerConnection.prototype) {
        const shimSenderWithDtmf = function(pc, track) {
            return {
                track,
                get dtmf () {
                    if (this._dtmf === undefined) {
                        if (track.kind === 'audio') this._dtmf = pc.createDTMFSender(track);
                        else this._dtmf = null;
                    }
                    return this._dtmf;
                },
                _pc: pc
            };
        };
        // augment addTrack when getSenders is not available.
        if (!window.RTCPeerConnection.prototype.getSenders) {
            window.RTCPeerConnection.prototype.getSenders = function getSenders() {
                this._senders = this._senders || [];
                return this._senders.slice(); // return a copy of the internal state.
            };
            const origAddTrack = window.RTCPeerConnection.prototype.addTrack;
            window.RTCPeerConnection.prototype.addTrack = function addTrack(track, stream) {
                let sender = origAddTrack.apply(this, arguments);
                if (!sender) {
                    sender = shimSenderWithDtmf(this, track);
                    this._senders.push(sender);
                }
                return sender;
            };
            const origRemoveTrack = window.RTCPeerConnection.prototype.removeTrack;
            window.RTCPeerConnection.prototype.removeTrack = function removeTrack(sender) {
                origRemoveTrack.apply(this, arguments);
                const idx = this._senders.indexOf(sender);
                if (idx !== -1) this._senders.splice(idx, 1);
            };
        }
        const origAddStream = window.RTCPeerConnection.prototype.addStream;
        window.RTCPeerConnection.prototype.addStream = function addStream(stream) {
            this._senders = this._senders || [];
            origAddStream.apply(this, [
                stream
            ]);
            stream.getTracks().forEach((track)=>{
                this._senders.push(shimSenderWithDtmf(this, track));
            });
        };
        const origRemoveStream = window.RTCPeerConnection.prototype.removeStream;
        window.RTCPeerConnection.prototype.removeStream = function removeStream(stream) {
            this._senders = this._senders || [];
            origRemoveStream.apply(this, [
                stream
            ]);
            stream.getTracks().forEach((track)=>{
                const sender = this._senders.find((s)=>s.track === track);
                if (sender) this._senders.splice(this._senders.indexOf(sender), 1);
            });
        };
    } else if (typeof window === 'object' && window.RTCPeerConnection && 'getSenders' in window.RTCPeerConnection.prototype && 'createDTMFSender' in window.RTCPeerConnection.prototype && window.RTCRtpSender && !('dtmf' in window.RTCRtpSender.prototype)) {
        const origGetSenders = window.RTCPeerConnection.prototype.getSenders;
        window.RTCPeerConnection.prototype.getSenders = function getSenders() {
            const senders = origGetSenders.apply(this, []);
            senders.forEach((sender)=>sender._pc = this);
            return senders;
        };
        Object.defineProperty(window.RTCRtpSender.prototype, 'dtmf', {
            get () {
                if (this._dtmf === undefined) {
                    if (this.track.kind === 'audio') this._dtmf = this._pc.createDTMFSender(this.track);
                    else this._dtmf = null;
                }
                return this._dtmf;
            }
        });
    }
}
function shimSenderReceiverGetStats(window) {
    if (!(typeof window === 'object' && window.RTCPeerConnection && window.RTCRtpSender && window.RTCRtpReceiver)) return;
    // shim sender stats.
    if (!('getStats' in window.RTCRtpSender.prototype)) {
        const origGetSenders = window.RTCPeerConnection.prototype.getSenders;
        if (origGetSenders) window.RTCPeerConnection.prototype.getSenders = function getSenders() {
            const senders = origGetSenders.apply(this, []);
            senders.forEach((sender)=>sender._pc = this);
            return senders;
        };
        const origAddTrack = window.RTCPeerConnection.prototype.addTrack;
        if (origAddTrack) window.RTCPeerConnection.prototype.addTrack = function addTrack() {
            const sender = origAddTrack.apply(this, arguments);
            sender._pc = this;
            return sender;
        };
        window.RTCRtpSender.prototype.getStats = function getStats() {
            const sender = this;
            return this._pc.getStats().then((result)=>/* Note: this will include stats of all senders that
         *   send a track with the same id as sender.track as
         *   it is not possible to identify the RTCRtpSender.
         */ _utilsJs.filterStats(result, sender.track, true));
        };
    }
    // shim receiver stats.
    if (!('getStats' in window.RTCRtpReceiver.prototype)) {
        const origGetReceivers = window.RTCPeerConnection.prototype.getReceivers;
        if (origGetReceivers) window.RTCPeerConnection.prototype.getReceivers = function getReceivers() {
            const receivers = origGetReceivers.apply(this, []);
            receivers.forEach((receiver)=>receiver._pc = this);
            return receivers;
        };
        _utilsJs.wrapPeerConnectionEvent(window, 'track', (e)=>{
            e.receiver._pc = e.srcElement;
            return e;
        });
        window.RTCRtpReceiver.prototype.getStats = function getStats() {
            const receiver = this;
            return this._pc.getStats().then((result)=>_utilsJs.filterStats(result, receiver.track, false));
        };
    }
    if (!('getStats' in window.RTCRtpSender.prototype && 'getStats' in window.RTCRtpReceiver.prototype)) return;
    // shim RTCPeerConnection.getStats(track).
    const origGetStats = window.RTCPeerConnection.prototype.getStats;
    window.RTCPeerConnection.prototype.getStats = function getStats() {
        if (arguments.length > 0 && arguments[0] instanceof window.MediaStreamTrack) {
            const track = arguments[0];
            let sender;
            let receiver;
            let err;
            this.getSenders().forEach((s)=>{
                if (s.track === track) {
                    if (sender) err = true;
                    else sender = s;
                }
            });
            this.getReceivers().forEach((r)=>{
                if (r.track === track) {
                    if (receiver) err = true;
                    else receiver = r;
                }
                return r.track === track;
            });
            if (err || sender && receiver) return Promise.reject(new DOMException('There are more than one sender or receiver for the track.', 'InvalidAccessError'));
            else if (sender) return sender.getStats();
            else if (receiver) return receiver.getStats();
            return Promise.reject(new DOMException('There is no sender or receiver for the track.', 'InvalidAccessError'));
        }
        return origGetStats.apply(this, arguments);
    };
}
function shimAddTrackRemoveTrackWithNative(window) {
    // shim addTrack/removeTrack with native variants in order to make
    // the interactions with legacy getLocalStreams behave as in other browsers.
    // Keeps a mapping stream.id => [stream, rtpsenders...]
    window.RTCPeerConnection.prototype.getLocalStreams = function getLocalStreams() {
        this._shimmedLocalStreams = this._shimmedLocalStreams || {};
        return Object.keys(this._shimmedLocalStreams).map((streamId)=>this._shimmedLocalStreams[streamId][0]);
    };
    const origAddTrack = window.RTCPeerConnection.prototype.addTrack;
    window.RTCPeerConnection.prototype.addTrack = function addTrack(track, stream) {
        if (!stream) return origAddTrack.apply(this, arguments);
        this._shimmedLocalStreams = this._shimmedLocalStreams || {};
        const sender = origAddTrack.apply(this, arguments);
        if (!this._shimmedLocalStreams[stream.id]) this._shimmedLocalStreams[stream.id] = [
            stream,
            sender
        ];
        else if (this._shimmedLocalStreams[stream.id].indexOf(sender) === -1) this._shimmedLocalStreams[stream.id].push(sender);
        return sender;
    };
    const origAddStream = window.RTCPeerConnection.prototype.addStream;
    window.RTCPeerConnection.prototype.addStream = function addStream(stream) {
        this._shimmedLocalStreams = this._shimmedLocalStreams || {};
        stream.getTracks().forEach((track)=>{
            const alreadyExists = this.getSenders().find((s)=>s.track === track);
            if (alreadyExists) throw new DOMException('Track already exists.', 'InvalidAccessError');
        });
        const existingSenders = this.getSenders();
        origAddStream.apply(this, arguments);
        const newSenders = this.getSenders().filter((newSender)=>existingSenders.indexOf(newSender) === -1);
        this._shimmedLocalStreams[stream.id] = [
            stream
        ].concat(newSenders);
    };
    const origRemoveStream = window.RTCPeerConnection.prototype.removeStream;
    window.RTCPeerConnection.prototype.removeStream = function removeStream(stream) {
        this._shimmedLocalStreams = this._shimmedLocalStreams || {};
        delete this._shimmedLocalStreams[stream.id];
        return origRemoveStream.apply(this, arguments);
    };
    const origRemoveTrack = window.RTCPeerConnection.prototype.removeTrack;
    window.RTCPeerConnection.prototype.removeTrack = function removeTrack(sender) {
        this._shimmedLocalStreams = this._shimmedLocalStreams || {};
        if (sender) Object.keys(this._shimmedLocalStreams).forEach((streamId)=>{
            const idx = this._shimmedLocalStreams[streamId].indexOf(sender);
            if (idx !== -1) this._shimmedLocalStreams[streamId].splice(idx, 1);
            if (this._shimmedLocalStreams[streamId].length === 1) delete this._shimmedLocalStreams[streamId];
        });
        return origRemoveTrack.apply(this, arguments);
    };
}
function shimAddTrackRemoveTrack(window, browserDetails) {
    if (!window.RTCPeerConnection) return;
    // shim addTrack and removeTrack.
    if (window.RTCPeerConnection.prototype.addTrack && browserDetails.version >= 65) return shimAddTrackRemoveTrackWithNative(window);
    // also shim pc.getLocalStreams when addTrack is shimmed
    // to return the original streams.
    const origGetLocalStreams = window.RTCPeerConnection.prototype.getLocalStreams;
    window.RTCPeerConnection.prototype.getLocalStreams = function getLocalStreams() {
        const nativeStreams = origGetLocalStreams.apply(this);
        this._reverseStreams = this._reverseStreams || {};
        return nativeStreams.map((stream)=>this._reverseStreams[stream.id]);
    };
    const origAddStream = window.RTCPeerConnection.prototype.addStream;
    window.RTCPeerConnection.prototype.addStream = function addStream(stream) {
        this._streams = this._streams || {};
        this._reverseStreams = this._reverseStreams || {};
        stream.getTracks().forEach((track)=>{
            const alreadyExists = this.getSenders().find((s)=>s.track === track);
            if (alreadyExists) throw new DOMException('Track already exists.', 'InvalidAccessError');
        });
        // Add identity mapping for consistency with addTrack.
        // Unless this is being used with a stream from addTrack.
        if (!this._reverseStreams[stream.id]) {
            const newStream = new window.MediaStream(stream.getTracks());
            this._streams[stream.id] = newStream;
            this._reverseStreams[newStream.id] = stream;
            stream = newStream;
        }
        origAddStream.apply(this, [
            stream
        ]);
    };
    const origRemoveStream = window.RTCPeerConnection.prototype.removeStream;
    window.RTCPeerConnection.prototype.removeStream = function removeStream(stream) {
        this._streams = this._streams || {};
        this._reverseStreams = this._reverseStreams || {};
        origRemoveStream.apply(this, [
            this._streams[stream.id] || stream
        ]);
        delete this._reverseStreams[this._streams[stream.id] ? this._streams[stream.id].id : stream.id];
        delete this._streams[stream.id];
    };
    window.RTCPeerConnection.prototype.addTrack = function addTrack(track, stream) {
        if (this.signalingState === 'closed') throw new DOMException('The RTCPeerConnection\'s signalingState is \'closed\'.', 'InvalidStateError');
        const streams = [].slice.call(arguments, 1);
        if (streams.length !== 1 || !streams[0].getTracks().find((t)=>t === track)) // this is not fully correct but all we can manage without
        // [[associated MediaStreams]] internal slot.
        throw new DOMException("The adapter.js addTrack polyfill only supports a single  stream which is associated with the specified track.", 'NotSupportedError');
        const alreadyExists = this.getSenders().find((s)=>s.track === track);
        if (alreadyExists) throw new DOMException('Track already exists.', 'InvalidAccessError');
        this._streams = this._streams || {};
        this._reverseStreams = this._reverseStreams || {};
        const oldStream = this._streams[stream.id];
        if (oldStream) {
            // this is using odd Chrome behaviour, use with caution:
            // https://bugs.chromium.org/p/webrtc/issues/detail?id=7815
            // Note: we rely on the high-level addTrack/dtmf shim to
            // create the sender with a dtmf sender.
            oldStream.addTrack(track);
            // Trigger ONN async.
            Promise.resolve().then(()=>{
                this.dispatchEvent(new Event('negotiationneeded'));
            });
        } else {
            const newStream = new window.MediaStream([
                track
            ]);
            this._streams[stream.id] = newStream;
            this._reverseStreams[newStream.id] = stream;
            this.addStream(newStream);
        }
        return this.getSenders().find((s)=>s.track === track);
    };
    // replace the internal stream id with the external one and
    // vice versa.
    function replaceInternalStreamId(pc, description) {
        let sdp = description.sdp;
        Object.keys(pc._reverseStreams || []).forEach((internalId)=>{
            const externalStream = pc._reverseStreams[internalId];
            const internalStream = pc._streams[externalStream.id];
            sdp = sdp.replace(new RegExp(internalStream.id, 'g'), externalStream.id);
        });
        return new RTCSessionDescription({
            type: description.type,
            sdp
        });
    }
    function replaceExternalStreamId(pc, description) {
        let sdp = description.sdp;
        Object.keys(pc._reverseStreams || []).forEach((internalId)=>{
            const externalStream = pc._reverseStreams[internalId];
            const internalStream = pc._streams[externalStream.id];
            sdp = sdp.replace(new RegExp(externalStream.id, 'g'), internalStream.id);
        });
        return new RTCSessionDescription({
            type: description.type,
            sdp
        });
    }
    [
        'createOffer',
        'createAnswer'
    ].forEach(function(method) {
        const nativeMethod = window.RTCPeerConnection.prototype[method];
        const methodObj = {
            [method] () {
                const args = arguments;
                const isLegacyCall = arguments.length && typeof arguments[0] === 'function';
                if (isLegacyCall) return nativeMethod.apply(this, [
                    (description)=>{
                        const desc = replaceInternalStreamId(this, description);
                        args[0].apply(null, [
                            desc
                        ]);
                    },
                    (err)=>{
                        if (args[1]) args[1].apply(null, err);
                    },
                    arguments[2]
                ]);
                return nativeMethod.apply(this, arguments).then((description)=>replaceInternalStreamId(this, description));
            }
        };
        window.RTCPeerConnection.prototype[method] = methodObj[method];
    });
    const origSetLocalDescription = window.RTCPeerConnection.prototype.setLocalDescription;
    window.RTCPeerConnection.prototype.setLocalDescription = function setLocalDescription() {
        if (!arguments.length || !arguments[0].type) return origSetLocalDescription.apply(this, arguments);
        arguments[0] = replaceExternalStreamId(this, arguments[0]);
        return origSetLocalDescription.apply(this, arguments);
    };
    // TODO: mangle getStats: https://w3c.github.io/webrtc-stats/#dom-rtcmediastreamstats-streamidentifier
    const origLocalDescription = Object.getOwnPropertyDescriptor(window.RTCPeerConnection.prototype, 'localDescription');
    Object.defineProperty(window.RTCPeerConnection.prototype, 'localDescription', {
        get () {
            const description = origLocalDescription.get.apply(this);
            if (description.type === '') return description;
            return replaceInternalStreamId(this, description);
        }
    });
    window.RTCPeerConnection.prototype.removeTrack = function removeTrack(sender) {
        if (this.signalingState === 'closed') throw new DOMException('The RTCPeerConnection\'s signalingState is \'closed\'.', 'InvalidStateError');
        // We can not yet check for sender instanceof RTCRtpSender
        // since we shim RTPSender. So we check if sender._pc is set.
        if (!sender._pc) throw new DOMException("Argument 1 of RTCPeerConnection.removeTrack does not implement interface RTCRtpSender.", 'TypeError');
        const isLocal = sender._pc === this;
        if (!isLocal) throw new DOMException('Sender was not created by this connection.', 'InvalidAccessError');
        // Search for the native stream the senders track belongs to.
        this._streams = this._streams || {};
        let stream;
        Object.keys(this._streams).forEach((streamid)=>{
            const hasTrack = this._streams[streamid].getTracks().find((track)=>sender.track === track);
            if (hasTrack) stream = this._streams[streamid];
        });
        if (stream) {
            if (stream.getTracks().length === 1) // if this is the last track of the stream, remove the stream. This
            // takes care of any shimmed _senders.
            this.removeStream(this._reverseStreams[stream.id]);
            else // relying on the same odd chrome behaviour as above.
            stream.removeTrack(sender.track);
            this.dispatchEvent(new Event('negotiationneeded'));
        }
    };
}
function shimPeerConnection(window, browserDetails) {
    if (!window.RTCPeerConnection && window.webkitRTCPeerConnection) // very basic support for old versions.
    window.RTCPeerConnection = window.webkitRTCPeerConnection;
    if (!window.RTCPeerConnection) return;
    // shim implicit creation of RTCSessionDescription/RTCIceCandidate
    if (browserDetails.version < 53) [
        'setLocalDescription',
        'setRemoteDescription',
        'addIceCandidate'
    ].forEach(function(method) {
        const nativeMethod = window.RTCPeerConnection.prototype[method];
        const methodObj = {
            [method] () {
                arguments[0] = new (method === 'addIceCandidate' ? window.RTCIceCandidate : window.RTCSessionDescription)(arguments[0]);
                return nativeMethod.apply(this, arguments);
            }
        };
        window.RTCPeerConnection.prototype[method] = methodObj[method];
    });
}
function fixNegotiationNeeded(window, browserDetails) {
    _utilsJs.wrapPeerConnectionEvent(window, 'negotiationneeded', (e)=>{
        const pc = e.target;
        if (browserDetails.version < 72 || pc.getConfiguration && pc.getConfiguration().sdpSemantics === 'plan-b') {
            if (pc.signalingState !== 'stable') return;
        }
        return e;
    });
}

},{"../utils.js":"130jN","./getusermedia":"4J7EJ","@parcel/transformer-js/src/esmodule-helpers.js":"jnFvT"}],"4J7EJ":[function(require,module,exports,__globalThis) {
/*
 *  Copyright (c) 2016 The WebRTC project authors. All Rights Reserved.
 *
 *  Use of this source code is governed by a BSD-style license
 *  that can be found in the LICENSE file in the root of the source
 *  tree.
 */ /* eslint-env node */ var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "shimGetUserMedia", ()=>shimGetUserMedia);
var _utilsJs = require("../utils.js");
'use strict';
const logging = _utilsJs.log;
function shimGetUserMedia(window, browserDetails) {
    const navigator = window && window.navigator;
    if (!navigator.mediaDevices) return;
    const constraintsToChrome_ = function(c) {
        if (typeof c !== 'object' || c.mandatory || c.optional) return c;
        const cc = {};
        Object.keys(c).forEach((key)=>{
            if (key === 'require' || key === 'advanced' || key === 'mediaSource') return;
            const r = typeof c[key] === 'object' ? c[key] : {
                ideal: c[key]
            };
            if (r.exact !== undefined && typeof r.exact === 'number') r.min = r.max = r.exact;
            const oldname_ = function(prefix, name) {
                if (prefix) return prefix + name.charAt(0).toUpperCase() + name.slice(1);
                return name === 'deviceId' ? 'sourceId' : name;
            };
            if (r.ideal !== undefined) {
                cc.optional = cc.optional || [];
                let oc = {};
                if (typeof r.ideal === 'number') {
                    oc[oldname_('min', key)] = r.ideal;
                    cc.optional.push(oc);
                    oc = {};
                    oc[oldname_('max', key)] = r.ideal;
                    cc.optional.push(oc);
                } else {
                    oc[oldname_('', key)] = r.ideal;
                    cc.optional.push(oc);
                }
            }
            if (r.exact !== undefined && typeof r.exact !== 'number') {
                cc.mandatory = cc.mandatory || {};
                cc.mandatory[oldname_('', key)] = r.exact;
            } else [
                'min',
                'max'
            ].forEach((mix)=>{
                if (r[mix] !== undefined) {
                    cc.mandatory = cc.mandatory || {};
                    cc.mandatory[oldname_(mix, key)] = r[mix];
                }
            });
        });
        if (c.advanced) cc.optional = (cc.optional || []).concat(c.advanced);
        return cc;
    };
    const shimConstraints_ = function(constraints, func) {
        if (browserDetails.version >= 61) return func(constraints);
        constraints = JSON.parse(JSON.stringify(constraints));
        if (constraints && typeof constraints.audio === 'object') {
            const remap = function(obj, a, b) {
                if (a in obj && !(b in obj)) {
                    obj[b] = obj[a];
                    delete obj[a];
                }
            };
            constraints = JSON.parse(JSON.stringify(constraints));
            remap(constraints.audio, 'autoGainControl', 'googAutoGainControl');
            remap(constraints.audio, 'noiseSuppression', 'googNoiseSuppression');
            constraints.audio = constraintsToChrome_(constraints.audio);
        }
        if (constraints && typeof constraints.video === 'object') {
            // Shim facingMode for mobile & surface pro.
            let face = constraints.video.facingMode;
            face = face && (typeof face === 'object' ? face : {
                ideal: face
            });
            const getSupportedFacingModeLies = browserDetails.version < 66;
            if (face && (face.exact === 'user' || face.exact === 'environment' || face.ideal === 'user' || face.ideal === 'environment') && !(navigator.mediaDevices.getSupportedConstraints && navigator.mediaDevices.getSupportedConstraints().facingMode && !getSupportedFacingModeLies)) {
                delete constraints.video.facingMode;
                let matches;
                if (face.exact === 'environment' || face.ideal === 'environment') matches = [
                    'back',
                    'rear'
                ];
                else if (face.exact === 'user' || face.ideal === 'user') matches = [
                    'front'
                ];
                if (matches) // Look for matches in label, or use last cam for back (typical).
                return navigator.mediaDevices.enumerateDevices().then((devices)=>{
                    devices = devices.filter((d)=>d.kind === 'videoinput');
                    let dev = devices.find((d)=>matches.some((match)=>d.label.toLowerCase().includes(match)));
                    if (!dev && devices.length && matches.includes('back')) dev = devices[devices.length - 1]; // more likely the back cam
                    if (dev) constraints.video.deviceId = face.exact ? {
                        exact: dev.deviceId
                    } : {
                        ideal: dev.deviceId
                    };
                    constraints.video = constraintsToChrome_(constraints.video);
                    logging('chrome: ' + JSON.stringify(constraints));
                    return func(constraints);
                });
            }
            constraints.video = constraintsToChrome_(constraints.video);
        }
        logging('chrome: ' + JSON.stringify(constraints));
        return func(constraints);
    };
    const shimError_ = function(e) {
        if (browserDetails.version >= 64) return e;
        return {
            name: ({
                PermissionDeniedError: 'NotAllowedError',
                PermissionDismissedError: 'NotAllowedError',
                InvalidStateError: 'NotAllowedError',
                DevicesNotFoundError: 'NotFoundError',
                ConstraintNotSatisfiedError: 'OverconstrainedError',
                TrackStartError: 'NotReadableError',
                MediaDeviceFailedDueToShutdown: 'NotAllowedError',
                MediaDeviceKillSwitchOn: 'NotAllowedError',
                TabCaptureError: 'AbortError',
                ScreenCaptureError: 'AbortError',
                DeviceCaptureError: 'AbortError'
            })[e.name] || e.name,
            message: e.message,
            constraint: e.constraint || e.constraintName,
            toString () {
                return this.name + (this.message && ': ') + this.message;
            }
        };
    };
    const getUserMedia_ = function(constraints, onSuccess, onError) {
        shimConstraints_(constraints, (c)=>{
            navigator.webkitGetUserMedia(c, onSuccess, (e)=>{
                if (onError) onError(shimError_(e));
            });
        });
    };
    navigator.getUserMedia = getUserMedia_.bind(navigator);
    // Even though Chrome 45 has navigator.mediaDevices and a getUserMedia
    // function which returns a Promise, it does not accept spec-style
    // constraints.
    if (navigator.mediaDevices.getUserMedia) {
        const origGetUserMedia = navigator.mediaDevices.getUserMedia.bind(navigator.mediaDevices);
        navigator.mediaDevices.getUserMedia = function(cs) {
            return shimConstraints_(cs, (c)=>origGetUserMedia(c).then((stream)=>{
                    if (c.audio && !stream.getAudioTracks().length || c.video && !stream.getVideoTracks().length) {
                        stream.getTracks().forEach((track)=>{
                            track.stop();
                        });
                        throw new DOMException('', 'NotFoundError');
                    }
                    return stream;
                }, (e)=>Promise.reject(shimError_(e))));
        };
    }
}

},{"../utils.js":"130jN","@parcel/transformer-js/src/esmodule-helpers.js":"jnFvT"}],"bXIO7":[function(require,module,exports,__globalThis) {
/*
 *  Copyright (c) 2016 The WebRTC project authors. All Rights Reserved.
 *
 *  Use of this source code is governed by a BSD-style license
 *  that can be found in the LICENSE file in the root of the source
 *  tree.
 */ /* eslint-env node */ var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "shimGetUserMedia", ()=>(0, _getusermedia.shimGetUserMedia));
parcelHelpers.export(exports, "shimGetDisplayMedia", ()=>(0, _getdisplaymedia.shimGetDisplayMedia));
parcelHelpers.export(exports, "shimOnTrack", ()=>shimOnTrack);
parcelHelpers.export(exports, "shimPeerConnection", ()=>shimPeerConnection);
parcelHelpers.export(exports, "shimSenderGetStats", ()=>shimSenderGetStats);
parcelHelpers.export(exports, "shimReceiverGetStats", ()=>shimReceiverGetStats);
parcelHelpers.export(exports, "shimRemoveStream", ()=>shimRemoveStream);
parcelHelpers.export(exports, "shimRTCDataChannel", ()=>shimRTCDataChannel);
parcelHelpers.export(exports, "shimAddTransceiver", ()=>shimAddTransceiver);
parcelHelpers.export(exports, "shimGetParameters", ()=>shimGetParameters);
parcelHelpers.export(exports, "shimCreateOffer", ()=>shimCreateOffer);
parcelHelpers.export(exports, "shimCreateAnswer", ()=>shimCreateAnswer);
var _utils = require("../utils");
var _getusermedia = require("./getusermedia");
var _getdisplaymedia = require("./getdisplaymedia");
'use strict';
function shimOnTrack(window) {
    if (typeof window === 'object' && window.RTCTrackEvent && 'receiver' in window.RTCTrackEvent.prototype && !('transceiver' in window.RTCTrackEvent.prototype)) Object.defineProperty(window.RTCTrackEvent.prototype, 'transceiver', {
        get () {
            return {
                receiver: this.receiver
            };
        }
    });
}
function shimPeerConnection(window, browserDetails) {
    if (typeof window !== 'object' || !(window.RTCPeerConnection || window.mozRTCPeerConnection)) return; // probably media.peerconnection.enabled=false in about:config
    if (!window.RTCPeerConnection && window.mozRTCPeerConnection) // very basic support for old versions.
    window.RTCPeerConnection = window.mozRTCPeerConnection;
    if (browserDetails.version < 53) // shim away need for obsolete RTCIceCandidate/RTCSessionDescription.
    [
        'setLocalDescription',
        'setRemoteDescription',
        'addIceCandidate'
    ].forEach(function(method) {
        const nativeMethod = window.RTCPeerConnection.prototype[method];
        const methodObj = {
            [method] () {
                arguments[0] = new (method === 'addIceCandidate' ? window.RTCIceCandidate : window.RTCSessionDescription)(arguments[0]);
                return nativeMethod.apply(this, arguments);
            }
        };
        window.RTCPeerConnection.prototype[method] = methodObj[method];
    });
    const modernStatsTypes = {
        inboundrtp: 'inbound-rtp',
        outboundrtp: 'outbound-rtp',
        candidatepair: 'candidate-pair',
        localcandidate: 'local-candidate',
        remotecandidate: 'remote-candidate'
    };
    const nativeGetStats = window.RTCPeerConnection.prototype.getStats;
    window.RTCPeerConnection.prototype.getStats = function getStats() {
        const [selector, onSucc, onErr] = arguments;
        return nativeGetStats.apply(this, [
            selector || null
        ]).then((stats)=>{
            if (browserDetails.version < 53 && !onSucc) // Shim only promise getStats with spec-hyphens in type names
            // Leave callback version alone; misc old uses of forEach before Map
            try {
                stats.forEach((stat)=>{
                    stat.type = modernStatsTypes[stat.type] || stat.type;
                });
            } catch (e) {
                if (e.name !== 'TypeError') throw e;
                // Avoid TypeError: "type" is read-only, in old versions. 34-43ish
                stats.forEach((stat, i)=>{
                    stats.set(i, Object.assign({}, stat, {
                        type: modernStatsTypes[stat.type] || stat.type
                    }));
                });
            }
            return stats;
        }).then(onSucc, onErr);
    };
}
function shimSenderGetStats(window) {
    if (!(typeof window === 'object' && window.RTCPeerConnection && window.RTCRtpSender)) return;
    if (window.RTCRtpSender && 'getStats' in window.RTCRtpSender.prototype) return;
    const origGetSenders = window.RTCPeerConnection.prototype.getSenders;
    if (origGetSenders) window.RTCPeerConnection.prototype.getSenders = function getSenders() {
        const senders = origGetSenders.apply(this, []);
        senders.forEach((sender)=>sender._pc = this);
        return senders;
    };
    const origAddTrack = window.RTCPeerConnection.prototype.addTrack;
    if (origAddTrack) window.RTCPeerConnection.prototype.addTrack = function addTrack() {
        const sender = origAddTrack.apply(this, arguments);
        sender._pc = this;
        return sender;
    };
    window.RTCRtpSender.prototype.getStats = function getStats() {
        return this.track ? this._pc.getStats(this.track) : Promise.resolve(new Map());
    };
}
function shimReceiverGetStats(window) {
    if (!(typeof window === 'object' && window.RTCPeerConnection && window.RTCRtpSender)) return;
    if (window.RTCRtpSender && 'getStats' in window.RTCRtpReceiver.prototype) return;
    const origGetReceivers = window.RTCPeerConnection.prototype.getReceivers;
    if (origGetReceivers) window.RTCPeerConnection.prototype.getReceivers = function getReceivers() {
        const receivers = origGetReceivers.apply(this, []);
        receivers.forEach((receiver)=>receiver._pc = this);
        return receivers;
    };
    _utils.wrapPeerConnectionEvent(window, 'track', (e)=>{
        e.receiver._pc = e.srcElement;
        return e;
    });
    window.RTCRtpReceiver.prototype.getStats = function getStats() {
        return this._pc.getStats(this.track);
    };
}
function shimRemoveStream(window) {
    if (!window.RTCPeerConnection || 'removeStream' in window.RTCPeerConnection.prototype) return;
    window.RTCPeerConnection.prototype.removeStream = function removeStream(stream) {
        _utils.deprecated('removeStream', 'removeTrack');
        this.getSenders().forEach((sender)=>{
            if (sender.track && stream.getTracks().includes(sender.track)) this.removeTrack(sender);
        });
    };
}
function shimRTCDataChannel(window) {
    // rename DataChannel to RTCDataChannel (native fix in FF60):
    // https://bugzilla.mozilla.org/show_bug.cgi?id=1173851
    if (window.DataChannel && !window.RTCDataChannel) window.RTCDataChannel = window.DataChannel;
}
function shimAddTransceiver(window) {
    // https://github.com/webrtcHacks/adapter/issues/998#issuecomment-516921647
    // Firefox ignores the init sendEncodings options passed to addTransceiver
    // https://bugzilla.mozilla.org/show_bug.cgi?id=1396918
    if (!(typeof window === 'object' && window.RTCPeerConnection)) return;
    const origAddTransceiver = window.RTCPeerConnection.prototype.addTransceiver;
    if (origAddTransceiver) window.RTCPeerConnection.prototype.addTransceiver = function addTransceiver() {
        this.setParametersPromises = [];
        // WebIDL input coercion and validation
        let sendEncodings = arguments[1] && arguments[1].sendEncodings;
        if (sendEncodings === undefined) sendEncodings = [];
        sendEncodings = [
            ...sendEncodings
        ];
        const shouldPerformCheck = sendEncodings.length > 0;
        if (shouldPerformCheck) // If sendEncodings params are provided, validate grammar
        sendEncodings.forEach((encodingParam)=>{
            if ('rid' in encodingParam) {
                const ridRegex = /^[a-z0-9]{0,16}$/i;
                if (!ridRegex.test(encodingParam.rid)) throw new TypeError('Invalid RID value provided.');
            }
            if ('scaleResolutionDownBy' in encodingParam) {
                if (!(parseFloat(encodingParam.scaleResolutionDownBy) >= 1.0)) throw new RangeError('scale_resolution_down_by must be >= 1.0');
            }
            if ('maxFramerate' in encodingParam) {
                if (!(parseFloat(encodingParam.maxFramerate) >= 0)) throw new RangeError('max_framerate must be >= 0.0');
            }
        });
        const transceiver = origAddTransceiver.apply(this, arguments);
        if (shouldPerformCheck) {
            // Check if the init options were applied. If not we do this in an
            // asynchronous way and save the promise reference in a global object.
            // This is an ugly hack, but at the same time is way more robust than
            // checking the sender parameters before and after the createOffer
            // Also note that after the createoffer we are not 100% sure that
            // the params were asynchronously applied so we might miss the
            // opportunity to recreate offer.
            const { sender } = transceiver;
            const params = sender.getParameters();
            if (!('encodings' in params) || // Avoid being fooled by patched getParameters() below.
            params.encodings.length === 1 && Object.keys(params.encodings[0]).length === 0) {
                params.encodings = sendEncodings;
                sender.sendEncodings = sendEncodings;
                this.setParametersPromises.push(sender.setParameters(params).then(()=>{
                    delete sender.sendEncodings;
                }).catch(()=>{
                    delete sender.sendEncodings;
                }));
            }
        }
        return transceiver;
    };
}
function shimGetParameters(window) {
    if (!(typeof window === 'object' && window.RTCRtpSender)) return;
    const origGetParameters = window.RTCRtpSender.prototype.getParameters;
    if (origGetParameters) window.RTCRtpSender.prototype.getParameters = function getParameters() {
        const params = origGetParameters.apply(this, arguments);
        if (!('encodings' in params)) params.encodings = [].concat(this.sendEncodings || [
            {}
        ]);
        return params;
    };
}
function shimCreateOffer(window) {
    // https://github.com/webrtcHacks/adapter/issues/998#issuecomment-516921647
    // Firefox ignores the init sendEncodings options passed to addTransceiver
    // https://bugzilla.mozilla.org/show_bug.cgi?id=1396918
    if (!(typeof window === 'object' && window.RTCPeerConnection)) return;
    const origCreateOffer = window.RTCPeerConnection.prototype.createOffer;
    window.RTCPeerConnection.prototype.createOffer = function createOffer() {
        if (this.setParametersPromises && this.setParametersPromises.length) return Promise.all(this.setParametersPromises).then(()=>{
            return origCreateOffer.apply(this, arguments);
        }).finally(()=>{
            this.setParametersPromises = [];
        });
        return origCreateOffer.apply(this, arguments);
    };
}
function shimCreateAnswer(window) {
    // https://github.com/webrtcHacks/adapter/issues/998#issuecomment-516921647
    // Firefox ignores the init sendEncodings options passed to addTransceiver
    // https://bugzilla.mozilla.org/show_bug.cgi?id=1396918
    if (!(typeof window === 'object' && window.RTCPeerConnection)) return;
    const origCreateAnswer = window.RTCPeerConnection.prototype.createAnswer;
    window.RTCPeerConnection.prototype.createAnswer = function createAnswer() {
        if (this.setParametersPromises && this.setParametersPromises.length) return Promise.all(this.setParametersPromises).then(()=>{
            return origCreateAnswer.apply(this, arguments);
        }).finally(()=>{
            this.setParametersPromises = [];
        });
        return origCreateAnswer.apply(this, arguments);
    };
}

},{"../utils":"130jN","./getusermedia":"gxNeY","./getdisplaymedia":"kGvxK","@parcel/transformer-js/src/esmodule-helpers.js":"jnFvT"}],"gxNeY":[function(require,module,exports,__globalThis) {
/*
 *  Copyright (c) 2016 The WebRTC project authors. All Rights Reserved.
 *
 *  Use of this source code is governed by a BSD-style license
 *  that can be found in the LICENSE file in the root of the source
 *  tree.
 */ /* eslint-env node */ var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "shimGetUserMedia", ()=>shimGetUserMedia);
var _utils = require("../utils");
'use strict';
function shimGetUserMedia(window, browserDetails) {
    const navigator = window && window.navigator;
    const MediaStreamTrack = window && window.MediaStreamTrack;
    navigator.getUserMedia = function(constraints, onSuccess, onError) {
        // Replace Firefox 44+'s deprecation warning with unprefixed version.
        _utils.deprecated('navigator.getUserMedia', 'navigator.mediaDevices.getUserMedia');
        navigator.mediaDevices.getUserMedia(constraints).then(onSuccess, onError);
    };
    if (!(browserDetails.version > 55 && 'autoGainControl' in navigator.mediaDevices.getSupportedConstraints())) {
        const remap = function(obj, a, b) {
            if (a in obj && !(b in obj)) {
                obj[b] = obj[a];
                delete obj[a];
            }
        };
        const nativeGetUserMedia = navigator.mediaDevices.getUserMedia.bind(navigator.mediaDevices);
        navigator.mediaDevices.getUserMedia = function(c) {
            if (typeof c === 'object' && typeof c.audio === 'object') {
                c = JSON.parse(JSON.stringify(c));
                remap(c.audio, 'autoGainControl', 'mozAutoGainControl');
                remap(c.audio, 'noiseSuppression', 'mozNoiseSuppression');
            }
            return nativeGetUserMedia(c);
        };
        if (MediaStreamTrack && MediaStreamTrack.prototype.getSettings) {
            const nativeGetSettings = MediaStreamTrack.prototype.getSettings;
            MediaStreamTrack.prototype.getSettings = function() {
                const obj = nativeGetSettings.apply(this, arguments);
                remap(obj, 'mozAutoGainControl', 'autoGainControl');
                remap(obj, 'mozNoiseSuppression', 'noiseSuppression');
                return obj;
            };
        }
        if (MediaStreamTrack && MediaStreamTrack.prototype.applyConstraints) {
            const nativeApplyConstraints = MediaStreamTrack.prototype.applyConstraints;
            MediaStreamTrack.prototype.applyConstraints = function(c) {
                if (this.kind === 'audio' && typeof c === 'object') {
                    c = JSON.parse(JSON.stringify(c));
                    remap(c, 'autoGainControl', 'mozAutoGainControl');
                    remap(c, 'noiseSuppression', 'mozNoiseSuppression');
                }
                return nativeApplyConstraints.apply(this, [
                    c
                ]);
            };
        }
    }
}

},{"../utils":"130jN","@parcel/transformer-js/src/esmodule-helpers.js":"jnFvT"}],"kGvxK":[function(require,module,exports,__globalThis) {
/*
 *  Copyright (c) 2018 The adapter.js project authors. All Rights Reserved.
 *
 *  Use of this source code is governed by a BSD-style license
 *  that can be found in the LICENSE file in the root of the source
 *  tree.
 */ /* eslint-env node */ var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "shimGetDisplayMedia", ()=>shimGetDisplayMedia);
'use strict';
function shimGetDisplayMedia(window, preferredMediaSource) {
    if (window.navigator.mediaDevices && 'getDisplayMedia' in window.navigator.mediaDevices) return;
    if (!window.navigator.mediaDevices) return;
    window.navigator.mediaDevices.getDisplayMedia = function getDisplayMedia(constraints) {
        if (!(constraints && constraints.video)) {
            const err = new DOMException("getDisplayMedia without video constraints is undefined");
            err.name = 'NotFoundError';
            // from https://heycam.github.io/webidl/#idl-DOMException-error-names
            err.code = 8;
            return Promise.reject(err);
        }
        if (constraints.video === true) constraints.video = {
            mediaSource: preferredMediaSource
        };
        else constraints.video.mediaSource = preferredMediaSource;
        return window.navigator.mediaDevices.getUserMedia(constraints);
    };
}

},{"@parcel/transformer-js/src/esmodule-helpers.js":"jnFvT"}],"8DlmS":[function(require,module,exports,__globalThis) {
/*
 *  Copyright (c) 2016 The WebRTC project authors. All Rights Reserved.
 *
 *  Use of this source code is governed by a BSD-style license
 *  that can be found in the LICENSE file in the root of the source
 *  tree.
 */ var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "shimLocalStreamsAPI", ()=>shimLocalStreamsAPI);
parcelHelpers.export(exports, "shimRemoteStreamsAPI", ()=>shimRemoteStreamsAPI);
parcelHelpers.export(exports, "shimCallbacksAPI", ()=>shimCallbacksAPI);
parcelHelpers.export(exports, "shimGetUserMedia", ()=>shimGetUserMedia);
parcelHelpers.export(exports, "shimConstraints", ()=>shimConstraints);
parcelHelpers.export(exports, "shimRTCIceServerUrls", ()=>shimRTCIceServerUrls);
parcelHelpers.export(exports, "shimTrackEventTransceiver", ()=>shimTrackEventTransceiver);
parcelHelpers.export(exports, "shimCreateOfferLegacy", ()=>shimCreateOfferLegacy);
parcelHelpers.export(exports, "shimAudioContext", ()=>shimAudioContext);
var _utils = require("../utils");
'use strict';
function shimLocalStreamsAPI(window) {
    if (typeof window !== 'object' || !window.RTCPeerConnection) return;
    if (!('getLocalStreams' in window.RTCPeerConnection.prototype)) window.RTCPeerConnection.prototype.getLocalStreams = function getLocalStreams() {
        if (!this._localStreams) this._localStreams = [];
        return this._localStreams;
    };
    if (!('addStream' in window.RTCPeerConnection.prototype)) {
        const _addTrack = window.RTCPeerConnection.prototype.addTrack;
        window.RTCPeerConnection.prototype.addStream = function addStream(stream) {
            if (!this._localStreams) this._localStreams = [];
            if (!this._localStreams.includes(stream)) this._localStreams.push(stream);
            // Try to emulate Chrome's behaviour of adding in audio-video order.
            // Safari orders by track id.
            stream.getAudioTracks().forEach((track)=>_addTrack.call(this, track, stream));
            stream.getVideoTracks().forEach((track)=>_addTrack.call(this, track, stream));
        };
        window.RTCPeerConnection.prototype.addTrack = function addTrack(track, ...streams) {
            if (streams) streams.forEach((stream)=>{
                if (!this._localStreams) this._localStreams = [
                    stream
                ];
                else if (!this._localStreams.includes(stream)) this._localStreams.push(stream);
            });
            return _addTrack.apply(this, arguments);
        };
    }
    if (!('removeStream' in window.RTCPeerConnection.prototype)) window.RTCPeerConnection.prototype.removeStream = function removeStream(stream) {
        if (!this._localStreams) this._localStreams = [];
        const index = this._localStreams.indexOf(stream);
        if (index === -1) return;
        this._localStreams.splice(index, 1);
        const tracks = stream.getTracks();
        this.getSenders().forEach((sender)=>{
            if (tracks.includes(sender.track)) this.removeTrack(sender);
        });
    };
}
function shimRemoteStreamsAPI(window) {
    if (typeof window !== 'object' || !window.RTCPeerConnection) return;
    if (!('getRemoteStreams' in window.RTCPeerConnection.prototype)) window.RTCPeerConnection.prototype.getRemoteStreams = function getRemoteStreams() {
        return this._remoteStreams ? this._remoteStreams : [];
    };
    if (!('onaddstream' in window.RTCPeerConnection.prototype)) {
        Object.defineProperty(window.RTCPeerConnection.prototype, 'onaddstream', {
            get () {
                return this._onaddstream;
            },
            set (f) {
                if (this._onaddstream) {
                    this.removeEventListener('addstream', this._onaddstream);
                    this.removeEventListener('track', this._onaddstreampoly);
                }
                this.addEventListener('addstream', this._onaddstream = f);
                this.addEventListener('track', this._onaddstreampoly = (e)=>{
                    e.streams.forEach((stream)=>{
                        if (!this._remoteStreams) this._remoteStreams = [];
                        if (this._remoteStreams.includes(stream)) return;
                        this._remoteStreams.push(stream);
                        const event = new Event('addstream');
                        event.stream = stream;
                        this.dispatchEvent(event);
                    });
                });
            }
        });
        const origSetRemoteDescription = window.RTCPeerConnection.prototype.setRemoteDescription;
        window.RTCPeerConnection.prototype.setRemoteDescription = function setRemoteDescription() {
            const pc = this;
            if (!this._onaddstreampoly) this.addEventListener('track', this._onaddstreampoly = function(e) {
                e.streams.forEach((stream)=>{
                    if (!pc._remoteStreams) pc._remoteStreams = [];
                    if (pc._remoteStreams.indexOf(stream) >= 0) return;
                    pc._remoteStreams.push(stream);
                    const event = new Event('addstream');
                    event.stream = stream;
                    pc.dispatchEvent(event);
                });
            });
            return origSetRemoteDescription.apply(pc, arguments);
        };
    }
}
function shimCallbacksAPI(window) {
    if (typeof window !== 'object' || !window.RTCPeerConnection) return;
    const prototype = window.RTCPeerConnection.prototype;
    const origCreateOffer = prototype.createOffer;
    const origCreateAnswer = prototype.createAnswer;
    const setLocalDescription = prototype.setLocalDescription;
    const setRemoteDescription = prototype.setRemoteDescription;
    const addIceCandidate = prototype.addIceCandidate;
    prototype.createOffer = function createOffer(successCallback, failureCallback) {
        const options = arguments.length >= 2 ? arguments[2] : arguments[0];
        const promise = origCreateOffer.apply(this, [
            options
        ]);
        if (!failureCallback) return promise;
        promise.then(successCallback, failureCallback);
        return Promise.resolve();
    };
    prototype.createAnswer = function createAnswer(successCallback, failureCallback) {
        const options = arguments.length >= 2 ? arguments[2] : arguments[0];
        const promise = origCreateAnswer.apply(this, [
            options
        ]);
        if (!failureCallback) return promise;
        promise.then(successCallback, failureCallback);
        return Promise.resolve();
    };
    let withCallback = function(description, successCallback, failureCallback) {
        const promise = setLocalDescription.apply(this, [
            description
        ]);
        if (!failureCallback) return promise;
        promise.then(successCallback, failureCallback);
        return Promise.resolve();
    };
    prototype.setLocalDescription = withCallback;
    withCallback = function(description, successCallback, failureCallback) {
        const promise = setRemoteDescription.apply(this, [
            description
        ]);
        if (!failureCallback) return promise;
        promise.then(successCallback, failureCallback);
        return Promise.resolve();
    };
    prototype.setRemoteDescription = withCallback;
    withCallback = function(candidate, successCallback, failureCallback) {
        const promise = addIceCandidate.apply(this, [
            candidate
        ]);
        if (!failureCallback) return promise;
        promise.then(successCallback, failureCallback);
        return Promise.resolve();
    };
    prototype.addIceCandidate = withCallback;
}
function shimGetUserMedia(window) {
    const navigator = window && window.navigator;
    if (navigator.mediaDevices && navigator.mediaDevices.getUserMedia) {
        // shim not needed in Safari 12.1
        const mediaDevices = navigator.mediaDevices;
        const _getUserMedia = mediaDevices.getUserMedia.bind(mediaDevices);
        navigator.mediaDevices.getUserMedia = (constraints)=>{
            return _getUserMedia(shimConstraints(constraints));
        };
    }
    if (!navigator.getUserMedia && navigator.mediaDevices && navigator.mediaDevices.getUserMedia) navigator.getUserMedia = (function getUserMedia(constraints, cb, errcb) {
        navigator.mediaDevices.getUserMedia(constraints).then(cb, errcb);
    }).bind(navigator);
}
function shimConstraints(constraints) {
    if (constraints && constraints.video !== undefined) return Object.assign({}, constraints, {
        video: _utils.compactObject(constraints.video)
    });
    return constraints;
}
function shimRTCIceServerUrls(window) {
    if (!window.RTCPeerConnection) return;
    // migrate from non-spec RTCIceServer.url to RTCIceServer.urls
    const OrigPeerConnection = window.RTCPeerConnection;
    window.RTCPeerConnection = function RTCPeerConnection(pcConfig, pcConstraints) {
        if (pcConfig && pcConfig.iceServers) {
            const newIceServers = [];
            for(let i = 0; i < pcConfig.iceServers.length; i++){
                let server = pcConfig.iceServers[i];
                if (server.urls === undefined && server.url) {
                    _utils.deprecated('RTCIceServer.url', 'RTCIceServer.urls');
                    server = JSON.parse(JSON.stringify(server));
                    server.urls = server.url;
                    delete server.url;
                    newIceServers.push(server);
                } else newIceServers.push(pcConfig.iceServers[i]);
            }
            pcConfig.iceServers = newIceServers;
        }
        return new OrigPeerConnection(pcConfig, pcConstraints);
    };
    window.RTCPeerConnection.prototype = OrigPeerConnection.prototype;
    // wrap static methods. Currently just generateCertificate.
    if ('generateCertificate' in OrigPeerConnection) Object.defineProperty(window.RTCPeerConnection, 'generateCertificate', {
        get () {
            return OrigPeerConnection.generateCertificate;
        }
    });
}
function shimTrackEventTransceiver(window) {
    // Add event.transceiver member over deprecated event.receiver
    if (typeof window === 'object' && window.RTCTrackEvent && 'receiver' in window.RTCTrackEvent.prototype && !('transceiver' in window.RTCTrackEvent.prototype)) Object.defineProperty(window.RTCTrackEvent.prototype, 'transceiver', {
        get () {
            return {
                receiver: this.receiver
            };
        }
    });
}
function shimCreateOfferLegacy(window) {
    const origCreateOffer = window.RTCPeerConnection.prototype.createOffer;
    window.RTCPeerConnection.prototype.createOffer = function createOffer(offerOptions) {
        if (offerOptions) {
            if (typeof offerOptions.offerToReceiveAudio !== 'undefined') // support bit values
            offerOptions.offerToReceiveAudio = !!offerOptions.offerToReceiveAudio;
            const audioTransceiver = this.getTransceivers().find((transceiver)=>transceiver.receiver.track.kind === 'audio');
            if (offerOptions.offerToReceiveAudio === false && audioTransceiver) {
                if (audioTransceiver.direction === 'sendrecv') {
                    if (audioTransceiver.setDirection) audioTransceiver.setDirection('sendonly');
                    else audioTransceiver.direction = 'sendonly';
                } else if (audioTransceiver.direction === 'recvonly') {
                    if (audioTransceiver.setDirection) audioTransceiver.setDirection('inactive');
                    else audioTransceiver.direction = 'inactive';
                }
            } else if (offerOptions.offerToReceiveAudio === true && !audioTransceiver) this.addTransceiver('audio', {
                direction: 'recvonly'
            });
            if (typeof offerOptions.offerToReceiveVideo !== 'undefined') // support bit values
            offerOptions.offerToReceiveVideo = !!offerOptions.offerToReceiveVideo;
            const videoTransceiver = this.getTransceivers().find((transceiver)=>transceiver.receiver.track.kind === 'video');
            if (offerOptions.offerToReceiveVideo === false && videoTransceiver) {
                if (videoTransceiver.direction === 'sendrecv') {
                    if (videoTransceiver.setDirection) videoTransceiver.setDirection('sendonly');
                    else videoTransceiver.direction = 'sendonly';
                } else if (videoTransceiver.direction === 'recvonly') {
                    if (videoTransceiver.setDirection) videoTransceiver.setDirection('inactive');
                    else videoTransceiver.direction = 'inactive';
                }
            } else if (offerOptions.offerToReceiveVideo === true && !videoTransceiver) this.addTransceiver('video', {
                direction: 'recvonly'
            });
        }
        return origCreateOffer.apply(this, arguments);
    };
}
function shimAudioContext(window) {
    if (typeof window !== 'object' || window.AudioContext) return;
    window.AudioContext = window.webkitAudioContext;
}

},{"../utils":"130jN","@parcel/transformer-js/src/esmodule-helpers.js":"jnFvT"}],"bXwPT":[function(require,module,exports,__globalThis) {
/*
 *  Copyright (c) 2017 The WebRTC project authors. All Rights Reserved.
 *
 *  Use of this source code is governed by a BSD-style license
 *  that can be found in the LICENSE file in the root of the source
 *  tree.
 */ /* eslint-env node */ var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "shimRTCIceCandidate", ()=>shimRTCIceCandidate);
parcelHelpers.export(exports, "shimRTCIceCandidateRelayProtocol", ()=>shimRTCIceCandidateRelayProtocol);
parcelHelpers.export(exports, "shimMaxMessageSize", ()=>shimMaxMessageSize);
parcelHelpers.export(exports, "shimSendThrowTypeError", ()=>shimSendThrowTypeError);
/* shims RTCConnectionState by pretending it is the same as iceConnectionState.
 * See https://bugs.chromium.org/p/webrtc/issues/detail?id=6145#c12
 * for why this is a valid hack in Chrome. In Firefox it is slightly incorrect
 * since DTLS failures would be hidden. See
 * https://bugzilla.mozilla.org/show_bug.cgi?id=1265827
 * for the Firefox tracking bug.
 */ parcelHelpers.export(exports, "shimConnectionState", ()=>shimConnectionState);
parcelHelpers.export(exports, "removeExtmapAllowMixed", ()=>removeExtmapAllowMixed);
parcelHelpers.export(exports, "shimAddIceCandidateNullOrEmpty", ()=>shimAddIceCandidateNullOrEmpty);
// Note: Make sure to call this ahead of APIs that modify
// setLocalDescription.length
parcelHelpers.export(exports, "shimParameterlessSetLocalDescription", ()=>shimParameterlessSetLocalDescription);
var _sdp = require("sdp");
var _sdpDefault = parcelHelpers.interopDefault(_sdp);
var _utils = require("./utils");
'use strict';
function shimRTCIceCandidate(window) {
    // foundation is arbitrarily chosen as an indicator for full support for
    // https://w3c.github.io/webrtc-pc/#rtcicecandidate-interface
    if (!window.RTCIceCandidate || window.RTCIceCandidate && 'foundation' in window.RTCIceCandidate.prototype) return;
    const NativeRTCIceCandidate = window.RTCIceCandidate;
    window.RTCIceCandidate = function RTCIceCandidate(args) {
        // Remove the a= which shouldn't be part of the candidate string.
        if (typeof args === 'object' && args.candidate && args.candidate.indexOf('a=') === 0) {
            args = JSON.parse(JSON.stringify(args));
            args.candidate = args.candidate.substring(2);
        }
        if (args.candidate && args.candidate.length) {
            // Augment the native candidate with the parsed fields.
            const nativeCandidate = new NativeRTCIceCandidate(args);
            const parsedCandidate = (0, _sdpDefault.default).parseCandidate(args.candidate);
            for(const key in parsedCandidate)if (!(key in nativeCandidate)) Object.defineProperty(nativeCandidate, key, {
                value: parsedCandidate[key]
            });
            // Override serializer to not serialize the extra attributes.
            nativeCandidate.toJSON = function toJSON() {
                return {
                    candidate: nativeCandidate.candidate,
                    sdpMid: nativeCandidate.sdpMid,
                    sdpMLineIndex: nativeCandidate.sdpMLineIndex,
                    usernameFragment: nativeCandidate.usernameFragment
                };
            };
            return nativeCandidate;
        }
        return new NativeRTCIceCandidate(args);
    };
    window.RTCIceCandidate.prototype = NativeRTCIceCandidate.prototype;
    // Hook up the augmented candidate in onicecandidate and
    // addEventListener('icecandidate', ...)
    _utils.wrapPeerConnectionEvent(window, 'icecandidate', (e)=>{
        if (e.candidate) Object.defineProperty(e, 'candidate', {
            value: new window.RTCIceCandidate(e.candidate),
            writable: 'false'
        });
        return e;
    });
}
function shimRTCIceCandidateRelayProtocol(window) {
    if (!window.RTCIceCandidate || window.RTCIceCandidate && 'relayProtocol' in window.RTCIceCandidate.prototype) return;
    // Hook up the augmented candidate in onicecandidate and
    // addEventListener('icecandidate', ...)
    _utils.wrapPeerConnectionEvent(window, 'icecandidate', (e)=>{
        if (e.candidate) {
            const parsedCandidate = (0, _sdpDefault.default).parseCandidate(e.candidate.candidate);
            if (parsedCandidate.type === 'relay') // This is a libwebrtc-specific mapping of local type preference
            // to relayProtocol.
            e.candidate.relayProtocol = ({
                0: 'tls',
                1: 'tcp',
                2: 'udp'
            })[parsedCandidate.priority >> 24];
        }
        return e;
    });
}
function shimMaxMessageSize(window, browserDetails) {
    if (!window.RTCPeerConnection) return;
    if (!('sctp' in window.RTCPeerConnection.prototype)) Object.defineProperty(window.RTCPeerConnection.prototype, 'sctp', {
        get () {
            return typeof this._sctp === 'undefined' ? null : this._sctp;
        }
    });
    const sctpInDescription = function(description) {
        if (!description || !description.sdp) return false;
        const sections = (0, _sdpDefault.default).splitSections(description.sdp);
        sections.shift();
        return sections.some((mediaSection)=>{
            const mLine = (0, _sdpDefault.default).parseMLine(mediaSection);
            return mLine && mLine.kind === 'application' && mLine.protocol.indexOf('SCTP') !== -1;
        });
    };
    const getRemoteFirefoxVersion = function(description) {
        // TODO: Is there a better solution for detecting Firefox?
        const match = description.sdp.match(/mozilla...THIS_IS_SDPARTA-(\d+)/);
        if (match === null || match.length < 2) return -1;
        const version = parseInt(match[1], 10);
        // Test for NaN (yes, this is ugly)
        return version !== version ? -1 : version;
    };
    const getCanSendMaxMessageSize = function(remoteIsFirefox) {
        // Every implementation we know can send at least 64 KiB.
        // Note: Although Chrome is technically able to send up to 256 KiB, the
        //       data does not reach the other peer reliably.
        //       See: https://bugs.chromium.org/p/webrtc/issues/detail?id=8419
        let canSendMaxMessageSize = 65536;
        if (browserDetails.browser === 'firefox') {
            if (browserDetails.version < 57) {
                if (remoteIsFirefox === -1) // FF < 57 will send in 16 KiB chunks using the deprecated PPID
                // fragmentation.
                canSendMaxMessageSize = 16384;
                else // However, other FF (and RAWRTC) can reassemble PPID-fragmented
                // messages. Thus, supporting ~2 GiB when sending.
                canSendMaxMessageSize = 2147483637;
            } else if (browserDetails.version < 60) // Currently, all FF >= 57 will reset the remote maximum message size
            // to the default value when a data channel is created at a later
            // stage. :(
            // See: https://bugzilla.mozilla.org/show_bug.cgi?id=1426831
            canSendMaxMessageSize = browserDetails.version === 57 ? 65535 : 65536;
            else // FF >= 60 supports sending ~2 GiB
            canSendMaxMessageSize = 2147483637;
        }
        return canSendMaxMessageSize;
    };
    const getMaxMessageSize = function(description, remoteIsFirefox) {
        // Note: 65536 bytes is the default value from the SDP spec. Also,
        //       every implementation we know supports receiving 65536 bytes.
        let maxMessageSize = 65536;
        // FF 57 has a slightly incorrect default remote max message size, so
        // we need to adjust it here to avoid a failure when sending.
        // See: https://bugzilla.mozilla.org/show_bug.cgi?id=1425697
        if (browserDetails.browser === 'firefox' && browserDetails.version === 57) maxMessageSize = 65535;
        const match = (0, _sdpDefault.default).matchPrefix(description.sdp, 'a=max-message-size:');
        if (match.length > 0) maxMessageSize = parseInt(match[0].substring(19), 10);
        else if (browserDetails.browser === 'firefox' && remoteIsFirefox !== -1) // If the maximum message size is not present in the remote SDP and
        // both local and remote are Firefox, the remote peer can receive
        // ~2 GiB.
        maxMessageSize = 2147483637;
        return maxMessageSize;
    };
    const origSetRemoteDescription = window.RTCPeerConnection.prototype.setRemoteDescription;
    window.RTCPeerConnection.prototype.setRemoteDescription = function setRemoteDescription() {
        this._sctp = null;
        // Chrome decided to not expose .sctp in plan-b mode.
        // As usual, adapter.js has to do an 'ugly worakaround'
        // to cover up the mess.
        if (browserDetails.browser === 'chrome' && browserDetails.version >= 76) {
            const { sdpSemantics } = this.getConfiguration();
            if (sdpSemantics === 'plan-b') Object.defineProperty(this, 'sctp', {
                get () {
                    return typeof this._sctp === 'undefined' ? null : this._sctp;
                },
                enumerable: true,
                configurable: true
            });
        }
        if (sctpInDescription(arguments[0])) {
            // Check if the remote is FF.
            const isFirefox = getRemoteFirefoxVersion(arguments[0]);
            // Get the maximum message size the local peer is capable of sending
            const canSendMMS = getCanSendMaxMessageSize(isFirefox);
            // Get the maximum message size of the remote peer.
            const remoteMMS = getMaxMessageSize(arguments[0], isFirefox);
            // Determine final maximum message size
            let maxMessageSize;
            if (canSendMMS === 0 && remoteMMS === 0) maxMessageSize = Number.POSITIVE_INFINITY;
            else if (canSendMMS === 0 || remoteMMS === 0) maxMessageSize = Math.max(canSendMMS, remoteMMS);
            else maxMessageSize = Math.min(canSendMMS, remoteMMS);
            // Create a dummy RTCSctpTransport object and the 'maxMessageSize'
            // attribute.
            const sctp = {};
            Object.defineProperty(sctp, 'maxMessageSize', {
                get () {
                    return maxMessageSize;
                }
            });
            this._sctp = sctp;
        }
        return origSetRemoteDescription.apply(this, arguments);
    };
}
function shimSendThrowTypeError(window) {
    if (!(window.RTCPeerConnection && 'createDataChannel' in window.RTCPeerConnection.prototype)) return;
    // Note: Although Firefox >= 57 has a native implementation, the maximum
    //       message size can be reset for all data channels at a later stage.
    //       See: https://bugzilla.mozilla.org/show_bug.cgi?id=1426831
    function wrapDcSend(dc, pc) {
        const origDataChannelSend = dc.send;
        dc.send = function send() {
            const data = arguments[0];
            const length = data.length || data.size || data.byteLength;
            if (dc.readyState === 'open' && pc.sctp && length > pc.sctp.maxMessageSize) throw new TypeError('Message too large (can send a maximum of ' + pc.sctp.maxMessageSize + ' bytes)');
            return origDataChannelSend.apply(dc, arguments);
        };
    }
    const origCreateDataChannel = window.RTCPeerConnection.prototype.createDataChannel;
    window.RTCPeerConnection.prototype.createDataChannel = function createDataChannel() {
        const dataChannel = origCreateDataChannel.apply(this, arguments);
        wrapDcSend(dataChannel, this);
        return dataChannel;
    };
    _utils.wrapPeerConnectionEvent(window, 'datachannel', (e)=>{
        wrapDcSend(e.channel, e.target);
        return e;
    });
}
function shimConnectionState(window) {
    if (!window.RTCPeerConnection || 'connectionState' in window.RTCPeerConnection.prototype) return;
    const proto = window.RTCPeerConnection.prototype;
    Object.defineProperty(proto, 'connectionState', {
        get () {
            return ({
                completed: 'connected',
                checking: 'connecting'
            })[this.iceConnectionState] || this.iceConnectionState;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(proto, 'onconnectionstatechange', {
        get () {
            return this._onconnectionstatechange || null;
        },
        set (cb) {
            if (this._onconnectionstatechange) {
                this.removeEventListener('connectionstatechange', this._onconnectionstatechange);
                delete this._onconnectionstatechange;
            }
            if (cb) this.addEventListener('connectionstatechange', this._onconnectionstatechange = cb);
        },
        enumerable: true,
        configurable: true
    });
    [
        'setLocalDescription',
        'setRemoteDescription'
    ].forEach((method)=>{
        const origMethod = proto[method];
        proto[method] = function() {
            if (!this._connectionstatechangepoly) {
                this._connectionstatechangepoly = (e)=>{
                    const pc = e.target;
                    if (pc._lastConnectionState !== pc.connectionState) {
                        pc._lastConnectionState = pc.connectionState;
                        const newEvent = new Event('connectionstatechange', e);
                        pc.dispatchEvent(newEvent);
                    }
                    return e;
                };
                this.addEventListener('iceconnectionstatechange', this._connectionstatechangepoly);
            }
            return origMethod.apply(this, arguments);
        };
    });
}
function removeExtmapAllowMixed(window, browserDetails) {
    /* remove a=extmap-allow-mixed for webrtc.org < M71 */ if (!window.RTCPeerConnection) return;
    if (browserDetails.browser === 'chrome' && browserDetails.version >= 71) return;
    if (browserDetails.browser === 'safari' && browserDetails._safariVersion >= 13.1) return;
    const nativeSRD = window.RTCPeerConnection.prototype.setRemoteDescription;
    window.RTCPeerConnection.prototype.setRemoteDescription = function setRemoteDescription(desc) {
        if (desc && desc.sdp && desc.sdp.indexOf('\na=extmap-allow-mixed') !== -1) {
            const sdp = desc.sdp.split('\n').filter((line)=>{
                return line.trim() !== 'a=extmap-allow-mixed';
            }).join('\n');
            // Safari enforces read-only-ness of RTCSessionDescription fields.
            if (window.RTCSessionDescription && desc instanceof window.RTCSessionDescription) arguments[0] = new window.RTCSessionDescription({
                type: desc.type,
                sdp
            });
            else desc.sdp = sdp;
        }
        return nativeSRD.apply(this, arguments);
    };
}
function shimAddIceCandidateNullOrEmpty(window, browserDetails) {
    // Support for addIceCandidate(null or undefined)
    // as well as addIceCandidate({candidate: "", ...})
    // https://bugs.chromium.org/p/chromium/issues/detail?id=978582
    // Note: must be called before other polyfills which change the signature.
    if (!(window.RTCPeerConnection && window.RTCPeerConnection.prototype)) return;
    const nativeAddIceCandidate = window.RTCPeerConnection.prototype.addIceCandidate;
    if (!nativeAddIceCandidate || nativeAddIceCandidate.length === 0) return;
    window.RTCPeerConnection.prototype.addIceCandidate = function addIceCandidate() {
        if (!arguments[0]) {
            if (arguments[1]) arguments[1].apply(null);
            return Promise.resolve();
        }
        // Firefox 68+ emits and processes {candidate: "", ...}, ignore
        // in older versions.
        // Native support for ignoring exists for Chrome M77+.
        // Safari ignores as well, exact version unknown but works in the same
        // version that also ignores addIceCandidate(null).
        if ((browserDetails.browser === 'chrome' && browserDetails.version < 78 || browserDetails.browser === 'firefox' && browserDetails.version < 68 || browserDetails.browser === 'safari') && arguments[0] && arguments[0].candidate === '') return Promise.resolve();
        return nativeAddIceCandidate.apply(this, arguments);
    };
}
function shimParameterlessSetLocalDescription(window, browserDetails) {
    if (!(window.RTCPeerConnection && window.RTCPeerConnection.prototype)) return;
    const nativeSetLocalDescription = window.RTCPeerConnection.prototype.setLocalDescription;
    if (!nativeSetLocalDescription || nativeSetLocalDescription.length === 0) return;
    window.RTCPeerConnection.prototype.setLocalDescription = function setLocalDescription() {
        let desc = arguments[0] || {};
        if (typeof desc !== 'object' || desc.type && desc.sdp) return nativeSetLocalDescription.apply(this, arguments);
        // The remaining steps should technically happen when SLD comes off the
        // RTCPeerConnection's operations chain (not ahead of going on it), but
        // this is too difficult to shim. Instead, this shim only covers the
        // common case where the operations chain is empty. This is imperfect, but
        // should cover many cases. Rationale: Even if we can't reduce the glare
        // window to zero on imperfect implementations, there's value in tapping
        // into the perfect negotiation pattern that several browsers support.
        desc = {
            type: desc.type,
            sdp: desc.sdp
        };
        if (!desc.type) switch(this.signalingState){
            case 'stable':
            case 'have-local-offer':
            case 'have-remote-pranswer':
                desc.type = 'offer';
                break;
            default:
                desc.type = 'answer';
                break;
        }
        if (desc.sdp || desc.type !== 'offer' && desc.type !== 'answer') return nativeSetLocalDescription.apply(this, [
            desc
        ]);
        const func = desc.type === 'offer' ? this.createOffer : this.createAnswer;
        return func.apply(this).then((d)=>nativeSetLocalDescription.apply(this, [
                d
            ]));
    };
}

},{"sdp":"ipaHk","./utils":"130jN","@parcel/transformer-js/src/esmodule-helpers.js":"jnFvT"}],"ipaHk":[function(require,module,exports,__globalThis) {
/* eslint-env node */ 'use strict';
// SDP helpers.
const SDPUtils = {};
// Generate an alphanumeric identifier for cname or mids.
// TODO: use UUIDs instead? https://gist.github.com/jed/982883
SDPUtils.generateIdentifier = function() {
    return Math.random().toString(36).substring(2, 12);
};
// The RTCP CNAME used by all peerconnections from the same JS.
SDPUtils.localCName = SDPUtils.generateIdentifier();
// Splits SDP into lines, dealing with both CRLF and LF.
SDPUtils.splitLines = function(blob) {
    return blob.trim().split('\n').map((line)=>line.trim());
};
// Splits SDP into sessionpart and mediasections. Ensures CRLF.
SDPUtils.splitSections = function(blob) {
    const parts = blob.split('\nm=');
    return parts.map((part, index)=>(index > 0 ? 'm=' + part : part).trim() + '\r\n');
};
// Returns the session description.
SDPUtils.getDescription = function(blob) {
    const sections = SDPUtils.splitSections(blob);
    return sections && sections[0];
};
// Returns the individual media sections.
SDPUtils.getMediaSections = function(blob) {
    const sections = SDPUtils.splitSections(blob);
    sections.shift();
    return sections;
};
// Returns lines that start with a certain prefix.
SDPUtils.matchPrefix = function(blob, prefix) {
    return SDPUtils.splitLines(blob).filter((line)=>line.indexOf(prefix) === 0);
};
// Parses an ICE candidate line. Sample input:
// candidate:702786350 2 udp 41819902 8.8.8.8 60769 typ relay raddr 8.8.8.8
// rport 55996"
// Input can be prefixed with a=.
SDPUtils.parseCandidate = function(line) {
    let parts;
    // Parse both variants.
    if (line.indexOf('a=candidate:') === 0) parts = line.substring(12).split(' ');
    else parts = line.substring(10).split(' ');
    const candidate = {
        foundation: parts[0],
        component: {
            1: 'rtp',
            2: 'rtcp'
        }[parts[1]] || parts[1],
        protocol: parts[2].toLowerCase(),
        priority: parseInt(parts[3], 10),
        ip: parts[4],
        address: parts[4],
        port: parseInt(parts[5], 10),
        // skip parts[6] == 'typ'
        type: parts[7]
    };
    for(let i = 8; i < parts.length; i += 2)switch(parts[i]){
        case 'raddr':
            candidate.relatedAddress = parts[i + 1];
            break;
        case 'rport':
            candidate.relatedPort = parseInt(parts[i + 1], 10);
            break;
        case 'tcptype':
            candidate.tcpType = parts[i + 1];
            break;
        case 'ufrag':
            candidate.ufrag = parts[i + 1]; // for backward compatibility.
            candidate.usernameFragment = parts[i + 1];
            break;
        default:
            if (candidate[parts[i]] === undefined) candidate[parts[i]] = parts[i + 1];
            break;
    }
    return candidate;
};
// Translates a candidate object into SDP candidate attribute.
// This does not include the a= prefix!
SDPUtils.writeCandidate = function(candidate) {
    const sdp = [];
    sdp.push(candidate.foundation);
    const component = candidate.component;
    if (component === 'rtp') sdp.push(1);
    else if (component === 'rtcp') sdp.push(2);
    else sdp.push(component);
    sdp.push(candidate.protocol.toUpperCase());
    sdp.push(candidate.priority);
    sdp.push(candidate.address || candidate.ip);
    sdp.push(candidate.port);
    const type = candidate.type;
    sdp.push('typ');
    sdp.push(type);
    if (type !== 'host' && candidate.relatedAddress && candidate.relatedPort) {
        sdp.push('raddr');
        sdp.push(candidate.relatedAddress);
        sdp.push('rport');
        sdp.push(candidate.relatedPort);
    }
    if (candidate.tcpType && candidate.protocol.toLowerCase() === 'tcp') {
        sdp.push('tcptype');
        sdp.push(candidate.tcpType);
    }
    if (candidate.usernameFragment || candidate.ufrag) {
        sdp.push('ufrag');
        sdp.push(candidate.usernameFragment || candidate.ufrag);
    }
    return 'candidate:' + sdp.join(' ');
};
// Parses an ice-options line, returns an array of option tags.
// Sample input:
// a=ice-options:foo bar
SDPUtils.parseIceOptions = function(line) {
    return line.substring(14).split(' ');
};
// Parses a rtpmap line, returns RTCRtpCoddecParameters. Sample input:
// a=rtpmap:111 opus/48000/2
SDPUtils.parseRtpMap = function(line) {
    let parts = line.substring(9).split(' ');
    const parsed = {
        payloadType: parseInt(parts.shift(), 10)
    };
    parts = parts[0].split('/');
    parsed.name = parts[0];
    parsed.clockRate = parseInt(parts[1], 10); // was: clockrate
    parsed.channels = parts.length === 3 ? parseInt(parts[2], 10) : 1;
    // legacy alias, got renamed back to channels in ORTC.
    parsed.numChannels = parsed.channels;
    return parsed;
};
// Generates a rtpmap line from RTCRtpCodecCapability or
// RTCRtpCodecParameters.
SDPUtils.writeRtpMap = function(codec) {
    let pt = codec.payloadType;
    if (codec.preferredPayloadType !== undefined) pt = codec.preferredPayloadType;
    const channels = codec.channels || codec.numChannels || 1;
    return 'a=rtpmap:' + pt + ' ' + codec.name + '/' + codec.clockRate + (channels !== 1 ? '/' + channels : '') + '\r\n';
};
// Parses a extmap line (headerextension from RFC 5285). Sample input:
// a=extmap:2 urn:ietf:params:rtp-hdrext:toffset
// a=extmap:2/sendonly urn:ietf:params:rtp-hdrext:toffset
SDPUtils.parseExtmap = function(line) {
    const parts = line.substring(9).split(' ');
    return {
        id: parseInt(parts[0], 10),
        direction: parts[0].indexOf('/') > 0 ? parts[0].split('/')[1] : 'sendrecv',
        uri: parts[1],
        attributes: parts.slice(2).join(' ')
    };
};
// Generates an extmap line from RTCRtpHeaderExtensionParameters or
// RTCRtpHeaderExtension.
SDPUtils.writeExtmap = function(headerExtension) {
    return 'a=extmap:' + (headerExtension.id || headerExtension.preferredId) + (headerExtension.direction && headerExtension.direction !== 'sendrecv' ? '/' + headerExtension.direction : '') + ' ' + headerExtension.uri + (headerExtension.attributes ? ' ' + headerExtension.attributes : '') + '\r\n';
};
// Parses a fmtp line, returns dictionary. Sample input:
// a=fmtp:96 vbr=on;cng=on
// Also deals with vbr=on; cng=on
// Non-key-value such as telephone-events `0-15` get parsed as
// {`0-15`:undefined}
SDPUtils.parseFmtp = function(line) {
    const parsed = {};
    let kv;
    const parts = line.substring(line.indexOf(' ') + 1).split(';');
    for(let j = 0; j < parts.length; j++){
        kv = parts[j].trim().split('=');
        parsed[kv[0].trim()] = kv[1];
    }
    return parsed;
};
// Generates a fmtp line from RTCRtpCodecCapability or RTCRtpCodecParameters.
SDPUtils.writeFmtp = function(codec) {
    let line = '';
    let pt = codec.payloadType;
    if (codec.preferredPayloadType !== undefined) pt = codec.preferredPayloadType;
    if (codec.parameters && Object.keys(codec.parameters).length) {
        const params = [];
        Object.keys(codec.parameters).forEach((param)=>{
            if (codec.parameters[param] !== undefined) params.push(param + '=' + codec.parameters[param]);
            else params.push(param);
        });
        line += 'a=fmtp:' + pt + ' ' + params.join(';') + '\r\n';
    }
    return line;
};
// Parses a rtcp-fb line, returns RTCPRtcpFeedback object. Sample input:
// a=rtcp-fb:98 nack rpsi
SDPUtils.parseRtcpFb = function(line) {
    const parts = line.substring(line.indexOf(' ') + 1).split(' ');
    return {
        type: parts.shift(),
        parameter: parts.join(' ')
    };
};
// Generate a=rtcp-fb lines from RTCRtpCodecCapability or RTCRtpCodecParameters.
SDPUtils.writeRtcpFb = function(codec) {
    let lines = '';
    let pt = codec.payloadType;
    if (codec.preferredPayloadType !== undefined) pt = codec.preferredPayloadType;
    if (codec.rtcpFeedback && codec.rtcpFeedback.length) // FIXME: special handling for trr-int?
    codec.rtcpFeedback.forEach((fb)=>{
        lines += 'a=rtcp-fb:' + pt + ' ' + fb.type + (fb.parameter && fb.parameter.length ? ' ' + fb.parameter : '') + '\r\n';
    });
    return lines;
};
// Parses a RFC 5576 ssrc media attribute. Sample input:
// a=ssrc:3735928559 cname:something
SDPUtils.parseSsrcMedia = function(line) {
    const sp = line.indexOf(' ');
    const parts = {
        ssrc: parseInt(line.substring(7, sp), 10)
    };
    const colon = line.indexOf(':', sp);
    if (colon > -1) {
        parts.attribute = line.substring(sp + 1, colon);
        parts.value = line.substring(colon + 1);
    } else parts.attribute = line.substring(sp + 1);
    return parts;
};
// Parse a ssrc-group line (see RFC 5576). Sample input:
// a=ssrc-group:semantics 12 34
SDPUtils.parseSsrcGroup = function(line) {
    const parts = line.substring(13).split(' ');
    return {
        semantics: parts.shift(),
        ssrcs: parts.map((ssrc)=>parseInt(ssrc, 10))
    };
};
// Extracts the MID (RFC 5888) from a media section.
// Returns the MID or undefined if no mid line was found.
SDPUtils.getMid = function(mediaSection) {
    const mid = SDPUtils.matchPrefix(mediaSection, 'a=mid:')[0];
    if (mid) return mid.substring(6);
};
// Parses a fingerprint line for DTLS-SRTP.
SDPUtils.parseFingerprint = function(line) {
    const parts = line.substring(14).split(' ');
    return {
        algorithm: parts[0].toLowerCase(),
        value: parts[1].toUpperCase()
    };
};
// Extracts DTLS parameters from SDP media section or sessionpart.
// FIXME: for consistency with other functions this should only
//   get the fingerprint line as input. See also getIceParameters.
SDPUtils.getDtlsParameters = function(mediaSection, sessionpart) {
    const lines = SDPUtils.matchPrefix(mediaSection + sessionpart, 'a=fingerprint:');
    // Note: a=setup line is ignored since we use the 'auto' role in Edge.
    return {
        role: 'auto',
        fingerprints: lines.map(SDPUtils.parseFingerprint)
    };
};
// Serializes DTLS parameters to SDP.
SDPUtils.writeDtlsParameters = function(params, setupType) {
    let sdp = 'a=setup:' + setupType + '\r\n';
    params.fingerprints.forEach((fp)=>{
        sdp += 'a=fingerprint:' + fp.algorithm + ' ' + fp.value + '\r\n';
    });
    return sdp;
};
// Parses a=crypto lines into
//   https://rawgit.com/aboba/edgertc/master/msortc-rs4.html#dictionary-rtcsrtpsdesparameters-members
SDPUtils.parseCryptoLine = function(line) {
    const parts = line.substring(9).split(' ');
    return {
        tag: parseInt(parts[0], 10),
        cryptoSuite: parts[1],
        keyParams: parts[2],
        sessionParams: parts.slice(3)
    };
};
SDPUtils.writeCryptoLine = function(parameters) {
    return 'a=crypto:' + parameters.tag + ' ' + parameters.cryptoSuite + ' ' + (typeof parameters.keyParams === 'object' ? SDPUtils.writeCryptoKeyParams(parameters.keyParams) : parameters.keyParams) + (parameters.sessionParams ? ' ' + parameters.sessionParams.join(' ') : '') + '\r\n';
};
// Parses the crypto key parameters into
//   https://rawgit.com/aboba/edgertc/master/msortc-rs4.html#rtcsrtpkeyparam*
SDPUtils.parseCryptoKeyParams = function(keyParams) {
    if (keyParams.indexOf('inline:') !== 0) return null;
    const parts = keyParams.substring(7).split('|');
    return {
        keyMethod: 'inline',
        keySalt: parts[0],
        lifeTime: parts[1],
        mkiValue: parts[2] ? parts[2].split(':')[0] : undefined,
        mkiLength: parts[2] ? parts[2].split(':')[1] : undefined
    };
};
SDPUtils.writeCryptoKeyParams = function(keyParams) {
    return keyParams.keyMethod + ':' + keyParams.keySalt + (keyParams.lifeTime ? '|' + keyParams.lifeTime : '') + (keyParams.mkiValue && keyParams.mkiLength ? '|' + keyParams.mkiValue + ':' + keyParams.mkiLength : '');
};
// Extracts all SDES parameters.
SDPUtils.getCryptoParameters = function(mediaSection, sessionpart) {
    const lines = SDPUtils.matchPrefix(mediaSection + sessionpart, 'a=crypto:');
    return lines.map(SDPUtils.parseCryptoLine);
};
// Parses ICE information from SDP media section or sessionpart.
// FIXME: for consistency with other functions this should only
//   get the ice-ufrag and ice-pwd lines as input.
SDPUtils.getIceParameters = function(mediaSection, sessionpart) {
    const ufrag = SDPUtils.matchPrefix(mediaSection + sessionpart, 'a=ice-ufrag:')[0];
    const pwd = SDPUtils.matchPrefix(mediaSection + sessionpart, 'a=ice-pwd:')[0];
    if (!(ufrag && pwd)) return null;
    return {
        usernameFragment: ufrag.substring(12),
        password: pwd.substring(10)
    };
};
// Serializes ICE parameters to SDP.
SDPUtils.writeIceParameters = function(params) {
    let sdp = 'a=ice-ufrag:' + params.usernameFragment + '\r\n' + 'a=ice-pwd:' + params.password + '\r\n';
    if (params.iceLite) sdp += 'a=ice-lite\r\n';
    return sdp;
};
// Parses the SDP media section and returns RTCRtpParameters.
SDPUtils.parseRtpParameters = function(mediaSection) {
    const description = {
        codecs: [],
        headerExtensions: [],
        fecMechanisms: [],
        rtcp: []
    };
    const lines = SDPUtils.splitLines(mediaSection);
    const mline = lines[0].split(' ');
    description.profile = mline[2];
    for(let i = 3; i < mline.length; i++){
        const pt = mline[i];
        const rtpmapline = SDPUtils.matchPrefix(mediaSection, 'a=rtpmap:' + pt + ' ')[0];
        if (rtpmapline) {
            const codec = SDPUtils.parseRtpMap(rtpmapline);
            const fmtps = SDPUtils.matchPrefix(mediaSection, 'a=fmtp:' + pt + ' ');
            // Only the first a=fmtp:<pt> is considered.
            codec.parameters = fmtps.length ? SDPUtils.parseFmtp(fmtps[0]) : {};
            codec.rtcpFeedback = SDPUtils.matchPrefix(mediaSection, 'a=rtcp-fb:' + pt + ' ').map(SDPUtils.parseRtcpFb);
            description.codecs.push(codec);
            // parse FEC mechanisms from rtpmap lines.
            switch(codec.name.toUpperCase()){
                case 'RED':
                case 'ULPFEC':
                    description.fecMechanisms.push(codec.name.toUpperCase());
                    break;
                default:
                    break;
            }
        }
    }
    SDPUtils.matchPrefix(mediaSection, 'a=extmap:').forEach((line)=>{
        description.headerExtensions.push(SDPUtils.parseExtmap(line));
    });
    const wildcardRtcpFb = SDPUtils.matchPrefix(mediaSection, 'a=rtcp-fb:* ').map(SDPUtils.parseRtcpFb);
    description.codecs.forEach((codec)=>{
        wildcardRtcpFb.forEach((fb)=>{
            const duplicate = codec.rtcpFeedback.find((existingFeedback)=>{
                return existingFeedback.type === fb.type && existingFeedback.parameter === fb.parameter;
            });
            if (!duplicate) codec.rtcpFeedback.push(fb);
        });
    });
    // FIXME: parse rtcp.
    return description;
};
// Generates parts of the SDP media section describing the capabilities /
// parameters.
SDPUtils.writeRtpDescription = function(kind, caps) {
    let sdp = '';
    // Build the mline.
    sdp += 'm=' + kind + ' ';
    sdp += caps.codecs.length > 0 ? '9' : '0'; // reject if no codecs.
    sdp += ' ' + (caps.profile || 'UDP/TLS/RTP/SAVPF') + ' ';
    sdp += caps.codecs.map((codec)=>{
        if (codec.preferredPayloadType !== undefined) return codec.preferredPayloadType;
        return codec.payloadType;
    }).join(' ') + '\r\n';
    sdp += 'c=IN IP4 0.0.0.0\r\n';
    sdp += 'a=rtcp:9 IN IP4 0.0.0.0\r\n';
    // Add a=rtpmap lines for each codec. Also fmtp and rtcp-fb.
    caps.codecs.forEach((codec)=>{
        sdp += SDPUtils.writeRtpMap(codec);
        sdp += SDPUtils.writeFmtp(codec);
        sdp += SDPUtils.writeRtcpFb(codec);
    });
    let maxptime = 0;
    caps.codecs.forEach((codec)=>{
        if (codec.maxptime > maxptime) maxptime = codec.maxptime;
    });
    if (maxptime > 0) sdp += 'a=maxptime:' + maxptime + '\r\n';
    if (caps.headerExtensions) caps.headerExtensions.forEach((extension)=>{
        sdp += SDPUtils.writeExtmap(extension);
    });
    // FIXME: write fecMechanisms.
    return sdp;
};
// Parses the SDP media section and returns an array of
// RTCRtpEncodingParameters.
SDPUtils.parseRtpEncodingParameters = function(mediaSection) {
    const encodingParameters = [];
    const description = SDPUtils.parseRtpParameters(mediaSection);
    const hasRed = description.fecMechanisms.indexOf('RED') !== -1;
    const hasUlpfec = description.fecMechanisms.indexOf('ULPFEC') !== -1;
    // filter a=ssrc:... cname:, ignore PlanB-msid
    const ssrcs = SDPUtils.matchPrefix(mediaSection, 'a=ssrc:').map((line)=>SDPUtils.parseSsrcMedia(line)).filter((parts)=>parts.attribute === 'cname');
    const primarySsrc = ssrcs.length > 0 && ssrcs[0].ssrc;
    let secondarySsrc;
    const flows = SDPUtils.matchPrefix(mediaSection, 'a=ssrc-group:FID').map((line)=>{
        const parts = line.substring(17).split(' ');
        return parts.map((part)=>parseInt(part, 10));
    });
    if (flows.length > 0 && flows[0].length > 1 && flows[0][0] === primarySsrc) secondarySsrc = flows[0][1];
    description.codecs.forEach((codec)=>{
        if (codec.name.toUpperCase() === 'RTX' && codec.parameters.apt) {
            let encParam = {
                ssrc: primarySsrc,
                codecPayloadType: parseInt(codec.parameters.apt, 10)
            };
            if (primarySsrc && secondarySsrc) encParam.rtx = {
                ssrc: secondarySsrc
            };
            encodingParameters.push(encParam);
            if (hasRed) {
                encParam = JSON.parse(JSON.stringify(encParam));
                encParam.fec = {
                    ssrc: primarySsrc,
                    mechanism: hasUlpfec ? 'red+ulpfec' : 'red'
                };
                encodingParameters.push(encParam);
            }
        }
    });
    if (encodingParameters.length === 0 && primarySsrc) encodingParameters.push({
        ssrc: primarySsrc
    });
    // we support both b=AS and b=TIAS but interpret AS as TIAS.
    let bandwidth = SDPUtils.matchPrefix(mediaSection, 'b=');
    if (bandwidth.length) {
        if (bandwidth[0].indexOf('b=TIAS:') === 0) bandwidth = parseInt(bandwidth[0].substring(7), 10);
        else if (bandwidth[0].indexOf('b=AS:') === 0) // use formula from JSEP to convert b=AS to TIAS value.
        bandwidth = parseInt(bandwidth[0].substring(5), 10) * 950 - 16000;
        else bandwidth = undefined;
        encodingParameters.forEach((params)=>{
            params.maxBitrate = bandwidth;
        });
    }
    return encodingParameters;
};
// parses http://draft.ortc.org/#rtcrtcpparameters*
SDPUtils.parseRtcpParameters = function(mediaSection) {
    const rtcpParameters = {};
    // Gets the first SSRC. Note that with RTX there might be multiple
    // SSRCs.
    const remoteSsrc = SDPUtils.matchPrefix(mediaSection, 'a=ssrc:').map((line)=>SDPUtils.parseSsrcMedia(line)).filter((obj)=>obj.attribute === 'cname')[0];
    if (remoteSsrc) {
        rtcpParameters.cname = remoteSsrc.value;
        rtcpParameters.ssrc = remoteSsrc.ssrc;
    }
    // Edge uses the compound attribute instead of reducedSize
    // compound is !reducedSize
    const rsize = SDPUtils.matchPrefix(mediaSection, 'a=rtcp-rsize');
    rtcpParameters.reducedSize = rsize.length > 0;
    rtcpParameters.compound = rsize.length === 0;
    // parses the rtcp-mux attrіbute.
    // Note that Edge does not support unmuxed RTCP.
    const mux = SDPUtils.matchPrefix(mediaSection, 'a=rtcp-mux');
    rtcpParameters.mux = mux.length > 0;
    return rtcpParameters;
};
SDPUtils.writeRtcpParameters = function(rtcpParameters) {
    let sdp = '';
    if (rtcpParameters.reducedSize) sdp += 'a=rtcp-rsize\r\n';
    if (rtcpParameters.mux) sdp += 'a=rtcp-mux\r\n';
    if (rtcpParameters.ssrc !== undefined && rtcpParameters.cname) sdp += 'a=ssrc:' + rtcpParameters.ssrc + ' cname:' + rtcpParameters.cname + '\r\n';
    return sdp;
};
// parses either a=msid: or a=ssrc:... msid lines and returns
// the id of the MediaStream and MediaStreamTrack.
SDPUtils.parseMsid = function(mediaSection) {
    let parts;
    const spec = SDPUtils.matchPrefix(mediaSection, 'a=msid:');
    if (spec.length === 1) {
        parts = spec[0].substring(7).split(' ');
        return {
            stream: parts[0],
            track: parts[1]
        };
    }
    const planB = SDPUtils.matchPrefix(mediaSection, 'a=ssrc:').map((line)=>SDPUtils.parseSsrcMedia(line)).filter((msidParts)=>msidParts.attribute === 'msid');
    if (planB.length > 0) {
        parts = planB[0].value.split(' ');
        return {
            stream: parts[0],
            track: parts[1]
        };
    }
};
// SCTP
// parses draft-ietf-mmusic-sctp-sdp-26 first and falls back
// to draft-ietf-mmusic-sctp-sdp-05
SDPUtils.parseSctpDescription = function(mediaSection) {
    const mline = SDPUtils.parseMLine(mediaSection);
    const maxSizeLine = SDPUtils.matchPrefix(mediaSection, 'a=max-message-size:');
    let maxMessageSize;
    if (maxSizeLine.length > 0) maxMessageSize = parseInt(maxSizeLine[0].substring(19), 10);
    if (isNaN(maxMessageSize)) maxMessageSize = 65536;
    const sctpPort = SDPUtils.matchPrefix(mediaSection, 'a=sctp-port:');
    if (sctpPort.length > 0) return {
        port: parseInt(sctpPort[0].substring(12), 10),
        protocol: mline.fmt,
        maxMessageSize
    };
    const sctpMapLines = SDPUtils.matchPrefix(mediaSection, 'a=sctpmap:');
    if (sctpMapLines.length > 0) {
        const parts = sctpMapLines[0].substring(10).split(' ');
        return {
            port: parseInt(parts[0], 10),
            protocol: parts[1],
            maxMessageSize
        };
    }
};
// SCTP
// outputs the draft-ietf-mmusic-sctp-sdp-26 version that all browsers
// support by now receiving in this format, unless we originally parsed
// as the draft-ietf-mmusic-sctp-sdp-05 format (indicated by the m-line
// protocol of DTLS/SCTP -- without UDP/ or TCP/)
SDPUtils.writeSctpDescription = function(media, sctp) {
    let output = [];
    if (media.protocol !== 'DTLS/SCTP') output = [
        'm=' + media.kind + ' 9 ' + media.protocol + ' ' + sctp.protocol + '\r\n',
        'c=IN IP4 0.0.0.0\r\n',
        'a=sctp-port:' + sctp.port + '\r\n'
    ];
    else output = [
        'm=' + media.kind + ' 9 ' + media.protocol + ' ' + sctp.port + '\r\n',
        'c=IN IP4 0.0.0.0\r\n',
        'a=sctpmap:' + sctp.port + ' ' + sctp.protocol + ' 65535\r\n'
    ];
    if (sctp.maxMessageSize !== undefined) output.push('a=max-message-size:' + sctp.maxMessageSize + '\r\n');
    return output.join('');
};
// Generate a session ID for SDP.
// https://tools.ietf.org/html/draft-ietf-rtcweb-jsep-20#section-5.2.1
// recommends using a cryptographically random +ve 64-bit value
// but right now this should be acceptable and within the right range
SDPUtils.generateSessionId = function() {
    return Math.random().toString().substr(2, 22);
};
// Write boiler plate for start of SDP
// sessId argument is optional - if not supplied it will
// be generated randomly
// sessVersion is optional and defaults to 2
// sessUser is optional and defaults to 'thisisadapterortc'
SDPUtils.writeSessionBoilerplate = function(sessId, sessVer, sessUser) {
    let sessionId;
    const version = sessVer !== undefined ? sessVer : 2;
    if (sessId) sessionId = sessId;
    else sessionId = SDPUtils.generateSessionId();
    const user = sessUser || 'thisisadapterortc';
    // FIXME: sess-id should be an NTP timestamp.
    return "v=0\r\no=" + user + ' ' + sessionId + ' ' + version + ' IN IP4 127.0.0.1\r\n' + 's=-\r\n' + 't=0 0\r\n';
};
// Gets the direction from the mediaSection or the sessionpart.
SDPUtils.getDirection = function(mediaSection, sessionpart) {
    // Look for sendrecv, sendonly, recvonly, inactive, default to sendrecv.
    const lines = SDPUtils.splitLines(mediaSection);
    for(let i = 0; i < lines.length; i++)switch(lines[i]){
        case 'a=sendrecv':
        case 'a=sendonly':
        case 'a=recvonly':
        case 'a=inactive':
            return lines[i].substring(2);
        default:
    }
    if (sessionpart) return SDPUtils.getDirection(sessionpart);
    return 'sendrecv';
};
SDPUtils.getKind = function(mediaSection) {
    const lines = SDPUtils.splitLines(mediaSection);
    const mline = lines[0].split(' ');
    return mline[0].substring(2);
};
SDPUtils.isRejected = function(mediaSection) {
    return mediaSection.split(' ', 2)[1] === '0';
};
SDPUtils.parseMLine = function(mediaSection) {
    const lines = SDPUtils.splitLines(mediaSection);
    const parts = lines[0].substring(2).split(' ');
    return {
        kind: parts[0],
        port: parseInt(parts[1], 10),
        protocol: parts[2],
        fmt: parts.slice(3).join(' ')
    };
};
SDPUtils.parseOLine = function(mediaSection) {
    const line = SDPUtils.matchPrefix(mediaSection, 'o=')[0];
    const parts = line.substring(2).split(' ');
    return {
        username: parts[0],
        sessionId: parts[1],
        sessionVersion: parseInt(parts[2], 10),
        netType: parts[3],
        addressType: parts[4],
        address: parts[5]
    };
};
// a very naive interpretation of a valid SDP.
SDPUtils.isValidSDP = function(blob) {
    if (typeof blob !== 'string' || blob.length === 0) return false;
    const lines = SDPUtils.splitLines(blob);
    for(let i = 0; i < lines.length; i++){
        if (lines[i].length < 2 || lines[i].charAt(1) !== '=') return false;
    // TODO: check the modifier a bit more.
    }
    return true;
};
module.exports = SDPUtils;

},{}],"lFLkL":[function(require,module,exports,__globalThis) {
// Main Functions:
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "encode", ()=>(0, _encodeMjs.encode));
parcelHelpers.export(exports, "decode", ()=>(0, _decodeMjs.decode));
parcelHelpers.export(exports, "decodeMulti", ()=>(0, _decodeMjs.decodeMulti));
parcelHelpers.export(exports, "decodeAsync", ()=>(0, _decodeAsyncMjs.decodeAsync));
parcelHelpers.export(exports, "decodeArrayStream", ()=>(0, _decodeAsyncMjs.decodeArrayStream));
parcelHelpers.export(exports, "decodeMultiStream", ()=>(0, _decodeAsyncMjs.decodeMultiStream));
parcelHelpers.export(exports, "decodeStream", ()=>(0, _decodeAsyncMjs.decodeStream));
parcelHelpers.export(exports, "Decoder", ()=>(0, _decoderMjs.Decoder));
parcelHelpers.export(exports, "DecodeError", ()=>(0, _decodeErrorMjs.DecodeError));
parcelHelpers.export(exports, "DataViewIndexOutOfBoundsError", ()=>(0, _decoderMjs.DataViewIndexOutOfBoundsError));
parcelHelpers.export(exports, "Encoder", ()=>(0, _encoderMjs.Encoder));
parcelHelpers.export(exports, "ExtensionCodec", ()=>(0, _extensionCodecMjs.ExtensionCodec));
parcelHelpers.export(exports, "ExtData", ()=>(0, _extDataMjs.ExtData));
parcelHelpers.export(exports, "EXT_TIMESTAMP", ()=>(0, _timestampMjs.EXT_TIMESTAMP));
parcelHelpers.export(exports, "encodeDateToTimeSpec", ()=>(0, _timestampMjs.encodeDateToTimeSpec));
parcelHelpers.export(exports, "encodeTimeSpecToTimestamp", ()=>(0, _timestampMjs.encodeTimeSpecToTimestamp));
parcelHelpers.export(exports, "decodeTimestampToTimeSpec", ()=>(0, _timestampMjs.decodeTimestampToTimeSpec));
parcelHelpers.export(exports, "encodeTimestampExtension", ()=>(0, _timestampMjs.encodeTimestampExtension));
parcelHelpers.export(exports, "decodeTimestampExtension", ()=>(0, _timestampMjs.decodeTimestampExtension));
var _encodeMjs = require("./encode.mjs");
var _decodeMjs = require("./decode.mjs");
var _decodeAsyncMjs = require("./decodeAsync.mjs");
var _decoderMjs = require("./Decoder.mjs");
var _decodeErrorMjs = require("./DecodeError.mjs");
var _encoderMjs = require("./Encoder.mjs");
// Utilitiies for Extension Types:
var _extensionCodecMjs = require("./ExtensionCodec.mjs");
var _extDataMjs = require("./ExtData.mjs");
var _timestampMjs = require("./timestamp.mjs");

},{"./encode.mjs":false,"./decode.mjs":false,"./decodeAsync.mjs":"cY807","./Decoder.mjs":false,"./DecodeError.mjs":false,"./Encoder.mjs":"fUIU1","./ExtensionCodec.mjs":false,"./ExtData.mjs":false,"./timestamp.mjs":false,"@parcel/transformer-js/src/esmodule-helpers.js":"jnFvT"}],"8RBB0":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "defaultDecodeOptions", ()=>defaultDecodeOptions);
/**
 * It decodes a single MessagePack object in a buffer.
 *
 * This is a synchronous decoding function.
 * See other variants for asynchronous decoding: {@link decodeAsync()}, {@link decodeStream()}, or {@link decodeArrayStream()}.
 *
 * @throws {@link RangeError} if the buffer is incomplete, including the case where the buffer is empty.
 * @throws {@link DecodeError} if the buffer contains invalid data.
 */ parcelHelpers.export(exports, "decode", ()=>decode);
/**
 * It decodes multiple MessagePack objects in a buffer.
 * This is corresponding to {@link decodeMultiStream()}.
 *
 * @throws {@link RangeError} if the buffer is incomplete, including the case where the buffer is empty.
 * @throws {@link DecodeError} if the buffer contains invalid data.
 */ parcelHelpers.export(exports, "decodeMulti", ()=>decodeMulti);
var _decoderMjs = require("./Decoder.mjs");
var defaultDecodeOptions = {};
function decode(buffer, options) {
    if (options === void 0) options = defaultDecodeOptions;
    var decoder = new (0, _decoderMjs.Decoder)(options.extensionCodec, options.context, options.maxStrLength, options.maxBinLength, options.maxArrayLength, options.maxMapLength, options.maxExtLength);
    return decoder.decode(buffer);
}
function decodeMulti(buffer, options) {
    if (options === void 0) options = defaultDecodeOptions;
    var decoder = new (0, _decoderMjs.Decoder)(options.extensionCodec, options.context, options.maxStrLength, options.maxBinLength, options.maxArrayLength, options.maxMapLength, options.maxExtLength);
    return decoder.decodeMulti(buffer);
}

},{"./Decoder.mjs":"9qWca","@parcel/transformer-js/src/esmodule-helpers.js":"jnFvT"}],"9qWca":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "DataViewIndexOutOfBoundsError", ()=>DataViewIndexOutOfBoundsError);
parcelHelpers.export(exports, "Decoder", ()=>Decoder);
var _prettyByteMjs = require("./utils/prettyByte.mjs");
var _extensionCodecMjs = require("./ExtensionCodec.mjs");
var _intMjs = require("./utils/int.mjs");
var _utf8Mjs = require("./utils/utf8.mjs");
var _typedArraysMjs = require("./utils/typedArrays.mjs");
var _cachedKeyDecoderMjs = require("./CachedKeyDecoder.mjs");
var _decodeErrorMjs = require("./DecodeError.mjs");
var __awaiter = undefined && undefined.__awaiter || function(thisArg, _arguments, P, generator) {
    function adopt(value) {
        return value instanceof P ? value : new P(function(resolve) {
            resolve(value);
        });
    }
    return new (P || (P = Promise))(function(resolve, reject) {
        function fulfilled(value) {
            try {
                step(generator.next(value));
            } catch (e) {
                reject(e);
            }
        }
        function rejected(value) {
            try {
                step(generator["throw"](value));
            } catch (e) {
                reject(e);
            }
        }
        function step(result) {
            result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected);
        }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = undefined && undefined.__generator || function(thisArg, body) {
    var _ = {
        label: 0,
        sent: function() {
            if (t[0] & 1) throw t[1];
            return t[1];
        },
        trys: [],
        ops: []
    }, f, y, t, g;
    return g = {
        next: verb(0),
        "throw": verb(1),
        "return": verb(2)
    }, typeof Symbol === "function" && (g[Symbol.iterator] = function() {
        return this;
    }), g;
    function verb(n) {
        return function(v) {
            return step([
                n,
                v
            ]);
        };
    }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while(_)try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [
                op[0] & 2,
                t.value
            ];
            switch(op[0]){
                case 0:
                case 1:
                    t = op;
                    break;
                case 4:
                    _.label++;
                    return {
                        value: op[1],
                        done: false
                    };
                case 5:
                    _.label++;
                    y = op[1];
                    op = [
                        0
                    ];
                    continue;
                case 7:
                    op = _.ops.pop();
                    _.trys.pop();
                    continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) {
                        _ = 0;
                        continue;
                    }
                    if (op[0] === 3 && (!t || op[1] > t[0] && op[1] < t[3])) {
                        _.label = op[1];
                        break;
                    }
                    if (op[0] === 6 && _.label < t[1]) {
                        _.label = t[1];
                        t = op;
                        break;
                    }
                    if (t && _.label < t[2]) {
                        _.label = t[2];
                        _.ops.push(op);
                        break;
                    }
                    if (t[2]) _.ops.pop();
                    _.trys.pop();
                    continue;
            }
            op = body.call(thisArg, _);
        } catch (e) {
            op = [
                6,
                e
            ];
            y = 0;
        } finally{
            f = t = 0;
        }
        if (op[0] & 5) throw op[1];
        return {
            value: op[0] ? op[1] : void 0,
            done: true
        };
    }
};
var __asyncValues = undefined && undefined.__asyncValues || function(o) {
    if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
    var m = o[Symbol.asyncIterator], i;
    return m ? m.call(o) : (o = typeof __values === "function" ? __values(o) : o[Symbol.iterator](), i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function() {
        return this;
    }, i);
    function verb(n) {
        i[n] = o[n] && function(v) {
            return new Promise(function(resolve, reject) {
                v = o[n](v), settle(resolve, reject, v.done, v.value);
            });
        };
    }
    function settle(resolve, reject, d, v) {
        Promise.resolve(v).then(function(v) {
            resolve({
                value: v,
                done: d
            });
        }, reject);
    }
};
var __await = undefined && undefined.__await || function(v) {
    return this instanceof __await ? (this.v = v, this) : new __await(v);
};
var __asyncGenerator = undefined && undefined.__asyncGenerator || function(thisArg, _arguments, generator) {
    if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
    var g = generator.apply(thisArg, _arguments || []), i, q = [];
    return i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function() {
        return this;
    }, i;
    function verb(n) {
        if (g[n]) i[n] = function(v) {
            return new Promise(function(a, b) {
                q.push([
                    n,
                    v,
                    a,
                    b
                ]) > 1 || resume(n, v);
            });
        };
    }
    function resume(n, v) {
        try {
            step(g[n](v));
        } catch (e) {
            settle(q[0][3], e);
        }
    }
    function step(r) {
        r.value instanceof __await ? Promise.resolve(r.value.v).then(fulfill, reject) : settle(q[0][2], r);
    }
    function fulfill(value) {
        resume("next", value);
    }
    function reject(value) {
        resume("throw", value);
    }
    function settle(f, v) {
        if (f(v), q.shift(), q.length) resume(q[0][0], q[0][1]);
    }
};
var isValidMapKeyType = function(key) {
    var keyType = typeof key;
    return keyType === "string" || keyType === "number";
};
var HEAD_BYTE_REQUIRED = -1;
var EMPTY_VIEW = new DataView(new ArrayBuffer(0));
var EMPTY_BYTES = new Uint8Array(EMPTY_VIEW.buffer);
var DataViewIndexOutOfBoundsError = function() {
    try {
        // IE11: The spec says it should throw RangeError,
        // IE11: but in IE11 it throws TypeError.
        EMPTY_VIEW.getInt8(0);
    } catch (e) {
        return e.constructor;
    }
    throw new Error("never reached");
}();
var MORE_DATA = new DataViewIndexOutOfBoundsError("Insufficient data");
var sharedCachedKeyDecoder = new (0, _cachedKeyDecoderMjs.CachedKeyDecoder)();
var Decoder = /** @class */ function() {
    function Decoder(extensionCodec, context, maxStrLength, maxBinLength, maxArrayLength, maxMapLength, maxExtLength, keyDecoder) {
        if (extensionCodec === void 0) extensionCodec = (0, _extensionCodecMjs.ExtensionCodec).defaultCodec;
        if (context === void 0) context = undefined;
        if (maxStrLength === void 0) maxStrLength = (0, _intMjs.UINT32_MAX);
        if (maxBinLength === void 0) maxBinLength = (0, _intMjs.UINT32_MAX);
        if (maxArrayLength === void 0) maxArrayLength = (0, _intMjs.UINT32_MAX);
        if (maxMapLength === void 0) maxMapLength = (0, _intMjs.UINT32_MAX);
        if (maxExtLength === void 0) maxExtLength = (0, _intMjs.UINT32_MAX);
        if (keyDecoder === void 0) keyDecoder = sharedCachedKeyDecoder;
        this.extensionCodec = extensionCodec;
        this.context = context;
        this.maxStrLength = maxStrLength;
        this.maxBinLength = maxBinLength;
        this.maxArrayLength = maxArrayLength;
        this.maxMapLength = maxMapLength;
        this.maxExtLength = maxExtLength;
        this.keyDecoder = keyDecoder;
        this.totalPos = 0;
        this.pos = 0;
        this.view = EMPTY_VIEW;
        this.bytes = EMPTY_BYTES;
        this.headByte = HEAD_BYTE_REQUIRED;
        this.stack = [];
    }
    Decoder.prototype.reinitializeState = function() {
        this.totalPos = 0;
        this.headByte = HEAD_BYTE_REQUIRED;
        this.stack.length = 0;
    // view, bytes, and pos will be re-initialized in setBuffer()
    };
    Decoder.prototype.setBuffer = function(buffer) {
        this.bytes = (0, _typedArraysMjs.ensureUint8Array)(buffer);
        this.view = (0, _typedArraysMjs.createDataView)(this.bytes);
        this.pos = 0;
    };
    Decoder.prototype.appendBuffer = function(buffer) {
        if (this.headByte === HEAD_BYTE_REQUIRED && !this.hasRemaining(1)) this.setBuffer(buffer);
        else {
            var remainingData = this.bytes.subarray(this.pos);
            var newData = (0, _typedArraysMjs.ensureUint8Array)(buffer);
            // concat remainingData + newData
            var newBuffer = new Uint8Array(remainingData.length + newData.length);
            newBuffer.set(remainingData);
            newBuffer.set(newData, remainingData.length);
            this.setBuffer(newBuffer);
        }
    };
    Decoder.prototype.hasRemaining = function(size) {
        return this.view.byteLength - this.pos >= size;
    };
    Decoder.prototype.createExtraByteError = function(posToShow) {
        var _a = this, view = _a.view, pos = _a.pos;
        return new RangeError("Extra ".concat(view.byteLength - pos, " of ").concat(view.byteLength, " byte(s) found at buffer[").concat(posToShow, "]"));
    };
    /**
     * @throws {@link DecodeError}
     * @throws {@link RangeError}
     */ Decoder.prototype.decode = function(buffer) {
        this.reinitializeState();
        this.setBuffer(buffer);
        var object = this.doDecodeSync();
        if (this.hasRemaining(1)) throw this.createExtraByteError(this.pos);
        return object;
    };
    Decoder.prototype.decodeMulti = function(buffer) {
        return __generator(this, function(_a) {
            switch(_a.label){
                case 0:
                    this.reinitializeState();
                    this.setBuffer(buffer);
                    _a.label = 1;
                case 1:
                    if (!this.hasRemaining(1)) return [
                        3 /*break*/ ,
                        3
                    ];
                    return [
                        4 /*yield*/ ,
                        this.doDecodeSync()
                    ];
                case 2:
                    _a.sent();
                    return [
                        3 /*break*/ ,
                        1
                    ];
                case 3:
                    return [
                        2 /*return*/ 
                    ];
            }
        });
    };
    Decoder.prototype.decodeAsync = function(stream) {
        var stream_1, stream_1_1;
        var e_1, _a;
        return __awaiter(this, void 0, void 0, function() {
            var decoded, object, buffer, e_1_1, _b, headByte, pos, totalPos;
            return __generator(this, function(_c) {
                switch(_c.label){
                    case 0:
                        decoded = false;
                        _c.label = 1;
                    case 1:
                        _c.trys.push([
                            1,
                            6,
                            7,
                            12
                        ]);
                        stream_1 = __asyncValues(stream);
                        _c.label = 2;
                    case 2:
                        return [
                            4 /*yield*/ ,
                            stream_1.next()
                        ];
                    case 3:
                        if (!(stream_1_1 = _c.sent(), !stream_1_1.done)) return [
                            3 /*break*/ ,
                            5
                        ];
                        buffer = stream_1_1.value;
                        if (decoded) throw this.createExtraByteError(this.totalPos);
                        this.appendBuffer(buffer);
                        try {
                            object = this.doDecodeSync();
                            decoded = true;
                        } catch (e) {
                            if (!(e instanceof DataViewIndexOutOfBoundsError)) throw e; // rethrow
                        // fallthrough
                        }
                        this.totalPos += this.pos;
                        _c.label = 4;
                    case 4:
                        return [
                            3 /*break*/ ,
                            2
                        ];
                    case 5:
                        return [
                            3 /*break*/ ,
                            12
                        ];
                    case 6:
                        e_1_1 = _c.sent();
                        e_1 = {
                            error: e_1_1
                        };
                        return [
                            3 /*break*/ ,
                            12
                        ];
                    case 7:
                        _c.trys.push([
                            7,
                            ,
                            10,
                            11
                        ]);
                        if (!(stream_1_1 && !stream_1_1.done && (_a = stream_1.return))) return [
                            3 /*break*/ ,
                            9
                        ];
                        return [
                            4 /*yield*/ ,
                            _a.call(stream_1)
                        ];
                    case 8:
                        _c.sent();
                        _c.label = 9;
                    case 9:
                        return [
                            3 /*break*/ ,
                            11
                        ];
                    case 10:
                        if (e_1) throw e_1.error;
                        return [
                            7 /*endfinally*/ 
                        ];
                    case 11:
                        return [
                            7 /*endfinally*/ 
                        ];
                    case 12:
                        if (decoded) {
                            if (this.hasRemaining(1)) throw this.createExtraByteError(this.totalPos);
                            return [
                                2 /*return*/ ,
                                object
                            ];
                        }
                        _b = this, headByte = _b.headByte, pos = _b.pos, totalPos = _b.totalPos;
                        throw new RangeError("Insufficient data in parsing ".concat((0, _prettyByteMjs.prettyByte)(headByte), " at ").concat(totalPos, " (").concat(pos, " in the current buffer)"));
                }
            });
        });
    };
    Decoder.prototype.decodeArrayStream = function(stream) {
        return this.decodeMultiAsync(stream, true);
    };
    Decoder.prototype.decodeStream = function(stream) {
        return this.decodeMultiAsync(stream, false);
    };
    Decoder.prototype.decodeMultiAsync = function(stream, isArray) {
        return __asyncGenerator(this, arguments, function decodeMultiAsync_1() {
            var isArrayHeaderRequired, arrayItemsLeft, stream_2, stream_2_1, buffer, e_2, e_3_1;
            var e_3, _a;
            return __generator(this, function(_b) {
                switch(_b.label){
                    case 0:
                        isArrayHeaderRequired = isArray;
                        arrayItemsLeft = -1;
                        _b.label = 1;
                    case 1:
                        _b.trys.push([
                            1,
                            13,
                            14,
                            19
                        ]);
                        stream_2 = __asyncValues(stream);
                        _b.label = 2;
                    case 2:
                        return [
                            4 /*yield*/ ,
                            __await(stream_2.next())
                        ];
                    case 3:
                        if (!(stream_2_1 = _b.sent(), !stream_2_1.done)) return [
                            3 /*break*/ ,
                            12
                        ];
                        buffer = stream_2_1.value;
                        if (isArray && arrayItemsLeft === 0) throw this.createExtraByteError(this.totalPos);
                        this.appendBuffer(buffer);
                        if (isArrayHeaderRequired) {
                            arrayItemsLeft = this.readArraySize();
                            isArrayHeaderRequired = false;
                            this.complete();
                        }
                        _b.label = 4;
                    case 4:
                        _b.trys.push([
                            4,
                            9,
                            ,
                            10
                        ]);
                        _b.label = 5;
                    case 5:
                        return [
                            4 /*yield*/ ,
                            __await(this.doDecodeSync())
                        ];
                    case 6:
                        return [
                            4 /*yield*/ ,
                            _b.sent()
                        ];
                    case 7:
                        _b.sent();
                        if (--arrayItemsLeft === 0) return [
                            3 /*break*/ ,
                            8
                        ];
                        return [
                            3 /*break*/ ,
                            5
                        ];
                    case 8:
                        return [
                            3 /*break*/ ,
                            10
                        ];
                    case 9:
                        e_2 = _b.sent();
                        if (!(e_2 instanceof DataViewIndexOutOfBoundsError)) throw e_2; // rethrow
                        return [
                            3 /*break*/ ,
                            10
                        ];
                    case 10:
                        this.totalPos += this.pos;
                        _b.label = 11;
                    case 11:
                        return [
                            3 /*break*/ ,
                            2
                        ];
                    case 12:
                        return [
                            3 /*break*/ ,
                            19
                        ];
                    case 13:
                        e_3_1 = _b.sent();
                        e_3 = {
                            error: e_3_1
                        };
                        return [
                            3 /*break*/ ,
                            19
                        ];
                    case 14:
                        _b.trys.push([
                            14,
                            ,
                            17,
                            18
                        ]);
                        if (!(stream_2_1 && !stream_2_1.done && (_a = stream_2.return))) return [
                            3 /*break*/ ,
                            16
                        ];
                        return [
                            4 /*yield*/ ,
                            __await(_a.call(stream_2))
                        ];
                    case 15:
                        _b.sent();
                        _b.label = 16;
                    case 16:
                        return [
                            3 /*break*/ ,
                            18
                        ];
                    case 17:
                        if (e_3) throw e_3.error;
                        return [
                            7 /*endfinally*/ 
                        ];
                    case 18:
                        return [
                            7 /*endfinally*/ 
                        ];
                    case 19:
                        return [
                            2 /*return*/ 
                        ];
                }
            });
        });
    };
    Decoder.prototype.doDecodeSync = function() {
        DECODE: while(true){
            var headByte = this.readHeadByte();
            var object = void 0;
            if (headByte >= 0xe0) // negative fixint (111x xxxx) 0xe0 - 0xff
            object = headByte - 0x100;
            else if (headByte < 0xc0) {
                if (headByte < 0x80) // positive fixint (0xxx xxxx) 0x00 - 0x7f
                object = headByte;
                else if (headByte < 0x90) {
                    // fixmap (1000 xxxx) 0x80 - 0x8f
                    var size = headByte - 0x80;
                    if (size !== 0) {
                        this.pushMapState(size);
                        this.complete();
                        continue DECODE;
                    } else object = {};
                } else if (headByte < 0xa0) {
                    // fixarray (1001 xxxx) 0x90 - 0x9f
                    var size = headByte - 0x90;
                    if (size !== 0) {
                        this.pushArrayState(size);
                        this.complete();
                        continue DECODE;
                    } else object = [];
                } else {
                    // fixstr (101x xxxx) 0xa0 - 0xbf
                    var byteLength = headByte - 0xa0;
                    object = this.decodeUtf8String(byteLength, 0);
                }
            } else if (headByte === 0xc0) // nil
            object = null;
            else if (headByte === 0xc2) // false
            object = false;
            else if (headByte === 0xc3) // true
            object = true;
            else if (headByte === 0xca) // float 32
            object = this.readF32();
            else if (headByte === 0xcb) // float 64
            object = this.readF64();
            else if (headByte === 0xcc) // uint 8
            object = this.readU8();
            else if (headByte === 0xcd) // uint 16
            object = this.readU16();
            else if (headByte === 0xce) // uint 32
            object = this.readU32();
            else if (headByte === 0xcf) // uint 64
            object = this.readU64();
            else if (headByte === 0xd0) // int 8
            object = this.readI8();
            else if (headByte === 0xd1) // int 16
            object = this.readI16();
            else if (headByte === 0xd2) // int 32
            object = this.readI32();
            else if (headByte === 0xd3) // int 64
            object = this.readI64();
            else if (headByte === 0xd9) {
                // str 8
                var byteLength = this.lookU8();
                object = this.decodeUtf8String(byteLength, 1);
            } else if (headByte === 0xda) {
                // str 16
                var byteLength = this.lookU16();
                object = this.decodeUtf8String(byteLength, 2);
            } else if (headByte === 0xdb) {
                // str 32
                var byteLength = this.lookU32();
                object = this.decodeUtf8String(byteLength, 4);
            } else if (headByte === 0xdc) {
                // array 16
                var size = this.readU16();
                if (size !== 0) {
                    this.pushArrayState(size);
                    this.complete();
                    continue DECODE;
                } else object = [];
            } else if (headByte === 0xdd) {
                // array 32
                var size = this.readU32();
                if (size !== 0) {
                    this.pushArrayState(size);
                    this.complete();
                    continue DECODE;
                } else object = [];
            } else if (headByte === 0xde) {
                // map 16
                var size = this.readU16();
                if (size !== 0) {
                    this.pushMapState(size);
                    this.complete();
                    continue DECODE;
                } else object = {};
            } else if (headByte === 0xdf) {
                // map 32
                var size = this.readU32();
                if (size !== 0) {
                    this.pushMapState(size);
                    this.complete();
                    continue DECODE;
                } else object = {};
            } else if (headByte === 0xc4) {
                // bin 8
                var size = this.lookU8();
                object = this.decodeBinary(size, 1);
            } else if (headByte === 0xc5) {
                // bin 16
                var size = this.lookU16();
                object = this.decodeBinary(size, 2);
            } else if (headByte === 0xc6) {
                // bin 32
                var size = this.lookU32();
                object = this.decodeBinary(size, 4);
            } else if (headByte === 0xd4) // fixext 1
            object = this.decodeExtension(1, 0);
            else if (headByte === 0xd5) // fixext 2
            object = this.decodeExtension(2, 0);
            else if (headByte === 0xd6) // fixext 4
            object = this.decodeExtension(4, 0);
            else if (headByte === 0xd7) // fixext 8
            object = this.decodeExtension(8, 0);
            else if (headByte === 0xd8) // fixext 16
            object = this.decodeExtension(16, 0);
            else if (headByte === 0xc7) {
                // ext 8
                var size = this.lookU8();
                object = this.decodeExtension(size, 1);
            } else if (headByte === 0xc8) {
                // ext 16
                var size = this.lookU16();
                object = this.decodeExtension(size, 2);
            } else if (headByte === 0xc9) {
                // ext 32
                var size = this.lookU32();
                object = this.decodeExtension(size, 4);
            } else throw new (0, _decodeErrorMjs.DecodeError)("Unrecognized type byte: ".concat((0, _prettyByteMjs.prettyByte)(headByte)));
            this.complete();
            var stack = this.stack;
            while(stack.length > 0){
                // arrays and maps
                var state = stack[stack.length - 1];
                if (state.type === 0 /* State.ARRAY */ ) {
                    state.array[state.position] = object;
                    state.position++;
                    if (state.position === state.size) {
                        stack.pop();
                        object = state.array;
                    } else continue DECODE;
                } else if (state.type === 1 /* State.MAP_KEY */ ) {
                    if (!isValidMapKeyType(object)) throw new (0, _decodeErrorMjs.DecodeError)("The type of key must be string or number but " + typeof object);
                    if (object === "__proto__") throw new (0, _decodeErrorMjs.DecodeError)("The key __proto__ is not allowed");
                    state.key = object;
                    state.type = 2 /* State.MAP_VALUE */ ;
                    continue DECODE;
                } else {
                    // it must be `state.type === State.MAP_VALUE` here
                    state.map[state.key] = object;
                    state.readCount++;
                    if (state.readCount === state.size) {
                        stack.pop();
                        object = state.map;
                    } else {
                        state.key = null;
                        state.type = 1 /* State.MAP_KEY */ ;
                        continue DECODE;
                    }
                }
            }
            return object;
        }
    };
    Decoder.prototype.readHeadByte = function() {
        if (this.headByte === HEAD_BYTE_REQUIRED) this.headByte = this.readU8();
        return this.headByte;
    };
    Decoder.prototype.complete = function() {
        this.headByte = HEAD_BYTE_REQUIRED;
    };
    Decoder.prototype.readArraySize = function() {
        var headByte = this.readHeadByte();
        switch(headByte){
            case 0xdc:
                return this.readU16();
            case 0xdd:
                return this.readU32();
            default:
                if (headByte < 0xa0) return headByte - 0x90;
                else throw new (0, _decodeErrorMjs.DecodeError)("Unrecognized array type byte: ".concat((0, _prettyByteMjs.prettyByte)(headByte)));
        }
    };
    Decoder.prototype.pushMapState = function(size) {
        if (size > this.maxMapLength) throw new (0, _decodeErrorMjs.DecodeError)("Max length exceeded: map length (".concat(size, ") > maxMapLengthLength (").concat(this.maxMapLength, ")"));
        this.stack.push({
            type: 1 /* State.MAP_KEY */ ,
            size: size,
            key: null,
            readCount: 0,
            map: {}
        });
    };
    Decoder.prototype.pushArrayState = function(size) {
        if (size > this.maxArrayLength) throw new (0, _decodeErrorMjs.DecodeError)("Max length exceeded: array length (".concat(size, ") > maxArrayLength (").concat(this.maxArrayLength, ")"));
        this.stack.push({
            type: 0 /* State.ARRAY */ ,
            size: size,
            array: new Array(size),
            position: 0
        });
    };
    Decoder.prototype.decodeUtf8String = function(byteLength, headerOffset) {
        var _a;
        if (byteLength > this.maxStrLength) throw new (0, _decodeErrorMjs.DecodeError)("Max length exceeded: UTF-8 byte length (".concat(byteLength, ") > maxStrLength (").concat(this.maxStrLength, ")"));
        if (this.bytes.byteLength < this.pos + headerOffset + byteLength) throw MORE_DATA;
        var offset = this.pos + headerOffset;
        var object;
        if (this.stateIsMapKey() && ((_a = this.keyDecoder) === null || _a === void 0 ? void 0 : _a.canBeCached(byteLength))) object = this.keyDecoder.decode(this.bytes, offset, byteLength);
        else if (byteLength > (0, _utf8Mjs.TEXT_DECODER_THRESHOLD)) object = (0, _utf8Mjs.utf8DecodeTD)(this.bytes, offset, byteLength);
        else object = (0, _utf8Mjs.utf8DecodeJs)(this.bytes, offset, byteLength);
        this.pos += headerOffset + byteLength;
        return object;
    };
    Decoder.prototype.stateIsMapKey = function() {
        if (this.stack.length > 0) {
            var state = this.stack[this.stack.length - 1];
            return state.type === 1 /* State.MAP_KEY */ ;
        }
        return false;
    };
    Decoder.prototype.decodeBinary = function(byteLength, headOffset) {
        if (byteLength > this.maxBinLength) throw new (0, _decodeErrorMjs.DecodeError)("Max length exceeded: bin length (".concat(byteLength, ") > maxBinLength (").concat(this.maxBinLength, ")"));
        if (!this.hasRemaining(byteLength + headOffset)) throw MORE_DATA;
        var offset = this.pos + headOffset;
        var object = this.bytes.subarray(offset, offset + byteLength);
        this.pos += headOffset + byteLength;
        return object;
    };
    Decoder.prototype.decodeExtension = function(size, headOffset) {
        if (size > this.maxExtLength) throw new (0, _decodeErrorMjs.DecodeError)("Max length exceeded: ext length (".concat(size, ") > maxExtLength (").concat(this.maxExtLength, ")"));
        var extType = this.view.getInt8(this.pos + headOffset);
        var data = this.decodeBinary(size, headOffset + 1 /* extType */ );
        return this.extensionCodec.decode(data, extType, this.context);
    };
    Decoder.prototype.lookU8 = function() {
        return this.view.getUint8(this.pos);
    };
    Decoder.prototype.lookU16 = function() {
        return this.view.getUint16(this.pos);
    };
    Decoder.prototype.lookU32 = function() {
        return this.view.getUint32(this.pos);
    };
    Decoder.prototype.readU8 = function() {
        var value = this.view.getUint8(this.pos);
        this.pos++;
        return value;
    };
    Decoder.prototype.readI8 = function() {
        var value = this.view.getInt8(this.pos);
        this.pos++;
        return value;
    };
    Decoder.prototype.readU16 = function() {
        var value = this.view.getUint16(this.pos);
        this.pos += 2;
        return value;
    };
    Decoder.prototype.readI16 = function() {
        var value = this.view.getInt16(this.pos);
        this.pos += 2;
        return value;
    };
    Decoder.prototype.readU32 = function() {
        var value = this.view.getUint32(this.pos);
        this.pos += 4;
        return value;
    };
    Decoder.prototype.readI32 = function() {
        var value = this.view.getInt32(this.pos);
        this.pos += 4;
        return value;
    };
    Decoder.prototype.readU64 = function() {
        var value = (0, _intMjs.getUint64)(this.view, this.pos);
        this.pos += 8;
        return value;
    };
    Decoder.prototype.readI64 = function() {
        var value = (0, _intMjs.getInt64)(this.view, this.pos);
        this.pos += 8;
        return value;
    };
    Decoder.prototype.readF32 = function() {
        var value = this.view.getFloat32(this.pos);
        this.pos += 4;
        return value;
    };
    Decoder.prototype.readF64 = function() {
        var value = this.view.getFloat64(this.pos);
        this.pos += 8;
        return value;
    };
    return Decoder;
}();

},{"./utils/prettyByte.mjs":"azESz","./ExtensionCodec.mjs":"29yt3","./utils/int.mjs":"iX9oN","./utils/utf8.mjs":"fK0M4","./utils/typedArrays.mjs":"b9ieA","./CachedKeyDecoder.mjs":"c5a2C","./DecodeError.mjs":"82tm3","@parcel/transformer-js/src/esmodule-helpers.js":"jnFvT"}],"azESz":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "prettyByte", ()=>prettyByte);
function prettyByte(byte) {
    return "".concat(byte < 0 ? "-" : "", "0x").concat(Math.abs(byte).toString(16).padStart(2, "0"));
}

},{"@parcel/transformer-js/src/esmodule-helpers.js":"jnFvT"}],"29yt3":[function(require,module,exports,__globalThis) {
// ExtensionCodec to handle MessagePack extensions
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "ExtensionCodec", ()=>ExtensionCodec);
var _extDataMjs = require("./ExtData.mjs");
var _timestampMjs = require("./timestamp.mjs");
var ExtensionCodec = /** @class */ function() {
    function ExtensionCodec() {
        // built-in extensions
        this.builtInEncoders = [];
        this.builtInDecoders = [];
        // custom extensions
        this.encoders = [];
        this.decoders = [];
        this.register((0, _timestampMjs.timestampExtension));
    }
    ExtensionCodec.prototype.register = function(_a) {
        var type = _a.type, encode = _a.encode, decode = _a.decode;
        if (type >= 0) {
            // custom extensions
            this.encoders[type] = encode;
            this.decoders[type] = decode;
        } else {
            // built-in extensions
            var index = 1 + type;
            this.builtInEncoders[index] = encode;
            this.builtInDecoders[index] = decode;
        }
    };
    ExtensionCodec.prototype.tryToEncode = function(object, context) {
        // built-in extensions
        for(var i = 0; i < this.builtInEncoders.length; i++){
            var encodeExt = this.builtInEncoders[i];
            if (encodeExt != null) {
                var data = encodeExt(object, context);
                if (data != null) {
                    var type = -1 - i;
                    return new (0, _extDataMjs.ExtData)(type, data);
                }
            }
        }
        // custom extensions
        for(var i = 0; i < this.encoders.length; i++){
            var encodeExt = this.encoders[i];
            if (encodeExt != null) {
                var data = encodeExt(object, context);
                if (data != null) {
                    var type = i;
                    return new (0, _extDataMjs.ExtData)(type, data);
                }
            }
        }
        if (object instanceof (0, _extDataMjs.ExtData)) // to keep ExtData as is
        return object;
        return null;
    };
    ExtensionCodec.prototype.decode = function(data, type, context) {
        var decodeExt = type < 0 ? this.builtInDecoders[-1 - type] : this.decoders[type];
        if (decodeExt) return decodeExt(data, type, context);
        else // decode() does not fail, returns ExtData instead.
        return new (0, _extDataMjs.ExtData)(type, data);
    };
    ExtensionCodec.defaultCodec = new ExtensionCodec();
    return ExtensionCodec;
}();

},{"./ExtData.mjs":"btd9B","./timestamp.mjs":"ctTwy","@parcel/transformer-js/src/esmodule-helpers.js":"jnFvT"}],"btd9B":[function(require,module,exports,__globalThis) {
/**
 * ExtData is used to handle Extension Types that are not registered to ExtensionCodec.
 */ var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "ExtData", ()=>ExtData);
var ExtData = /** @class */ function() {
    function ExtData(type, data) {
        this.type = type;
        this.data = data;
    }
    return ExtData;
}();

},{"@parcel/transformer-js/src/esmodule-helpers.js":"jnFvT"}],"ctTwy":[function(require,module,exports,__globalThis) {
// https://github.com/msgpack/msgpack/blob/master/spec.md#timestamp-extension-type
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "EXT_TIMESTAMP", ()=>EXT_TIMESTAMP);
parcelHelpers.export(exports, "encodeTimeSpecToTimestamp", ()=>encodeTimeSpecToTimestamp);
parcelHelpers.export(exports, "encodeDateToTimeSpec", ()=>encodeDateToTimeSpec);
parcelHelpers.export(exports, "encodeTimestampExtension", ()=>encodeTimestampExtension);
parcelHelpers.export(exports, "decodeTimestampToTimeSpec", ()=>decodeTimestampToTimeSpec);
parcelHelpers.export(exports, "decodeTimestampExtension", ()=>decodeTimestampExtension);
parcelHelpers.export(exports, "timestampExtension", ()=>timestampExtension);
var _decodeErrorMjs = require("./DecodeError.mjs");
var _intMjs = require("./utils/int.mjs");
var EXT_TIMESTAMP = -1;
var TIMESTAMP32_MAX_SEC = 4294967295; // 32-bit unsigned int
var TIMESTAMP64_MAX_SEC = 17179869183; // 34-bit unsigned int
function encodeTimeSpecToTimestamp(_a) {
    var sec = _a.sec, nsec = _a.nsec;
    if (sec >= 0 && nsec >= 0 && sec <= TIMESTAMP64_MAX_SEC) {
        // Here sec >= 0 && nsec >= 0
        if (nsec === 0 && sec <= TIMESTAMP32_MAX_SEC) {
            // timestamp 32 = { sec32 (unsigned) }
            var rv = new Uint8Array(4);
            var view = new DataView(rv.buffer);
            view.setUint32(0, sec);
            return rv;
        } else {
            // timestamp 64 = { nsec30 (unsigned), sec34 (unsigned) }
            var secHigh = sec / 0x100000000;
            var secLow = sec & 0xffffffff;
            var rv = new Uint8Array(8);
            var view = new DataView(rv.buffer);
            // nsec30 | secHigh2
            view.setUint32(0, nsec << 2 | secHigh & 0x3);
            // secLow32
            view.setUint32(4, secLow);
            return rv;
        }
    } else {
        // timestamp 96 = { nsec32 (unsigned), sec64 (signed) }
        var rv = new Uint8Array(12);
        var view = new DataView(rv.buffer);
        view.setUint32(0, nsec);
        (0, _intMjs.setInt64)(view, 4, sec);
        return rv;
    }
}
function encodeDateToTimeSpec(date) {
    var msec = date.getTime();
    var sec = Math.floor(msec / 1e3);
    var nsec = (msec - sec * 1e3) * 1e6;
    // Normalizes { sec, nsec } to ensure nsec is unsigned.
    var nsecInSec = Math.floor(nsec / 1e9);
    return {
        sec: sec + nsecInSec,
        nsec: nsec - nsecInSec * 1e9
    };
}
function encodeTimestampExtension(object) {
    if (object instanceof Date) {
        var timeSpec = encodeDateToTimeSpec(object);
        return encodeTimeSpecToTimestamp(timeSpec);
    } else return null;
}
function decodeTimestampToTimeSpec(data) {
    var view = new DataView(data.buffer, data.byteOffset, data.byteLength);
    // data may be 32, 64, or 96 bits
    switch(data.byteLength){
        case 4:
            // timestamp 32 = { sec32 }
            var sec = view.getUint32(0);
            var nsec = 0;
            return {
                sec: sec,
                nsec: nsec
            };
        case 8:
            // timestamp 64 = { nsec30, sec34 }
            var nsec30AndSecHigh2 = view.getUint32(0);
            var secLow32 = view.getUint32(4);
            var sec = (nsec30AndSecHigh2 & 0x3) * 0x100000000 + secLow32;
            var nsec = nsec30AndSecHigh2 >>> 2;
            return {
                sec: sec,
                nsec: nsec
            };
        case 12:
            // timestamp 96 = { nsec32 (unsigned), sec64 (signed) }
            var sec = (0, _intMjs.getInt64)(view, 4);
            var nsec = view.getUint32(0);
            return {
                sec: sec,
                nsec: nsec
            };
        default:
            throw new (0, _decodeErrorMjs.DecodeError)("Unrecognized data size for timestamp (expected 4, 8, or 12): ".concat(data.length));
    }
}
function decodeTimestampExtension(data) {
    var timeSpec = decodeTimestampToTimeSpec(data);
    return new Date(timeSpec.sec * 1e3 + timeSpec.nsec / 1e6);
}
var timestampExtension = {
    type: EXT_TIMESTAMP,
    encode: encodeTimestampExtension,
    decode: decodeTimestampExtension
};

},{"./DecodeError.mjs":"82tm3","./utils/int.mjs":"iX9oN","@parcel/transformer-js/src/esmodule-helpers.js":"jnFvT"}],"82tm3":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "DecodeError", ()=>DecodeError);
var __extends = undefined && undefined.__extends || function() {
    var extendStatics = function(d, b) {
        extendStatics = Object.setPrototypeOf || ({
            __proto__: []
        }) instanceof Array && function(d, b) {
            d.__proto__ = b;
        } || function(d, b) {
            for(var p in b)if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p];
        };
        return extendStatics(d, b);
    };
    return function(d, b) {
        if (typeof b !== "function" && b !== null) throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() {
            this.constructor = d;
        }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
}();
var DecodeError = /** @class */ function(_super) {
    __extends(DecodeError, _super);
    function DecodeError(message) {
        var _this = _super.call(this, message) || this;
        // fix the prototype chain in a cross-platform way
        var proto = Object.create(DecodeError.prototype);
        Object.setPrototypeOf(_this, proto);
        Object.defineProperty(_this, "name", {
            configurable: true,
            enumerable: false,
            value: DecodeError.name
        });
        return _this;
    }
    return DecodeError;
}(Error);

},{"@parcel/transformer-js/src/esmodule-helpers.js":"jnFvT"}],"iX9oN":[function(require,module,exports,__globalThis) {
// Integer Utility
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "UINT32_MAX", ()=>UINT32_MAX);
// DataView extension to handle int64 / uint64,
// where the actual range is 53-bits integer (a.k.a. safe integer)
parcelHelpers.export(exports, "setUint64", ()=>setUint64);
parcelHelpers.export(exports, "setInt64", ()=>setInt64);
parcelHelpers.export(exports, "getInt64", ()=>getInt64);
parcelHelpers.export(exports, "getUint64", ()=>getUint64);
var UINT32_MAX = 4294967295;
function setUint64(view, offset, value) {
    var high = value / 4294967296;
    var low = value; // high bits are truncated by DataView
    view.setUint32(offset, high);
    view.setUint32(offset + 4, low);
}
function setInt64(view, offset, value) {
    var high = Math.floor(value / 4294967296);
    var low = value; // high bits are truncated by DataView
    view.setUint32(offset, high);
    view.setUint32(offset + 4, low);
}
function getInt64(view, offset) {
    var high = view.getInt32(offset);
    var low = view.getUint32(offset + 4);
    return high * 4294967296 + low;
}
function getUint64(view, offset) {
    var high = view.getUint32(offset);
    var low = view.getUint32(offset + 4);
    return high * 4294967296 + low;
}

},{"@parcel/transformer-js/src/esmodule-helpers.js":"jnFvT"}],"fK0M4":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "utf8Count", ()=>utf8Count);
parcelHelpers.export(exports, "utf8EncodeJs", ()=>utf8EncodeJs);
parcelHelpers.export(exports, "TEXT_ENCODER_THRESHOLD", ()=>TEXT_ENCODER_THRESHOLD);
parcelHelpers.export(exports, "utf8EncodeTE", ()=>utf8EncodeTE);
parcelHelpers.export(exports, "utf8DecodeJs", ()=>utf8DecodeJs);
parcelHelpers.export(exports, "TEXT_DECODER_THRESHOLD", ()=>TEXT_DECODER_THRESHOLD);
parcelHelpers.export(exports, "utf8DecodeTD", ()=>utf8DecodeTD);
/* eslint-disable @typescript-eslint/no-unnecessary-condition */ var _intMjs = require("./int.mjs");
var _a, _b, _c;
var TEXT_ENCODING_AVAILABLE = typeof TextEncoder !== "undefined" && typeof TextDecoder !== "undefined";
function utf8Count(str) {
    var strLength = str.length;
    var byteLength = 0;
    var pos = 0;
    while(pos < strLength){
        var value = str.charCodeAt(pos++);
        if ((value & 0xffffff80) === 0) {
            // 1-byte
            byteLength++;
            continue;
        } else if ((value & 0xfffff800) === 0) // 2-bytes
        byteLength += 2;
        else {
            // handle surrogate pair
            if (value >= 0xd800 && value <= 0xdbff) // high surrogate
            {
                if (pos < strLength) {
                    var extra = str.charCodeAt(pos);
                    if ((extra & 0xfc00) === 0xdc00) {
                        ++pos;
                        value = ((value & 0x3ff) << 10) + (extra & 0x3ff) + 0x10000;
                    }
                }
            }
            if ((value & 0xffff0000) === 0) // 3-byte
            byteLength += 3;
            else // 4-byte
            byteLength += 4;
        }
    }
    return byteLength;
}
function utf8EncodeJs(str, output, outputOffset) {
    var strLength = str.length;
    var offset = outputOffset;
    var pos = 0;
    while(pos < strLength){
        var value = str.charCodeAt(pos++);
        if ((value & 0xffffff80) === 0) {
            // 1-byte
            output[offset++] = value;
            continue;
        } else if ((value & 0xfffff800) === 0) // 2-bytes
        output[offset++] = value >> 6 & 0x1f | 0xc0;
        else {
            // handle surrogate pair
            if (value >= 0xd800 && value <= 0xdbff) // high surrogate
            {
                if (pos < strLength) {
                    var extra = str.charCodeAt(pos);
                    if ((extra & 0xfc00) === 0xdc00) {
                        ++pos;
                        value = ((value & 0x3ff) << 10) + (extra & 0x3ff) + 0x10000;
                    }
                }
            }
            if ((value & 0xffff0000) === 0) {
                // 3-byte
                output[offset++] = value >> 12 & 0x0f | 0xe0;
                output[offset++] = value >> 6 & 0x3f | 0x80;
            } else {
                // 4-byte
                output[offset++] = value >> 18 & 0x07 | 0xf0;
                output[offset++] = value >> 12 & 0x3f | 0x80;
                output[offset++] = value >> 6 & 0x3f | 0x80;
            }
        }
        output[offset++] = value & 0x3f | 0x80;
    }
}
var sharedTextEncoder = TEXT_ENCODING_AVAILABLE ? new TextEncoder() : undefined;
var TEXT_ENCODER_THRESHOLD = !TEXT_ENCODING_AVAILABLE ? (0, _intMjs.UINT32_MAX) : 0;
function utf8EncodeTEencode(str, output, outputOffset) {
    output.set(sharedTextEncoder.encode(str), outputOffset);
}
function utf8EncodeTEencodeInto(str, output, outputOffset) {
    sharedTextEncoder.encodeInto(str, output.subarray(outputOffset));
}
var utf8EncodeTE = (sharedTextEncoder === null || sharedTextEncoder === void 0 ? void 0 : sharedTextEncoder.encodeInto) ? utf8EncodeTEencodeInto : utf8EncodeTEencode;
var CHUNK_SIZE = 4096;
function utf8DecodeJs(bytes, inputOffset, byteLength) {
    var offset = inputOffset;
    var end = offset + byteLength;
    var units = [];
    var result = "";
    while(offset < end){
        var byte1 = bytes[offset++];
        if ((byte1 & 0x80) === 0) // 1 byte
        units.push(byte1);
        else if ((byte1 & 0xe0) === 0xc0) {
            // 2 bytes
            var byte2 = bytes[offset++] & 0x3f;
            units.push((byte1 & 0x1f) << 6 | byte2);
        } else if ((byte1 & 0xf0) === 0xe0) {
            // 3 bytes
            var byte2 = bytes[offset++] & 0x3f;
            var byte3 = bytes[offset++] & 0x3f;
            units.push((byte1 & 0x1f) << 12 | byte2 << 6 | byte3);
        } else if ((byte1 & 0xf8) === 0xf0) {
            // 4 bytes
            var byte2 = bytes[offset++] & 0x3f;
            var byte3 = bytes[offset++] & 0x3f;
            var byte4 = bytes[offset++] & 0x3f;
            var unit = (byte1 & 0x07) << 0x12 | byte2 << 0x0c | byte3 << 0x06 | byte4;
            if (unit > 0xffff) {
                unit -= 0x10000;
                units.push(unit >>> 10 & 0x3ff | 0xd800);
                unit = 0xdc00 | unit & 0x3ff;
            }
            units.push(unit);
        } else units.push(byte1);
        if (units.length >= CHUNK_SIZE) {
            result += String.fromCharCode.apply(String, units);
            units.length = 0;
        }
    }
    if (units.length > 0) result += String.fromCharCode.apply(String, units);
    return result;
}
var sharedTextDecoder = TEXT_ENCODING_AVAILABLE ? new TextDecoder() : null;
var TEXT_DECODER_THRESHOLD = !TEXT_ENCODING_AVAILABLE ? (0, _intMjs.UINT32_MAX) : 0;
function utf8DecodeTD(bytes, inputOffset, byteLength) {
    var stringBytes = bytes.subarray(inputOffset, inputOffset + byteLength);
    return sharedTextDecoder.decode(stringBytes);
}

},{"./int.mjs":"iX9oN","@parcel/transformer-js/src/esmodule-helpers.js":"jnFvT"}],"b9ieA":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "ensureUint8Array", ()=>ensureUint8Array);
parcelHelpers.export(exports, "createDataView", ()=>createDataView);
function ensureUint8Array(buffer) {
    if (buffer instanceof Uint8Array) return buffer;
    else if (ArrayBuffer.isView(buffer)) return new Uint8Array(buffer.buffer, buffer.byteOffset, buffer.byteLength);
    else if (buffer instanceof ArrayBuffer) return new Uint8Array(buffer);
    else // ArrayLike<number>
    return Uint8Array.from(buffer);
}
function createDataView(buffer) {
    if (buffer instanceof ArrayBuffer) return new DataView(buffer);
    var bufferView = ensureUint8Array(buffer);
    return new DataView(bufferView.buffer, bufferView.byteOffset, bufferView.byteLength);
}

},{"@parcel/transformer-js/src/esmodule-helpers.js":"jnFvT"}],"c5a2C":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "CachedKeyDecoder", ()=>CachedKeyDecoder);
var _utf8Mjs = require("./utils/utf8.mjs");
var DEFAULT_MAX_KEY_LENGTH = 16;
var DEFAULT_MAX_LENGTH_PER_KEY = 16;
var CachedKeyDecoder = /** @class */ function() {
    function CachedKeyDecoder(maxKeyLength, maxLengthPerKey) {
        if (maxKeyLength === void 0) maxKeyLength = DEFAULT_MAX_KEY_LENGTH;
        if (maxLengthPerKey === void 0) maxLengthPerKey = DEFAULT_MAX_LENGTH_PER_KEY;
        this.maxKeyLength = maxKeyLength;
        this.maxLengthPerKey = maxLengthPerKey;
        this.hit = 0;
        this.miss = 0;
        // avoid `new Array(N)`, which makes a sparse array,
        // because a sparse array is typically slower than a non-sparse array.
        this.caches = [];
        for(var i = 0; i < this.maxKeyLength; i++)this.caches.push([]);
    }
    CachedKeyDecoder.prototype.canBeCached = function(byteLength) {
        return byteLength > 0 && byteLength <= this.maxKeyLength;
    };
    CachedKeyDecoder.prototype.find = function(bytes, inputOffset, byteLength) {
        var records = this.caches[byteLength - 1];
        FIND_CHUNK: for(var _i = 0, records_1 = records; _i < records_1.length; _i++){
            var record = records_1[_i];
            var recordBytes = record.bytes;
            for(var j = 0; j < byteLength; j++){
                if (recordBytes[j] !== bytes[inputOffset + j]) continue FIND_CHUNK;
            }
            return record.str;
        }
        return null;
    };
    CachedKeyDecoder.prototype.store = function(bytes, value) {
        var records = this.caches[bytes.length - 1];
        var record = {
            bytes: bytes,
            str: value
        };
        if (records.length >= this.maxLengthPerKey) // `records` are full!
        // Set `record` to an arbitrary position.
        records[Math.random() * records.length | 0] = record;
        else records.push(record);
    };
    CachedKeyDecoder.prototype.decode = function(bytes, inputOffset, byteLength) {
        var cachedValue = this.find(bytes, inputOffset, byteLength);
        if (cachedValue != null) {
            this.hit++;
            return cachedValue;
        }
        this.miss++;
        var str = (0, _utf8Mjs.utf8DecodeJs)(bytes, inputOffset, byteLength);
        // Ensure to copy a slice of bytes because the byte may be NodeJS Buffer and Buffer#slice() returns a reference to its internal ArrayBuffer.
        var slicedCopyOfBytes = Uint8Array.prototype.slice.call(bytes, inputOffset, inputOffset + byteLength);
        this.store(slicedCopyOfBytes, str);
        return str;
    };
    return CachedKeyDecoder;
}();

},{"./utils/utf8.mjs":"fK0M4","@parcel/transformer-js/src/esmodule-helpers.js":"jnFvT"}],"cY807":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
/**
 * @throws {@link RangeError} if the buffer is incomplete, including the case where the buffer is empty.
 * @throws {@link DecodeError} if the buffer contains invalid data.
 */ parcelHelpers.export(exports, "decodeAsync", ()=>decodeAsync);
/**
 * @throws {@link RangeError} if the buffer is incomplete, including the case where the buffer is empty.
 * @throws {@link DecodeError} if the buffer contains invalid data.
 */ parcelHelpers.export(exports, "decodeArrayStream", ()=>decodeArrayStream);
/**
 * @throws {@link RangeError} if the buffer is incomplete, including the case where the buffer is empty.
 * @throws {@link DecodeError} if the buffer contains invalid data.
 */ parcelHelpers.export(exports, "decodeMultiStream", ()=>decodeMultiStream);
/**
 * @deprecated Use {@link decodeMultiStream()} instead.
 */ parcelHelpers.export(exports, "decodeStream", ()=>decodeStream);
var _decoderMjs = require("./Decoder.mjs");
var _streamMjs = require("./utils/stream.mjs");
var _decodeMjs = require("./decode.mjs");
var __awaiter = undefined && undefined.__awaiter || function(thisArg, _arguments, P, generator) {
    function adopt(value) {
        return value instanceof P ? value : new P(function(resolve) {
            resolve(value);
        });
    }
    return new (P || (P = Promise))(function(resolve, reject) {
        function fulfilled(value) {
            try {
                step(generator.next(value));
            } catch (e) {
                reject(e);
            }
        }
        function rejected(value) {
            try {
                step(generator["throw"](value));
            } catch (e) {
                reject(e);
            }
        }
        function step(result) {
            result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected);
        }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = undefined && undefined.__generator || function(thisArg, body) {
    var _ = {
        label: 0,
        sent: function() {
            if (t[0] & 1) throw t[1];
            return t[1];
        },
        trys: [],
        ops: []
    }, f, y, t, g;
    return g = {
        next: verb(0),
        "throw": verb(1),
        "return": verb(2)
    }, typeof Symbol === "function" && (g[Symbol.iterator] = function() {
        return this;
    }), g;
    function verb(n) {
        return function(v) {
            return step([
                n,
                v
            ]);
        };
    }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while(_)try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [
                op[0] & 2,
                t.value
            ];
            switch(op[0]){
                case 0:
                case 1:
                    t = op;
                    break;
                case 4:
                    _.label++;
                    return {
                        value: op[1],
                        done: false
                    };
                case 5:
                    _.label++;
                    y = op[1];
                    op = [
                        0
                    ];
                    continue;
                case 7:
                    op = _.ops.pop();
                    _.trys.pop();
                    continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) {
                        _ = 0;
                        continue;
                    }
                    if (op[0] === 3 && (!t || op[1] > t[0] && op[1] < t[3])) {
                        _.label = op[1];
                        break;
                    }
                    if (op[0] === 6 && _.label < t[1]) {
                        _.label = t[1];
                        t = op;
                        break;
                    }
                    if (t && _.label < t[2]) {
                        _.label = t[2];
                        _.ops.push(op);
                        break;
                    }
                    if (t[2]) _.ops.pop();
                    _.trys.pop();
                    continue;
            }
            op = body.call(thisArg, _);
        } catch (e) {
            op = [
                6,
                e
            ];
            y = 0;
        } finally{
            f = t = 0;
        }
        if (op[0] & 5) throw op[1];
        return {
            value: op[0] ? op[1] : void 0,
            done: true
        };
    }
};
function decodeAsync(streamLike, options) {
    if (options === void 0) options = (0, _decodeMjs.defaultDecodeOptions);
    return __awaiter(this, void 0, void 0, function() {
        var stream, decoder;
        return __generator(this, function(_a) {
            stream = (0, _streamMjs.ensureAsyncIterable)(streamLike);
            decoder = new (0, _decoderMjs.Decoder)(options.extensionCodec, options.context, options.maxStrLength, options.maxBinLength, options.maxArrayLength, options.maxMapLength, options.maxExtLength);
            return [
                2 /*return*/ ,
                decoder.decodeAsync(stream)
            ];
        });
    });
}
function decodeArrayStream(streamLike, options) {
    if (options === void 0) options = (0, _decodeMjs.defaultDecodeOptions);
    var stream = (0, _streamMjs.ensureAsyncIterable)(streamLike);
    var decoder = new (0, _decoderMjs.Decoder)(options.extensionCodec, options.context, options.maxStrLength, options.maxBinLength, options.maxArrayLength, options.maxMapLength, options.maxExtLength);
    return decoder.decodeArrayStream(stream);
}
function decodeMultiStream(streamLike, options) {
    if (options === void 0) options = (0, _decodeMjs.defaultDecodeOptions);
    var stream = (0, _streamMjs.ensureAsyncIterable)(streamLike);
    var decoder = new (0, _decoderMjs.Decoder)(options.extensionCodec, options.context, options.maxStrLength, options.maxBinLength, options.maxArrayLength, options.maxMapLength, options.maxExtLength);
    return decoder.decodeStream(stream);
}
function decodeStream(streamLike, options) {
    if (options === void 0) options = (0, _decodeMjs.defaultDecodeOptions);
    return decodeMultiStream(streamLike, options);
}

},{"./Decoder.mjs":"9qWca","./utils/stream.mjs":"j3T4a","./decode.mjs":"8RBB0","@parcel/transformer-js/src/esmodule-helpers.js":"jnFvT"}],"j3T4a":[function(require,module,exports,__globalThis) {
// utility for whatwg streams
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "isAsyncIterable", ()=>isAsyncIterable);
parcelHelpers.export(exports, "asyncIterableFromStream", ()=>asyncIterableFromStream);
parcelHelpers.export(exports, "ensureAsyncIterable", ()=>ensureAsyncIterable);
var __generator = undefined && undefined.__generator || function(thisArg, body) {
    var _ = {
        label: 0,
        sent: function() {
            if (t[0] & 1) throw t[1];
            return t[1];
        },
        trys: [],
        ops: []
    }, f, y, t, g;
    return g = {
        next: verb(0),
        "throw": verb(1),
        "return": verb(2)
    }, typeof Symbol === "function" && (g[Symbol.iterator] = function() {
        return this;
    }), g;
    function verb(n) {
        return function(v) {
            return step([
                n,
                v
            ]);
        };
    }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while(_)try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [
                op[0] & 2,
                t.value
            ];
            switch(op[0]){
                case 0:
                case 1:
                    t = op;
                    break;
                case 4:
                    _.label++;
                    return {
                        value: op[1],
                        done: false
                    };
                case 5:
                    _.label++;
                    y = op[1];
                    op = [
                        0
                    ];
                    continue;
                case 7:
                    op = _.ops.pop();
                    _.trys.pop();
                    continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) {
                        _ = 0;
                        continue;
                    }
                    if (op[0] === 3 && (!t || op[1] > t[0] && op[1] < t[3])) {
                        _.label = op[1];
                        break;
                    }
                    if (op[0] === 6 && _.label < t[1]) {
                        _.label = t[1];
                        t = op;
                        break;
                    }
                    if (t && _.label < t[2]) {
                        _.label = t[2];
                        _.ops.push(op);
                        break;
                    }
                    if (t[2]) _.ops.pop();
                    _.trys.pop();
                    continue;
            }
            op = body.call(thisArg, _);
        } catch (e) {
            op = [
                6,
                e
            ];
            y = 0;
        } finally{
            f = t = 0;
        }
        if (op[0] & 5) throw op[1];
        return {
            value: op[0] ? op[1] : void 0,
            done: true
        };
    }
};
var __await = undefined && undefined.__await || function(v) {
    return this instanceof __await ? (this.v = v, this) : new __await(v);
};
var __asyncGenerator = undefined && undefined.__asyncGenerator || function(thisArg, _arguments, generator) {
    if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
    var g = generator.apply(thisArg, _arguments || []), i, q = [];
    return i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function() {
        return this;
    }, i;
    function verb(n) {
        if (g[n]) i[n] = function(v) {
            return new Promise(function(a, b) {
                q.push([
                    n,
                    v,
                    a,
                    b
                ]) > 1 || resume(n, v);
            });
        };
    }
    function resume(n, v) {
        try {
            step(g[n](v));
        } catch (e) {
            settle(q[0][3], e);
        }
    }
    function step(r) {
        r.value instanceof __await ? Promise.resolve(r.value.v).then(fulfill, reject) : settle(q[0][2], r);
    }
    function fulfill(value) {
        resume("next", value);
    }
    function reject(value) {
        resume("throw", value);
    }
    function settle(f, v) {
        if (f(v), q.shift(), q.length) resume(q[0][0], q[0][1]);
    }
};
function isAsyncIterable(object) {
    return object[Symbol.asyncIterator] != null;
}
function assertNonNull(value) {
    if (value == null) throw new Error("Assertion Failure: value must not be null nor undefined");
}
function asyncIterableFromStream(stream) {
    return __asyncGenerator(this, arguments, function asyncIterableFromStream_1() {
        var reader, _a, done, value;
        return __generator(this, function(_b) {
            switch(_b.label){
                case 0:
                    reader = stream.getReader();
                    _b.label = 1;
                case 1:
                    _b.trys.push([
                        1,
                        ,
                        9,
                        10
                    ]);
                    _b.label = 2;
                case 2:
                    return [
                        4 /*yield*/ ,
                        __await(reader.read())
                    ];
                case 3:
                    _a = _b.sent(), done = _a.done, value = _a.value;
                    if (!done) return [
                        3 /*break*/ ,
                        5
                    ];
                    return [
                        4 /*yield*/ ,
                        __await(void 0)
                    ];
                case 4:
                    return [
                        2 /*return*/ ,
                        _b.sent()
                    ];
                case 5:
                    assertNonNull(value);
                    return [
                        4 /*yield*/ ,
                        __await(value)
                    ];
                case 6:
                    return [
                        4 /*yield*/ ,
                        _b.sent()
                    ];
                case 7:
                    _b.sent();
                    return [
                        3 /*break*/ ,
                        2
                    ];
                case 8:
                    return [
                        3 /*break*/ ,
                        10
                    ];
                case 9:
                    reader.releaseLock();
                    return [
                        7 /*endfinally*/ 
                    ];
                case 10:
                    return [
                        2 /*return*/ 
                    ];
            }
        });
    });
}
function ensureAsyncIterable(streamLike) {
    if (isAsyncIterable(streamLike)) return streamLike;
    else return asyncIterableFromStream(streamLike);
}

},{"@parcel/transformer-js/src/esmodule-helpers.js":"jnFvT"}],"fUIU1":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "DEFAULT_MAX_DEPTH", ()=>DEFAULT_MAX_DEPTH);
parcelHelpers.export(exports, "DEFAULT_INITIAL_BUFFER_SIZE", ()=>DEFAULT_INITIAL_BUFFER_SIZE);
parcelHelpers.export(exports, "Encoder", ()=>Encoder);
var _utf8Mjs = require("./utils/utf8.mjs");
var _extensionCodecMjs = require("./ExtensionCodec.mjs");
var _intMjs = require("./utils/int.mjs");
var _typedArraysMjs = require("./utils/typedArrays.mjs");
var DEFAULT_MAX_DEPTH = 100;
var DEFAULT_INITIAL_BUFFER_SIZE = 2048;
var Encoder = /** @class */ function() {
    function Encoder(extensionCodec, context, maxDepth, initialBufferSize, sortKeys, forceFloat32, ignoreUndefined, forceIntegerToFloat) {
        if (extensionCodec === void 0) extensionCodec = (0, _extensionCodecMjs.ExtensionCodec).defaultCodec;
        if (context === void 0) context = undefined;
        if (maxDepth === void 0) maxDepth = DEFAULT_MAX_DEPTH;
        if (initialBufferSize === void 0) initialBufferSize = DEFAULT_INITIAL_BUFFER_SIZE;
        if (sortKeys === void 0) sortKeys = false;
        if (forceFloat32 === void 0) forceFloat32 = false;
        if (ignoreUndefined === void 0) ignoreUndefined = false;
        if (forceIntegerToFloat === void 0) forceIntegerToFloat = false;
        this.extensionCodec = extensionCodec;
        this.context = context;
        this.maxDepth = maxDepth;
        this.initialBufferSize = initialBufferSize;
        this.sortKeys = sortKeys;
        this.forceFloat32 = forceFloat32;
        this.ignoreUndefined = ignoreUndefined;
        this.forceIntegerToFloat = forceIntegerToFloat;
        this.pos = 0;
        this.view = new DataView(new ArrayBuffer(this.initialBufferSize));
        this.bytes = new Uint8Array(this.view.buffer);
    }
    Encoder.prototype.reinitializeState = function() {
        this.pos = 0;
    };
    /**
     * This is almost equivalent to {@link Encoder#encode}, but it returns an reference of the encoder's internal buffer and thus much faster than {@link Encoder#encode}.
     *
     * @returns Encodes the object and returns a shared reference the encoder's internal buffer.
     */ Encoder.prototype.encodeSharedRef = function(object) {
        this.reinitializeState();
        this.doEncode(object, 1);
        return this.bytes.subarray(0, this.pos);
    };
    /**
     * @returns Encodes the object and returns a copy of the encoder's internal buffer.
     */ Encoder.prototype.encode = function(object) {
        this.reinitializeState();
        this.doEncode(object, 1);
        return this.bytes.slice(0, this.pos);
    };
    Encoder.prototype.doEncode = function(object, depth) {
        if (depth > this.maxDepth) throw new Error("Too deep objects in depth ".concat(depth));
        if (object == null) this.encodeNil();
        else if (typeof object === "boolean") this.encodeBoolean(object);
        else if (typeof object === "number") this.encodeNumber(object);
        else if (typeof object === "string") this.encodeString(object);
        else this.encodeObject(object, depth);
    };
    Encoder.prototype.ensureBufferSizeToWrite = function(sizeToWrite) {
        var requiredSize = this.pos + sizeToWrite;
        if (this.view.byteLength < requiredSize) this.resizeBuffer(requiredSize * 2);
    };
    Encoder.prototype.resizeBuffer = function(newSize) {
        var newBuffer = new ArrayBuffer(newSize);
        var newBytes = new Uint8Array(newBuffer);
        var newView = new DataView(newBuffer);
        newBytes.set(this.bytes);
        this.view = newView;
        this.bytes = newBytes;
    };
    Encoder.prototype.encodeNil = function() {
        this.writeU8(0xc0);
    };
    Encoder.prototype.encodeBoolean = function(object) {
        if (object === false) this.writeU8(0xc2);
        else this.writeU8(0xc3);
    };
    Encoder.prototype.encodeNumber = function(object) {
        if (Number.isSafeInteger(object) && !this.forceIntegerToFloat) {
            if (object >= 0) {
                if (object < 0x80) // positive fixint
                this.writeU8(object);
                else if (object < 0x100) {
                    // uint 8
                    this.writeU8(0xcc);
                    this.writeU8(object);
                } else if (object < 0x10000) {
                    // uint 16
                    this.writeU8(0xcd);
                    this.writeU16(object);
                } else if (object < 0x100000000) {
                    // uint 32
                    this.writeU8(0xce);
                    this.writeU32(object);
                } else {
                    // uint 64
                    this.writeU8(0xcf);
                    this.writeU64(object);
                }
            } else {
                if (object >= -32) // negative fixint
                this.writeU8(0xe0 | object + 0x20);
                else if (object >= -128) {
                    // int 8
                    this.writeU8(0xd0);
                    this.writeI8(object);
                } else if (object >= -32768) {
                    // int 16
                    this.writeU8(0xd1);
                    this.writeI16(object);
                } else if (object >= -2147483648) {
                    // int 32
                    this.writeU8(0xd2);
                    this.writeI32(object);
                } else {
                    // int 64
                    this.writeU8(0xd3);
                    this.writeI64(object);
                }
            }
        } else // non-integer numbers
        if (this.forceFloat32) {
            // float 32
            this.writeU8(0xca);
            this.writeF32(object);
        } else {
            // float 64
            this.writeU8(0xcb);
            this.writeF64(object);
        }
    };
    Encoder.prototype.writeStringHeader = function(byteLength) {
        if (byteLength < 32) // fixstr
        this.writeU8(0xa0 + byteLength);
        else if (byteLength < 0x100) {
            // str 8
            this.writeU8(0xd9);
            this.writeU8(byteLength);
        } else if (byteLength < 0x10000) {
            // str 16
            this.writeU8(0xda);
            this.writeU16(byteLength);
        } else if (byteLength < 0x100000000) {
            // str 32
            this.writeU8(0xdb);
            this.writeU32(byteLength);
        } else throw new Error("Too long string: ".concat(byteLength, " bytes in UTF-8"));
    };
    Encoder.prototype.encodeString = function(object) {
        var maxHeaderSize = 5;
        var strLength = object.length;
        if (strLength > (0, _utf8Mjs.TEXT_ENCODER_THRESHOLD)) {
            var byteLength = (0, _utf8Mjs.utf8Count)(object);
            this.ensureBufferSizeToWrite(maxHeaderSize + byteLength);
            this.writeStringHeader(byteLength);
            (0, _utf8Mjs.utf8EncodeTE)(object, this.bytes, this.pos);
            this.pos += byteLength;
        } else {
            var byteLength = (0, _utf8Mjs.utf8Count)(object);
            this.ensureBufferSizeToWrite(maxHeaderSize + byteLength);
            this.writeStringHeader(byteLength);
            (0, _utf8Mjs.utf8EncodeJs)(object, this.bytes, this.pos);
            this.pos += byteLength;
        }
    };
    Encoder.prototype.encodeObject = function(object, depth) {
        // try to encode objects with custom codec first of non-primitives
        var ext = this.extensionCodec.tryToEncode(object, this.context);
        if (ext != null) this.encodeExtension(ext);
        else if (Array.isArray(object)) this.encodeArray(object, depth);
        else if (ArrayBuffer.isView(object)) this.encodeBinary(object);
        else if (typeof object === "object") this.encodeMap(object, depth);
        else // symbol, function and other special object come here unless extensionCodec handles them.
        throw new Error("Unrecognized object: ".concat(Object.prototype.toString.apply(object)));
    };
    Encoder.prototype.encodeBinary = function(object) {
        var size = object.byteLength;
        if (size < 0x100) {
            // bin 8
            this.writeU8(0xc4);
            this.writeU8(size);
        } else if (size < 0x10000) {
            // bin 16
            this.writeU8(0xc5);
            this.writeU16(size);
        } else if (size < 0x100000000) {
            // bin 32
            this.writeU8(0xc6);
            this.writeU32(size);
        } else throw new Error("Too large binary: ".concat(size));
        var bytes = (0, _typedArraysMjs.ensureUint8Array)(object);
        this.writeU8a(bytes);
    };
    Encoder.prototype.encodeArray = function(object, depth) {
        var size = object.length;
        if (size < 16) // fixarray
        this.writeU8(0x90 + size);
        else if (size < 0x10000) {
            // array 16
            this.writeU8(0xdc);
            this.writeU16(size);
        } else if (size < 0x100000000) {
            // array 32
            this.writeU8(0xdd);
            this.writeU32(size);
        } else throw new Error("Too large array: ".concat(size));
        for(var _i = 0, object_1 = object; _i < object_1.length; _i++){
            var item = object_1[_i];
            this.doEncode(item, depth + 1);
        }
    };
    Encoder.prototype.countWithoutUndefined = function(object, keys) {
        var count = 0;
        for(var _i = 0, keys_1 = keys; _i < keys_1.length; _i++){
            var key = keys_1[_i];
            if (object[key] !== undefined) count++;
        }
        return count;
    };
    Encoder.prototype.encodeMap = function(object, depth) {
        var keys = Object.keys(object);
        if (this.sortKeys) keys.sort();
        var size = this.ignoreUndefined ? this.countWithoutUndefined(object, keys) : keys.length;
        if (size < 16) // fixmap
        this.writeU8(0x80 + size);
        else if (size < 0x10000) {
            // map 16
            this.writeU8(0xde);
            this.writeU16(size);
        } else if (size < 0x100000000) {
            // map 32
            this.writeU8(0xdf);
            this.writeU32(size);
        } else throw new Error("Too large map object: ".concat(size));
        for(var _i = 0, keys_2 = keys; _i < keys_2.length; _i++){
            var key = keys_2[_i];
            var value = object[key];
            if (!(this.ignoreUndefined && value === undefined)) {
                this.encodeString(key);
                this.doEncode(value, depth + 1);
            }
        }
    };
    Encoder.prototype.encodeExtension = function(ext) {
        var size = ext.data.length;
        if (size === 1) // fixext 1
        this.writeU8(0xd4);
        else if (size === 2) // fixext 2
        this.writeU8(0xd5);
        else if (size === 4) // fixext 4
        this.writeU8(0xd6);
        else if (size === 8) // fixext 8
        this.writeU8(0xd7);
        else if (size === 16) // fixext 16
        this.writeU8(0xd8);
        else if (size < 0x100) {
            // ext 8
            this.writeU8(0xc7);
            this.writeU8(size);
        } else if (size < 0x10000) {
            // ext 16
            this.writeU8(0xc8);
            this.writeU16(size);
        } else if (size < 0x100000000) {
            // ext 32
            this.writeU8(0xc9);
            this.writeU32(size);
        } else throw new Error("Too large extension object: ".concat(size));
        this.writeI8(ext.type);
        this.writeU8a(ext.data);
    };
    Encoder.prototype.writeU8 = function(value) {
        this.ensureBufferSizeToWrite(1);
        this.view.setUint8(this.pos, value);
        this.pos++;
    };
    Encoder.prototype.writeU8a = function(values) {
        var size = values.length;
        this.ensureBufferSizeToWrite(size);
        this.bytes.set(values, this.pos);
        this.pos += size;
    };
    Encoder.prototype.writeI8 = function(value) {
        this.ensureBufferSizeToWrite(1);
        this.view.setInt8(this.pos, value);
        this.pos++;
    };
    Encoder.prototype.writeU16 = function(value) {
        this.ensureBufferSizeToWrite(2);
        this.view.setUint16(this.pos, value);
        this.pos += 2;
    };
    Encoder.prototype.writeI16 = function(value) {
        this.ensureBufferSizeToWrite(2);
        this.view.setInt16(this.pos, value);
        this.pos += 2;
    };
    Encoder.prototype.writeU32 = function(value) {
        this.ensureBufferSizeToWrite(4);
        this.view.setUint32(this.pos, value);
        this.pos += 4;
    };
    Encoder.prototype.writeI32 = function(value) {
        this.ensureBufferSizeToWrite(4);
        this.view.setInt32(this.pos, value);
        this.pos += 4;
    };
    Encoder.prototype.writeF32 = function(value) {
        this.ensureBufferSizeToWrite(4);
        this.view.setFloat32(this.pos, value);
        this.pos += 4;
    };
    Encoder.prototype.writeF64 = function(value) {
        this.ensureBufferSizeToWrite(8);
        this.view.setFloat64(this.pos, value);
        this.pos += 8;
    };
    Encoder.prototype.writeU64 = function(value) {
        this.ensureBufferSizeToWrite(8);
        (0, _intMjs.setUint64)(this.view, this.pos, value);
        this.pos += 8;
    };
    Encoder.prototype.writeI64 = function(value) {
        this.ensureBufferSizeToWrite(8);
        (0, _intMjs.setInt64)(this.view, this.pos, value);
        this.pos += 8;
    };
    return Encoder;
}();

},{"./utils/utf8.mjs":"fK0M4","./ExtensionCodec.mjs":"29yt3","./utils/int.mjs":"iX9oN","./utils/typedArrays.mjs":"b9ieA","@parcel/transformer-js/src/esmodule-helpers.js":"jnFvT"}],"lWYrr":[function(require,module,exports,__globalThis) {
/**
 * RoomManager 클래스
 * 룸 및 참가자 관리
 *
 * 작성일: 2025-11-13
 * 기능: 룸 생성, 참가자 관리, 준비 상태 추적
 */ var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
/**
 * RoomManager 클래스
 * 호스트와 참가자의 룸 관리 로직을 담당
 */ parcelHelpers.export(exports, "RoomManager", ()=>RoomManager);
var _protocol = require("./protocol");
class RoomManager {
    constructor(peerManager){
        this.roomId = null // 방 ID
        ;
        this.isHost = false // 호스트 여부
        ;
        this.players = new Map() // 참가자 맵
        ;
        this.currentGameConfig = null // 현재 게임 설정
        ;
        this.eventHandlers = {} // 이벤트 핸들러
        ;
        this.hostConnection = null // 호스트 연결 (참가자용)
        ;
        this.peerManager = peerManager;
        this.setupPeerManagerEvents();
    }
    /**
   * PeerManager 이벤트 설정
   */ setupPeerManagerEvents() {
        // Peer 생성 완료
        this.peerManager.on('open', (peerId)=>{
            console.log("[RoomManager] Peer \uC0DD\uC131 \uC644\uB8CC:", peerId);
        });
        // 새 연결 수신 (호스트만)
        this.peerManager.on('connection', (conn)=>{
            console.log("[RoomManager] \uC0C8 \uC5F0\uACB0 \uC218\uC2E0:", conn.peer);
        // 참가자 정보는 JOIN_REQUEST 메시지를 받을 때 처리
        });
        // 데이터 수신
        this.peerManager.on('data', (message, conn)=>{
            this.handleMessage(message, conn);
        });
        // 연결 종료
        this.peerManager.on('close', (conn)=>{
            this.handlePlayerLeft(conn.peer);
        });
        // 에러
        this.peerManager.on('error', (error)=>{
            console.error("[RoomManager] \uC5D0\uB7EC:", error);
        });
    }
    /**
   * 룸 생성 (호스트용)
   * @param playerName 호스트 이름
   * @param customRoomId 사용자 지정 방 코드 (선택)
   * @returns Promise<string> 방 코드
   */ async createRoom(playerName, customRoomId) {
        try {
            // 방 코드 생성 (6자리 랜덤 코드)
            const roomId = customRoomId || this.generateRoomCode();
            // Peer 생성
            const peerId = await this.peerManager.createPeer(roomId);
            this.roomId = roomId;
            this.isHost = true;
            // 호스트를 참가자 목록에 추가
            const hostPlayer = {
                id: peerId,
                name: playerName,
                isHost: true,
                isReady: true,
                joinedAt: Date.now()
            };
            this.players.set(peerId, hostPlayer);
            console.log("[RoomManager] \uB8F8 \uC0DD\uC131 \uC644\uB8CC:", roomId);
            return roomId;
        } catch (error) {
            console.error("[RoomManager] \uB8F8 \uC0DD\uC131 \uC2E4\uD328:", error);
            throw error;
        }
    }
    /**
   * 룸 참가 (참가자용)
   * @param playerName 참가자 이름
   * @param roomId 방 코드
   * @returns Promise<Player[]> 현재 참가자 목록
   */ async joinRoom(playerName, roomId) {
        try {
            // Peer 생성
            const peerId = await this.peerManager.createPeer();
            // 호스트에 연결
            const conn = await this.peerManager.connectToHost(roomId);
            this.hostConnection = conn;
            this.roomId = roomId;
            this.isHost = false;
            // 참가 요청 메시지 전송
            const joinRequest = (0, _protocol.MessageFactory).createJoinRequest(peerId, playerName);
            this.peerManager.send(roomId, joinRequest);
            // JOIN_ACCEPT 메시지를 기다림
            return new Promise((resolve, reject)=>{
                const timeout = setTimeout(()=>{
                    reject(new Error("\uCC38\uAC00 \uC751\uB2F5 \uC2DC\uAC04 \uCD08\uACFC"));
                }, 10000);
                // 임시 핸들러 등록
                const originalHandler = this.eventHandlers.playerJoined;
                this.eventHandlers.playerJoined = (player)=>{
                    clearTimeout(timeout);
                    // 원래 핸들러 복구
                    this.eventHandlers.playerJoined = originalHandler;
                    resolve(Array.from(this.players.values()));
                };
            });
        } catch (error) {
            console.error("[RoomManager] \uB8F8 \uCC38\uAC00 \uC2E4\uD328:", error);
            throw error;
        }
    }
    /**
   * 메시지 처리
   * @param message 수신한 메시지
   * @param conn 연결 객체
   */ handleMessage(message, conn) {
        console.log("[RoomManager] \uBA54\uC2DC\uC9C0 \uC218\uC2E0:", message.type);
        switch(message.type){
            case (0, _protocol.MessageType).JOIN_REQUEST:
                this.handleJoinRequest(message, conn);
                break;
            case (0, _protocol.MessageType).JOIN_ACCEPT:
                this.handleJoinAccept(message);
                break;
            case (0, _protocol.MessageType).PLAYER_JOINED:
                this.handlePlayerJoined(message);
                break;
            case (0, _protocol.MessageType).PLAYER_LEFT:
                this.handlePlayerLeft(message.payload.playerId);
                break;
            case (0, _protocol.MessageType).PLAYER_LIST:
                this.handlePlayerList(message);
                break;
            case (0, _protocol.MessageType).READY_STATE:
                this.handleReadyState(message);
                break;
            case (0, _protocol.MessageType).NAME_CHANGE:
                this.handleNameChange(message);
                break;
            case (0, _protocol.MessageType).GAME_CONFIG:
                this.handleGameConfig(message);
                break;
            case (0, _protocol.MessageType).KICK_PLAYER:
                this.handleKickPlayer(message);
                break;
            default:
                console.warn("[RoomManager] \uCC98\uB9AC\uB418\uC9C0 \uC54A\uC740 \uBA54\uC2DC\uC9C0 \uD0C0\uC785:", message.type);
        }
    }
    /**
   * 참가 요청 처리 (호스트만)
   * @param message JOIN_REQUEST 메시지
   * @param conn 연결 객체
   */ handleJoinRequest(message, conn) {
        if (!this.isHost) return;
        const { playerName } = message.payload;
        const playerId = message.senderId;
        console.log("[RoomManager] \uCC38\uAC00 \uC694\uCCAD:", playerName, playerId);
        // 참가자 추가
        const newPlayer = {
            id: playerId,
            name: playerName,
            isHost: false,
            isReady: false,
            joinedAt: Date.now()
        };
        this.players.set(playerId, newPlayer);
        // JOIN_ACCEPT 메시지 전송
        const acceptMessage = (0, _protocol.MessageFactory).createJoinAccept(this.peerManager.getPeerId(), this.roomId, Array.from(this.players.values()), this.currentGameConfig || undefined);
        this.peerManager.send(playerId, acceptMessage);
        // 다른 참가자들에게 PLAYER_JOINED 브로드캐스트
        const joinedMessage = {
            type: (0, _protocol.MessageType).PLAYER_JOINED,
            timestamp: Date.now(),
            senderId: this.peerManager.getPeerId(),
            payload: {
                player: newPlayer
            }
        };
        this.peerManager.broadcast(joinedMessage, playerId);
        // 이벤트 발생
        this.emit('playerJoined', newPlayer);
    }
    /**
   * 참가 수락 처리 (참가자만)
   * @param message JOIN_ACCEPT 메시지
   */ handleJoinAccept(message) {
        if (this.isHost) return;
        const { players, gameConfig } = message.payload;
        console.log("[RoomManager] \uCC38\uAC00 \uC218\uB77D:", players.length, "\uBA85");
        // 참가자 목록 업데이트
        this.players.clear();
        players.forEach((player)=>{
            this.players.set(player.id, player);
        });
        // 게임 설정 업데이트
        if (gameConfig) {
            this.currentGameConfig = gameConfig;
            this.emit('gameConfigChanged', gameConfig);
        }
        // 자기 자신을 playerJoined 이벤트로 알림 (joinRoom의 Promise resolve용)
        const myPlayer = players.find((p)=>p.id === this.peerManager.getPeerId());
        if (myPlayer) this.emit('playerJoined', myPlayer);
    }
    /**
   * 참가자 입장 처리 (참가자만)
   * @param message PLAYER_JOINED 메시지
   */ handlePlayerJoined(message) {
        if (this.isHost) return;
        const { player } = message.payload;
        console.log("[RoomManager] \uC0C8 \uCC38\uAC00\uC790 \uC785\uC7A5:", player.name);
        this.players.set(player.id, player);
        this.emit('playerJoined', player);
    }
    /**
   * 참가자 퇴장 처리
   * @param playerId 퇴장한 참가자 ID
   */ handlePlayerLeft(playerId) {
        const player = this.players.get(playerId);
        if (!player) return;
        console.log("[RoomManager] \uCC38\uAC00\uC790 \uD1F4\uC7A5:", player.name);
        this.players.delete(playerId);
        // 호스트인 경우 다른 참가자들에게 알림
        if (this.isHost) {
            const leftMessage = {
                type: (0, _protocol.MessageType).PLAYER_LEFT,
                timestamp: Date.now(),
                senderId: this.peerManager.getPeerId(),
                payload: {
                    playerId
                }
            };
            this.peerManager.broadcast(leftMessage);
        }
        this.emit('playerLeft', playerId);
    }
    /**
   * 참가자 목록 업데이트 처리
   * @param message PLAYER_LIST 메시지
   */ handlePlayerList(message) {
        const { players } = message.payload;
        console.log("[RoomManager] \uCC38\uAC00\uC790 \uBAA9\uB85D \uC5C5\uB370\uC774\uD2B8:", players.length, "\uBA85");
        this.players.clear();
        players.forEach((player)=>{
            this.players.set(player.id, player);
        });
    }
    /**
   * 준비 상태 변경 처리
   * @param message READY_STATE 메시지
   */ handleReadyState(message) {
        const { playerId, isReady } = message.payload;
        const player = this.players.get(playerId);
        if (player) {
            player.isReady = isReady;
            console.log("[RoomManager] \uC900\uBE44 \uC0C1\uD0DC \uBCC0\uACBD:", player.name, isReady);
            // 이벤트 발생
            this.emit('playerReady', playerId, isReady);
            // 모두 준비되었는지 확인
            if (this.isHost && this.areAllPlayersReady()) this.emit('allReady');
        }
    }
    /**
   * 이름 변경 처리
   * @param message NAME_CHANGE 메시지
   */ handleNameChange(message) {
        const { playerId, newName } = message.payload;
        const player = this.players.get(playerId);
        if (player) {
            player.name = newName;
            console.log("[RoomManager] \uC774\uB984 \uBCC0\uACBD:", playerId, "\u2192", newName);
            // 호스트인 경우 다른 모든 참가자에게 브로드캐스트
            if (this.isHost) this.peerManager.broadcast(message, playerId);
            // 이벤트 발생 (UI 업데이트용)
            this.emit('playerJoined', player);
        }
    }
    /**
   * 게임 설정 변경 처리
   * @param message GAME_CONFIG 메시지
   */ handleGameConfig(message) {
        const { config } = message.payload;
        console.log("[RoomManager] \uAC8C\uC784 \uC124\uC815 \uBCC0\uACBD");
        this.currentGameConfig = config;
        this.emit('gameConfigChanged', config);
    }
    /**
   * 참가자 강퇴 처리
   * @param message KICK_PLAYER 메시지
   */ handleKickPlayer(message) {
        const { playerId } = message.payload;
        // 자기 자신이 강퇴되었는지 확인
        if (playerId === this.peerManager.getPeerId()) {
            console.log("[RoomManager] \uAC15\uD1F4\uB2F9\uD568");
            this.leaveRoom();
            alert("\uD638\uC2A4\uD2B8\uC5D0 \uC758\uD574 \uAC15\uD1F4\uB418\uC5C8\uC2B5\uB2C8\uB2E4.");
        } else if (this.isHost) {
            // 호스트인 경우 해당 참가자 연결 끊기
            this.peerManager.disconnect(playerId);
            this.handlePlayerLeft(playerId);
        }
    }
    /**
   * 준비 상태 토글 (참가자만)
   */ toggleReady() {
        if (this.isHost) {
            console.warn("[RoomManager] \uD638\uC2A4\uD2B8\uB294 \uC900\uBE44 \uC0C1\uD0DC\uB97C \uBCC0\uACBD\uD560 \uC218 \uC5C6\uC2B5\uB2C8\uB2E4.");
            return;
        }
        const myPlayer = this.players.get(this.peerManager.getPeerId());
        if (!myPlayer) return;
        const newReadyState = !myPlayer.isReady;
        myPlayer.isReady = newReadyState;
        // 호스트에게 준비 상태 전송
        const readyMessage = (0, _protocol.MessageFactory).createReadyState(this.peerManager.getPeerId(), this.peerManager.getPeerId(), newReadyState);
        this.peerManager.send(this.roomId, readyMessage);
        this.emit('playerReady', myPlayer.id, newReadyState);
    }
    /**
   * 이름 변경
   * @param newName 새 이름
   */ async changePlayerName(newName) {
        const myPeerId = this.peerManager.getPeerId();
        if (!myPeerId) throw new Error("Peer\uAC00 \uCD08\uAE30\uD654\uB418\uC9C0 \uC54A\uC558\uC2B5\uB2C8\uB2E4.");
        const myPlayer = this.players.get(myPeerId);
        if (!myPlayer) throw new Error("\uD50C\uB808\uC774\uC5B4 \uC815\uBCF4\uB97C \uCC3E\uC744 \uC218 \uC5C6\uC2B5\uB2C8\uB2E4.");
        // 로컬 플레이어 이름 변경
        myPlayer.name = newName;
        // 이름 변경 메시지 전송
        const nameChangeMessage = (0, _protocol.MessageFactory).createNameChange(myPeerId, myPeerId, newName);
        if (this.isHost) // 호스트인 경우 모든 참가자에게 브로드캐스트
        this.peerManager.broadcast(nameChangeMessage);
        else // 참가자인 경우 호스트에게 전송
        this.peerManager.send(this.roomId, nameChangeMessage);
        console.log("[RoomManager] \uC774\uB984 \uBCC0\uACBD:", newName);
    }
    /**
   * 게임 설정 업데이트 (호스트만)
   * @param config 게임 설정
   */ updateGameConfig(config) {
        if (!this.isHost) {
            console.warn("[RoomManager] \uD638\uC2A4\uD2B8\uB9CC \uAC8C\uC784 \uC124\uC815\uC744 \uBCC0\uACBD\uD560 \uC218 \uC788\uC2B5\uB2C8\uB2E4.");
            return;
        }
        this.currentGameConfig = config;
        // 모든 참가자에게 브로드캐스트
        const configMessage = (0, _protocol.MessageFactory).createGameConfig(this.peerManager.getPeerId(), config);
        this.peerManager.broadcast(configMessage);
        this.emit('gameConfigChanged', config);
    }
    /**
   * 참가자 강퇴 (호스트만)
   * @param playerId 강퇴할 참가자 ID
   */ kickPlayer(playerId) {
        if (!this.isHost) {
            console.warn("[RoomManager] \uD638\uC2A4\uD2B8\uB9CC \uCC38\uAC00\uC790\uB97C \uAC15\uD1F4\uD560 \uC218 \uC788\uC2B5\uB2C8\uB2E4.");
            return;
        }
        const kickMessage = {
            type: (0, _protocol.MessageType).KICK_PLAYER,
            timestamp: Date.now(),
            senderId: this.peerManager.getPeerId(),
            payload: {
                playerId
            }
        };
        // 해당 참가자에게 강퇴 메시지 전송
        this.peerManager.send(playerId, kickMessage);
        // 연결 끊기
        this.peerManager.disconnect(playerId);
        this.handlePlayerLeft(playerId);
    }
    /**
   * 룸 나가기
   */ leaveRoom() {
        console.log("[RoomManager] \uB8F8 \uB098\uAC00\uAE30");
        if (this.isHost) // 호스트가 나가면 모든 참가자 연결 끊기
        this.peerManager.disconnectAll();
        else // 참가자가 나가면 호스트 연결만 끊기
        if (this.hostConnection) this.hostConnection.close();
        this.players.clear();
        this.roomId = null;
        this.isHost = false;
        this.currentGameConfig = null;
    }
    /**
   * 6자리 방 코드 생성
   * @returns 6자리 알파벳 대문자 코드
   */ generateRoomCode() {
        const chars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789';
        let code = '';
        for(let i = 0; i < 6; i++)code += chars.charAt(Math.floor(Math.random() * chars.length));
        return code;
    }
    /**
   * 모든 참가자가 준비되었는지 확인
   * @returns 모두 준비 여부
   */ areAllPlayersReady() {
        if (this.players.size <= 1) return false; // 호스트만 있으면 false
        for (const player of this.players.values()){
            if (!player.isReady) return false;
        }
        return true;
    }
    /**
   * 이벤트 핸들러 등록
   * @param event 이벤트 이름
   * @param handler 핸들러 함수
   */ on(event, handler) {
        this.eventHandlers[event] = handler;
    }
    /**
   * 이벤트 발생
   * @param event 이벤트 이름
   * @param args 인자
   */ emit(event, ...args) {
        const handler = this.eventHandlers[event];
        if (handler) handler(...args);
    }
    // Getter 메서드들
    getRoomId() {
        return this.roomId;
    }
    getIsHost() {
        return this.isHost;
    }
    getPlayers() {
        return Array.from(this.players.values());
    }
    getPlayerCount() {
        return this.players.size;
    }
    getCurrentGameConfig() {
        return this.currentGameConfig;
    }
    getMyPlayer() {
        const myId = this.peerManager.getPeerId();
        return myId ? this.players.get(myId) || null : null;
    }
}

},{"./protocol":"j4Qj9","@parcel/transformer-js/src/esmodule-helpers.js":"jnFvT"}],"j4Qj9":[function(require,module,exports,__globalThis) {
/**
 * 멀티플레이어 메시지 프로토콜 정의
 * P2P 통신을 위한 메시지 타입 및 인터페이스
 *
 * 작성일: 2025-11-13
 * 기능: 호스트-참가자 간 실시간 통신 프로토콜
 */ // 메시지 타입 enum
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "MessageType", ()=>MessageType);
// 메시지 생성 헬퍼 함수
parcelHelpers.export(exports, "MessageFactory", ()=>MessageFactory);
var MessageType = /*#__PURE__*/ function(MessageType) {
    // 연결 관련
    MessageType["JOIN_REQUEST"] = "JOIN_REQUEST";
    MessageType["JOIN_ACCEPT"] = "JOIN_ACCEPT";
    MessageType["JOIN_REJECT"] = "JOIN_REJECT";
    MessageType["PLAYER_JOINED"] = "PLAYER_JOINED";
    MessageType["PLAYER_LEFT"] = "PLAYER_LEFT";
    // 참가자 상태 관리
    MessageType["PLAYER_LIST"] = "PLAYER_LIST";
    MessageType["READY_STATE"] = "READY_STATE";
    MessageType["NAME_CHANGE"] = "NAME_CHANGE";
    // 게임 설정
    MessageType["GAME_CONFIG"] = "GAME_CONFIG";
    MessageType["MAP_CHANGE"] = "MAP_CHANGE";
    // 게임 진행
    MessageType["START_GAME"] = "START_GAME";
    MessageType["GAME_STATE"] = "GAME_STATE";
    MessageType["GAME_END"] = "GAME_END";
    MessageType["PAUSE_GAME"] = "PAUSE_GAME";
    MessageType["RESUME_GAME"] = "RESUME_GAME";
    MessageType["FAST_FORWARD"] = "FAST_FORWARD";
    // 호스트 제어
    MessageType["KICK_PLAYER"] = "KICK_PLAYER";
    // 채팅 (선택 기능)
    MessageType["CHAT_MESSAGE"] = "CHAT_MESSAGE";
    // 에러 처리
    MessageType["ERROR"] = "ERROR"; // 에러 메시지
    return MessageType;
}({});
class MessageFactory {
    /**
   * 베이스 메시지 생성
   * @param type 메시지 타입
   * @param senderId 발신자 ID
   * @returns 베이스 메시지 객체
   */ static createBase(type, senderId) {
        return {
            type,
            timestamp: Date.now(),
            senderId
        };
    }
    /**
   * 참가 요청 메시지 생성
   */ static createJoinRequest(senderId, playerName) {
        return {
            ...this.createBase("JOIN_REQUEST", senderId),
            type: "JOIN_REQUEST",
            payload: {
                playerName
            }
        };
    }
    /**
   * 참가 수락 메시지 생성
   */ static createJoinAccept(senderId, roomId, players, gameConfig) {
        return {
            ...this.createBase("JOIN_ACCEPT", senderId),
            type: "JOIN_ACCEPT",
            payload: {
                roomId,
                players,
                gameConfig
            }
        };
    }
    /**
   * 게임 시작 메시지 생성
   */ static createStartGame(senderId, config) {
        return {
            ...this.createBase("START_GAME", senderId),
            type: "START_GAME",
            payload: {
                config,
                startTime: Date.now()
            }
        };
    }
    /**
   * 준비 상태 메시지 생성
   */ static createReadyState(senderId, playerId, isReady) {
        return {
            ...this.createBase("READY_STATE", senderId),
            type: "READY_STATE",
            payload: {
                playerId,
                isReady
            }
        };
    }
    /**
   * 이름 변경 메시지 생성
   */ static createNameChange(senderId, playerId, newName) {
        return {
            ...this.createBase("NAME_CHANGE", senderId),
            type: "NAME_CHANGE",
            payload: {
                playerId,
                newName
            }
        };
    }
    /**
   * 게임 설정 메시지 생성
   */ static createGameConfig(senderId, config) {
        return {
            ...this.createBase("GAME_CONFIG", senderId),
            type: "GAME_CONFIG",
            payload: {
                config
            }
        };
    }
    /**
   * 에러 메시지 생성
   */ static createError(senderId, code, message) {
        return {
            ...this.createBase("ERROR", senderId),
            type: "ERROR",
            payload: {
                code,
                message
            }
        };
    }
}

},{"@parcel/transformer-js/src/esmodule-helpers.js":"jnFvT"}],"31mqk":[function(require,module,exports,__globalThis) {
/**
 * GameSync 클래스
 * 게임 상태 실시간 동기화
 *
 * 작성일: 2025-11-13
 * 기능: 호스트의 게임 상태를 참가자들과 동기화
 */ var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
/**
 * GameSync 클래스
 * Roulette 게임과 멀티플레이어 시스템을 연결
 */ parcelHelpers.export(exports, "GameSync", ()=>GameSync);
var _protocol = require("./protocol");
var _logger = require("../utils/Logger");
class GameSync {
    constructor(peerManager, roomManager){
        this.eventHandlers = {} // 이벤트 핸들러
        ;
        this.currentGameState = null // 현재 게임 상태
        ;
        this.syncInterval = null // 상태 동기화 인터벌
        ;
        // 2025-11-14: 성능 최적화 - 동기화 주기를 100ms에서 200ms로 변경
        // 기존: 100ms (초당 10회) → 참가자 10명 시 초당 10개 메시지 전송
        // 개선: 200ms (초당 5회) → 네트워크 트래픽 50% 감소
        // 물리 엔진이 10ms 단위로 동작하므로 200ms도 충분히 빠름
        this.syncRate = 200 // 동기화 주기 (ms)
        ;
        this.peerManager = peerManager;
        this.roomManager = roomManager;
        this.setupPeerManagerEvents();
    }
    /**
   * PeerManager 이벤트 설정
   */ setupPeerManagerEvents() {
        this.peerManager.on('data', (message)=>{
            this.handleMessage(message);
        });
    }
    /**
   * 메시지 처리
   * @param message 수신한 메시지
   */ handleMessage(message) {
        switch(message.type){
            case (0, _protocol.MessageType).START_GAME:
                this.handleStartGame(message);
                break;
            case (0, _protocol.MessageType).GAME_STATE:
                this.handleGameState(message);
                break;
            case (0, _protocol.MessageType).GAME_END:
                this.handleGameEnd(message);
                break;
            case (0, _protocol.MessageType).PAUSE_GAME:
                this.emit('gamePause');
                break;
            case (0, _protocol.MessageType).RESUME_GAME:
                this.emit('gameResume');
                break;
            case (0, _protocol.MessageType).FAST_FORWARD:
                this.handleFastForward(message);
                break;
            default:
                break;
        }
    }
    /**
   * 게임 시작 메시지 처리 (참가자만)
   * @param message START_GAME 메시지
   */ handleStartGame(message) {
        if (this.roomManager.getIsHost()) return;
        const { config, startTime } = message.payload;
        console.log("[GameSync] \uAC8C\uC784 \uC2DC\uC791 \uC2E0\uD638 \uC218\uC2E0");
        (0, _logger.Logger).info('GameSync', "[\uCC38\uAC00\uC790] START_GAME \uBA54\uC2DC\uC9C0 \uC218\uC2E0", {
            randomSeed: config.randomSeed,
            marbles: config.marbles,
            mapIndex: config.mapIndex,
            winnerRank: config.winnerRank,
            startTime,
            delay: Math.max(0, startTime - Date.now())
        });
        // 시작 시간 동기화를 위한 약간의 지연
        const now = Date.now();
        const delay = Math.max(0, startTime - now);
        setTimeout(()=>{
            this.emit('gameStart', config);
        }, delay);
    }
    /**
   * 게임 상태 업데이트 처리 (참가자만)
   * @param message GAME_STATE 메시지
   */ handleGameState(message) {
        if (this.roomManager.getIsHost()) return;
        const { state } = message.payload;
        this.currentGameState = state;
        this.emit('stateUpdate', state);
    }
    /**
   * 게임 종료 메시지 처리
   * @param message GAME_END 메시지
   */ handleGameEnd(message) {
        const { winners, results } = message.payload;
        console.log("[GameSync] \uAC8C\uC784 \uC885\uB8CC:", winners);
        this.stopSync();
        this.emit('gameEnd', winners, results);
    }
    /**
   * 게임 시작 (호스트만)
   * @param marbles 구슬 목록 (parseName 적용 전 문자열 배열)
   * @param mapIndex 맵 인덱스
   * @param winnerRank 당첨 순위
   */ startGame(marbles, mapIndex, winnerRank) {
        if (!this.roomManager.getIsHost()) {
            console.warn("[GameSync] \uD638\uC2A4\uD2B8\uB9CC \uAC8C\uC784\uC744 \uC2DC\uC791\uD560 \uC218 \uC788\uC2B5\uB2C8\uB2E4.");
            return;
        }
        // 구슬 목록을 MarbleConfig로 변환
        const marbleConfigs = marbles.map((marbleName)=>{
            return this.parseMarbleName(marbleName);
        });
        // 랜덤 시드 생성 (모든 참가자가 같은 결과를 얻도록)
        const randomSeed = Date.now();
        const gameConfig = {
            marbles: marbleConfigs,
            mapIndex,
            winnerRank,
            randomSeed
        };
        (0, _logger.Logger).info('GameSync', "[\uD638\uC2A4\uD2B8] \uAC8C\uC784 \uC2DC\uC791", {
            randomSeed,
            marbles: marbles,
            marbleConfigs,
            mapIndex,
            winnerRank
        });
        // 게임 설정 업데이트
        this.roomManager.updateGameConfig(gameConfig);
        // 게임 시작 메시지 브로드캐스트
        const startMessage = (0, _protocol.MessageFactory).createStartGame(this.peerManager.getPeerId(), gameConfig);
        this.peerManager.broadcast(startMessage);
        (0, _logger.Logger).info('GameSync', "[\uD638\uC2A4\uD2B8] START_GAME \uBA54\uC2DC\uC9C0 \uBE0C\uB85C\uB4DC\uCE90\uC2A4\uD2B8 \uC644\uB8CC", {
            randomSeed
        });
        // 약간의 지연 후 호스트도 게임 시작
        setTimeout(()=>{
            this.emit('gameStart', gameConfig);
        }, 100);
        // 상태 동기화 시작
        this.startSync();
    }
    /**
   * 구슬 이름 파싱 (가중치/개수 포함)
   * @param marbleName 구슬 이름 (예: "이름/2", "이름*3")
   * @returns MarbleConfig 객체
   */ parseMarbleName(marbleName) {
        let name = marbleName;
        let weight = 1;
        let count = 1;
        // 가중치 파싱 (/숫자)
        const weightMatch = marbleName.match(/\/(\d+)/);
        if (weightMatch) {
            weight = parseFloat(weightMatch[1]);
            name = name.replace(/\/\d+/, '');
        }
        // 개수 파싱 (*숫자)
        const countMatch = marbleName.match(/\*(\d+)/);
        if (countMatch) {
            count = parseInt(countMatch[1]);
            name = name.replace(/\*\d+/, '');
        }
        return {
            name: name.trim(),
            weight,
            count
        };
    }
    /**
   * 게임 상태 동기화 시작 (호스트만)
   */ startSync() {
        if (!this.roomManager.getIsHost()) return;
        // 기존 인터벌 정리
        this.stopSync();
        console.log("[GameSync] \uC0C1\uD0DC \uB3D9\uAE30\uD654 \uC2DC\uC791");
        // 주기적으로 게임 상태 브로드캐스트
        this.syncInterval = window.setInterval(()=>{
            if (this.currentGameState) {
                const stateMessage = {
                    type: (0, _protocol.MessageType).GAME_STATE,
                    timestamp: Date.now(),
                    senderId: this.peerManager.getPeerId(),
                    payload: {
                        state: this.currentGameState
                    }
                };
                this.peerManager.broadcast(stateMessage);
            }
        }, this.syncRate);
    }
    /**
   * 게임 상태 동기화 중지
   */ stopSync() {
        if (this.syncInterval !== null) {
            clearInterval(this.syncInterval);
            this.syncInterval = null;
            console.log("[GameSync] \uC0C1\uD0DC \uB3D9\uAE30\uD654 \uC911\uC9C0");
        }
    }
    /**
   * 게임 상태 업데이트 (호스트만)
   * @param state 게임 상태
   */ updateGameState(state) {
        if (!this.roomManager.getIsHost()) return;
        this.currentGameState = state;
    }
    /**
   * 게임 종료 (호스트만)
   * @param winners 당첨자 목록
   * @param results 전체 순위
   */ endGame(winners, results) {
        if (!this.roomManager.getIsHost()) {
            console.warn("[GameSync] \uD638\uC2A4\uD2B8\uB9CC \uAC8C\uC784\uC744 \uC885\uB8CC\uD560 \uC218 \uC788\uC2B5\uB2C8\uB2E4.");
            return;
        }
        console.log("[GameSync] \uAC8C\uC784 \uC885\uB8CC \uBE0C\uB85C\uB4DC\uCE90\uC2A4\uD2B8");
        const endMessage = {
            type: (0, _protocol.MessageType).GAME_END,
            timestamp: Date.now(),
            senderId: this.peerManager.getPeerId(),
            payload: {
                winners,
                results
            }
        };
        this.peerManager.broadcast(endMessage);
        this.stopSync();
        this.emit('gameEnd', winners, results);
    }
    /**
   * 게임 일시정지 (호스트만)
   */ pauseGame() {
        if (!this.roomManager.getIsHost()) {
            console.warn("[GameSync] \uD638\uC2A4\uD2B8\uB9CC \uAC8C\uC784\uC744 \uC77C\uC2DC\uC815\uC9C0\uD560 \uC218 \uC788\uC2B5\uB2C8\uB2E4.");
            return;
        }
        const pauseMessage = {
            type: (0, _protocol.MessageType).PAUSE_GAME,
            timestamp: Date.now(),
            senderId: this.peerManager.getPeerId(),
            payload: {}
        };
        this.peerManager.broadcast(pauseMessage);
        this.emit('gamePause');
    }
    /**
   * 게임 재개 (호스트만)
   */ resumeGame() {
        if (!this.roomManager.getIsHost()) {
            console.warn("[GameSync] \uD638\uC2A4\uD2B8\uB9CC \uAC8C\uC784\uC744 \uC7AC\uAC1C\uD560 \uC218 \uC788\uC2B5\uB2C8\uB2E4.");
            return;
        }
        const resumeMessage = {
            type: (0, _protocol.MessageType).RESUME_GAME,
            timestamp: Date.now(),
            senderId: this.peerManager.getPeerId(),
            payload: {}
        };
        this.peerManager.broadcast(resumeMessage);
        this.emit('gameResume');
    }
    /**
   * 빨리감기 상태 변경 처리
   * @param message FAST_FORWARD 메시지
   */ handleFastForward(message) {
        if (this.roomManager.getIsHost()) return; // 호스트는 자기가 제어
        const { isEnabled } = message.payload;
        console.log("[GameSync] \uBE68\uB9AC\uAC10\uAE30 \uC0C1\uD0DC:", isEnabled);
        this.emit('fastForward', isEnabled);
    }
    /**
   * 빨리감기 (호스트만)
   * @param isEnabled 빨리감기 활성화 여부
   */ setFastForward(isEnabled) {
        if (!this.roomManager.getIsHost()) {
            console.warn("[GameSync] \uD638\uC2A4\uD2B8\uB9CC \uBE68\uB9AC\uAC10\uAE30\uB97C \uC81C\uC5B4\uD560 \uC218 \uC788\uC2B5\uB2C8\uB2E4.");
            return;
        }
        const ffMessage = {
            type: (0, _protocol.MessageType).FAST_FORWARD,
            timestamp: Date.now(),
            senderId: this.peerManager.getPeerId(),
            payload: {
                isEnabled
            }
        };
        this.peerManager.broadcast(ffMessage);
    }
    /**
   * 동기화 주기 설정
   * @param rate 동기화 주기 (ms)
   */ setSyncRate(rate) {
        this.syncRate = rate;
        if (this.syncInterval !== null) {
            // 실행 중이면 재시작
            this.stopSync();
            this.startSync();
        }
    }
    /**
   * 정리
   */ destroy() {
        this.stopSync();
        this.eventHandlers = {};
    }
    /**
   * 이벤트 핸들러 등록
   * @param event 이벤트 이름
   * @param handler 핸들러 함수
   */ on(event, handler) {
        this.eventHandlers[event] = handler;
    }
    /**
   * 이벤트 발생
   * @param event 이벤트 이름
   * @param args 인자
   */ emit(event, ...args) {
        const handler = this.eventHandlers[event];
        if (handler) handler(...args);
    }
    // Getter 메서드들
    getCurrentGameState() {
        return this.currentGameState;
    }
    getIsHost() {
        return this.roomManager.getIsHost();
    }
}

},{"./protocol":"j4Qj9","../utils/Logger":"7YW8a","@parcel/transformer-js/src/esmodule-helpers.js":"jnFvT"}]},["9ZvZc","gH3Lb"], "gH3Lb", "parcelRequire5cc2", {}, "./", "/")

//# sourceMappingURL=roulette.34df32e0.js.map
