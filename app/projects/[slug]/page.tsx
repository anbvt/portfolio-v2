import { Metadata } from "next";

import BackButton from "@/common/components/elements/BackButton";
import Container from "@/common/components/elements/Container";
import PageHeading from "@/common/components/elements/PageHeading";
import ProjectDetail from "@/modules/projects/components/ProjectDetail";
import { ProjectItem } from "@/common/types/projects";
import { METADATA } from "@/common/constants/metadata";
import { loadMdxFiles } from "@/common/libs/mdx";
import { getProjectsDataBySlug } from "@/services/projects";
import { PROJECTS } from "@/common/constants/projects";
import { getTranslations } from "next-intl/server";
import { notFound } from "next/navigation";

interface ProjectDetailPageProps {
  params: { slug: string };
}
export const generateMetadata = async ({
  params,
}: ProjectDetailPageProps): Promise<Metadata> => {
  const project = PROJECTS.find((item: ProjectItem) => item.slug === params.slug);
  if (!project) notFound();

  const t = await getTranslations("ProjectsPage.items");
  const title = t(`${params.slug}.title`);
  const description = t(`${params.slug}.description`);
  return {
    title: `${title} ${METADATA.exTitle}`,
    description,
    openGraph: {
      images: project.image,
      url: `${METADATA.openGraph.url}/${project.slug}`,
      siteName: METADATA.openGraph.siteName,
      locale: METADATA.openGraph.locale,
      type: "article",
      authors: METADATA.creator,
    },
    keywords: project.title,
    alternates: {
      canonical: `${process.env.DOMAIN}/projects/${params.slug}`,
    },
  };
};

const getProjectDetail = async (slug: string): Promise<ProjectItem> => {
  const project = PROJECTS.find((item: ProjectItem) => item.slug === slug);
  if (!project) notFound();

  const contents = loadMdxFiles();
  const content = contents.find((item) => item.slug === slug);
  const response = { ...project, content: content?.content };
  const data = JSON.parse(JSON.stringify(response));
  return data;
};

const ProjectDetailPage = async ({ params }: ProjectDetailPageProps) => {
  const data = await getProjectDetail(params?.slug);
  const t = await getTranslations("ProjectsPage.items");

  const PAGE_TITLE = t(`${params.slug}.title`);
  const PAGE_DESCRIPTION = t(`${params.slug}.description`);

  return (
    <Container data-aos="fade-up">
      <BackButton url="/projects" />
      <PageHeading title={PAGE_TITLE} description={PAGE_DESCRIPTION} />
      <ProjectDetail {...data} title={PAGE_TITLE} description={PAGE_DESCRIPTION} />
    </Container>
  );
};

export default ProjectDetailPage;
