//select empty div and assign to a variable
const myEmptyDiv = document.querySelector("#myEmptyDiv");
// put an h1 inside of it
//create a new element
const heading = document.createElement('h1');
heading.innerHTML = 'What do you get when you cross a turtle and a llama? A turtleneck sweater';
heading.style.cursor = 'pointer';
heading.addEventListener('click', handleHeadingClick);
myEmptyDiv.appendChild(heading);
function handleHeadingClick() {
    console.log('Heading has been clicked');
    document.body.style.backgroundColor = 'pink';
}