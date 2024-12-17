import React from "react";

export interface Project {
  title: string;
  date: string;
  image: string[];
  mainDescription: React.ReactNode;
  description: {
    title: React.ReactNode;
    description: React.ReactNode[];
  }[];
  techStack: string[];
  link: {
    detail: string;
    related: string;
  };
}
