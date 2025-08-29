import Link from "next/link";
import { useTranslations } from "next-intl";
import { LuDownload as DownloadIcon } from "react-icons/lu";
import pdf from "../../../public/images/CV_Bui_Vu_Thien_An_Backend_Developer.pdf";

const Resume = () => {
  const t = useTranslations("AboutPage");

  // const RESUME_URL = "https://portfolio-anbvt562003.vercel.app/static/media/CV_Bui_Vu_Thien_An_Backend_Developer.a62185f0af5169c6e042.pdf";

  return (

    <Link
      href={pdf}
      target="_blank"
      passHref
      className="group flex w-fit items-center gap-2 rounded-lg border border-neutral-400 bg-neutral-100  px-3 py-2 text-sm transition duration-100 hover:text-neutral-800 dark:border-neutral-700 dark:bg-neutral-900 dark:hover:text-neutral-200"
      data-umami-event="click_resume_download_button"
    >
      <DownloadIcon />
      <span>{t("resume_download_button")}</span>
    </Link>
  );
};

export default Resume;
