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

// Task 3: Dynamic Inventory Management - Adding and Removing Items

function addInventoryItem(productName) { // Adding a product to the inventory list
    const inventoryList = document.getElementById("inventoryList"); // Selecting the inventory list
    const productName = document.createElement("li") // Create a list item
    newItem.setAttribute("class", "product-item"); // Use setAttribute to add a class
    newItem.setAttribute("data-product, productName");
    newItem.innerText = productName; // Set product name as text

    productItem.addEventListener("click", () => { // Add click button that calls your "add" funnction
       removeProductItem(newProductItem);    
    });

    inventoryList.appendChild(productItem); // Add product item to the list
    };

    function removeProductItem(item) { // 
        const inventoryList = document.getElementById("inventoryList");
        inventoryList.removeChild(item); // Remove the clicked item from the inventory list
    }

// Task 4: Business Customer Section - Handling Event Bubbling

const customerSection = document.getElementById("customerSection"); // Selecting customer section
// adding a click event listener
customerSection.addEventListener("click", () => {console.log("Customer card Has been clicked")}); // Adds event listener

const customerCards = document.querySelectorAll(".customer-card"); // Query selectory will select the customer cards
customerCards.forEach((card) => 
{
  card.style.backgroundColor = "pink"; // Changed the color to pink 
  card.addEventListener("click", (event) => 
{
    console.log("Customer card Has been clicked");
    event.stopPropagation();
  });
});
