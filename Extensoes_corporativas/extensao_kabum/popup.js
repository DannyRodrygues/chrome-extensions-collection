// 1. Ação para o Site Kabum
document.getElementById('btnSite').addEventListener('click', function() {
  chrome.tabs.create({ url: 'https://www.kabum.com.br/' });
});

// 2. Ação para o Humand (Corrigido o ID para btnHumand)
document.getElementById('btnHumand').addEventListener('click', function() {
  chrome.tabs.create({ url: 'https://app.humand.co/' });
});

// 3. Ação para o Portal Ninja
document.getElementById('btnPortal').addEventListener('click', function() {
  chrome.tabs.create({ url: 'https://sites.google.com/kabum.com.br/portalninja/portalninja?authuser=0' });
});

// 4. Ação para o Ninja Academy
document.getElementById('btnNinja').addEventListener('click', function() {
  chrome.tabs.create({ url: 'https://universidadeluiza.com.br/app/home/canal/ninja-academy' });
});

// 5. Ação para o DNA Kabum
document.getElementById('btnDNA').addEventListener('click', function() {
  chrome.tabs.create({ url: 'https://dna.kabum.com.br/' });
});

// 6. Ação para o Jira (Corrigido as aspas no final)
document.getElementById('btnJira').addEventListener('click', function() {
  chrome.tabs.create({ url: 'https://grupokabum.atlassian.net/servicedesk/customer/portals' });
});