import { getStore } from "@netlify/blobs";

const STORE_NAME = "xenophon-profile-photos";

function notFound() {
  return new Response("Not found", { status: 404 });
}

export default async (request: Request) => {
  if (request.method !== "GET") {
    return new Response("Method not allowed", { status: 405 });
  }

  const url = new URL(request.url);
  const key = decodeURIComponent(url.pathname.replace(/^\/api\/profile-photo\//, ""));

  if (!key || key.includes("..")) {
    return notFound();
  }

  const store = getStore({ name: STORE_NAME, consistency: "strong" });
  const data = await store.get(key, { type: "arrayBuffer" });

  if (!data) {
    return notFound();
  }

  const metadataResult = await store.getMetadata(key);
  const metadata = metadataResult?.metadata as { contentType?: string } | null;

  return new Response(data, {
    headers: {
      "Cache-Control": "public, max-age=31536000, immutable",
      "Content-Type": metadata?.contentType || "application/octet-stream",
    },
  });
};

export const config = {
  path: "/api/profile-photo/*",
  method: ["GET"],
};
