import Image from 'next/image'

import { Container } from '@/components/Container'
import backgroundImage from '@/images/background-faqs.jpg'

const faqs = [
    [
      {
        question: 'What AI technologies does DevDash Labs specialize in?',
        answer: 'We focus on cutting-edge machine learning, natural language processing, and computer vision solutions to transform your business operations.',
      },
      {
        question: 'Can DevDash Labs integrate with our existing systems?',
        answer: 'Absolutely! Our AI solutions are designed for seamless integration with your current tech stack through flexible APIs and modular architecture.',
      },
      {
        question: 'How do I apply for a position at DevDash Labs?',
        answer: 'We\'re always looking for talented AI researchers and engineers. Check our careers page and include a project that demonstrates your machine learning expertise.',
      },
    ],
    [
      {
        question: 'What industries does DevDash Labs serve?',
        answer: 'We provide AI solutions across healthcare, finance, retail, and manufacturing, with customizable models for each sector\'s unique challenges.',
      },
      {
        question: 'How does your pricing model work for AI solutions?',
        answer: 'We offer both subscription-based SaaS models and custom enterprise pricing, depending on your computational needs and data requirements.',
      },
      {
        question: 'How do you ensure ethical AI development?',
        answer: 'Ethics is core to our development process. We implement rigorous bias testing, explainability frameworks, and adhere to responsible AI principles in all projects.',
      },
    ],
    [
      {
        question: 'What support do you provide for model maintenance?',
        answer: 'Our team provides continuous model monitoring, retraining services, and performance optimization to ensure your AI solutions keep delivering value.',
      },
      {
        question: 'Can we get custom AI models developed for our specific needs?',
        answer: 'Yes! Our data science team specializes in building bespoke machine learning models tailored to your unique business problems and datasets.',
      },
      {
        question: 'How do you handle data privacy and security?',
        answer: 'We implement enterprise-grade encryption, strict access controls, and comply with global data protection regulations to keep your information secure.',
      },
    ],
  ]

export function Faqs() {
  return (
    <section
      id="faq"
      aria-labelledby="faq-title"
      className="relative overflow-hidden bg-slate-50 py-20 sm:py-32"
    >
      {/* <Image
        className="absolute top-0 left-1/2 max-w-none -translate-y-1/4 translate-x-[-30%]"
        src={backgroundImage}
        alt=""
        width={1558}
        height={946}
        unoptimized
      /> */}
      <Container className="relative">
        <div className="mx-auto max-w-2xl lg:mx-0">
          <h2
            id="faq-title"
            className="font-display text-3xl tracking-tight text-slate-900 sm:text-4xl"
          >
            Frequently asked questions
          </h2>
          <p className="mt-4 text-lg tracking-tight text-slate-700">
            If you can’t find what you’re looking for, email our support team
            and if you’re lucky someone will get back to you.
          </p>
        </div>
        <ul
          role="list"
          className="mx-auto mt-16 grid max-w-2xl grid-cols-1 gap-8 lg:max-w-none lg:grid-cols-3"
        >
          {faqs.map((column, columnIndex) => (
            <li key={columnIndex}>
              <ul role="list" className="flex flex-col gap-y-8">
                {column.map((faq, faqIndex) => (
                  <li key={faqIndex}>
                    <h3 className="font-display text-lg/7 text-slate-900">
                      {faq.question}
                    </h3>
                    <p className="mt-4 text-sm text-slate-700">{faq.answer}</p>
                  </li>
                ))}
              </ul>
            </li>
          ))}
        </ul>
      </Container>
    </section>
  )
}
