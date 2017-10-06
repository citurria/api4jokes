var hooks = require('hooks');
var before = hooks.before;
var after = hooks.after;
var assert = require('chai').assert;


// Testing first API:
hooks.after('Jokes > /jokes > Return a random joke, hopefully a good one! > 200', (transaction, done) => {

    // Before anything let's make sure the body is not empty
    assert.isAbove(transaction.real.body.length, 1);

    var req = JSON.parse(transaction.real.body);
    var realJoke = JSON.stringify(req);

    hooks.log("#####Test Case 1 (/jokes): The response is [" + realJoke + "]");

    realJoke = req.joke;
    hooks.log("#####Test Case 1 (/jokes): The real Joke is [" + realJoke + "]");

    // Joke will be random, let's just validate that the joke is not empty...
    assert.isAbove(realJoke.length, 1);
    
    done();
});


// Testing second API:
hooks.after('Jokes > /jokes/{id}/translate > Return selected joke, in a specific language! > 200', (transaction, done) => {

    // Before anything let's make sure the body is not empty
    assert.isAbove(transaction.real.body.length, 1);

    var req = JSON.parse(transaction.real.body);
    var realJoke = JSON.stringify(req);

    hooks.log("#####Test Case 2 (/jokes/{id}/translate): The response is [" + realJoke + "]");

    realJoke = req.joke;
    hooks.log("#####Test Case 2 (/jokes/{id}/translate): The real Joke is [" + realJoke + "]");

    // Joke is expected to be:
    var expectedJoke = "¿Cuál es la ventaja de vivir en Suiza? Bueno, la bandera es una gran ventaja."; 

    assert.equal(realJoke, expectedJoke);

    done();
});


// Testing third API:
hooks.after('Jokes > /jokes/{id} > Share a joke in multiple languages with a friend! > 200', (transaction, done) => {

    // Before anything let's make sure the body is not empty
    assert.isAbove(transaction.real.body.length, 1);

    var req = JSON.parse(transaction.real.body);
    var realJoke = JSON.stringify(req);

    hooks.log("#####Test Case 3 (/jokes/{id}): The response is [" + realJoke + "]");

    realJoke = req.joke;
    hooks.log("#####Test Case 3 (/jokes/{id}): The real Joke is [" + realJoke + "]");

    // Joke is expected to be:
    var expectedJoke = "Qual è il vantaggio di vivere in Svizzera? Beh, la bandiera è un grande vantaggio."; 

    assert.equal(realJoke, expectedJoke);

    done();
});

// After each test clear contents of the database (we want isolated tests)
hooks.afterEach((transaction, done) => {

    // As as example, for all the apis, let's ensure all the jokes are not empty:

    var req = JSON.parse(transaction.real.body);
    var realJoke = req.joke;
    
    assert.isAbove(transaction.real.body.length, 1);

    done();
});

