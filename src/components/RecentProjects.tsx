"use client";

import { FaLocationArrow } from "react-icons/fa6";
import { PinContainer } from "./ui/Pin";
import Image from "next/image";

const projects = [
  {
    id: 1,
    title: "CRUD (Create Read Update Delete)",
    des: "Membuat Landing page untuk CRUD beserta fungsinya dengan menggunakan ",
    img: "/Project_1.png",
    iconLists: ["/html.png", "/css.png", "/boost.png"],
    link: "",
  },
  {
    id: 2,
    title: "Pantiasuhan Landing page",
    des: "Membuat desain Landing page pantiasuhan sebagai tugas P5",
    img: "/Project_2.png",
    iconLists: ["/html.png", "/css.png", "/boost.png"],
    link: "",
  },
  {
    id: 3,
    title: "Login/Register Page",
    des: "Membuat Login page dan register page dengan menggunakan HTML CSS dan Boostrap",
    img: "/Project_3.png",
    iconLists: ["/html.png", "/css.png", "/boost.png"],
    link: "",
  },
  {
    id: 4,
    title: "Portofolio Web design ",
    des: "Membuat desain web Portofolio dengan Next js dan di deploy menggunakan Vercel",
    img: "/Project_4.png",
    iconLists: ["/next.svg", "/tail.svg"],
    link: "https://biodata-tikr.vercel.app/",
  },
];

const RecentProjects = () => {
  return (
    <div className="py-20" id="projects">
      <h1 className="heading">
        A small selection of{" "}
        <span className="text-purple">recent projects</span>
      </h1>
      <div className="flex flex-wrap items-center justify-center p-4 gap-16 mt-10">
        {projects.map((item) => (
          <div
            className="lg:min-h-[32.5rem] h-[25rem] flex items-center justify-center sm:w-96 w-[80vw]"
            key={item.id}
          >
            <PinContainer title="go" href={item.link}>
              <a href={item.link} className="block">
                <div className="relative flex items-center justify-center sm:w-96 w-[80vw] overflow-hidden h-[20vh] lg:h-[30vh] mb-10">
                  <div
                    className="relative w-full h-full overflow-hidden lg:rounded-3xl"
                    style={{ backgroundColor: "#13162D" }}
                  >
                    <Image
                      src="/bg.png"
                      alt="bgimg"
                      width={500}
                      height={300}
                      sizes="100vw"
                      className="w-full h-full object-cover"
                      style={{ width: "100%", height: "auto" }}
                    />
                  </div>
                  <Image
                    src={item.img}
                    alt="cover"
                    width={500}
                    height={300}
                    className="z-10 absolute bottom-0"
                  />
                </div>

                <h1 className="font-bold lg:text-2xl md:text-xl text-base line-clamp-1">
                  {item.title}
                </h1>

                <p
                  className="lg:text-xl lg:font-normal font-light text-sm line-clamp-2"
                  style={{
                    color: "#BEC1DD",
                    margin: "1vh 0",
                  }}
                >
                  {item.des}
                </p>

                <div className="flex items-center justify-between mt-7 mb-3">
                  <div className="flex items-center">
                    {item.iconLists.map((icon, index) => (
                      <div
                        key={index}
                        className="border border-white/[.2] rounded-full bg-black lg:w-10 lg:h-10 w-8 h-8 flex justify-center items-center"
                        style={{
                          transform: `translateX(-${5 * index + 2}px)`,
                        }}
                      >
                        <Image
                          src={icon}
                          alt="icon5"
                          width={50}
                          height={50}
                          className="p-2"
                        />
                      </div>
                    ))}
                  </div>

                  <div className="flex justify-center items-center">
                    <p className="flex lg:text-xl md:text-xs text-sm text-purple">
                      Check Live Site
                    </p>
                    <FaLocationArrow className="ms-3" color="#CBACF9" />
                  </div>
                </div>
              </a>
            </PinContainer>
          </div>
        ))}
      </div>
    </div>
  );
};

export default RecentProjects;
