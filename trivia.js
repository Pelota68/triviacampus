


const _question = document.getElementById('question');
const _options = document.querySelectorAll(quiz-Options);



async function loadquestion(){
    const APIUrl= 'https://opentdb.com/api.php?amount=10';
    const result= await fetch('${APIUrl}');
    const data =await result.json();
    console.log(data.results[0]);

}
loadquestion();
function showQuestion(data){

    console.log(data)
}
loadquestion();