/**
 * @typedef {Object} Position
 * Conforms to https://jsonresume.org/schema/
 *
 * @property {string} name - Name of the company
 * @property {string} position - Position title
 * @property {string} url - Company website
 * @property {string} startDate - Start date of the position in YYYY-MM-DD format
 * @property {string|undefined} endDate - End date of the position in YYYY-MM-DD format.
 * If undefined, the position is still active.
 * @property {string|undefined} summary - html/markdown summary of the position
 * @property {string[]} highlights - plain text highlights of the position (bulleted list)
 */
const work = [
  {
    name: 'Aytasense Technologies ( a subsidiary of Sensesemi Technologies Pvt. Ltd.)',
    position: 'Senior Software Engineer',
    url: 'https://www.aytasense.com/',
    startDate: '2022-08-01',
    summary: 'A remote health care services for the patient/consumers, Hospitals/Clinics that helps measure the vitals (BP,SPO2, ECG - Heart Rate) with our IOT device and smart app',
    highlights: [
      'Developed enterprise app, doctor app, patient app, and SDK using Flutter from scratch for iOS and Android.',
      'Integrated IoT devices with mobile apps using Bluetooth Low Energy technology and WiFi (TCP sockets).',
      'Collaborated with the backend team to build and deploy APIs in Azure containers.',
      'Developed Admin portal using Svelekit from scratch for tenants and admins',
      'Implemented CI/CD pipelines using GitHub Actions to automate build, test, and deployment processes',
    ],
  },
  {
    name: 'Recipto',
    position: 'Software Engineer',
    url: 'https://recipto.in/',
    startDate: '2021-12-06',
    endDate: '2022-04-08',
    summary: 'Your day-to-day savings & cashback app. Get benefitted from earning cashback on purchases made anywhere, from physical stores to online apps and third-party platforms. Your every receipt counts to claim cashback from stores',
    highlights: [
      'Developed responsive UI’s and integrated REST API’s for an e-commerce application using Flutter.',
      'Updated an existing Flutter app to the latest version by implementing null safety.',
      'Integrated Firebase services, including Crashlytics, Dynamic links, and Remote config',
      'Deployed apps to Google Playstore and App store',
    ],
  },
];

export default work;
