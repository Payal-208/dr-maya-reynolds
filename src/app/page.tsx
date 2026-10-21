import OriginalHomepage from '@/components/OriginalHomepage';
<<<<<<< HEAD
import SiteInteractions from '@/components/SiteInteractions';
=======
>>>>>>> ab5be9c288e3995116a8c04b6fed6bb19b1cf69f

// Local-business structured data (from the profile only: no phone/email/fees are invented).
const structuredData = {
  '@context': 'https://schema.org',
  '@type': ['Psychologist', 'LocalBusiness'],
  name: 'Dr. Maya Reynolds, PsyD',
  description:
    'Licensed clinical psychologist providing therapy for adults with anxiety, panic, trauma, and burnout. In-person in Santa Monica, CA and secure telehealth for clients located in California.',
  address: {
    '@type': 'PostalAddress',
    streetAddress: '123th Street 45 W',
    addressLocality: 'Santa Monica',
    addressRegion: 'CA',
    postalCode: '90401',
    addressCountry: 'US',
  },
  areaServed: [
    { '@type': 'City', name: 'Santa Monica' },
    { '@type': 'State', name: 'California' },
  ],
  medicalSpecialty: 'Psychology',
  knowsAbout: ['Anxiety', 'Panic', 'Trauma', 'Burnout', 'Perfectionism', 'CBT', 'EMDR', 'Mindfulness-based therapy'],
};

const faqData = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
  {
    "@type": "Question",
    "name": "Where is Dr. Reynolds’ office, and is telehealth available?",
    "acceptedAnswer": {
      "@type": "Answer",
      "text": "Dr. Reynolds offers in-person therapy from her Santa Monica office at 123th Street 45 W, Santa Monica, CA 90401. Secure telehealth sessions are available for clients located in California."
    }
  },
  {
    "@type": "Question",
    "name": "Who does Dr. Reynolds work with?",
    "acceptedAnswer": {
      "@type": "Answer",
      "text": "She works with adults who feel overwhelmed by anxiety, stress, or the lingering effects of past experiences. Many clients are high-achieving, thoughtful, and self-aware, and include entrepreneurs, creatives, and professionals who feel disconnected from themselves after years of pushing through stress."
    }
  },
  {
    "@type": "Question",
    "name": "What can I expect in therapy sessions?",
    "acceptedAnswer": {
      "@type": "Answer",
      "text": "Dr. Reynolds takes a warm, collaborative, and grounded approach. Sessions are structured enough to feel supportive, while leaving space for reflection and depth. Therapy is an active process: together you explore patterns, make room for difficult emotions, and practice tools you can use in daily life."
    }
  },
  {
    "@type": "Question",
    "name": "What methods does Dr. Reynolds use?",
    "acceptedAnswer": {
      "@type": "Answer",
      "text": "She integrates evidence-based methods, including cognitive-behavioral therapy (CBT), EMDR, mindfulness-based practices, and body-oriented techniques, to address both the emotional and physiological sides of what you are experiencing."
    }
  },
  {
    "@type": "Question",
    "name": "How does Dr. Reynolds approach trauma therapy?",
    "acceptedAnswer": {
      "@type": "Answer",
      "text": "Trauma work is paced carefully, with an emphasis on safety, stabilization, and helping you feel more regulated in your daily life, not just during sessions. She works with single-incident trauma as well as more complex, long-standing patterns that may stem from childhood, relationships, or chronic stress."
    }
  },
  {
    "@type": "Question",
    "name": "I look like I’m managing. Is therapy still for me?",
    "acceptedAnswer": {
      "@type": "Answer",
      "text": "Many of Dr. Reynolds’ clients feel “functional” on the outside while quietly struggling with constant worry, tension in the body, difficulty sleeping, or a sense of always bracing for something to go wrong. Therapy can be a space to slow down, reconnect, and develop more sustainable ways of living and working."
    }
  }
],
};

/** The visual-clone page; keep this composition stable during the refactor. */
export default function HomePage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqData) }} />
      <OriginalHomepage />
<<<<<<< HEAD
      <SiteInteractions />
=======
>>>>>>> ab5be9c288e3995116a8c04b6fed6bb19b1cf69f
    </>
  );
}
