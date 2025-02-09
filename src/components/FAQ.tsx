import { useState } from 'react';
import { ChevronDown, ChevronUp } from 'lucide-react';
import { trackEvent, EventCategory, EventAction } from '../lib/analytics';

interface FAQItem {
  question: string;
  answer: string;
}

const faqData: FAQItem[] = [
  {
    question: "Wie unterscheidet sich Infinity Automation von herkömmlicher Projektmanagement-Software?",
    answer: "Infinity Automation nutzt modernste KI-Technologie für die intelligente Automatisierung des gesamten Projektmanagements. Unser KI-System optimiert auf Knopfdruck alle relevanten Prozesse und berechnet effiziente Lösungen. Aktuell ist die Software ideal für kleinere Projekte geeignet, während Features wie Mehrfachabhängigkeiten noch in Entwicklung sind."
  },
  {
    question: "Welche Vorteile bietet die automatische Zeitplanung?",
    answer: "Unsere KI-gestützte Zeitplanung ermöglicht eine effiziente Verwaltung Ihrer Projektdaten. Das System berücksichtigt einfache Abhängigkeiten und ermöglicht auf Knopfdruck eine automatische Neuberechnung und Optimierung der Zeitpläne bei Verzögerungen. Diese gezielte Automatisierung reduziert die Planungszeit um bis zu 30%."
  },
  {
    question: "Welche Branchen profitieren besonders von Infinity Automation?",
    answer: "Unsere KI-gestützte Software ist speziell für die Baubranche und verwandte Sektoren wie Architektur, Gebäudemanagement und Immobilienentwicklung optimiert. Die intelligenten Funktionen sind besonders wertvoll für kleinere bis mittlere Projekte mit überschaubaren Abhängigkeiten, wo die KI ihr volles Potenzial zur Prozessoptimierung entfalten kann."
  },
  {
    question: "Wie wird die Datensicherheit gewährleistet?",
    answer: "Wir setzen auf modernste Verschlüsselungstechnologien und hosten ausschließlich in zertifizierten Rechenzentren in der EU. Alle Daten werden nach DSGVO-Richtlinien verarbeitet und regelmäßig gesichert. Unsere KI-Systeme arbeiten dabei ausschließlich mit anonymisierten Daten."
  },
  {
    question: "Welche Updates sind in naher Zukunft geplant?",
    answer: "Wir entwickeln kontinuierlich neue KI-gestützte Features: Unsere höchste Priorität liegt auf der Implementierung intelligenter Mehrfachabhängigkeiten, die durch KI automatisch erkannt und optimiert werden. Parallel arbeiten wir an KI-basierter mobiler Zeiterfassung, smartem Reporting mit automatischer Analyse sowie intelligentem Dokumentenmanagement. Jedes Feature wird durch modernste KI-Technologie gesteuert, um maximale Effizienz zu gewährleisten."
  }
];

export function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const handleQuestionClick = (index: number) => {
    const newIndex = openIndex === index ? null : index;
    setOpenIndex(newIndex);
    
    if (newIndex !== null) {
      trackEvent(
        EventCategory.FAQ,
        EventAction.CLICK,
        faqData[index].question
      );
    }
  };

  return (
    <section className="py-12 sm:py-24 bg-white">
      <div className="container mx-auto px-4 sm:px-6">
        <h2 className="text-2xl sm:text-3xl font-bold text-center mb-4">Häufig gestellte Fragen</h2>
        <p className="text-gray-600 text-center mb-12 max-w-2xl mx-auto">
          Erfahren Sie mehr über unsere KI-gestützte Projektmanagement-Lösung
        </p>

        <div className="max-w-3xl mx-auto space-y-4">
          {faqData.map((faq, index) => (
            <div
              key={index}
              className="border border-gray-200 rounded-lg overflow-hidden"
            >
              <button
                className="w-full px-6 py-4 text-left flex items-center justify-between bg-white hover:bg-gray-50 transition-colors"
                onClick={() => handleQuestionClick(index)}
              >
                <span className="font-medium text-gray-900">{faq.question}</span>
                {openIndex === index ? (
                  <ChevronUp className="w-5 h-5 text-gray-500" />
                ) : (
                  <ChevronDown className="w-5 h-5 text-gray-500" />
                )}
              </button>
              {openIndex === index && (
                <div className="px-6 py-4 bg-gray-50">
                  <p className="text-gray-600">{faq.answer}</p>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>

      {/* FAQ Schema */}
      <script type="application/ld+json">
        {JSON.stringify({
          "@context": "https://schema.org",
          "@type": "FAQPage",
          "mainEntity": faqData.map(faq => ({
            "@type": "Question",
            "name": faq.question,
            "acceptedAnswer": {
              "@type": "Answer",
              "text": faq.answer
            }
          }))
        })}
      </script>
    </section>
  );
}
