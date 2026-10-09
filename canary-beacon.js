(() => {
  const script = document.currentScript;
  const source = script?.dataset.source || "unknown";
  const beacon = new Image(1, 1);

  beacon.referrerPolicy = "no-referrer";
  beacon.alt = "";
  beacon.src =
    "https://canarytokens.com/articles/feedback/traffic/" +
    "xk4s9bzlw6rqdbetfcl8n0hsu/index.html" +
    `?source=${encodeURIComponent(source)}&nonce=${encodeURIComponent(crypto.randomUUID())}`;

  window.__atmetaCanaryBeacon = beacon;
})();
