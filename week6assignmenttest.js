var expect = chai.expect

describe('MyFunctions', function() {
    describe('#deck1.getShuffledDeck', function() {
        it('should return a 52 card array that is shuffled', function(){
            var x = deck1.getShuffledDeck().length
            expect(x).to.equal(52)
        })
    })
})