const { response } = require("express")

const apiUrl="https://exam.ankush.wiki/api/challenges"


fetch(apiUrl,{
    method:'GET',
    headers:{
        'Cookie':'connect.sid=s%3AZ_KEnNwb3WNNpCBUOt8FTe3I8OADRw0D.IKaAucepdgg9O4OZ5y6ZnQLcAU2RiUT0b%2B74srTh5iA'
    }
})
.then(response=>{

    if(!response.ok){
        throw new Error("bad");
    }
    return response.json()
})
.then(data=>{

    let arrayOfObjects=data.data;
    
    console.log("length of array"+arrayOfObjects.length)
    let countOfVersion=0;

    arrayOfObjects.forEach(element => {
        let inLowerCase=element.name.toLowerCase();
        // console.log(toLowerCase);
        let words=inLowerCase.split(' ');

        console.log(words);
        words.filter((word)=>word==="version"? countOfVersion++ : 0);
        })
        console.log(countOfVersion);

    });
