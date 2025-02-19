let sentence = "I am working on a project.";
const contWords = (sentence)=>{
    let count = 0;
    for(let i=0; i<sentence.length; i++){
       if (sentence[i] !=' '){
         count++;
       }
    }
}

function getLength(sentence){
    return sentence.length
}
console.log(getLength('hello world'))

//


function getvowels(sentence){
    let count = 0;
    for(let i=0;i<sentence.length; i++){
        if(sentence[i]=='a'||sentence[i]=='A'||sentence[i]=='e'||sentence[i]=='E'||sentence[i]=='i'||sentence[i]=='I'||sentence[i]=='o'||sentence['O']||sentence[i]=='I'||sentence[i]=='u'||sentence[i]=='U'){
            count++;
        }
    }
console.log(count)
}