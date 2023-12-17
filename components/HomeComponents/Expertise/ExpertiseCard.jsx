import CardLayout from "../../Common/CardLayout";

const ExpertiseCard = ({ data }) => {
  return (
    <CardLayout>
      <div className="h-full space-y-2 p-7 card_stylings transition">
        <div className=" text-Snow">{data.title}</div>
        <div className="text-sm text-LightGray font-normal text-justify">
          {data.desc}
        </div>
      </div>
    </CardLayout>
  );
};

export default ExpertiseCard;
