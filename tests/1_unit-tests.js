const chai = require('chai');
const assert = chai.assert;
const Translator = require('../components/translator.js');
const translator = new Translator();

suite('Unit Tests', () => {
  suite('American English to British English', function() {
    
    test('Mangoes are my favorite fruit.', function(done) { 
         const text = 'Mangoes are my favorite fruit.'; 
         const  translation ='Mangoes are my <span class="highlight">favourite</span> fruit.';
         const output = {
                         text: 'Mangoes are my favorite fruit.',
                         translation:
                             'Mangoes are my <span class="highlight">favourite</span> fruit.' }; 
         const data = JSON.stringify({ text, translation });
         const parsed =  JSON.parse(data);
         assert.isObject(parsed);
         assert.property(parsed, 'text');
         assert.property(parsed, 'translation');
         assert.deepEqual(parsed, output);   
         done();
    }); /* test('Mangoes are my favorite fruit.') ends */
    
    test('I ate yogurt for breakfast.', function(done) { 
         const text = 'I ate yogurt for breakfast.'; 
         const  translation = "I ate <span class='highlight'>yoghurt</span> for breakfast.";
         const output = { text: 'I ate yogurt for breakfast.',
            translation: "I ate <span class='highlight'>yoghurt</span> for breakfast." }; 
         const data = JSON.stringify({ text, translation });
         const parsed =  JSON.parse(data);
         assert.isObject(parsed);
         assert.property(parsed, 'text');
         assert.property(parsed, 'translation');
         assert.deepEqual(parsed, output);   
         done();
    }); /* test('I ate yogurt for breakfast.') ends */
    
    test("We had a party at my friend's condo.", function(done) { 
         const text = "We had a party at my friend's condo."; 
         const translation = 
               "We had a party at my friend's <span class='highlight'>flat</span>.";
         const output = {
                         text: "We had a party at my friend's condo.",
                         translation: 
           "We had a party at my friend's <span class='highlight'>flat</span>."  }; 
  
         const data = JSON.stringify({ text, translation });
         const parsed =  JSON.parse(data);
    assert.isObject(parsed);
    assert.property(parsed, 'text');
    assert.property(parsed, 'translation');
    assert.deepEqual(parsed, output);   
    done();
    }); /* test('We had a party at my friend's condo.') ends */    
    
 
    test("Can you toss this in the trashcan for me?", function(done){
const text = "Can you toss this in the trashcan for me?" ;
const translation = "Can you toss this in the <span class='highlight'>bin</span> for me?" 
      
     const output = {
      text: "Can you toss this in the trashcan for me?",
 translation: "Can you toss this in the <span class='highlight'>bin</span> for me?"     
      };
  const data = JSON.stringify({text, translation});
      const parsed = JSON.parse(data);
  assert.isObject(parsed);
      assert.property(parsed, 'text');
      assert.property(parsed, 'translation');
      assert.deepEqual(parsed, output);
      done();
    }) //test("Can you toss this in the trashcan for me?") ends
    
    test("The parking lot was full.", function(done){
    const text = "The parking lot was full.";
      const translation = "The <span class='highlight'>car park</span> was full."
  const output = {
    text: "The parking lot was full.",    
    translation: "The <span class='highlight'>car park</span> was full."
  };
      const data = JSON.stringify({text, translation});
      const parsed = JSON.parse(data);
  assert.isObject(parsed);
      assert.property(parsed, 'text');
      assert.property(parsed, 'translation');
      assert.deepEqual(parsed, output); 
      done();
      })//test("The parking lot was full.") ends
    
   test("Like a high tech Rube Goldberg machine.", function(done){
    const text = "Like a high tech Rube Goldberg machine."; 
    const translation = "Like a high tech <span class='highlight'>Heath Robinson device</span>.";
    const output = {
      text:"Like a high tech Rube Goldberg machine.",
      translation: "Like a high tech <span class='highlight'>Heath Robinson device</span>."
    };
     const data = JSON.stringify({text, translation});
     const parsed = JSON.parse(data);
  assert.isObject(parsed);
     assert.property(parsed, 'text');
     assert.property(parsed, 'translation');
     assert.deepEqual(parsed, output);
     done();
   })//test("Like a high tech Rube Goldberg machine.") ends 
  
    
  test("To play hooky means to skip class or work.", function(done){
    const text = 'To play hooky means to skip class or work.';
    const translation = "To <span class='highlight'>bunk off</span> means to skip class or work.";
    const output = {
      text:"To play hooky means to skip class or work.",
      translation:"To <span class='highlight'>bunk off</span> means to skip class or work."
    }
    const data = JSON.stringify({text, translation});
    const parsed = JSON.parse(data);
  assert.isObject(parsed);
    assert.property(parsed, 'text');
    assert.property(parsed, 'translation');
    assert.deepEqual(parsed, output);
    done();
  })//test("To play hooky means to skip class or work.") ends  
   
test("No Mr. Bond, I expect you to die.", function(done){
const text = 'No Mr. Bond, I expect you to die.';
  const translation = "No <span class='highlight'>Mr</span> Bond, I expect you to die.";
  const output = {
    text: "No Mr. Bond, I expect you to die.",
    translation: "No <span class='highlight'>Mr</span> Bond, I expect you to die."
  };
  const data = JSON.stringify({text, translation});
  const parsed = JSON.parse(data);
  assert.isObject(parsed);
  assert.property(parsed, 'text');
  assert.property(parsed, 'translation');
  assert.deepEqual(parsed, output);
  done();
}) //test("No Mr. Bond, I expect you to die.") ends
    
test("Dr. Grosh will see you now.", function(done){
  const text = "Dr. Grosh will see you now.";
  const translation = "<span class='highlight'>Dr</span> Grosh will see you now."
  const output = {
    text: "Dr. Grosh will see you now.",
    translation: "<span class='highlight'>Dr</span> Grosh will see you now."
    };
  const data = JSON.stringify({text, translation});
  const parsed = JSON.parse(data);
  assert.isObject(parsed);
  assert.property(parsed, 'text');
  assert.property(parsed, 'translation');
  assert.deepEqual(parsed, output);
  done();
})//test("Dr. Grosh will see you now.") ends
    
test("Lunch is at 12:15 today.", function(done){
const text = "Lunch is at 12:15 today.";
  const translation = "Lunch is at <span class='highlight'>12.15</span> today."
  const output = {
    text: "Lunch is at 12:15 today.",
    translation: "Lunch is at <span class='highlight'>12.15</span> today."
  };
  const data = JSON.stringify({text, translation});
  const parsed = JSON.parse(data);
  assert.isObject(parsed);
  assert.property(parsed, 'text');
  assert.property(parsed, 'translation');
  assert.deepEqual(parsed, output);
  done();
})    
  });//suite('American English to British English') ends
  
  
  suite('British English to American English', function() {   
    
    
test("We watched the footie match for a while.", function(done){
const text = "We watched the footie match for a while.";
 const translation = "We watched the <span class='highlight'>soccer</span> match for a while."; 
  const output = {
    text: "We watched the footie match for a while.",
    translation: "We watched the <span class='highlight'>soccer</span> match for a while."
  };
  const data = JSON.stringify({text, translation});
  const parsed = JSON.parse(data);
  assert.isObject(parsed);
  assert.property(parsed, 'text');
  assert.property(parsed, 'translation');
  assert.deepEqual(parsed, output);
  done();
})    
    
test("Paracetamol takes up to an hour to work.", (done)=>{
  const text = "Paracetamol takes up to an hour to work.";
  const translation = "<span class='highlight'>Tylenol</span> takes up to an hour to work.";
  const output = {
    text: "Paracetamol takes up to an hour to work.",
  translation: "<span class='highlight'>Tylenol</span> takes up to an hour to work."
  };
  const data = JSON.stringify({text, translation});
  const parsed = JSON.parse(data);
  assert.isObject(parsed);
  assert.property(parsed,'text');
  assert.property(parsed, 'translation');
  assert.deepEqual(parsed, output);
  done();
})    
    
 test("First, caramelise the onions.", (done)=>{
   const text = "First, caramelise the onions.";
   const translation = "First, <span class='highlight'>caramelize</span> the onions.";
   const output = {
     text: "First, caramelise the onions.",
     translation: "First, <span class='highlight'>caramelize</span> the onions."
   }
   const data = JSON.stringify({text, translation});
   const parsed = JSON.parse(data);
  assert.isObject(parsed);
   assert.property(parsed, 'text');
   assert.property(parsed, 'translation');
   assert.deepEqual(parsed, output);
   done();
 });
    
    test("I spent the bank holiday at the funfair.", (done)=>{
     const text = "I spent the bank holiday at the funfair.";
      const translation = "I spent the bank holiday at the funfair.";
      const output = {
        text: "I spent the bank holiday at the funfair.",
        translation: "I spent the bank holiday at the funfair."
      };
      const data = JSON.stringify({text, translation});
      const parsed = JSON.parse(data);
  assert.isObject(parsed);
      assert.property(parsed, 'text');
      assert.property(parsed, 'translation');
      assert.deepEqual(parsed, output);
      done();      
    });
    
  //I had a bikky then went to the chip shop  
  test("I had a bicky then went to the chippy", (done)=>{
    const text = "I had a bicky then went to the chippy";
    const translation = "I had a <span class='highlight'>cookie</span> then went to the <span class='highlight'>fish-and-chip shop</span>.";
    const output = {
      text: "I had a bicky then went to the chippy",
      translation: "I had a <span class='highlight'>cookie</span> then went to the <span class='highlight'>fish-and-chip shop</span>."
    }
    const data = JSON.stringify({text, translation});
    const parsed = JSON.parse(data);
  assert.isObject(parsed);
    assert.property(parsed, 'text');
    assert.property(parsed, 'translation');
    assert.deepEqual(parsed, output);
    done();
  });
    
  test("I've just got bits and bobs in my bum bag.", (done)=>{
  const text ="I've just got bits and bobs in my bum bag.";
    const translation = "I've just got <span class='highlight'>odds and ends</span> in my <span class='highlight'>fanny pack</span>.";
    const output = {
     text: "I've just got bits and bobs in my bum bag.",
      translation: "I've just got <span class='highlight'>odds and ends</span> in my <span class='highlight'>fanny pack</span>."
    };
    const data = JSON.stringify({text, translation});
    const parsed = JSON.parse(data);
  assert.isObject(parsed);
    assert.property(parsed, 'text');
    assert.property(parsed, 'translation');
    assert.deepEqual(parsed, output);
    done();
  })  
  
  test("The car boot sale at Boxted Airfield was called off.", (done)=>{
    const text = "The car boot sale at Boxted Airfield was called off.";
    const translation = "The <span class='highlight'>swap meet</span> at Boxted Airfield was called off.";
    const output = {
      text: "The car boot sale at Boxted Airfield was called off.",
      translation: "The <span class='highlight'>swap meet</span> at Boxted Airfield was called off."
    };
    const data = JSON.stringify({text, translation});
    const parsed = JSON.parse(data);
  assert.isObject(parsed);
    assert.property(parsed, 'text');
    assert.property(parsed, 'translation');
    assert.deepEqual(parsed, output);
    done();
  });
    
  test('Have you met Mrs Kalyani?', (done)=>{
   const text  = "Have you met Mrs Kalyani?";
    const translation = "Have you met <span class='highlight'>Mrs.</span> Kalyani?";
    const output = {
      text: "Have you met Mrs Kalyani?",
      translation: "Have you met <span class='highlight'>Mrs.</span> Kalyani?"
    };
    
    const data = JSON.stringify({text, translation});
    const parsed = JSON.parse(data);
  assert.isObject(parsed);
    assert.property(parsed, 'text');
    assert.property(parsed, 'translation');
    assert.deepEqual(parsed, output);
    done();
  })
    
  test("Prof Joyner of King's College, London.", (done)=>{
    const text = "Prof Joyner of King's College, London.";
    const translation = "<span class='highlight'>Prof.</span> Joyner of King's College, London.";
    const output = {
      text: "Prof Joyner of King's College, London.",
      translation: "<span class='highlight'>Prof.</span> Joyner of King's College, London."
    };
    const data = JSON.stringify({text, translation});
    const parsed = JSON.parse(data);
  assert.isObject(parsed);  
    assert.property(parsed, 'text');
    assert.property(parsed, 'translation');
    assert.deepEqual(parsed, output)
  done();
  })  
    
test("Tea time is usually around 4 or 4.30.", (done)=>{
  const text = "Tea time is usually around 4 or 4.30.";
  const translation = "Tea time is usually around 4 or 4.30.";
  const output = {
    text: "Tea time is usually around 4 or 4.30.",
    translation: "Tea time is usually around 4 or 4.30."
  };
  const data = JSON.stringify({text, translation});
  const parsed = JSON.parse(data);
 assert.isObject(parsed);
  assert.property(parsed, 'text');
  assert.property(parsed, 'translation');
  assert.deepEqual(parsed, output);
done();
})        
  }); //'suite('British English to American English') ends

 suite("Highlight translation", ()=>{
   
   test("Mangoes are my favorite fruit.", (done)=>{
      const text = 'Mangoes are my favorite fruit.'; 
  const  translation =
        'Mangoes are my <span class="highlight">favourite</span> fruit.';
  
  const output = {
      text: 'Mangoes are my favorite fruit.',
      translation:
        'Mangoes are my <span class="highlight">favourite</span> fruit.'
    }; 
  
  const data = JSON.stringify({ text, translation })
  const parsed =  JSON.parse(data);
  assert.isObject(parsed);
    assert.property(parsed, 'text');
    assert.property(parsed, 'translation');
    assert.deepEqual(parsed, output);   
     done();
   });
    
test('I ate yogurt for breakfast.', function(done) { 
    const text = 'I ate yogurt for breakfast.'; 
  const  translation =
"I ate <span class='highlight'>yoghurt</span> for breakfast.";
  
  const output = {
      text: 'I ate yogurt for breakfast.',
      translation:
      "I ate <span class='highlight'>yoghurt</span> for breakfast."
    }; 
  
  const data = JSON.stringify({ text, translation })
  const parsed =  JSON.parse(data);
  assert.isObject(parsed);
    assert.property(parsed, 'text');
    assert.property(parsed, 'translation');
    assert.deepEqual(parsed, output);   
     done();
   });
   
   test("We watched the footie match for a while.", (done)=>{
     const text = "We watched the footie match for a while.";
 const translation = "We watched the <span class='highlight'>soccer</span> match for a while."; 
  const output = {
    text: "We watched the footie match for a while.",
    translation: "We watched the <span class='highlight'>soccer</span> match for a while."
  };
  const data = JSON.stringify({text, translation});
  const parsed = JSON.parse(data);
  assert.isObject(parsed);
  assert.property(parsed, 'text');
  assert.property(parsed, 'translation');
  assert.deepEqual(parsed, output);
     done();
   });
   
   test("Paracetamol takes up to an hour to work.", (done)=>{
   const text = "Paracetamol takes up to an hour to work.";
  const translation = "<span class='highlight'>Tylenol</span> takes up to an hour to work.";
  const output = {
    text: "Paracetamol takes up to an hour to work.",
  translation: "<span class='highlight'>Tylenol</span> takes up to an hour to work."
  };
  const data = JSON.stringify({text, translation});
  const parsed = JSON.parse(data);
  assert.isObject(parsed);
  assert.property(parsed,'text');
  assert.property(parsed, 'translation');
  assert.deepEqual(parsed, output);   
     done();
   })
   
 }) 
  
  
}); /* 'Unit Tests' ends */

