import netflixImg from '../assets/images/projects/netflix.jpg';
import rpsImg from '../assets/images/projects/rps.jpg';
import weatherImg from '../assets/images/projects/weather.jpg';
import twogocoImg from '../assets/images/projects/twogoco.jpg';
import todoImg from '../assets/images/projects/todo.jpg';
import notesImg from '../assets/images/projects/notes.jpg';

export const projectsData = [
    {
        id: 'netflix-clone',
        title: 'Netflix UI Clone',
        description: 'A high-fidelity replica of the Netflix home screen. Features a dynamic hero section with auto-playing previews, a responsive movie slider with hover effects, and a custom-built navigation bar mirroring the original aesthetic.',
        image: netflixImg,
        tags: ['HTML', 'CSS'],
        link: 'https://stream-flix-lz4kp8n0k-prangyanjali-mehers-projects.vercel.app/',
        github: 'https://github.com/prangya-meher/StreamFlix'
    },
    {
        id: 'rock-paper-scissors',
        title: 'Rock Paper Scissors',
        description: 'An interactive game featuring smooth animations and logic-driven gameplay. Users can play against a randomized AI, with real-time score tracking and a modern, vibrant interface built with vanilla JavaScript.',
        image: rpsImg,
        tags: ['HTML', 'CSS', 'JavaScript'],
        link: 'https://game-lvft795s3-prangyanjali-mehers-projects.vercel.app/',
        github: 'https://github.com/prangya-meher/GameHub'
    },
    {
        id: 'weather-app',
        title: 'Dynamic Weather App',
        description: 'A clean, intuitive weather application that fetches real-time data from a global weather API. Features city-based searching, dynamic background changes based on weather conditions, and detailed atmospheric data.',
        image: weatherImg,
        tags: ['HTML', 'CSS', 'JavaScript', 'API'],
        link: 'https://weather-app-tan-six-39.vercel.app/',
        github: 'https://github.com/prangya-meher/Weather-App'
    },
    {
        id: 'twogoco-clone',
        title: 'Twogoco UI Clone',
        description: 'A premium landing page clone showcasing advanced frontend techniques. Implements GSAP for ultra-smooth entrance animations and LocomotiveJS for a modern, high-end "smooth scroll" experience.',
        image: twogocoImg,
        tags: ['GSAP', 'LocomotiveJS', 'JavaScript'],
        link: 'https://twogoco-clone-nohjy699e-prangyanjali-mehers-projects.vercel.app/',
        github: 'https://github.com/prangya-meher/twogoco_clone'
    },
    {
        id: 'todo-list',
        title: 'React Todo List',
        description: 'A powerful productivity app built with React and styled with Tailwind CSS. Includes persistent storage, category filtering, and a sleek glassmorphism UI designed for maximum clarity and ease of use.',
        image: todoImg,
        tags: ['React', 'Tailwind CSS', 'Redux'],
        link: 'https://todo-list-orpin-six.vercel.app/',
        github: 'https://github.com/prangya-meher/todo-list'
    },
    {
        id: 'notes-app',
        title: 'Notes App',
        description: 'A clean and minimal notes application built with React and Tailwind CSS. Allows users to quickly create notes with live persistence. Features a responsive card-based layout and a smooth, distraction-free writing experience.',
        image: notesImg,
        tags: ['React', 'Tailwind CSS'],
        link: 'https://notes-app-gold-mu.vercel.app/',
        github: 'https://github.com/prangya-meher/Notes_App'
    }
];
