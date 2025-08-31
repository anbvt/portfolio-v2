"use client";

import useSWR from "swr";

import AnimatedList from "@/common/components/elements/AnimatedList";
import { ProjectItem } from "@/common/types/projects";
import { fetcher } from "@/services/fetcher";
import { PROJECTS } from "@/common/constants/projects";

const AnimatedListProject = () => {
  // const { data } = useSWR("/api/projects", fetcher);

  const projects =
    PROJECTS
      ?.filter((item: ProjectItem) => item?.is_show)
      .sort((a: ProjectItem, b: ProjectItem) => b.id - a.id)
      .map((item: ProjectItem) => ({
        image: item.image.startsWith("/") ? item.image : `/${item.image}`,
        slug: `/projects/${item.slug}`,
      }))  ?? [];

  return (
    <AnimatedList
      items={projects.map((item) => ({
        image: item.image.startsWith("/") ? item.image : `/${item.image}`,
        href: item.slug,
      }))}
      itemImage={true}
      showGradients={false}
      displayScrollbar={false}
    />
  );
};

export default AnimatedListProject;
