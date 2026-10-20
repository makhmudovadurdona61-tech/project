import { useState } from 'react';
import { PAYMENT_METHODS, paymentConfig, fmt } from '../payments.js';
import { useApp } from '../context/AppContext.jsx';

const getReceiveCard = () => {
  try {
    const s = JSON.parse(localStorage.getItem('langup-settings') || '{}');
    return s.card || paymentConfig.receiveCard || '**** **** **** ****';
  } catch { return paymentConfig.receiveCard || '**** **** **** ****'; }
};

export default function PaymentModal({ item, onClose }) {
  const { addPurchase } = useApp();
  const [method, setMethod] = useState('click');
  const [card, setCard] = useState('');
  const [exp, setExp] = useState('');
  const [busy, setBusy] = useState(false);
  const [done, setDone] = useState(false);

  if (!item) return null;

  const pay = () => {
    const digits = card.replace(/\D/g, '');
    if (digits.length !== 16) return alert('Karta raqamini to‘liq kiriting (16 ta raqam).');
    if (!/^\d{2}\/\d{2}$/.test(exp)) return alert('Amal qilish muddatini MM/YY formatda kiriting.');
    setBusy(true);
    // DEMO rejim: 1.5 soniyada "to'lov" o'tadi va kurs ochiladi.
    // LIVE rejim uchun bu yerda Click/Payme API ga so'rov yuboriladi.
    setTimeout(() => {
      addPurchase({
        itemId: item.id, title: item.title, price: item.price,
        months: item.months || 0, method, last4: digits.slice(-4),
      });
      setBusy(false);
      setDone(true);
    }, 1500);
  };

  const cardFmt = (v) => v.replace(/\D/g, '').slice(0, 16).replace(/(\d{4})(?=\d)/g, '$1 ');

  return (
    <div className="modal-bg" onClick={onClose}>
      <div className="modal" onClick={e => e.stopPropagation()}>
        {!done ? (
          <>
            <div className="row"><h3 style={{ margin: 0 }}>💳 To‘lov — {item.title}</h3><span className="spacer" />
              <button className="icon-btn" onClick={onClose}>✖</button></div>
            <h2 style={{ color: 'var(--primary)' }}>{fmt(item.price)}</h2>
            <p className="muted" style={{ fontSize: 13 }}>Qabul qiluvchi: <b>{getReceiveCard()}</b> {paymentConfig.mode === 'demo' && <span className="badge">DEMO rejim</span>}</p>
            <div className="row">
              {PAYMENT_METHODS.map(m => (
                <button key={m.id} className={method === m.id ? 'btn small' : 'btn small ghost'}
                  onClick={() => setMethod(m.id)}>{m.icon} {m.name}</button>
              ))}
            </div>
            <div className="grid" style={{ marginTop: 12 }}>
              <input className="input" placeholder="Karta raqami: 8600 0000 0000 0000" value={card}
                onChange={e => setCard(cardFmt(e.target.value))} inputMode="numeric" />
              <div className="row">
                <input className="input" placeholder="MM/YY" value={exp} style={{ maxWidth: 140 }}
                  onChange={e => setExp(e.target.value.replace(/[^\d/]/g, '').slice(0, 5))} />
                <span className="muted" style={{ fontSize: 13 }}>Uzcard / Humo</span>
              </div>
              <button className="btn" disabled={busy} onClick={pay}>
                {busy ? '⏳ To‘lov bajarilmoqda...' : `✅ ${fmt(item.price)} — To‘lash`}
              </button>
            </div>
          </>
        ) : (
          <div style={{ textAlign: 'center', padding: 10 }}>
            <div style={{ fontSize: 56 }}>🎉</div>
            <h2>To‘lov muvaffaqiyatli!</h2>
            <p className="muted">“{item.title}” siz uchun ochildi.</p>
            <button className="btn" onClick={onClose}>Davom etish →</button>
          </div>
        )}
      </div>
    </div>
  );
}
