import { useTranslations } from "next-intl";

import TrueFocus from "@/common/components/elements/TrueFocus";

const TrueFocusService = () => {
  const t = useTranslations("HomePage");

  return (
    <div className="flex h-full items-center justify-center px-8 py-6">
      <TrueFocus
        sentence={t("serviceRole")}
        manualMode={false}
        blurAmount={5}
        borderColor="green"
        animationDuration={1}
        pauseBetweenAnimations={1}
      />
    </div>
  );
};

export default TrueFocusService;
