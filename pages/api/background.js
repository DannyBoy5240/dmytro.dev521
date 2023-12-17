const background = [
    {
        eduCards: [
            {
                id: 0,
                title: 'MS, Wroclaw University of Technology',
                degree: 'Poland',
                detail: 
                    "Master of Computer Science (MSCS), Computer science\n\n" + 
                    "During the two-year master's course, I focused on artificial intelligence, including image processing and interactive robot making, and completed a master's thesis by completing 'A method of optimization search using the Adaboost algorithm' in the process.",
                year: '2016-2019'
            },
        ]
    },
    {
        expCards: [
            {
                id: 1,
                title: 'Atos Poland Global Services',
                role: 'Full-Stack Developer',
                url: '#',
                desc: 
                    "- Developed and maintained full-stack applications, utilizing modern technologies and frameworks to deliver robust and user-friendly solutions.\n" + 
                    "- Collaborated with cross-functional teams to gather requirements, design system architecture, and implement scalable and efficient solutions.\n" + 
                    "- Integrated third-party APIs and services, ensuring seamless data flow and enhancing the functionality of web applications.\n" + 
                    "- Conducted code reviews, implemented best practices, and mentored junior developers to improve code quality and foster a collaborative development environment.\n",
                year: '05/2022 – 09/2023',
                location: 'Poland'
            },
            {
                id: 2,
                title: 'Essential Designs',
                role: 'Back-end Java Developer',
                url: 'https://www.essentialdesigns.net/',
                desc: 
                    "- Created a search system for finding branches and ATMs filtered by various criteria, including a nearby feature.\n" + 
                    "- Wrote unit tests and integration tests using JUnit and Cucumber.\n" + 
                    "- Implemented performance optimizations by introducing lat/long caching on top of a Geo Time Zone API.\n" + 
                    "- Ensured that all of the REST APIs adhered to JSON API standards.\n" + 
                    "- Implemented the front end using React and developed components from scratch.\n",
                year: '08/2019 – 03/2022',
                location: 'Poland'
            },

        ]
    }
]


export default function handler(req, res) {
    res.status(200).json(background)
}
