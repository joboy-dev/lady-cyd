/**
 * JSON-LD Structured Data for SEO
 * Helps search engines understand the organization and services
 */
export default function StructuredData() {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "Organization",
    "name": "Lady Cyd",
    "alternateName": "Cyd Alex-Emenike",
    "url": "https://ladycyd.online",
    "logo": "https://ladycyd.online/images/logo.png",
    "description": "Certified trauma-informed coach and family systems strategist helping high-capacity women in Nigeria and Africa break generational cycles, restore identity, and heal family trauma through Christian Kingdom coaching.",
    "email": "Hello@ladycyd.online",
    "sameAs": [
      "https://www.instagram.com/cydalexemenike",
      "https://www.threads.net/@cydalexemenike"
    ],
    "founder": {
      "@type": "Person",
      "name": "Cyd Chioma Alex-Emenike",
      "alternateName": "Lady Cyd",
      "jobTitle": "Trauma-Informed Certified Coach | Family Systems Strategist | Generational Restoration Guide",
      "description": "Certified trauma-informed transformational coach specializing in identity restoration, family systems healing, and generational pattern work for high-capacity women.",
    },
    "areaServed": [
      {
        "@type": "Country",
        "name": "Nigeria"
      },
      {
        "@type": "Country",
        "name": "Ivory Coast"
      },
      {
        "@type": "Continent",
        "name": "Africa"
      }
    ],
    "knowsAbout": [
      "Trauma-Informed Coaching",
      "Family Systems Theory",
      "Generational Healing",
      "Identity Restoration",
      "Christian Coaching",
      "Kingdom Formation",
      "Women's Transformation",
      "Soul Restoration"
    ],
    "offers": {
      "@type": "Service",
      "serviceType": "Trauma-Informed Coaching",
      "provider": {
        "@type": "Organization",
        "name": "Lady Cyd"
      },
      "areaServed": "Africa",
      "hasOfferCatalog": {
        "@type": "OfferCatalog",
        "name": "Coaching Services",
        "itemListElement": [
          {
            "@type": "Offer",
            "itemOffered": {
              "@type": "Service",
              "name": "The Healing Harbour",
              "description": "Free inner circle community for high-capacity women seeking healing, identity restoration, and generational transformation"
            }
          },
          {
            "@type": "Offer",
            "itemOffered": {
              "@type": "Service",
              "name": "Group Coaching Programmes",
              "description": "Structured cohort-based programmes, workshops, and immersive retreat experiences"
            }
          },
          {
            "@type": "Offer",
            "itemOffered": {
              "@type": "Service",
              "name": "Private 1:1 Coaching",
              "description": "Intimate transformation work through private coaching with Lady Cyd"
            }
          }
        ]
      }
    }
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
    />
  );
}
