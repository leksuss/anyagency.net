import type { LegalPage } from '~/types'

export const privacyPolicy: LegalPage = {
  title: 'Privacy Policy',
  lastUpdated: '2026-02-03',
  description: 'Privacy Policy for AnyAgency SaaS platform. Learn how we collect, use, and protect your personal information when you use our TikTok integration service.',
  metadata: {
    keywords: ['privacy', 'data protection', 'tiktok integration', 'personal data', 'kazakhstan', 'saas'],
  },
  sections: [
    {
      id: 'company-information',
      title: '1. Company Information',
      content: [
        'This Privacy Policy describes how Товарищество с ограниченной ответственностью "I-Con" (hereinafter referred to as the "Company," "we," "us," or "our") collects, uses, and protects your personal information when you use the AnyAgency SaaS platform (the "Service").',
        'Company Details:',
      ],
      list: {
        type: 'bullet',
        items: [
          'Legal Name: Товарищество с ограниченной ответственностью "I-Con"',
          'Registration Number (ИИН): 200840031733',
          'КАТО: 751910000',
          'Legal Address: Казахстан, город Алматы, Турксибский район, Микрорайон ЖУЛДЫЗ-1, дом 13, кв. 59, почтовый индекс 050039',
          'Director: Дресвянский Алексей Сергеевич',
          'Contact Email: privacy@anyagency.net',
        ],
      },
    },
    {
      id: 'information-we-collect',
      title: '2. Information We Collect',
      content: 'We collect the following categories of personal information when you use our Service:',
      subsections: [
        {
          title: '2.1 TikTok Account Information',
          content: 'When you connect your TikTok account through our platform, we collect:',
          list: {
            type: 'bullet',
            items: [
              'TikTok User ID',
              'Username and display name',
              'Profile picture (avatar)',
              'Access tokens for video posting functionality',
            ],
          },
        },
        {
          title: '2.2 Content Data',
          content: 'We process video content and related information that you choose to post through our Service:',
          list: {
            type: 'bullet',
            items: [
              'Video files you upload',
              'Video captions and descriptions',
              'Hashtags and metadata',
              'Publishing settings (privacy level, commenting options)',
            ],
          },
        },
        {
          title: '2.3 Account Information',
          content: 'When you create an account with us, we collect:',
          list: {
            type: 'bullet',
            items: [
              'Email address',
              'Password (encrypted)',
              'Account preferences and settings',
            ],
          },
        },
        {
          title: '2.4 Technical Information',
          content: 'We automatically collect certain technical information for security and service improvement:',
          list: {
            type: 'bullet',
            items: [
              'IP address',
              'Browser type and version',
              'Device type and operating system',
              'Usage logs and timestamps',
              'Error reports and diagnostic data',
            ],
          },
        },
      ],
    },
    {
      id: 'how-we-collect',
      title: '3. How We Collect Information',
      content: 'We collect information through the following methods:',
      subsections: [
        {
          title: '3.1 Directly From You',
          content: 'Information you provide when:',
          list: {
            type: 'bullet',
            items: [
              'Creating an account on our platform',
              'Connecting your TikTok account via OAuth authorization',
              'Uploading videos or content',
              'Contacting our support team',
              'Participating in surveys or feedback forms',
            ],
          },
        },
        {
          title: '3.2 Through TikTok API',
          content: 'We access your TikTok data through TikTok\'s official API after you grant us explicit permission through TikTok\'s OAuth 2.0 authorization flow. We only request the minimum permissions necessary for our Service to function.',
        },
        {
          title: '3.3 Automatically',
          content: 'Through cookies, log files, and similar tracking technologies when you interact with our Service. You can control cookie settings through your browser preferences.',
        },
      ],
    },
    {
      id: 'how-we-use',
      title: '4. How We Use Your Information',
      content: 'We use your personal information for the following purposes:',
      list: {
        type: 'bullet',
        items: [
          {
            text: 'Service Delivery: To provide our core functionality of posting videos to your TikTok account',
            subitems: [
              'Authenticating your identity',
              'Processing and publishing your video content',
              'Managing your account and preferences',
            ],
          },
          {
            text: 'Service Improvement: To enhance and optimize our platform',
            subitems: [
              'Analyzing usage patterns',
              'Troubleshooting technical issues',
              'Developing new features',
            ],
          },
          {
            text: 'Communication: To keep you informed',
            subitems: [
              'Sending service-related notifications',
              'Responding to your inquiries',
              'Providing customer support',
            ],
          },
          {
            text: 'Security: To protect our Service and users',
            subitems: [
              'Detecting and preventing fraud',
              'Monitoring for suspicious activity',
              'Enforcing our Terms of Service',
            ],
          },
          {
            text: 'Legal Compliance: To meet our legal obligations',
            subitems: [
              'Complying with applicable laws and regulations',
              'Responding to legal requests',
              'Protecting our legal rights',
            ],
          },
        ],
      },
    },
    {
      id: 'data-sharing',
      title: '5. How We Share Your Information',
      content: [
        'We respect your privacy and do not sell your personal information to third parties. We only share your information in the following limited circumstances:',
      ],
      subsections: [
        {
          title: '5.1 With TikTok',
          content: 'We share your video content and related metadata with TikTok through their official API for the purpose of publishing content to your TikTok account. This sharing is essential for our Service to function and occurs only when you explicitly initiate a video upload.',
        },
        {
          title: '5.2 Service Providers',
          content: 'We work with trusted third-party service providers who assist us in operating our platform:',
          list: {
            type: 'bullet',
            items: [
              'Cloud hosting providers (for secure data storage)',
              'Content delivery networks (for video processing)',
              'Analytics services (for service improvement)',
              'Email service providers (for communications)',
            ],
          },
        },
        {
          title: '5.3 Legal Requirements',
          content: 'We may disclose your information if required by law, court order, or governmental regulation, or if we believe disclosure is necessary to:',
          list: {
            type: 'bullet',
            items: [
              'Comply with legal processes',
              'Enforce our Terms of Service',
              'Protect the rights, property, or safety of our company, users, or others',
              'Investigate potential violations of our policies',
            ],
          },
        },
        {
          title: '5.4 Business Transfers',
          content: 'In the event of a merger, acquisition, or sale of assets, your personal information may be transferred to the acquiring entity. We will notify you via email and/or prominent notice on our Service before your information becomes subject to a different privacy policy.',
        },
        {
          content: 'We do not sell, rent, or trade your personal information with third parties for their marketing purposes.',
        },
      ],
    },
    {
      id: 'your-rights',
      title: '6. Your Rights',
      content: 'You have the following rights regarding your personal information:',
      list: {
        type: 'bullet',
        items: [
          {
            text: 'Right to Access: You can request a copy of the personal information we hold about you',
          },
          {
            text: 'Right to Rectification: You can request correction of inaccurate or incomplete information',
          },
          {
            text: 'Right to Deletion: You can request deletion of your personal data, subject to legal obligations',
          },
          {
            text: 'Right to Data Portability: You can request your data in a structured, machine-readable format',
          },
          {
            text: 'Right to Withdraw Consent: You can disconnect your TikTok account at any time',
          },
          {
            text: 'Right to Object: You can object to certain types of processing',
          },
          {
            text: 'Right to Lodge a Complaint: You can file a complaint with relevant data protection authorities',
          },
        ],
      },
      subsections: [
        {
          title: 'How to Exercise Your Rights',
          content: [
            'To exercise any of these rights, please contact us at privacy@anyagency.net. We will respond to your request within 30 days.',
            'You can also manage many aspects of your data directly through your account settings, including:',
          ],
          list: {
            type: 'bullet',
            items: [
              'Viewing your connected TikTok account information',
              'Disconnecting your TikTok account',
              'Updating your email preferences',
              'Deleting your account entirely',
            ],
          },
        },
      ],
    },
    {
      id: 'data-retention',
      title: '7. Data Retention',
      content: [
        'We retain your personal information for as long as necessary to provide our Service and fulfill the purposes described in this Privacy Policy.',
      ],
      subsections: [
        {
          title: '7.1 Active Accounts',
          content: 'We retain your data while your account is active and you continue to use our Service.',
        },
        {
          title: '7.2 Account Deletion',
          content: 'When you delete your account:',
          list: {
            type: 'bullet',
            items: [
              'Your account data is marked for deletion within 30 days',
              'Some information may be retained longer for legal or security purposes',
              'Backup copies are removed within 90 days',
              'Aggregated, anonymized data may be retained indefinitely for analytics',
            ],
          },
        },
        {
          title: '7.3 Inactive Accounts',
          content: 'Accounts inactive for more than 2 years may be archived or deleted. We will notify you via email before taking such action.',
        },
        {
          title: '7.4 Legal Obligations',
          content: 'Certain information may be retained longer when required by law, for tax purposes, to resolve disputes, or to enforce our agreements.',
        },
      ],
    },
    {
      id: 'data-security',
      title: '8. Data Security',
      content: [
        'We implement industry-standard security measures to protect your personal information from unauthorized access, disclosure, alteration, and destruction.',
      ],
      subsections: [
        {
          title: '8.1 Technical Measures',
          list: {
            type: 'bullet',
            items: [
              'Encryption in transit (HTTPS/TLS for all connections)',
              'Encryption at rest (for stored data)',
              'Secure password hashing (bcrypt)',
              'Access tokens encrypted in database',
              'Regular security audits and penetration testing',
            ],
          },
        },
        {
          title: '8.2 Organizational Measures',
          list: {
            type: 'bullet',
            items: [
              'Strict access controls (principle of least privilege)',
              'Employee training on data protection',
              'Regular security awareness programs',
              'Incident response procedures',
              'Secure development practices',
            ],
          },
        },
        {
          title: '8.3 Limitations',
          content: 'While we strive to protect your data, no method of transmission over the internet or electronic storage is 100% secure. We cannot guarantee absolute security. If you believe your account has been compromised, please contact us immediately at privacy@anyagency.net.',
        },
      ],
    },
    {
      id: 'cookies-tracking',
      title: '9. Cookies and Tracking Technologies',
      content: [
        'We use cookies and similar tracking technologies to enhance your experience and analyze usage of our Service.',
      ],
      subsections: [
        {
          title: '9.1 Types of Cookies We Use',
          list: {
            type: 'bullet',
            items: [
              {
                text: 'Essential Cookies: Required for the Service to function properly',
                subitems: [
                  'Session authentication',
                  'Security features',
                  'Load balancing',
                ],
              },
              {
                text: 'Analytics Cookies: Help us understand how users interact with our Service',
                subitems: [
                  'Page views and navigation patterns',
                  'Feature usage statistics',
                  'Error tracking',
                ],
              },
              {
                text: 'Preference Cookies: Remember your settings and preferences',
                subitems: [
                  'Language preferences',
                  'UI customizations',
                ],
              },
            ],
          },
        },
        {
          title: '9.2 Managing Cookies',
          content: [
            'You can control cookies through your browser settings. Most browsers allow you to:',
          ],
          list: {
            type: 'bullet',
            items: [
              'View and delete cookies',
              'Block third-party cookies',
              'Block all cookies (this may affect Service functionality)',
              'Receive warnings before cookies are stored',
            ],
          },
        },
        {
          title: '9.3 Third-Party Analytics',
          content: 'We may use third-party analytics services to help understand usage of our Service. These services may collect information about your use of our Service and other websites. They have their own privacy policies governing their use of information.',
        },
      ],
    },
    {
      id: 'changes-to-policy',
      title: '10. Changes to This Privacy Policy',
      content: [
        'We may update this Privacy Policy from time to time to reflect changes in our practices, technology, legal requirements, or other factors.',
      ],
      subsections: [
        {
          title: 'How We Notify You',
          content: 'When we make material changes to this Privacy Policy, we will:',
          list: {
            type: 'bullet',
            items: [
              'Update the "Last Updated" date at the top of this policy',
              'Send you an email notification to your registered email address',
              'Display a prominent notice on our Service',
              'Request your consent if required by applicable law',
            ],
          },
        },
        {
          title: 'Your Continued Use',
          content: 'Your continued use of our Service after the effective date of changes constitutes your acceptance of the updated Privacy Policy. If you do not agree with the changes, you should discontinue use of our Service and delete your account.',
        },
        {
          title: 'Review Regularly',
          content: 'We encourage you to review this Privacy Policy periodically to stay informed about how we are protecting your information.',
        },
      ],
    },
    {
      id: 'contact-information',
      title: '11. Contact Information',
      content: [
        'If you have questions, concerns, or requests regarding this Privacy Policy or our data practices, please contact us:',
      ],
      list: {
        type: 'bullet',
        items: [
          'Privacy Email: privacy@anyagency.net',
          'Legal Email: legal@anyagency.net',
          'General Inquiries: hello@anyagency.net',
          'Mailing Address: Казахстан, город Алматы, Турксибский район, Микрорайон ЖУЛДЫЗ-1, дом 13, кв. 59, почтовый индекс 050039',
        ],
      },
      subsections: [
        {
          content: 'We aim to respond to all inquiries within 48 hours during business days. For urgent security matters, please include "URGENT" in your email subject line.',
        },
      ],
    },
    {
      id: 'tiktok-integration',
      title: '12. TikTok Integration',
      content: [
        'This section provides specific information about how we integrate with TikTok and use your TikTok data.',
      ],
      subsections: [
        {
          title: '12.1 Purpose of TikTok Integration',
          content: [
            'We use TikTok\'s API solely for the purpose of enabling you to post video content to your TikTok account through our platform. This is the core functionality of our Service.',
          ],
        },
        {
          title: '12.2 What We Do With TikTok Data',
          content: 'We use your TikTok data exclusively for:',
          list: {
            type: 'bullet',
            items: [
              'Authenticating your identity and connecting your TikTok account',
              'Posting videos to your TikTok account when you explicitly request it',
              'Displaying your TikTok username and profile picture in our interface',
              'Maintaining your connection status with TikTok',
            ],
          },
        },
        {
          title: '12.3 What We Do NOT Do',
          content: 'We explicitly do not:',
          list: {
            type: 'bullet',
            items: [
              'Use your TikTok data for advertising or marketing purposes',
              'Use your TikTok data for analytics beyond what is necessary for service operation',
              'Share your TikTok data with third parties except as described in this Privacy Policy',
              'Post content to your TikTok account without your explicit action',
              'Access your TikTok followers, private messages, or For You page',
              'Store your TikTok password (we use OAuth tokens only)',
              'Sell your TikTok data to anyone',
            ],
          },
        },
        {
          title: '12.4 TikTok Permissions',
          content: [
            'When you connect your TikTok account, you grant us the following TikTok permissions:',
          ],
          list: {
            type: 'bullet',
            items: [
              'user.info.basic: To read your TikTok user ID and username',
              'video.upload: To post videos to your TikTok account',
            ],
          },
        },
        {
          title: '12.5 Revoking Access',
          content: [
            'You can revoke our access to your TikTok account at any time by:',
          ],
          list: {
            type: 'bullet',
            items: [
              'Disconnecting your TikTok account in our platform settings',
              'Revoking AnyAgency\'s access through your TikTok privacy settings',
              'Deleting your AnyAgency account entirely',
            ],
          },
        },
        {
          title: '12.6 TikTok Terms',
          content: [
            'Your use of TikTok through our Service is also governed by:',
          ],
          list: {
            type: 'bullet',
            items: [
              'TikTok\'s Terms of Service',
              'TikTok\'s Privacy Policy',
              'TikTok\'s Community Guidelines',
              'TikTok\'s Music Usage Confirmation',
            ],
          },
        },
        {
          title: '12.7 TikTok API Compliance',
          content: 'We comply with all TikTok Developer Terms and TikTok API policies. We are committed to using TikTok data responsibly and transparently in accordance with TikTok\'s requirements and user expectations.',
        },
      ],
    },
  ],
}
