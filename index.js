 //for (let i=1; i < 20; i += 7) {
   // console.log (i)
//}
//  Question 3//
//IF.........ELSE IF....ELSE

    //The subjects for each class group are as follows:
	//Science Subjects - Physics, Chemistry, Biology, Technical Drawing 
    //Social Science Subjects - Accounting, Commerce, Marketing, Geography
    //Arts Subjects - Government, Economics, Literature, History 
    //General Subjects - English Language, Mathematics
let Department = ( "Arts" )

    if (Department == "Science") {
        console.log ( "Physics, Chemistry, Biology, Technical Drawing");
    }
    else if (Department == "SocialScience") {
        console.log ("Accounting, Commerce, Marketing, Geography");
    } 
    else if (Department == "Arts") {
        console.log ("Government, Economics, Literature, History");
    }
    else if (Department == "GeneralSubject") {
        console.log ("English Language, Mathematics");
    }
     else {
  console.log("Invalid Department. You will take the General subjects: English Language, Mathematics");
    

    }
    
    //  Question 5

    const num = parseInt ("50");
    const pwr = Math.pow(2, Math.round(Math.log2(num)));
    
    console.log(`The number ${num} is the power of 2 nearest to ${pwr}.`)

    

