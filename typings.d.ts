interface SanityBody {
    _createdAt: string;
    _id: string;
    _rev: string;
    _updatedAt: string;
}

interface Image {
    _type: "image";
    asset: {
        _ref: string;
        _type: "reference";
    };
}

export interface PageInfo extends SanityBody {
    _type: "pageInfo";
    address: string;
    backgroundInformation: string;
    email: string;
    role: string;
    heroImage: string;
    name: string;
    phoneNumber: string;
    profilePic: Image;
}

export interface Technology extends SanityBody {
    _type: "skill";
    image: Image;
    progress: number;
    title: string;
}

export interface MYSkills extends SanityBody {
    _type: "skill";
    image: Image;
    progress: number;
    title: string; 
}

export interface Experiences extends SanityBody {
    _type: "experience";
    jobTitle: string;
    company: string;
    companyImage: Image;
    dateStarted: date;
    dateEnded: date;
    isCurrentlyWorkingHere: boolean;
    points: string[];
    technologies: Technology[];
}

export interface Project extends SanityBody {
    title: string;
    _type: "project";
    image: Image;
    linkToBuild: string;
    summary: string;
    technologies: Technology[];
}

export interface Social extends SanityBody {
    _type: "social";
    title: string;
    url: string;
}
