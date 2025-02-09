import { X } from 'lucide-react';

interface PrivacyModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function PrivacyModal({ isOpen, onClose }: PrivacyModalProps) {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black/50 flex items-start justify-center z-50 p-4 backdrop-blur-sm overflow-y-auto">
      <div className="bg-white rounded-xl p-6 w-full max-w-4xl shadow-xl my-8 relative">
        <div className="sticky top-0 bg-white pt-2 pb-4 border-b mb-6 z-10">
          <div className="flex justify-between items-center">
            <h2 className="text-2xl font-bold text-gray-900">Datenschutzerklärung</h2>
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
            <h3 className="text-xl font-semibold text-gray-900">1. Datenschutz auf einen Blick</h3>
            <h4 className="text-lg font-medium text-gray-900 mt-4">Allgemeine Hinweise</h4>
            <p>Die folgenden Hinweise geben einen einfachen Überblick darüber, was mit Ihren personenbezogenen Daten passiert, wenn Sie diese Website besuchen. Personenbezogene Daten sind alle Daten, mit denen Sie persönlich identifiziert werden können.</p>
            
            <h4 className="text-lg font-medium text-gray-900 mt-4">Datenerfassung auf dieser Website</h4>
            <p>Die Datenverarbeitung auf dieser Website erfolgt durch den Websitebetreiber. Die Kontaktdaten können Sie dem Impressum dieser Website entnehmen.</p>
          </section>

          <section>
            <h3 className="text-xl font-semibold text-gray-900">2. Hosting</h3>
            <p>Wir hosten die Inhalte unserer Website bei folgenden Anbietern:</p>
            <ul>
              <li>Netlify für das Hosting der Website</li>
              <li>Supabase für die Datenbank</li>
            </ul>
          </section>

          <section>
            <h3 className="text-xl font-semibold text-gray-900">3. Allgemeine Hinweise und Pflichtinformationen</h3>
            
            <h4 className="text-lg font-medium text-gray-900 mt-4">Datenschutz</h4>
            <p>Die Betreiber dieser Seiten nehmen den Schutz Ihrer persönlichen Daten sehr ernst. Wir behandeln Ihre personenbezogenen Daten vertraulich und entsprechend den gesetzlichen Datenschutzvorschriften sowie dieser Datenschutzerklärung.</p>
            
            <h4 className="text-lg font-medium text-gray-900 mt-4">Hinweis zur verantwortlichen Stelle</h4>
            <p>Die verantwortliche Stelle für die Datenverarbeitung auf dieser Website ist:</p>
            <p>
              Infinity Automation<br />
              Samuel Fritz<br />
              Nachdemsee 88<br />
              4801 Altmünster<br />
              Österreich
            </p>
            <p>
              E-Mail: infinity-automation@outlook.com<br />
              Telefon: +43 677 62495730
            </p>
          </section>

          <section>
            <h3 className="text-xl font-semibold text-gray-900">4. Datenerfassung auf dieser Website</h3>
            
            <h4 className="text-lg font-medium text-gray-900 mt-4">Kontaktformular</h4>
            <p>Wenn Sie uns per Kontaktformular Anfragen zukommen lassen, werden Ihre Angaben aus dem Anfrageformular inklusive der von Ihnen dort angegebenen Kontaktdaten zwecks Bearbeitung der Anfrage und für den Fall von Anschlussfragen bei uns gespeichert. Diese Daten geben wir nicht ohne Ihre Einwilligung weiter.</p>
            
            <h4 className="text-lg font-medium text-gray-900 mt-4">Newsletter-Daten</h4>
            <p>Wenn Sie den auf der Website angebotenen Newsletter beziehen möchten, benötigen wir von Ihnen eine E-Mail-Adresse sowie Informationen, welche uns die Überprüfung gestatten, dass Sie der Inhaber der angegebenen E-Mail-Adresse sind und mit dem Empfang des Newsletters einverstanden sind.</p>
          </section>

          <section>
            <h3 className="text-xl font-semibold text-gray-900">5. Analyse-Tools und Werbung</h3>
            <p>Wir verwenden keine Analyse-Tools oder Tracking-Cookies auf unserer Website.</p>
          </section>

          <section>
            <h3 className="text-xl font-semibold text-gray-900">6. Newsletter</h3>
            <p>Wenn Sie den auf der Website angebotenen Newsletter beziehen möchten, benötigen wir von Ihnen eine E-Mail-Adresse sowie Informationen, welche uns die Überprüfung gestatten, dass Sie der Inhaber der angegebenen E-Mail-Adresse sind und mit dem Empfang des Newsletters einverstanden sind.</p>
            <p>Sie können den Newsletter jederzeit abbestellen. Dazu finden Sie einen Link am Ende jedes Newsletters.</p>
          </section>

          <section>
            <h3 className="text-xl font-semibold text-gray-900">7. Plugins und Tools</h3>
            <p>Wir verwenden keine externen Plugins oder Tools, die personenbezogene Daten erheben.</p>
          </section>

          <section>
            <h3 className="text-xl font-semibold text-gray-900">8. Ihre Rechte</h3>
            <p>Sie haben jederzeit das Recht:</p>
            <ul>
              <li>Auskunft über Ihre bei uns gespeicherten Daten zu erhalten</li>
              <li>Diese Daten berichtigen oder löschen zu lassen</li>
              <li>Die Verarbeitung einzuschränken</li>
              <li>Der Verarbeitung zu widersprechen</li>
              <li>Die Daten zu übertragen</li>
            </ul>
            <p>Wenn Sie eines dieser Rechte ausüben möchten, kontaktieren Sie uns bitte über die im Impressum angegebenen Kontaktdaten.</p>
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
