//Tell to webpack to include css (less)
require('less/common.less');

//Fetch polifyl for old browsers
require('fetch-polyfill');

//Tell to webpack include images to build
function requireAll(r) { r.keys().forEach(r); }
requireAll(require.context('img/', true, /\.(ico|png|jpg)$/i));
//Include layout elements (footer, header, etc.)
require('layout/layout-manager');

//Include router, handle history and manage pages views
require('base/base-router');