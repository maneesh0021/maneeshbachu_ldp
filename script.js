const menuItems = [
  { name: "French Fries", price: 105, course: "Appetizers" },
  { name: "Spring Rolls", price: 125, course: "Appetizers" },
  { name: "Garlic Bread", price: 90, course: "Appetizers" },
  { name: "Paneer Tikka", price: 150, course: "Main Course" },
  { name: "Biriyani", price: 250, course: "Main Course" },
  { name: "Chole Bhature", price: 150, course: "Main Course" },
  { name: "Gulab Jamun", price: 90, course: "Desserts" },
  { name: "Brownie with Ice Cream", price: 150, course: "Desserts" },
  { name: "Rasmalai", price: 90, course: "Desserts" },
  { name: "Lassi", price: 70, course: "Beverages" },
  { name: "Cold Coffee", price: 90, course: "Beverages" },
  { name: "Hot Chocolate", price: 150, course: "Beverages" }
];

const defaultTables = [
  { name: "Table-1", items: [] },
  { name: "Table-2", items: [] },
  { name: "Table-3", items: [] }
];

let tables = loadTables();
let activeTableIndex = null;
let selectedCategory = "ALL";

function loadTables() {
  try {
    return JSON.parse(localStorage.getItem("restaurantTables")) || defaultTables;
  } catch (e) {
    console.error("Error loading tables:", e);
    return defaultTables;
  }
}

function saveTables() {
  try {
    localStorage.setItem("restaurantTables", JSON.stringify(tables));
  } catch (e) {
    console.error("Error saving tables:", e);
  }
}

function renderMenu(filter = "") {
  const menuDiv = document.getElementById("menu");
  if (!menuDiv) return;

  const filteredItems = selectedCategory === "ALL" 
    ? menuItems 
    : menuItems.filter(item => item.course.toLowerCase() === selectedCategory.toLowerCase());

  menuDiv.innerHTML = filteredItems
    .filter(item => !filter || item.name.toLowerCase().includes(filter.toLowerCase()))
    .map(item => `
      <div class="card" draggable="true" data-name="${item.name}" data-price="${item.price}"
           ondragstart="dragStart(event)">
        <span class="menu-name">${item.name}</span>
        <span class="menu-price">₹${item.price}</span>
      </div>
    `).join("");
}

function renderTables(filter = "") {
  const tableDiv = document.getElementById("tables");
  if (!tableDiv) return;

  const isNegativeNumeric = filter.startsWith("-") && !isNaN(filter.slice(1));
  const filteredTables = tables.filter(t => {
    if (!filter) return true;
    if (isNegativeNumeric) return false;
    return t.name.toLowerCase().includes(filter.toLowerCase());
  });

  tableDiv.innerHTML = filteredTables
    .map((table, index) => `
      <div class="table ${index === activeTableIndex ? "active" : ""}" data-index="${index}"
           ondragover="event.preventDefault()" ondrop="dropItem(event)" onclick="openModal(${index})">
        <strong>${table.name}</strong><br>Total Items: ${totalItems(table)}<br>Bill: ₹${totalCost(table)}
        <button class="delete-table-btn" onclick="deleteTable(${index}); event.stopPropagation()">X</button>
      </div>
    `).join("");
}

function dragStart(e) {
  e.dataTransfer.setData("text/plain", JSON.stringify({
    name: e.target.dataset.name,
    price: Number(e.target.dataset.price)
  }));
}

function dropItem(e) {
  const index = Number(e.currentTarget.dataset.index);
  const data = JSON.parse(e.dataTransfer.getData("text/plain"));
  const table = tables[index];
  const existing = table.items.find(i => i.name === data.name);

  existing ? existing.qty++ : table.items.push({ ...data, qty: 1 });
  renderTables();
  saveTables();
}

function openModal(index) {
  activeTableIndex = index; // Set or keep activeTableIndex
  const table = tables[index];
  const modal = document.getElementById("modal");
  const content = document.getElementById("modalContent");
  if (!modal || !content) return;

  content.innerHTML = `
    <h3>${table.name} | Order Details</h3>
    <ul>${table.items.map((item, i) => `
      <li>
        <span>${item.name}</span>
        <span>Qty: <input type="number" min="1" value="${item.qty}" data-table="${index}" data-item="${i}" onchange="updateQty(this)"></span>
        <span>₹${item.price} × ${item.qty} = ₹${item.price * item.qty}</span>
        <button onclick="deleteItem(${index}, ${i})">X</button>
      </li>`).join("")}
    </ul>
    <p>Total Amount: ₹${totalCost(table)}</p>
    <button onclick="closeModal()">Close</button>
    <button class="bill-btn" onclick="generateBill(${index})">Close Session and Generate Bill</button>
  `;
  modal.style.display = "flex";
  renderTables(); // Ensure highlight is applied after modal opens
}

document.getElementById("modal")?.addEventListener("click", e => e.stopPropagation());

function updateQty(input) {
  const { table: tIndex, item: iIndex } = input.dataset;
  const item = tables[tIndex].items[iIndex];
  item.qty = Math.max(1, Number(input.value));
  saveTables();
  activeTableIndex = Number(tIndex); // Explicitly preserve activeTableIndex
  renderTables(); // Ensure highlight stays
  openModal(tIndex); // Reopen modal with updated data
}

function deleteItem(tIndex, iIndex) {
  tables[tIndex].items.splice(iIndex, 1);
  saveTables();
  activeTableIndex = tIndex; // Preserve activeTableIndex
  renderTables();
  openModal(tIndex);
}

function deleteTable(index) {
  if (tables.length <= 1) {
    alert("Cannot delete the last table!");
    return;
  }
  if (confirm(`Are you sure you want to delete ${tables[index].name}?`)) {
    tables.splice(index, 1);
    if (activeTableIndex === index) {
      activeTableIndex = null;
    } else if (activeTableIndex > index) {
      activeTableIndex--;
    }
    saveTables();
    renderTables();
    renderTableDropdownList();
  }
}

function closeModal() {
  const modal = document.getElementById("modal");
  if (modal) modal.style.display = "none";
  renderTables(); // Highlight persists unless bill is generated
}

function generateBill(index) {
  const table = tables[index];
  const total = totalCost(table);
  const modal = document.getElementById("modal");
  if (modal) modal.style.display = "none";

  const popup = document.createElement("div");
  popup.className = "bill-popup";
  popup.innerHTML = `
    <div class="bill-popup-content">
      <h3>Bill for ${table.name}</h3>
      <p>Total Amount: ₹${total}</p>
      <button onclick="closeBillPopup(${index})">OK</button>
    </div>
  `;
  document.body.appendChild(popup);
  popup.style.display = "flex";

  tables[index].items = [];
  saveTables();
  renderTables(); // Highlight persists during popup
}

function closeBillPopup(index) {
  const popup = document.querySelector(".bill-popup");
  if (popup) {
    popup.remove();
    activeTableIndex = null; // Reset only after popup closes
    renderTables();
  }
}

function totalItems(table) {
  return table.items.reduce((sum, i) => sum + i.qty, 0);
}

function totalCost(table) {
  return table.items.reduce((sum, i) => sum + i.price * i.qty, 0);
}

function clearSearch(id) {
  const input = document.getElementById(id);
  if (!input) return;
  input.value = "";
  id === "menuSearch" ? renderMenu("") : renderTables("");
}

function toggleDropdown(id) {
  const dropdown = document.getElementById(id);
  if (!dropdown) return;
  const isVisible = dropdown.style.display === "block";
  document.querySelectorAll(".dropdown-menu").forEach(drop => drop.style.display = "none");
  if (!isVisible) dropdown.style.display = "block";
}

function renderTableDropdownList() {
  const list = document.getElementById("tableList");
  if (!list) return;
  list.innerHTML = tables.map((t, index) => `
    <div class="dropdown-item" onclick="openModal(${index}); toggleDropdown('tableDropdown')">${t.name}</div>
  `).join("");
}

// Event Listeners
const menuSearch = document.getElementById("menuSearch");
const tableSearch = document.getElementById("tableSearch");
menuSearch?.addEventListener("input", e => renderMenu(e.target.value));
tableSearch?.addEventListener("input", e => renderTables(e.target.value));

document.querySelectorAll(".clear-btn").forEach(btn => 
  btn.addEventListener("click", () => clearSearch(btn.previousElementSibling?.id))
);

document.getElementById("menuDropdownBtn")?.addEventListener("click", () => toggleDropdown("menuDropdown"));
document.querySelectorAll("#menuDropdown .dropdown-item").forEach(item => 
  item.addEventListener("click", () => {
    selectedCategory = item.dataset.course;
    renderMenu("");
    toggleDropdown("menuDropdown");
  })
);

document.getElementById("tableDropdownBtn")?.addEventListener("click", () => {
  renderTableDropdownList();
  toggleDropdown("tableDropdown");
});
document.getElementById("addTableBtn")?.addEventListener("click", () => {
tables.push({ name: `Table-${tables.length + 1}`, items: [] });
  renderTables();
  renderTableDropdownList();
  saveTables();
});

window.addEventListener("click", e => {
  if (!e.target.closest(".dropdown") && !e.target.closest(".modal") && !e.target.closest(".bill-popup")) {
    document.querySelectorAll(".dropdown-menu").forEach(drop => drop.style.display = "none");
  }
OAOAOA});

// Initial Render
renderMenu();
renderTables();
