import {
  assertEquals,
  assertMatch,
} from "https://deno.land/std/testing/asserts.ts";

import { endpoint } from "./api/repo.ts";

Deno.test({
  name: "example",
  fn(): void {
    assertEquals("world", "world");
    assertEquals({ hello: "world" }, { hello: "world" });
  },
});

Deno.test({
  name: "endpoint",
  fn(): void {
    assertMatch(endpoint(1), /https:\/\/api.github.com\/search\/repositories/);
  },
});
