// reads data-site-id
// fetches feature flags 
// decides what modules can be loaded
// load them dynamically

const siteId = document.currentScript.dataset.siteId;
const configApi = `https://api.tracciaweb.it/config?site=${siteId}`;

fetch(configApi)
.then(r => r.json())
.then(config => {
  if(config.basicTracking) { import('./basic.js'); }
  if(config.consentTracking) { import('./advanced.js'); }
});