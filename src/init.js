require('less/common.less');

function requireAll(r) { r.keys().forEach(r); }
requireAll(require.context('img/', true, /\.(ico|png|jpg)$/i));

console.log('Init');