import BootstrapImage from "@/assets/skillpage/bootstrap.png";
import Css3Image from "@/assets/skillpage/css3.png";
import FigmaImage from "@/assets/skillpage/figma.png";
import FirebaseImage from "@/assets/skillpage/firebase.png";
import Main from "@/assets/skillpage/main.svg";
import ReactImage from "@/assets/skillpage/react.png";
import SassImage from "@/assets/skillpage/Sass.png";

import GitImage from "@/assets/skillpage/git.png";
import JavascriptImage from "@/assets/skillpage/javascript.png";
import MakeImage from "@/assets/skillpage/make.png";
import MaterialUiImage from "@/assets/skillpage/material-ui.png";
import MongodbImage from "@/assets/skillpage/mongodb.png";
import N8nImage from "@/assets/skillpage/n8n.png";
import NextjsImage from "@/assets/skillpage/nextjs.png";
import NodejsImage from "@/assets/skillpage/nodejs.png";
import PythonImage from "@/assets/skillpage/python.png";
import ReduxImage from "@/assets/skillpage/redux.png";
import Scikit_learnImage from "@/assets/skillpage/Scikit_learn.png";
import SupabaseImage from "@/assets/skillpage/supabase.png";
import TensorflowImage from "@/assets/skillpage/tensorflow.png";
import ZapierImage from "@/assets/skillpage/zapier.png";

import Heading from "@/components/common/Heading";
import { TechCards } from "@/components/common/TechCards";
import { Box, Typography } from "@mui/material";
import Image from "next/image";
const Tech = () => {
  const items = [
    {
      name: "React",
      description:
        "A JavaScript library for building user interfaces A JavaScript library for building user interfaces A JavaScript library for building user interfaces",
      image: ReactImage,
      color: "rgb(128, 222, 234)",
      backgroundColor: "rgba(128, 222, 234, 0.3)",
    },
    {
      name: "Sass",
      description:
        "A CSS preprocessor that adds features like variables, nesting, and mixins to CSS",
      image: SassImage,
      color: "rgb(240, 98, 146)",
      backgroundColor: "rgba(255, 169, 169, 0.35)",
    },
    {
      name: "Bootstrap",
      description:
        "A CSS framework for building responsive, mobile-first websites",
      image: BootstrapImage,
      color: "rgb(103, 58, 183)",
      backgroundColor: "rgba(103, 58, 183, 0.4)",
    },
    {
      name: "CSS3",
      description:
        "CSS3 is a style sheet language used to describe the presentation of a document written in HTML or XML",
      image: Css3Image,
      color: "rgb(2, 119, 189)",
      backgroundColor: "rgba(2, 119, 189, 0.5)",
    },
    {
      name: "Figma",
      description: "A design tool for creating beautiful user interfaces",
      image: FigmaImage,
      color: "rgb(247, 143, 143)",
      backgroundColor: "rgba(255, 169, 169, 0.35)",
    },
    {
      name: "Firebase",
      description: "A real-time database for building web applications",
      image: FirebaseImage,
      color: "rgb(255, 202, 40)",
      backgroundColor: "rgba(255, 202, 40, 0.3)",
    },
    {
      name: "Git",
      description:
        "A version control system for tracking changes in any set of files",
      image: GitImage,
      color: "rgb(220, 53, 69)",
      backgroundColor: "rgba(220, 53, 69, 0.3)",
    },
    {
      name: "Javascript",
      description:
        "A programming language that is used to create interactive effects within web browsers",
      image: JavascriptImage,
      color: "rgb(255, 202, 40)",
      backgroundColor: "rgba(255, 202, 40, 0.3)",
    },
    {
      name: "Material UI",
      description:
        "A React component library for building modern, responsive web applications",
      image: MaterialUiImage,
      color: "rgb(2, 136, 209)",
      backgroundColor: "rgba(2, 136, 209, 0.4)",
    },
    {
      name: "Mongodb",
      description:
        "A NoSQL database that provides a flexible, scalable, and efficient data storage solution",
      image: MongodbImage,
      color: "rgb(40, 184, 109)",
      backgroundColor: "rgba(40, 184, 109, 0.3)",
    },
    {
      name: "Nodejs",
      description:
        "A runtime environment for executing JavaScript code outside of a web browser",
      image: NodejsImage,
      color: "rgb(40, 184, 109)",
      backgroundColor: "rgba(40, 184, 109, 0.3)",
    },

    {
      name: "Redux",
      description: "A state management library for React applications",
      image: ReduxImage,
      color: "rgb(126, 87, 194)",
      backgroundColor: "rgba(126, 87, 194, 0.33)",
    },
    {
      name: "Nextjs",
      description:
        "A React framework for building server-side rendered (SSR) web applications",
      image: NextjsImage,
      color: "rgb(0, 0, 0)",
      backgroundColor: "rgba(0, 0, 0, 0.3)",
    },
    {
      name: "Python",
      description:
        "A high-level programming language that is easy to learn and use",
      image: PythonImage,
      color: "rgb(30, 136, 229)",
      backgroundColor: "rgba(30, 136, 229, 0.3)",
    },
    {
      name: "Tensorflow",
      description:
        "An open-source software library for machine learning and deep learning",
      image: TensorflowImage,
      color: "rgb(255, 165, 0)",
      backgroundColor: "rgba(255, 165, 0, 0.3)",
    },
    {
      name: "Scikit-learn",
      description: "A Python library for machine learning",
      image: Scikit_learnImage,
      color: "rgba(248, 154, 54)",
      backgroundColor: "rgba(248, 154, 54, 0.3)",
    },
    {
      name: "Make",
      description: "A build automation tool for Python projects",
      image: MakeImage,
      color: "#F505FC",
      backgroundColor: "rgba(245, 5, 252, 0.3)",
    },
    {
      name: "N8n",
      description: "An open-source workflow automation tool",
      image: N8nImage,
      color: "rgba(234, 75, 113)",
      backgroundColor: "rgba(234, 75, 113, 0.3)",
    },
    {
      name: "Zapier",
      description: "A platform for automating tasks and workflows",
      image: ZapierImage,
      color: "rgba(255, 79, 0)",
      backgroundColor: "rgba(255, 79, 0, 0.3)",
    },
    {
      name: "Supabase",
      description: "A platform for building web applications",
      image: SupabaseImage,
      color: "rgba(62, 207, 142)",
      backgroundColor: "rgba(62, 207, 142, 0.3)",
    },
  ];

  return (
    <Box>
      <Heading label='Technologies' />
      <Box
        sx={{
          display: "flex",
          justifyContent: "space-between",
          minWidth: "900px",
          maxWidth: "1200px",
          mx: "auto",
          my: "200px",
        }}
      >
        <Box sx={{ flex: 1 }}>
          <Typography variant='title'>
            Here are the tools used <br /> to craft your dream
          </Typography>
          <Box
            sx={{
              width: "fit-content",
              display: "flex",
              maxWidth: "700px",
              mt: "100px",
            }}
          >
            <TechCards items={items} />
          </Box>
        </Box>
        <Box
          sx={{
            display: "flex",
            alignItems: "flex-end",
            position: "relative",
          }}
        >
          <Image src={Main} height={330} alt='main' />
          <Box
            sx={{
              position: "absolute",
              width: "630px",
              height: "630px",
              top: "50%",
              left: "50%",
              zIndex: -1,
              transform: "translate(-50%, -50%)",
              background:
                "radial-gradient(50% 50% at 50% 50%, rgb(117 46 252 / 7%) 0%, rgb(29 29 29) 100%)",
            }}
          />
        </Box>
      </Box>
    </Box>
  );
};

export default Tech;
