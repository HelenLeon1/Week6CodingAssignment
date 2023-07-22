
const expect = chai.expect
const assert = chai.assert


    describe("Winning Player Method Test", () => {
        describe("Player 1's Score is greater than Player 2's score", () => { 
                let scorePlayer1 = 18;
                let scorePlayer2 = 7;
                let expectedResult = scorePlayer1 > scorePlayer2;

                let scores = [12, 8];
                if (scores[0] > scores[1]) {
                    //console.log("Player 1 is the winner!");
                }

                it('Should return true', () => {
                    expect(expectedResult).to.equal(scores[0] > scores[1]);
                })

        })

        describe("Player 2's Score is greater than Player 1's score", () => { 
            let scorePlayer1 = 12;
            let scorePlayer2 = 14;
            let expectedResult = scorePlayer2 > scorePlayer1;

            let scores = [11, 13];
            if (scores[1] > scores[0]) {
               // console.log("Player 2 is the winner!");
            }

            it('#Should return true', () => {
                expect(expectedResult).to.equal(scores[1] > scores[0]);
            })

        })
    })
 

