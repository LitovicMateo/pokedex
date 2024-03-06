import React, { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";

const Wrapper = ({ children }: { children: React.ReactNode }) => {

    const [height, setHeight] = useState<number | 'fit'>('fit')
    const containerRef = useRef<HTMLDivElement | null>(null);

    console.log(height);
    
    useEffect(() => {
      if (containerRef.current) {
        const resizeObserver = new ResizeObserver((entries) => {
          const observedHeight = entries[0].contentRect.height + 30;
          setHeight(observedHeight)
        })

        resizeObserver.observe(containerRef.current);

        return () => {
          resizeObserver.disconnect();
        }
      }
    }, [])

    return (
        <motion.div style={{height}} animate={{height}} transition={{duration: 0.2}} className="w-full rounded-lg shadow-lg shadow-[#759171]  bg-gradient-to-br from-[#A5CD9E] to-[#9EC598]">
            <div className="p-4 mx-auto pb-6 flex-col h-fit max-h-[600px] w-full justify-center items-center gap-6 flex" ref={containerRef}>{children}</div>
        </motion.div>
    );
};

export default Wrapper;
