//task 2: adding employee cards dynamically
function createElement(name, position) //function that creates the employee card
{
    const card = document.createElement("div");
    card.setAttribute("class", "employee-card"); //setting the attributes

    //each employee card will include the employee's name, position, and a remove button: 
    const heading = document.createElement("h3"); //heading for employee's name on the card
    heading.textContext = name;
    const paragraph = document.createElement("p"); //paragraph of employee's position
    paragraph.textContent = position;
    const removeButton = document.createElement("button"); //remove button to delte the card
    removeButton.textContent = "Remove";
    removeButton.setAttribute("class", "remove-btn");
    //when the button is clicked the card will actually be removed
    removeButton.addEventListener('click', () => {card.remove();}); 

    //appending the employee cards to the "employeeComtainer"
    card.appendChild(heading); //adding employee's name
    card.appendChild(paragraph); //adding employee's position
    card.appendChild(removeButton); //adding a remove button
    const employeeComtainer = document.getElementById("employeeContainer");
    employeeComtainer.appendChild(card);
}
//employee's names and positions 
createElement("Jennifer Jareau", "Communications Liason of the BAU");
createElement("Spencer Reid", "SSA of the BAU");
createElement("Penelope Garcia", "Technical Analyst of the BAU");

//task 3: converting nodelists to arrays for bulk updates
function updatingEmployeeCards() //
{
    const employeeCards = document.querySelectorAll('.employee.card'); //selects all the elements within the employee's card class
    const employeeCardsArray = Array.from(employeeCards); //converting nodelist into an array
    employeeCardsArray.forEach((card) => {card.style.backgroundColor = 'yellow';  }); //array method to update the card's style
}
updatingEmployeeCards();