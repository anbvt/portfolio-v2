import Image from "next/image";
import { BsBuildings as CompanyIcon } from "react-icons/bs";
import { useLocale, useTranslations } from "next-intl";
import { format } from "date-fns";

import { EducationProps } from "@/common/types/education";
import SpotlightCard from "@/common/components/elements/SpotlightCard";

const EducationCard = ({
  translationKey,
  school,
  major,
  logo,
  degree,
  start_year,
  end_year,
  link,
  location,
}: EducationProps) => {
  const locale = useLocale();
  const t = useTranslations("AboutPage.education");
  const schoolText = translationKey
    ? t(`institutions.${translationKey}.school`)
    : school;
  const degreeText = translationKey
    ? t(`institutions.${translationKey}.degree`)
    : degree;
  const majorText = translationKey
    ? t(`institutions.${translationKey}.major`)
    : major;
  const locationText = translationKey
    ? t(`institutions.${translationKey}.location`)
    : location;
  const dateFormat = locale === "jp" ? "yyyy年M月" : "MMM yyyy";
  const startDate = format(new Date(start_year), dateFormat);
  const endDate =
    end_year === "Present"
      ? t("present")
      : format(new Date(end_year), dateFormat);

  return (
    <SpotlightCard className="flex items-start gap-5 p-6">
      {logo ? (
        <Image className="rounded-lg border-[1.5px] bg-neutral-100 dark:border-neutral-300" width={70} height={70} src={logo} alt={schoolText || school} />
      ) : (
        <CompanyIcon size={65} />
      )}

      <div className="space-y-1">
        <a href={link || "#"} target="_blank">
          <h6>{schoolText}</h6>
        </a>
        <div className="space-y-2 text-sm text-neutral-600 dark:text-neutral-400">
          <div className="flex flex-col gap-1 md:flex-row md:gap-2">
            <span>{degreeText}</span>
            <span className="hidden text-neutral-300 dark:text-neutral-700 md:block">
              •
            </span>
            <span>{majorText}</span>
          </div>
          <div className="flex flex-col gap-1 text-[12px] md:flex-row md:gap-2">
            <span className="dark:text-neutral-500">
              {startDate} - {endDate}
            </span>
            <span className="hidden rounded-full text-neutral-300 dark:text-neutral-700 md:block">
              •
            </span>
            <span>{locationText}</span>
          </div>
        </div>
      </div>
    </SpotlightCard>
  );
};

export default EducationCard;
