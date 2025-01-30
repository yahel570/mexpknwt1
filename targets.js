function getTarget() {

    
    var StimSet = ['Chinese character','Painting','Nonword','Chinese character','Painting','Nonword'];
    var preEval = ['With','Without','With','Without','With','Without'];
    var Stimuli = [['Chinese character1.png','Chinese character2.png','Chinese character3.png','Chinese character4.png','Chinese character5.png','Chinese character6.png','Chinese character7.png','Chinese character8.png','Chinese character9.png','Chinese character10.png'],['Painting1.png','Painting2.png','Painting3.png','Painting4.png','Painting5.png','Painting6.png','Painting7.png','Painting8.png','Painting9.png','Painting10.png'],['Nonword1.png','Nonword2.png','Nonword3.png','Nonword4.png','Nonword5.png','Nonword6.png','Nonword7.png','Nonword8.png','Nonword9.png','Nonword10.png'],['Chinese character1.png','Chinese character2.png','Chinese character3.png','Chinese character4.png','Chinese character5.png','Chinese character6.png','Chinese character7.png','Chinese character8.png','Chinese character9.png','Chinese character10.png'],['Painting1.png','Painting2.png','Painting3.png','Painting4.png','Painting5.png','Painting6.png','Painting7.png','Painting8.png','Painting9.png','Painting10.png'],['Nonword1.png','Nonword2.png','Nonword3.png','Nonword4.png','Nonword5.png','Nonword6.png','Nonword7.png','Nonword8.png','Nonword9.png','Nonword10.png']];
    var T1Filler1Rating = ['-3: Dislike a lot', 'NA', '-1: Slightly dislike','NA', '1: Slightly like', 'NA'];
    var T1Filler2Rating = ['-2: Moderately dislike', 'NA','0: Neutral', 'NA', '2: Moderately like', 'NA'];
    var T1Filler3Rating = ['-1: Slightly dislike','NA','0: Neutral', 'NA','1: Slightly like','NA'];
    var T1Filler4Rating = [ '-3: Dislike a lot', 'NA', '-1: Slightly dislike','NA','0: Neutral','NA'];
    var T1Target1Rating = ['-2: Moderately dislike','NA','0: Neutral','NA', '1: Slightly like','NA'];
    var T1Target2Rating = ['0: Neutral', 'NA', '1: Slightly like', 'NA', '3: Like a lot','NA'];
    var T1Target3Rating = ['0: Neutral', 'NA', '1: Slightly like', 'NA', '2: Moderately like','NA'];
    var T1Target4Rating = ['0: Neutral', 'NA', '0: Neutral', 'NA','0: Neutral','NA'];
    var T2Filler1Rating = [ '-3: Dislike a lot', '-2: Moderately dislike', '-1: Slightly dislike','0: Neutral', '1: Slightly like', '2: Moderately like'];
    var T2Filler2Rating = [ '-1: Slightly dislike','0: Neutral', '1: Slightly like', '2: Moderately like', '3: Like a lot','-3: Dislike a lot'];
    var T2Filler3Rating = [ '-3: Dislike a lot','0: Neutral', '1: Slightly like', '2: Moderately like', '-2: Moderately dislike', '-1: Slightly dislike'];
    var T2Filler4Rating = [  '1: Slightly like', '-3: Dislike a lot', '-1: Slightly dislike','0: Neutral','2: Moderately like', '-2: Moderately dislike'];
    var T2Target1Rating = [ '1: Slightly like', '2: Moderately like', '-3: Dislike a lot', '-2: Moderately dislike','0: Neutral', '3: Like a lot'];
    var T2Target2Rating = [ '0: Neutral', '1: Slightly like', '2: Moderately like', '-3: Dislike a lot', '-2: Moderately dislike', '-1: Slightly dislike'];
    var T2Target3Rating = [ '-3: Dislike a lot','1: Slightly like', '-2: Moderately dislike', '2: Moderately like', '-1: Slightly dislike','0: Neutral'];
    var T2Target4Rating = [ '1: Slightly like', '2: Moderately like', '3: Like a lot', '-3: Dislike a lot', '-2: Moderately dislike', '-1: Slightly dislike'];




    // First, make sure the two arrays are the same length
    if (preEval.length !== StimSet.length) {
        throw new Error('Arrays must be the same length');
    }

    // Next, select randomly the index from which we will get the value from each array
    var index = Math.floor(Math.random() * StimSet.length);

    return({StimSet: StimSet[index], preEval: preEval[index], Stimuli: Stimuli[index],
		T1Filler1Rating: T1Filler1Rating[index], T1Filler2Rating: T1Filler2Rating[index],
		T1Filler3Rating: T1Filler3Rating[index], T1Filler4Rating: T1Filler4Rating[index],
		T1Target1Rating: T1Target1Rating[index], T1Target2Rating: T1Target2Rating[index],
		T1Target3Rating: T1Target3Rating[index], T1Target4Rating: T1Target4Rating[index],
		T2Filler1Rating: T2Filler1Rating[index], T2Filler2Rating: T2Filler2Rating[index],
		T2Filler3Rating: T2Filler3Rating[index], T2Filler4Rating: T2Filler4Rating[index],
		T2Target1Rating: T2Target1Rating[index], T2Target2Rating: T2Target2Rating[index],
		T2Target3Rating: T2Target3Rating[index], T2Target4Rating: T2Target4Rating[index]});
}







