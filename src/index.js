import { Router } from "itty-router";

const router = Router();

router.get("/", (request, env, context) => {
  return new Response(
    JSON.stringify({
      message: "Hello, world!",
    })
  );
});

export default {
  fetch: router.handle,
};
