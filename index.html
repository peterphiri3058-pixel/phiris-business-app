<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>PHIRIs Business</title>
  <style>
    * { box-sizing: border-box; margin: 0; padding: 0; }
    body { font-family: system-ui, Arial, sans-serif; background: #f4f6fa; color: #2c3e50; padding: 20px; max-width: 900px; margin: auto; }
    header { text-align: center; margin-bottom: 24px; }
    header h1 { font-size: 28px; }
    .sub { color: #7f8c8d; font-size: 14px; margin-top: 4px; }
    .stats { display: grid; grid-template-columns: repeat(auto-fit, minmax(140px, 1fr)); gap: 12px; margin-bottom: 20px; }
    .card { background: white; padding: 16px; border-radius: 12px; box-shadow: 0 2px 6px rgba(0,0,0,0.06); text-align: center; }
    .card h3 { font-size: 13px; color: #7f8c8d; margin-bottom: 6px; }
    .card p { font-size: 22px; font-weight: bold; }
    .card.highlight { background: #4a90e2; color: white; }
    .card.highlight h3 { color: #e3f0ff; }
    .ai-box { background: linear-gradient(135deg, #667eea, #764ba2); color: white; padding: 16px; border-radius: 12px; margin-bottom: 20px; }
    .ai-box h3 { margin-bottom: 8px; font-size: 15px; }
    .ai-box p { font-size: 14px; line-height: 1.5; }
    .tabs { display: flex; gap: 8px; margin-bottom: 16px; }
    .tab { flex: 1; padding: 12px; border: none; border-radius: 10px; background: white; cursor: pointer; font-size: 14px; font-weight: 600; color: #555; box-shadow: 0 1px 3px rgba(0,0,0,0.06); }
    .tab.active { background: #4a90e2; color: white; }
    .panel { display: none; background: white; padding: 20px; border-radius: 12px; box-shadow: 0 2px 6px rgba(0,0,0,0.06); }
    .panel.active { display: block; }
    .panel h2 { font-size: 18px; margin-bottom: 12px; }
    .form { display: flex; flex-wrap: wrap; gap: 8px; margin-bottom: 16px; }
    .form input { flex: 1; min-width: 120px; padding: 10px; border: 1px solid #ddd; border-radius: 8px; font-size: 14px; }
    .form button { padding: 10px 16px; background: #27ae60; color: white; border: none; border-radius: 8px; cursor: pointer; font-weight: 600; }
    .form button:hover { background: #219150; }
    ul { list-style: none; }
    li { display: flex; justify-content: space-between; align-items: center; padding: 12px; border-bottom: 1px solid #eee; font-size: 14px; }
    li:last-child { border-bottom: none; }
    li .right { display: flex; gap: 8px; align-items: center; }
    .del { background: #e74c3c; color: white; border: none; border-radius: 6px; padding: 4px 8px; cursor: pointer; font-size: 12px; }
    .badge { background: #f39c12; color: white; padding: 2px 8px; border-radius: 10px; font-size: 11px; }
    .login-overlay { position: fixed; top: 0; left: 0; width: 100%; height: 100%; background: linear-gradient(135deg, #667eea, #764ba2); display: flex; justify-content: center; align-items: center; z-index: 1000; }
    .login-box { background: white; padding: 30px; border-radius: 12px; box-shadow: 0 10px 25px rgba(0,0,0,0.2); text-align: center; width: 100%; max-width: 350px; }
    .login-box h2 { margin-bottom: 10px; color: #2c3e50; }
    .login-box p { color: #7f8c8d; margin-bottom: 20px; font-size: 14px; }
    .login-box input { width: 100%; padding: 12px; margin-bottom: 12px; border: 1px solid #ddd; border-radius: 8px; font-size: 14px; }
    .login-box button { width: 100%; padding: 12px; background: #4a90e2; color: white; border: none; border-radius: 8px; font-size: 16px; font-weight: bold; cursor: pointer; }
    .login-box button:hover { background: #357ab8; }
  </style>
</head>
<body>

  <div id="loginScreen" class="login-overlay">
    <div class="login-box">
      <h2>🏪 PHIRIs Business</h2>
      <p>Log in to manage your business</p>
      <input id="loginUser" type="text" placeholder="Enter your name (e.g. Peter)">
      <input id="loginPass" type="password" placeholder="Create a password">
      <button onclick="login()">Login / Register</button>
    </div>
  </div>

  <div id="mainApp" style="display: none;">
    <header>
      <div style="display: flex; justify-content: space-between; align-items: center;">
        <h1>🏪 PHIRIs Business</h1>
        <button onclick="logout()" style="background: #e74c3c; color: white; border: none; border-radius: 6px; cursor: pointer;">Logout</button>
      </div>
      <p class="sub" id="welcomeMsg">Welcome!</p>
    </header>

    <section class="stats">
      <div class="card"><h3>Total Sales</h3><p id="statSales">K0</p></div>
      <div class="card"><h3>Total Expenses</h3><p id="statExpenses">K0</p></div>
      <div class="card highlight"><h3>Profit</h3><p id="statProfit">K0</p></div>
      <div class="card"><h3>Low Stock Items</h3><p id="statLowStock">0</p></div>
    </section>

    <section class="ai-box">
      <h3>🧠 Business Insight</h3>
      <p id="aiInsight">Add some data to see insights...</p>
    </section>

    <nav class="tabs">
      <button class="tab active" data-tab="sales">💰 Sales</button>
      <button class="tab" data-tab="expenses">💸 Expenses</button>
      <button class="tab" data-tab="stock">📦 Stock</button>
    </nav>

    <section id="sales" class="panel active">
      <h2>Record a Sale</h2>
      <div class="form">
        <input id="saleName" placeholder="Product name">
        <input id="saleQty" type="number" placeholder="Quantity" min="1">
        <input id="salePrice" type="number" placeholder="Price per unit (K)">
        <button onclick="addSale()">Add Sale</button>
      </div>
      <ul id="salesList"></ul>
    </section>

    <section id="expenses" class="panel">
      <h2>Record an Expense</h2>
      <div class="form">
        <input id="expName" placeholder="Expense name (e.g. Rent)">
        <input id="expAmount" type="number" placeholder="Amount (K)">
        <button onclick="addExpense()">Add Expense</button>
      </div>
      <ul id="expensesList"></ul>
    </section>

    <section id="stock" class="panel">
      <h2>Manage Stock</h2>
      <div class="form">
        <input id="stockName" placeholder="Product name">
        <input id="stockQty" type="number" placeholder="Quantity" min="0">
        <input id="stockThreshold" type="number" placeholder="Low-stock alert at" min="0">
        <button onclick="addStock()">Add Product</button>
      </div>
      <ul id="stockList"></ul>
    </section>
  </div>

  <script>
    function login() {
      const user = document.getElementById("loginUser").value.trim();
      const pass = document.getElementById("loginPass").value.trim();
      if (!user || !pass) return alert("Please enter a name and password.");
      localStorage.setItem("phirisUser", user);
      document.getElementById("loginScreen").style.display = "none";
      document.getElementById("mainApp").style.display = "block";
      document.getElementById("welcomeMsg").textContent = "Welcome back, " + user + "!";
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
      document.getElementById("welcomeMsg").textContent = "Welcome back, " + savedUser + "!";
    }

    let sales = JSON.parse(localStorage.getItem("sales")) || [];
    let expenses = JSON.parse(localStorage.getItem("expenses")) || [];
    let stock = JSON.parse(localStorage.getItem("stock")) || [];

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
      sales.push({ name: name, qty: qty, price: price, total: qty * price });
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
      expenses.push({ name: name, amount: amount });
      document.getElementById("expName").value = "";
      document.getElementById("expAmount").value = "";
      saveAll(); render();
    }

    function addStock() {
      const name = document.getElementById("stockName").value.trim();
      const qty = Number(document.getElementById("stockQty").value);
      const threshold = Number(document.getElementById("stockThreshold").value) || 5;
      if (!name || qty < 0) return alert("Fill stock fields correctly");
      stock.push({ name: name, qty: qty, threshold: threshold });
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

      document.getElementById("salesList").innerHTML = sales.map((s, i) => {
        return "<li><span>" + s.name + " x " + s.qty + " @ K" + s.price + " = <b>K" + s.total.toFixed(2) + "</b></span><div class='right'><button class='del' onclick='del(sales, " + i + ")'>Del</button></div></li>";
      }).join("") || "<li>No sales yet</li>";

      document.getElementById("expensesList").innerHTML = expenses.map((e, i) => {
        return "<li><span>" + e.name + " - <b>K" + e.amount.toFixed(2) + "</b></span><div class='right'><button class='del' onclick='del(expenses, " + i + ")'>Del</button></div></li>";
      }).join("") || "<li>No expenses yet</li>";

      document.getElementById("stockList").innerHTML = stock.map((s, i) => {
        let badge = s.qty <= s.threshold ? "<span class='badge'>LOW</span>" : "";
        return "<li><span>" + s.name + " - " + s.qty + " units " + badge + "</span><div class='right'><button class='del' onclick='del(stock, " + i + ")'>Del</button></div></li>";
      }).join("") || "<li>No products yet</li>";

      let insight = "";
      if (sales.length === 0 && expenses.length === 0) {
        insight = "Start by adding a sale and an expense. I'll then analyse your numbers.";
      } else if (profit < 0) {
        insight = "You're losing money (K" + Math.abs(profit).toFixed(2) + " loss). Cut costs or raise sales. Expenses are " + ((totalExp / (totalSales || 1)) * 100).toFixed(0) + "% of your sales.";
      } else if (profit > 0 && totalSales > 0) {
        insight = "Good job! Profit margin is " + ((profit / totalSales) * 100).toFixed(0) + "%. Your top expense category is '" + topExpense() + "'.";
        if (lowStock.length) insight += " Restock " + lowStock.length + " low item(s).";
      }
      document.getElementById("aiInsight").textContent = insight;
    }

    function topExpense() {
      if (!expenses.length) return "-";
      const map = {};
      expenses.forEach(e => map[e.name] = (map[e.name] || 0) + e.amount);
      return Object.entries(map).sort((a, b) => b[1] - a[1])[0][0];
    }

    render();
  </script>
</body>
</html>
