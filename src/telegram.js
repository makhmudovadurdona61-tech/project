// ─── RM Korean — Telegram bildirishnomalar ───────────────────
// Yangi sotuv / yangi foydalanuvchi bo'lganda adminga xabar boradi.
// MUHIM: Botga Telegram da /start bosing, bo'lmasa xabar bormaydi.

export const TELEGRAM_BOT_TOKEN = "8413244030:AAHq9YrpQfW0hxf9OwmTQaV92fOYUa17Lek";
export const TELEGRAM_ADMIN_CHAT = "7722327556";

export async function sendTelegram(text) {
  if (!TELEGRAM_BOT_TOKEN || TELEGRAM_BOT_TOKEN.includes("YOUR_")) return false;
  try {
    const res = await fetch(`https://api.telegram.org/bot${TELEGRAM_BOT_TOKEN}/sendMessage`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ chat_id: TELEGRAM_ADMIN_CHAT, text, parse_mode: "HTML" }),
    });
    return res.ok;
  } catch {
    return false;
  }
}
