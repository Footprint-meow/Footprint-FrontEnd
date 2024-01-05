import { useState } from "react";
import { Outlet, useLocation } from "react-router-dom";
import { IFootprint } from "../interfaces";

const AddStep = () => {
  // const navigate = useNavigate();
  const { pathname } = useLocation();
  const [footprint, setFootprint] = useState<IFootprint | null>(null);

  const style = {
    textDecoration: "underline",
  };

  return (
    <div className="w-full h-[calc(100vh-2.5rem)] mt-10 flex flex-col px-7">
      <div className="flex gap-3 pt-4">
        <div
          style={pathname === "/footprint/add-step" ? style : undefined}
          className={`${
            pathname === "/footprint/add-step"
              ? "border-b-[3px] border-primary-1 leading-6 text-primary-1 font-bold"
              : "text-[#D9D9D9]"
          }`}
        >
          작성자
        </div>
        <div
          style={pathname === "/footprint/add-step/impression" ? style : undefined}
          className={`${
            pathname === "/footprint/add-step/impression"
              ? "border-b-[3px] border-primary-1 leading-6 text-primary-1 font-bold"
              : "text-[#D9D9D9]"
          }`}
        >
          소감
        </div>
        <div
          style={pathname === "/footprint/add-step/pwd" ? style : undefined}
          className={`${
            pathname === "/footprint/add-step/pwd"
              ? "border-b-[3px] border-primary-1 leading-6 text-primary-1 font-bold"
              : "text-[#D9D9D9]"
          }`}
        >
          암호 설정
        </div>
      </div>
      <div className="w-full pt-8">
        <Outlet
          context={{
            footprint,
            setFootprint,
          }}
        ></Outlet>
      </div>
    </div>
  );
};

export default AddStep;
