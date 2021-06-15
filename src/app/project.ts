import { SafeResourceUrl } from "@angular/platform-browser";

export interface Project{
    name: string;
    stack: string;
    problem: string;
    solution: string;
    repoLink: string;
    openSource: boolean;
    demoVideo: string | null;
}