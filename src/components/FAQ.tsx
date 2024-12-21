import React, { useState } from 'react';
import { ChevronDown, ChevronUp } from 'lucide-react';

const faqs = [
  {
    question: 'How does delivery work?',
    answer: 'We offer same-day delivery within the DC area. Once you place an order, you'll receive a call from a delivery driver to coordinate your dropoff.'
  },
  {
    question: 'What payment methods do you accept?',
    answer: 'We accept credit/debit cards for Tap-To-Pay, CashApp, Apple Pay, and Venmo for secure and convenient transactions.'
  },
  {
    question: 'What are your delivery hours?',
    answer: 'We deliver 7 days a week from 11 AM to 9 PM. Orders placed outside these hours will have an extra $15 fee or be delivered the next day.'
  },
  {
    question: 'Do you require ID verification?',
    answer: 'Yes, valid government-issued ID showing you are 21 or older is required for all deliveries.'
  }
];

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <section className="py-16 bg-gray-50">
      <div className="max-w-3xl mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-8">Frequently Asked Questions</h2>
        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div key={index} className="bg-white rounded-lg shadow-sm">
              <button
                className="w-full px-6 py-4 flex justify-between items-center"
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
              >
                <span className="font-medium text-left">{faq.question}</span>
                {openIndex === index ? (
                  <ChevronUp className="w-5 h-5 text-gray-500" />
                ) : (
                  <ChevronDown className="w-5 h-5 text-gray-500" />
                )}
              </button>
              {openIndex === index && (
                <div className="px-6 pb-4 text-gray-600">{faq.answer}</div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}