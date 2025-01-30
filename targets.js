function getTarget() {

    
    var StimSet = ['Chinese character','Painting','Nonword','Chinese character','Painting','Nonword'];
    var preEval = ['With','Without','With','Without','With','Without'];
    var Stimuli = [['Chinese character1.jpg','Chinese character2.jpg','Chinese character3.jpg','Chinese character4.jpg','Chinese character5.jpg','Chinese character6.jpg','Chinese character7.jpg','Chinese character8.jpg','Chinese character9.jpg','Chinese character10.jpg'],['Painting1.jpg','Painting2.jpg','Painting3.jpg','Painting4.jpg','Painting5.jpg','Painting6.jpg','Painting7.jpg','Painting8.jpg','Painting9.jpg','Painting10.jpg'],['Nonword1.jpg','Nonword2.jpg','Nonword3.jpg','Nonword4.jpg','Nonword5.jpg','Nonword6.jpg','Nonword7.jpg','Nonword8.jpg','Nonword9.jpg','Nonword10.jpg'],['Chinese character1.jpg','Chinese character2.jpg','Chinese character3.jpg','Chinese character4.jpg','Chinese character5.jpg','Chinese character6.jpg','Chinese character7.jpg','Chinese character8.jpg','Chinese character9.jpg','Chinese character10.jpg'],['Painting1.jpg','Painting2.jpg','Painting3.jpg','Painting4.jpg','Painting5.jpg','Painting6.jpg','Painting7.jpg','Painting8.jpg','Painting9.jpg','Painting10.jpg'],['Nonword1.jpg','Nonword2.jpg','Nonword3.jpg','Nonword4.jpg','Nonword5.jpg','Nonword6.jpg','Nonword7.jpg','Nonword8.jpg','Nonword9.jpg','Nonword10.jpg']];
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







