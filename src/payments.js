// ─── RM Korean — To'lov sozlamalari ─────────────────────────────
// Pul SIZNING kartangizga tushishi uchun:
/// 1. Admin panel (/admin → "To'lov sozlamalari") ga kartangizni kiriting,
//    yoki pastdagi receiveCard ni to'ldiring.
// 2. Hozir DEMO rejim (mock payment) — test uchun ishlaydi.
// 3. HAQIQIY pul qabul qilish uchun Click/Payme da merchant bo'ling:
//    • Click: business.click.uz → servis yarating → merchant ID + secret oling
//    • Payme: business.payme.uz → merchant ID + key oling
//    Keyin pastdagi clickMerchantId / paymeMerchantId ni to'ldiring va
//    PaymentModal dagi mockPay() ni real API so'roviga almashtiring.

export const PAYMENT_METHODS = [
  { id: 'click', name: 'Click', icon: '💙', hint: 'Click orqali to‘lash' },
  { id: 'payme', name: 'Payme', icon: '💚', hint: 'Payme orqali to‘lash' },
  { id: 'uzum', name: 'Uzum Bank', icon: '💜', hint: 'Uzum Bank orqali' },
  { id: 'card', name: 'Karta', icon: '💳', hint: 'Istalgan Uzcard/Humo karta' },
];

export const paymentConfig = {
  mode: 'demo', // 'demo' | 'live'
  receiveCard: '', // masalan: "8600 1234 5678 9012" — Admin panelda ham o'zgartirish mumkin
  clickMerchantId: '',
  paymeMerchantId: '',
  currency: "so'm",
};

export const fmt = (n) => n.toLocaleString('uz-UZ') + " so'm";
