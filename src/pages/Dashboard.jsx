import React from "react";
import { motion, useInView } from "framer-motion";

const Dashboard = () => {
  return (
    <motion.div 
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="p-6 flex flex-col gap-6 bg-white rounded-[18px]"
    >
      <HeaderSection />
      <DashboardCards />
      <div className="flex gap-6">
        <WordsUsedCounter />
        <TopTools />
      </div>
      <WebsiteUsage />
    </motion.div>
  );
};

const HeaderSection = () => {
  const ref = React.useRef(null);
  const isInView = useInView(ref, { once: true });

  return (
    <motion.div 
      ref={ref}
      initial={{ opacity: 0, y: 20 }}
      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
      transition={{ duration: 0.6 }}
      className="flex flex-col gap-3"
    >
      <h1 className="text-2xl font-medium text-[#454545]">Hi Alvaro,</h1>
      <p className="text-sm text-[#888888]">
        Comprehensive List of Schools Enrolled in the website
      </p>
    </motion.div>
  );
};

const DashboardCards = () => {
  const ref = React.useRef(null);
  const isInView = useInView(ref, { once: true });

  const cardVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: (index) => ({
      opacity: 1,
      y: 0,
      transition: {
        delay: index * 0.1,
        duration: 0.5,
      },
    }),
  };

  const cards = [
    { title: "Active Users", value: "431" },
    { title: "Free Users", value: "3211" },
    { title: "Registered Users", value: "1128" },
    { 
      title: "Active Users", 
      value: "431", 
      filters: ["All", "Basic", "Professional"] 
    },
    { 
      title: "New Users", 
      value: "311", 
      periods: ["Day", "Week", "Month", "Year"] 
    }
  ];

  return (
    <div ref={ref} className="flex gap-6">
      {cards.map((card, index) => (
        <motion.div
          key={index}
          custom={index}
          variants={cardVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="w-[220px] h-[115px] p-5 flex flex-col gap-1 items-center text-center justify-center bg-[#FBFCFC] rounded-xl relative"
        >
          {card.filters && (
            <div className="absolute left-[14px] top-[12px] flex items-center gap-2.5">
              {card.filters.map((filter, i) => (
                <p 
                  key={i} 
                  className={`text-xs ${filter === "Professional" ? "text-[#0052CC] underline" : "text-[#888888]"} cursor-pointer`}
                >
                  {filter}
                </p>
              ))}
            </div>
          )}
          {card.periods && (
            <div className="absolute left-[14px] top-[12px] flex items-center gap-2.5">
              {card.periods.map((period, i) => (
                <p 
                  key={i} 
                  className={`text-xs ${period === "Month" ? "text-[#0052CC] underline" : "text-[#888888]"} cursor-pointer`}
                >
                  {period}
                </p>
              ))}
            </div>
          )}
          <h2 className="text-2xl font-medium text-[#5D5D5D]">{card.value}</h2>
          <p className="text-sm text-[#888888]">{card.title}</p>
        </motion.div>
      ))}
    </div>
  );
};

const WordsUsedCounter = () => {
  const ref = React.useRef(null);
  const isInView = useInView(ref, { once: true });

  const periods = ["Day", "Week", "Month", "Year"];

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, x: -20 }}
      animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }}
      transition={{ duration: 0.6 }}
      className="min-w-[463px] flex flex-col justify-between gap-6"
    >
      <div className="w-full h-[292px] p-5 flex flex-col gap-[51px] bg-[#FBFCFC] rounded-xl">
        <div className="w-fit p-[10px] flex gap-[14px] bg-white rounded-xl">
          {periods.map((period, index) => (
            <div 
              key={index} 
              className={`w-fit px-3.5 py-3 text-[15px] text-[#888888] ${index === 0 ? "bg-[#FBFCFC]" : ""} rounded-xl leading-[16px] cursor-pointer`}
            >
              {period}
            </div>
          ))}
        </div>
        <motion.div
          initial={{ scale: 0.8 }}
          animate={isInView ? { scale: 1 } : { scale: 0.8 }}
          transition={{ delay: 0.3, duration: 0.5 }}
          className="w-full flex flex-col items-center gap-3 text-center"
        >
          <h1 className="text-[48px] font-medium text-[#0052CC]">3211</h1>
          <p className="text-sm text-[#888888]">Words Used</p>
        </motion.div>
      </div>
      <div className="w-full flex gap-5 justify-between">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ delay: 0.4, duration: 0.5 }}
          className="w-full h-[140px] p-4 flex flex-col items-center justify-center text-center gap-[7px] bg-[#FBFCFC] rounded-xl"
        >
          <p className="text-lg font-medium text-[#5D5D5D]">
            Diseñador de <br /> tareas
          </p>
          <p className="text-sm text-[#888888]">Most Used</p>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ delay: 0.5, duration: 0.5 }}
          className="w-full h-[140px] p-4 flex flex-col items-center justify-center text-center gap-[7px] bg-[#FBFCFC] rounded-xl"
        >
          <p className="text-lg font-medium text-[#5D5D5D]">
            Atención a la <br /> Diversidad
          </p>
          <p className="text-sm text-[#888888]">Least Used</p>
        </motion.div>
      </div>
    </motion.div>
  );
};

const TopTools = () => {
  const ref = React.useRef(null);
  const isInView = useInView(ref, { once: true });

  const itemVariants = {
    hidden: { opacity: 0, x: 20 },
    visible: (index) => ({
      opacity: 1,
      x: 0,
      transition: {
        delay: index * 0.1,
        duration: 0.5,
      },
    }),
  };

  const toolItems = Array(5).fill({
    name: "Colección de Imágenes",
    usageCount: "5010",
    percentage: "10"
  });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, x: 20 }}
      animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 20 }}
      transition={{ duration: 0.6 }}
      className="w-full p-5 flex flex-col gap-4 bg-[#FBFCFC] rounded-xl"
    >
      <h1 className="text-[20px] font-medium text-[#5D5D5D]">
        Top 5 Most used tools
      </h1>
      {toolItems.map((item, index) => (
        <motion.div
          key={index}
          custom={index}
          variants={itemVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="w-full p-4 flex items-center justify-between bg-white rounded-xl"
        >
          <p className="text-[#6D6D6D] leading-none">{item.name}</p>
          <div className="flex items-center gap-3">
            <div className="px-[18px] py-2 text-xs text-[#5D5D5D] bg-[#FAFBFD] rounded-full">
              {item.usageCount} Times Used
            </div>
            <div className="px-[18px] py-1.5 flex items-center gap-1 text-xs text-[#5D5D5D] bg-[#FAFBFD] rounded-full">
              {item.percentage}% <ArrowUpGreen />
            </div>
          </div>
        </motion.div>
      ))}
    </motion.div>
  );
};

const WebsiteUsage = () => {
  const ref = React.useRef(null);
  const isInView = useInView(ref, { once: true });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 20 }}
      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
      transition={{ duration: 0.6 }}
      className="w-full p-5 flex flex-col gap-4 bg-[#FBFCFC] rounded-xl"
    >
      <div className="w-full flex items-center justify-between">
        <h2 className="text-xl font-medium text-[#5D5D5D]">
          Usage of the website
        </h2>
        <div className="w-fit p-[10px] flex gap-[14px] bg-white rounded-xl">
          {["Month", "Today"].map((period, index) => (
            <div
              key={period}
              className={`w-fit px-3.5 py-3 text-[15px] text-[#888888] ${
                index === 0 ? "bg-[#FBFCFC]" : ""
              } rounded-xl leading-[16px] cursor-pointer`}
            >
              {period}
            </div>
          ))}
        </div>
      </div>
      <motion.img
        initial={{ scale: 0.95, opacity: 0 }}
        animate={isInView ? { scale: 1, opacity: 1 } : { scale: 0.95, opacity: 0 }}
        transition={{ delay: 0.2, duration: 0.5 }}
        src="/images/graph.png"
        className="w-full select-none"
        draggable="false"
        alt="Website usage graph"
      />
    </motion.div>
  );
};

const ArrowUpGreen = () => {
  return (
    <svg
      width={19}
      height={19}
      viewBox="0 0 19 19"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M9.5 3.16675V15.8334"
        stroke="#24A600"
        strokeWidth="1.2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M13.4582 7.12505C13.4582 7.12505 10.5429 3.16676 9.49982 3.16675C8.45672 3.16674 5.5415 7.12508 5.5415 7.12508"
        stroke="#24A600"
        strokeWidth="1.2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};

export default Dashboard;