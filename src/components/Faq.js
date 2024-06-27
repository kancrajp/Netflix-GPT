import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus, faMinus } from "@fortawesome/free-solid-svg-icons";

const Faq = () => {
  const [faqs, setFaqs] = useState([
    {
      question: "What is Netflix?",
      answer:
        "Netflix is a streaming service that offers a wide variety of award-winning TV shows, movies, anime, documentaries, and more on thousands of internet-connected devices.",
      isOpen: false,
    },
    {
      question: "How much does Netflix cost?",
      answer:
        "Netflix offers several subscription plans. The basic plan starts at $8.99 per month, the standard plan starts at $13.99 per month, and the premium plan starts at $17.99 per month.",
      isOpen: false,
    },
    {
      question: "Where can I watch?",
      answer:
        "Watch anywhere, anytime, on an unlimited number of devices. Sign in with your Netflix account to watch instantly on the web at netflix.com from your personal computer or on any internet-connected device that offers the Netflix app, including smart TVs, smartphones, tablets, streaming media players, and game consoles.",
      isOpen: false,
    },
    {
      question: "How do I cancel?",
      answer:
        "Netflix is flexible. There are no contracts, no cancellation fees, and no commitments. You can cancel your account online in two clicks. There are no cancellation fees – start or stop your account anytime.",
      isOpen: false,
    },
    {
      question: "What can I watch on Netflix?",
      answer:
        "Netflix has an extensive library of feature films, documentaries, TV shows, anime, award-winning Netflix originals, and more. Watch as much as you want, anytime you want.",
      isOpen: false,
    },
  ]);

  const toggleAccordion = (index) => {
    const newFaqs = faqs.map((faq, i) =>
      i === index ? { ...faq, isOpen: !faq.isOpen } : { ...faq, isOpen: false }
    );
    setFaqs(newFaqs);
  };

  return (
    <section className="faq bg-gray-900 py-12">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-4xl font-bold leading-tight text-white text-center mb-8">
          Frequently Asked Questions
        </h2>
        <div className="grid gap-4">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className="bg-gray-800 rounded-lg shadow-md overflow-hidden"
            >
              <button
                onClick={() => toggleAccordion(index)}
                className="w-full flex justify-between items-center p-4 focus:outline-none transition-all duration-400 ease-in-out"
              >
                <span className="text-lg font-semibold text-white">
                  {faq.question}
                </span>
                <FontAwesomeIcon
                  icon={faq.isOpen ? faMinus : faPlus}
                  className="text-white text-lg"
                />
              </button>
              <div
                className={`p-4 ${
                  faq.isOpen ? "block" : "hidden"
                } overflow-hidden transition-all duration-300 ease-in-out`}
              >
                <p className="text-white text-sm">{faq.answer}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Faq;
