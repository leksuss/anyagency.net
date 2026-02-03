import type { LegalPage } from '~/types'

export const termsOfService: LegalPage = {
  title: 'Terms of Service',
  lastUpdated: '2026-02-03',
  description: 'Terms of Service for AnyAgency SaaS platform. By using our Service, you agree to these terms governing your use of our TikTok integration platform.',
  metadata: {
    keywords: ['terms of service', 'user agreement', 'tiktok', 'saas terms', 'legal', 'kazakhstan'],
  },
  sections: [
    {
      id: 'acceptance-of-terms',
      title: '1. Acceptance of Terms',
      content: [
        'Welcome to AnyAgency, operated by Товарищество с ограниченной ответственностью "I-Con" (ИИН: 200840031733).',
        'By accessing or using the AnyAgency platform (the "Service"), you agree to be bound by these Terms of Service ("Terms"). If you do not agree to these Terms, you may not use our Service.',
      ],
      subsections: [
        {
          title: '1.1 Agreement to Terms',
          content: 'By creating an account, connecting your TikTok account, or using any feature of our Service, you acknowledge that you have read, understood, and agree to be bound by these Terms and our Privacy Policy.',
        },
        {
          title: '1.2 Eligibility',
          content: 'To use our Service, you must:',
          list: {
            type: 'bullet',
            items: [
              'Be at least 18 years old or the age of majority in your jurisdiction',
              'Have the legal capacity to enter into binding contracts',
              'Not be prohibited from using the Service under applicable laws',
              'Have a valid TikTok account in good standing',
              'Comply with TikTok\'s Terms of Service and Community Guidelines',
            ],
          },
        },
        {
          title: '1.3 Changes to Terms',
          content: 'We reserve the right to modify these Terms at any time. We will notify you of material changes via email or through a notice on our Service. Your continued use after such changes constitutes acceptance of the modified Terms.',
        },
      ],
    },
    {
      id: 'service-description',
      title: '2. Description of Service',
      content: [
        'AnyAgency is a SaaS (Software as a Service) platform that enables you to post video content to your TikTok account through our interface.',
      ],
      subsections: [
        {
          title: '2.1 Core Functionality',
          content: 'Our Service provides:',
          list: {
            type: 'bullet',
            items: [
              'TikTok account connection via OAuth 2.0',
              'Video upload and processing',
              'Video publishing to your TikTok account',
              'Content management and scheduling',
              'Publishing analytics and reporting',
            ],
          },
        },
        {
          title: '2.2 Service Availability',
          content: [
            'We strive to maintain high availability of our Service, but we do not guarantee uninterrupted access. The Service may be temporarily unavailable due to:',
          ],
          list: {
            type: 'bullet',
            items: [
              'Scheduled maintenance',
              'Technical issues or system failures',
              'TikTok API changes or downtime',
              'Force majeure events',
              'Security incidents requiring immediate action',
            ],
          },
        },
        {
          title: '2.3 Service Modifications',
          content: 'We reserve the right to modify, suspend, or discontinue any aspect of the Service at any time, with or without notice. We are not liable for any modification, suspension, or discontinuation of the Service.',
        },
      ],
    },
    {
      id: 'user-accounts',
      title: '3. User Accounts',
      subsections: [
        {
          title: '3.1 Account Creation',
          content: 'To use our Service, you must create an account by providing accurate and complete information. You agree to:',
          list: {
            type: 'bullet',
            items: [
              'Provide truthful, accurate, and current information',
              'Maintain and promptly update your account information',
              'Keep your password secure and confidential',
              'Immediately notify us of any unauthorized use of your account',
              'Accept responsibility for all activities under your account',
            ],
          },
        },
        {
          title: '3.2 Account Security',
          content: [
            'You are responsible for maintaining the confidentiality of your account credentials. We recommend:',
          ],
          list: {
            type: 'bullet',
            items: [
              'Using a strong, unique password',
              'Enabling two-factor authentication if available',
              'Not sharing your account with others',
              'Logging out from shared devices',
            ],
          },
        },
        {
          title: '3.3 TikTok Account Connection',
          content: [
            'By connecting your TikTok account to our Service:',
          ],
          list: {
            type: 'bullet',
            items: [
              'You authorize us to access your TikTok account through TikTok\'s official API',
              'You grant us permission to post content on your behalf when you explicitly initiate it',
              'You confirm you have the right to authorize such access',
              'You understand that you can revoke this authorization at any time',
            ],
          },
        },
        {
          title: '3.4 Account Termination',
          content: [
            'You may delete your account at any time through account settings. Upon account deletion:',
          ],
          list: {
            type: 'bullet',
            items: [
              'Your access to the Service will be terminated',
              'Your data will be deleted according to our Privacy Policy',
              'Unpaid fees remain payable',
              'You may not be entitled to refunds for unused subscription periods',
            ],
          },
        },
      ],
    },
    {
      id: 'tiktok-integration',
      title: '4. TikTok Integration and Compliance',
      content: [
        'Our Service integrates with TikTok through their official API. Your use of this integration is subject to additional terms.',
      ],
      subsections: [
        {
          title: '4.1 TikTok Terms Compliance',
          content: 'By using our Service, you agree to comply with:',
          list: {
            type: 'bullet',
            items: [
              'TikTok\'s Terms of Service',
              'TikTok\'s Community Guidelines',
              'TikTok\'s Privacy Policy',
              'TikTok\'s Music Usage Confirmation',
              'TikTok\'s Copyright Policy',
              'All applicable TikTok policies and guidelines',
            ],
          },
        },
        {
          title: '4.2 Content Requirements',
          content: 'All content posted through our Service to TikTok must comply with TikTok\'s Community Guidelines. You may not post content that:',
          list: {
            type: 'bullet',
            items: [
              'Violates TikTok\'s policies',
              'Infringes on intellectual property rights',
              'Contains illegal, harmful, or offensive material',
              'Promotes hate speech, violence, or discrimination',
              'Contains misleading or deceptive information',
              'Violates privacy rights of others',
            ],
          },
        },
        {
          title: '4.3 TikTok API Changes',
          content: 'TikTok may modify, limit, or discontinue their API at any time. If TikTok makes changes that affect our Service:',
          list: {
            type: 'bullet',
            items: [
              'We will make reasonable efforts to maintain compatibility',
              'Some features may become unavailable',
              'We are not responsible for disruptions caused by TikTok\'s changes',
              'You may not be entitled to compensation for such disruptions',
            ],
          },
        },
        {
          title: '4.4 TikTok Account Suspension',
          content: 'If your TikTok account is suspended, terminated, or restricted by TikTok, our ability to provide Service will be affected. We are not responsible for actions taken by TikTok regarding your account.',
        },
      ],
    },
    {
      id: 'intellectual-property',
      title: '5. Intellectual Property Rights',
      subsections: [
        {
          title: '5.1 Your Content',
          content: [
            'You retain all ownership rights to the content you create and upload through our Service ("Your Content").',
            'By using our Service, you grant us a limited, non-exclusive, worldwide license to:',
          ],
          list: {
            type: 'bullet',
            items: [
              'Process and transmit Your Content to TikTok on your behalf',
              'Store Your Content temporarily for the purpose of providing the Service',
              'Display Your Content in your account dashboard',
              'Use aggregated, anonymized data derived from Your Content for analytics',
            ],
          },
        },
        {
          title: '5.2 Content Representations',
          content: 'You represent and warrant that Your Content:',
          list: {
            type: 'bullet',
            items: [
              'Is owned by you or you have obtained all necessary rights and permissions',
              'Does not infringe any intellectual property rights of third parties',
              'Does not violate any laws or regulations',
              'Does not contain defamatory, libelous, or unlawful material',
              'Complies with all applicable content guidelines and policies',
            ],
          },
        },
        {
          title: '5.3 Our Service',
          content: [
            'The Service, including all software, designs, text, graphics, interfaces, and trademarks, is owned by ТОО "I-Con" or our licensors and is protected by intellectual property laws.',
            'You may not:',
          ],
          list: {
            type: 'bullet',
            items: [
              'Copy, modify, or reverse engineer any part of the Service',
              'Use our trademarks without written permission',
              'Remove or obscure any copyright or proprietary notices',
              'Create derivative works based on the Service',
              'Frame or mirror any content from the Service',
            ],
          },
        },
        {
          title: '5.4 Feedback',
          content: 'If you provide feedback, suggestions, or ideas about the Service, we may use them without any obligation to you, including for improving or marketing the Service.',
        },
      ],
    },
    {
      id: 'prohibited-use',
      title: '6. Prohibited Uses and Conduct',
      content: [
        'You agree not to use the Service for any unlawful purpose or in any way that violates these Terms.',
      ],
      subsections: [
        {
          title: '6.1 Prohibited Activities',
          content: 'You may not:',
          list: {
            type: 'bullet',
            items: [
              'Violate any applicable laws, regulations, or third-party rights',
              'Use the Service for fraudulent or deceptive purposes',
              'Upload malware, viruses, or malicious code',
              'Attempt to gain unauthorized access to the Service or other users\' accounts',
              'Interfere with or disrupt the Service or servers',
              'Use automated systems (bots, scripts) without authorization',
              'Harvest or collect user data without consent',
              'Impersonate any person or entity',
              'Engage in spam or unsolicited marketing',
              'Abuse, harass, or threaten other users',
            ],
          },
        },
        {
          title: '6.2 Content Restrictions',
          content: 'You may not post content that:',
          list: {
            type: 'bullet',
            items: [
              'Violates TikTok\'s Community Guidelines',
              'Contains illegal material (child exploitation, terrorism, etc.)',
              'Promotes violence, hatred, or discrimination',
              'Infringes intellectual property rights',
              'Contains false or misleading information',
              'Invades privacy or violates data protection laws',
              'Is pornographic or sexually explicit',
            ],
          },
        },
        {
          title: '6.3 Enforcement',
          content: [
            'We reserve the right to:',
          ],
          list: {
            type: 'bullet',
            items: [
              'Remove content that violates these Terms',
              'Suspend or terminate accounts that violate these Terms',
              'Report illegal activities to law enforcement',
              'Take legal action against violators',
              'Cooperate with investigations by authorities',
            ],
          },
        },
      ],
    },
    {
      id: 'limitation-of-liability',
      title: '7. Disclaimer of Warranties and Limitation of Liability',
      subsections: [
        {
          title: '7.1 Disclaimer of Warranties',
          content: [
            'THE SERVICE IS PROVIDED "AS IS" AND "AS AVAILABLE" WITHOUT WARRANTIES OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO:',
          ],
          list: {
            type: 'bullet',
            items: [
              'Warranties of merchantability, fitness for a particular purpose, or non-infringement',
              'Warranties that the Service will be uninterrupted, error-free, or secure',
              'Warranties regarding the accuracy, reliability, or completeness of content',
              'Warranties that defects will be corrected',
            ],
          },
        },
        {
          title: '7.2 Limitation of Liability',
          content: [
            'TO THE MAXIMUM EXTENT PERMITTED BY LAW, ТОО "I-Con" AND ITS OFFICERS, DIRECTORS, EMPLOYEES, AND AGENTS SHALL NOT BE LIABLE FOR:',
          ],
          list: {
            type: 'bullet',
            items: [
              'Indirect, incidental, special, consequential, or punitive damages',
              'Loss of profits, revenue, data, or business opportunities',
              'Damages arising from use or inability to use the Service',
              'Damages arising from TikTok\'s actions or API changes',
              'Damages arising from unauthorized access to your account',
              'Damages exceeding the fees paid by you in the 12 months preceding the claim',
            ],
          },
        },
        {
          title: '7.3 Third-Party Services',
          content: 'We are not responsible for:',
          list: {
            type: 'bullet',
            items: [
              'TikTok\'s availability, performance, or policies',
              'Actions taken by TikTok regarding your account or content',
              'Third-party services or content linked from our Service',
              'Disputes between you and other users',
            ],
          },
        },
        {
          title: '7.4 No Guarantee of Results',
          content: 'We do not guarantee any specific results from using the Service, including views, engagement, or success on TikTok. Your success depends on many factors outside our control.',
        },
      ],
    },
    {
      id: 'service-termination',
      title: '8. Termination',
      subsections: [
        {
          title: '8.1 Termination by You',
          content: 'You may terminate your account at any time by following the account deletion process in your account settings.',
        },
        {
          title: '8.2 Termination by Us',
          content: 'We may suspend or terminate your access to the Service immediately, without prior notice, if:',
          list: {
            type: 'bullet',
            items: [
              'You violate these Terms',
              'You engage in fraudulent or illegal activities',
              'Your account poses a security risk',
              'You fail to pay applicable fees',
              'We are required to do so by law',
              'We decide to discontinue the Service',
            ],
          },
        },
        {
          title: '8.3 Effect of Termination',
          content: 'Upon termination:',
          list: {
            type: 'bullet',
            items: [
              'Your right to use the Service immediately ceases',
              'Your account data will be deleted according to our Privacy Policy',
              'Provisions regarding intellectual property, disclaimers, and limitations survive',
              'You remain liable for any outstanding fees',
              'You are not entitled to refunds unless required by law',
            ],
          },
        },
        {
          title: '8.4 Data Retrieval',
          content: 'After termination, you may request a copy of your data within 30 days. After this period, your data may be permanently deleted.',
        },
      ],
    },
    {
      id: 'governing-law',
      title: '9. Governing Law and Dispute Resolution',
      subsections: [
        {
          title: '9.1 Governing Law',
          content: 'These Terms are governed by and construed in accordance with the laws of the Republic of Kazakhstan, without regard to its conflict of law provisions.',
        },
        {
          title: '9.2 Jurisdiction',
          content: 'You agree that any legal action or proceeding arising out of or related to these Terms or the Service shall be instituted exclusively in the courts of Almaty, Kazakhstan, and you consent to the jurisdiction of such courts.',
        },
        {
          title: '9.3 Dispute Resolution',
          content: [
            'Before filing any legal action, you agree to attempt to resolve disputes through:',
          ],
          list: {
            type: 'bullet',
            items: [
              'Direct negotiation by contacting legal@anyagency.net',
              'Good faith discussions for at least 30 days',
              'Mediation if negotiation fails',
            ],
          },
        },
        {
          title: '9.4 Exceptions',
          content: 'Nothing in this section prevents either party from seeking injunctive relief in court for intellectual property infringement or to prevent irreparable harm.',
        },
      ],
    },
    {
      id: 'general-provisions',
      title: '10. General Provisions',
      subsections: [
        {
          title: '10.1 Entire Agreement',
          content: 'These Terms, together with our Privacy Policy, constitute the entire agreement between you and ТОО "I-Con" regarding the Service and supersede all prior agreements.',
        },
        {
          title: '10.2 Severability',
          content: 'If any provision of these Terms is found to be invalid or unenforceable, the remaining provisions will remain in full force and effect.',
        },
        {
          title: '10.3 Waiver',
          content: 'Our failure to enforce any right or provision of these Terms will not be deemed a waiver of such right or provision.',
        },
        {
          title: '10.4 Assignment',
          content: 'You may not assign or transfer these Terms without our written consent. We may assign these Terms without restriction.',
        },
        {
          title: '10.5 No Agency',
          content: 'Nothing in these Terms creates any agency, partnership, joint venture, or employment relationship between you and us.',
        },
        {
          title: '10.6 Force Majeure',
          content: 'We are not liable for any delay or failure to perform resulting from causes beyond our reasonable control, including natural disasters, war, terrorism, labor disputes, or government actions.',
        },
        {
          title: '10.7 Language',
          content: 'These Terms are written in English. If translated into other languages, the English version prevails in case of any conflict.',
        },
      ],
    },
    {
      id: 'contact-information',
      title: '11. Contact Information',
      content: [
        'If you have questions about these Terms of Service, please contact us:',
      ],
      list: {
        type: 'bullet',
        items: [
          'Legal Email: legal@anyagency.net',
          'General Inquiries: hello@anyagency.net',
          'Company: Товарищество с ограниченной ответственностью "I-Con"',
          'ИИН: 200840031733',
          'Address: Казахстан, город Алматы, Турксибский район, Микрорайон ЖУЛДЫЗ-1, дом 13, кв. 59, почтовый индекс 050039',
          'Director: Дресвянский Алексей Сергеевич',
        ],
      },
      subsections: [
        {
          content: 'We aim to respond to all inquiries within 48 hours during business days.',
        },
      ],
    },
  ],
}
