import { Metadata } from "next";

import Container from "@/common/components/elements/Container";
import Home from "@/modules/home";
import { METADATA } from "@/common/constants/metadata";
import { getTranslations } from "next-intl/server";

export const generateMetadata = async (): Promise<Metadata> => {
  const t = await getTranslations("HomePage");

  return {
    title: `${t("intro")} | ${t("metadataTitle")}`,
    alternates: {
      canonical: `${process.env.DOMAIN}`,
    },
  };
};

const HomePage = () => {
  return (
    <Container data-aos="fade-up">
      <Home />
    </Container>
  );
};

export default HomePage;
