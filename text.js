const customname = document.querySelector('#customname')
const randomize = document.querySelector('.randomize')
const story = document.querySelector('.storyMessage')

let numberAll = `:xText:,
Môi cười xinh như hoa, 
Đáng yêu, thật thà.
Cứ êm đềm thương nhau qua bao nắng mưa.

Một đời nâng niu, một đời đưa đón,
Khi bình minh ôm em ngủ say trong lòng.
Đến khi già nua :yText:.
 :Tacgia:`;

let xText = [
    'thấy anh pro khum',
    'làm muốn ẻ luôn đó bae',
];
let yText = [
    'anh chở em đi đà lạt',
    'anh cũng sẽ yêu mỗi em thâu',
];
function randomValueFromArray(array) {
    const random = Math.floor(Math.random() * array.length);
    return array[random];
}
randomize.addEventListener('click', result);

function result() {
    let newText = numberAll;
    let xItem = randomValueFromArray(xText);
    let yItem = randomValueFromArray(yText);
    newText = newText.replace(":xText:", xItem);
    newText = newText.replace(":yText:", yItem);
    newText = newText.replace(":Tacgia:", customname.value);

    story.innerHTML = newText;
    console.log( story.innerHTML);

    story.textContent = newText;
    story.style.visibility = 'visible';
    story.style.background = "pink";

};
