"use client";

import React from "react";
import { AnimatePresence, motion } from "framer-motion";

interface CardProps {
  title: string;
  icon: React.ReactNode;
  children?: React.ReactNode;
  des: string;
}

interface IconProps extends React.SVGProps<SVGSVGElement> {
  className?: string;
}

interface AceternityIconProps {
  order: string;
}

const Icon = ({ className, ...rest }: IconProps) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      strokeWidth="1.5"
      stroke="currentColor"
      className={className}
      {...rest}
    >
      <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v12m6-6H6" />
    </svg>
  );
};

const AceternityIcon = ({ order }: AceternityIconProps) => {
  return (
    <div>
      <button className="relative inline-flex overflow-hidden rounded-full p-[1px]">
        <span className="absolute inset-[-1000%] animate-[spin_2s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,#E2CBFF_0%,#393BB2_50%,#E2CBFF_100%)]" />
        <span className="inline-flex h-full w-full cursor-pointer items-center justify-center rounded-full bg-slate-950 px-5 py-2 text-purple backdrop-blur-3xl font-bold text-2xl">
          {order}
        </span>
      </button>
    </div>
  );
};

const Card = ({ title, icon, children, des }: CardProps) => {
  const [hovered, setHovered] = React.useState(false);

  return (
    <div
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      // [1] Tambahkan class transition di sini:
      className="border border-black/[0.2] group/canvas-card flex items-center justify-center dark:border-white/[0.2] max-w-sm w-full mx-auto p-4 relative lg:h-[35rem] rounded-3xl transition-all duration-500"
      // [2] Ubah style background di sini:
      style={{
        background: hovered
          ? "linear-gradient(90deg, rgba(44,0,112,1) 0%, rgba(25,17,59,1) 100%)" // Warna saat hover
          : "linear-gradient(90deg, rgba(4,7,29,1) 0%, rgba(12,14,35,1) 100%)", // Warna default
      }}
    >
      <Icon className="absolute h-10 w-10 -top-3 -left-3 dark:text-white text-black opacity-30" />
      <Icon className="absolute h-10 w-10 -bottom-3 -left-3 dark:text-white text-black opacity-30" />
      <Icon className="absolute h-10 w-10 -top-3 -right-3 dark:text-white text-black opacity-30" />
      <Icon className="absolute h-10 w-10 -bottom-3 -right-3 dark:text-white text-black opacity-30" />

      <AnimatePresence>
        {hovered && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="h-full w-full absolute inset-0"
          >
            {children}
          </motion.div>
        )}
      </AnimatePresence>

      <div className="relative z-20 px-10">
        <div className="text-center group-hover/canvas-card:-translate-y-4 absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%] group-hover/canvas-card:opacity-0 transition duration-200 min-w-40 mx-auto flex items-center justify-center">
          {icon}
        </div>
        <h2 className="dark:text-white text-center text-3xl opacity-0 group-hover/canvas-card:opacity-100 relative z-10 text-black mt-4 font-bold group-hover/canvas-card:text-white group-hover/canvas-card:-translate-y-2 transition duration-200">
          {title}
        </h2>
        <p
          className="text-xs opacity-0 group-hover/canvas-card:opacity-100 relative z-10 mt-4 group-hover/canvas-card:text-white text-center group-hover/canvas-card:-translate-y-2 transition duration-200"
          style={{ color: "#E4ECFF" }}
        >
          {des}
        </p>
      </div>
    </div>
  );
};

const Approach = () => {
  return (
    <section className="w-full py-20">
      <h1 className="heading">
        My <span className="text-purple">approach</span>
      </h1>
      <div className="my-20 flex flex-col lg:flex-row items-center justify-center w-full gap-4">
        <Card
          title="Planning & Strategy"
          icon={<AceternityIcon order="Phase 1" />}
          des="Kita akan berkolaborasi untuk memetakan tujuan situs web Anda, target audiens, dan fungsi utama. Kita akan membahas hal-hal seperti struktur situs, navigasi, dan kebutuhan konten."
        />
        <Card
          title="Development & Progress Update"
          icon={<AceternityIcon order="Phase 2" />}
          des="Setelah kita menyepakati rencana, saya memutar playlist lofi saya dan mulai coding. Dari sketsa awal hingga kode yang sudah halus, saya akan terus memberi Anda pembaruan di setiap tahap."
        />
        <Card
          title="Development & Launch"
          icon={<AceternityIcon order="Phase 3" />}
          des="Di sinilah keajaiban terjadi! Berdasarkan desain yang telah disetujui, saya akan menerjemahkan semuanya ke dalam kode fungsional, membangun situs web Anda dari nol."
        />
      </div>
    </section>
  );
};

export default Approach;
