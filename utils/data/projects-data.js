import ayla from '/public/image/ayla.jpg';
import crefin from '/public/image/crefin.jpg';
import realEstate from '/public/image/real-estate.jpg';
import travel from '/public/image/travel.jpg';

export const projectsData = [
    {
        id: 1,
        name: 'Customer Churn Predictor',
        description: "A machine learning model built on 10K+ banking records to predict customer churn using demographic and financial features. Achieved best performance with XGBoost (87% precision, 82% recall) and improved accuracy by 20% through SMOTE-based class imbalance handling and feature preprocessing.",
        tools: ['Python', 'Machine Learning', 'XGBoost', 'SMOTE', 'Pandas', 'Scikit-learn'],
        role: 'Machine Learning Developer',
        code: 'https://github.com/tannaohm0/Customer_Churn_Predictor',
        demo: '',
        image: ayla,
    },
    {
        id: 2,
        name: 'Personal Finance Dashboard',
        description: "A real-time personal finance dashboard built using Next.js and Supabase for budgeting and expense tracking. Implemented secure JWT-based authentication and boosted user engagement by 45% through interactive data visualizations using Recharts and Material UI.",
        tools: ['Next.js', 'Node.js', 'SQL', 'Supabase', 'JWT', 'Recharts', 'Material UI'],
        role: 'Full Stack Developer',
        code: 'https://github.com/tannaohm0/Personal_Finance_Dashboard_Final',
        demo: 'https://personal-finance-dashboard-final3.vercel.app/',
        image: crefin,
    },
    {
        id: 3,
        name: 'Gym Management System',
        description: "A modular gym management system developed using PHP and MySQL to manage members, trainers, payments, and daily operations. Optimized backend queries to efficiently handle 1,000+ member records.",
        tools: ['PHP', 'MySQL', 'HTML', 'CSS', 'JavaScript'],
        role: 'Backend / Full Stack Developer',
        code: 'https://github.com/tannaohm0/Gym_Management_System',
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