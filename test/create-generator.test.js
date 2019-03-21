const createGenerator = require('../create-generator.js')

const expect = require('chai').expect;

describe("Memorize Handler", ()=>{
  
  it('should display every other word on level 1', ()=>{
    const text = "This is a standard sentence. This follows.";

    const gen = createGenerator(text, "1")
    expect(gen.next().value).to.equal("This -- a -------- sentence. ---- follows.")
    expect(gen.next().value).to.equal("This is a -------- sentence. ---- follows.")
    expect(gen.next().value).to.equal("This is a standard sentence. ---- follows.")
    expect(gen.next().value).to.equal("This is a standard sentence. This follows.")
    expect(gen.next().done).to.equal(true)
  });

  it('should display every other word on level 2 (starting with first word in --)', ()=>{
    const text = "This is a standard sentence. This follows.";

    const gen = createGenerator(text, "2")
    expect(gen.next().value).to.equal("---- is - standard --------- This --------")
    expect(gen.next().value).to.equal("This is - standard --------- This --------")
    expect(gen.next().value).to.equal("This is a standard --------- This --------")
    expect(gen.next().value).to.equal("This is a standard sentence. This --------")
    expect(gen.next().value).to.equal(text)
    expect(gen.next().done).to.equal(true)
  });

});
