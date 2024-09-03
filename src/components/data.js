import {
  FaceSmileIcon,
  ChartBarSquareIcon,
  CursorArrowRaysIcon,
  DevicePhoneMobileIcon,
  AdjustmentsHorizontalIcon,
  SunIcon,
} from "@heroicons/react/24/solid";

import benefitOneImg from "../../public/img/benefit-one.png";
import benefitTwoImg from "../../public/img/benefit-two.png";

const benefitOne = {
  title: "Data Science in the Pharma Industry",
  desc: "We also provide consulting services to help pharmacuetical and biotech companies unlock the full potential of their data to drive innovation and growth.",
  image: benefitOneImg,
  bullets: [
    {
      title: "Experience in Pharmaceuticals",
      desc: "Years of industry experience in broad pharmaceutical landscape,spanning from early-stage drug discovery to clinical trials and real-world evidence",
      icon: <FaceSmileIcon />,
    },
    {
      title: "Multifaceted Expertise",
      desc: "Profound expertise in data science (statistics, ML, AI, LLM, NLP) and engineering (informatics, database, web-development, programming in Python, R, SQL)",
      icon: <CursorArrowRaysIcon />,
    },
    {
      title: "Innovation in Data Science and AI",
      desc: "Consistently pioneered and developed innovative statistical and AI algorithms to distill insights from biological and healthcare datasets",
      icon: <ChartBarSquareIcon />,
    },
  ],
};

const benefitTwo = {
  title: "Offer more benefits here",
  desc: "You can use this same layout with a flip image to highlight your rest of the benefits of your product. It can also contain an image or Illustration as above section along with some bullet points.",
  image: benefitTwoImg,
  bullets: [
    {
      title: "Mobile Responsive Template",
      desc: "Nextly is designed as a mobile first responsive template.",
      icon: <DevicePhoneMobileIcon />,
    },
    {
      title: "Powered by Next.js & TailwindCSS",
      desc: "This template is powered by latest technologies and tools.",
      icon: <AdjustmentsHorizontalIcon />,
    },
    {
      title: "Dark & Light Mode",
      desc: "Nextly comes with a zero-config light & dark mode. ",
      icon: <SunIcon />,
    },
  ],
};


export {benefitOne, benefitTwo};
