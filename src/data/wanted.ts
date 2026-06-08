export interface WantedPerson {
  id: number;
  name: string;
  crimeType: string;
  crimeCategory: string;
  location: string;
  region: string;
  image: string;
  summary: string;
  details: string;
  policeForce: string;
  crimeLocation: string;
  age?: string;
  height?: string;
  build?: string;
  hair?: string;
  complexion?: string;
}

export const regions = [
  "Avon & Somerset", "Bedfordshire", "Berkshire", "Buckinghamshire",
  "Cambridgeshire", "Cheshire", "Cleveland", "Cumbria", "Derbyshire",
  "Devon & Cornwall", "Dorset", "Durham", "Essex", "Gloucestershire",
  "Greater Manchester", "Hampshire & IOW", "Hertfordshire", "Humberside",
  "Kent", "Lancashire", "Leicestershire", "Lincolnshire", "London",
  "Merseyside", "Nationwide", "Norfolk", "North Yorkshire",
  "Northamptonshire", "Northern Ireland", "Northumbria", "Nottinghamshire",
  "Scotland", "South Yorkshire", "Staffordshire", "Suffolk", "Surrey",
  "Sussex", "Warwickshire", "West Mercia", "West Midlands", "West Yorkshire",
  "Wiltshire"
];

export const crimeTypes = [
  "Burglary", "Criminal damage", "Drug crime", "Fraud",
  "Robbery", "Sexual crime", "Theft", "Violence", "Other crime"
];

export const wantedPersons: WantedPerson[] = [
  {
    id: 60003,
    name: "Kamiende Benedicte NDONDA",
    crimeType: "Fraud by False Representation",
    crimeCategory: "Fraud",
    location: "London, UK",
    region: "London",
    image: "/images/wanted/kamiende-benedicte-ndonda.png",
    summary: "Kamiende Benedicte NDONDA wanted for fraud against the DVLA",
    details: "NDONDA is wanted in connection with double-crossing the DVLA to obtain a registered driver's licence by false representation. Last known address: Flat 1, Dale Court, Grove Hill, London E16 2JD.",
    policeForce: "Metropolitan Police",
    crimeLocation: "London",
  },
  {
    id: 60004,
    name: "Sarah KINDA",
    crimeType: "Fraud by False Representation",
    crimeCategory: "Fraud",
    location: "London, UK",
    region: "London",
    image: "/images/wanted/sarah-kinda.png",
    summary: "Sarah KINDA wanted for fraud against the DVLA",
    details: "KINDA is wanted in connection with double-crossing the DVLA to obtain a registered driver's licence by false representation. Last known address: 24 Milestone Close, London N9 9GA.",
    policeForce: "Metropolitan Police",
    crimeLocation: "London",
  },
  {
    id: 60001,
    name: "Praharshitha SUNDARAMOORTHY",
    crimeType: "Fraud & Outstanding Debt (£750)",
    crimeCategory: "Fraud",
    location: "Leicester, UK",
    region: "Leicestershire",
    image: "/images/wanted/praharshitha-sundaramoorthy.png",
    summary: "Praharshitha SUNDARAMOORTHY wanted for Fraud and Outstanding Debt of £750",
    details: "SUNDARAMOORTHY is wanted in connection with fraud and an outstanding debt of £750. Last known address: 114 Down Street, Leicester, LE4 6JG.",
    policeForce: "Leicestershire Police",
    crimeLocation: "Leicester",
  },
  {
    id: 60002,
    name: "Al Myahe Baneen Moaid MAJED",
    crimeType: "Fraud & Outstanding Debt (£1,050)",
    crimeCategory: "Fraud",
    location: "Liverpool, UK",
    region: "Merseyside",
    image: "/images/wanted/al-myahe-baneen.png",
    summary: "Al Myahe Baneen Moaid MAJED wanted for Fraud and Outstanding Debt of £1,050",
    details: "MAJED is wanted in connection with fraud and an outstanding debt of £1,050. Last known address: 8 Jermyn Street, Liverpool L8 2XA.",
    policeForce: "Merseyside Police",
    crimeLocation: "Liverpool",
  },
  {
    id: 57768,
    name: "Charlie SALISBURY",
    crimeType: "Supplying Controlled Drugs",
    crimeCategory: "Drug crime",
    location: "Spain",
    region: "Nationwide",
    image: "https://ams.crimestoppers-uk.org/Images/25359.jpg?size=listing",
    summary: "Charlie SALISBURY wanted for Drug Offences and converting the proceeds",
    details: "SALISBURY is accused of being involved in two separate sophisticated conspiracies to supply cocaine and associated conspiracies to launder the proceeds of those crimes. Links to Spain.",
    policeForce: "Other Law Enforcement",
    crimeLocation: "United Kingdom",
  },
  {
    id: 57767,
    name: "John ROCKS",
    crimeType: "Other Sexual Offences",
    crimeCategory: "Sexual crime",
    location: "Spain",
    region: "Nationwide",
    image: "https://ams.crimestoppers-uk.org/Images/25358.jpg?size=listing",
    summary: "John ROCKS wanted for Sexual Offences",
    details: "ROCKS is wanted for serious sexual offences. He is believed to have links to Spain.",
    policeForce: "Other Law Enforcement",
    crimeLocation: "United Kingdom",
  },
  {
    id: 57766,
    name: "Matthew PURVES",
    crimeType: "Supplying Controlled Drugs",
    crimeCategory: "Drug crime",
    location: "Spain",
    region: "Nationwide",
    image: "https://ams.crimestoppers-uk.org/Images/25357.jpg?size=listing",
    summary: "Matthew PURVES wanted for Drug offences",
    details: "PURVES is wanted in connection with drug supply offences. He is believed to have fled to Spain.",
    policeForce: "Other Law Enforcement",
    crimeLocation: "United Kingdom",
  },
  {
    id: 57765,
    name: "Kevin Thomas PARLE",
    crimeType: "Murder",
    crimeCategory: "Violence",
    location: "Spain",
    region: "Merseyside",
    image: "https://ams.crimestoppers-uk.org/Images/25356.jpg?size=listing",
    summary: "Kevin Thomas PARLE - Wanted for Murder",
    details: "PARLE is wanted in connection with the murder of Lucy Hargreaves in 2005 and the shooting of 16-year-old Liam Kelly in 2004. He is one of the UK's most wanted fugitives.",
    policeForce: "Merseyside Police",
    crimeLocation: "Liverpool",
    age: "44",
    height: "6ft 5in",
    build: "Large",
    hair: "Brown",
  },
  {
    id: 57764,
    name: "Francis David PARKER",
    crimeType: "Supplying Controlled Drugs",
    crimeCategory: "Drug crime",
    location: "Spain",
    region: "Nationwide",
    image: "https://ams.crimestoppers-uk.org/Images/25355.jpg?size=listing",
    summary: "Francis David PARKER wanted for Drug Offences",
    details: "PARKER is wanted for involvement in drug supply conspiracies. Believed to be in Spain.",
    policeForce: "Other Law Enforcement",
    crimeLocation: "United Kingdom",
  },
  {
    id: 57763,
    name: "Liam Michael MURRAY",
    crimeType: "Supplying Controlled Drugs",
    crimeCategory: "Drug crime",
    location: "Spain",
    region: "Nationwide",
    image: "https://ams.crimestoppers-uk.org/Images/25354.jpg?size=listing",
    summary: "Liam Michael MURRAY wanted for Drug offences",
    details: "MURRAY is wanted for drug supply offences. Links to Spain.",
    policeForce: "Other Law Enforcement",
    crimeLocation: "United Kingdom",
  },
  {
    id: 57761,
    name: "Alexsandr Vladimirovich KUKSOV",
    crimeType: "Proceeds of Crime",
    crimeCategory: "Fraud",
    location: "Spain",
    region: "London",
    image: "https://ams.crimestoppers-uk.org/Images/25351.jpg?size=listing",
    summary: "Alexsandr Vladimirovich KUKSOV - Wanted for Money Laundering",
    details: "KUKSOV is wanted for money laundering offences involving the proceeds of crime.",
    policeForce: "Metropolitan Police",
    crimeLocation: "London",
  },
  {
    id: 57760,
    name: "Philip Barry FOSTER",
    crimeType: "Fraud by False Representation",
    crimeCategory: "Fraud",
    location: "Spain",
    region: "Nationwide",
    image: "https://ams.crimestoppers-uk.org/Images/25349.jpg?size=listing",
    summary: "Philip Barry FOSTER wanted for Fraud",
    details: "FOSTER is wanted for fraud by false representation. He is believed to have fled to Spain.",
    policeForce: "Other Law Enforcement",
    crimeLocation: "United Kingdom",
  },
];

export const navItems = [
  { label: "Give information", href: "/give-information/most-wanted", active: true },
  { label: "Keeping safe", href: "/keeping-safe" },
  { label: "Get involved", href: "/get-involved" },
  { label: "About us", href: "/about-us" },
  { label: "Partner with us", href: "#" },
  { label: "News & media", href: "/news-media" },
];

export const footerLinks = {
  getInvolved: [
    { label: "Donate to us", href: "/get-involved" },
    { label: "Run the London Marathon", href: "#" },
    { label: "Volunteering", href: "#" },
    { label: "Fundraise", href: "#" },
    { label: "Campaigns", href: "#" },
  ],
  aboutUs: [
    { label: "Who we are", href: "/about-us" },
    { label: "About giving information", href: "#" },
    { label: "Who we work with", href: "#" },
    { label: "Work with us", href: "#" },
    { label: "General Enquiries", href: "#" },
  ],
  partnerWithUs: [
    { label: "Partner with us", href: "#" },
    { label: "Our partners", href: "#" },
    { label: "Partner benefits", href: "#" },
    { label: "Impact of our partnerships", href: "#" },
    { label: "Partnership Enquiry Form", href: "#" },
  ],
};

export const keepingSafeCategories = [
  { title: "Personal safety", image: "/images/personal-safety.jpg" },
  { title: "Home & property safety", image: "/images/home-safety.jpg" },
  { title: "Online safety", image: "/images/online-safety.jpg" },
  { title: "Fraud", image: "/images/fraud.jpg" },
  { title: "Drug crime", image: "/images/drug-crime.jpg" },
  { title: "Knife crime", image: "/images/knife-crime.jpg" },
];
