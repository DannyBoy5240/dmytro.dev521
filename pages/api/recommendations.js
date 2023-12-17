// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
const recommendationCard = [
  {
    id: 0,
    name: 'Howard Powell',
    image: "images/Howard Powell.png",
    designation: 'Data Scientist | Machine Learning Engineer | Python Developer',
    view: "I had the privilege of working alongside him on multiple university projects, and I must say, his talent and work ethic truly stood out. Recently, we were both part of the dynamic team at JMM Technologies, where his professionalism and attention to detail shone brightly. I wholeheartedly endorse Osama for any opportunity that calls for a highly skilled and dedicated individual.",
    linkednURL: "#"
  },
  {
    id: 1,
    name: 'Matt Stoner',
    image: "images/Matt Stoner.jpg",
    designation: 'MERN | JavaScript | Tailwind | Sass | Bootstrap',
    view: "I wholeheartedly recommend Grayson as a talented React frontend developer with an incredible flair for UI/UX design. His proficiency in Node.js further enhances his capabilities, allowing him to build robust and scalable applications. Grayson's attention to detail, problem-solving skills, and dedication to delivering exceptional results make him a valuable addition to any development team.",
    linkednURL: "#"
  },
  {
    id: 2,
    name: 'Patrick Holmes',
    image: "images/Patrick Holmes.jpg",
    designation: 'MERN Stack Developer at Productbox',
    view: "He did an excellent job with my website. I have worked with him multiple times over the last two years and he is my favorite freelancer! He is smart, honest, and a very skilled coder.",
    linkednURL: "#"
  },
  {
    id: 3,
    name: 'Frank Lambert',
    image: "images/Frank Lambert.jpg",
    designation: 'GSR MERL | Grad student at UC Santa Cruz',
    view: "He does not only meets expectations but exceeds them. He delivered a satisfactory end product earlier than the agreed timeline. Will hire him for my future projects!",
    linkednURL: "#"
  },
  {
    id: 4,
    name: 'Charles Hallock',
    image: "images/Charles Hallock.jpg",
    designation: 'Implement B2B store in an app, KYC and Integation of Printful API.',
    view: "Excellent Prompt Work. He made sure everything was correct and I was happy with it before completion. Very fast and prompt, will 100% use again.",
    linkednURL: "#"
  },
  {
    id: 5,
    name: 'William Merlin',
    image: "images/William Merlin.jpg",
    designation: 'Social Media Feature.',
    view: "Excellent Service! Sandeep understood our needs and delivered a fantastic outcome. Will be using him going forward for all our custom development.",
    linkednURL: "#"
  },
  {
    id: 6,
    name: 'Jon Hempel',
    image: "images/Jon Hempel.jpg",
    designation: 'Product Customizer completion, Integration on Store, Social media, Chat module & push notifications complete.',
    view: "I didn't see any Freelancers like this, There was a good team, with good communication, really they're professional developers, they worked for me 24 hrs, without stopping, I appreciate their works.",
    linkednURL: "#"
  },
  {
    id: 7,
    name: 'Milton Geyer',
    image: "images/Milton Geyer.jpg",
    designation: 'Expert Full Stack Developer',
    view: "I wanted to take a moment to express my gratitude for the exceptional work that you and your team have done on the software development project for our organization. The software is truly outstanding and has exceeded our expectations in every way.",
    linkednURL: "#"
  },
  {
    id: 8,
    name: 'Bobby Noel',
    image: "images/Bobby Noel.jpg",
    designation: 'Developer & Configure a Product Customizer.',
    view: "I had the pleasure of working with the PiZone Team for our recent mobile app development project, and I must say they exceeded all our expectations. Their professionalism, expertise, and commitment to delivering top-notch results were outstanding from start to finish. Thank you, PiZone Team, for your exceptional work! We look forward to collaborating with you again in the future.",
    linkednURL: "#"
  },
  {
    id: 9,
    name: 'Joesph King',
    image: "images/Joesph King.jpg",
    designation: 'Project Manager',
    view: "He was very knowledgeable and great to work with. Fast and reliable serve. Able to provide the needed specs in allotted time with rapid turnaround.The team was great to work with and understood what I needed. Excellent work and experience! Thank you!",
    linkednURL: "#"
  },
  {
    id: 10,
    name: 'Susanna Vu',
    image: "images/Susanna Vu.jpg",
    designation: 'Google Extension APIs Developer',
    view: "The project took more time and money than I had planned. In any way basically project tasks have been fulfilled enough good. I satisfied! I recommended Nguyen N. as professional in his filed!",
    linkednURL: "#"
  },
  {
    id: 11,
    name: 'Lloyd Beam',
    image: "images/Lloyd Beam.jpg",
    designation: 'Software programming, Facial Recognition, Web managed...',
    view: "This man is an awesome developer and have a very high experinece in SSMS and SSAS, and also for connetion from outsite the domain ! he is a very nioce guy and helps to the end. than you for the time and patient.",
    linkednURL: "#"
  },
  {
    id: 12,
    name: 'Oscar Ward',
    image: "images/Oscar Ward.jpg",
    designation: 'Create DayCounter in Pandas/Python',
    view: "Grayson went above and beyond on this project - like always. In the past, my company has tried many outside resources for projects similar to this but the reason we keep utilizing Grayson is his work ethic and his quality of work and would highly recommend him",
    linkednURL: "#"
  },
  {
    id: 13,
    name: 'Charles Robledo',
    image: "images/Charles Robledo.jpg",
    designation: 'Python function for creating cubic spline from lat/lon points',
    view: "Once again, I had an incredible experience working with him. I feel extremely fortunate to have found his services. He maintained great communication throughout the project and successfully implemented the KYC module, Stripe integrations for the payments, and has taken care of the administrative area of my extensive web application using React, PHP, and Laravel technologies.",
    linkednURL: "#"
  },
  {
    id: 14,
    name: 'Mary Johnson',
    image: "images/Mary Johnson.jpg",
    designation: 'Expert Full Stack Developer needed',
    view: "Another successful job done perfectly well by Grayson and his dev team. He nailed down an entire social media module containing Timeline, Newsfeed (containing Likes, Comments, Share), B2B store integration with social media platform and real time chat. He is pros in Laravel, AWS, JavaScript and React alongside API development and integration. Highly recommended",
    linkednURL: "#"
  },
  {
    id: 15,
    name: 'Kent Beach',
    image: "images/Kent Beach.jpg",
    designation: 'Project for Atif S.',
    view: "Great to work with Grayson. Delivers great work and communicates very well in earnest intent to complete the project as I have envisioned.",
    linkednURL: "#"
  },
]
export default function handler(req, res) {
  res.status(200).json(recommendationCard)
}
