import Head from "next/head";
import About from "../components/About";
import Experience from "../components/Experience";
import Footer from "../components/Footer";
import NavBar from "../components/NavBar";
import Projects from "../components/Projects";
import Skills from "../components/Skills";
import { request } from "../lib/datocms";

const HOMEPAGE_QUERY = `query MyQuery {
  allContactLinks {
    icon {
      responsiveImage {
        alt
        aspectRatio
        bgColor
        height
        sizes
        src
        title
        width
      }
    }
    title
    id
    address
  }
  allAboutMeSections {
    id
    title
    body
    profilePicture {
      responsiveImage {
        alt
        aspectRatio
        bgColor
        height
        sizes
        src
        title
        width
      }
    }
  }
  allDesignSkills(orderBy: _createdAt_ASC) {
    id
    title
    icon {
      responsiveImage {
        alt
        aspectRatio
        bgColor
        height
        sizes
        src
        title
        width
      }
    }
  }
  allExperiences(orderBy: _updatedAt_DESC) {
    id
    jobTitle
    companyName
    companyLogo {
      responsiveImage {
        alt
        aspectRatio
        bgColor
        height
        sizes
        src
        title
        width
      }
    }
    dateStarted
    dateEnded
    technologiesUsed {
      ... on ProgrammingSkillRecord {
        id
        icon {
          responsiveImage {
            alt
            aspectRatio
            bgColor
            height
            sizes
            src
            title
            width
          }
        }
        title
      }
      ... on DesignSkillRecord {
        id
        title
        icon {
          responsiveImage {
            alt
            aspectRatio
            bgColor
            height
            sizes
            src
            title
            width
          }
        }
      }
    }
    isCurrent
    description
  }
  allProgrammingSkills(orderBy: _createdAt_ASC) {
    id
    title
    icon {
      responsiveImage {
        alt
        aspectRatio
        bgColor
        height
        sizes
        src
        title
        width
      }
    }
  }
  allProjects(orderBy: _createdAt_DESC) {
    id
    title
    image {
      responsiveImage {
        alt
        aspectRatio
        bgColor
        height
        sizes
        src
        title
        width
      }
    }
    summary
    skillsUsed {
      ... on DesignSkillRecord {
        id
        title
        icon {
          responsiveImage {
            alt
            aspectRatio
            bgColor
            height
            sizes
            src
            title
            width
          }
        }
      }
      ... on ProgrammingSkillRecord {
        id
        title
        icon {
          responsiveImage {
            alt
            aspectRatio
            bgColor
            height
            sizes
            src
            title
            width
          }
        }
      }
    }
    linkToBuild
  }
}
`;

export async function getStaticProps() {
  const data = await request({
    query: HOMEPAGE_QUERY,
    variables: { limit: 10 },
  });
  return {
    props: { data },
  };
}

export default function Home({ data }) {
  return (
    <div>
      <Head>
        <title>Leonardo - Portfolio</title>
      </Head>
      <NavBar id="top" data={data} />
      <h1 className="mt-5 text-xl sm:text-2xl text-slate-500 text-center font-bold">
        Leonardo Hurovich - Portfolio
      </h1>
      <div className=" max-w-5xl mx-auto">
        <hr className="border-gray-300 my-5 w-1/2 mx-auto" />
        <About data={data} />
        <hr className="border-gray-300 my-5 w-3/4 mx-auto" />
        <Experience data={data} />
        <hr className="border-gray-300 my-5 w-3/4 mx-auto" />
        <Skills data={data} />
        <hr className="border-gray-300 my-5 w-3/4 mx-auto" />
        <Projects data={data} />
        <hr className="opacity-0 my-10 mx-auto" />
      </div>
      <Footer />
    </div>
  );
}
