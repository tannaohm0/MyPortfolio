import ayla from '/public/image/ayla.jpg';
import crefin from '/public/image/crefin.jpg';
import realEstate from '/public/image/real-estate.jpg';
import travel from '/public/image/travel.jpg';

export const projectsData = [
    {
        id: 1,
        name: 'Question Paper Generator',
        description: "A C++ app that automates question paper generation in PDF format, improving efficiency by 30% with dynamic question selection and formatting options.",
        tools: ['C++', 'PDF Generation', 'Automation'],
        role: 'Developer',
        code: 'https://github.com/tannaohm0/Question_Paper_Generator-Generator',
        demo: '',
        image: ayla, 
    },
    {
        id: 2,
        name: 'Gym Management System',
        description: "A web-based system using HTML, CSS, JavaScript, PHP, and MySQL to streamline gym operations, reducing overhead by 40% with an integrated UI and backend.",
        tools: ['HTML', 'CSS', 'JavaScript', 'PHP', 'MySQL'],
        role: 'Full Stack Developer',
        code: 'https://github.com/tannaohm0/Gym_Management_System',
        demo: '',
        image: crefin,
    },
    {
        id: 3,
        name: 'Chat with CSV',
        description: "A Streamlit web app that enables users to query CSV files using natural language, improving data accessibility with real-time visualization and a responsive UI.",
        tools: ['Python', 'Streamlit', 'Data Visualization', 'Natural Language Processing'],
        role: 'Developer',
        code: 'https://github.com/kushalpatel0265/Inode-Management-System',
        demo: '',
        image: realEstate, 
    }
];




// Do not remove any property.
// Leave it blank instead as shown below

// {
//     id: 1,
//     name: '',
//     description: "",
//     tools: [],
//     role: '',
//     code: '',
//     demo: '',
//     image: crefin,
// },