import { useState } from "react";

const Accordion = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  const toggleFAQ = (index) => {
    setActiveIndex(index === activeIndex ? null : index);
  };

  const faqs = [
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    "Can I add more staff users?",
    "Can the theme color and layout be customized?",
    "Can the theme color and layout be customized?"
  ];

  return (
    <div className="faq-container">
      <h2>Frequently Asked Questions</h2>
      <div className="faq-content">
        <div className="faq-column">
          {faqs.slice(0, 3).map((faq, index) => (
            <FAQItem
              key={index}
              question={faq}
              index={index}
              isActive={activeIndex === index}
              onClick={() => toggleFAQ(index)}
            />
          ))}
        </div>
        <div className="faq-column">
          {faqs.slice(3, 6).map((faq, index) => (
            <FAQItem
              key={index + 3}
              question={faq}
              index={index + 3}
              isActive={activeIndex === index + 3}
              onClick={() => toggleFAQ(index + 3)}
            />
          ))}
        </div>
      </div>
      <button className="more-faq-btn">MORE FAQ</button>
    </div>
  );
};

// eslint-disable-next-line react/prop-types
const FAQItem = ({ question, index, isActive, onClick }) => {
  return (
    <div className={`faq-item ${isActive ? "active" : ""}`} onClick={onClick}>
      <div className="faq-question">
        <span>{index + 1}. {question}</span>
        <span className="faq-icon">{isActive ? "▼" : "▶"}</span>
      </div>
      {isActive && <p className="faq-answer">{question}</p>}
    </div>
  );
};

export default Accordion;
