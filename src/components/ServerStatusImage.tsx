import { useEffect, useState } from "react";
import Image from "next/image";

const ServerStatusImage = () => {
  const [serverStatus, setServerStatus] = useState<true | false>(false);

  useEffect(() => {
    const checkServerStatus = async () => {
      try {
        const response = await fetch("/api/pingServer");
        if (response.ok) {
          setServerStatus(true);
        } else {
          setServerStatus(false);
        }
      } catch (error) {
        console.error("Error checking server status:", error);
        setServerStatus(false);
      }
    };

    checkServerStatus();
    const interval = setInterval(checkServerStatus, 200000); //33 ish minutes (2000 seconds)

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="flex flex-col items-center space-y-4 md:flex-row md:space-y-0 md:space-x-4">
      {serverStatus === true ? (
        <Image
          src="/images/server_on.gif"
          alt="Server Up"
          width={100}
          height={474}
          style={{ objectFit: "cover" }}
          quality={100}
        />
      ) : serverStatus === false ? (
        <Image
          src="/images/server_down.gif"
          alt="Server Down"
          width={100}
          height={474}
          style={{ objectFit: "cover" }}
          quality={100}
        />
      ) : (
        <></>
      )}
    </div>
  );
};

export default ServerStatusImage;
