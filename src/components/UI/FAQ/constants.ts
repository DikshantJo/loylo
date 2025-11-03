type FAQItem = {
  question: string;
  answer: string;
};

export const desktopHeaderPhrase = ['Frequently asked questions'];
export const mobileHeaderPhrase = ['Frequently asked questions'];
export const animate = {
  initial: {
    y: '100%',
    opacity: 0,
  },
  open: (i: number) => ({
    y: '0%',
    opacity: 1,
    transition: { duration: 1, delay: 0.1 * i, ease: [0.33, 1, 0.68, 1] },
  }),
};

export const faqData: FAQItem[] = [
  {
    question: 'How do I join Loylo.club as a customer?',
    answer:
      "Simply join our waitlist! Once we launch in your city, you'll receive early access to the app. Download it, sign up, and start earning points at participating local businesses.",
  },
  {
    question: 'How does Loylo.club ensure the security of my data?',
    answer:
      'Loylo.club is built with privacy in mind. We never track personal payments or share your data with third parties. Your information stays secure and is only used to manage your loyalty points.',
  },
  {
    question: 'Where can I redeem my loyalty points?',
    answer:
      'You can redeem your points at any business within the Loylo.club network — not just where you earned them. Whether you earned points at a café or gym, you can use them at any participating merchant.',
  },
  {
    question: 'How can my business join the Loylo.club network?',
    answer:
      'Businesses can get early access by joining our merchant program. Loylo.club integrates easily with your existing POS system — no extra hardware or complex onboarding required. Contact us to learn more.',
  },
];
