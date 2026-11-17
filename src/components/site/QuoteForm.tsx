import { useEffect, useState, type FormEvent } from "react";
import { useServerFn } from "@tanstack/react-start";
import { CheckCircle2, Loader2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { ACTIVITIES, FORMULES, quoteSchema } from "@/lib/quote-schema";
import { submitQuoteRequest } from "@/lib/quote.functions";
import { cn } from "@/lib/utils";

export type QuotePrefill = { formule?: string | undefined; activity?: string | undefined; nonce: number };

const field =
  "mt-1.5 block w-full rounded-xl border border-input bg-card px-4 py-3 text-base text-foreground outline-none transition-colors placeholder:text-muted-foreground/70 focus:border-primary focus:ring-2 focus:ring-primary/20";
const label = "text-sm font-semibold";

export function QuoteForm({ prefill }: { prefill: QuotePrefill | null }) {
  const submit = useServerFn(submitQuoteRequest);
  const [formule, setFormule] = useState<string>("");
  const [activity, setActivity] = useState<string>("");
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [status, setStatus] = useState<"idle" | "sending" | "sent" | "error">("idle");

  useEffect(() => {
    if (!prefill) return;
    if (prefill.formule) setFormule(prefill.formule);
    if (prefill.activity) setActivity(prefill.activity);
  }, [prefill]);

  async function onSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const fd = new FormData(e.currentTarget);
    const raw = Object.fromEntries(fd.entries());
    const parsed = quoteSchema.safeParse(raw);
    if (!parsed.success) {
      const next: Record<string, string> = {};
      for (const issue of parsed.error.issues) {
        const key = String(issue.path[0]);
        if (!next[key]) next[key] = issue.message;
      }
      setErrors(next);
      return;
    }
    setErrors({});
    setStatus("sending");
    try {
      await submit({ data: raw });
      setStatus("sent");
    } catch {
      setStatus("error");
    }
  }

  return (
    <section id="devis" className="scroll-mt-20 bg-primary py-20 text-primary-foreground md:py-28">
      <div className="mx-auto grid max-w-6xl gap-12 px-5 lg:grid-cols-[1fr_1.15fr]">
        <div>
          <p className="eyebrow opacity-80">Demande de devis</p>
          <h2 className="mt-3 text-4xl font-extrabold leading-[1.02] sm:text-6xl">
            Parlons de <span className="font-accent">votre</span> site.
          </h2>
          <p className="mt-5 max-w-md text-lg leading-relaxed opacity-90">
            Dites-moi en quelques mots qui vous êtes et ce dont vous avez besoin. Je reviens vers
            vous avec une proposition claire, sans engagement.
          </p>
          <ul className="mt-8 space-y-3 text-base">
            {["Devis gratuit et sans engagement", "Une maquette avant de valider", "Un seul interlocuteur du début à la fin"].map((t) => (
              <li key={t} className="flex items-center gap-3">
                <CheckCircle2 className="size-5 shrink-0" /> {t}
              </li>
            ))}
          </ul>
        </div>

        <div className="rounded-3xl bg-background p-6 text-foreground shadow-[var(--shadow-lift)] sm:p-8">
          {status === "sent" ? (
            <div className="flex min-h-[420px] flex-col items-center justify-center text-center">
              <CheckCircle2 className="size-14 text-primary" />
              <h3 className="mt-5 text-3xl font-extrabold">Merci, c'est envoyé !</h3>
              <p className="mt-3 max-w-sm text-muted-foreground">
                Votre demande est bien arrivée. Je vous recontacte très vite pour en parler.
              </p>
              <Button variant="line" className="mt-8 h-11 px-6" onClick={() => setStatus("idle")}>
                Envoyer une autre demande
              </Button>
            </div>
          ) : (
            <form onSubmit={onSubmit} noValidate className="grid gap-5 sm:grid-cols-2">
              <div>
                <label htmlFor="name" className={label}>Votre nom *</label>
                <input id="name" name="name" autoComplete="name" maxLength={120} className={field} placeholder="Julie Martin" />
                {errors["name"] && <p className="mt-1 text-sm text-destructive">{errors["name"]}</p>}
              </div>
              <div>
                <label htmlFor="company" className={label}>Entreprise</label>
                <input id="company" name="company" autoComplete="organization" maxLength={160} className={field} placeholder="Le Comptoir" />
              </div>
              <div>
                <label htmlFor="email" className={label}>Email *</label>
                <input id="email" name="email" type="email" autoComplete="email" maxLength={255} className={field} placeholder="julie@exemple.fr" />
                {errors["email"] && <p className="mt-1 text-sm text-destructive">{errors["email"]}</p>}
              </div>
              <div>
                <label htmlFor="phone" className={label}>Téléphone</label>
                <input id="phone" name="phone" type="tel" autoComplete="tel" maxLength={40} className={field} placeholder="06 00 00 00 00" />
              </div>
              <div>
                <label htmlFor="activity" className={label}>Votre activité *</label>
                <select id="activity" name="activity" value={activity} onChange={(e) => setActivity(e.target.value)} className={cn(field, "appearance-none")}>
                  <option value="" disabled>Choisir…</option>
                  {ACTIVITIES.map((a) => <option key={a} value={a}>{a}</option>)}
                </select>
                {errors["activity"] && <p className="mt-1 text-sm text-destructive">{errors["activity"]}</p>}
              </div>
              <div>
                <label htmlFor="formule" className={label}>Formule *</label>
                <select id="formule" name="formule" value={formule} onChange={(e) => setFormule(e.target.value)} className={cn(field, "appearance-none")}>
                  <option value="" disabled>Choisir…</option>
                  {FORMULES.map((f) => <option key={f} value={f}>{f}</option>)}
                </select>
                {errors["formule"] && <p className="mt-1 text-sm text-destructive">{errors["formule"]}</p>}
              </div>
              <div className="sm:col-span-2">
                <label htmlFor="message" className={label}>Votre projet</label>
                <textarea id="message" name="message" rows={4} maxLength={2000} className={field} placeholder="J'aimerais un site avec ma carte et la réservation en ligne…" />
              </div>
              <div className="sm:col-span-2">
                <Button type="submit" variant="ink" size="xl" className="w-full" disabled={status === "sending"}>
                  {status === "sending" ? <><Loader2 className="animate-spin" /> Envoi…</> : "Envoyer ma demande"}
                </Button>
                {status === "error" && (
                  <p className="mt-3 text-center text-sm text-destructive">
                    L'envoi n'a pas fonctionné. Réessayez dans un instant.
                  </p>
                )}
              </div>
            </form>
          )}
        </div>
      </div>
    </section>
  );
}
