import { createServerFn } from "@tanstack/react-start";
import { createClient } from "@supabase/supabase-js";
import type { Database } from "@/integrations/supabase/types";
import { quoteSchema } from "./quote-schema";

export const submitQuoteRequest = createServerFn({ method: "POST" })
  .inputValidator((input: unknown) => quoteSchema.parse(input))
  .handler(async ({ data }) => {
    const url = process.env["SUPABASE_URL"];
    const key = process.env["SUPABASE_PUBLISHABLE_KEY"];
    if (!url || !key) throw new Error("Service indisponible");

    const supabase = createClient<Database>(url, key, {
      auth: { persistSession: false },
      global: {
        fetch: (input, init) => {
          const h = new Headers(init?.headers);
          if (key.startsWith("sb_") && h.get("Authorization") === `Bearer ${key}`) {
            h.delete("Authorization");
          }
          h.set("apikey", key);
          return fetch(input, { ...init, headers: h });
        },
      },
    });

    const { error } = await supabase.from("quote_requests").insert(data);
    if (error) {
      console.error("quote insert failed", error);
      throw new Error("La demande n'a pas pu être enregistrée");
    }
    return { ok: true as const };
  });
