import { Progress } from "antd";
import { useEffect, useState } from "react";

const Languages = () => {
  const [English, setEnglish] = useState(0);
  const [Polish, setPolish] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      if (English < 90) {
        setEnglish((prevCount) => prevCount + 2);
      }
      if (Polish < 95 ) {
        setPolish((prevCount) => prevCount + 2);
      }
    }, 30);

    return () => clearInterval(timer);
  }, [English, Polish]);
  return (
    <div className="flex flex-col space-y-1 pt-6">
      <div className="flex flex-col gap-y-4">
        <span className="text-Snow text-xs font-bold">Languages</span>
        <div className="flex flex-row items-center justify-center space-x-6">
          <div className="flex flex-col items-center justify-center gap-y-2">
            <Progress
              strokeColor="#1fdf64"
              type="circle"
              percent={English}
              size={60}
            />
            <span className="text-xs font-bold text-Snow">English</span>
          </div>
          <div className="flex flex-col items-center justify-center gap-y-2">
            <Progress
              strokeColor="#1fdf64"
              type="circle"
              percent={Polish}
              size={60}
            />
            <span className="text-xs font-bold text-Snow">Polish</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Languages;
