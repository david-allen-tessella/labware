require.config({
  shim: {
  },

  baseUrl: '.',
  paths: {
    d3: 'components/d3',
    domReady: 'components/requirejs-domready/domReady',
    mapper: 'scripts/mapper',
    views: 'scripts/views',
    json_data: 'scripts/json_data',
    presenters: 'scripts/presenters',
    images: 'images',
    config: 'test_config',
    text: 'components/requirejs-text/text',
    spec: 'spec',
    json: 'json'
  }

});

require(['domReady!', 'spec/example'], function() {
  runJasmineTests();
  //window.setTimeout(runJasmineTests, 1000);
});
