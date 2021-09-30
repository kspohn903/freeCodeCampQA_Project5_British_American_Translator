const chai = require('chai');
const chaiHttp = require('chai-http');
const assert = chai.assert;
const server = require('../server.js');

chai.use(chaiHttp);

let Translator = require('../components/translator.js');
suite('Functional Tests', () => {
suite("Routing Tests", ()=>{
  suite("POST/api/translate=>with text and locale fields", ()=>{
   test("Translation with text and locale fields", (done)=>{
     chai.request(server).post("/api/translate")
         .send({text: 'Mangoes are my favorite fruit.', locale: "american-to-british"})
         .end((err, res)=>{
               assert.equal(res.status, 200); 
               //assert.property(res.body, 'text');
               //assert.property(res.body, 'locale');
               //assert.deepEqual(res.body.locale, 'american-to-british')
          }); 
     done();       
   }); 
});
  /* Translation with text and invalid locale field: POST request to /api/translate */
  suite("POST/api/translate=>with text and invalid locale field", ()=>{
    test("Translation with text and invalid locale field", (done)=>{
     chai.request(server).post("/api/translate")
         .send({text: 'Mangoes are my favorite fruit.', locale: "turkish-to-british"})
         .end((err, res)=>{
               assert.equal(res.status, 200); 
               assert.isObject(res.body);
               assert.property(res.body, 'error');
               assert.equal(res.body.error, 'Invalid value for locale field')
         }); 
     done();       
   }); 
});
/* Translation with missing text field: POST request to /api/translate */
 suite("POST/api/translate=>with missing text field", ()=>{
 test('Translation with missing text field', (done)=>{
   chai.request(server).post('/api/translate')
       .send({text: '', locale: 'american-to-british'})
       .end((err, res)=>{
            assert.equal(res.status, 200)
            assert.isObject(res.body);
            assert.property(res.body, 'error');
            assert.equal(res.body.error, 'No text to translate' );
            done();
       });
    });  
 }); 
/* Translation with missing locale field: POST request to /api/translate */
suite("POST/api/translate=>with missing locale field", ()=>{
  test('Translation with missing locale field',(done)=>{
    chai.request(server).post('/api/translate')
        .send({text:' Mangoes are my favorite fruit.' , locale: ''})
        .end((err, res)=>{
              assert.equal(res.status,200);
              assert.isObject(res.body);
              assert.property(res.body, 'error');
              assert.equal(res.body.error, 'Invalid value for locale field')
        });
    done();
  });
});
  /* Translation with empty text: POST request to /api/translate */
  suite("POST/api/translate=>with empty text", ()=>{
    test("Translation with empty text", (done)=>{
     chai.request(server) 
    .post("/api/translate")
      .send({text:'', locale: 'american-to-british'})
      .end((err, res)=>{
       assert.equal(res.status, 200);
       assert.isObject(res.body);
       assert.property(res.body, 'error');
       assert.equal(res.body.error, 'No text to translate')
     })
      done();
    })
  });
 /* Translation with text that needs no translation" */
 suite("POST/api/translate=>with text that needs no translation", ()=>{
   test("Translation with text that needs no translation", (done)=>{
     chai.request(server).post("/api/translate")
         .send({ text: 'How does evrything look',
                 error: 'Everything looks good to me!',
                 locale: 'british-to-american',
                 translation: 'Everything looks good to me!'
        }).end(function(err, res){
          assert.isObject(res.body);
          assert.property(res.body, 'text');
          assert.property(res.body, 'translation')
          assert.equal(res.body.translation,'Everything looks good to me!');
          done();
     });
     /* end of test('Translation with text...') */ });
    /* end of suite ('POST/api/translate => [...]'') */ });
   }) /*suite('Routing Tests' ) ends */
}); /* suite('Functional Tests') ends */
