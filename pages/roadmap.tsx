import { useMemo, useRef } from "react";
import type {
  GetServerSideProps,
  InferGetServerSidePropsType,
  NextPage,
} from "next";
import Link from "next/link";
import Head from "next/head";
import Image from "next/image";
import axios from "axios";
import { MockFeedback } from "../types";
import { Roadmaptab, StatusSection } from "../components";

export const getServerSideProps: GetServerSideProps = async () => {
  const responseData = await axios
    .get("https://protected-hamlet-83366.herokuapp.com/")
    .then((res) => {
      return res.data;
    })
    .catch((err) => console.log(err.message));

  return {
    props: { data: responseData },
  };
};

const Roadmap: NextPage = ({
  data,
}: InferGetServerSidePropsType<typeof getServerSideProps>) => {
  const navbar = useMemo(() => {
    return (
      <div className="flex-col sm:flex-row flex items-center justify-between bg-darkBlue text-white rounded p-8">
        <div>
          <Link href="/" passHref>
            <div className="flex items-center cursor-pointer">
              <Image
                src="/Images/shared/icon-arrow-left.svg"
                alt="Left Arrow Icon"
                width={10}
                height={12}
                layout="fixed"
              />
              <p className="ml-2">Go Back</p>
            </div>
          </Link>

          <h3 className="text-2xl font-bold">Roadmap</h3>
        </div>

        <Link href="/addfeedback" passHref>
          <button className="bg-red-500 flex items-center px-8 py-3 rounded-xl mt-4 sm:mt-0">
            <Image
              src="/Images/shared/icon-plus.svg"
              alt="Add Icon"
              width={12}
              height={12}
              layout="fixed"
            />
            <p className="ml-2">Add Button</p>
          </button>
        </Link>
      </div>
    );
  }, []);

  return (
    <div className="w-4/5 mx-auto py-8">
      <Head>
        <title>Road Map</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        <meta
          name="description"
          content="Product Feedback from frontend mentor"
        />
        <meta name="keywords" content="NextJS, Tailwind CSS, React" />
        <meta name="author" content="handleryouth" />
      </Head>

      {navbar}
      <Roadmaptab feedback={data as MockFeedback[]} />

      <div className="hidden md:grid grid-cols-3 gap-x-10 mt-16">
        <StatusSection
          title="Planned"
          description="Ideas prioritized for research"
          data={(data as MockFeedback[]).filter(
            (mock) => mock.status === "Planned"
          )}
        />

        <StatusSection
          title="In-progress"
          description="Currently being developed"
          data={(data as MockFeedback[]).filter(
            (mock) => mock.status === "In-Progress"
          )}
        />

        <StatusSection
          title="Live"
          description="Released features"
          data={(data as MockFeedback[]).filter(
            (mock) => mock.status === "Live"
          )}
        />
      </div>
    </div>
  );
};

export default Roadmap;
