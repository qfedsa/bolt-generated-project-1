import { useState } from 'react';
import { 
  Calendar, 
  MessageSquare, 
  BarChart3, 
  FileText, 
  Users, 
  Clock, 
  TrendingUp, 
  ChevronRight, 
  ListTodo, 
  AlertTriangle, 
  Send, 
  ArrowRight, 
  Download, 
  Layout, 
  Shield, 
  HelpCircle, 
  Zap, 
  Database, 
  X, 
  Mail,
  Sparkles,
  Info
} from 'lucide-react';
import ROICalculator from './components/ROICalculator';
import ContactForm from './components/ContactForm';
import NewsletterForm from './components/NewsletterForm';
import AboutUsModal from './components/AboutUsModal';
import TermsModal from './components/TermsModal';
import PrivacyModal from './components/PrivacyModal';
import ImprintModal from './components/ImprintModal';
import { FAQ } from './components/FAQ';
import { RoadmapCard } from './components/RoadmapCard';

function App() {
  const [isROICalculatorOpen, setIsROICalculatorOpen] = useState(false);
  const [isContactFormOpen, setIsContactFormOpen] = useState(false);
  const [isAboutUsOpen, setIsAboutUsOpen] = useState(false);
  const [isTermsOpen, setIsTermsOpen] = useState(false);
  const [isImprintOpen, setIsImprintOpen] = useState(false);
  const [isPrivacyOpen, setIsPrivacyOpen] = useState(false);

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Early Access Banner */}
      <div className="bg-gradient-to-r from-blue-600 to-blue-500 text-white">
        <div className="container mx-auto px-4 py-2 flex items-center justify-center gap-2 text-sm">
          <Sparkles className="w-4 h-4" />
          <span className="font-medium">Early Access Phase</span>
          <span className="hidden sm:inline">•</span>
          <span className="hidden sm:inline">Sichern Sie sich jetzt Vorzugskonditionen als Early Adopter</span>
        </div>
      </div>

      {/* Header section */}
      <header className="bg-gradient-to-r from-blue-900 to-blue-700 text-white relative">
        <nav className="container mx-auto px-4 sm:px-6 py-4 flex justify-between items-center">
          <div>
            <span className="text-3xl font-bold">∞</span>
          </div>
          <div className="flex items-center gap-4">
            <button
              onClick={() => setIsAboutUsOpen(true)}
              className="flex items-center gap-2 px-4 py-2 rounded-lg bg-white/10 hover:bg-white/20 transition-colors"
            >
              <Info className="w-4 h-4" />
              <span>Über uns</span>
            </button>
          </div>
        </nav>
        
        <div className="container mx-auto px-4 sm:px-6 py-12 sm:py-24 grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-start">
          <div>
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-6">
              Revolutionieren Sie Ihr Projektmanagement
            </h1>
            <p className="text-lg sm:text-xl mb-8 text-blue-100">
              Reduzieren Sie Projektlaufzeiten um bis zu 30% durch automatisierte Prozesse, Echtzeit-Überwachung und intelligentes Verzögerungsmanagement.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <button 
                onClick={() => setIsContactFormOpen(true)}
                className="bg-white text-blue-900 px-8 py-3 rounded-lg font-semibold hover:bg-blue-50 transition flex items-center justify-center gap-2"
              >
                <span>Early Access anfragen</span>
                <Sparkles className="w-4 h-4" />
              </button>
            </div>
            <p className="text-blue-200 text-sm mt-4">
              ✓ Exklusiver Zugang zur Beta-Version
              <br />
              ✓ Sonderkonditionen für Early Adopter
              <br />
              ✓ Direkter Einfluss auf die Produktentwicklung
            </p>
          </div>

          {/* Embedded ROI Calculator */}
          <div className="bg-white/10 backdrop-blur-sm p-6 rounded-xl">
            <h3 className="text-xl font-semibold mb-4">Berechnen Sie Ihr Einsparpotenzial</h3>
            <div className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-white/90 mb-1">
                  Anzahl der Mitarbeiter im Projektmanagement
                </label>
                <input
                  type="number"
                  min="1"
                  className="w-full px-4 py-2 bg-white/20 border border-white/30 rounded-lg focus:ring-2 focus:ring-white/50 focus:border-transparent transition-shadow text-white placeholder-white/50"
                  placeholder="z.B. 5"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-white/90 mb-1">
                  Durchschnittlicher Stundensatz (€)
                </label>
                <input
                  type="number"
                  min="1"
                  className="w-full px-4 py-2 bg-white/20 border border-white/30 rounded-lg focus:ring-2 focus:ring-white/50 focus:border-transparent transition-shadow text-white placeholder-white/50"
                  placeholder="z.B. 80"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-white/90 mb-1">
                  Anzahl der Projekte pro Jahr
                </label>
                <input
                  type="number"
                  min="1"
                  className="w-full px-4 py-2 bg-white/20 border border-white/30 rounded-lg focus:ring-2 focus:ring-white/50 focus:border-transparent transition-shadow text-white placeholder-white/50"
                  placeholder="z.B. 12"
                />
              </div>
              <button 
                onClick={() => setIsROICalculatorOpen(true)}
                className="w-full bg-white/20 hover:bg-white/30 border border-white/30 text-white px-6 py-3 rounded-lg font-semibold transition-colors"
              >
                Detaillierte Berechnung
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* Core Features Section */}
      <section id="features" className="py-12 sm:py-24 bg-white">
        <div className="container mx-auto px-4 sm:px-6">
          <h2 className="text-2xl sm:text-3xl font-bold text-center mb-4">Kernfunktionen</h2>
          <p className="text-gray-600 text-center mb-8 sm:mb-12 max-w-2xl mx-auto">
            Entdecken Sie die Werkzeuge, die Ihr Projektmanagement auf das nächste Level heben
          </p>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-4 sm:gap-6 max-w-7xl mx-auto">
            <div className="bg-white p-6 rounded-xl shadow-sm hover:shadow-lg transition duration-300">
              <div className="flex items-center mb-3">
                <div className="p-2 bg-blue-50 rounded-lg mr-3">
                  <Layout className="w-6 h-6 text-blue-600" />
                </div>
                <h3 className="text-lg font-semibold">Flexible Ansichten</h3>
              </div>
              <p className="text-gray-600 text-sm">Timeline, Kanban oder Matrix - wählen Sie die perfekte Ansicht für Ihre Projektübersicht</p>
            </div>
            <div className="bg-white p-6 rounded-xl shadow-sm hover:shadow-lg transition duration-300">
              <div className="flex items-center mb-3">
                <div className="p-2 bg-blue-50 rounded-lg mr-3">
                  <ListTodo className="w-6 h-6 text-blue-600" />
                </div>
                <h3 className="text-lg font-semibold">Aufgabenverwaltung</h3>
              </div>
              <p className="text-gray-600 text-sm">Erstellen und verwalten Sie Aufgaben mit intelligenter Abhängigkeitssteuerung</p>
            </div>
            <div className="bg-white p-6 rounded-xl shadow-sm hover:shadow-lg transition duration-300">
              <div className="flex items-center mb-3">
                <div className="p-2 bg-blue-50 rounded-lg mr-3">
                  <Users className="w-6 h-6 text-blue-600" />
                </div>
                <h3 className="text-lg font-semibold">Subunternehmer</h3>
              </div>
              <p className="text-gray-600 text-sm">Zentrale Verwaltung aller Gewerke und Kontakte mit direkter Kommunikation</p>
            </div>
            <div className="bg-white p-6 rounded-xl shadow-sm hover:shadow-lg transition duration-300">
              <div className="flex items-center mb-3">
                <div className="p-2 bg-blue-50 rounded-lg mr-3">
                  <AlertTriangle className="w-6 h-6 text-blue-600" />
                </div>
                <h3 className="text-lg font-semibold">Verzögerungsmanagement</h3>
              </div>
              <p className="text-gray-600 text-sm">Automatische Neuberechnung und Benachrichtigung bei Verzögerungen</p>
            </div>
            <div className="bg-white p-6 rounded-xl shadow-sm hover:shadow-lg transition duration-300">
              <div className="flex items-center mb-3">
                <div className="p-2 bg-blue-50 rounded-lg mr-3">
                  <ArrowRight className="w-6 h-6 text-blue-600" />
                </div>
                <h3 className="text-lg font-semibold">Aufgabenverschiebung</h3>
              </div>
              <p className="text-gray-600 text-sm">Intelligente Anpassung des Zeitplans mit automatischer Benachrichtigung</p>
            </div>
            <div className="bg-white p-6 rounded-xl shadow-sm hover:shadow-lg transition duration-300">
              <div className="flex items-center mb-3">
                <div className="p-2 bg-blue-50 rounded-lg mr-3">
                  <MessageSquare className="w-6 h-6 text-blue-600" />
                </div>
                <h3 className="text-lg font-semibold">Kommunikation</h3>
              </div>
              <p className="text-gray-600 text-sm">Integrierte Nachrichtenfunktion mit E-Mail-Benachrichtigungen</p>
            </div>
            <div className="bg-white p-6 rounded-xl shadow-sm hover:shadow-lg transition duration-300">
              <div className="flex items-center mb-3">
                <div className="p-2 bg-blue-50 rounded-lg mr-3">
                  <BarChart3 className="w-6 h-6 text-blue-600" />
                </div>
                <h3 className="text-lg font-semibold">Workflow-Monitor</h3>
              </div>
              <p className="text-gray-600 text-sm">Behalten Sie alle Systemaktivitäten und Nachrichten im Blick</p>
            </div>
            <div className="bg-white p-6 rounded-xl shadow-sm hover:shadow-lg transition duration-300">
              <div className="flex items-center mb-3">
                <div className="p-2 bg-blue-50 rounded-lg mr-3">
                  <FileText className="w-6 h-6 text-blue-600" />
                </div>
                <h3 className="text-lg font-semibold">PDF-Export</h3>
              </div>
              <p className="text-gray-600 text-sm">Exportieren Sie Projektübersichten und Zeitpläne mit einem Klick</p>
            </div>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-12 sm:py-16 bg-gray-50">
        <div className="container mx-auto px-4 sm:px-6">
          <h2 className="text-2xl sm:text-3xl font-bold text-center mb-4">Ihre Vorteile</h2>
          <p className="text-gray-600 text-center mb-8 sm:mb-12 max-w-2xl mx-auto">
            Mit Infinity Automation optimieren Sie Ihr Projektmanagement und sparen wertvolle Zeit
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 sm:gap-8 max-w-5xl mx-auto">
            <div className="text-center">
              <div className="inline-block p-3 bg-blue-100 rounded-full mb-4">
                <Clock className="w-6 h-6 text-blue-600" />
              </div>
              <h3 className="text-lg font-semibold mb-2">30% Zeitersparnis</h3>
              <p className="text-gray-600">
                Automatisierte Prozesse reduzieren den Verwaltungsaufwand erheblich
              </p>
            </div>

            <div className="text-center">
              <div className="inline-block p-3 bg-blue-100 rounded-full mb-4">
                <TrendingUp className="w-6 h-6 text-blue-600" />
              </div>
              <h3 className="text-lg font-semibold mb-2">Höhere Effizienz</h3>
              <p className="text-gray-600">
                Schnellere Reaktionen auf Änderungen durch automatische Benachrichtigungen
              </p>
            </div>

            <div className="text-center">
              <div className="inline-block p-3 bg-blue-100 rounded-full mb-4">
                <Zap className="w-6 h-6 text-blue-600" />
              </div>
              <h3 className="text-lg font-semibold mb-2">Weniger Fehler</h3>
              <p className="text-gray-600">
                Automatische Berechnungen und Anpassungen minimieren manuelle Fehler
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Roadmap Section */}
      <section id="roadmap" className="py-12 sm:py-24 bg-gray-50">
        <div className="container mx-auto px-4 sm:px-6">
          <h2 className="text-2xl sm:text-3xl font-bold text-center mb-4">Unsere Vision</h2>
          <p className="text-gray-600 text-center mb-8 max-w-3xl mx-auto">
            Wir entwickeln Infinity Automation kontinuierlich weiter, um Ihnen ein immer leistungsfähigeres Werkzeug für Ihr Projektmanagement zu bieten.
          </p>

          <div className="max-w-4xl mx-auto grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6">
            <RoadmapCard 
              title="Mehrfachabhängigkeiten"
              status="Priorität"
              description="Entdecken Sie die nächste Generation der Projektplanung - Verwalten Sie selbst komplexeste Abhängigkeiten mühelos"
            />
            <RoadmapCard 
              title="Mobile Zeiterfassung"
              status="in Entwicklung"
              description="Revolutionieren Sie Ihre Zeiterfassung - Schnell, präzise und direkt von jedem Ort der Baustelle"
            />
            <RoadmapCard 
              title="Reporting und Analyse"
              status="geplant"
              description="Erschließen Sie verborgene Potenziale durch maßgeschneiderte Auswertungen und strategische Erkenntnisse"
            />
            <RoadmapCard 
              title="Dokumentenmanagement"
              status="geplant"
              description="Erleben Sie die Zukunft der Dokumentenverwaltung - Intelligent, vernetzt und immer griffbereit"
            />
            <RoadmapCard 
              title="Kostenmanagement"
              status="geplant"
              description="Steuern Sie Ihre Projektkosten mit beispielloser Präzision und vorausschauender Kontrolle"
            />
            <RoadmapCard 
              title="Risikobewertung"
              status="geplant"
              description="Nutzen Sie die Macht modernster Algorithmen für eine präzise Vorhersage potenzieller Projektrisiken"
            />
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <FAQ />

      {/* Newsletter Section */}
      <section className="py-12 sm:py-16 bg-gray-50">
        <div className="container mx-auto px-4 sm:px-6">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-8">
              <h2 className="text-2xl sm:text-3xl font-bold mb-4">Bleiben Sie auf dem Laufenden</h2>
              <p className="text-gray-600">
                Abonnieren Sie unseren Newsletter und erhalten Sie exklusive Einblicke in die Zukunft des Projektmanagements
              </p>
            </div>

            <div className="bg-white rounded-xl shadow-sm">
              <div className="grid md:grid-cols-2">
                <div className="p-6">
                  <h3 className="flex items-center text-lg font-semibold mb-4 text-gray-900">
                    <Mail className="w-5 h-5 text-blue-600 mr-2" />
                    Newsletter Vorteile
                  </h3>
                  <ul className="space-y-3">
                    <li className="flex items-start">
                      <ArrowRight className="w-5 h-5 text-blue-600 mr-2 flex-shrink-0 mt-0.5" />
                      <span className="text-gray-700">Frühzeitige Updates zu neuen Funktionen</span>
                    </li>
                    <li className="flex items-start">
                      <ArrowRight className="w-5 h-5 text-blue-600 mr-2 flex-shrink-0 mt-0.5" />
                      <span className="text-gray-700">Exklusive Einblicke in unsere Produktentwicklung</span>
                    </li>
                    <li className="flex items-start">
                      <ArrowRight className="w-5 h-5 text-blue-600 mr-2 flex-shrink-0 mt-0.5" />
                      <span className="text-gray-700">Detaillierte Roadmap-Updates</span>
                    </li>
                    <li className="flex items-start">
                      <ArrowRight className="w-5 h-5 text-blue-600 mr-2 flex-shrink-0 mt-0.5" />
                      <span className="text-gray-700">Sparen Sie 10% auf Ihr erstes Monatsabo</span>
                    </li>
                    <li className="flex items-start">
                      <ArrowRight className="w-5 h-5 text-blue-600 mr-2 flex-shrink-0 mt-0.5" />
                      <span className="text-gray-700">Aktuelle News zur Digitalisierung in der Baubranche</span>
                    </li>
                  </ul>
                </div>

                <div className="p-6 bg-white border-t md:border-t-0 md:border-l border-gray-100">
                  <h3 className="text-lg font-semibold mb-4">Newsletter anmelden</h3>
                  <NewsletterForm />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer id="contact" className="bg-gray-900 text-gray-400 py-12">
        <div className="container mx-auto px-4 sm:px-6">
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
            <div>
              <span className="text-3xl font-bold text-white">∞</span>
              <p className="mt-4">Professionelle Projektmanagement Software für die Baubranche</p>
            </div>
            <div>
              <h3 className="text-white text-lg font-semibold mb-4">Kontakt</h3>
              <p>info@infinity-automation.eu</p>
              <p>+43 677 62495730</p>
            </div>
            <div>
              <h3 className="text-white text-lg font-semibold mb-4">Links</h3>
              <ul className="space-y-2">
                <li><button onClick={() => setIsTermsOpen(true)} className="hover:text-white">AGB</button></li>
                <li><button onClick={() => setIsPrivacyOpen(true)} className="hover:text-white">Datenschutz</button></li>
                <li><button onClick={() => setIsImprintOpen(true)} className="hover:text-white">Impressum</button></li>
              </ul>
            </div>
          </div>
          <div className="border-t border-gray-800 mt-8 pt-8 text-center">
            <p>&copy; {new Date().getFullYear()} Infinity Automation. Alle Rechte vorbehalten.</p>
          </div>
        </div>
      </footer>

      {/* Modals */}
      <ContactForm 
        isOpen={isContactFormOpen}
        onClose={() => setIsContactFormOpen(false)}
      />

      {isROICalculatorOpen && (
        <ROICalculator 
          isOpen={isROICalculatorOpen} 
          onClose={() => setIsROICalculatorOpen(false)} 
        />
      )}

      <AboutUsModal
        isOpen={isAboutUsOpen}
        onClose={() => setIsAboutUsOpen(false)}
      />

      <TermsModal
        isOpen={isTermsOpen}
        onClose={() => setIsTermsOpen(false)}
      />

      <ImprintModal
        isOpen={isImprintOpen}
        onClose={() => setIsImprintOpen(false)}
      />

      <PrivacyModal
        isOpen={isPrivacyOpen}
        onClose={() => setIsPrivacyOpen(false)}
      />
    </div>
  );
}

export default App;
