import { X } from 'lucide-react';

interface TermsModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function TermsModal({ isOpen, onClose }: TermsModalProps) {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black/50 flex items-start justify-center z-50 p-4 backdrop-blur-sm overflow-y-auto">
      <div className="bg-white rounded-xl p-6 w-full max-w-4xl shadow-xl my-8 relative">
        <div className="sticky top-0 bg-white pt-2 pb-4 border-b mb-6 z-10">
          <div className="flex justify-between items-center">
            <h2 className="text-2xl font-bold text-gray-900">Allgemeine Geschäftsbedingungen</h2>
            <button
              onClick={onClose}
              className="p-2 hover:bg-gray-100 rounded-full transition-colors"
              aria-label="Schließen"
            >
              <X className="w-6 h-6" />
            </button>
          </div>
        </div>

        <div className="prose max-w-none space-y-6 text-gray-600">
          <section>
            <h3 className="text-xl font-semibold text-gray-900">§1 Geltungsbereich</h3>
            <p>1.1 Diese Allgemeinen Geschäftsbedingungen (nachfolgend "AGB") gelten für alle Verträge zwischen der Infinity Automation (nachfolgend "Anbieter") und ihren Kunden (nachfolgend "Nutzer") über die Nutzung der Projektmanagement-Software "Infinity Automation" (nachfolgend "Software").</p>
            <p>1.2 Abweichende Geschäftsbedingungen des Nutzers finden keine Anwendung, es sei denn, der Anbieter stimmt ihrer Geltung ausdrücklich schriftlich zu.</p>
          </section>

          <section>
            <h3 className="text-xl font-semibold text-gray-900">§2 Vertragsgegenstand</h3>
            <p>2.1 Gegenstand des Vertrags ist die Bereitstellung der Software zur Nutzung über das Internet im Wege des Software-as-a-Service (SaaS).</p>
            <p>2.2 Die Software dient dem Projektmanagement in der Baubranche.</p>
          </section>

          <section>
            <h3 className="text-xl font-semibold text-gray-900">§3 Vertragsschluss</h3>
            <p>3.1 Die Darstellung der Software auf der Website stellt kein rechtlich bindendes Angebot dar.</p>
            <p>3.2 Der Vertrag kommt durch die Registrierung des Nutzers und die Bestätigung durch den Anbieter zustande.</p>
          </section>

          <section>
            <h3 className="text-xl font-semibold text-gray-900">§4 Leistungsumfang</h3>
            <p>4.1 Der Anbieter stellt dem Nutzer die Software in der jeweils aktuellen Version über das Internet zur Nutzung zur Verfügung.</p>
            <p>4.2 Der Anbieter ist berechtigt, die Software kontinuierlich weiterzuentwickeln und zu verbessern.</p>
            <p>4.3 Die Verfügbarkeit der Software beträgt 98,5% im Jahresmittel.</p>
          </section>

          <section>
            <h3 className="text-xl font-semibold text-gray-900">§5 Nutzungsrechte</h3>
            <p>5.1 Der Nutzer erhält das nicht ausschließliche, nicht übertragbare, zeitlich auf die Vertragslaufzeit beschränkte Recht, die Software bestimmungsgemäß zu nutzen.</p>
            <p>5.2 Der Nutzer ist nicht berechtigt, die Software über die vereinbarte Nutzung hinaus zu nutzen.</p>
          </section>

          <section>
            <h3 className="text-xl font-semibold text-gray-900">§6 Pflichten des Nutzers</h3>
            <p>6.1 Der Nutzer ist verpflichtet, die Zugangsdaten geheim zu halten und vor dem Zugriff Dritter zu schützen.</p>
            <p>6.2 Der Nutzer wird die Software nicht missbräuchlich nutzen oder nutzen lassen.</p>
          </section>

          <section>
            <h3 className="text-xl font-semibold text-gray-900">§7 Vergütung</h3>
            <p>7.1 Die Vergütung wird individuell zwischen Anbieter und Nutzer vereinbart  und im jeweiligen Vertrag festgelegt.</p>
            <p>7.2 Die Zahlung erfolgt laut Vereinbarung.</p>
          </section>

          <section>
            <h3 className="text-xl font-semibold text-gray-900">§8 Gewährleistung</h3>
            <p>8.1 Der Anbieter gewährleistet die Funktionsfähigkeit der Software während der Vertragslaufzeit.</p>
            <p>8.2 Mängel der Software wird der Anbieter innerhalb angemessener Zeit beseitigen.</p>
          </section>

          <section>
            <h3 className="text-xl font-semibold text-gray-900">§9 Haftung</h3>
            <p>9.1 Der Anbieter haftet unbeschränkt bei Vorsatz oder grober Fahrlässigkeit.</p>
            <p>9.2 Im Übrigen ist die Haftung auf den vertragstypischen, vorhersehbaren Schaden begrenzt.</p>
          </section>

          <section>
            <h3 className="text-xl font-semibold text-gray-900">§10 Datenschutz</h3>
            <p>10.1 Der Anbieter verarbeitet personenbezogene Daten des Nutzers unter Einhaltung der datenschutzrechtlichen Bestimmungen.</p>
            <p>10.2 Details zur Datenverarbeitung sind der Datenschutzerklärung zu entnehmen.</p>
          </section>

          <section>
            <h3 className="text-xl font-semibold text-gray-900">§11 Vertragsdauer und Kündigung</h3>
            <p>11.1 Der Vertrag wird auf unbestimmte Zeit geschlossen.</p>
            <p>11.2 Der Vertrag kann von beiden Parteien jederzeit gekündigt werden.</p>
            <p>11.3 Das Recht zur außerordentlichen Kündigung aus wichtigem Grund bleibt unberührt.</p>
          </section>

          <section>
            <h3 className="text-xl font-semibold text-gray-900">§12 Schlussbestimmungen</h3>
            <p>12.1 Es gilt das Recht der Republik Österreich unter Ausschluss des UN-Kaufrechts.</p>
            <p>12.2 Erfüllungsort und Gerichtsstand ist Linz.</p>
            <p>12.3 Sollten einzelne Bestimmungen dieser AGB unwirksam sein oder werden, bleibt die Wirksamkeit der übrigen Bestimmungen unberührt.</p>
          </section>
        </div>

        <div className="sticky bottom-0 bg-white pt-4 border-t mt-8 z-10">
          <div className="flex justify-end">
            <button
              onClick={onClose}
              className="px-6 py-2.5 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors font-medium"
            >
              Schließen
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
