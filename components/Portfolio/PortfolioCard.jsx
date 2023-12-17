import Badge from "../Common/Badge";
import Image from 'next/image'

const PortfolioCard = ({ data }) => {
  return (
    <div className="card_stylings overflow-hidden h-full">
      <img
        src={data?.image}
        alt="portfolio img"
        className="w-full object-cover opacity-30 h-32 sm:h-48 md:h-64"
      />
      <div
        id="arrow"
        className="py-2 px-6 card_stylings hover:-translate-y-10 transition-all ease-in-out duration-500"
      >
        <div className="flex justify-between p-0 m-0 ">
          <h3 className="mr-2 underline italic font-semibold pt-2 text-2xl text-Snow leading-tight sm:leading-normal">
            <a href={data?.url} target="_blank" rel="noreferrer">
              {data?.projectName}
            </a>
          </h3>
        </div>
        <p className="text-xs text-LightGray font-normal">
          {data?.projectDetail}
        </p>
        <div className="text-sm flex flex-wrap gap-3 py-2">
          {data.technologiesUsed.map((index, key) => (
            <Badge key={key} title={index.tech} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default PortfolioCard;