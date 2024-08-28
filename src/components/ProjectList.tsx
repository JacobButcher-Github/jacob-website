import React from "react";
import Link from 'next/link';

export interface ProjectItem {
  title: string,
  description: string,
  tagsString: string,
  tags: React.ReactNode[];
  git: string,
  page: string
}
