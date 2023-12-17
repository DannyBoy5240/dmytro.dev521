const review = [
  {
    id: 0,
    clientName: "Mustafash",
    clientLocation: "Egypt",
    clientSource: "Upwork",
    clientReview:
      "It is always nice to work with him. The work is finished quickly and he does more than is asked of him. It is also clear that he has a lot of knowledge of the work he does. I look forward to our next collaboration.",
  },
  {
    id: 1,
    clientName: "Melissabrown255",
    clientLocation: "United States",
    clientSource: "Upwork",
    clientReview:
      "He is very good with communication and website developer, great experience to work with him. ",
  },
  {
    id: 2,
    clientName: "Jake Corry",
    clientLocation: "Germany",
    clientSource: "Freelancer",
    clientReview:
      "Grayson is extremely knowledgeable and helpful. He knows in and out of web app development . His understanding of different technologies and frameworks in the space is also very impressive. I hope I get the chance to work with him again",
  },
  {
    id: 3,
    clientName: "Blaise Labriola",
    clientLocation: "France",
    clientSource: "Freelancer",
    clientReview:
      "I have worked with Grayson and he is very professional and excellent software  developer. I admire his speed of development and quality of work when given an assignment.",
  },
  {
    id: 4,
    clientName: "Blaise Labriola",
    clientLocation: "Germany",
    clientSource: "Freelancer",
    clientReview:
      "I hired Grayson to build a website for my business and I couldn't be happier with the results. They were able to bring my vision to life and create a user-friendly and visually appealing website. Their expertise in both front-end and back-end development was evident throughout the process.",
  },
  {
    id: 5,
    clientName: "Blaise Labriola",
    clientLocation: "Italy",
    clientSource: "Upwork",
    clientReview:
      "I worked with Grayson to develop a mobile app for my startup. He is highly skilled in both iOS and Android development, and he delivered a high-quality app within the agreed-upon timeframe. His attention to detail and responsiveness to our needs were commendable.",
  },
  {
    id: 6,
    clientName: "Blaise Labriola",
    clientLocation: "China",
    clientSource: "Upwork",
    clientReview:
      "I engaged Grayson to build an e-commerce platform for my online store. They demonstrated a deep understanding of the complexities involved in building a robust and secure e-commerce website. The end result was a seamless shopping experience for my customers.",
  },
  {
    id: 7,
    clientName: "Blaise Labriola",
    clientLocation: "Japan",
    clientSource: "Freelancer",
    clientReview:
      "I collaborated with Grayson to design and implement a database solution for my company. Their expertise in database management and optimization was evident as they created a scalable and efficient system. They were also great at explaining technical concepts in a way that non-technical team members could understand.",
  },
];
export default function handler(req, res) {
  res.status(200).json(review);
}
