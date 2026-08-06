import assert from "node:assert/strict";
import { access } from "node:fs/promises";
import test from "node:test";

const root = new URL("../", import.meta.url);

async function render() {
  const workerUrl = new URL("../dist/server/index.js", import.meta.url);
  workerUrl.searchParams.set("test", `${process.pid}-${Date.now()}`);
  const { default: worker } = await import(workerUrl.href);
  return worker.fetch(new Request("http://localhost/", { headers: { accept: "text/html" } }), {
    ASSETS: { fetch: async () => new Response("Not found", { status: 404 }) },
  }, { waitUntil() {}, passThroughOnException() {} });
}

test("server-renders the product landing page", async () => {
  const response = await render();
  assert.equal(response.status, 200);
  assert.match(response.headers.get("content-type") ?? "", /^text\/html\b/i);
  const html = await response.text();
  assert.match(html, /China Step by Step/);
  assert.match(html, /China is closer/);
  assert.match(html, /Download on the App Store/);
  assert.match(html, /id6795864818/);
  assert.doesNotMatch(html, /codex-preview|Building your site/);
});

test("ships required campaign imagery", async () => {
  await Promise.all([
    access(new URL("public/attractions/great-wall.jpg", root)),
    access(new URL("public/attractions/zhangjiajie.jpg", root)),
    access(new URL("public/attractions/shanghai.jpg", root)),
    access(new URL("public/app-home.png", root)),
    access(new URL("public/app-guide.png", root)),
    access(new URL("public/app-tools.png", root)),
  ]);
});
