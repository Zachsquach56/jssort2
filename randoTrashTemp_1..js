function biasedRNG(values, probabilities) {
	// cumulative probability, starting at 0
	var cumulativeProb = 0;

	// generate random number (zero to one).
	var rand = Math.random();

	// test `rand` against each of the cumulative probailities.
	for(var i=0; i<probabilities.length; i++) {
		cumulativeProb += probabilities[i];
		if(rand < cumulativeProb) return values[i];
	}
}

function biasedup(){
for(var i=0; i<1; i++) {
	console.log(biasedRNG(["Up", "Down"], [0.50, 0.50]));
    return(biasedRNG(["Up", "Down"], [0.50, 0.50]));
}}

function biasedUp(){
    for(var i=0; i<1; i++) {
        console.log(biasedRNG(["Up", "Down"], [0.50, 0.50]));
        return(biasedRNG(["Up", "Down"], [0.65, 0.35]));
    }}

function biasedDown(){
for(var i=0; i<1; i++) {
	console.log(biasedRNG(["Up", "Down"], [0.10, 0.90]));
    return(biasedRNG(["Up", "Down"], [0.10, 0.90]));
}}

function CallLine(){
    console.log(biasedDown(),biasedup());
    document.getElementById("ErReturn").innerHTML= biasedDown();
    document.getElementById("CrReturn").innerHTML= biasedup();
    document.getElementById("FrReturn").innerHTML= biasedUp();
    document.getElementById("JaReturn").innerHTML= biasedup();
    document.getElementById("SaReturn").innerHTML= biasedUp();
    document.getElementById("LzReturn").innerHTML= biasedup();
    document.getElementById("JdReturn").innerHTML= biasedup();
    document.getElementById("DlReturn").innerHTML= biasedUp();
    
}

