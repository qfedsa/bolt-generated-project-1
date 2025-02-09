import { X, Zap, TrendingUp } from 'lucide-react';

interface AboutUsModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function AboutUsModal({ isOpen, onClose }: AboutUsModalProps) {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black/50 flex items-start justify-center z-50 p-4 backdrop-blur-sm overflow-y-auto">
      <div className="bg-white rounded-xl w-full max-w-4xl shadow-xl my-4 sm:my-8">
        {/* Sticky Header */}
        <div className="sticky top-0 bg-white z-10 px-4 sm:px-6 py-4 border-b">
          <div className="flex justify-between items-center">
            <h2 className="text-xl sm:text-2xl font-bold text-gray-900">Über Infinity Automation</h2>
            <button
              onClick={onClose}
              className="p-2 hover:bg-gray-100 rounded-full transition-colors"
              aria-label="Schließen"
            >
              <X className="w-6 h-6" />
            </button>
          </div>
        </div>

        {/* Scrollable Content */}
        <div className="px-4 sm:px-6 py-6 space-y-8 overflow-y-auto">
          <div className="prose max-w-none">
            <p className="text-gray-600 leading-relaxed">
              Die Baubranche steht vor der Herausforderung, mit der rasanten Digitalisierung Schritt zu halten. Während künstliche Intelligenz in vielen Bereichen bereits Einzug gehalten hat, hinkt das Bauwesen oft hinterher. Genau hier setzt Infinity Automation an. Wir haben es uns zum Ziel gesetzt, ein Projektmanagement-System zu entwickeln, das die Leistungsfähigkeit der KI nutzt, um die Effizienz, Transparenz und Kontrolle in Bauprojekten zu revolutionieren.
            </p>
          </div>

          <div className="bg-blue-50 rounded-xl p-6 sm:p-8">
            <h3 className="text-xl font-semibold mb-4 text-blue-900">Was uns auszeichnet</h3>
            <div className="grid sm:grid-cols-2 gap-6">
              <div className="space-y-4">
                <div className="flex items-start">
                  <div className="p-2 bg-blue-100 rounded-lg mr-3">
                    <Zap className="w-5 h-5 text-blue-600" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-blue-900">KI-gesteuerte Automatisierung</h4>
                    <p className="text-gray-600 text-sm">Intelligente Prozessoptimierung in allen Bereichen des Projektmanagements</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="p-2 bg-blue-100 rounded-lg mr-3">
                    <TrendingUp className="w-5 h-5 text-blue-600" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-blue-900">Kontinuierliche Innovation</h4>
                    <p className="text-gray-600 text-sm">Stetige Weiterentwicklung unserer Lösungen für die Baubranche</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="prose max-w-none">
            <p className="text-gray-600 leading-relaxed">
              Aus eigener Erfahrung in der Baubranche wissen wir, wie chaotisch es werden kann, wenn sich Zeitpläne ändern. Die Auswirkungen betreffen nicht nur den Zeitplan selbst, sondern auch das Budget, die Kundenzufriedenheit und die Motivation der Mitarbeiter. Mit unserem System wollen wir diese Herausforderungen angehen und für mehr Effizienz, Transparenz und Kontrolle im Projektmanagement sorgen.
            </p>
            <p className="text-gray-600 leading-relaxed">
              Wir sind ein engagiertes Team mit dem Ziel, die Baubranche mit innovativen KI-Lösungen voranzubringen. Unser Projektmanagement-System ist die ideale Lösung für Bauunternehmen, die ihre Projekte effizienter, transparenter und erfolgreicher gestalten wollen.
            </p>
          </div>
        </div>

        {/* Sticky Footer */}
        <div className="sticky bottom-0 bg-white border-t px-4 sm:px-6 py-4">
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
