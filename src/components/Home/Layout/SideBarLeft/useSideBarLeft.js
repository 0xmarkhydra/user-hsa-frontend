import { useRouter } from "next/navigation";

const useSideBarLeft = () => {
  const router = useRouter();
  const redirect = (pathName) => {
    router.push(pathName);
  };

  return { redirect };
};

export default useSideBarLeft;
