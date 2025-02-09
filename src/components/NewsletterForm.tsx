import { useState } from 'react';
import { trackEvent, EventCategory, EventAction } from '../lib/analytics';

interface NewsletterFormData {
  name: string;
  email: string;
}

export default function NewsletterForm() {
  const [formData, setFormData] = useState<NewsletterFormData>({
    name: '',
    email: '',
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitSuccess, setSubmitSuccess] = useState(false);
  const [submitError, setSubmitError] = useState<string | null>(null);

  const validateForm = () => {
    if (!formData.name.trim()) return false;
    if (!formData.email.trim() || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) return false;
    return true;
  };

    const triggerWebhook = async (data: NewsletterFormData) => { //added
    try {
      const response = await fetch('https://hook.eu2.make.com/okd72sil5v55t7n02lfbzl3muctqywdt', { //added, use your webhook
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
      });

      if (!response.ok) {
        throw new Error('Webhook request failed');
      }
    } catch (error) {
      console.error('Error triggering webhook:', error);
        throw error; //added
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!validateForm()) {
      trackEvent(EventCategory.FORM, EventAction.SUBMIT, 'newsletter_validation_failed');
      return;
    }
    
    setIsSubmitting(true);
    setSubmitError(null);
    
    try {
      await triggerWebhook(formData); //added

      
      trackEvent(EventCategory.FORM, EventAction.SUBMIT, 'newsletter_success');
      setSubmitSuccess(true);
      setFormData({
        name: '',
        email: '',
      });
    } catch (error) {
      const errorMessage = error instanceof Error ? error.message : 'Unbekannter Fehler';
      trackEvent(EventCategory.FORM, EventAction.SUBMIT, `newsletter_error: ${errorMessage}`);
      setSubmitError(error instanceof Error ? error.message : 'Es ist ein Fehler aufgetreten. Bitte versuchen Sie es später erneut.');
      console.error('Error submitting newsletter form:', error);
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  if (submitSuccess) {
    return (
      <div className="bg-green-50 p-4 rounded-lg">
        <p className="text-green-800 font-medium">Vielen Dank für Ihre Anmeldung!</p>
        <p className="text-green-600 text-sm mt-1">Sie haben sich erfolgreich für unseren Newsletter registriert.</p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      {submitError && (
        <div className="bg-red-50 text-red-600 p-3 rounded-lg text-sm">
          {submitError}
        </div>
      )}

      <div>
        <label htmlFor="newsletter-name" className="block text-sm font-medium text-gray-700 mb-1">
          Name
        </label>
        <input
          type="text"
          id="newsletter-name"
          name="name"
          value={formData.name}
          onChange={handleChange}
          className="w-full px-3 py-2 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500"
          placeholder="Ihr Name"
        />
      </div>

      <div>
        <label htmlFor="newsletter-email" className="block text-sm font-medium text-gray-700 mb-1">
          E-Mail
        </label>
        <input
          type="email"
          id="newsletter-email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          className="w-full px-3 py-2 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500"
          placeholder="ihre@email.de"
        />
      </div>

      <button
        type="submit"
        disabled={isSubmitting}
        className={`w-full bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700 transition ${
          isSubmitting ? 'opacity-50 cursor-not-allowed' : ''
        }`}
      >
        {isSubmitting ? 'Wird angemeldet...' : 'Newsletter abonnieren'}
      </button>

      <p className="text-xs text-gray-500 mt-2">
        Ihre Daten werden vertraulich behandelt. Abmeldung jederzeit möglich.
      </p>
    </form>
  );
}
