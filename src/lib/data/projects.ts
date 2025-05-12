import heideKuester from '$lib/assets/images/portfolio/heide-kuester.jpg?enhanced';
import davidBitterlich from '$lib/assets/images/portfolio/david-bitterlich.jpg?enhanced';
import gesundheitsreisen from '$lib/assets/images/portfolio/gesundheitsreisen.jpg?enhanced';
import edudigibook from '$lib/assets/images/portfolio/edudigibook.jpg?enhanced';
import foerdervereinMurnauer from '$lib/assets/images/portfolio/foerderverein-murnauer-gymnasium.jpg?enhanced';
import fsm from '$lib/assets/images/portfolio/fsm.jpg?enhanced';

export const projects = [
    {
        image: heideKuester,
        title: "Heide Küster Webseite",
        description: "Eine professionelle Website für systemische Beratung und Supervision mit klarem Design und intuitiver Benutzerführung.",
        technologies: ["Svelte", "TailwindCSS"],
        href: "https://heidekuester.de/"
    },
    {
        image: gesundheitsreisen,
        title: "Gesundheitsreisen Portal",
        description: "Eine dynamische Buchungsplattform für Gesundheitsreisen mit integriertem Reservierungssystem und Verwaltungsbereich.",
        technologies: ["PHP", "SQL", "CSS"],
        href: "https://www.gesundheitreisen.de/"
    },
    {
        image: davidBitterlich,
        title: "David Bitterlich Webseite",
        description: "Ein dynamisches Portfolio für einen professionellen Coloristen mit eleganter Bildergalerie, Video-Integration und responsivem Design.",
        technologies: ["Figma", "UI/UX", "Svelte", "TailwindCSS"],
        href: "https://david-bitterlich-portfolio.vercel.app/"
    },
    {
        image: edudigibook,
        title: "EduDigiBook Online-Shop",
        description: "Ein moderner Online-Shop für digitale Schulvideos, speziell konzipiert für Grund- und Mittelschulen. Der Fokus liegt auf englischsprachigen Lehrfilmen, entwickelt für die MedienLB, einen führenden Anbieter hochwertiger Bildungsmedien.",
        technologies: ["Wordpress", "Figma", "Custom Theme"],
        href: "https://www.edudigibook.com/"
    },
    {
        image: fsm,
        title: "Fragen-Staunen-Mitmachen",
        description: "Die Lernplattform wurde gemeinsam mit Lehrern und Schülern entwickelt, für Einzel- und Gruppenarbeit auf mobilen Endgeräten optimiert und fördert interaktives Lernen. Die Website spiegelt die individuellen Vorgaben der Betreiber wider.",
        technologies: ["PHP", "SQL", "CSS"],
        href: "https://www.fragen-staunen-mitmachen.de/"
    },
];

// Featured projects for homepage
export const featuredProjects = projects.slice(0, 3);