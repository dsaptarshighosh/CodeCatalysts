document.addEventListener('DOMContentLoaded', () => {
  const walletBtn = document.getElementById('connectWallet');
  const walletInfo = document.getElementById('walletInfo');
  const walletAddress = document.getElementById('walletAddress');
  const tokenList = document.getElementById('tokenList');
  const tokenCheck = document.getElementById('tokenCheck');
  const uploadForm = document.getElementById('uploadForm');
  const formResult = document.getElementById('formResult');

  // Fake wallet connect
  walletBtn.addEventListener('click', () => {
    const fakeAddress = "0x" + Math.random().toString(16).substr(2, 8) + "..." + Math.random().toString(16).substr(2, 4);
    walletAddress.textContent = fakeAddress;
    walletInfo.classList.remove('hidden');
    localStorage.setItem('wallet', fakeAddress);
    walletBtn.textContent = "Wallet Connected";
  });

  // Fake token access check
  tokenCheck.addEventListener('click', () => {
    const hasAccess = localStorage.getItem('accessToken');
    if (hasAccess) {
      showTrial("✅ Access Granted! You have a valid token. (Simulated)");
    } else {
      showTrial("❌ Access Denied — No valid token found. Purchase or mint one.");
    }
  });

  // Upload (mint token demo)
  uploadForm.addEventListener('submit', (e) => {
    e.preventDefault();
    const title = document.getElementById('title').value.trim();
    const desc = document.getElementById('desc').value.trim();
    if (!title || !desc) return alert("Fill both fields!");

    const fakeTokenId = Math.floor(Math.random() * 10000);
    const tokenHTML = `<p>🎨 <strong>${title}</strong> — Token ID: #${fakeTokenId}<br>${desc}</p>`;
    tokenList.innerHTML += tokenHTML;
    formResult.innerHTML = `<strong>Minted Token:</strong> ${title} (#${fakeTokenId})`;
    localStorage.setItem('accessToken', 'true');
  });

  // Theme toggle
  const themeToggle = document.getElementById('themeToggle');
  const body = document.body;
  const saved = localStorage.getItem('theme');
  if (saved === 'light') body.classList.add('light-theme');
  themeToggle.addEventListener('click', () => {
    body.classList.toggle('light-theme');
    localStorage.setItem('theme', body.classList.contains('light-theme') ? 'light' : 'dark');
  });

  // Modal logic
  const trialModal = document.getElementById('trialModal');
  const trialMessage = document.getElementById('trialMessage');
  const closeModal = document.getElementById('closeModal');
  const modalOkay = document.getElementById('modalOkay');
  function showTrial(msg) {
    trialMessage.textContent = msg;
    trialModal.classList.remove('hidden');
  }
  closeModal.addEventListener('click', () => trialModal.classList.add('hidden'));
  modalOkay.addEventListener('click', () => trialModal.classList.add('hidden'));
});