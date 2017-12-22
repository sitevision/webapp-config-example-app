(function() {
   'use strict';

   var
      router  = require('router'),
      log     = require('LogUtil'),
      appData = require('appData');

   router.get('/', function(req, res) {
      var message = 'Hello, world!',
         data = {
            image: appData.get('image', 'URI', 'displayName', 'creationDate', 'createdBy'),
            file: appData.get('file', 'URI', 'displayName', 'description', 'identifier'),
            page: appData.get('page', 'URL', 'displayName', 'published', 'publishDate'),
            text: appData.get('text'),
            email: appData.get('email'),
            number: appData.get('number'),
            textarea: appData.get('textarea'),
            metadata: appData.get('metadata'),
            template: appData.get('template'),
            checkbox: appData.get('checkbox'),
            checkboxBoolean: appData.get('checkboxBoolean'),
            singleSelection: appData.get('single'),
            multipleSelection: appData.get('multiple')
         };

      res.render('/', data);
   });
}());