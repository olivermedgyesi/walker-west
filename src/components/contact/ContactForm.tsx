"use client";

import { useState } from "react";

const helpOptions = [
  "Corporate event",
  "Non-profit event",
  "Private event",
  "Venue consulting",
  "Catering consulting",
  "Something else",
];

const eventOptions = ["Corporate event", "Non-profit event", "Private event"];

const field =
  "mt-2 w-full border-0 border-b border-espresso/30 bg-transparent px-0 py-3 text-base text-espresso placeholder:text-espresso/40 focus:border-espresso focus:outline-none focus:ring-0";
const label = "font-caps text-xs uppercase tracking-[0.2em] text-espresso/75";

type Status = "idle" | "sending" | "sent" | "error";

export function ContactForm() {
  const [help, setHelp] = useState("");
  const [status, setStatus] = useState<Status>("idle");
  const isEvent = eventOptions.includes(help);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setStatus("sending");

    const data = Object.fromEntries(new FormData(e.currentTarget));

    try {
      const res = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify({
          access_key: process.env.NEXT_PUBLIC_WEB3FORMS_KEY,
          subject: `New inquiry: ${data["What can we help with?"]}`,
          from_name: "Walker & West website",
          ...data,
        }),
      });
      const result = await res.json();
      setStatus(result.success ? "sent" : "error");
    } catch {
      setStatus("error");
    }
  };

  if (status === "sent") {
    return (
      <div role="status" className="border-t border-espresso/20 pt-10">
        <p className="font-display text-3xl leading-snug">
          Thanks for reaching out. Brittany will be in touch soon.
        </p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-8">
      <input
        type="checkbox"
        name="botcheck"
        tabIndex={-1}
        autoComplete="off"
        className="hidden"
      />

      <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
        <label className="block">
          <span className={label}>Name</span>
          <input name="name" required autoComplete="name" className={field} />
        </label>
        <label className="block">
          <span className={label}>Email</span>
          <input
            name="email"
            type="email"
            required
            autoComplete="email"
            className={field}
          />
        </label>
        <label className="block">
          <span className={label}>Phone (optional)</span>
          <input name="Phone" type="tel" autoComplete="tel" className={field} />
        </label>
        <label className="block">
          <span className={label}>Organization (optional)</span>
          <input
            name="Organization"
            autoComplete="organization"
            className={field}
          />
        </label>
      </div>

      <label className="block">
        <span className={label}>What can we help with?</span>
        <select
          name="What can we help with?"
          required
          value={help}
          onChange={(e) => setHelp(e.target.value)}
          className={`${field} cursor-pointer`}
        >
          <option value="" disabled />
          {helpOptions.map((option) => (
            <option key={option}>{option}</option>
          ))}
        </select>
      </label>

      {isEvent && (
        <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
          <label className="block">
            <span className={label}>Event date or rough timing (optional)</span>
            <input name="Event date or rough timing" className={field} />
          </label>
          <label className="block">
            <span className={label}>Estimated guest count (optional)</span>
            <input name="Estimated guest count" className={field} />
          </label>
          <label className="block">
            <span className={label}>Estimated event budget (optional)</span>
            <input name="Estimated event budget" className={field} />
          </label>
        </div>
      )}

      <label className="block">
        <span className={label}>Tell us about it</span>
        <textarea
          name="Tell us about it"
          required
          rows={5}
          className={`${field} resize-y`}
        />
      </label>

      {status === "error" && (
        <p role="alert" className="text-sm text-espresso">
          Something went wrong sending your message. Please try again, or
          email{" "}
          <a href="mailto:hello@walkerwestevents.com" className="underline">
            hello@walkerwestevents.com
          </a>
          .
        </p>
      )}

      <button
        type="submit"
        disabled={status === "sending"}
        className="inline-flex items-center justify-center bg-espresso px-10 py-4 font-caps text-xs uppercase tracking-[0.22em] text-cream transition-colors duration-300 hover:bg-sage disabled:opacity-60"
      >
        Send to Brittany
      </button>
    </form>
  );
}
