import { X, HelpCircle, Download } from 'lucide-react';
import { useState, useEffect } from 'react';
import { trackEvent, EventCategory, EventAction } from '../lib/analytics';

interface ROICalculatorProps {
  isOpen: boolean;
  onClose: () => void;
}

interface CalculationInput {
  pmEmployees: number;
  hourlyRate: number;
  projectsPerYear: number;
  projectVolume: number;
  systemCosts: number;
  pmTimePercentage: number;
  communicationTime: number;
  documentationTime: number;
}

interface CalculationResult {
  pmCostsWithout: number;
  pmCostsWith: number;
  communicationCostsWithout: number;
  communicationCostsWith: number;
  documentationCostsWithout: number;
  documentationCostsWith: number;
  totalCostsWithout: number;
  totalCostsWith: number;
  totalSavings: number;
  roi: number;
}

const defaultAssumptions = {
  pmTimePercentage: 40,
  communicationTime: 35,
  documentationTime: 25,
};

function ROICalculator({ isOpen, onClose }: ROICalculatorProps) {
  const [inputs, setInputs] = useState<CalculationInput>({
    pmEmployees: 0,
    hourlyRate: 0,
    projectsPerYear: 0,
    projectVolume: 0,
    systemCosts: 0,
    ...defaultAssumptions,
  });

  const [results, setResults] = useState<CalculationResult>({
    pmCostsWithout: 0,
    pmCostsWith: 0,
    communicationCostsWithout: 0,
    communicationCostsWith: 0,
    documentationCostsWithout: 0,
    documentationCostsWith: 0,
    totalCostsWithout: 0,
    totalCostsWith: 0,
    totalSavings: 0,
    roi: 0,
  });

  const [showAssumptions, setShowAssumptions] = useState(false);
  const [touched, setTouched] = useState<Set<keyof CalculationInput>>(new Set());

  useEffect(() => {
    if (touched.size > 0) {
      calculateResults();
      trackEvent(
        EventCategory.CALCULATOR, 
        EventAction.CALCULATE, 
        'roi_calculation',
        results.totalSavings
      );
    }
  }, [inputs]);

  const calculateResults = () => {
    const {
      pmEmployees,
      hourlyRate,
      projectsPerYear,
      projectVolume,
      systemCosts,
      pmTimePercentage,
      communicationTime,
      documentationTime,
    } = inputs;

    // Berechnung der jährlichen Arbeitszeit (in Stunden)
    const annualWorkingHours = pmEmployees * 1720; // 215 Arbeitstage × 8 Stunden
    const totalHourlyRate = hourlyRate;

    // Berechnung der Kosten für jeden Bereich basierend auf der Zeitverteilung
    // Projektmanagement (40% der Zeit)
    const pmHours = annualWorkingHours * (pmTimePercentage / 100);
    const pmCostsWithout = pmHours * totalHourlyRate;
    const pmCostsWith = pmCostsWithout * 0.75; // 25% Effizienzsteigerung

    // Kommunikation (35% der Zeit)
    const commHours = annualWorkingHours * (communicationTime / 100);
    const communicationCostsWithout = commHours * totalHourlyRate;
    const communicationCostsWith = communicationCostsWithout * 0.7; // 30% Effizienzsteigerung

    // Dokumentation (25% der Zeit)
    const docHours = annualWorkingHours * (documentationTime / 100);
    const documentationCostsWithout = docHours * totalHourlyRate;
    const documentationCostsWith = documentationCostsWithout * 0.6; // 40% Effizienzsteigerung

    // Gesamtkosten und Einsparungen
    const totalCostsWithout = pmCostsWithout + communicationCostsWithout + documentationCostsWithout;
    const totalCostsWith = pmCostsWith + communicationCostsWith + documentationCostsWith + systemCosts;
    const totalSavings = totalCostsWithout - totalCostsWith;
    
    // ROI-Berechnung
    const roi = systemCosts > 0 ? (totalSavings / systemCosts) * 100 : 0;

    setResults({
      pmCostsWithout,
      pmCostsWith,
      communicationCostsWithout,
      communicationCostsWith,
      documentationCostsWithout,
      documentationCostsWith,
      totalCostsWithout,
      totalCostsWith,
      totalSavings,
      roi
    });
  };

  const handleClose = () => {
    trackEvent(EventCategory.MODAL, EventAction.CLOSE, 'roi_calculator');
    onClose();
  };

  const handleInputChange = (field: keyof CalculationInput, value: string) => {
    const numValue = value === '' ? 0 : Math.max(0, parseFloat(value));
    setInputs(prev => ({ ...prev, [field]: numValue }));
    setTouched(prev => new Set(prev).add(field));
    
    trackEvent(
      EventCategory.CALCULATOR,
      EventAction.CLICK,
      `roi_input_${field}`,
      numValue
    );
  };

  const formatCurrency = (value: number) => {
    return new Intl.NumberFormat('de-DE', {
      style: 'currency',
      currency: 'EUR',
      minimumFractionDigits: 0,
      maximumFractionDigits: 0,
    }).format(value);
  };

  const formatPercentage = (value: number) => {
    return new Intl.NumberFormat('de-DE', {
      style: 'percent',
      minimumFractionDigits: 0,
      maximumFractionDigits: 1,
    }).format(value / 100);
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black/50 flex items-start justify-center z-50 p-4 backdrop-blur-sm overflow-y-auto">
      <div className="bg-white rounded-xl shadow-xl w-full max-w-4xl my-4 sm:my-8">
        {/* Sticky Header */}
        <div className="sticky top-0 bg-white z-10 px-4 sm:px-6 py-4 border-b">
          <div className="flex justify-between items-center">
            <div>
              <h2 className="text-xl sm:text-2xl font-bold text-gray-900">ROI-Berechnung</h2>
              <p className="text-sm text-gray-500 mt-1">
                Berechnen Sie Ihr individuelles Einsparpotenzial
              </p>
            </div>
            <button
              onClick={handleClose}
              className="p-2 hover:bg-gray-100 rounded-full transition-colors"
              aria-label="Schließen"
            >
              <X className="w-6 h-6" />
            </button>
          </div>
        </div>

        <div className="p-4 sm:p-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-8">
            {/* Input Section */}
            <div className="space-y-6">
              <div className="space-y-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Anzahl der Mitarbeiter im Projektmanagement
                  </label>
                  <input
                    type="number"
                    min="1"
                    value={inputs.pmEmployees || ''}
                    onChange={(e) => handleInputChange('pmEmployees', e.target.value)}
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-shadow"
                    placeholder="z.B. 5"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Durchschnittlicher Stundensatz (€)
                  </label>
                  <input
                    type="number"
                    min="1"
                    value={inputs.hourlyRate || ''}
                    onChange={(e) => handleInputChange('hourlyRate', e.target.value)}
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-shadow"
                    placeholder="z.B. 80"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Anzahl der Projekte pro Jahr
                  </label>
                  <input
                    type="number"
                    min="1"
                    value={inputs.projectsPerYear || ''}
                    onChange={(e) => handleInputChange('projectsPerYear', e.target.value)}
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-shadow"
                    placeholder="z.B. 12"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Jährliche Systemkosten (€)
                  </label>
                  <input
                    type="number"
                    min="1"
                    value={inputs.systemCosts || ''}
                    onChange={(e) => handleInputChange('systemCosts', e.target.value)}
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-shadow"
                    placeholder="z.B. 12000"
                  />
                </div>
              </div>

              <div>
                <button
                  onClick={() => setShowAssumptions(!showAssumptions)}
                  className="flex items-center text-sm text-blue-600 hover:text-blue-700"
                >
                  <HelpCircle className="w-4 h-4 mr-1" />
                  Erweiterte Einstellungen
                </button>

                {showAssumptions && (
                  <div className="mt-4 space-y-4 p-4 bg-gray-50 rounded-lg">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">
                        Zeit für Projektplanung und -steuerung (%)
                      </label>
                      <input
                        type="number"
                        min="1"
                        max="100"
                        value={inputs.pmTimePercentage}
                        onChange={(e) => handleInputChange('pmTimePercentage', e.target.value)}
                        className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-shadow"
                      />
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">
                        Zeit für Abstimmungen und Kommunikation (%)
                      </label>
                      <input
                        type="number"
                        min="1"
                        max="100"
                        value={inputs.communicationTime}
                        onChange={(e) => handleInputChange('communicationTime', e.target.value)}
                        className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-shadow"
                      />
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">
                        Zeit für Dokumentation und Berichte (%)
                      </label>
                      <input
                        type="number"
                        min="1"
                        max="100"
                        value={inputs.documentationTime}
                        onChange={(e) => handleInputChange('documentationTime', e.target.value)}
                        className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-shadow"
                      />
                    </div>
                  </div>
                )}
              </div>
            </div>

            {/* Results Section */}
            <div className="space-y-6">
              <div className="bg-gray-50 p-4 rounded-lg">
                <h4 className="font-medium text-gray-900 mb-3">Projektplanung und -steuerung</h4>
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <p className="text-sm text-gray-600">Aktuell</p>
                    <p className="text-lg font-semibold text-red-600">
                      {formatCurrency(results.pmCostsWithout)}
                    </p>
                    <p className="text-xs text-gray-500">pro Jahr</p>
                  </div>
                  <div>
                    <p className="text-sm text-gray-600">Mit System</p>
                    <p className="text-lg font-semibold text-green-600">
                      {formatCurrency(results.pmCostsWith)}
                    </p>
                    <p className="text-xs text-gray-500">pro Jahr</p>
                  </div>
                </div>
              </div>

              <div className="bg-gray-50 p-4 rounded-lg">
                <h4 className="font-medium text-gray-900 mb-3">Kommunikation und Abstimmung</h4>
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <p className="text-sm text-gray-600">Aktuell</p>
                    <p className="text-lg font-semibold text-red-600">
                      {formatCurrency(results.communicationCostsWithout)}
                    </p>
                    <p className="text-xs text-gray-500">pro Jahr</p>
                  </div>
                  <div>
                    <p className="text-sm text-gray-600">Mit System</p>
                    <p className="text-lg font-semibold text-green-600">
                      {formatCurrency(results.communicationCostsWith)}
                    </p>
                    <p className="text-xs text-gray-500">pro Jahr</p>
                  </div>
                </div>
              </div>

              <div className="bg-gray-50 p-4 rounded-lg">
                <h4 className="font-medium text-gray-900 mb-3">Dokumentation und Berichtswesen</h4>
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <p className="text-sm text-gray-600">Aktuell</p>
                    <p className="text-lg font-semibold text-red-600">
                      {formatCurrency(results.documentationCostsWithout)}
                    </p>
                    <p className="text-xs text-gray-500">pro Jahr</p>
                  </div>
                  <div>
                    <p className="text-sm text-gray-600">Mit System</p>
                    <p className="text-lg font-semibold text-green-600">
                      {formatCurrency(results.documentationCostsWith)}
                    </p>
                    <p className="text-xs text-gray-500">pro Jahr</p>
                  </div>
                </div>
              </div>

              <div className="bg-gradient-to-br from-blue-50 to-blue-100 p-6 rounded-xl">
                <h4 className="font-semibold text-gray-900 mb-4">Ihr Optimierungspotenzial</h4>
                <div className="space-y-4">
                  <div>
                    <p className="text-sm text-gray-600">Kosteneinsparung</p>
                    <p className="text-2xl font-bold text-blue-600">
                      {formatCurrency(results.totalSavings)}
                      <span className="text-sm font-normal text-gray-600 ml-1">pro Jahr</span>
                    </p>
                    <p className="text-sm text-blue-600">
                      Das sind {formatCurrency(results.totalSavings / 12)} jeden Monat!
                    </p>
                  </div>
                  <div>
                    <p className="text-sm text-gray-600">Leistungssteigerung</p>
                    <p className="text-2xl font-bold text-blue-600">
                      {formatPercentage(results.roi)}
                      <span className="text-sm font-normal text-gray-600 ml-1">mehr Effizienz</span>
                    </p>
                    <p className="text-sm text-blue-600">
                      Steigern Sie Ihre Produktivität ab dem ersten Tag
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Sticky Footer */}
        <div className="sticky bottom-0 bg-white border-t px-4 sm:px-6 py-4 mt-6">
          <div className="flex justify-end">
            <button
              onClick={handleClose}
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

export default ROICalculator;
