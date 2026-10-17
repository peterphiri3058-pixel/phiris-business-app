// -------- LOGIN SYSTEM --------
function login() {
  const user = document.getElementById("loginUser").value.trim();
  const pass = document.getElementById("loginPass").value.trim();

  if (!user || !pass) {
    return alert("Please enter a name and password.");
  }

  localStorage.setItem("phirisUser", user);

  document.getElementById("loginScreen").style.display = "none";
  document.getElementById("mainApp").style.display = "block";
  
  document.getElementById("welcomeMsg").textContent = Welcome back, ${user}!;
  
  render();
}

function logout() {
  localStorage.removeItem("phirisUser");
  location.reload();
}

const savedUser = localStorage.getItem("phirisUser");
if (savedUser) {
  document.getElementById("loginScreen").style.display = "none";
  document.getElementById("mainApp").style.display = "block";
  document.getElementById("welcomeMsg").textContent = Welcome back, ${savedUser}!;
}

// -------- APP DATA --------
let sales    = JSON.parse(localStorage.getItem("sales"))    || [];
let expenses = JSON.parse(localStorage.getItem("expenses")) || [];
let stock    = JSON.parse(localStorage.getItem("stock"))    || [];

const saveAll = () => {
  localStorage.setItem("sales", JSON.stringify(sales));
  localStorage.setItem("expenses", JSON.stringify(expenses));
  localStorage.setItem("stock", JSON.stringify(stock));
};

document.querySelectorAll(".tab").forEach(btn => {
  btn.onclick = () => {
    document.querySelectorAll(".tab").forEach(b => b.classList.remove("active"));
    document.querySelectorAll(".panel").forEach(p => p.classList.remove("active"));
    btn.classList.add("active");
    document.getElementById(btn.dataset.tab).classList.add("active");
  };
});

function addSale() {
  const name = document.getElementById("saleName").value.trim();
  const qty = Number(document.getElementById("saleQty").value);
  const price = Number(document.getElementById("salePrice").value);
  if (!name || qty <= 0 || price <= 0) return alert("Fill all sale fields correctly");

  sales.push({ name, qty, price, total: qty * price });

  const item = stock.find(s => s.name.toLowerCase() === name.toLowerCase());
  if (item) item.qty = Math.max(0, item.qty - qty);

  document.getElementById("saleName").value = "";
  document.getElementById("saleQty").value = "";
  document.getElementById("salePrice").value = "";
  saveAll(); render();
}

function addExpense() {
  const name = document.getElementById("expName").value.trim();
  const amount = Number(document.getElementById("expAmount").value);
  if (!name || amount <= 0) return alert("Fill all expense fields correctly");

  expenses.push({ name, amount });
  document.getElementById("expName").value = "";
  document.getElementById("expAmount").value = "";
  saveAll(); render();
}

function addStock() {
  const name = document.getElementById("stockName").value.trim();
  const qty = Number(document.getElementById("stockQty").value);
  const threshold = Number(document.getElementById("stockThreshold").value) || 5;
  if (!name || qty < 0) return alert("Fill stock fields correctly");

  stock.push({ name, qty, threshold });
  document.getElementById("stockName").value = "";
  document.getElementById("stockQty").value = "";
  document.getElementById("stockThreshold").value = "";
  saveAll(); render();
}

function del(list, i) {
  list.splice(i, 1);
  saveAll(); render();
}

function render() {
  const totalSales = sales.reduce((s, x) => s + x.total, 0);
  const totalExp = expenses.reduce((s, x) => s + x.amount, 0);
  const profit = totalSales - totalExp;
  const lowStock = stock.filter(s => s.qty <= s.threshold);

  document.getElementById("statSales").textContent = "K" + totalSales.toFixed(2);
  document.getElementById("statExpenses").textContent = "K" + totalExp.toFixed(2);
  document.getElementById("statProfit").textContent = "K" + profit.toFixed(2);
  document.getElementById("statLowStock").textContent = lowStock.length;

  document.getElementById("salesList").innerHTML = sales.map((s, i) => `
    <li>
      <span>${s.name} × ${s.qty} @ K${s.price} = <b>K${s.total.toFixed(2)}</b></span>
      <div class="right"><button class="del" onclick="del(sales, ${i})">Del</button></div>
    </li>`).join("") || "<li>No sales yet</li>";

  document.getElementById("expensesList").innerHTML = expenses.map((e, i) => `
    <li>
      <span>${e.name} — <b>K${e.amount.toFixed(2)}</b></span>
      <div class="right"><button class="del" onclick="del(expenses, ${i})">Del</button></div>
    </li>`).join("") || "<li>No expenses yet</li>";

  document.getElementById("stockList").innerHTML = stock.map((s, i) => `
    <li>
      <span>${s.name} — ${s.qty} units
        ${s.qty <= s.threshold ? '<span class="badge">LOW</span>' : ""}
      </span>
      <div class="right"><button class="del" onclick="del(stock, ${i})">Del</button></div>
    </li>`).join("") || "<li>No products yet</li>";

  let insight = "";
  if (sales.length === 0 && expenses.length === 0) {
    insight = "Start by adding a sale and an expense. I'll then analyse your numbers.";
  } else if (profit < 0) {
    insight = `⚠️ You're losing money (K${Math.abs(profit).toFixed(2)} loss). Cut costs or raise sales. ` +
              Expenses are ${((totalExp / (totalSales || 1)) * 100).toFixed(0)}% of your sales.;
  } else if (profit ` > 0 && totalSales > 0) {
    insight =✅ Good job! Profit margin is ${((profit / totalSales) * 100).toFixed(0)}%. ` +
              Your top expense category is "${topExpense()}".;
    if (lowStock.length) insight += ` Restock ${lowStock.length} low item(s).`;
  }
  document.getElementById("aiInsight").textContent = insight;
}

function topExpense() {
  if (!expenses.length) return "—";
  const map = {};
  expenses.forEach(e => map[e.name] = (map[e.name] || 0) + e.amount);
  return Object.entries(map).sort((a, b) => b[1] - a[1])[0][0];
}

render();