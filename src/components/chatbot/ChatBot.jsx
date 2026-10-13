import { useEffect, useRef, useState } from "react";
import { findAnswer, GREETING, SUGGESTIONS } from "./faq";
import {MessageCircleMore} from 'lucide-react'
// Change "blue" to any Tailwind color to match your portfolio
const focusRing =
  "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2 dark:focus-visible:ring-offset-slate-900";

const chipClass = `rounded-full border border-slate-300 px-3 py-1.5 text-left text-[13px] hover:border-blue-500 hover:text-blue-600 dark:border-slate-600 dark:hover:border-blue-400 dark:hover:text-blue-400 ${focusRing}`;

export default function ChatBot() {
  const [open, setOpen] = useState(false);
  const [messages, setMessages] = useState([{ from: "bot", text: GREETING, suggestions: SUGGESTIONS }]);
  const [input, setInput] = useState("");
  const [typing, setTyping] = useState(false);

  const endRef = useRef(null);
  const inputRef = useRef(null);
  const timerRef = useRef(null);

  useEffect(() => {
    endRef.current?.scrollIntoView({ behavior: "smooth", block: "end" });
  }, [messages, typing, open]);

  useEffect(() => {
    if (open) inputRef.current?.focus();
  }, [open]);

  useEffect(() => {
    if (!open) return;
    const onKey = (e) => e.key === "Escape" && setOpen(false);
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [open]);

  useEffect(() => () => clearTimeout(timerRef.current), []);

  const send = (raw) => {
    const text = raw.trim();
    if (!text || typing) return;

    // chips from older messages disappear once the user moves on
    setMessages((m) => [...m.map((x) => ({ ...x, suggestions: undefined })), { from: "user", text }]);
    setInput("");
    setTyping(true);

    timerRef.current = setTimeout(() => {
      const r = findAnswer(text);
      setMessages((m) => [...m, { from: "bot", text: r.answer, link: r.link, suggestions: r.suggestions }]);
      setTyping(false);
    }, 450);
  };

  return (
    <div className="fixed bottom-3 right-3 z-[9999] sm:bottom-5 sm:right-5">
      {open && (
        <section
          role="dialog"
          aria-label="Portfolio assistant"
          className="mb-3 flex h-[480px] max-h-[calc(100vh-110px)] w-[calc(100vw-24px)] origin-bottom-right flex-col overflow-hidden rounded-2xl border border-slate-200 bg-white text-slate-900 shadow-2xl sm:w-[360px] dark:border-slate-700 dark:bg-slate-900 dark:text-slate-100"
        >
          <header className="flex items-center justify-between bg-violet-700 px-4 py-3 text-white">
            <span className="text-[15px] font-semibold">Ask about my work</span>
            <button
              onClick={() => setOpen(false)}
              aria-label="Close chat"
              className={`cursor-pointer rounded-md p-1 hover:bg-white/15 ${focusRing}`}
            >
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
                <path d="M6 6l12 12M18 6L6 18" />
              </svg>
            </button>
          </header>

          <div role="log" aria-live="polite" className="flex flex-1 flex-col gap-2.5 overflow-y-auto p-3.5">
            {messages.map((m, i) => (
              <div key={i} className="flex flex-col gap-2">
                <div
                  className={`max-w-[85%] rounded-xl px-3 py-2 text-sm leading-relaxed ${
                    m.from === "user"
                      ? "self-end rounded-br-sm bg-blue-600 text-white"
                      : "self-start rounded-bl-sm bg-slate-100 dark:bg-slate-800"
                  }`}
                >
                  <p className="whitespace-pre-line">{m.text}</p>
                  {m.link && (
                    <a
                      href={m.link.href}
                      className={`mt-1.5 inline-block text-[13px] font-semibold text-blue-600 hover:underline dark:text-blue-400 ${focusRing}`}
                    >
                      {m.link.label}
                    </a>
                  )}
                </div>

                {m.suggestions && (
                  <div className="flex flex-wrap gap-1.5">
                    {m.suggestions.map((s) => (
                      <button key={s} onClick={() => send(s)} className={chipClass}>
                        {s}
                      </button>
                    ))}
                  </div>
                )}
              </div>
            ))}

            {typing && (
              <div
                aria-label="Assistant is typing"
                className="flex w-fit items-center gap-1 self-start rounded-xl rounded-bl-sm bg-slate-100 px-3 py-3 dark:bg-slate-800"
              >
                {[0, 150, 300].map((d) => (
                  <span
                    key={d}
                    style={{ animationDelay: `${d}ms` }}
                    className="h-1.5 w-1.5 animate-bounce rounded-full bg-slate-400 motion-reduce:animate-none"
                  />
                ))}
              </div>
            )}
            <div ref={endRef} />
          </div>

          <div className="flex gap-2 border-t border-slate-200 p-2.5 dark:border-slate-700">
            <input
              ref={inputRef}
              value={input}
              onChange={(e) => setInput(e.target.value)}
              onKeyDown={(e) => e.key === "Enter" && send(input)}
              placeholder="Type a question"
              aria-label="Your message"
              className="min-w-0 flex-1 rounded-lg border border-slate-300 bg-white px-3 py-2 text-sm text-slate-900 placeholder:text-slate-400 focus:border-blue-500 focus:outline-none focus:ring-1 focus:ring-blue-500 dark:border-slate-600 dark:bg-slate-900 dark:text-slate-100"
            />
            <button
              onClick={() => send(input)}
              disabled={!input.trim() || typing}
              className={`rounded-lg bg-violet-600 px-3.5 text-sm font-semibold text-white hover:bg-blue-700 disabled:cursor-not-allowed disabled:opacity-45 ${focusRing}`}
            >
              Send
            </button>
          </div>
        </section>
      )}

      <button
        onClick={() => setOpen((o) => !o)}
        aria-label={open ? "Close chat" : "Open chat"}
        aria-expanded={open}
        className={`cursor-pointer ml-auto grid h-14 w-14 place-items-center rounded-full bg-violet-600 text-white shadow-lg hover:bg-blue-700 ${focusRing}`}
      >
        <MessageCircleMore/>
      </button>
    </div>
  );
}