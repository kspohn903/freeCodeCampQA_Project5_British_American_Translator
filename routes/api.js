'use strict';
const Translator = require('../components/translator.js');

module.exports = function (app) {
  const translator = new Translator();
  app.route('/api/translate').post((req, res) => {
      const text = req.body.text;
      var newtext = '';
      if(req.body.locale=='american-to-british'){
         newtext = translator.americanToBritish(req.body.text);
      }
      if(req.body.locale=='british-to-american'){
         newtext = translator.britishToAmerican(req.body.text);
      }
     //delete req.body.locale;
     // delete req.body.text;
     //delete output.text;
     //req.body.locale = 'french-to-american'; 
     var output = { text: text, translation: newtext };
     if(!(req.body.locale == 'american-to-british' || 
          req.body.locale == 'british-to-american') ){
        return res.json({ error: 'Invalid value for locale field' }); 
      }
      if(req.body.text == ''){
        return res.json({ error: 'No text to translate' }) 
      }  
      if(req.body.text == undefined) {
        return res.json({ error: 'Required field(s) missing' })
      }
      if(req.body.locale == undefined){
        res.json({ error: 'Required field(s) missing' })
      }
     return res.json(output);  
  /* end of post request. */ }); 
/*end of export callback.*/};
