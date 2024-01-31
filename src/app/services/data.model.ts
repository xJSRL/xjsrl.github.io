export interface Project{
  id: number,
  projectName: string,
  shortDescription: string,
  description: string,
  preview: string;
  images: string[],
  techUsed: string[],
  date: string,
  websiteLink: string
}

export interface Mailer{
  name: string,
  email: string,
  message: string,
}