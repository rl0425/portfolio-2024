import React from "react";

export interface ProjectDescription {
  title: React.ReactNode;
  description: React.ReactNode[];
}

export interface Feature {
  title: string;
  items: React.ReactNode[];
}

export interface Project {
  title: string;
  date: string;
  image: {
    type: "narrow" | "wide";
    images: string[];
  };
  mainDescription: React.ReactNode;
  description: ProjectDescription[];
  techStack: string[];
  feature: Feature[];
  team: string[];
  link: {
    title: string;
    related: React.ReactNode[];
  };
}

export interface Projects {
  [key: string]: Project;
}
