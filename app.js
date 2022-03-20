const adviceNumber = document.getElementById("adviceNumber"); //refrence to advicenumber
const advicetext = document.getElementById("adviceText");    // refrence to advicetext
const apiCall = 'https://api.adviceslip.com/advice';        //api endpoint

//Called whenever we click the button
function changeText()
{   //Fetch call 
    fetch(apiCall)
        .then(response =>
        {
            return response.json(); //return data as json
        }).then(data =>
        {
            adviceNumber.innerText = `ADVICE #${ data.slip.id }`;
            advicetext.innerText =  `"${data.slip.advice}"`;
        })
    

}
