import Link from "next/link";
import React, { useEffect, useState } from "react";
import Cardss from "./Cards/Cardss";

type Props = {};

const Latest = (props: Props) => {
  const [latestBlogs, setLatestBlogs] = useState([])
  // const blogs = [
  //   {
  //     id: "63c8518f31ad3b98d781c837",
  //     index: 186669,
  //     title: "28VC | Blockchain in Medical Industry",
  //     text: "Blockchain as we know of, is growing rapidly, cornering into every part of the market and industry, where we can not even imagine how fast the adoption is taking place; blockchain takes responsibility in security and transparency. 28VC intends to become the commercialized mediatary of Medial Data and source, using Blockchain technology. The team is intended to most efficiently, securely, and productively use the data that will bring the users to more safer and adequate environment.\n\nProblems in the Medical field\n\n28VC have acknowledged various barriers when it comes to efficient recording of data in the medical field. In the existing medical information, ownership of patient-generated data is unclear and accessibility to patient data is very poor due to problems such as timely access to patient data, data system interoperability, distributed stored data, data inconsistency, opinions of medical staff, secondary generated data, etc.\n\nTherefore increasing security for medical data is vital in order to prevent such issues that can potentially lead to severe problems such as data fraud and abuse.\n\nWhy use Blockchain\n\nThe 28VC foundation have evaluated that blockchain is the most essential technology that can be used to resolve the ownership issues regarding personal and medical health information.\n\nThe decentralized structure enables data to be transparent meaning that medical data can shared with every user which improves security and increases traceability.\n\nThe company has identified potential problems has planned to develop a transparent platform that provides individuals the ability to verify the authenticity of medical records which is essential to prevent forgery of data and ensure that all information is legitimate.\n\n28VC Blockchain\n\n28 Foundation builds a platform designed precisely based on the 28VC blockchain to solve the problems of the existing medical field so that personal information can be stored in the hospital server and patient’s own device in a state that cannot be forged · altered by applying blockchain technology. Also, in the case of information related to distribution such as medical devices, medical products, and medicines, it is automatically transmitted to a mobile device with the user’s consent, so that information on which product was used for treatment, etc. can be easily checked on the mobile device. The 28VC blockchain is currently under development and will be supported through a mobile blockchain solution that enables efficient management of patient’s medical information, treatment, prescription, and even mobile payments.",
  //     tags: ["Dentistry", "28vc", "Blockchain", "28vck", "Medical Data"],
  //     timestamp: "2021-12-13 06:02:02.461000+00:00",
  //     url: "https://medium.com/@28VC/28vc-blockchain-in-medical-industry-287ace1575",
  //   },
  //   {
  //     id: "63c8519531ad3b98d781cdd0",
  //     index: 180411,
  //     title:
  //       "The classification of blockchain-based application: A literature review.",
  //     text: "Image Source: Bing Search Blockchain Images\n\nAbstract\n\nBlockchain systems are public electronic ledgers built around a peer-to-peer network that is publicly shared among different actors to create an unchangeable transaction record. Blockchain technology’s primary use is for distributed ledger for cryptocurrencies, notably bitcoin. Over the years, Blockchain has expanded its application area, such as smart contracts, financial services, video games, energy trading, supply chain, health care, etc. The concept of blockchain technology has been discussed extensively in different literature works, yet information regarding Blockchain-based application classification remains scarce.\n\nThis study provides a systematic review of previous studies on Blockchain technology and applications. I discussed an overview of Blockchain and the classification of blockchain-enabled applications across diverse sectors such as financial applications, education, integrity verification, governance, and data management. This research can be useful to blockchain-technology researchers and can help further studies and future development.\n\nKeywords: Blockchain technology; Blockchain; Blockchain application; Blockchain classification\n\n1 Introduction\n\nMany years ago, Satoshi Nakamoto, the unknown person/group behind Bitcoin, described how blockchain technology, a distributed peer-to-peer linked-structure, could solve the arrangement of keeping transactions from having a double-spending problem (Nakamoto, 2008). Bitcoin arranges transactions and groups them in a constrained-size structure named blocks sharing the same time-stamp. The network (miners) nodes use blocks to link each other in chronological order, with every block having the hash of the previous block to create a blockchain (Crosby et al., 2016).\n\nBlockchain technology brought about disruptions to the traditional way of doing business. The applications and transactions, which required centralized architectures and trusted third parties to verify them, can now function in a decentralized manner and with the same accuracy level. Blockchain architecture and design characteristics provide properties like transparency, robustness, audit, and security (Christidis and Devetsikiotis, 2016).\n\nA blockchain is a distributed database organized as a list of ordered blocks, where the committed blocks are immutable. For instance, in the ideal banking sector, banks can cooperate under the same Blockchain and push their customers’ transactions. This way, beyond transparency, Blockchain enables transactions’ auditing. Organizations invest in this technology as they see the potential of making their architectures decentralized and minimizing their transaction costs as they become inherently safer, transparent, and in some cases, faster. For this reason, Blockchain technology is becoming increasingly important (Zhao et al., 2016). Almost 1000 (33%) of C-suite executives reveal that they are considering or have already been actively busy with blockchain technology. According to Christidis and Devetsikiotis, 2016 researchers and developers are already mindful of the new technology’s capabilities and investigate various applications over different divisions based on the intended readers. While there are several analyses regarding blockchain technology (Tama et al., 2017; Brand. o et al., 2018), they argue that state-of-the-art blockchain-enabled applications have received limited attention. Even in Zheng et al. (2016), blockchains’ applications have not fully covered their full extent or applicability. Some reviews focused on Blockchain’s particular role, including developing decentralized and data-driven applications for the IOT (Christidis and Devetsikiotis, 2016) and working with big data in a decentralized fashion. Other reviews concentrated on the security problems of the Blockchain and on its potential to enable trust and decentralization in in-service platforms (Seebacher et al., 2017) and Peer to peer systems (Hawlitschek et al., 2018).\n\nHowever, even though there are several works of literature on Blockchain’s different aspects, there is still not enough research to show the classification of blockchain-enabled applications. Hence, by studying existing literature, I highlight the question: What are the types of Blockchain-based applications? In answering this question, I contribute towards understanding the Blockchain, its features, and taxonomy. The rest of the paper’s structure is in sections: Section 2 presents an overview of Blockchain. In section 3, I outline the method followed in conducting the systematic literature review. The findings was presented in Section 4, while in Section 5, I present the discussion on the articles reviewed. After that, I give my conclusion.",
  //     tags: ["Blockchain", "Blockchain Technology", "Blockchain Application"],
  //     timestamp: "2021-09-12 14:33:34.655000+00:00",
  //     url: "https://medium.com/the-classification-of-blockchain-based-application/the-classification-of-blockchain-based-application-a-literature-review-1ab47d00f7df",
  //   },
  //   {
  //     id: "63c8519531ad3b98d781cc73",
  //     index: 174890,
  //     title:
  //       "Introducing SeaChain, A Blockchain Powered Solution To Ocean Pollution",
  //     text: "A Binance Smart Chain Token Launching Soon\n\nThe global plastic pollution crisis is approaching an irreversible tipping point. 8 million tonnes of trash enters the ocean every year, and it is predicted this could reach 53 million tonnes annually by 2030.\n\nPollution is not just unsightly, it causes the death of 100 million marine animals each year and leads to the destruction of ocean habitats such as coral reefs that are vital to marine life.\n\n80% of the trash that enters our oceans comes from only 1,000 rivers around the world.\n\nThe pollution crisis requires the implementation of effective trash management systems and a fundamental transformation of the plastic economy framework with a focus on recycling.\n\nWhat Is SeaChain?\n\nSeaChain is a decentralised, community-driven ecosystem built on and powered by blockchain that is seeking to be the solution for the plastic economy. We are funding highly effective trash barriers in the short term and for the long-term we are developing a supply-chain blockchain network to provide tools that will support the demand for accountability and transparency.\n\nThe River Barrier Solution Funded By SeaChain\n\nWe are tackling the problem at source by funding the placement of low-cost, easy-to-produce river barriers in these 1,000 rivers. The first barriers placed in Indonesia are already collecting over 100 kilograms of trash every single day, while injecting funds into the local community through using local workshops to make the barriers and hiring local workforces to maintain them.\n\nTrash is collected from the barriers each day and taken to trash banks where it is weighed and sorted to identify the types of materials and the source of the trash so we can determine how it can be recycled or disposed of and who’s responsible.\n\nBy facilitating the removal of the trash and identifying the recyclable materials, we are supporting the creation of a new plastic economy that can supply manufacturers with recycled plastic instead of requiring the creation of new virgin plastic.\n\nThe SeaChain Network\n\nReports show that 91% of plastic products do not get recycled and unfortunately many brands claim to consumers that their products are recyclable, when they are not.\n\nOther brands tell consumers their products are eco-friendly or made of recycled materials, but the truth is in many cases these misleading labels are far from the truth.\n\nOur vision is to develop a green-blockchain network to scale transparent and trustable supply-chain solutions for the plastic economy. We seek to develop tools that can be used to track ocean waste collection data, provide evidence based awarding of plastic credits and create a system to certify the authenticity of recycled plastic products for consumers, suppliers and manufacturers.\n\nWe envision that our network will not only support the development of applications and projects with an aligned mission, but we also serve to fund NGOs who are saving our oceans through the networks gas fees.\n\nLearn More About SeaChain & Join The Community:\n\nWebsite: www.seachaintoken.com\n\nTwitter: www.twitter.com/SeaChainToken\n\nReddit: www.reddit.com/SeaChainNetwork\n\nTelegram: https://t.me/SeaChainToken",
  //     tags: [
  //       "Token Economy",
  //       "Binance Smart Chain",
  //       "Pollution",
  //       "Blockchain",
  //       "Cryptocurrency",
  //     ],
  //     timestamp: "2021-09-04 14:43:57.092000+00:00",
  //     url: "https://medium.com/@seachaintoken/seachain-a-blockchain-powered-solution-to-ocean-pollution-2fdbcebabd50",
  //   },
  //   {
  //     id: "63c8518f31ad3b98d781c91a",
  //     index: 171081,
  //     title: "Is it hard to build a blockchain from scratch?",
  //     text: "This is our favorite figure, We will be using it quite often to explain the basic concepts of blockchain technology.\n\nIn the previous episodes, we built two basic prototypes using Go and Javascript, let’s now build another baby ledger using python, one of the fastest-growing and much-loved programming languages.\n\nTo recap, a blockchain is a chain of blocks, each block contains some information listed in figure1. Since we are building a baby ledger let’s stay away from complicated terms and mechanisms that will be covered in the future. I will use the comment sign(#) to explain each line of code, remember everything that comes after the # is a comment.\n\nlet’s jump right into it!\n\nlet’s first import two important libraries\n\nThese two libraries are for hashing and timestamping each block that is generated.\n\nCreate a class called Block\n\nThis class has an initial method that contains the block information, but there is not a method that returns a block hash, so let’s go ahead and create it under the class Block.\n\nWhen a blockchain is deployed, it has only one block, the first-ever mined block, that first block is called the genesis block, all the following blocks will be added on top of the first one, so let’s create a static method that will return the genesis block.\n\nEach block is followed by the next block, the next block is the recently added block on the chain, we have to declare another static method for returning each new block, let’s create it.\n\nThe block is made and the new block method is created, now we need to initialize our blockchain for receiving all incoming blocks. Remember a blockchain(digital ledger) contains blocks.\n\nOnly the genesis block is on the chain, let’s add more blocks to our ledger and print it.\n\nHere is the result:\n\nOops! block number 1 has a hash of the genesis block, but we can’t see the first block on the ledger. It’s up to us to show the genesis block or not, let me show you how you can print its contents.\n\nBefore the for loop , add these lines :\n\nHere is the final result:\n\nNow the genesis block becomes visible in the ledger.\n\nCongratulations! You just made another baby blockchain in python.\n\nStay tuned for the next advanced concepts😁.\n\nDo you know you can click 50 times the medium like button? so go ahead and smash it if you liked this post.👍\n\nThe entire code:",
  //     tags: ["Blockchain", "Python", "Distributed Ledgers"],
  //     timestamp: "2021-09-01 08:08:18.883000+00:00",
  //     url: "https://medium.datadriveninvestor.com/is-it-hard-to-build-a-blockchain-from-scratch-23bac74e4f",
  //   },
  // ];

  const fetchLatest = async () => {
    fetch(`/api/blog/latest`)
      .then((res) => res.json())
      .then((data) => {
        data.length = 6;
        setLatestBlogs(data);
      });
  };
  useEffect(() => {
    fetchLatest();
  }, []);

  return (
    <section
      id="latest"
      className="bg-white dark:bg-gray-900 max-w-[1420px] mx-auto flex justify-between items-center p-4 mt-12"
    >
      <div className="py-8 px-4 mx-auto max-w-screen-xl lg:py-16 lg:px-6">
        <div className="mx-auto max-w-screen-sm text-center lg:mb-16 mb-8">
          <h1 className="mb-4 text-3xl lg:text-4xl tracking-tight font-extrabold text-gray-900 dark:text-white">
            LATEST BLOGS
          </h1>
          <p className="font-light text-gray-500 sm:text-xl dark:text-gray-400">
            Welcome to our latest blog section! Here you'll find the most recent
            posts from our community of bloggers.
          </p>
        </div>
        <div className="grid gap-8 lg:grid-cols-2">
          {latestBlogs &&
            latestBlogs.map((blog, id) => {
              return <Cardss key={id} blog={blog} />;
            })}
        </div>
      </div>
    </section>
  );
};

export default Latest;
