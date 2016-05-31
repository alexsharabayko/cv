require('less/common.less');

function requireAll(r) { r.keys().forEach(r); }
requireAll(require.context('img/', true, /\.(ico|png|jpg)$/i));

require('base/base-router');

console.log('Init');