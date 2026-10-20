import { useApp } from '../context/AppContext.jsx'
import { t } from '../i18n.js'

export default function Footer() {
  const { uiLang } = useApp()
  return <footer><div className="container">{t(uiLang, 'footer')}</div></footer>
}
