const expertise = [
    {
        id: 0,
        title: 'Frontend Development',
        desc: 'For over a decade, I have been planning and programming on Frontend project. My passion lies in the delivery of superbly designed web/mobile experiences. I am a master of UX development with various front-end frameworks and is always focused on choosing the right tool for the job.',
    },
    {
        id: 1,
        title: 'Backend Development',
        desc: "I am a backend engineer with expertise in Python and Java. I am keenly interested in algorithm-level efficiency and has experience working both with back-end technologies as well as frameworks. I am also a competitive programmer who actively participates in different online challenges.",
    },
    {
        id: 2,
        title: 'CMS Development',
        desc: 'I am a CMS developer specializing in Shopify and WordPress focuses on creating and customizing websites using these popular CMS platforms. I possess expertise in developing themes, plugins, and extensions to enhance the functionality and design of online stores.',
    },
    {
        id: 3,
        title: 'Casino Game Development',
        desc: "Highly skilled and creative casino game developer with a proven track record of designing and implementing engaging and innovative gaming experiences. Committed to delivering high-quality, entertaining, and visually appealing casino games that captivate players and drive revenue.",
    },
    {
        id: 4,
        title: 'Blockchain Development',
        desc: "I am a developer with expertise in the blockchain space. I have built entire projects around blockchain. I have written and managed smart contract interactions on the Ethereum blockchain, built infrastructure, managed complex integrations.",
    },
    {
        id: 5,
        title: 'Mobile App Development',
        desc: "I am a passionate iOS and Android developer. I have extensive experience as a product architect in B2B hi-tech software as well as B2C web and mobile software. I am worked extensively on back-end.",
    },
]

export default function handler(req, res) {
    res.status(200).json(expertise)
}
