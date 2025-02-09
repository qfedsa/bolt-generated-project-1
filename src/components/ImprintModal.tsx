import { X } from 'lucide-react';

interface ImprintModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function ImprintModal({ isOpen, onClose }: ImprintModalProps) {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black/50 flex items-start justify-center z-50 p-4 backdrop-blur-sm overflow-y-auto">
      <div className="bg-white rounded-xl p-6 w-full max-w-2xl shadow-xl my-8">
        <div className="flex justify-between items-center mb-6">
          <h2 className="text-2xl font-bold text-gray-900">Impressum</h2>
          <button
            onClick={onClose}
            className="p-2 hover:bg-gray-100 rounded-full transition-colors"
            aria-label="Schließen"
          >
            <X className="w-6 h-6" />
          </button>
        </div>

        <div className="prose max-w-none space-y-6">
          <section>
            <h3 className="text-xl font-semibold text-gray-900">Angaben gemäß § 5 TMG</h3>
            <p className="text-gray-600">
              Infinity Automation<br />
              Nachdemsee 88<br />
              4801 Altmünster<br />
              Österreich
            </p>
          </section>

          <section>
            <h3 className="text-xl font-semibold text-gray-900">Vertreten durch</h3>
            <p className="text-gray-600">
              Samuel Fritz<br />
              Geschäftsführer
            </p>
          </section>

          <section>
            <h3 className="text-xl font-semibold text-gray-900">Kontakt</h3>
            <p className="text-gray-600">
              Telefon: +43 677 62495730<br />
              E-Mail: info@infinity-automation.eu
            </p>
          </section>

          <section>
            <h3 className="text-xl font-semibold text-gray-900">Verantwortlich für den Inhalt</h3>
            <p className="text-gray-600">
              Samuel Fritz<br />
              Nachdemsee 88<br />
              4801 Altmünster<br />
              Österreich
            </p>
          </section>

          <section>
            <h3 className="text-xl font-semibold text-gray-900">Online-Streitbeilegung</h3>
            <p className="text-gray-600">
              Die Europäische Kommission stellt eine Plattform zur Online-Streitbeilegung (OS) bereit: {" "}
              <a 
                href="https://ec.europa.eu/consumers/odr/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-600 hover:text-blue-800"
              >
                https://ec.europa.eu/consumers/odr/
              </a>
            </p>
          </section>
        </div>

        <div className="mt-8 flex justify-end">
          <button
            onClick={onClose}
            className="px-6 py-2.5 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors font-medium"
          >
            Schließen
          </button>
        </div>
      </div>
    </div>
  );
}
