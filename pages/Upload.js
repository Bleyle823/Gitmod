import { useState, useRef } from "react";
import Head from "next/head";
import Image from "next/image";
import Files from "../components/Files";

import { motion } from 'framer-motion';
import styles from '../styles';
import { fadeIn } from '../utils/motion';




export default function Home() {
  const [file, setFile] = useState("");
  const [cid, setCid] = useState("");
  const [uploading, setUploading] = useState(false);

  const inputFile = useRef(null);

  const uploadFile = async (fileToUpload) => {
    try {
      setUploading(true);
      const formData = new FormData();
      formData.append("file", fileToUpload, { filename: fileToUpload.name });
      const res = await fetch("/api/files", {
        method: "POST",
        body: formData,
      });
      const ipfsHash = await res.text();
      setCid(ipfsHash);
      setUploading(false);
    } catch (e) {
      console.log(e);
      setUploading(false);
      alert("Trouble uploading file");
    }
  };

  const handleChange = (e) => {
    setFile(e.target.files[0]);
    uploadFile(e.target.files[0]);
  };

  const loadRecent = async () => {
    try {
      const res = await fetch("/api/files");
      const json = await res.json();
      setCid(json.ipfs_pin_hash);
    } catch (e) {
      console.log(e);
      alert("trouble loading files");
    }
  };

  return (
    <>
      
      <main>
      <motion.div
      variants={fadeIn('left', 'tween', 0.2, 1)}
      className="flex-[0.5] lg:max-w-[400px] flex justify-end flex-col gradient-05 sm:p-8 p-4 rounded-[32px] border-[1px] border-[#6A6A6A] relative"
    >
      <div className="feedback-gradient" />
      
<div className="mb-40  place-items-center grid grid-cols-1 grid-rows-4 gap-7">
<div className="hero">
              <div className="copy">
               
                <input
                  type="file"
                  id="file"
                  ref={inputFile}
                  onChange={handleChange}
                  style={{ display: "none" }}
                />
                 <div className="transition relative  backdrop-blur bg-white/90  mb-10  w-[120px] h-[50px] flex justify-center items-center mx-2 rounded-xl cursor-pointer">
                  <button onClick={loadRecent} className="btn btn-light">
                    Load recent
                  </button>
                  </div>
                  
                  <div className="mt-10 transition relative  backdrop-blur bg-white/90    w-[120px] h-[50px] flex justify-center items-center mx-2 rounded-xl cursor-pointer">
                  <button
                    disabled={uploading}
                    onClick={() => inputFile.current.click()}
                    className="btn"
                  >
                    {uploading ? "Uploading..." : "Upload"}
                  </button>
                  </div>
                </div>
                {cid && (
                  <div className="file-list">
                    <Files cid={cid} />
                  </div>
                )}
              </div>
             
            </div>
 
    

<div className="">
          
        </div>
    
      {/* <p className="mt-[24px] font-normal sm:text-[24px] text-[18px] sm:leading-[45.6px] leading-[39.6px] text-white">
        “With the development of today's technology, metaverse is very
        useful for today's work, or can be called web 3.0. by using
        metaverse you can use it as anything”
      </p> */}
    </motion.div>
        

      </main>
    </>
  );
}
