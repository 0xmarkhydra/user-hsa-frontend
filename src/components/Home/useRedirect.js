import { useRouter } from "next/navigation";

const useRedirect = () => {
  const router = useRouter();
  const redirect = (pathName) => {
    console.log(pathName);
    
    router.push(pathName);
  };

  return { redirect };
};

export default useRedirect;