import Head from "next/head";
import { TestBlock } from "@/components/TestBlock";
import Image from "next/image";
export default function Page() {
  return (
    <>
      <Head>
        <title>Home</title>
      </Head>
      <TestBlock
        t1={
          <Image
            src="/720x600"
            width={720}
            height={600}
            alt="hero"
            className="lg:w-2/6 md:w-3/6 w-5/6 mb-10 object-cover object-center rounded"
          />
        }
        t2="Knausgaard typewriter readymade marfa"
        t3="Kickstarter biodiesel roof party wayfarers cold-pressed. Palo santo live-edge tumeric scenester copper mug flexitarian. Prism vice offal plaid everyday carry. Gluten-free chia VHS squid listicle artisan."
        t4="Placeholder"
        t5="Button"
        t6="Neutra shabby chic ramps, viral fixie."
        t7={
          <>
            <span className="text-xs text-gray-600 mb-1">GET IT ON</span>{" "}
            <span className="title-font font-medium">Google Play</span>
          </>
        }
        t8={
          <>
            <span className="text-xs text-gray-600 mb-1">Download on the</span>{" "}
            <span className="title-font font-medium">App Store</span>
          </>
        }
      />
    </>
  );
}
