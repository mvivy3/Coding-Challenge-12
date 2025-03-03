// Task 1: Business Dashboard - DOM Element Selection and Creation

const dashboardId = document.getElementById(`dashboard`); // Selecting by ID
const dashboardQuery = document.querySelector(`#dashboard`);// Selecting using the query selector

const revenueCard = document.createElement(`div`); // Creating a new <div> element

revenueCard.setAttribute("class", "metric-card"); // Metric card
revenueCard.setAttribute("id", "revenueCard"); // Revenue Card

// Populate the card with a title "Revenue" and a placeholder value $0
revenueCard.innerHTML = ` 
            <h3>Revenue</h3> 
            <p>$0</p>
        `;
dashboardId.appendChild(revenueCard); // Append the new metric card to the dashboard

// Task 2: Updating Dashboard Metrics - Working with NodeLists and Arrays

const  metricCardList = document.querySelectorAll(".metric-card"); // Select all elements with the metric card class
const metricCardArray = Array.from(metricCardList); // Convert the resulting NodeList into an array
metricCardArray.forEach(card => { // Use an array method to update each card's inner text
    card.innerText += " - Updated"; // Updating card's inner test
    card.style.backgroundColor = "lightpink" // Changing background color
});
